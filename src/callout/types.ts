type CalloutVariant = "tip" | "note" | "warning" | "caution";

export interface CalloutProps
	extends Omit<React.HTMLAttributes<HTMLDivElement>, "role"> {
	variant: CalloutVariant;
}
