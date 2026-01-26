import React from "react";
import { render, screen, within } from "@testing-library/react";

import { Audio } from "./audio";

describe("<Audio />", () => {
	it("should render an audio element with controls", () => {
		render(<Audio src="test-audio.mp3" aria-label="Audio player" />);

		const figure = screen.getByRole("figure");
		const audio = within(figure).getByLabelText("Audio player");
		expect(audio).toBeInTheDocument();
		expect(audio).toHaveAttribute("controls");
		expect(audio).toHaveAttribute("src", "test-audio.mp3");
	});

	it("should apply aria-label when provided", () => {
		render(<Audio src="test-audio.mp3" aria-label="Question audio" />);

		const figure = screen.getByRole("figure");
		const audio = within(figure).getByLabelText("Question audio");
		expect(audio).toBeInTheDocument();
	});

	it("should apply custom className to figure wrapper", () => {
		render(
			<Audio
				src="test-audio.mp3"
				aria-label="Audio player"
				className="custom-class"
			/>,
		);

		const figure = screen.getByRole("figure");
		expect(figure).toHaveClass("custom-class");
	});

	it("should render fallback text for unsupported browsers", () => {
		render(<Audio src="test-audio.mp3" aria-label="Audio player" />);

		expect(
			screen.getByText("Your browser does not support the audio element."),
		).toBeInTheDocument();
	});
});
