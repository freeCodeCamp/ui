import React from "react";
import { render, screen, within, act } from "@testing-library/react";
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

	it("should render with audio segment when startTime is provided", () => {
		render(
			<Audio src="test-audio.mp3" aria-label="Audio player" startTime={10} />,
		);

		const figure = screen.getByRole("figure");
		const audio = within(figure).getByLabelText("Audio player");

		// Should include media fragment in src
		expect(audio).toHaveAttribute("src", "test-audio.mp3#t=10");
	});

	it("should not include media fragment when startTime is 0", () => {
		render(
			<Audio src="test-audio.mp3" aria-label="Audio player" startTime={0} />,
		);

		const figure = screen.getByRole("figure");
		const audio = within(figure).getByLabelText("Audio player");

		expect(audio).toHaveAttribute("src", "test-audio.mp3");
	});

	it("should display segment duration when finishTime is provided", () => {
		// Mock audio duration
		Object.defineProperty(HTMLMediaElement.prototype, "duration", {
			get: () => 100,
			configurable: true,
		});

		render(
			<Audio
				src="test-audio.mp3"
				aria-label="Audio player"
				startTime={10}
				finishTime={20}
			/>,
		);

		// Segment duration should be 10 seconds (20 - 10)
		const slider = screen.getByRole("slider", { name: "Seek audio" });
		expect(slider).toHaveAttribute("max", "10");
	});

	it("should set audio currentTime to startTime on load", () => {
		let currentTime = 0;

		// Mock audio currentTime as a writable property
		Object.defineProperty(HTMLMediaElement.prototype, "currentTime", {
			get: () => currentTime,
			set: (value) => {
				currentTime = value;
			},
			configurable: true,
		});

		Object.defineProperty(HTMLMediaElement.prototype, "duration", {
			get: () => 100,
			configurable: true,
		});

		render(
			<Audio src="test-audio.mp3" aria-label="Audio player" startTime={15} />,
		);

		// Simulate loadedmetadata event on the audio element
		const audio = screen.getByLabelText("Audio player") as HTMLAudioElement;
		act(() => {
			audio.dispatchEvent(new Event("loadedmetadata"));
		});

		// currentTime should be set to startTime (15) after loadedmetadata
		expect(currentTime).toBe(15);
	});
});
