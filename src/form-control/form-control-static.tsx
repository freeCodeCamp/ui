import React, { type ComponentProps } from "react";

export const FormControlStatic = ({
	className,
	children,
	...otherProps
}: ComponentProps<"p">): JSX.Element => {
	const defaultClasses = "py-1.5 mb-0 min-h-43-px text-foreground-secondary";

	const classes = [defaultClasses, className].join(" ");
	return (
		<p className={classes} {...otherProps}>
			{children}
		</p>
	);
};
