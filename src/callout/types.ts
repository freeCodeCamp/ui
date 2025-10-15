type CalloutVariant = "tip" | "note" | "warning" | "caution";

export interface CalloutProps
	extends Omit<React.HTMLAttributes<HTMLDivElement>, "role"> {
	label: string;
	variant: CalloutVariant;
}
