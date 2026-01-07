import React from "react";
import { PrismFormatted } from "../prism-formatted";

interface OptionLabelProps {
	questionText: string;
}

const removeParagraphTags = (html: string) => html.replace(/^<p>|<\/p>$/g, "");

export const OptionLabel = ({ questionText }: OptionLabelProps) => {
	return (
		<PrismFormatted
			text={removeParagraphTags(questionText)}
			useSpan
			noAria
			getCodeBlockAriaLabel={() => ""}
		/>
	);
};
