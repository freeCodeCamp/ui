import React from "react";

import { QuestionLabelProps } from "./types";
import { PrismFormatted } from "../prism-formatted";

export const QuestionLabel = (props: QuestionLabelProps) => {
	return (
		<PrismFormatted text={props.question} getCodeBlockAriaLabel={() => ""} />
	);
};
