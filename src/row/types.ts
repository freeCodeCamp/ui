import { type HTMLAttributes, type ReactNode } from "react";

type Orientation = "vertical" | "horizontal";

export interface RowProps extends HTMLAttributes<HTMLDivElement> {
	className?: string;
	children?: ReactNode;
	orientation?: Orientation;
}
