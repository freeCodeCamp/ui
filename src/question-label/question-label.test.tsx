import React from "react";
import { render, screen } from "@testing-library/react";

import { QuestionLabel } from ".";

describe("<QuestionLabel />", () => {
	it("should render correctly", () => {
		const questionText = "What is the capital of France?";
		render(<QuestionLabel question={questionText} />);

		const questionElement = screen.getByText(questionText);
		expect(questionElement).toBeInTheDocument();
	});
});
