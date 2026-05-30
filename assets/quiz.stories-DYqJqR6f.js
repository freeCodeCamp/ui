import{a as e,n as t}from"./chunk-BneVvdWh.js";import{t as n}from"./react-XedgCGTy.js";import{n as r,t as i}from"./iframe-DzyGt2uA.js";import{n as a,t as o}from"./button-BslSpz5e.js";import{t as s}from"./spacer-DDe3bhN3.js";import{t as c}from"./spacer-4iH5AdkI.js";import{t as l}from"./prism-formatted-CRMnlBua.js";import{n as u,r as d,t as f}from"./quiz-question-DDAEgT3h.js";var p=t((()=>{u()})),m,h,g=t((()=>{m=e(n()),p(),h=({questions:e,disabled:t,required:n})=>m.createElement(`ul`,{className:`flex flex-col gap-y-[48px] list-none`},e.map((e,r)=>m.createElement(`li`,{key:r},m.createElement(f,{...e,position:r+1,disabled:t,required:n})))),h.__docgenInfo={description:``,methods:[],displayName:`Quiz`,props:{questions:{required:!0,tsType:{name:`Array`,elements:[{name:`union`,raw:`| QuestionWithoutAudio<AnswerT>
| QuestionWithAudio<AnswerT>`,elements:[{name:`intersection`,raw:`QuestionBase<AnswerT> & {
	audioUrl?: never;
	audioAriaLabel?: never;
	transcript?: never;
	audioStartTime?: never;
	audioFinishTime?: never;
}`,elements:[{name:`QuestionBase`,elements:[{name:`AnswerT`}],raw:`QuestionBase<AnswerT>`},{name:`signature`,type:`object`,raw:`{
	audioUrl?: never;
	audioAriaLabel?: never;
	transcript?: never;
	audioStartTime?: never;
	audioFinishTime?: never;
}`,signature:{properties:[{key:`audioUrl`,value:{name:`never`,required:!1}},{key:`audioAriaLabel`,value:{name:`never`,required:!1}},{key:`transcript`,value:{name:`never`,required:!1}},{key:`audioStartTime`,value:{name:`never`,required:!1}},{key:`audioFinishTime`,value:{name:`never`,required:!1}}]}}]},{name:`intersection`,raw:`QuestionBase<AnswerT> & {
	/**
	 * URL to an audio file for the question
	 */
	audioUrl: string;
	/**
	 * Accessible label for the audio element
	 */
	audioAriaLabel: string;
	/**
	 * Transcript text for the audio
	 */
	transcript: string;
	/**
	 * Start time in seconds for the audio segment
	 */
	audioStartTime?: number;
	/**
	 * Finish time in seconds for the audio segment
	 */
	audioFinishTime?: number;
}`,elements:[{name:`QuestionBase`,elements:[{name:`AnswerT`}],raw:`QuestionBase<AnswerT>`},{name:`signature`,type:`object`,raw:`{
	/**
	 * URL to an audio file for the question
	 */
	audioUrl: string;
	/**
	 * Accessible label for the audio element
	 */
	audioAriaLabel: string;
	/**
	 * Transcript text for the audio
	 */
	transcript: string;
	/**
	 * Start time in seconds for the audio segment
	 */
	audioStartTime?: number;
	/**
	 * Finish time in seconds for the audio segment
	 */
	audioFinishTime?: number;
}`,signature:{properties:[{key:`audioUrl`,value:{name:`string`,required:!0},description:`URL to an audio file for the question`},{key:`audioAriaLabel`,value:{name:`string`,required:!0},description:`Accessible label for the audio element`},{key:`transcript`,value:{name:`string`,required:!0},description:`Transcript text for the audio`},{key:`audioStartTime`,value:{name:`number`,required:!1},description:`Start time in seconds for the audio segment`},{key:`audioFinishTime`,value:{name:`number`,required:!1},description:`Finish time in seconds for the audio segment`}]}}]}]}],raw:`Question<AnswerT>[]`},description:``},disabled:{required:!1,tsType:{name:`boolean`},description:``},required:{required:!1,tsType:{name:`boolean`},description:``}}}})),_,v,y=t((()=>{_=e(n()),v=({initialQuestions:e,validationMessages:t,onSuccess:n,onFailure:r,passingPercent:i,showCorrectAnswersOnSuccess:a})=>{let[o,s]=(0,_.useState)(e),[c,l]=(0,_.useState)({validated:!1});return{questions:o.map((e,t)=>({...e,onChange:e=>{s(n=>n.map((n,r)=>r===t?{...n,selectedAnswer:e}:n))}})),validateAnswers:()=>{s(o=>{let s=o.filter(({selectedAnswer:e,correctAnswer:t})=>e===t).length,c=parseFloat((s/e.length*100).toFixed(2)),u=o.map(e=>{let n=e.answers.map(n=>{let r;return n.value===e.selectedAnswer?r=n.value===e.correctAnswer?{state:`correct`,message:t.correct}:{state:`incorrect`,message:t.incorrect}:n.value===e.correctAnswer&&c>=i&&a&&(r={state:`correct`,message:t.correct}),{...n,validation:r}});return{...e,answers:n}});return l({validated:!0,grade:c,correctAnswerCount:s}),c>=i?n&&n():r&&r(),u})},...c}}})),b,x,S,C,w,T,E,D,O,k,A,j,M,N,P,F,I;t((()=>{b=e(n()),i(),g(),y(),o(),c(),d(),x=r.meta({title:`Components/Quiz`,component:h,tags:[`autodocs`]}),S=()=>{let{questions:e}=v({initialQuestions:[{question:`Lorem ipsum dolor sit amet`,answers:[{label:`Option 1`,value:1},{label:`Option 2`,value:2},{label:`Option 3`,value:3}],correctAnswer:1},{question:`Consectetur adipiscing elit`,answers:[{label:`Option 1`,value:1},{label:`Option 2`,value:2},{label:`Option 3`,value:3}],correctAnswer:2},{question:`Fugit itaque delectus voluptatem alias aliquid`,answers:[{label:`Option 1`,value:1},{label:`Option 2`,value:2},{label:`Option 3`,value:3}],correctAnswer:3}],validationMessages:{correct:`Correct.`,incorrect:`Incorrect.`},passingPercent:100});return b.createElement(h,{questions:e})},C=()=>{let{questions:e,validateAnswers:t,correctAnswerCount:n}=v({initialQuestions:[{question:`Lorem ipsum dolor sit amet`,answers:[{label:`Option 1`,value:1},{label:`Option 2`,value:2},{label:`Option 3`,value:3}],correctAnswer:1},{question:`Consectetur adipiscing elit`,answers:[{label:`Option 1`,value:1},{label:`Option 2`,value:2},{label:`Option 3`,value:3}],correctAnswer:2},{question:`Fugit itaque delectus voluptatem alias aliquid`,answers:[{label:`Option 1`,value:1},{label:`Option 2`,value:2},{label:`Option 3`,value:3}],correctAnswer:3}],validationMessages:{correct:`Correct.`,incorrect:`Incorrect.`},passingPercent:80}),[r,i]=(0,b.useState)(!1),o=()=>{t(),i(!0)};return b.createElement(`div`,null,b.createElement(`div`,{"aria-live":`polite`},!!n&&b.createElement(`p`,{className:`text-foreground-primary`},`Correct answers: `,n)),b.createElement(h,{questions:e,disabled:r}),b.createElement(s,{size:`m`}),b.createElement(a,{onClick:o},`Submit`))},w=()=>{let{questions:e,validateAnswers:t,correctAnswerCount:n}=v({initialQuestions:[{question:`Lorem ipsum dolor sit amet`,answers:[{label:`Option 1`,value:1,feedback:b.createElement(l,{text:`<p>Quaerat in autem sapiente illum. Vel mollitia omnis qui dolorem <code>um</code> esse eos maiores possimus. Est laborum quam aliquam qui sunt. Ut ea et qui provident voluptatibus. Eius quam odit sint cumque sint. Corporis quia et dicta.</p>`,getCodeBlockAriaLabel:e=>`${e} code example`})},{label:`Option 2`,value:2,feedback:`Recusandae necessitatibus consequatur voluptatem sapiente.`},{label:`Option 3`,value:3,feedback:`Voluptas et et animi quo.`}],correctAnswer:1},{question:`Consectetur adipiscing elit`,answers:[{label:`Option 1`,value:1,feedback:b.createElement(l,{text:`<p>Quaerat in autem sapiente illum. Vel mollitia omnis qui dolorem <code>um</code> esse eos maiores possimus. Est laborum quam aliquam qui sunt. Ut ea et qui provident voluptatibus. Eius quam odit sint cumque sint. Corporis quia et dicta.</p>`,getCodeBlockAriaLabel:e=>`${e} code example`})},{label:`Option 2`,value:2,feedback:`Recusandae necessitatibus consequatur voluptatem sapiente.`},{label:`Option 3`,value:3,feedback:`Voluptas et et animi quo.`}],correctAnswer:2},{question:`Fugit itaque delectus voluptatem alias aliquid`,answers:[{label:`Option 1`,value:1,feedback:b.createElement(l,{text:`<p>Quaerat in autem sapiente illum. Vel mollitia omnis qui dolorem <code>um</code> esse eos maiores possimus. Est laborum quam aliquam qui sunt. Ut ea et qui provident voluptatibus. Eius quam odit sint cumque sint. Corporis quia et dicta.</p>`,getCodeBlockAriaLabel:e=>`${e} code example`})},{label:`Option 2`,value:2,feedback:`Recusandae necessitatibus consequatur voluptatem sapiente.`},{label:`Option 3`,value:3,feedback:`Voluptas et et animi quo.`}],correctAnswer:3}],validationMessages:{correct:`Correct.`,incorrect:`Incorrect.`},passingPercent:100}),[r,i]=(0,b.useState)(!1),o=()=>{t(),i(!0)};return b.createElement(`div`,null,b.createElement(`div`,{"aria-live":`polite`},!!n&&b.createElement(`p`,{className:`text-foreground-primary`},`Correct answers: `,n)),b.createElement(h,{questions:e,disabled:r}),b.createElement(s,{size:`m`}),b.createElement(a,{onClick:o},`Submit`))},T=()=>{let{questions:e,validateAnswers:t,correctAnswerCount:n}=v({initialQuestions:[{question:`Lorem ipsum dolor sit amet`,answers:[{label:`Option 1`,value:1,feedback:b.createElement(l,{text:`<p>Quaerat in autem sapiente illum. Vel mollitia omnis qui dolorem <code>um</code> esse eos maiores possimus. Est laborum quam aliquam qui sunt. Ut ea et qui provident voluptatibus. Eius quam odit sint cumque sint. Corporis quia et dicta.</p>`,getCodeBlockAriaLabel:e=>`${e} code example`})},{label:`Option 2`,value:2,feedback:`Recusandae necessitatibus consequatur voluptatem sapiente.`},{label:`Option 3`,value:3,feedback:`Voluptas et et animi quo.`}],correctAnswer:1},{question:`Consectetur adipiscing elit`,answers:[{label:`Option 1`,value:1,feedback:b.createElement(l,{text:`<p>Quaerat in autem sapiente illum. Vel mollitia omnis qui dolorem <code>um</code> esse eos maiores possimus. Est laborum quam aliquam qui sunt. Ut ea et qui provident voluptatibus. Eius quam odit sint cumque sint. Corporis quia et dicta.</p>`,getCodeBlockAriaLabel:e=>`${e} code example`})},{label:`Option 2`,value:2,feedback:`Recusandae necessitatibus consequatur voluptatem sapiente.`},{label:`Option 3`,value:3,feedback:`Voluptas et et animi quo.`}],correctAnswer:2},{question:`Fugit itaque delectus voluptatem alias aliquid`,answers:[{label:`Option 1`,value:1,feedback:b.createElement(l,{text:`<p>Quaerat in autem sapiente illum. Vel mollitia omnis qui dolorem <code>um</code> esse eos maiores possimus. Est laborum quam aliquam qui sunt. Ut ea et qui provident voluptatibus. Eius quam odit sint cumque sint. Corporis quia et dicta.</p>`,getCodeBlockAriaLabel:e=>`${e} code example`})},{label:`Option 2`,value:2,feedback:`Recusandae necessitatibus consequatur voluptatem sapiente.`},{label:`Option 3`,value:3,feedback:`Voluptas et et animi quo.`}],correctAnswer:3}],validationMessages:{correct:`Correct.`,incorrect:`Incorrect.`},passingPercent:50,showCorrectAnswersOnSuccess:!0}),[r,i]=(0,b.useState)(!1),o=()=>{t(),i(!0)};return b.createElement(`div`,null,b.createElement(`div`,{"aria-live":`polite`},!!n&&b.createElement(`p`,{className:`text-foreground-primary`},`Correct answers: `,n)),b.createElement(h,{questions:e,disabled:r}),b.createElement(s,{size:`m`}),b.createElement(a,{onClick:o},`Submit`))},E=x.story({render:S,args:{},parameters:{docs:{source:{code:`
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
};`}}}}),D=x.story({render:C,args:{},parameters:{docs:{source:{code:`
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
};`}}}}),O=x.story({render:w,args:{},parameters:{docs:{source:{code:`
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
};`}}}}),k=x.story({render:T,args:{},parameters:{docs:{source:{code:`
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
};`}}}}),A=()=>{let{questions:e}=v({initialQuestions:[{question:`Which question is incorrect?`,answers:[{label:`Are you into photography?`,value:1,action:{onClick:()=>{alert(`Speaking practice: Are you into photography?`)},ariaLabel:`Practice speaking`}},{label:`Are they into photography?`,value:2,action:{onClick:()=>{alert(`Speaking practice: Are they into photography?`)},ariaLabel:`Practice speaking`}},{label:`Is he into photography?`,value:3,action:{onClick:()=>{alert(`Speaking practice: Is he into photography?`)},ariaLabel:`Practice speaking`}},{label:`Am we into photography?`,value:4}],correctAnswer:4},{question:`Which adjective shows a negative feeling?`,answers:[{label:`Friendly`,value:1,action:{onClick:()=>{alert(`Speaking practice: Friendly`)},ariaLabel:`Practice speaking`}},{label:`Cool`,value:2,action:{onClick:()=>{alert(`Speaking practice: Cool`)},ariaLabel:`Practice speaking`}},{label:`Supportive`,value:3,action:{onClick:()=>{alert(`Speaking practice: Supportive`)},ariaLabel:`Practice speaking`}},{label:`Boring`,value:4}],correctAnswer:4},{question:"What does this sentence mean: `I've played these games before`?",answers:[{label:`You are playing them now.`,value:1},{label:`You will play them later.`,value:2},{label:`You never played them.`,value:3},{label:`You played them in the past.`,value:4}],correctAnswer:4}],validationMessages:{correct:`Correct.`,incorrect:`Incorrect.`},passingPercent:100});return b.createElement(h,{questions:e})},j=x.story({render:A,args:{},parameters:{docs:{description:{story:`Quiz with action buttons on selected answers. Useful for language learning features like 'Practice speaking'. Some answers have action buttons while others do not, demonstrating mixed configurations across questions.`},source:{code:`
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
};`}}}}),M=()=>{let{questions:e}=v({initialQuestions:[{question:`Listen to the audio and answer: Who is the graphic designer?`,audioUrl:`https://cdn.freecodecamp.org/curriculum/english/animation-assets/sounds/1.1-1.mp3`,audioAriaLabel:`Audio for question 1`,transcript:`<p><b>Maria:</b> Hello. You're the new graphic designer, right? I'm Maria, the team lead.</p>
<p><b>Tom:</b> Hi, that's right. I'm Tom McKenzie. It's a pleasure to meet you.</p>`,answers:[{label:`Tom`,value:1},{label:`Maria`,value:2},{label:`Tom and Maria`,value:3}],correctAnswer:2},{question:`What is Maria's role?`,answers:[{label:`Graphic designer`,value:1},{label:`Software engineer`,value:2},{label:`Team lead`,value:3}],correctAnswer:2}],validationMessages:{correct:`Correct.`,incorrect:`Incorrect.`},passingPercent:100});return b.createElement(h,{questions:e})},N=x.story({render:M,args:{},parameters:{docs:{source:{code:`
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
};`}}}}),P=()=>{let{questions:e}=v({initialQuestions:[{question:`Listen to the audio segment and answer: What does Maria say first?`,audioUrl:`https://cdn.freecodecamp.org/curriculum/english/animation-assets/sounds/1.1-1.mp3`,audioAriaLabel:`Audio segment for question 1`,transcript:`<p><b>Maria:</b> Hello. You're the new graphic designer, right?</p>`,audioStartTime:0,audioFinishTime:2.5,answers:[{label:`Hello. You're the new graphic designer, right?`,value:1},{label:`I'm Maria, the team lead.`,value:2},{label:`It's a pleasure to meet you.`,value:3}],correctAnswer:1},{question:`Listen to this segment: Who introduces themselves?`,audioUrl:`https://cdn.freecodecamp.org/curriculum/english/animation-assets/sounds/1.1-1.mp3`,audioAriaLabel:`Audio segment for question 2`,transcript:`<p><b>Tom:</b> Hi, that's right. I'm Tom McKenzie.</p>`,audioStartTime:4,audioFinishTime:7,answers:[{label:`Maria`,value:1},{label:`Tom`,value:2},{label:`Both`,value:3}],correctAnswer:2}],validationMessages:{correct:`Correct.`,incorrect:`Incorrect.`},passingPercent:100});return b.createElement(h,{questions:e})},F=x.story({render:P,args:{},parameters:{docs:{description:{story:"This story demonstrates the Quiz component with questions that use `audioStartTime` and `audioFinishTime` props, which play only specific segments of the audio instead of the full clip."},source:{code:`
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
};`}}}}),E.input.parameters={...E.input.parameters,docs:{...E.input.parameters?.docs,source:{originalSource:`meta.story({
  render: QuizDefault,
  args: {},
  parameters: {
    docs: {
      source: {
        code: \`
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
};\`
      }
    }
  }
})`,...E.input.parameters?.docs?.source}}},D.input.parameters={...D.input.parameters,docs:{...D.input.parameters?.docs,source:{originalSource:`meta.story({
  render: QuizWithValidation,
  args: {},
  parameters: {
    docs: {
      source: {
        code: \`
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
};\`
      }
    }
  }
})`,...D.input.parameters?.docs?.source}}},O.input.parameters={...O.input.parameters,docs:{...O.input.parameters?.docs,source:{originalSource:`meta.story({
  render: QuizWithValidationAndAnswerFeedback,
  args: {},
  parameters: {
    docs: {
      source: {
        code: \`
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
                        text={\\\`<p>Quaerat in autem sapiente illum. Vel mollitia omnis qui dolorem <code>um</code> esse eos maiores possimus. Est laborum quam aliquam qui sunt. Ut ea et qui provident voluptatibus. Eius quam odit sint cumque sint. Corporis quia et dicta.</p>\\\`}
                        getCodeBlockAriaLabel={(codeName) => \\\`\\\${codeName} code example\\\`}
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
                        text={\\\`<p>Quaerat in autem sapiente illum. Vel mollitia omnis qui dolorem <code>um</code> esse eos maiores possimus. Est laborum quam aliquam qui sunt. Ut ea et qui provident voluptatibus. Eius quam odit sint cumque sint. Corporis quia et dicta.</p>\\\`}
                        getCodeBlockAriaLabel={(codeName) => \\\`\\\${codeName} code example\\\`}
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
                        text={\\\`<p>Quaerat in autem sapiente illum. Vel mollitia omnis qui dolorem <code>um</code> esse eos maiores possimus. Est laborum quam aliquam qui sunt. Ut ea et qui provident voluptatibus. Eius quam odit sint cumque sint. Corporis quia et dicta.</p>\\\`}
                        getCodeBlockAriaLabel={(codeName) => \\\`\\\${codeName} code example\\\`}
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
};\`
      }
    }
  }
})`,...O.input.parameters?.docs?.source}}},k.input.parameters={...k.input.parameters,docs:{...k.input.parameters?.docs,source:{originalSource:`meta.story({
  render: QuizWithCorrectAnswersShownOnSuccess,
  args: {},
  parameters: {
    docs: {
      source: {
        code: \`
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
                        text={\\\`<p>Quaerat in autem sapiente illum. Vel mollitia omnis qui dolorem <code>um</code> esse eos maiores possimus. Est laborum quam aliquam qui sunt. Ut ea et qui provident voluptatibus. Eius quam odit sint cumque sint. Corporis quia et dicta.</p>\\\`}
                        getCodeBlockAriaLabel={(codeName) => \\\`\\\${codeName} code example\\\`}
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
                        text={\\\`<p>Quaerat in autem sapiente illum. Vel mollitia omnis qui dolorem <code>um</code> esse eos maiores possimus. Est laborum quam aliquam qui sunt. Ut ea et qui provident voluptatibus. Eius quam odit sint cumque sint. Corporis quia et dicta.</p>\\\`}
                        getCodeBlockAriaLabel={(codeName) => \\\`\\\${codeName} code example\\\`}
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
                        text={\\\`<p>Quaerat in autem sapiente illum. Vel mollitia omnis qui dolorem <code>um</code> esse eos maiores possimus. Est laborum quam aliquam qui sunt. Ut ea et qui provident voluptatibus. Eius quam odit sint cumque sint. Corporis quia et dicta.</p>\\\`}
                        getCodeBlockAriaLabel={(codeName) => \\\`\\\${codeName} code example\\\`}
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
};\`
      }
    }
  }
})`,...k.input.parameters?.docs?.source}}},j.input.parameters={...j.input.parameters,docs:{...j.input.parameters?.docs,source:{originalSource:`meta.story({
  render: QuizWithActionButtons,
  args: {},
  parameters: {
    docs: {
      description: {
        story: "Quiz with action buttons on selected answers. Useful for language learning features like 'Practice speaking'. Some answers have action buttons while others do not, demonstrating mixed configurations across questions."
      },
      source: {
        code: \`
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
    question: "What does this sentence mean: \\\`I've played these games before\\\`?",
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
};\`
      }
    }
  }
})`,...j.input.parameters?.docs?.source}}},N.input.parameters={...N.input.parameters,docs:{...N.input.parameters?.docs,source:{originalSource:`meta.story({
  render: QuizWithAudio,
  args: {},
  parameters: {
    docs: {
      source: {
        code: \`
import { Quiz, useQuiz } from '@freecodecamp/ui';

const initialQuestions = [
  {
    question: "Listen to the audio and answer: Who is the graphic designer?",
    audioUrl: "https://cdn.freecodecamp.org/curriculum/english/animation-assets/sounds/1.1-1.mp3",
    audioAriaLabel: "Audio for question 1",
    transcript: \\\`<p><b>Maria:</b> Hello. You're the new graphic designer, right? I'm Maria, the team lead.</p>
<p><b>Tom:</b> Hi, that's right. I'm Tom McKenzie. It's a pleasure to meet you.</p>\\\`,
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
};\`
      }
    }
  }
})`,...N.input.parameters?.docs?.source}}},F.input.parameters={...F.input.parameters,docs:{...F.input.parameters?.docs,source:{originalSource:`meta.story({
  render: QuizWithAudioSegment,
  args: {},
  parameters: {
    docs: {
      description: {
        story: "This story demonstrates the Quiz component with questions that use \`audioStartTime\` and \`audioFinishTime\` props, which play only specific segments of the audio instead of the full clip."
      },
      source: {
        code: \`
import { Quiz, useQuiz } from '@freecodecamp/ui';

const initialQuestions = [
  {
    question: "Listen to the audio segment and answer: What does Maria say first?",
    audioUrl: "https://cdn.freecodecamp.org/curriculum/english/animation-assets/sounds/1.1-1.mp3",
    audioAriaLabel: "Audio segment for question 1",
    transcript: \\\`<p><b>Maria:</b> Hello. You're the new graphic designer, right?</p>\\\`,
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
    transcript: \\\`<p><b>Tom:</b> Hi, that's right. I'm Tom McKenzie.</p>\\\`,
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
};\`
      }
    }
  }
})`,...F.input.parameters?.docs?.source}}},I=[`Default`,`WithValidation`,`WithValidationAndAnswerFeedback`,`WithCorrectAnswersShownOnSuccess`,`WithActionButtons`,`WithAudio`,`WithAudioSegment`]}))();export{E as Default,j as WithActionButtons,N as WithAudio,F as WithAudioSegment,k as WithCorrectAnswersShownOnSuccess,D as WithValidation,O as WithValidationAndAnswerFeedback,I as __namedExportsOrder,x as default};