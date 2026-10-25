import { act, renderHook } from "@testing-library/react";
import { describe, expect, it } from "vitest";

import { useQuiz } from "./use-quiz";

const validationMessages = {
	correct: "Correct",
	incorrect: "Incorrect",
};

describe("useQuiz", () => {
	it("awards partial credit for a selected correct multiple answer", () => {
		const { result } = renderHook(() =>
			useQuiz({
				initialQuestions: [
					{
						type: "multiple",
						question: "Select the correct answers",
						answers: [
							{ label: "Option A", value: "A" },
							{ label: "Option B", value: "B" },
							{ label: "Option C", value: "C" },
						],
						correctAnswers: ["A", "B"],
						selectedAnswers: ["A"],
					},
				],
				validationMessages,
				passingPercent: 50,
			}),
		);

		act(() => {
			result.current.validateAnswers();
		});

		expect(result.current.grade).toBe(50);
		expect(result.current.correctAnswerCount).toBe(0);
		expect(result.current.validated).toBe(true);
	});

	it("awards full credit when all correct answers and no incorrect answers are selected", () => {
		const { result } = renderHook(() =>
			useQuiz({
				initialQuestions: [
					{
						type: "multiple",
						question: "Select the correct answers",
						answers: [
							{ label: "Option A", value: "A" },
							{ label: "Option B", value: "B" },
							{ label: "Option C", value: "C" },
						],
						correctAnswers: ["A", "B"],
						selectedAnswers: ["A", "B"],
					},
				],
				validationMessages,
				passingPercent: 100,
			}),
		);

		act(() => {
			result.current.validateAnswers();
		});

		expect(result.current.grade).toBe(100);
		expect(result.current.correctAnswerCount).toBe(1);
	});

	it("awards zero credit when an incorrect answer is selected", () => {
		const { result } = renderHook(() =>
			useQuiz({
				initialQuestions: [
					{
						type: "multiple",
						question: "Select the correct answers",
						answers: [
							{ label: "Option A", value: "A" },
							{ label: "Option B", value: "B" },
							{ label: "Option C", value: "C" },
						],
						correctAnswers: ["A", "B"],
						selectedAnswers: ["A", "C"],
					},
				],
				validationMessages,
				passingPercent: 1,
			}),
		);

		act(() => {
			result.current.validateAnswers();
		});

		expect(result.current.grade).toBe(0);
		expect(result.current.correctAnswerCount).toBe(0);
		expect(result.current.questions[0].answers[0].validation?.state).toBe(
			"correct",
		);
		expect(result.current.questions[0].answers[2].validation?.state).toBe(
			"incorrect",
		);
	});

	it("awards zero credit when no multiple answers are selected", () => {
		const { result } = renderHook(() =>
			useQuiz({
				initialQuestions: [
					{
						type: "multiple",
						question: "Select the correct answers",
						answers: [
							{ label: "Option A", value: "A" },
							{ label: "Option B", value: "B" },
						],
						correctAnswers: ["A", "B"],
					},
				],
				validationMessages,
				passingPercent: 50,
			}),
		);

		act(() => {
			result.current.validateAnswers();
		});

		expect(result.current.grade).toBe(0);
		expect(result.current.correctAnswerCount).toBe(0);
	});

	it("calculates the overall grade using partial credit across questions", () => {
		const { result } = renderHook(() =>
			useQuiz({
				initialQuestions: [
					{
						type: "multiple",
						question: "Question 1",
						answers: [
							{ label: "A", value: "A" },
							{ label: "B", value: "B" },
						],
						correctAnswers: ["A", "B"],
						selectedAnswers: ["A"],
					},
					{
						question: "Question 2",
						answers: [
							{ label: "A", value: "A" },
							{ label: "B", value: "B" },
						],
						correctAnswer: "A",
						selectedAnswer: "A",
					},
				],
				validationMessages,
				passingPercent: 75,
			}),
		);

		act(() => {
			result.current.validateAnswers();
		});

		expect(result.current.grade).toBe(75);
		expect(result.current.correctAnswerCount).toBe(1);
	});
});
