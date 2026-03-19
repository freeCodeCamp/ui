import React from "react";

const sizes = {
	xxs: "h-[5px]",
	xs: "h-[10px]",
	s: "h-[20px]",
	m: "h-[30px]",
	l: "h-[60px]",
	xl: "h-[90px]",
	xxl: "h-[180px]",
} as const;

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
	size: keyof typeof sizes;
}

export const Spacer = ({ size }: SpacerProps) => {
	// NOTE: Do not construct class names dynamically
	// https://tailwindcss.com/docs/content-configuration#classes-arent-generated
	return <div className={sizes[size]} />;
};
