import { type LabelHTMLAttributes } from "react";

export interface ControlLabelProps extends LabelHTMLAttributes<HTMLLabelElement> {
	htmlFor?: string;
	srOnly?: boolean;
}
