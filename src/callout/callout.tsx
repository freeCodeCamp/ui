import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faCircleCheck,
	faCircleInfo,
	faTriangleExclamation,
	faCircleExclamation,
} from "@fortawesome/free-solid-svg-icons";
import { CalloutProps } from "./types";

const variantClasses = {
	tip: "text-green-800 bg-green-50 border-l-green-700",
	note: "text-blue-800 bg-blue-50 border-l-blue-700",
	warning: "text-yellow-800 bg-yellow-50 border-l-yellow-700",
	caution: "text-red-900 bg-red-50 border-l-red-700",
};

const variantIcons = {
	tip: faCircleCheck,
	note: faCircleInfo,
	warning: faTriangleExclamation,
	caution: faCircleExclamation,
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
	label,
	...others
}: CalloutProps): JSX.Element => {
	const variantClass = variantClasses[variant];

	const classes = [
		"p-4 mb-6 border-l-4 break-words",
		"[&_button]:bg-transparent [&_button]:text-current [&_button]:border [&_button]:border-3 [&_button]:border-current",
		"[&_button:hover]:bg-[#31708f] [&_button:hover]:text-[#d9edf7] [&_button:hover]:border-[#31708f]",
		"[&_button:focus]:bg-[#31708f] [&_button:focus]:text-[#d9edf7] [&_button:focus]:border-[#31708f]",
		"[&_button:active]:bg-[#31708f] [&_button:active]:text-[#d9edf7] [&_button:active]:border-[#31708f]",
		"[&_a:hover]:bg-[#31708f] [&_a:hover]:text-[#d9edf7]",
		"[&_a:focus]:bg-[#31708f] [&_a:focus]:text-[#d9edf7]",
		"[&_a:active]:bg-[#31708f] [&_a:active]:text-[#d9edf7]",
		variantClass,
		className,
	].join(" ");

	return (
		<div className={classes} {...others}>
			<div className="flex items-start mb-2">
				<FontAwesomeIcon icon={variantIcons[variant]} className="me-2 mt-1" />
				<strong>{label}</strong>
			</div>
			{children}
		</div>
	);
};
