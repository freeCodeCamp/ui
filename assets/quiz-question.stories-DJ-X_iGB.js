import{a as e,n as t}from"./chunk-BneVvdWh.js";import{t as n}from"./react-XedgCGTy.js";import{n as r,t as i}from"./iframe-DzyGt2uA.js";import{t as a}from"./prism-formatted-CRMnlBua.js";import{n as o,r as s,t as c}from"./quiz-question-DDAEgT3h.js";var l,u,d,f,p,m,h,g,_,v,y,b,x,S,C,w;t((()=>{l=e(n()),i(),s(),o(),u=r.meta({title:`Components/QuizQuestion`,component:c,tags:[`autodocs`]}),d=({question:e,answers:t=[],disabled:n,position:r,selectedAnswer:i,audioUrl:a,audioAriaLabel:o,transcript:s,audioStartTime:u,audioFinishTime:d})=>{let[f,p]=(0,l.useState)(i),m=a?{audioUrl:a,audioAriaLabel:o||``,transcript:s||``,...u!==void 0&&{audioStartTime:u},...d!==void 0&&{audioFinishTime:d}}:{};return l.createElement(c,{question:e,answers:t,disabled:n,onChange:e=>p(e),selectedAnswer:f,position:r,...m})},f=u.story({render:d,args:{question:`Lorem ipsum dolor sit amet, consectetur adipiscing elit?`,answers:[{label:`Option 1`,value:1},{label:`Tempora sed magnam consequatur dolor alias placeat aspernatur. Odio et non repudiandae debitis fugit. Quia ut tempore eaque et nisi qui aspernatur. Molestiae sed id accusantium. Temporibus in magni ut. Est aut distinctio molestiae sed. Dicta consequatur impedit totam totam incidunt dolor possimus. Aut totam officia iure consequatur ea.`,value:2},{label:l.createElement(a,{text:`<pre><code class="language-html">&#x3C;form>
  &#x3C;input type="text" name="username" placeholder="Dolorem quod aut ipsa velit voluptate vel voluptas. Rem amet consectetur qui beatae.">
&#x3C;/form>
</code></pre>`,getCodeBlockAriaLabel:e=>`${e} code example`}),value:3},{label:l.createElement(a,{text:`<p>Molestiae sed id accusantium <code>html</code> in magni ut.</p>`,getCodeBlockAriaLabel:e=>`${e} code example`}),value:4},{label:l.createElement(a,{text:`<p><code>possimus</code></p>`,getCodeBlockAriaLabel:e=>`${e} code example`}),value:5},{label:l.createElement(a,{text:`<p><code>&#x3C;span>placeat aspernatur&#x3C;/span></code></p>`,getCodeBlockAriaLabel:e=>`${e} code example`}),value:6},{label:l.createElement(a,{text:`<p><code>Dicta consequatur impedit totam totam incidunt dolor possimus. Aut totam officia iure consequatur ea. Dolores est aut aliquid beatae vel. Quo assumenda aut corporis sed magni dolorem pariatur qui</code></p>`,getCodeBlockAriaLabel:e=>`${e} code example`}),value:7}]},parameters:{docs:{source:{code:`const App = () => {
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
                        text={\`<pre><code class="language-html">&#x3C;form>
  &#x3C;input type="text" name="username" placeholder="Dolorem quod aut ipsa velit voluptate vel voluptas. Rem amet consectetur qui beatae.">
&#x3C;/form>
</code></pre>\`}
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
}`}}}}),p=u.story({render:d,args:{question:l.createElement(a,{text:`<p>Given the following code:</p>
<pre><code class="language-python">temp = "5 degrees"
cel = 0
fahr = float(temp)
cel = (fahr - 32.0) * 5.0 / 9.0
print(cel)
</code></pre>
<p>Which line/lines should be surrounded by <code>try</code> block?</p>`,getCodeBlockAriaLabel:e=>`${e} code example`}),answers:[{label:`Option 1`,value:1},{label:`Option 2`,value:2},{label:`Option 3`,value:3}]},parameters:{docs:{source:{code:`const App = () => {
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
}`}}}}),m=u.story({render:d,args:{question:`Lorem ipsum dolor sit amet, consectetur adipiscing elit`,answers:[{label:`Option 1`,value:1},{label:`Option 2`,value:2},{label:`Option 3`,value:3}],disabled:!0},parameters:{docs:{source:{code:`const App = () => {
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
}`}}}}),h=u.story({render:d,args:{question:`Lorem ipsum dolor sit amet, consectetur adipiscing elit`,answers:[{label:`Option 1`,value:1,validation:{state:`correct`,message:`Correct.`}},{label:`Option 2`,value:2},{label:`Option 3`,value:3}],selectedAnswer:1,disabled:!0},parameters:{docs:{source:{code:`const App = () => {
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
}`}}}}),g=u.story({render:d,args:{question:`Lorem ipsum dolor sit amet, consectetur adipiscing elit?`,answers:[{label:`Option 1`,value:1,feedback:l.createElement(a,{text:`<p>Quaerat in autem sapiente illum. Vel mollitia omnis qui dolorem <code>um</code> esse eos maiores possimus. Est laborum quam aliquam qui sunt. Ut ea et qui provident voluptatibus. Eius quam odit sint cumque sint. Corporis quia et dicta.</p>`,getCodeBlockAriaLabel:e=>`${e} code example`}),validation:{state:`correct`,message:`Correct.`}},{label:`Option 2`,value:2},{label:`Option 3`,value:3}],selectedAnswer:1,disabled:!0},parameters:{docs:{source:{code:`const App = () => {
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
}`}}}}),_=u.story({render:d,args:{question:`Lorem ipsum dolor sit amet, consectetur adipiscing elit`,answers:[{label:`Option 1`,value:1,validation:{state:`incorrect`,message:`Incorrect.`}},{label:`Option 2`,value:2},{label:`Option 3`,value:3}],selectedAnswer:1,disabled:!0},parameters:{docs:{source:{code:`const App = () => {
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
}`}}}}),v=u.story({render:d,args:{question:`Lorem ipsum dolor sit amet, consectetur adipiscing elit?`,answers:[{label:`Option 1`,value:1,feedback:l.createElement(a,{text:`<p>Quaerat in autem sapiente illum. Vel mollitia omnis qui dolorem <code>um</code> esse eos maiores possimus. Est laborum quam aliquam qui sunt. Ut ea et qui provident voluptatibus. Eius quam odit sint cumque sint. Corporis quia et dicta.</p>`,getCodeBlockAriaLabel:e=>`${e} code example`}),validation:{state:`incorrect`,message:`Incorrect.`}},{label:`Option 2`,value:2},{label:`Option 3`,value:3}],selectedAnswer:1,disabled:!0},parameters:{docs:{source:{code:`const App = () => {
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
}`}}}}),y=u.story({render:d,args:{question:l.createElement(a,{text:`<p>Given the following code:</p>
<pre><code class="language-python">temp = "5 degrees"
cel = 0
fahr = float(temp)
cel = (fahr - 32.0) * 5.0 / 9.0
print(cel)
</code></pre>
<p>Which line/lines should be surrounded by <code>try</code> block?</p>`,getCodeBlockAriaLabel:e=>`${e} code example`}),answers:[{label:`Option 1`,value:1},{label:`Option 2`,value:2},{label:`Option 3`,value:3}],position:1},parameters:{docs:{source:{code:`const App = () => {
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
}`}}}}),b=u.story({render:d,args:{question:l.createElement(`span`,null,`What does`,` `,l.createElement(`ruby`,null,`你好`,l.createElement(`rt`,null,`nǐ hǎo`)),` `,`mean?`),answers:[{label:`Hello`,value:1},{label:`Goodbye`,value:2},{label:`Thank you`,value:3}],position:1},parameters:{docs:{source:{code:`const App = () => {
  const [answer, setAnswer] = useState();

  return (
    <QuizQuestion
      question={
        <span>
          What does <ruby>你好<rt>nǐ hǎo</rt></ruby> mean?
        </span>
      }
      answers={[
        { label: "Hello", value: 1 },
        { label: "Goodbye", value: 2 },
        { label: "Thank you", value: 3 }
      ]}
      onChange={(newAnswer) => setAnswer(newAnswer)}
      selectedAnswer={answer}
            position={1}
    />
  );
}`}}}}),x=u.story({render:d,args:{question:`Which of the following is the correct greeting?`,answers:[{label:`Hello, how are you?`,value:1,action:{onClick:()=>alert(`Playing audio for: Hello, how are you?`),ariaLabel:`Practice speaking`}},{label:`Hi there!`,value:2,action:{onClick:()=>alert(`Playing audio for: Hi there!`),ariaLabel:`Practice speaking`}},{label:`Good morning`,value:3,action:{onClick:()=>alert(`Playing audio for: Good morning`),ariaLabel:`Practice speaking`}},{label:`Hey`,value:4}],position:1},parameters:{docs:{source:{code:`const App = () => {
  const [answer, setAnswer] = useState();

  return (
    <QuizQuestion
      question="Which of the following is the correct greeting?"
      answers={[
        {
          label: "Hello, how are you?",
          value: 1,
          action: {
            onClick: () => console.log("Open speaking modal"),
            ariaLabel: "Practice speaking"
          }
        },
        {
          label: "Hi there!",
          value: 2,
          action: {
            onClick: () => console.log("Open speaking modal"),
            ariaLabel: "Practice speaking"
          }
        },
        {
          label: "Good morning",
          value: 3,
          action: {
            onClick: () => console.log("Open speaking modal"),
            ariaLabel: "Practice speaking"
          }
        },
        {
          label: "Hey",
          value: 4
          // No action for this answer
        }
      ]}
      onChange={(newAnswer) => setAnswer(newAnswer)}
      selectedAnswer={answer}
      position={1}
    />
  );
}`}}}}),S=u.story({render:d,args:{question:`Listen to the audio and select the correct answer:`,audioUrl:`https://cdn.freecodecamp.org/curriculum/english/animation-assets/sounds/1.1-1.mp3`,audioAriaLabel:`Audio for question`,transcript:`<p><b>Maria:</b> Hello. You're the new graphic designer, right? I'm Maria, the team lead.</p>
<p><b>Tom:</b> Hi, that's right. I'm Tom McKenzie. It's a pleasure to meet you.</p>`,answers:[{label:`Option 1`,value:1},{label:`Option 2`,value:2},{label:`Option 3`,value:3}]},parameters:{docs:{source:{code:`const App = () => {
  const [answer, setAnswer] = useState();

  return (
    <QuizQuestion
      question="Listen to the audio and select the correct answer:"
      audioUrl="https://cdn.freecodecamp.org/curriculum/english/animation-assets/sounds/1.1-1.mp3"
      audioAriaLabel="Audio for question"
      transcript={\`<p><b>Maria:</b> Hello. You're the new graphic designer, right? I'm Maria, the team lead.</p>
<p><b>Tom:</b> Hi, that's right. I'm Tom McKenzie. It's a pleasure to meet you.</p>\`}
      answers={[
        { label: "Option 1", value: 1 },
        { label: "Option 2", value: 2 },
        { label: "Option 3", value: 3 }
      ]}
      onChange={(newAnswer) => setAnswer(newAnswer)}
      selectedAnswer={answer}
    />
  );
}`}}}}),C=u.story({render:d,args:{question:`Listen to the audio segment and select the correct answer:`,audioUrl:`https://cdn.freecodecamp.org/curriculum/english/animation-assets/sounds/1.1-1.mp3`,audioAriaLabel:`Audio segment for question`,transcript:`<p><b>Maria:</b> Hello. You're the new graphic designer, right? I'm Maria, the team lead.</p>`,audioStartTime:0,audioFinishTime:3,answers:[{label:`Option 1`,value:1},{label:`Option 2`,value:2},{label:`Option 3`,value:3}]},parameters:{docs:{description:{story:"This story demonstrates the QuizQuestion component with `audioStartTime` and `audioFinishTime` props, which play only a segment of the audio instead of the full clip."},source:{code:`const App = () => {
  const [answer, setAnswer] = useState();

  return (
    <QuizQuestion
      question="Listen to the audio segment and select the correct answer:"
      audioUrl="https://cdn.freecodecamp.org/curriculum/english/animation-assets/sounds/1.1-1.mp3"
      audioAriaLabel="Audio segment for question"
      transcript={\`<p><b>Maria:</b> Hello. You're the new graphic designer, right? I'm Maria, the team lead.</p>\`}
      audioStartTime={0}
      audioFinishTime={3}
      answers={[
        { label: "Option 1", value: 1 },
        { label: "Option 2", value: 2 },
        { label: "Option 3", value: 3 }
      ]}
      onChange={(newAnswer) => setAnswer(newAnswer)}
      selectedAnswer={answer}
    />
  );
}`}}}}),f.input.parameters={...f.input.parameters,docs:{...f.input.parameters?.docs,source:{originalSource:`meta.story({
  render: QuizQuestionComp,
  args: {
    question: "Lorem ipsum dolor sit amet, consectetur adipiscing elit?",
    answers: [{
      label: "Option 1",
      value: 1
    }, {
      label: "Tempora sed magnam consequatur dolor alias placeat aspernatur. Odio et non repudiandae debitis fugit. Quia ut tempore eaque et nisi qui aspernatur. Molestiae sed id accusantium. Temporibus in magni ut. Est aut distinctio molestiae sed. Dicta consequatur impedit totam totam incidunt dolor possimus. Aut totam officia iure consequatur ea.",
      value: 2
    }, {
      label: <PrismFormatted text={\`<pre><code class="language-html">&#x3C;form>\\n  &#x3C;input type="text" name="username" placeholder="Dolorem quod aut ipsa velit voluptate vel voluptas. Rem amet consectetur qui beatae.">\\n&#x3C;/form>\\n</code></pre>\`} getCodeBlockAriaLabel={codeName => \`\${codeName} code example\`} />,
      value: 3
    }, {
      label: <PrismFormatted text={\`<p>Molestiae sed id accusantium <code>html</code> in magni ut.</p>\`} getCodeBlockAriaLabel={codeName => \`\${codeName} code example\`} />,
      value: 4
    }, {
      label: <PrismFormatted text={\`<p><code>possimus</code></p>\`} getCodeBlockAriaLabel={codeName => \`\${codeName} code example\`} />,
      value: 5
    }, {
      label: <PrismFormatted text={\`<p><code>&#x3C;span>placeat aspernatur&#x3C;/span></code></p>\`} getCodeBlockAriaLabel={codeName => \`\${codeName} code example\`} />,
      value: 6
    }, {
      label: <PrismFormatted text={\`<p><code>Dicta consequatur impedit totam totam incidunt dolor possimus. Aut totam officia iure consequatur ea. Dolores est aut aliquid beatae vel. Quo assumenda aut corporis sed magni dolorem pariatur qui</code></p>\`} getCodeBlockAriaLabel={codeName => \`\${codeName} code example\`} />,
      value: 7
    }]
  },
  parameters: {
    docs: {
      source: {
        code: \`const App = () => {
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
                        text={\\\`<pre><code class="language-html">&#x3C;form>\\n  &#x3C;input type="text" name="username" placeholder="Dolorem quod aut ipsa velit voluptate vel voluptas. Rem amet consectetur qui beatae.">\\n&#x3C;/form>\\n</code></pre>\\\`}
                        getCodeBlockAriaLabel={(codeName) => \\\`\\\${codeName} code example\\\`}
                    />
                ),
                value: 3,
            },
            {
                label: (
                    <PrismFormatted
                        text={\\\`<p>Molestiae sed id accusantium <code>html</code> in magni ut.</p>\\\`}
                        getCodeBlockAriaLabel={(codeName) => \\\`\\\${codeName} code example\\\`}
                    />
                ),
                value: 4,
            },
            {
                label: (
                    <PrismFormatted
                        text={\\\`<p><code>possimus</code></p>\\\`}
                        getCodeBlockAriaLabel={(codeName) => \\\`\\\${codeName} code example\\\`}
                    />
                ),
                value: 5,
            },
            {
                label: (
                    <PrismFormatted
                        text={\\\`<p><code>&#x3C;span>placeat aspernatur&#x3C;/span></code></p>\\\`}
                        getCodeBlockAriaLabel={(codeName) => \\\`\\\${codeName} code example\\\`}
                    />
                ),
                value: 6,
            },
            {
                label: (
                    <PrismFormatted
                        text={\\\`<p><code>Dicta consequatur impedit totam totam incidunt dolor possimus. Aut totam officia iure consequatur ea. Dolores est aut aliquid beatae vel. Quo assumenda aut corporis sed magni dolorem pariatur qui</code></p>\\\`}
                        getCodeBlockAriaLabel={(codeName) => \\\`\\\${codeName} code example\\\`}
                    />
                ),
                value: 7,
            },
      onChange={(newAnswer) => setAnswer(newAnswer)}
      selectedAnswer={answer}
    />
  );
}\`
      }
    }
  }
})`,...f.input.parameters?.docs?.source}}},p.input.parameters={...p.input.parameters,docs:{...p.input.parameters?.docs,source:{originalSource:`meta.story({
  render: QuizQuestionComp,
  args: {
    question: <PrismFormatted text={\`<p>Given the following code:</p>
<pre><code class="language-python">temp = "5 degrees"
cel = 0
fahr = float(temp)
cel = (fahr - 32.0) * 5.0 / 9.0
print(cel)
</code></pre>
<p>Which line/lines should be surrounded by <code>try</code> block?</p>\`} getCodeBlockAriaLabel={codeName => \`\${codeName} code example\`} />,
    answers: [{
      label: "Option 1",
      value: 1
    }, {
      label: "Option 2",
      value: 2
    }, {
      label: "Option 3",
      value: 3
    }]
  },
  parameters: {
    docs: {
      source: {
        code: \`const App = () => {
  const [answer, setAnswer] = useState();

  return (
    <QuizQuestion
      question={
        <PrismFormatted
          text={\\\`<p>Given the following code:</p>
<pre><code class="language-python">temp = "5 degrees"
cel = 0
fahr = float(temp)
cel = (fahr - 32.0) * 5.0 / 9.0
print(cel)
</code></pre>
<p>Which line/lines should be surrounded by <code>try</code> block?</p>\\\`}
          getCodeBlockAriaLabel={(codeName) => \\\`\\\${codeName} code example\\\`}
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
}\`
      }
    }
  }
})`,...p.input.parameters?.docs?.source}}},m.input.parameters={...m.input.parameters,docs:{...m.input.parameters?.docs,source:{originalSource:`meta.story({
  render: QuizQuestionComp,
  args: {
    question: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
    answers: [{
      label: "Option 1",
      value: 1
    }, {
      label: "Option 2",
      value: 2
    }, {
      label: "Option 3",
      value: 3
    }],
    disabled: true
  },
  parameters: {
    docs: {
      source: {
        code: \`const App = () => {
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
}\`
      }
    }
  }
})`,...m.input.parameters?.docs?.source}}},h.input.parameters={...h.input.parameters,docs:{...h.input.parameters?.docs,source:{originalSource:`meta.story({
  render: QuizQuestionComp,
  args: {
    question: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
    answers: [{
      label: "Option 1",
      value: 1,
      validation: {
        state: "correct",
        message: "Correct."
      }
    }, {
      label: "Option 2",
      value: 2
    }, {
      label: "Option 3",
      value: 3
    }],
    selectedAnswer: 1,
    disabled: true
  },
  parameters: {
    docs: {
      source: {
        code: \`const App = () => {
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
}\`
      }
    }
  }
})`,...h.input.parameters?.docs?.source}}},g.input.parameters={...g.input.parameters,docs:{...g.input.parameters?.docs,source:{originalSource:`meta.story({
  render: QuizQuestionComp,
  args: {
    question: "Lorem ipsum dolor sit amet, consectetur adipiscing elit?",
    answers: [{
      label: "Option 1",
      value: 1,
      feedback: <PrismFormatted text={\`<p>Quaerat in autem sapiente illum. Vel mollitia omnis qui dolorem <code>um</code> esse eos maiores possimus. Est laborum quam aliquam qui sunt. Ut ea et qui provident voluptatibus. Eius quam odit sint cumque sint. Corporis quia et dicta.</p>\`} getCodeBlockAriaLabel={codeName => \`\${codeName} code example\`} />,
      validation: {
        state: "correct",
        message: "Correct."
      }
    }, {
      label: "Option 2",
      value: 2
    }, {
      label: "Option 3",
      value: 3
    }],
    selectedAnswer: 1,
    disabled: true
  },
  parameters: {
    docs: {
      source: {
        code: \`const App = () => {
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
              text={\\\`<p>Quaerat in autem sapiente illum. Vel mollitia omnis qui dolorem <code>um</code> esse eos maiores possimus. Est laborum quam aliquam qui sunt. Ut ea et qui provident voluptatibus. Eius quam odit sint cumque sint. Corporis quia et dicta.</p>\\\`}
              getCodeBlockAriaLabel={(codeName) => \\\`\\\${codeName} code example\\\`}
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
}\`
      }
    }
  }
})`,...g.input.parameters?.docs?.source}}},_.input.parameters={..._.input.parameters,docs:{..._.input.parameters?.docs,source:{originalSource:`meta.story({
  render: QuizQuestionComp,
  args: {
    question: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
    answers: [{
      label: "Option 1",
      value: 1,
      validation: {
        state: "incorrect",
        message: "Incorrect."
      }
    }, {
      label: "Option 2",
      value: 2
    }, {
      label: "Option 3",
      value: 3
    }],
    selectedAnswer: 1,
    disabled: true
  },
  parameters: {
    docs: {
      source: {
        code: \`const App = () => {
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
}\`
      }
    }
  }
})`,..._.input.parameters?.docs?.source}}},v.input.parameters={...v.input.parameters,docs:{...v.input.parameters?.docs,source:{originalSource:`meta.story({
  render: QuizQuestionComp,
  args: {
    question: "Lorem ipsum dolor sit amet, consectetur adipiscing elit?",
    answers: [{
      label: "Option 1",
      value: 1,
      feedback: <PrismFormatted text={\`<p>Quaerat in autem sapiente illum. Vel mollitia omnis qui dolorem <code>um</code> esse eos maiores possimus. Est laborum quam aliquam qui sunt. Ut ea et qui provident voluptatibus. Eius quam odit sint cumque sint. Corporis quia et dicta.</p>\`} getCodeBlockAriaLabel={codeName => \`\${codeName} code example\`} />,
      validation: {
        state: "incorrect",
        message: "Incorrect."
      }
    }, {
      label: "Option 2",
      value: 2
    }, {
      label: "Option 3",
      value: 3
    }],
    selectedAnswer: 1,
    disabled: true
  },
  parameters: {
    docs: {
      source: {
        code: \`const App = () => {
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
              text={\\\`<p>Quaerat in autem sapiente illum. Vel mollitia omnis qui dolorem <code>um</code> esse eos maiores possimus. Est laborum quam aliquam qui sunt. Ut ea et qui provident voluptatibus. Eius quam odit sint cumque sint. Corporis quia et dicta.</p>\\\`}
              getCodeBlockAriaLabel={(codeName) => \\\`\\\${codeName} code example\\\`}
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
}\`
      }
    }
  }
})`,...v.input.parameters?.docs?.source}}},y.input.parameters={...y.input.parameters,docs:{...y.input.parameters?.docs,source:{originalSource:`meta.story({
  render: QuizQuestionComp,
  args: {
    question: <PrismFormatted text={\`<p>Given the following code:</p>
<pre><code class="language-python">temp = "5 degrees"
cel = 0
fahr = float(temp)
cel = (fahr - 32.0) * 5.0 / 9.0
print(cel)
</code></pre>
<p>Which line/lines should be surrounded by <code>try</code> block?</p>\`} getCodeBlockAriaLabel={codeName => \`\${codeName} code example\`} />,
    answers: [{
      label: "Option 1",
      value: 1
    }, {
      label: "Option 2",
      value: 2
    }, {
      label: "Option 3",
      value: 3
    }],
    position: 1
  },
  parameters: {
    docs: {
      source: {
        code: \`const App = () => {
  const [answer, setAnswer] = useState();

  return (
    <QuizQuestion
      question={
        <PrismFormatted
          text={\\\`<p>Given the following code:</p>
<pre><code class="language-python">temp = "5 degrees"
cel = 0
fahr = float(temp)
cel = (fahr - 32.0) * 5.0 / 9.0
print(cel)
</code></pre>
<p>Which line/lines should be surrounded by <code>try</code> block?</p>\\\`}
          getCodeBlockAriaLabel={(codeName) => \\\`\\\${codeName} code example\\\`}
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
}\`
      }
    }
  }
})`,...y.input.parameters?.docs?.source}}},b.input.parameters={...b.input.parameters,docs:{...b.input.parameters?.docs,source:{originalSource:`meta.story({
  render: QuizQuestionComp,
  args: {
    question: <span>
                What does{" "}
                <ruby>
                    你好<rt>nǐ hǎo</rt>
                </ruby>{" "}
                mean?
            </span>,
    answers: [{
      label: "Hello",
      value: 1
    }, {
      label: "Goodbye",
      value: 2
    }, {
      label: "Thank you",
      value: 3
    }],
    position: 1
  },
  parameters: {
    docs: {
      source: {
        code: \`const App = () => {
  const [answer, setAnswer] = useState();

  return (
    <QuizQuestion
      question={
        <span>
          What does <ruby>你好<rt>nǐ hǎo</rt></ruby> mean?
        </span>
      }
      answers={[
        { label: "Hello", value: 1 },
        { label: "Goodbye", value: 2 },
        { label: "Thank you", value: 3 }
      ]}
      onChange={(newAnswer) => setAnswer(newAnswer)}
      selectedAnswer={answer}
            position={1}
    />
  );
}\`
      }
    }
  }
})`,...b.input.parameters?.docs?.source}}},x.input.parameters={...x.input.parameters,docs:{...x.input.parameters?.docs,source:{originalSource:`meta.story({
  render: QuizQuestionComp,
  args: {
    question: "Which of the following is the correct greeting?",
    answers: [{
      label: "Hello, how are you?",
      value: 1,
      action: {
        onClick: () => alert("Playing audio for: Hello, how are you?"),
        ariaLabel: "Practice speaking"
      }
    }, {
      label: "Hi there!",
      value: 2,
      action: {
        onClick: () => alert("Playing audio for: Hi there!"),
        ariaLabel: "Practice speaking"
      }
    }, {
      label: "Good morning",
      value: 3,
      action: {
        onClick: () => alert("Playing audio for: Good morning"),
        ariaLabel: "Practice speaking"
      }
    }, {
      label: "Hey",
      value: 4
      // No action for this answer
    }],
    position: 1
  },
  parameters: {
    docs: {
      source: {
        code: \`const App = () => {
  const [answer, setAnswer] = useState();

  return (
    <QuizQuestion
      question="Which of the following is the correct greeting?"
      answers={[
        {
          label: "Hello, how are you?",
          value: 1,
          action: {
            onClick: () => console.log("Open speaking modal"),
            ariaLabel: "Practice speaking"
          }
        },
        {
          label: "Hi there!",
          value: 2,
          action: {
            onClick: () => console.log("Open speaking modal"),
            ariaLabel: "Practice speaking"
          }
        },
        {
          label: "Good morning",
          value: 3,
          action: {
            onClick: () => console.log("Open speaking modal"),
            ariaLabel: "Practice speaking"
          }
        },
        {
          label: "Hey",
          value: 4
          // No action for this answer
        }
      ]}
      onChange={(newAnswer) => setAnswer(newAnswer)}
      selectedAnswer={answer}
      position={1}
    />
  );
}\`
      }
    }
  }
})`,...x.input.parameters?.docs?.source}}},S.input.parameters={...S.input.parameters,docs:{...S.input.parameters?.docs,source:{originalSource:`meta.story({
  render: QuizQuestionComp,
  args: {
    question: "Listen to the audio and select the correct answer:",
    audioUrl: "https://cdn.freecodecamp.org/curriculum/english/animation-assets/sounds/1.1-1.mp3",
    audioAriaLabel: "Audio for question",
    transcript: \`<p><b>Maria:</b> Hello. You're the new graphic designer, right? I'm Maria, the team lead.</p>
<p><b>Tom:</b> Hi, that's right. I'm Tom McKenzie. It's a pleasure to meet you.</p>\`,
    answers: [{
      label: "Option 1",
      value: 1
    }, {
      label: "Option 2",
      value: 2
    }, {
      label: "Option 3",
      value: 3
    }]
  },
  parameters: {
    docs: {
      source: {
        code: \`const App = () => {
  const [answer, setAnswer] = useState();

  return (
    <QuizQuestion
      question="Listen to the audio and select the correct answer:"
      audioUrl="https://cdn.freecodecamp.org/curriculum/english/animation-assets/sounds/1.1-1.mp3"
      audioAriaLabel="Audio for question"
      transcript={\\\`<p><b>Maria:</b> Hello. You're the new graphic designer, right? I'm Maria, the team lead.</p>
<p><b>Tom:</b> Hi, that's right. I'm Tom McKenzie. It's a pleasure to meet you.</p>\\\`}
      answers={[
        { label: "Option 1", value: 1 },
        { label: "Option 2", value: 2 },
        { label: "Option 3", value: 3 }
      ]}
      onChange={(newAnswer) => setAnswer(newAnswer)}
      selectedAnswer={answer}
    />
  );
}\`
      }
    }
  }
})`,...S.input.parameters?.docs?.source}}},C.input.parameters={...C.input.parameters,docs:{...C.input.parameters?.docs,source:{originalSource:`meta.story({
  render: QuizQuestionComp,
  args: {
    question: "Listen to the audio segment and select the correct answer:",
    audioUrl: "https://cdn.freecodecamp.org/curriculum/english/animation-assets/sounds/1.1-1.mp3",
    audioAriaLabel: "Audio segment for question",
    transcript: \`<p><b>Maria:</b> Hello. You're the new graphic designer, right? I'm Maria, the team lead.</p>\`,
    audioStartTime: 0,
    audioFinishTime: 3,
    answers: [{
      label: "Option 1",
      value: 1
    }, {
      label: "Option 2",
      value: 2
    }, {
      label: "Option 3",
      value: 3
    }]
  },
  parameters: {
    docs: {
      description: {
        story: "This story demonstrates the QuizQuestion component with \`audioStartTime\` and \`audioFinishTime\` props, which play only a segment of the audio instead of the full clip."
      },
      source: {
        code: \`const App = () => {
  const [answer, setAnswer] = useState();

  return (
    <QuizQuestion
      question="Listen to the audio segment and select the correct answer:"
      audioUrl="https://cdn.freecodecamp.org/curriculum/english/animation-assets/sounds/1.1-1.mp3"
      audioAriaLabel="Audio segment for question"
      transcript={\\\`<p><b>Maria:</b> Hello. You're the new graphic designer, right? I'm Maria, the team lead.</p>\\\`}
      audioStartTime={0}
      audioFinishTime={3}
      answers={[
        { label: "Option 1", value: 1 },
        { label: "Option 2", value: 2 },
        { label: "Option 3", value: 3 }
      ]}
      onChange={(newAnswer) => setAnswer(newAnswer)}
      selectedAnswer={answer}
    />
  );
}\`
      }
    }
  }
})`,...C.input.parameters?.docs?.source}}},w=[`Default`,`WithCodeInQuestionText`,`Disabled`,`Correct`,`CorrectWithAnswerFeedback`,`Incorrect`,`IncorrectWithAnswerFeedback`,`WithPosistion`,`WithRubyText`,`WithActionButtons`,`WithAudio`,`WithAudioSegment`]}))();export{h as Correct,g as CorrectWithAnswerFeedback,f as Default,m as Disabled,_ as Incorrect,v as IncorrectWithAnswerFeedback,x as WithActionButtons,S as WithAudio,C as WithAudioSegment,p as WithCodeInQuestionText,y as WithPosistion,b as WithRubyText,w as __namedExportsOrder,u as default};