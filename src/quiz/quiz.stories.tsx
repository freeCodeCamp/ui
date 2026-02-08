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
	const initialQuestions: Question<number>[] = [
		{
			question: "Which question is incorrect?",
			answers: [
				{
					label: "Are you into photography?",
					value: 1,
					action: {
						onClick: () => {
							alert("Speaking practice: Are you into photography?");
						},
						ariaLabel: "Practice speaking",
					},
				},
				{
					label: "Are they into photography?",
					value: 2,
					action: {
						onClick: () => {
							alert("Speaking practice: Are they into photography?");
						},
						ariaLabel: "Practice speaking",
					},
				},
				{
					label: "Is he into photography?",
					value: 3,
					action: {
						onClick: () => {
							alert("Speaking practice: Is he into photography?");
						},
						ariaLabel: "Practice speaking",
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
							alert("Speaking practice: Friendly");
						},
						ariaLabel: "Practice speaking",
					},
				},
				{
					label: "Cool",
					value: 2,
					action: {
						onClick: () => {
							alert("Speaking practice: Cool");
						},
						ariaLabel: "Practice speaking",
					},
				},
				{
					label: "Supportive",
					value: 3,
					action: {
						onClick: () => {
							alert("Speaking practice: Supportive");
						},
						ariaLabel: "Practice speaking",
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

	return <Quiz questions={questions} />;
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
            alert("Speaking practice: Are you into photography?");
          },
          ariaLabel: "Practice speaking",
        },
      },
      {
        label: "Are they into photography?",
        value: 2,
        action: {
          onClick: () => {
            alert("Speaking practice: Are they into photography?");
          },
          ariaLabel: "Practice speaking",
        },
      },
      {
        label: "Is he into photography?",
        value: 3,
        action: {
          onClick: () => {
            alert("Speaking practice: Is he into photography?");
          },
          ariaLabel: "Practice speaking",
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
            alert("Speaking practice: Friendly");
          },
          ariaLabel: "Practice speaking",
        },
      },
      {
        label: "Cool",
        value: 2,
        action: {
          onClick: () => {
            alert("Speaking practice: Cool");
          },
          ariaLabel: "Practice speaking",
        },
      },
      {
        label: "Supportive",
        value: 3,
        action: {
          onClick: () => {
            alert("Speaking practice: Supportive");
          },
          ariaLabel: "Practice speaking",
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

const QuizWithAudio = () => {
	const initialQuestions: Question<number>[] = [
		{
			question: "Listen to the audio and answer: Who is the graphic designer?",
			audioUrl:
				"https://cdn.freecodecamp.org/curriculum/english/animation-assets/sounds/1.1-1.mp3",
			audioAriaLabel: "Audio for question 1",
			transcript: `<p><b>Maria:</b> Hello. You're the new graphic designer, right? I'm Maria, the team lead.</p>
<p><b>Tom:</b> Hi, that's right. I'm Tom McKenzie. It's a pleasure to meet you.</p>`,
			answers: [
				{ label: "Tom", value: 1 },
				{ label: "Maria", value: 2 },
				{ label: "Tom and Maria", value: 3 },
			],
			correctAnswer: 2,
		},
		{
			question: "What is Maria's role?",
			answers: [
				{ label: "Graphic designer", value: 1 },
				{ label: "Software engineer", value: 2 },
				{ label: "Team lead", value: 3 },
			],
			correctAnswer: 2,
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

export const WithAudio: Story = {
	render: QuizWithAudio,
	args: {},
	parameters: {
		docs: {
			source: {
				code: `
import { Quiz, useQuiz } from '@freecodecamp/ui';

const initialQuestions = [
  {
    question: "Listen to the audio and answer: Who is the graphic designer?",
    audioUrl: "https://cdn.freecodecamp.org/curriculum/english/animation-assets/sounds/1.1-1.mp3",
    audioAriaLabel: "Audio for question 1",
    transcript: \`<p><b>Maria:</b> Hello. You're the new graphic designer, right? I'm Maria, the team lead.</p>
<p><b>Tom:</b> Hi, that's right. I'm Tom McKenzie. It's a pleasure to meet you.</p>\`,
    answers: [
      { label: "Tom", value: 1 },
      { label: "Maria", value: 2 },
      { label: "Tom and Maria", value: 3 }
    ],
    correctAnswer: 2
  },
  {
    question: "What is Maria's role?",
    answers: [
      { label: "Graphic designer", value: 1 },
      { label: "Software engineer", value: 2 },
      { label: "Team lead", value: 3 }
    ],
    correctAnswer: 3
  }
];

const App = () => {
  const { questions } = useQuiz({
    initialQuestions,
    validationMessages: {
      correct: "Correct.",
      incorrect: "Incorrect."
    }
  });

  return <Quiz questions={questions} />;
};`,
			},
		},
	},
};

const QuizWithAudioSegment = () => {
	const initialQuestions: Question<number>[] = [
		{
			question:
				"Listen to the audio segment and answer: What does Maria say first?",
			audioUrl:
				"https://cdn.freecodecamp.org/curriculum/english/animation-assets/sounds/1.1-1.mp3",
			audioAriaLabel: "Audio segment for question 1",
			transcript: `<p><b>Maria:</b> Hello. You're the new graphic designer, right?</p>`,
			audioStartTime: 0,
			audioFinishTime: 2.5,
			answers: [
				{ label: "Hello. You're the new graphic designer, right?", value: 1 },
				{ label: "I'm Maria, the team lead.", value: 2 },
				{ label: "It's a pleasure to meet you.", value: 3 },
			],
			correctAnswer: 1,
		},
		{
			question: "Listen to this segment: Who introduces themselves?",
			audioUrl:
				"https://cdn.freecodecamp.org/curriculum/english/animation-assets/sounds/1.1-1.mp3",
			audioAriaLabel: "Audio segment for question 2",
			transcript: `<p><b>Tom:</b> Hi, that's right. I'm Tom McKenzie.</p>`,
			audioStartTime: 4,
			audioFinishTime: 7,
			answers: [
				{ label: "Maria", value: 1 },
				{ label: "Tom", value: 2 },
				{ label: "Both", value: 3 },
			],
			correctAnswer: 2,
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

export const WithAudioSegment: Story = {
	render: QuizWithAudioSegment,
	args: {},
	parameters: {
		docs: {
			source: {
				code: `
import { Quiz, useQuiz } from '@freecodecamp/ui';

const initialQuestions = [
  {
    question: "Listen to the audio segment and answer: What does Maria say first?",
    audioUrl: "https://cdn.freecodecamp.org/curriculum/english/animation-assets/sounds/1.1-1.mp3",
    audioAriaLabel: "Audio segment for question 1",
    transcript: \`<p><b>Maria:</b> Hello. You're the new graphic designer, right?</p>\`,
    audioStartTime: 0,
    audioFinishTime: 2.5,
    answers: [
      { label: "Hello. You're the new graphic designer, right?", value: 1 },
      { label: "I'm Maria, the team lead.", value: 2 },
      { label: "It's a pleasure to meet you.", value: 3 }
    ],
    correctAnswer: 1
  },
  {
    question: "Listen to this segment: Who introduces themselves?",
    audioUrl: "https://cdn.freecodecamp.org/curriculum/english/animation-assets/sounds/1.1-1.mp3",
    audioAriaLabel: "Audio segment for question 2",
    transcript: \`<p><b>Tom:</b> Hi, that's right. I'm Tom McKenzie.</p>\`,
    audioStartTime: 4,
    audioFinishTime: 7,
    answers: [
      { label: "Maria", value: 1 },
      { label: "Tom", value: 2 },
      { label: "Both", value: 3 }
    ],
    correctAnswer: 2
  }
];

const App = () => {
  const { questions } = useQuiz({
    initialQuestions,
    validationMessages: {
      correct: "Correct.",
      incorrect: "Incorrect."
    }
  });

  return <Quiz questions={questions} />;
};`,
			},
		},
	},
};

export default story;
