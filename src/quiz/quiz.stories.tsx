import React, { useState } from "react";
import { Meta, StoryObj } from "@storybook/react";

import { Quiz } from "./quiz";
import { useQuiz } from "./use-quiz";
import { type Question } from "./types";
import { Button } from "../button";
import { Spacer } from "../spacer";
import { PrismFormatted } from "../prism-formatted";

const story = {
	title: "Components/Quiz",
	component: Quiz,
} satisfies Meta<typeof Quiz>;

type Story = StoryObj<typeof Quiz>;

const QuizDefault = () => {
	const initialQuestions: Question<number>[] = [
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
		validationMessages: {
			correct: "Correct.",
			incorrect: "Incorrect.",
		},
		passingGrade: 100,
	});

	return <Quiz questions={questions} />;
};

const QuizWithValidation = () => {
	const initialQuestions: Question<number>[] = [
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

	const { questions, validateAnswers, correctAnswerCount } = useQuiz({
		initialQuestions,
		validationMessages: {
			correct: "Correct.",
			incorrect: "Incorrect.",
		},
		passingGrade: 80,
	});
	const [disabled, setDisabled] = useState(false);

	const handleSubmit = () => {
		validateAnswers();
		setDisabled(true);
	};

	return (
		<div>
			{!!correctAnswerCount && (
				<div aria-live="polite">
					<p>Correct answers: {correctAnswerCount}</p>
				</div>
			)}
			<Quiz questions={questions} disabled={disabled} />
			<Spacer size="m" />
			<Button onClick={handleSubmit}>Submit</Button>
		</div>
	);
};

const QuizWithValidationAndAnswerFeedback = () => {
	const initialQuestions: Question<number>[] = [
		{
			question: "Lorem ipsum dolor sit amet",
			answers: [
				{
					label: "Option 1",
					value: 1,
					feedback: (
						<PrismFormatted
							text={`<p>Quaerat in autem sapiente illum. Vel mollitia omnis qui dolorem <code>um</code> esse eos maiores possimus. Est laborum quam aliquam qui sunt. Ut ea et qui provident voluptatibus. Eius quam odit sint cumque sint. Corporis quia et dicta.</p>`}
							getCodeBlockAriaLabel={(codeName) => `${codeName} code example`}
						/>
					),
				},
				{
					label: "Option 2",
					value: 2,
					feedback:
						"Recusandae necessitatibus consequatur voluptatem sapiente.",
				},
				{ label: "Option 3", value: 3, feedback: "Voluptas et et animi quo." },
			],
			correctAnswer: 1,
		},
		{
			question: "Consectetur adipiscing elit",
			answers: [
				{
					label: "Option 1",
					value: 1,
					feedback: (
						<PrismFormatted
							text={`<p>Quaerat in autem sapiente illum. Vel mollitia omnis qui dolorem <code>um</code> esse eos maiores possimus. Est laborum quam aliquam qui sunt. Ut ea et qui provident voluptatibus. Eius quam odit sint cumque sint. Corporis quia et dicta.</p>`}
							getCodeBlockAriaLabel={(codeName) => `${codeName} code example`}
						/>
					),
				},
				{
					label: "Option 2",
					value: 2,
					feedback:
						"Recusandae necessitatibus consequatur voluptatem sapiente.",
				},
				{ label: "Option 3", value: 3, feedback: "Voluptas et et animi quo." },
			],
			correctAnswer: 2,
		},
		{
			question: "Fugit itaque delectus voluptatem alias aliquid",
			answers: [
				{
					label: "Option 1",
					value: 1,
					feedback: (
						<PrismFormatted
							text={`<p>Quaerat in autem sapiente illum. Vel mollitia omnis qui dolorem <code>um</code> esse eos maiores possimus. Est laborum quam aliquam qui sunt. Ut ea et qui provident voluptatibus. Eius quam odit sint cumque sint. Corporis quia et dicta.</p>`}
							getCodeBlockAriaLabel={(codeName) => `${codeName} code example`}
						/>
					),
				},
				{
					label: "Option 2",
					value: 2,
					feedback:
						"Recusandae necessitatibus consequatur voluptatem sapiente.",
				},
				{ label: "Option 3", value: 3, feedback: "Voluptas et et animi quo." },
			],
			correctAnswer: 3,
		},
	];

	const { questions, validateAnswers, correctAnswerCount } = useQuiz({
		initialQuestions,
		validationMessages: {
			correct: "Correct.",
			incorrect: "Incorrect.",
		},
		passingGrade: 100,
	});
	const [disabled, setDisabled] = useState(false);

	const handleSubmit = () => {
		validateAnswers();
		setDisabled(true);
	};

	return (
		<div>
			{correctAnswerCount && (
				<div aria-live="polite">
					<p>Correct answers: {correctAnswerCount}</p>
				</div>
			)}
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

const initialQuestions = [
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

const App = () => {
  const { questions } = useQuiz({
    initialQuestions,
    validationMessages: {
      correct: "Correct",
      incorrect: "Incorrect",
	  },
	});

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
import { Quiz, useQuiz, Button, Spacer } from '@freecodecamp/ui';

const initialQuestions = [
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

const App = () => {
  const { questions, validateAnswers } = useQuiz({
	  initialQuestions,
    validationMessages: {
      correct: "Correct",
      incorrect: "Incorrect",
	  },
	});

  const [disabled, setDisabled] = useState(false);

  const handleSubmit = () => {
    validateAnswers();
    setDisabled(true);
  };

  return (
    <div>
      {correctAnswerCount && <div aria-live="polite"><p>Correct answers: {correctAnswerCount}</p></div>}
      <Quiz questions={questions} disabled={disabled} />
      <Spacer size="m" />
      <Button onClick={handleSubmit}>Submit</Button>
    </div>
  );
};`,
			},
		},
	},
};

export const WithValidationAndAnswerFeedback: Story = {
	render: QuizWithValidationAndAnswerFeedback,
	args: {},
	parameters: {
		docs: {
			source: {
				code: `
import { Quiz, useQuiz, Button, Spacer } from '@freecodecamp/ui';

const initialQuestions = [
  {
		question: "Lorem ipsum dolor sit amet",
		answers: [
			{
				label: "Option 1",
				value: 1,
				feedback: (
					<PrismFormatted
						text={\`<p>Quaerat in autem sapiente illum. Vel mollitia omnis qui dolorem <code>um</code> esse eos maiores possimus. Est laborum quam aliquam qui sunt. Ut ea et qui provident voluptatibus. Eius quam odit sint cumque sint. Corporis quia et dicta.</p>\`}
						getCodeBlockAriaLabel={(codeName) => \`\${codeName} code example\`}
					/>
				),
			},
			{
				label: "Option 2",
				value: 2,
				feedback:
					"Recusandae necessitatibus consequatur voluptatem sapiente.",
			},
			{ label: "Option 3", value: 3, feedback: "Voluptas et et animi quo." },
		],
		correctAnswer: 1,
	},
	{
		question: "Consectetur adipiscing elit",
		answers: [
			{
				label: "Option 1",
				value: 1,
				feedback: (
					<PrismFormatted
						text={\`<p>Quaerat in autem sapiente illum. Vel mollitia omnis qui dolorem <code>um</code> esse eos maiores possimus. Est laborum quam aliquam qui sunt. Ut ea et qui provident voluptatibus. Eius quam odit sint cumque sint. Corporis quia et dicta.</p>\`}
						getCodeBlockAriaLabel={(codeName) => \`\${codeName} code example\`}
					/>
				),
			},
			{
				label: "Option 2",
				value: 2,
				feedback:
					"Recusandae necessitatibus consequatur voluptatem sapiente.",
			},
			{ label: "Option 3", value: 3, feedback: "Voluptas et et animi quo." },
		],
		correctAnswer: 2,
	},
	{
		question: "Fugit itaque delectus voluptatem alias aliquid",
		answers: [
			{
				label: "Option 1",
				value: 1,
				feedback: (
					<PrismFormatted
						text={\`<p>Quaerat in autem sapiente illum. Vel mollitia omnis qui dolorem <code>um</code> esse eos maiores possimus. Est laborum quam aliquam qui sunt. Ut ea et qui provident voluptatibus. Eius quam odit sint cumque sint. Corporis quia et dicta.</p>\`}
						getCodeBlockAriaLabel={(codeName) => \`\${codeName} code example\`}
					/>
				),
			},
			{
				label: "Option 2",
				value: 2,
				feedback:
					"Recusandae necessitatibus consequatur voluptatem sapiente.",
			},
			{ label: "Option 3", value: 3, feedback: "Voluptas et et animi quo." },
		],
		correctAnswer: 3,
	},
];

const App = () => {
  const { questions, validateAnswers } = useQuiz({
	  initialQuestions,
    validationMessages: {
      correct: "Correct.",
      incorrect: "Incorrect.",
	  },
	});

  const [disabled, setDisabled] = useState(false);

  const handleSubmit = () => {
    validateAnswers();
    setDisabled(true);
  };

  return (
    <div>
      {!!correctAnswerCount && <div aria-live="polite"><p>Correct answers: {correctAnswerCount}</p></div>}
      <Quiz questions={questions} disabled={disabled} />
      <Spacer size="m" />
      <Button onClick={handleSubmit}>Submit</Button>
    </div>
  );
};`,
			},
		},
	},
};

export default story;
