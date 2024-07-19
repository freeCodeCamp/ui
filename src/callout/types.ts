type CalloutVariant = "success" | "info" | "warning" | "danger";

export interface CalloutProps
	extends Omit<React.HTMLAttributes<HTMLDivElement>, "role"> {
	variant: CalloutVariant;
}
