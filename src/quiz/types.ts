import { type QuizQuestionProps } from "../quiz-question";

// Limit the props of each question to ensure that
// their configurations don't collide with Quiz'.
// For example: Quiz should be able to apply `disabled` to all questions
// without being overriden by the `disabled` prop of the individual question.
export type Question = Omit<QuizQuestionProps, "required" | "disabled">;
