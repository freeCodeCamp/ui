import React, { useContext, forwardRef } from "react";
import { FormContext } from "../form-group/form-group";

import { FormControlFeedback } from "./form-control-feedback";
import { FormControlStatic } from "./form-control-static";
import { FormControlProps } from "./types";

// Uses controlId from <FormGroup> if not explicitly specified.
// type Only relevant if componentClass is 'input'.
let variantClass: string;
const defaultClasses =
	"outline-0 block w-full py-1.5 px-2.5 text-md text-foreground-primary bg-background-primary bg-none rounded-none border-1 border-solid border-background-quaternary shadow-none transition ease-in-out duration-150 focus:border-foreground-tertiary";

interface FormControlStatics {
	Feedback: typeof FormControlFeedback;
	Static: typeof FormControlStatic;
}

type FormControlComponent = React.ForwardRefExoticComponent<
	FormControlProps<"input" | "textarea"> &
		React.RefAttributes<HTMLInputElement | HTMLTextAreaElement>
> &
	FormControlStatics;

const FormControl = forwardRef<
	HTMLInputElement | HTMLTextAreaElement,
	FormControlProps<"input" | "textarea">
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
}) as FormControlComponent;

FormControl.displayName = "FormControl";
FormControl.Feedback = FormControlFeedback;
FormControl.Static = FormControlStatic;

export { FormControl };
