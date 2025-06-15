import React, { useContext } from "react";
import { FormContext } from "../form-group/form-group";

import { FormControlFeedback } from "./form-control-feedback";
import { FormControlStatic } from "./form-control-static";
import { FormControlProps } from "./types";

// Uses controlId from <FormGroup> if not explicitly specified.
// type Only relevant if componentClass is 'input'.
let variantClass: string;
const defaultClasses =
	"outline-0 block w-full py-1.5 px-2.5 text-md text-foreground-primary bg-background-primary bg-none rounded-none border-1 border-solid border-background-quaternary shadow-none transition ease-in-out duration-150 focus:border-foreground-tertiary";

const FormControl = ({
	componentClass,
	id,
	className,
	...otherProps
}: FormControlProps<"input" | "textarea">): JSX.Element => {
	const { controlId } = useContext(FormContext);

	const Component = componentClass || "input";
	if (Component !== "textarea") variantClass = " h-8";

	//row and componentClass
	const classes = [defaultClasses, variantClass, className].join(" ");

	if (Component === "textarea") {
		return (
			<textarea
				id={id || controlId}
				className={classes}
				{...(otherProps as React.TextareaHTMLAttributes<HTMLTextAreaElement>)}
			/>
		);
	}

	return (
		<input
			id={id || controlId}
			className={classes}
			{...(otherProps as React.InputHTMLAttributes<HTMLInputElement>)}
		/>
	);
};

FormControl.Feedback = FormControlFeedback;
FormControl.Static = FormControlStatic;

export { FormControl };
