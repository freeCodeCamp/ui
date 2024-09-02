import { renderHook, act } from "@testing-library/react-hooks";

import { useQuiz } from "./use-quiz";

describe("useQuiz", () => {
	it("should return the values state and the change handler", () => {
		const { result } = renderHook(() => useQuiz());

		expect(result.current.values).toEqual({});
		expect(typeof result.current.handleChange).toBe("function");
	});

	it("should return the correct initial values if the values are specified", () => {
		const { result } = renderHook(() =>
			useQuiz({ "question-1": 2, "question-2": 1 }),
		);

		expect(result.current.values).toEqual({
			"question-1": 2,
			"question-2": 1,
		});
	});

	it("should return the correct values after the values are updated", () => {
		const { result } = renderHook(() =>
			useQuiz({ "question-1": 2, "question-2": 1 }),
		);

		act(() => {
			result.current.handleChange({
				questionId: "question-1",
				selectedOption: 1,
			});
		});

		act(() => {
			result.current.handleChange({
				questionId: "question-2",
				selectedOption: 3,
			});
		});

		expect(result.current.values).toEqual({
			"question-1": 1,
			"question-2": 3,
		});
	});
});
