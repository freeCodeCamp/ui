import { type HTMLAttributes } from "react";

type CalloutVariant = "tip" | "note" | "warning" | "caution";

export interface CalloutProps extends Omit<
	HTMLAttributes<HTMLDivElement>,
	"role"
> {
	label: string;
	variant: CalloutVariant;
}
