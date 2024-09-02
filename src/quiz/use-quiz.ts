import { useState } from "react";
import { type QuizQuestionProps } from "../quiz-question";

export const useQuiz = (initialValues = {}) => {
	const [values, setValues] =
		useState<Record<string, QuizQuestionProps["selectedOption"]>>(
			initialValues,
		);

	const handleChange: QuizQuestionProps["onChange"] = ({
		questionId,
		selectedOption,
	}) => {
		setValues({
			...values,
			[questionId]: selectedOption,
		});
	};

	return { values, handleChange };
};
