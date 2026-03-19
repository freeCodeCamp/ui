import {
	type MouseEventHandler,
	type ButtonHTMLAttributes,
	type ReactNode,
	type HTMLAttributeAnchorTarget,
} from "react";

export type ButtonVariant = "primary" | "danger" | "info";

export type ButtonSize = "small" | "medium" | "large";

interface BaseButtonProps extends ButtonHTMLAttributes<
	HTMLButtonElement | HTMLAnchorElement
> {
	children: ReactNode;
	size?: ButtonSize;
	onClick?: MouseEventHandler<HTMLButtonElement | HTMLAnchorElement>;
	type?: "submit" | "button";
	block?: boolean;
	href?: string;
	download?: string;
	target?: HTMLAttributeAnchorTarget;
}

interface PrimaryButtonProps extends BaseButtonProps {
	variant?: "primary";
	disabled?: boolean;
}

interface InfoButtonProps extends BaseButtonProps {
	variant: "info";
	disabled?: false;
}

interface DangerButtonProps extends BaseButtonProps {
	variant: "danger";
	disabled?: boolean;
}

export type ButtonProps =
	| PrimaryButtonProps
	| InfoButtonProps
	| DangerButtonProps;
