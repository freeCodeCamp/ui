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

type FormControlElement = HTMLInputElement | HTMLTextAreaElement;

// Using FormControlProps without explicit type parameter allows TypeScript to infer
// the correct element type from the componentClass prop, preserving element-specific
// props like 'type' for input elements. Using FormControlProps<"input" | "textarea">
// would create an intersection that only includes common props between both elements.
const FormControlComponent = React.forwardRef<
	FormControlElement,
	FormControlProps
>(({ componentClass, ...props }, ref) => {
	const { controlId } = useContext(FormContext);
	const { id, className } = props;

	const Component = componentClass || "input";
	if (Component !== "textarea") variantClass = " h-8";

	//row and componentClass
	const classes = [className, defaultClasses, variantClass].join(" ");

	return (
		<Component id={id || controlId} className={classes} ref={ref} {...props} />
	);
});

FormControlComponent.displayName = "FormControl";

const FormControl = FormControlComponent as typeof FormControlComponent & {
	Feedback: typeof FormControlFeedback;
	Static: typeof FormControlStatic;
};

FormControl.Feedback = FormControlFeedback;
FormControl.Static = FormControlStatic;

export { FormControl };
