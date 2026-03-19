import { type ComponentProps, type JSXElementConstructor } from "react";

export type FormControlProps<
	TElement extends
		| keyof JSX.IntrinsicElements
		| JSXElementConstructor<unknown> = "input",
> = {
	componentClass?: TElement | string;
} & ComponentProps<TElement>;
