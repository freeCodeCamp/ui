import React from "react";

import { RowProps } from "./types";

export const Row = ({
	className,
	children,
	orientation = "vertical",
	...rest
}: RowProps) => {
	// Intentionally leave vertical styles empty to avoid unexpected breaking changes
	// as the component originally was not a flex container.
	const orientationClass = orientation === "horizontal" ? "flex flex-row" : "";

	return (
		<div
			className={`mx-[-15px] ${orientationClass} ${className ?? ""}`}
			{...rest}
		>
			{children}
		</div>
	);
};
