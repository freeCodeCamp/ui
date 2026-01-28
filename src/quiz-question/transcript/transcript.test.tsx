import React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import { Transcript } from "./transcript";

const baseProps = {
	transcript: "Sample transcript text",
};

describe("<Transcript />", () => {
	it("should render details and summary elements", () => {
		render(<Transcript {...baseProps} />);
		expect(screen.getByText("Transcript")).toBeVisible();

		const details = screen.getByRole("group", { hidden: true });
		expect(details.tagName).toBe("DETAILS");
		const summary = screen.getByText("Transcript");
		expect(summary.tagName).toBe("SUMMARY");
	});

	it("should render collapsed by default", () => {
		render(<Transcript {...baseProps} />);
		const details = screen.getByRole("group");
		expect(details).not.toHaveAttribute("open");
		expect(screen.getByText("Sample transcript text")).not.toBeVisible();
	});

	it("should toggle open when clicking the summary", async () => {
		render(<Transcript {...baseProps} />);

		const summary = screen.getByText("Transcript");
		await userEvent.click(summary);

		const details = screen.getByRole("group");
		expect(details).toHaveAttribute("open");
		expect(screen.getByText("Sample transcript text")).toBeVisible();
	});

	it("should filter out empty lines", async () => {
		const transcript = `Hello\n\n\nWorld\n  \n`;
		render(<Transcript transcript={transcript} />);

		await userEvent.click(screen.getByText("Transcript"));

		const paragraphs = screen.getAllByText(/Hello|World/);
		expect(paragraphs).toHaveLength(2);
		expect(paragraphs[0]).toHaveTextContent("Hello");
		expect(paragraphs[1]).toHaveTextContent("World");
	});

	it("should render speaker names in bold", async () => {
		const transcript = `Tom: Hello there!\nMaria: Hi Tom, how are you?`;
		render(<Transcript transcript={transcript} />);

		await userEvent.click(screen.getByText("Transcript"));

		const tomElement = screen.getByText("Tom:");
		const mariaElement = screen.getByText("Maria:");
		expect(tomElement.tagName).toBe("B");
		expect(mariaElement.tagName).toBe("B");

		expect(screen.getByText("Hello there!")).toBeInTheDocument();
		expect(screen.getByText("Hi Tom, how are you?")).toBeInTheDocument();
	});
});
