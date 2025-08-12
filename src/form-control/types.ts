import React from "react";

export type FormControlProps<T extends "input" | "textarea" = "input"> = {
	componentClass?: T;
} & (T extends "textarea"
	? React.TextareaHTMLAttributes<HTMLTextAreaElement>
	: React.InputHTMLAttributes<HTMLInputElement>);
