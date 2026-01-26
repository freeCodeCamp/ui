import React from "react";

import type { AudioProps } from "./types";

export const Audio = ({
	src,
	"aria-label": ariaLabel,
	className = "",
}: AudioProps) => {
	return (
		<figure className={className}>
			{/* Transcript is added separately in a different component */}
			{/* eslint-disable-next-line jsx-a11y/media-has-caption */}
			<audio
				controls
				src={src}
				aria-label={ariaLabel}
				className="w-full max-w-md"
			>
				Your browser does not support the audio element.
			</audio>
		</figure>
	);
};
