import React from "react";
import { render, screen, within, act, fireEvent } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { vi, type Mock } from "vitest";

import { Audio } from "./audio";

describe("<Audio />", () => {
	beforeEach(() => {
		// Mock HTMLMediaElement methods that aren't implemented in jsdom
		window.HTMLMediaElement.prototype.play = vi
			.fn()
			.mockImplementation(() => Promise.resolve());
		window.HTMLMediaElement.prototype.pause = vi.fn();
	});

	afterEach(() => {
		vi.restoreAllMocks();
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

	it("should pause when pause button is clicked", async () => {
		const user = userEvent.setup();
		const pauseMock = vi.spyOn(HTMLMediaElement.prototype, "pause") as Mock;

		render(<Audio src="test-audio.mp3" aria-label="Audio player" />);

		const playButton = screen.getByRole("button", { name: "Play" });
		await user.click(playButton);

		// Now pause
		const pauseButton = screen.getByRole("button", { name: "Pause" });
		await user.click(pauseButton);

		expect(pauseMock).toHaveBeenCalled();
		expect(screen.getByRole("button", { name: "Play" })).toBeInTheDocument();
	});

	it("should update currentTime display when timeupdate event fires", () => {
		let currentTime = 10; // Start at startTime

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
			<Audio src="test-audio.mp3" aria-label="Audio player" startTime={10} />,
		);

		const audio = screen.getByLabelText("Audio player") as HTMLAudioElement;

		// Load metadata first
		act(() => {
			audio.dispatchEvent(new Event("loadedmetadata"));
		});

		// Simulate audio playing and time updating
		currentTime = 15; // 5 seconds into playback
		act(() => {
			audio.dispatchEvent(new Event("timeupdate"));
		});

		// Should display relative time (5 seconds from start)
		expect(screen.getByText("0:05")).toBeInTheDocument();
	});

	it("should reset audio when finishTime is reached", () => {
		let currentTime = 10;
		const pauseMock = vi.spyOn(HTMLMediaElement.prototype, "pause") as Mock;

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
			<Audio
				src="test-audio.mp3"
				aria-label="Audio player"
				startTime={10}
				finishTime={20}
			/>,
		);

		const audio = screen.getByLabelText("Audio player") as HTMLAudioElement;

		// Load metadata first
		act(() => {
			audio.dispatchEvent(new Event("loadedmetadata"));
		});

		// Simulate reaching finishTime
		currentTime = 20;
		act(() => {
			audio.dispatchEvent(new Event("timeupdate"));
		});

		// Should pause and reset
		expect(pauseMock).toHaveBeenCalled();
		expect(currentTime).toBe(10); // Reset to startTime
	});

	it("should reset audio when ended event fires", () => {
		let currentTime = 10;
		const pauseMock = vi.spyOn(HTMLMediaElement.prototype, "pause") as Mock;

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
			<Audio src="test-audio.mp3" aria-label="Audio player" startTime={10} />,
		);

		const audio = screen.getByLabelText("Audio player") as HTMLAudioElement;

		// Load metadata first
		act(() => {
			audio.dispatchEvent(new Event("loadedmetadata"));
		});

		// Simulate audio ending
		act(() => {
			audio.dispatchEvent(new Event("ended"));
		});

		// Should pause and reset
		expect(pauseMock).toHaveBeenCalled();
		expect(currentTime).toBe(10); // Reset to startTime
	});

	it("should seek to new position when slider is changed", async () => {
		let currentTime = 10;

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
			<Audio src="test-audio.mp3" aria-label="Audio player" startTime={10} />,
		);

		const audio = screen.getByLabelText("Audio player") as HTMLAudioElement;
		const slider = screen.getByRole("slider", {
			name: "Seek audio",
		}) as HTMLInputElement;

		// Load metadata first
		act(() => {
			audio.dispatchEvent(new Event("loadedmetadata"));
		});

		// Seek to 5 seconds relative (15 seconds absolute)
		fireEvent.change(slider, { target: { value: "5" } });

		// currentTime should be updated to startTime + 5 = 15
		expect(currentTime).toBe(15);
	});

	it("should format time correctly", () => {
		Object.defineProperty(HTMLMediaElement.prototype, "duration", {
			get: () => 125, // 2:05
			configurable: true,
		});

		render(
			<Audio src="test-audio.mp3" aria-label="Audio player" startTime={0} />,
		);

		const audio = screen.getByLabelText("Audio player") as HTMLAudioElement;

		// Load metadata to set duration
		act(() => {
			audio.dispatchEvent(new Event("loadedmetadata"));
		});

		// Should display 2:05 for 125 seconds
		expect(screen.getByText("2:05")).toBeInTheDocument();
	});

	it("should handle NaN time values gracefully", () => {
		Object.defineProperty(HTMLMediaElement.prototype, "duration", {
			get: () => NaN, // Invalid duration
			configurable: true,
		});

		render(<Audio src="test-audio.mp3" aria-label="Audio player" />);

		const audio = screen.getByLabelText("Audio player") as HTMLAudioElement;

		// Load metadata with NaN duration
		act(() => {
			audio.dispatchEvent(new Event("loadedmetadata"));
		});

		// Should display 0:00 when time is NaN (both current time and duration)
		const timeDisplays = screen.getAllByText("0:00");
		expect(timeDisplays).toHaveLength(2); // Current time and duration
	});

	it("should calculate segment duration correctly without finishTime", () => {
		Object.defineProperty(HTMLMediaElement.prototype, "duration", {
			get: () => 100,
			configurable: true,
		});

		render(
			<Audio src="test-audio.mp3" aria-label="Audio player" startTime={20} />,
		);

		const audio = screen.getByLabelText("Audio player") as HTMLAudioElement;

		// Load metadata
		act(() => {
			audio.dispatchEvent(new Event("loadedmetadata"));
		});

		// Segment duration should be total duration - startTime = 100 - 20 = 80
		const slider = screen.getByRole("slider", { name: "Seek audio" });
		expect(slider).toHaveAttribute("max", "80");
	});

	it("should not reset when finishTime is not reached", () => {
		let currentTime = 10;
		const pauseMock = vi.spyOn(HTMLMediaElement.prototype, "pause") as Mock;

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
			<Audio
				src="test-audio.mp3"
				aria-label="Audio player"
				startTime={10}
				finishTime={20}
			/>,
		);

		const audio = screen.getByLabelText("Audio player") as HTMLAudioElement;

		// Load metadata first
		act(() => {
			audio.dispatchEvent(new Event("loadedmetadata"));
		});

		pauseMock.mockClear();

		// Update time but don't reach finishTime
		currentTime = 15; // Still before finishTime of 20
		act(() => {
			audio.dispatchEvent(new Event("timeupdate"));
		});

		// Should NOT pause or reset - pause should not be called
		expect(pauseMock).not.toHaveBeenCalled();
		expect(currentTime).toBe(15); // Should remain at 15
	});
});
