import { MouseEventHandler } from "react";

export type ButtonVariant = "primary" | "danger" | "info";

export type ButtonSize = "small" | "medium" | "large";

interface BaseButtonProps
	extends React.ButtonHTMLAttributes<HTMLButtonElement | HTMLAnchorElement> {
	children: React.ReactNode;
	size?: ButtonSize;
	onClick?: MouseEventHandler<HTMLButtonElement | HTMLAnchorElement>;
	type?: "submit" | "button";
	block?: boolean;
	href?: string;
	download?: string;
	target?: React.HTMLAttributeAnchorTarget;
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
	disabled?: false;
}

export type ButtonProps =
	| PrimaryButtonProps
	| InfoButtonProps
	| DangerButtonProps;
