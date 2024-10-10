import { renderHook, act } from "@testing-library/react-hooks";

import { useQuiz } from "./use-quiz";

const validationMessages = {
	correct: "Correct",
	incorrect: "Incorrect",
};

describe("useQuiz", () => {
	it("should return the data correctly", () => {
		const { result } = renderHook(() =>
			useQuiz({
				initialQuestions: [
					{
						question: "Lorem ipsum dolor sit amet",
						answers: [
							{ label: "Option 1", value: 1 },
							{ label: "Option 2", value: 2 },
							{ label: "Option 3", value: 3 },
						],
						correctAnswer: 1,
					},
					{
						question: "Consectetur adipiscing elit",
						answers: [
							{ label: "Option 1", value: 1 },
							{ label: "Option 2", value: 2 },
							{ label: "Option 3", value: 3 },
						],
						correctAnswer: 2,
					},
				],
				validationMessages,
			}),
		);

		expect(typeof result.current.validateAnswers).toBe("function");
		expect(result.current.questions).toHaveLength(2);

		// Question 1
		expect(result.current.questions[0].question).toBe(
			"Lorem ipsum dolor sit amet",
		);
		expect(result.current.questions[0].answers).toStrictEqual([
			{ label: "Option 1", value: 1 },
			{ label: "Option 2", value: 2 },
			{ label: "Option 3", value: 3 },
		]);
		expect(result.current.questions[0].selectedAnswer).toBeUndefined();
		expect(typeof result.current.questions[0].onChange).toBe("function");

		// Question 2
		expect(result.current.questions[1].question).toBe(
			"Consectetur adipiscing elit",
		);
		expect(result.current.questions[1].answers).toStrictEqual([
			{ label: "Option 1", value: 1 },
			{ label: "Option 2", value: 2 },
			{ label: "Option 3", value: 3 },
		]);
		expect(result.current.questions[1].selectedAnswer).toBeUndefined();
		expect(typeof result.current.questions[1].onChange).toBe("function");
	});

	it("should return the correct initial selected answers if `selectedAnswer` is specified", () => {
		const { result } = renderHook(() =>
			useQuiz({
				initialQuestions: [
					{
						question: "Lorem ipsum dolor sit amet",
						answers: [
							{ label: "Option 1", value: 1 },
							{ label: "Option 2", value: 2 },
							{ label: "Option 3", value: 3 },
						],
						selectedAnswer: 1,
						correctAnswer: 1,
					},
					{
						question: "Consectetur adipiscing elit",
						answers: [
							{ label: "Option 1", value: 1 },
							{ label: "Option 2", value: 2 },
							{ label: "Option 3", value: 3 },
						],
						selectedAnswer: 3,
						correctAnswer: 2,
					},
				],
				validationMessages,
			}),
		);

		expect(result.current.questions[0].selectedAnswer).toBe(1);
		expect(result.current.questions[1].selectedAnswer).toBe(3);
	});

	it("should return the correct selected answers after the selections are updated", () => {
		const { result } = renderHook(() =>
			useQuiz({
				initialQuestions: [
					{
						question: "Lorem ipsum dolor sit amet",
						answers: [
							{ label: "Option 1", value: 1 },
							{ label: "Option 2", value: 2 },
							{ label: "Option 3", value: 3 },
						],
						selectedAnswer: 1,
						correctAnswer: 1,
					},
					{
						question: "Consectetur adipiscing elit",
						answers: [
							{ label: "Option 1", value: 1 },
							{ label: "Option 2", value: 2 },
							{ label: "Option 3", value: 3 },
						],
						selectedAnswer: 3,
						correctAnswer: 2,
					},
				],
				validationMessages,
			}),
		);

		act(() => result.current.questions[0].onChange(2));
		act(() => result.current.questions[1].onChange(2));

		expect(result.current.questions[0].selectedAnswer).toBe(2);
		expect(result.current.questions[1].selectedAnswer).toBe(2);
	});

	it("should return the questions array with the correct validation status when `validateAnswers` is called", () => {
		const { result } = renderHook(() =>
			useQuiz({
				initialQuestions: [
					{
						question: "Lorem ipsum dolor sit amet",
						answers: [
							{ label: "Option 1", value: 1 },
							{ label: "Option 2", value: 2 },
							{ label: "Option 3", value: 3 },
						],
						selectedAnswer: 1,
						correctAnswer: 1,
					},
					{
						question: "Consectetur adipiscing elit",
						answers: [
							{ label: "Option 1", value: 1 },
							{ label: "Option 2", value: 2 },
							{ label: "Option 3", value: 3 },
						],
						selectedAnswer: 3,
						correctAnswer: 2,
					},
				],
				validationMessages,
			}),
		);

		act(() => {
			result.current.validateAnswers();
		});

		expect(result.current.questions[0].answers[0].validation?.message).toBe(
			"Correct",
		);
		expect(
			result.current.questions[0].answers[1].validation?.message,
		).toBeUndefined();
		expect(
			result.current.questions[0].answers[2].validation?.message,
		).toBeUndefined();

		expect(
			result.current.questions[1].answers[0].validation?.message,
		).toBeUndefined();
		expect(
			result.current.questions[1].answers[1].validation?.message,
		).toBeUndefined();
		expect(result.current.questions[1].answers[2].validation?.message).toBe(
			"Incorrect",
		);
		expect(result.current.correctAnswerCount).toBe(1);
	});

	it("should call the `onSuccess` function if all answers are correct", () => {
		const onSuccess = jest.fn();
		const onFailure = jest.fn();

		const { result } = renderHook(() =>
			useQuiz({
				initialQuestions: [
					{
						question: "Lorem ipsum dolor sit amet",
						answers: [
							{ label: "Option 1", value: 1 },
							{ label: "Option 2", value: 2 },
							{ label: "Option 3", value: 3 },
						],
						selectedAnswer: 1,
						correctAnswer: 1,
					},
					{
						question: "Consectetur adipiscing elit",
						answers: [
							{ label: "Option 1", value: 1 },
							{ label: "Option 2", value: 2 },
							{ label: "Option 3", value: 3 },
						],
						selectedAnswer: 3,
						correctAnswer: 3,
					},
				],
				validationMessages,
				onSuccess,
				onFailure,
			}),
		);

		act(() => {
			result.current.validateAnswers();
		});

		expect(onSuccess).toHaveBeenCalledTimes(1);
		expect(onFailure).toHaveBeenCalledTimes(0);
	});

	it("should call the `onFailure` function if not all answers are correct", () => {
		const onSuccess = jest.fn();
		const onFailure = jest.fn();

		const { result } = renderHook(() =>
			useQuiz({
				initialQuestions: [
					{
						question: "Lorem ipsum dolor sit amet",
						answers: [
							{ label: "Option 1", value: 1 },
							{ label: "Option 2", value: 2 },
							{ label: "Option 3", value: 3 },
						],
						selectedAnswer: 1,
						correctAnswer: 2,
					},
					{
						question: "Consectetur adipiscing elit",
						answers: [
							{ label: "Option 1", value: 1 },
							{ label: "Option 2", value: 2 },
							{ label: "Option 3", value: 3 },
						],
						selectedAnswer: 3,
						correctAnswer: 3,
					},
				],
				validationMessages,
				onSuccess,
				onFailure,
			}),
		);

		act(() => {
			result.current.validateAnswers();
		});

		expect(onSuccess).toHaveBeenCalledTimes(0);
		expect(onFailure).toHaveBeenCalledTimes(1);
	});
});
