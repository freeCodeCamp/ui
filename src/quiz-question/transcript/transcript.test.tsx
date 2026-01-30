import React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import { Transcript } from "./transcript";

const baseProps = {
	transcript: "<p>Sample transcript text</p>",
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

	it("should render HTML with bold tags and paragraphs", async () => {
		const transcript = `<p><b>Tom:</b> Hello there!</p><p><b>Maria:</b> Hi Tom, how are you?</p>`;
		render(<Transcript transcript={transcript} />);

		await userEvent.click(screen.getByText("Transcript"));

		/* eslint-disable testing-library/no-node-access */
		const tomElement = screen.getByText("Tom:");
		expect(tomElement).toBeVisible();
		expect(tomElement.tagName).toBe("B");

		const tomP = tomElement.parentElement;
		expect(tomP?.tagName).toBe("P");
		expect(tomP?.textContent).toContain("Tom:");
		expect(tomP?.textContent).toContain("Hello there!");

		const mariaElement = screen.getByText("Maria:");
		expect(mariaElement).toBeVisible();
		expect(mariaElement.tagName).toBe("B");

		const mariaP = mariaElement.parentElement;
		expect(mariaP?.tagName).toBe("P");
		expect(mariaP?.textContent).toContain("Maria:");
		expect(mariaP?.textContent).toContain("Hi Tom, how are you?");
		/* eslint-enable testing-library/no-node-access */
	});

	it("should render HTML in dialogue with ruby elements", async () => {
		const transcript = `<p><b>Teacher:</b> This is <ruby>中文<rt>zhōngwén</rt></ruby></p>`;
		render(<Transcript transcript={transcript} />);

		await userEvent.click(screen.getByText("Transcript"));

		const teacherElement = screen.getByText("Teacher:");
		expect(teacherElement.tagName).toBe("B");

		/* eslint-disable testing-library/no-node-access */
		const rtElement = screen.getByText("zhōngwén");
		expect(rtElement.tagName).toBe("RT");
		const rubyElement = rtElement.parentElement;
		expect(rubyElement?.tagName).toBe("RUBY");
		expect(rubyElement?.textContent).toContain("中文");
		expect(rubyElement?.textContent).toContain("zhōngwén");
		/* eslint-enable testing-library/no-node-access */
	});

	it("should sanitize dangerous HTML tags", async () => {
		const transcript = `<p onClick="alert('malicious')">Safe text</p>`;
		render(<Transcript transcript={transcript} />);

		await userEvent.click(screen.getByText("Transcript"));

		const safeTextElement = screen.getByText("Safe text");
		expect(safeTextElement).toBeInTheDocument();
		expect(safeTextElement.tagName).toBe("P");
		expect(safeTextElement).not.toHaveAttribute("onClick");
	});
});
