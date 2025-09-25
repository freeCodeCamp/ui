import React from "react";
import { render, screen } from "@testing-library/react";

import { OptionLabel } from ".";

describe("<OptionLabel />", () => {
	it("should render correctly", () => {
		const questionText = "What is the capital of France?";
		render(<OptionLabel questionText={questionText} />);

		const questionElement = screen.getByText(questionText);
		expect(questionElement).toBeInTheDocument();
	});
});
