import React from "react";
import { type ImageProps } from "./types";

export const Image = React.forwardRef<HTMLImageElement, ImageProps>(
	({ alt, src, responsive, className, ...props }, ref): JSX.Element => {
		// The image scales with its container by default (`max-width` being 100%).
		// If `responsive` is `false`, remove the width constraint and let the image grows to its true size.
		const classes = responsive
			? className
			: [className, "max-w-none"].join(" ");

		return <img ref={ref} alt={alt} src={src} className={classes} {...props} />;
	},
);

Image.displayName = "Image";
