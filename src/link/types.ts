import {
	type AnchorHTMLAttributes,
	type ReactNode,
	type HTMLAttributeAnchorTarget,
} from "react";

export interface LinkProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
	children: ReactNode;
	block?: boolean;
	to?: string;
	target?: HTMLAttributeAnchorTarget;
}
