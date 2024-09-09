import React from "react";
import { Meta, StoryObj } from "@storybook/react";
import { Quiz, type QuizProps } from "./quiz";
import { useQuiz } from "./use-quiz";

const story = {
	title: "Components/Quiz",
	component: Quiz,
} satisfies Meta<typeof Quiz>;

type Story = StoryObj<typeof Quiz>;

const QuizDefault = ({ questions }: QuizProps) => {
	const updatedQuestions = useQuiz(questions);

	return <Quiz questions={updatedQuestions} />;
};

const QuizWithValidation = ({ questions }: QuizProps) => {
	const updatedQuestions = useQuiz(questions);

	return <Quiz questions={updatedQuestions} disabled />;
};

export const Default: Story = {
	render: QuizDefault,
	args: {
		questions: [
			// @ts-expect-error for now
			{
				question: "Lorem ipsum dolor sit amet",
				options: [
					{ label: "Option 1", value: 1 },
					{ label: "Option 2", value: 2 },
					{ label: "Option 3", value: 3 },
				],
			},
			// @ts-expect-error for now
			{
				question: "Consectetur adipiscing elit",
				options: [
					{ label: "Option 1", value: 1 },
					{ label: "Option 2", value: 2 },
					{ label: "Option 3", value: 3 },
				],
			},
			// @ts-expect-error for now
			{
				question: "Fugit itaque delectus voluptatem alias aliquid",
				options: [
					{ label: "Option 1", value: 1 },
					{ label: "Option 2", value: 2 },
					{ label: "Option 3", value: 3 },
				],
			},
		],
	},
	parameters: {
		docs: {
			source: {
				code: `
import { Quiz, useQuiz } from '@freecodecamp/ui';

const questions = [
  {
    question: "Lorem ipsum dolor sit amet",
    options: [
      { label: "Option 1", value: 1 },
      { label: "Option 2", value: 2 },
      { label: "Option 3", value: 3 },
    ],
  },
  {
    question: "Consectetur adipiscing elit",
    options: [
      { label: "Option 1", value: 1 },
      { label: "Option 2", value: 2 },
      { label: "Option 3", value: 3 },
    ],
  },
  {
    question: "Fugit itaque delectus voluptatem alias aliquid",
    options: [
      { label: "Option 1", value: 1 },
      { label: "Option 2", value: 2 },
      { label: "Option 3", value: 3 },
    ],
  },
];

const App = () => {
  const { values, handleChange } = useQuiz();

  return <Quiz questions={questions} values={values} onChange={handleChange} />;
};`,
			},
		},
	},
};

export const WithValidation: Story = {
	render: QuizWithValidation,
	args: {
		questions: [
			// @ts-expect-error for now
			{
				question: "Lorem ipsum dolor sit amet",
				options: [
					{ label: "Option 1", value: 1 },
					{ label: "Option 2", value: 2 },
					{ label: "Option 3", value: 3 },
				],
				validation: { state: "incorrect", message: "Incorrect." },
			},
			// @ts-expect-error for now
			{
				question: "Consectetur adipiscing elit",
				options: [
					{ label: "Option 1", value: 1 },
					{ label: "Option 2", value: 2 },
					{ label: "Option 3", value: 3 },
				],
				validation: { state: "correct", message: "Correct." },
			},
			// @ts-expect-error for now
			{
				question: "Fugit itaque delectus voluptatem alias aliquid",
				options: [
					{ label: "Option 1", value: 1 },
					{ label: "Option 2", value: 2 },
					{ label: "Option 3", value: 3 },
				],
				validation: { state: "incorrect", message: "Incorrect." },
			},
		],
		disabled: true,
	},
	parameters: {
		docs: {
			source: {
				code: `
import { Quiz, useQuiz } from '@freecodecamp/ui';

const questions = [
  {
    question: "Lorem ipsum dolor sit amet",
    options: [
      { label: "Option 1", value: 1 },
      { label: "Option 2", value: 2 },
      { label: "Option 3", value: 3 },
    ],
    validation: { state: "incorrect", message: "Incorrect." },
  },
  {
    question: "Consectetur adipiscing elit",
    options: [
      { label: "Option 1", value: 1 },
      { label: "Option 2", value: 2 },
      { label: "Option 3", value: 3 },
    ],
    validation: { state: "correct", message: "Correct." },
  },
  {
    question: "Fugit itaque delectus voluptatem alias aliquid",
    options: [
      { label: "Option 1", value: 1 },
      { label: "Option 2", value: 2 },
      { label: "Option 3", value: 3 },
    ],
    validation: { state: "incorrect", message: "Incorrect." },
  },
];

const App = () => {
  const initialValues = {
    "Lorem ipsum dolor sit amet": 1,
    "Consectetur adipiscing elit": 2,
    "Fugit itaque delectus voluptatem alias aliquid": 3
  };

  const { values, handleChange } = useQuiz(initialValues);

  return <Quiz questions={questions} values={values} onChange={handleChange} disabled />;
};`,
			},
		},
	},
};

export default story;
