import React, { useState } from "react";
import { Meta, StoryObj } from "@storybook/react";
import { QuizQuestion } from "./quiz-question";
import { type QuizQuestionProps } from "./types";

const story = {
	title: "Components/QuizQuestion",
	component: QuizQuestion,
} satisfies Meta<typeof QuizQuestion>;

type Story = StoryObj<typeof QuizQuestion>;

type QuizQuestionCompProps = Pick<
	QuizQuestionProps,
	"question" | "answers" | "disabled" | "validation"
>;

const QuizQuestionComp = ({
	question,
	answers,
	disabled,
	validation,
}: QuizQuestionCompProps) => {
	const [answer, setAnswer] = useState<QuizQuestionProps["selectedAnswer"]>();

	return (
		<QuizQuestion
			question={question}
			answers={answers}
			disabled={disabled}
			validation={validation}
			onChange={(newAnswer) => setAnswer(newAnswer)}
			selectedAnswer={answer}
		/>
	);
};

export const Default: Story = {
	render: QuizQuestionComp,
	args: {
		question: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
		answers: [
			{ label: "Option 1", value: 1 },
			{ label: "Option 2", value: 2 },
			{ label: "Option 3", value: 3 },
		],
	},
	parameters: {
		docs: {
			source: {
				code: `const App = () => {
  const [answer, setAnswer] = useState();

  return (
    <QuizQuestion
      question="Lorem ipsum dolor sit amet, consectetur adipiscing elit"
      answers={[
        { label: "Option 1", value: 1 },
        { label: "Option 2", value: 2 },
        { label: "Option 3", value: 3 }
      ]}
      onChange={(newAnswer) => setAnswer(newAnswer)}
      selectedAnswer={answer}
    />
  );
}`,
			},
		},
	},
};

export const Disabled: Story = {
	render: QuizQuestionComp,
	args: {
		question: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
		answers: [
			{ label: "Option 1", value: 1 },
			{ label: "Option 2", value: 2 },
			{ label: "Option 3", value: 3 },
		],
		disabled: true,
	},
	parameters: {
		docs: {
			source: {
				code: `const App = () => {
  const [answer, setAnswer] = useState();

  return (
    <QuizQuestion
      question="Lorem ipsum dolor sit amet, consectetur adipiscing elit"
      answers={[
        { label: "Option 1", value: 1 },
        { label: "Option 2", value: 2 },
        { label: "Option 3", value: 3 }
      ]}
      onChange={(newAnswer) => setAnswer(newAnswer)}
      selectedAnswer={answer}
      disabled
    />
  );
}`,
			},
		},
	},
};

export const Correct: Story = {
	render: QuizQuestionComp,
	args: {
		question: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
		answers: [
			{ label: "Option 1", value: 1 },
			{ label: "Option 2", value: 2 },
			{ label: "Option 3", value: 3 },
		],
		validation: { state: "correct", message: "Correct." },
	},
	parameters: {
		docs: {
			source: {
				code: `const App = () => {
  const [answer, setAnswer] = useState();

  return (
    <QuizQuestion
      question="Lorem ipsum dolor sit amet, consectetur adipiscing elit"
      answers={[
        { label: "Option 1", value: 1 },
        { label: "Option 2", value: 2 },
        { label: "Option 3", value: 3 }
      ]}
      onChange={(newAnswer) => setAnswer(newAnswer)}
      selectedAnswer={answer}
      validation={{ state: "correct", message: "Correct." }}
    />
  );
}`,
			},
		},
	},
};

export const Incorrect: Story = {
	render: QuizQuestionComp,
	args: {
		question: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
		answers: [
			{ label: "Option 1", value: 1 },
			{ label: "Option 2", value: 2 },
			{ label: "Option 3", value: 3 },
		],
		validation: { state: "incorrect", message: "Incorrect." },
	},
	parameters: {
		docs: {
			source: {
				code: `const App = () => {
  const [answer, setAnswer] = useState();

  return (
    <QuizQuestion
      question="Lorem ipsum dolor sit amet, consectetur adipiscing elit"
      answers={[
        { label: "Option 1", value: 1 },
        { label: "Option 2", value: 2 },
        { label: "Option 3", value: 3 }
      ]}
      onChange={(newAnswer) => setAnswer(newAnswer)}
      selectedAnswer={answer}
      validation={{ state: "incorrect", message: "Incorrect." }}
    />
  );
}`,
			},
		},
	},
};

export default story;
