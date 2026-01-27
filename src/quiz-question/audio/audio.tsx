import React, { useRef, useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCirclePlay, faCirclePause } from "@fortawesome/free-solid-svg-icons";

interface AudioProps {
	src: string;
	"aria-label": string;
	className?: string;
}

export const Audio = ({
	src,
	"aria-label": ariaLabel,
	className = "",
}: AudioProps) => {
	const audioRef = useRef<HTMLAudioElement>(null);
	const [isPlaying, setIsPlaying] = useState(false);
	const [currentTime, setCurrentTime] = useState(0);
	const [duration, setDuration] = useState(0);

	useEffect(() => {
		const audio = audioRef.current;
		if (!audio) return;

		const handleLoadedMetadata = () => {
			setDuration(audio.duration);
		};

		const handleTimeUpdate = () => {
			setCurrentTime(audio.currentTime);
		};

		const handleEnded = () => {
			setIsPlaying(false);
			setCurrentTime(0);
		};

		audio.addEventListener("loadedmetadata", handleLoadedMetadata);
		audio.addEventListener("timeupdate", handleTimeUpdate);
		audio.addEventListener("ended", handleEnded);

		return () => {
			audio.removeEventListener("loadedmetadata", handleLoadedMetadata);
			audio.removeEventListener("timeupdate", handleTimeUpdate);
			audio.removeEventListener("ended", handleEnded);
		};
	}, []);

	const togglePlay = () => {
		const audio = audioRef.current;
		if (!audio) return;

		if (isPlaying) {
			audio.pause();
		} else {
			void audio.play();
		}
		setIsPlaying(!isPlaying);
	};

	const handleSeek = (e: React.ChangeEvent<HTMLInputElement>) => {
		const audio = audioRef.current;
		if (!audio) return;

		const time = parseFloat(e.target.value);
		audio.currentTime = time;
		setCurrentTime(time);
	};

	const formatTime = (time: number) => {
		if (isNaN(time)) return "0:00";
		const minutes = Math.floor(time / 60);
		const seconds = Math.floor(time % 60);
		return `${minutes}:${seconds.toString().padStart(2, "0")}`;
	};

	return (
		<figure className={className}>
			{/* Transcript is added separately in a different component */}
			{/* eslint-disable-next-line jsx-a11y/media-has-caption */}
			<audio ref={audioRef} src={src} aria-label={ariaLabel}></audio>
			<div className="flex items-center gap-3 bg-background-primary px-2.5 py-2 w-full max-w-md rounded border-x-4 border-t-4 border-b-4 border-background-tertiary">
				<button
					onClick={togglePlay}
					className="text-foreground-tertiary bg-transparent border-none p-0 scale-75 transition-transform"
					aria-label={isPlaying ? "Pause" : "Play"}
				>
					<FontAwesomeIcon
						icon={isPlaying ? faCirclePause : faCirclePlay}
						size="3x"
					/>
				</button>
				<div className="flex-1 flex items-center gap-2">
					<span className="text-foreground-primary text-sm min-w-[2.5rem]">
						{formatTime(currentTime)}
					</span>
					<input
						type="range"
						min="0"
						max={duration}
						value={currentTime}
						onChange={handleSeek}
						className="flex-1 h-1 bg-background-tertiary rounded appearance-none cursor-pointer [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:w-3 [&::-webkit-slider-thumb]:h-3 [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-foreground-tertiary [&::-moz-range-thumb]:w-3 [&::-moz-range-thumb]:h-3 [&::-moz-range-thumb]:rounded-full [&::-moz-range-thumb]:bg-foreground-tertiary [&::-moz-range-thumb]:border-0 [&::-webkit-slider-track]:bg-background-tertiary [&::-moz-range-track]:bg-background-tertiary"
						aria-label="Seek audio"
					/>
					<span className="text-foreground-primary text-sm min-w-[2.5rem]">
						{formatTime(duration)}
					</span>
				</div>
			</div>
		</figure>
	);
};
