import React, { type ComponentProps } from "react";

export const FormControlFeedback = ({
	children,
	className,
	...otherProps
}: ComponentProps<"span">): JSX.Element => {
	const defaultClasses =
		"absolute top-[30px] right-0 z-2 block w-8 h-8 leading-8 text-center pointer-events-none text-green-700";

	const classes = [defaultClasses, className].join(" ");
	return (
		<span className={classes} {...otherProps}>
			{children}
		</span>
	);
};
