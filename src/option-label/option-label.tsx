import React from "react";

import { OptionLabelProps } from "./types";
import { PrismFormatted } from "../prism-formatted";

export const OptionLabel = (props: OptionLabelProps) => {
	const removeParagraphTags = (text: string) => {
		// Remove <p> and </p> tags from the text
		return text.replace(/<\/?p>/g, "");
	};

	return (
		<PrismFormatted
			text={removeParagraphTags(props.questionText)}
			useSpan
			noAria
			getCodeBlockAriaLabel={() => ""}
		/>
	);
};
