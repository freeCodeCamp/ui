import React from "react";
import { PrismFormatted } from "../prism-formatted";

interface QuestionLabelProps {
	question: string;
}

export const QuestionLabel = ({ question }: QuestionLabelProps) => {
	return <PrismFormatted text={question} getCodeBlockAriaLabel={() => ""} />;
};
