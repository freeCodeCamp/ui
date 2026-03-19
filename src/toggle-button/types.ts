import { type ReactNode } from "react";

export type ButtonStyle = "primary" | "danger";

export type ButtonSize = "small" | "medium" | "large";

export interface ToggleButtonProps {
	children: ReactNode;
	bsSize?: ButtonSize;
	bsStyle?: ButtonStyle;
	disabled?: boolean;
	checked?: boolean;
	onChange?: (value: boolean) => void;
	className?: string;
	value?: string;
	name?: string;
	type?: "button" | "radio";
}
