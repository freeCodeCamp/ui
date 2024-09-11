import { renderHook, act } from "@testing-library/react-hooks";

import { useQuiz } from "./use-quiz";

describe("useQuiz", () => {
	it("should return the questions data correctly", () => {
		const { result } = renderHook(() =>
			useQuiz([
				{
					question: "Lorem ipsum dolor sit amet",
					answers: [
						{ label: "Option 1", value: 1 },
						{ label: "Option 2", value: 2 },
						{ label: "Option 3", value: 3 },
					],
				},
				{
					question: "Consectetur adipiscing elit",
					answers: [
						{ label: "Option 1", value: 1 },
						{ label: "Option 2", value: 2 },
						{ label: "Option 3", value: 3 },
					],
				},
			]),
		);

		expect(result.current).toHaveLength(2);

		// Question 1
		expect(result.current[0].question).toBe("Lorem ipsum dolor sit amet");
		expect(result.current[0].answers).toStrictEqual([
			{ label: "Option 1", value: 1 },
			{ label: "Option 2", value: 2 },
			{ label: "Option 3", value: 3 },
		]);
		expect(result.current[0].selectedAnswer).toBeUndefined();
		expect(typeof result.current[0].onChange).toBe("function");

		// Question 2
		expect(result.current[1].question).toBe("Consectetur adipiscing elit");
		expect(result.current[1].answers).toStrictEqual([
			{ label: "Option 1", value: 1 },
			{ label: "Option 2", value: 2 },
			{ label: "Option 3", value: 3 },
		]);
		expect(result.current[1].selectedAnswer).toBeUndefined();
		expect(typeof result.current[1].onChange).toBe("function");
	});

	it("should return the correct initial selected answers if `selectedAnswer` is specified", () => {
		const { result } = renderHook(() =>
			useQuiz([
				{
					question: "Lorem ipsum dolor sit amet",
					answers: [
						{ label: "Option 1", value: 1 },
						{ label: "Option 2", value: 2 },
						{ label: "Option 3", value: 3 },
					],
					selectedAnswer: 1,
				},
				{
					question: "Consectetur adipiscing elit",
					answers: [
						{ label: "Option 1", value: 1 },
						{ label: "Option 2", value: 2 },
						{ label: "Option 3", value: 3 },
					],
					selectedAnswer: 3,
				},
			]),
		);

		expect(result.current[0].selectedAnswer).toBe(1);
		expect(result.current[1].selectedAnswer).toBe(3);
	});

	it("should return the correct selected answers after the selections are updated", () => {
		const { result } = renderHook(() =>
			useQuiz([
				{
					question: "Lorem ipsum dolor sit amet",
					answers: [
						{ label: "Option 1", value: 1 },
						{ label: "Option 2", value: 2 },
						{ label: "Option 3", value: 3 },
					],
					selectedAnswer: 1,
				},
				{
					question: "Consectetur adipiscing elit",
					answers: [
						{ label: "Option 1", value: 1 },
						{ label: "Option 2", value: 2 },
						{ label: "Option 3", value: 3 },
					],
					selectedAnswer: 3,
				},
			]),
		);

		act(() => {
			result.current[0].onChange(2);
		});

		act(() => {
			result.current[1].onChange(2);
		});

		expect(result.current[0].selectedAnswer).toBe(2);
		expect(result.current[1].selectedAnswer).toBe(2);
	});
});
