import React from "react";
import { CalloutProps } from "./types";

const variantClasses = {
	success: "text-green-700 bg-green-50 border-green-700",
	info: "text-blue-700 bg-blue-50 border-blue-700",
	warning: "text-yellow-700 bg-yellow-50 border-yellow-700",
	danger: "text-red-700 bg-red-50 border-red-700",
};

/**
 * A `Callout` is used to emphasize an important snippet of information within the flow of a page.
 * Content in a callout should be something on the page that you want to highlight, but that is not critical information.
 * Use `Alert` instead of `Callout` if you want to communicate system-level information.
 */
export const Callout = ({
	children,
	className,
	variant,
	...others
}: CalloutProps): JSX.Element => {
	const variantClass = variantClasses[variant];

	const classes = [
		"p-4 mb-6 border border-solid border-1 break-words",
		variantClass,
		className,
	].join(" ");

	return (
		<div className={classes} {...others}>
			{children}
		</div>
	);
};
