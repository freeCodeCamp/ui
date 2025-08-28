export type Orientation = "vertical" | "horizontal";

export interface RowProps extends React.HTMLAttributes<HTMLDivElement> {
	className?: string;
	children?: React.ReactNode;
	orientation?: Orientation;
}
