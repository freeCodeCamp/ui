import React, { useState } from "react";
import { Meta, StoryObj } from "@storybook/react";

import { PrismFormatted } from "../prism-formatted";

import { QuizQuestion } from "./quiz-question";
import type { QuizQuestionProps } from "./types";

const story = {
	title: "Components/QuizQuestion",
	component: QuizQuestion,
} satisfies Meta<typeof QuizQuestion>;

type Story = StoryObj<typeof QuizQuestion>;

const QuizQuestionComp = <AnswerT extends number | string>({
	question,
	answers = [],
	disabled,
	position,
	selectedAnswer,
}: Partial<QuizQuestionProps<AnswerT>>) => {
	const [answer, setAnswer] =
		useState<QuizQuestionProps<AnswerT>["selectedAnswer"]>(selectedAnswer);

	return (
		<QuizQuestion
			question={question}
			answers={answers}
			disabled={disabled}
			onChange={(newAnswer) => setAnswer(newAnswer)}
			selectedAnswer={answer}
			position={position}
		/>
	);
};

export const Default: Story = {
	render: QuizQuestionComp,
	args: {
		question: "Lorem ipsum dolor sit amet, consectetur adipiscing elit?",
		answers: [
			{ label: "Option 1", value: 1 },
			{
				label:
					"Tempora sed magnam consequatur dolor alias placeat aspernatur. Odio et non repudiandae debitis fugit. Quia ut tempore eaque et nisi qui aspernatur. Molestiae sed id accusantium. Temporibus in magni ut. Est aut distinctio molestiae sed. Dicta consequatur impedit totam totam incidunt dolor possimus. Aut totam officia iure consequatur ea.",
				value: 2,
			},
			{
				label: (
					<PrismFormatted
						text={`<pre><code class="language-html">&#x3C;form>\n  &#x3C;input type="text" name="username" placeholder="Dolorem quod aut ipsa velit voluptate vel voluptas. Rem amet consectetur qui beatae.">\n&#x3C;/form>\n</code></pre>`}
						getCodeBlockAriaLabel={(codeName) => `${codeName} code example`}
					/>
				),
				value: 3,
			},
			{
				label: (
					<PrismFormatted
						text={`<p>Molestiae sed id accusantium <code>html</code> in magni ut.</p>`}
						getCodeBlockAriaLabel={(codeName) => `${codeName} code example`}
					/>
				),
				value: 4,
			},
			{
				label: (
					<PrismFormatted
						text={`<p><code>possimus</code></p>`}
						getCodeBlockAriaLabel={(codeName) => `${codeName} code example`}
					/>
				),
				value: 5,
			},
			{
				label: (
					<PrismFormatted
						text={`<p><code>&#x3C;span>placeat aspernatur&#x3C;/span></code></p>`}
						getCodeBlockAriaLabel={(codeName) => `${codeName} code example`}
					/>
				),
				value: 6,
			},
			{
				label: (
					<PrismFormatted
						text={`<p><code>Dicta consequatur impedit totam totam incidunt dolor possimus. Aut totam officia iure consequatur ea. Dolores est aut aliquid beatae vel. Quo assumenda aut corporis sed magni dolorem pariatur qui</code></p>`}
						getCodeBlockAriaLabel={(codeName) => `${codeName} code example`}
					/>
				),
				value: 7,
			},
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
      answers: [
			{ label: "Option 1", value: 1 },
			{
				label:
					"Tempora sed magnam consequatur dolor alias placeat aspernatur. Odio et non repudiandae debitis fugit. Quia ut tempore eaque et nisi qui aspernatur. Molestiae sed id accusantium. Temporibus in magni ut. Est aut distinctio molestiae sed. Dicta consequatur impedit totam totam incidunt dolor possimus. Aut totam officia iure consequatur ea.",
				value: 2,
			},
			{
				label: (
					<PrismFormatted
						text={\`<pre><code class="language-html">&#x3C;form>\n  &#x3C;input type="text" name="username" placeholder="Dolorem quod aut ipsa velit voluptate vel voluptas. Rem amet consectetur qui beatae.">\n&#x3C;/form>\n</code></pre>\`}
						getCodeBlockAriaLabel={(codeName) => \`\${codeName} code example\`}
					/>
				),
				value: 3,
			},
			{
				label: (
					<PrismFormatted
						text={\`<p>Molestiae sed id accusantium <code>html</code> in magni ut.</p>\`}
						getCodeBlockAriaLabel={(codeName) => \`\${codeName} code example\`}
					/>
				),
				value: 4,
			},
			{
				label: (
					<PrismFormatted
						text={\`<p><code>possimus</code></p>\`}
						getCodeBlockAriaLabel={(codeName) => \`\${codeName} code example\`}
					/>
				),
				value: 5,
			},
			{
				label: (
					<PrismFormatted
						text={\`<p><code>&#x3C;span>placeat aspernatur&#x3C;/span></code></p>\`}
						getCodeBlockAriaLabel={(codeName) => \`\${codeName} code example\`}
					/>
				),
				value: 6,
			},
			{
				label: (
					<PrismFormatted
						text={\`<p><code>Dicta consequatur impedit totam totam incidunt dolor possimus. Aut totam officia iure consequatur ea. Dolores est aut aliquid beatae vel. Quo assumenda aut corporis sed magni dolorem pariatur qui</code></p>\`}
						getCodeBlockAriaLabel={(codeName) => \`\${codeName} code example\`}
					/>
				),
				value: 7,
			},
      onChange={(newAnswer) => setAnswer(newAnswer)}
      selectedAnswer={answer}
    />
  );
}`,
			},
		},
	},
};

export const WithCodeInQuestionText: Story = {
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
			{
				label: "Option 1",
				value: 1,
				validation: {
					state: "correct",
					message: "Correct.",
				},
			},
			{
				label: "Option 2",
				value: 2,
			},
			{
				label: "Option 3",
				value: 3,
			},
		],
		selectedAnswer: 1,
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
        { 
			    label: "Option 1",
					value: 1,
					validation: {
					  state: "correct",
					  message: "Correct.",
				  },
				},
        { label: "Option 2", value: 2 },
        { label: "Option 3", value: 3 }
      ]}
      onChange={(newAnswer) => setAnswer(newAnswer)}
      selectedAnswer={answer}
			selectedAnswer: 1,
			disabled: true
    />
  );
}`,
			},
		},
	},
};

export const CorrectWithAnswerFeedback: Story = {
	render: QuizQuestionComp,
	args: {
		question: "Lorem ipsum dolor sit amet, consectetur adipiscing elit?",
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
				validation: { state: "correct", message: "Correct." },
			},
			{ label: "Option 2", value: 2 },
			{ label: "Option 3", value: 3 },
		],
		selectedAnswer: 1,
		disabled: true,
	},
	parameters: {
		docs: {
			source: {
				code: `const App = () => {
  const [answer, setAnswer] = useState();

  return (
    <QuizQuestion
      question="Lorem ipsum dolor sit amet, consectetur adipiscing elit?"
      answers={[
        { 
          label: "Option 1", 
          value: 1,
          feedback: (
            <PrismFormatted
              text={\`<p>Quaerat in autem sapiente illum. Vel mollitia omnis qui dolorem <code>um</code> esse eos maiores possimus. Est laborum quam aliquam qui sunt. Ut ea et qui provident voluptatibus. Eius quam odit sint cumque sint. Corporis quia et dicta.</p>\`}
              getCodeBlockAriaLabel={(codeName) => \`\${codeName} code example\`}
            />
          ),
					validation: { state: "correct", message: "Correct." },
        },
        { label: "Option 2", value: 2 },
        { label: "Option 3", value: 3 }
      ]}
      onChange={(newAnswer) => setAnswer(newAnswer)}
      selectedAnswer={answer}
      disabled: true,
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
			{
				label: "Option 1",
				value: 1,
				validation: {
					state: "incorrect",
					message: "Incorrect.",
				},
			},
			{
				label: "Option 2",
				value: 2,
			},
			{
				label: "Option 3",
				value: 3,
			},
		],
		selectedAnswer: 1,
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
        { 
	        label: "Option 1",
		      value: 1, 
		      validation: {
		        state: "incorrect",
		        message: "Incorrect."
		      },
		    },
        { 
	        label: "Option 2",
		      value: 2,
		    },
        { 
	        label: "Option 3",
		      value: 3,
		    },
      ]}
      onChange={(newAnswer) => setAnswer(newAnswer)}
			selectedAnswer: 1,
			disabled: true,
    />
  );
}`,
			},
		},
	},
};

export const IncorrectWithAnswerFeedback: Story = {
	render: QuizQuestionComp,
	args: {
		question: "Lorem ipsum dolor sit amet, consectetur adipiscing elit?",
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
				validation: { state: "incorrect", message: "Incorrect." },
			},
			{ label: "Option 2", value: 2 },
			{ label: "Option 3", value: 3 },
		],
		selectedAnswer: 1,
		disabled: true,
	},
	parameters: {
		docs: {
			source: {
				code: `const App = () => {
  const [answer, setAnswer] = useState();

  return (
    <QuizQuestion
      question="Lorem ipsum dolor sit amet, consectetur adipiscing elit?"
      answers={[
        { 
          label: "Option 1", 
          value: 1,
          feedback: (
            <PrismFormatted
              text={\`<p>Quaerat in autem sapiente illum. Vel mollitia omnis qui dolorem <code>um</code> esse eos maiores possimus. Est laborum quam aliquam qui sunt. Ut ea et qui provident voluptatibus. Eius quam odit sint cumque sint. Corporis quia et dicta.</p>\`}
              getCodeBlockAriaLabel={(codeName) => \`\${codeName} code example\`}
            />
          ),
					validation: { state: "incorrect", message: "Incorrect." },
        },
        { label: "Option 2", value: 2 },
        { label: "Option 3", value: 3 }
      ]}
      onChange={(newAnswer) => setAnswer(newAnswer)}
      selectedAnswer={answer}
      disabled: true,
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
