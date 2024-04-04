import React from "react";

export interface CloseButtonProps {
	className?: string;
	label?: string;
	onClick: () => void;
}

/**
 * Basic UI component for closing modals, alerts, etc.
 */
export function CloseButton({
	className,
	label,
	onClick,
}: CloseButtonProps): JSX.Element {
	const classes = [
		// Remove browser's default styles
		"bg-transparent",
		"border-none",
		// Text styles
		"text-lg",
		"font-bold",
		"text-foreground-primary",
		// Focus state
		"focus:opacity-100",
		"focus:text-opacity-100",
		"focus:outline-none", // Hide the default browser outline
		"focus-visible:ring",
		"focus-visible:ring-focus-outline-color",
		// Hover state
		"hover:opacity-100",
		"hover:text-opacity-100",
		// Content positioning
		"flex",
		"justify-center",
		"items-center",
		// Others
		"w-[24px]",
		"h-[24px]",
		"opacity-50",
		className,
	].join(" ");

	return (
		<button className={classes} onClick={onClick} type="button">
			<span className="sr-only">{label || "Close"}</span>
			<span aria-hidden>×</span>
		</button>
	);
}
