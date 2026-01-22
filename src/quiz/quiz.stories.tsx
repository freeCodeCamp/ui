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
		passingPercent: 100,
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
		passingPercent: 80,
	});
	const [disabled, setDisabled] = useState(false);

	const handleSubmit = () => {
		validateAnswers();
		setDisabled(true);
	};

	return (
		<div>
			<div aria-live="polite">
				{!!correctAnswerCount && (
					<p className="text-foreground-primary">
						Correct answers: {correctAnswerCount}
					</p>
				)}
			</div>
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
		passingPercent: 100,
	});
	const [disabled, setDisabled] = useState(false);

	const handleSubmit = () => {
		validateAnswers();
		setDisabled(true);
	};

	return (
		<div>
			<div aria-live="polite">
				{!!correctAnswerCount && (
					<p className="text-foreground-primary">
						Correct answers: {correctAnswerCount}
					</p>
				)}
			</div>
			<Quiz questions={questions} disabled={disabled} />
			<Spacer size="m" />
			<Button onClick={handleSubmit}>Submit</Button>
		</div>
	);
};

const QuizWithCorrectAnswersShownOnSuccess = () => {
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
		passingPercent: 50,
		showCorrectAnswersOnSuccess: true,
	});
	const [disabled, setDisabled] = useState(false);

	const handleSubmit = () => {
		validateAnswers();
		setDisabled(true);
	};

	return (
		<div>
			<div aria-live="polite">
				{!!correctAnswerCount && (
					<p className="text-foreground-primary">
						Correct answers: {correctAnswerCount}
					</p>
				)}
			</div>
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
      <div aria-live="polite">
				{!!correctAnswerCount && (
					<p className="text-foreground-primary">
						Correct answers: {correctAnswerCount}
					</p>
				)}
			</div>
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
      <div aria-live="polite">
				{!!correctAnswerCount && (
					<p className="text-foreground-primary">
						Correct answers: {correctAnswerCount}
					</p>
				)}
			</div>
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

export const WithCorrectAnswersShownOnSuccess: Story = {
	render: QuizWithCorrectAnswersShownOnSuccess,
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
		passingPercent: 50,
		showCorrectAnswersOnSuccess: true
	});

  const [disabled, setDisabled] = useState(false);

  const handleSubmit = () => {
    validateAnswers();
    setDisabled(true);
  };

  return (
    <div>
      <div aria-live="polite">
				{!!correctAnswerCount && (
					<p className="text-foreground-primary">
						Correct answers: {correctAnswerCount}
					</p>
				)}
			</div>
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

const QuizWithActionButtons = () => {
	const [actionLog, setActionLog] = useState<string[]>([]);

	const initialQuestions: Question<number>[] = [
		{
			question: "Which question is incorrect?",
			answers: [
				{
					label: "Are you into photography?",
					value: 1,
					action: {
						onClick: () => {
							setActionLog((prev) => [
								...prev,
								"Practice: Are you into photography?",
							]);
							console.log("Speaking practice: Are you into photography?");
						},
						ariaLabel: "Practice speaking Are you into photography?",
					},
				},
				{
					label: "Are they into photography?",
					value: 2,
					action: {
						onClick: () => {
							setActionLog((prev) => [
								...prev,
								"Practice: Are they into photography?",
							]);
							console.log("Speaking practice: Are they into photography?");
						},
						ariaLabel: "Practice speaking Are they into photography?",
					},
				},
				{
					label: "Is he into photography?",
					value: 3,
					action: {
						onClick: () => {
							setActionLog((prev) => [
								...prev,
								"Practice: Is he into photography?",
							]);
							console.log("Speaking practice: Is he into photography?");
						},
						ariaLabel: "Practice speaking Is he into photography?",
					},
				},
				{ label: "Am we into photography?", value: 4 },
			],
			correctAnswer: 4,
		},
		{
			question: "Which adjective shows a negative feeling?",
			answers: [
				{
					label: "Friendly",
					value: 1,
					action: {
						onClick: () => {
							setActionLog((prev) => [...prev, "Practice: Friendly"]);
							console.log("Speaking practice: Friendly");
						},
						ariaLabel: "Practice speaking Friendly",
					},
				},
				{
					label: "Cool",
					value: 2,
					action: {
						onClick: () => {
							setActionLog((prev) => [...prev, "Practice: Cool"]);
							console.log("Speaking practice: Cool");
						},
						ariaLabel: "Practice speaking Cool",
					},
				},
				{
					label: "Supportive",
					value: 3,
					action: {
						onClick: () => {
							setActionLog((prev) => [...prev, "Practice: Supportive"]);
							console.log("Speaking practice: Supportive");
						},
						ariaLabel: "Practice speaking Supportive",
					},
				},
				{ label: "Boring", value: 4 },
			],
			correctAnswer: 4,
		},
		{
			question:
				"What does this sentence mean: `I've played these games before`?",
			answers: [
				{ label: "You are playing them now.", value: 1 },
				{ label: "You will play them later.", value: 2 },
				{ label: "You never played them.", value: 3 },
				{ label: "You played them in the past.", value: 4 },
			],
			correctAnswer: 4,
		},
	];

	const { questions } = useQuiz({
		initialQuestions,
		validationMessages: {
			correct: "Correct.",
			incorrect: "Incorrect.",
		},
		passingPercent: 100,
	});

	return (
		<div>
			{actionLog.length > 0 && (
				<div className="mb-4 p-4 border border-gray-300 rounded">
					<p className="text-foreground-primary font-bold mb-2">Action Log:</p>
					<ul className="list-disc list-inside text-foreground-primary">
						{actionLog.map((log, index) => (
							<li key={index}>{log}</li>
						))}
					</ul>
				</div>
			)}
			<Quiz questions={questions} />
		</div>
	);
};

export const WithActionButtons: Story = {
	render: QuizWithActionButtons,
	args: {},
	parameters: {
		docs: {
			description: {
				story:
					"Quiz with action buttons on selected answers. Useful for language learning features like 'Practice speaking'. Some answers have action buttons while others do not, demonstrating mixed configurations across questions.",
			},
			source: {
				code: `
import { Quiz, useQuiz } from '@freecodecamp/ui';

const initialQuestions = [
  {
    question: "Which question is incorrect?",
    answers: [
      {
        label: "Are you into photography?",
        value: 1,
        action: {
          onClick: () => {
            console.log("Speaking practice: Are you into photography?");
          },
          ariaLabel: "Practice speaking Are you into photography?",
        },
      },
      {
        label: "Are they into photography?",
        value: 2,
        action: {
          onClick: () => {
            console.log("Speaking practice: Are they into photography?");
          },
          ariaLabel: "Practice speaking Are they into photography?",
        },
      },
      {
        label: "Is he into photography?",
        value: 3,
        action: {
          onClick: () => {
            console.log("Speaking practice: Is he into photography?");
          },
          ariaLabel: "Practice speaking Is he into photography?",
        },
      },
      { label: "Am we into photography?", value: 4 },
    ],
    correctAnswer: 4,
  },
  {
    question: "Which adjective shows a negative feeling?",
    answers: [
      {
        label: "Friendly",
        value: 1,
        action: {
          onClick: () => {
            console.log("Speaking practice: Friendly");
          },
          ariaLabel: "Practice speaking Friendly",
        },
      },
      {
        label: "Cool",
        value: 2,
        action: {
          onClick: () => {
            console.log("Speaking practice: Cool");
          },
          ariaLabel: "Practice speaking Cool",
        },
      },
      {
        label: "Supportive",
        value: 3,
        action: {
          onClick: () => {
            console.log("Speaking practice: Supportive");
          },
          ariaLabel: "Practice speaking Supportive",
        },
      },
      { label: "Boring", value: 4 },
    ],
    correctAnswer: 4,
  },
  {
    question: "What does this sentence mean: \`I've played these games before\`?",
    answers: [
      { label: "You are playing them now.", value: 1 },
      { label: "You will play them later.", value: 2 },
      { label: "You never played them.", value: 3 },
      { label: "You played them in the past.", value: 4 },
    ],
    correctAnswer: 4,
  },
  {
    question: "What does 'ubiquitous' mean?",
    answers: [
      {
        label: "Rare or uncommon",
        value: 1,
        action: {
          onClick: () => {
            console.log("Speaking practice: Rare or uncommon");
          },
          ariaLabel: "Practice speaking Rare or uncommon",
        },
      },
      {
        label: "Present everywhere",
        value: 2,
        action: {
          onClick: () => {
            console.log("Speaking practice: Present everywhere");
          },
          ariaLabel: "Practice speaking Present everywhere",
        },
      },
      { label: "Very expensive", value: 3 },
    ],
    correctAnswer: 2,
  },
  {
    question: "What is the past tense of 'run' in English?",
    answers: [
      { label: "Runned", value: 1 },
      { label: "Ran", value: 2 },
      { label: "Running", value: 3 },
    ],
    correctAnswer: 2,
  },
];

const App = () => {
  const { questions } = useQuiz({
    initialQuestions,
    validationMessages: {
      correct: "Correct.",
      incorrect: "Incorrect.",
    },
    passingPercent: 100,
  });

  return <Quiz questions={questions} />;
};`,
			},
		},
	},
};

export default story;
