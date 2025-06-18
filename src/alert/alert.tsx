import React, { type ComponentProps } from "react";

type AlertVariant = "success" | "info" | "warning" | "danger";

export type AlertProps = ComponentProps<"div"> & {
	variant: AlertVariant;
};

const variantClasses = {
	success: "text-green-800 bg-green-50 border-green-100",
	info: "text-blue-800 bg-blue-50 border-blue-100",
	warning: "text-yellow-800 bg-yellow-50 border-yellow-100",
	danger: "text-red-900 bg-red-50 border-red-100",
};

/**
 * `Alert` is used to communicate high-priority or time-sensitive information.
 * `Alert` is not dismissable.
 * Use `Callout` instead of `Alert` if you want to communicate information specific to a page.
 */
export const Alert = ({
	children,
	className,
	variant,
	...props
}: AlertProps): JSX.Element => {
	const variantClass = variantClasses[variant];

	const classes = [
		"p-4 mb-6 border border-solid border-1 break-words",
		variantClass,
		className,
	].join(" ");

	return (
		<div className={classes} role="alert" {...props}>
			{children}
		</div>
	);
};
