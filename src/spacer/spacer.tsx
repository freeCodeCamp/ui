import React from "react";

type Size = "xxs" | "xs" | "s" | "m" | "l" | "xl" | "xxl";

interface SpacerProps {
	/**
	 * Sizes:
	 * - xxs: 5px
	 * - xs: 10px
	 * - s: 20px
	 * - m: 30px
	 * - l: 60px
	 * - xl: 90px
	 * - xxl: 180px
	 */
	size: Size;
}

export const Spacer = ({ size }: SpacerProps) => {
	let cls;

	// NOTE: Do not construct class names dynamically
	// https://tailwindcss.com/docs/content-configuration#classes-arent-generated
	if (size === "xxs") {
		cls = "h-[5px]";
	} else if (size === "xs") {
		cls = "h-[10px]";
	} else if (size === "s") {
		cls = "h-[20px]";
	} else if (size === "m") {
		cls = "h-[30px]";
	} else if (size === "l") {
		cls = "h-[60px]";
	} else if (size === "xl") {
		cls = "h-[90px]";
	} else if (size === "xxl") {
		cls = "h-[180px]";
	}

	return <div className={cls} />;
};
