import React, { createContext } from "react";
import { FormGroupProps } from "./types";

export type FormContextProps = Pick<
	FormGroupProps,
	"controlId" | "validationState"
>;
export const FormContext = createContext<FormContextProps>({});

const defaultClasses = "mb-3.5 relative";

export const FormGroup = ({
	className,
	validationState,
	controlId,
	as,
	...props
}: FormGroupProps): JSX.Element => {
	const context = {
		controlId,
		validationState,
	};
	const componentClass = as;
	const Component = componentClass || "div";

	const classes = [defaultClasses, className].join(" ");
	return (
		<FormContext.Provider value={context}>
			<Component
				className={classes}
				as={as}
				{...props}
				validationstate={validationState}
			/>
		</FormContext.Provider>
	);
};
