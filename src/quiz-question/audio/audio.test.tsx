import React from "react";
import { render, screen, within } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import { Audio } from "./audio";

describe("<Audio />", () => {
	beforeEach(() => {
		// Mock HTMLMediaElement methods that aren't implemented in jsdom
		window.HTMLMediaElement.prototype.play = jest
			.fn()
			.mockImplementation(() => Promise.resolve());
		window.HTMLMediaElement.prototype.pause = jest.fn();
	});

	afterEach(() => {
		jest.restoreAllMocks();
	});

	it("should render an audio element with custom controls", () => {
		render(<Audio src="test-audio.mp3" aria-label="Audio player" />);

		const figure = screen.getByRole("figure");
		const audio = within(figure).getByLabelText("Audio player");
		expect(audio).toBeInTheDocument();
		expect(audio).toHaveAttribute("src", "test-audio.mp3");

		// Check for custom controls
		expect(screen.getByRole("button", { name: "Play" })).toBeInTheDocument();
		expect(
			screen.getByRole("slider", { name: "Seek audio" }),
		).toBeInTheDocument();
	});

	it("should toggle play/pause when button is clicked", async () => {
		const user = userEvent.setup();
		render(<Audio src="test-audio.mp3" aria-label="Audio player" />);

		const playButton = screen.getByRole("button", { name: "Play" });
		expect(playButton).toBeInTheDocument();

		await user.click(playButton);

		// After clicking play, button should show pause
		expect(screen.getByRole("button", { name: "Pause" })).toBeInTheDocument();
	});
});
