import { type HTMLAttributes } from "react";

export interface PanelProps extends HTMLAttributes<HTMLDivElement> {
	variant?: "primary" | "info" | "danger";
}
