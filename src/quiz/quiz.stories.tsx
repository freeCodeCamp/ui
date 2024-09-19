import React, { useState } from "react";
import { Meta, StoryObj } from "@storybook/react";

import { Quiz } from "./quiz";
import { useQuiz } from "./use-quiz";
import { type Question } from "./types";
import { Button } from "../button";
import { Spacer } from "../spacer";

const story = {
	title: "Components/Quiz",
	component: Quiz,
} satisfies Meta<typeof Quiz>;

type Story = StoryObj<typeof Quiz>;

const QuizDefault = () => {
	const initialQuestions: Question[] = [
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
		{
			question: "Fugit itaque delectus voluptatem alias aliquid",
			answers: [
				{ label: "Option 1", value: 1 },
				{ label: "Option 2", value: 2 },
				{ label: "Option 3", value: 3 },
			],
			correctAnswer: 3,
		},
	];

	const { questions } = useQuiz({
		initialQuestions,
		correctMessage: "Correct",
		incorrectMessage: "Incorrect",
	});

	return <Quiz questions={questions} />;
};

const QuizWithValidation = () => {
	const initialQuestions: Question[] = [
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
			selectedAnswer: 1,
			correctAnswer: 2,
		},
		{
			question: "Fugit itaque delectus voluptatem alias aliquid",
			answers: [
				{ label: "Option 1", value: 1 },
				{ label: "Option 2", value: 2 },
				{ label: "Option 3", value: 3 },
			],
			selectedAnswer: 1,
			correctAnswer: 3,
		},
	];

	const { questions, validateAnswers } = useQuiz({
		initialQuestions,
		correctMessage: "Correct",
		incorrectMessage: "Incorrect",
	});
	const [disabled, setDisabled] = useState(false);

	const handleSubmit = () => {
		validateAnswers();
		setDisabled(true);
	};

	return (
		<div>
			<Quiz questions={questions} disabled={disabled} />
			<Spacer size="m" />
			<Button onClick={handleSubmit}>Submit</Button>
		</div>
	);
};

export const Default: Story = {
	render: QuizDefault,
	args: {},
	parameters: {
		docs: {
			source: {
				code: `
import { Quiz, useQuiz } from '@freecodecamp/ui';

const questions = [
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
  {
    question: "Fugit itaque delectus voluptatem alias aliquid",
    answers: [
      { label: "Option 1", value: 1 },
      { label: "Option 2", value: 2 },
      { label: "Option 3", value: 3 },
    ],
  },
];

const App = () => {
  const questions = useQuiz(initialQuestions);

  return <Quiz questions={questions} />;
};`,
			},
		},
	},
};

export const WithValidation: Story = {
	render: QuizWithValidation,
	args: {},
	parameters: {
		docs: {
			source: {
				code: `
import { Quiz, useQuiz } from '@freecodecamp/ui';

const questions = [
  {
    question: "Lorem ipsum dolor sit amet",
    answers: [
      { label: "Option 1", value: 1 },
      { label: "Option 2", value: 2 },
      { label: "Option 3", value: 3 },
    ],
		selectedAnswer: 1,
    validation: { state: "incorrect", message: "Incorrect." },
  },
  {
    question: "Consectetur adipiscing elit",
    answers: [
      { label: "Option 1", value: 1 },
      { label: "Option 2", value: 2 },
      { label: "Option 3", value: 3 },
    ],
		selectedAnswer: 1,
    validation: { state: "correct", message: "Correct." },
  },
  {
    question: "Fugit itaque delectus voluptatem alias aliquid",
    answers: [
      { label: "Option 1", value: 1 },
      { label: "Option 2", value: 2 },
      { label: "Option 3", value: 3 },
    ],
		selectedAnswer: 1,
    validation: { state: "incorrect", message: "Incorrect." },
  },
];

const App = () => {
  const questions = useQuiz(initialQuestions);

  return <Quiz questions={questions} disabled />;
};`,
			},
		},
	},
};

export default story;
