import React, { useRef, useState, useEffect, useCallback } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCirclePlay, faCirclePause } from "@fortawesome/free-solid-svg-icons";

interface AudioProps {
	src: string;
	"aria-label": string;
	className?: string;
	startTime?: number;
	finishTime?: number;
}

export const Audio = ({
	src,
	"aria-label": ariaLabel,
	className = "",
	startTime = 0,
	finishTime,
}: AudioProps) => {
	const audioRef = useRef<HTMLAudioElement>(null);
	const [isPlaying, setIsPlaying] = useState(false);
	const [currentTime, setCurrentTime] = useState(0);
	const [duration, setDuration] = useState(0);
	const finishTimerRef = useRef<number>();

	// Calculate segment duration
	const segmentDuration =
		finishTime !== undefined ? finishTime - startTime : duration - startTime;

	// Reset audio to start position
	const resetAudio = useCallback(() => {
		const audio = audioRef.current;
		if (!audio) return;

		if (finishTimerRef.current) {
			clearTimeout(finishTimerRef.current);
			finishTimerRef.current = undefined;
		}

		audio.pause();
		audio.currentTime = startTime;
		setIsPlaying(false);
		setCurrentTime(0); // Relative time
	}, [startTime]);

	useEffect(() => {
		const audio = audioRef.current;
		if (!audio) return;

		const handleLoadedMetadata = () => {
			// Set initial position and duration
			audio.currentTime = startTime;
			setDuration(audio.duration);
			setCurrentTime(0); // Start at relative 0
		};

		const handleTimeUpdate = () => {
			// Calculate relative time (0 = startTime)
			const relativeTime = audio.currentTime - startTime;
			setCurrentTime(relativeTime);

			// Check if we've reached the finish time
			if (finishTime !== undefined && audio.currentTime >= finishTime) {
				resetAudio();
			}
		};

		const handleEnded = () => {
			resetAudio();
		};

		audio.addEventListener("loadedmetadata", handleLoadedMetadata);
		audio.addEventListener("timeupdate", handleTimeUpdate);
		audio.addEventListener("ended", handleEnded);

		return () => {
			audio.removeEventListener("loadedmetadata", handleLoadedMetadata);
			audio.removeEventListener("timeupdate", handleTimeUpdate);
			audio.removeEventListener("ended", handleEnded);
			if (finishTimerRef.current) {
				clearTimeout(finishTimerRef.current);
			}
		};
	}, [startTime, finishTime, resetAudio]);

	const togglePlay = () => {
		const audio = audioRef.current;
		if (!audio) return;

		if (isPlaying) {
			audio.pause();
			setIsPlaying(false);
		} else {
			void audio.play();
			setIsPlaying(true);
		}
	};

	const handleSeek = (e: React.ChangeEvent<HTMLInputElement>) => {
		const audio = audioRef.current;
		if (!audio) return;

		// Relative time from slider (0 = startTime)
		const relativeTime = parseFloat(e.target.value);
		// Convert to absolute time
		const absoluteTime = startTime + relativeTime;

		audio.currentTime = absoluteTime;
		setCurrentTime(relativeTime);
	};

	const formatTime = (time: number) => {
		if (isNaN(time)) return "0:00";
		const minutes = Math.floor(time / 60);
		const seconds = Math.floor(time % 60);
		return `${minutes}:${seconds.toString().padStart(2, "0")}`;
	};

	// Build audio source with media fragment if startTime is specified
	const audioSrc = startTime > 0 ? `${src}#t=${startTime}` : src;

	return (
		<figure className={className}>
			{/* Transcript is added separately in a different component */}
			{/* eslint-disable-next-line jsx-a11y/media-has-caption */}
			<audio ref={audioRef} src={audioSrc} aria-label={ariaLabel}></audio>
			<div className="flex items-center gap-3 bg-background-primary px-2.5 py-2 rounded border-x-4 border-t-4 border-b-4 border-background-tertiary">
				<button
					onClick={togglePlay}
					className="text-foreground-tertiary bg-transparent border-none p-0 scale-75 transition-transform"
					aria-label={isPlaying ? "Pause" : "Play"}
				>
					<FontAwesomeIcon
						icon={isPlaying ? faCirclePause : faCirclePlay}
						size="3x"
						className="fa-width-auto"
					/>
				</button>
				<div className="flex-1 flex items-center gap-2">
					<span className="text-foreground-primary text-sm min-w-[2.5rem]">
						{formatTime(currentTime)}
					</span>
					<input
						type="range"
						min="0"
						max={segmentDuration}
						value={currentTime}
						onChange={handleSeek}
						className="flex-1 h-1 bg-background-tertiary rounded appearance-none cursor-pointer [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:w-3 [&::-webkit-slider-thumb]:h-3 [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-foreground-tertiary [&::-moz-range-thumb]:w-3 [&::-moz-range-thumb]:h-3 [&::-moz-range-thumb]:rounded-full [&::-moz-range-thumb]:bg-foreground-tertiary [&::-moz-range-thumb]:border-0 [&::-webkit-slider-track]:bg-background-tertiary [&::-moz-range-track]:bg-background-tertiary"
						aria-label="Seek audio"
					/>
					<span className="text-foreground-primary text-sm min-w-[2.5rem]">
						{formatTime(segmentDuration)}
					</span>
				</div>
			</div>
		</figure>
	);
};
