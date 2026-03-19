import { Component, type HTMLAttributes } from "react";

export interface FormGroupProps extends HTMLAttributes<HTMLDivElement> {
	as?: typeof Component;
	controlId?: string;
	validationState?: "success" | "warning" | "error" | null;
}
