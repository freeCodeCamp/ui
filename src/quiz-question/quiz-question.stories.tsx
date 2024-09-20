import React, { useState } from "react";
import { Meta, StoryObj } from "@storybook/react";

import { PrismFormatted } from "../prism-formatted";

import { QuizQuestion } from "./quiz-question";
import { type QuizQuestionProps } from "./types";

const story = {
	title: "Components/QuizQuestion",
	component: QuizQuestion,
} satisfies Meta<typeof QuizQuestion>;

type Story = StoryObj<typeof QuizQuestion>;

type QuizQuestionCompProps = Pick<
	QuizQuestionProps,
	"question" | "answers" | "disabled" | "validation" | "position"
>;

const QuizQuestionComp = ({
	question,
	answers,
	disabled,
	validation,
	position,
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
			position={position}
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

export const WithCodeInQuestionAndAnswerText: Story = {
	render: QuizQuestionComp,
	args: {
		question: (
			<PrismFormatted
				text={`<p>Given the following code:</p>
<pre><code class="language-python">temp = "5 degrees"
cel = 0
fahr = float(temp)
cel = (fahr - 32.0) * 5.0 / 9.0
print(cel)
</code></pre>
<p>Which line/lines should be surrounded by <code>try</code> block?</p>`}
				getCodeBlockAriaLabel={(codeName) => `${codeName} code example`}
			/>
		),
		answers: [
			{
				label: (
					<PrismFormatted
						text={`<pre><code class="language-html"><p>Option 1</p>
<p>Lorem ipsum</p>
</code></pre>`}
						getCodeBlockAriaLabel={(codeName) => `${codeName} code example`}
					/>
				),
				value: 1,
			},
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
      question={
        <PrismFormatted
          text={\`<p>Given the following code:</p>
<pre><code class="language-python">temp = "5 degrees"
cel = 0
fahr = float(temp)
cel = (fahr - 32.0) * 5.0 / 9.0
print(cel)
</code></pre>
<p>Which line/lines should be surrounded by <code>try</code> block?</p>\`}
          getCodeBlockAriaLabel={(codeName) => \`\${codeName} code example\`}
      />}
      answers={[
        { 
          label: (
            <PrismFormatted
              text={\`<pre><code class="language-html"><p>Option 1</p>
<p>Lorem ipsum</p>
</code></pre>\`}
              getCodeBlockAriaLabel={(codeName) => \`\${codeName} code example\`}
	          />
          ), 
          value: 1,
        },
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

export const WithPosistion: Story = {
	render: QuizQuestionComp,
	args: {
		question: (
			<PrismFormatted
				text={`<p>Given the following code:</p>
<pre><code class="language-python">temp = "5 degrees"
cel = 0
fahr = float(temp)
cel = (fahr - 32.0) * 5.0 / 9.0
print(cel)
</code></pre>
<p>Which line/lines should be surrounded by <code>try</code> block?</p>`}
				getCodeBlockAriaLabel={(codeName) => `${codeName} code example`}
			/>
		),
		answers: [
			{ label: "Option 1", value: 1 },
			{ label: "Option 2", value: 2 },
			{ label: "Option 3", value: 3 },
		],
		position: 1,
	},
	parameters: {
		docs: {
			source: {
				code: `const App = () => {
  const [answer, setAnswer] = useState();

  return (
    <QuizQuestion
      question={
        <PrismFormatted
          text={\`<p>Given the following code:</p>
<pre><code class="language-python">temp = "5 degrees"
cel = 0
fahr = float(temp)
cel = (fahr - 32.0) * 5.0 / 9.0
print(cel)
</code></pre>
<p>Which line/lines should be surrounded by <code>try</code> block?</p>\`}
          getCodeBlockAriaLabel={(codeName) => \`\${codeName} code example\`}
       />
      }
      answers={[
        { label: "Option 1", value: 1 },
        { label: "Option 2", value: 2 },
        { label: "Option 3", value: 3 }
      ]}
      onChange={(newAnswer) => setAnswer(newAnswer)}
      selectedAnswer={answer}
      position={1}
    />
  );
}`,
			},
		},
	},
};

export default story;
