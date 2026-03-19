import { type TableHTMLAttributes } from "react";

export interface TableProps extends TableHTMLAttributes<HTMLTableElement> {
	condensed?: boolean;
	striped?: boolean;
}
