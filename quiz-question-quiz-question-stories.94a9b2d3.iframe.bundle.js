"use strict";(self.webpackChunk_freecodecamp_ui=self.webpackChunk_freecodecamp_ui||[]).push([[302],{"./node_modules/.pnpm/@headlessui+react@1.7.19_react-dom@16.14.0_react@16.14.0__react@16.14.0/node_modules/@headlessui/react/dist/components/description/description.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{V:()=>G,r:()=>w});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/.pnpm/react@16.14.0/node_modules/react/index.js"),_hooks_use_event_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/.pnpm/@headlessui+react@1.7.19_react-dom@16.14.0_react@16.14.0__react@16.14.0/node_modules/@headlessui/react/dist/hooks/use-event.js"),_hooks_use_id_js__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/.pnpm/@headlessui+react@1.7.19_react-dom@16.14.0_react@16.14.0__react@16.14.0/node_modules/@headlessui/react/dist/hooks/use-id.js"),_hooks_use_iso_morphic_effect_js__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/.pnpm/@headlessui+react@1.7.19_react-dom@16.14.0_react@16.14.0__react@16.14.0/node_modules/@headlessui/react/dist/hooks/use-iso-morphic-effect.js"),_hooks_use_sync_refs_js__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/.pnpm/@headlessui+react@1.7.19_react-dom@16.14.0_react@16.14.0__react@16.14.0/node_modules/@headlessui/react/dist/hooks/use-sync-refs.js"),_utils_render_js__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./node_modules/.pnpm/@headlessui+react@1.7.19_react-dom@16.14.0_react@16.14.0__react@16.14.0/node_modules/@headlessui/react/dist/utils/render.js");let d=(0,react__WEBPACK_IMPORTED_MODULE_0__.createContext)(null);function f(){let r=(0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(d);if(null===r){let t=new Error("You used a <Description /> component, but it is not inside a relevant parent.");throw Error.captureStackTrace&&Error.captureStackTrace(t,f),t}return r}function w(){let[r,t]=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]);return[r.length>0?r.join(" "):void 0,(0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)((()=>function(e){let i=(0,_hooks_use_event_js__WEBPACK_IMPORTED_MODULE_1__._)((s=>(t((o=>[...o,s])),()=>t((o=>{let p=o.slice(),c=p.indexOf(s);return-1!==c&&p.splice(c,1),p}))))),n=(0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)((()=>({register:i,slot:e.slot,name:e.name,props:e.props})),[i,e.slot,e.name,e.props]);return react__WEBPACK_IMPORTED_MODULE_0__.createElement(d.Provider,{value:n},e.children)}),[t])]}let h=(0,_utils_render_js__WEBPACK_IMPORTED_MODULE_5__.FX)((function S(r,t){let a=(0,_hooks_use_id_js__WEBPACK_IMPORTED_MODULE_2__.B)(),{id:e=`headlessui-description-${a}`,...i}=r,n=f(),s=(0,_hooks_use_sync_refs_js__WEBPACK_IMPORTED_MODULE_3__.P)(t);(0,_hooks_use_iso_morphic_effect_js__WEBPACK_IMPORTED_MODULE_4__.s)((()=>n.register(e)),[e,n.register]);let o={ref:s,...n.props,id:e};return(0,_utils_render_js__WEBPACK_IMPORTED_MODULE_5__.XX)({ourProps:o,theirProps:i,slot:n.slot||{},defaultTag:"p",name:n.name||"Description"})})),G=Object.assign(h,{})},"./node_modules/.pnpm/@headlessui+react@1.7.19_react-dom@16.14.0_react@16.14.0__react@16.14.0/node_modules/@headlessui/react/dist/hooks/use-flags.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{D:()=>c});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/.pnpm/react@16.14.0/node_modules/react/index.js"),_use_is_mounted_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/.pnpm/@headlessui+react@1.7.19_react-dom@16.14.0_react@16.14.0__react@16.14.0/node_modules/@headlessui/react/dist/hooks/use-is-mounted.js");function c(a=0){let[l,r]=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(a),t=(0,_use_is_mounted_js__WEBPACK_IMPORTED_MODULE_1__.a)(),o=(0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)((e=>{t.current&&r((u=>u|e))}),[l,t]),m=(0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)((e=>Boolean(l&e)),[l]),s=(0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)((e=>{t.current&&r((u=>u&~e))}),[r,t]),g=(0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)((e=>{t.current&&r((u=>u^e))}),[r]);return{flags:l,addFlag:o,hasFlag:m,removeFlag:s,toggleFlag:g}}},"./node_modules/.pnpm/@headlessui+react@1.7.19_react-dom@16.14.0_react@16.14.0__react@16.14.0/node_modules/@headlessui/react/dist/hooks/use-is-mounted.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{a:()=>f});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/.pnpm/react@16.14.0/node_modules/react/index.js"),_use_iso_morphic_effect_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/.pnpm/@headlessui+react@1.7.19_react-dom@16.14.0_react@16.14.0__react@16.14.0/node_modules/@headlessui/react/dist/hooks/use-iso-morphic-effect.js");function f(){let e=(0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(!1);return(0,_use_iso_morphic_effect_js__WEBPACK_IMPORTED_MODULE_1__.s)((()=>(e.current=!0,()=>{e.current=!1})),[]),e}},"./node_modules/.pnpm/@headlessui+react@1.7.19_react-dom@16.14.0_react@16.14.0__react@16.14.0/node_modules/@headlessui/react/dist/internal/hidden.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{O:()=>s,j:()=>u});var _utils_render_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/.pnpm/@headlessui+react@1.7.19_react-dom@16.14.0_react@16.14.0__react@16.14.0/node_modules/@headlessui/react/dist/utils/render.js");var e,s=((e=s||{})[e.None=1]="None",e[e.Focusable=2]="Focusable",e[e.Hidden=4]="Hidden",e);let u=(0,_utils_render_js__WEBPACK_IMPORTED_MODULE_0__.FX)((function l(d,o){var n;let{features:t=1,...e}=d,r={ref:o,"aria-hidden":!(2&~t)||(null!=(n=e["aria-hidden"])?n:void 0),hidden:!(4&~t)||void 0,style:{position:"fixed",top:1,left:1,width:1,height:0,padding:0,margin:-1,overflow:"hidden",clip:"rect(0, 0, 0, 0)",whiteSpace:"nowrap",borderWidth:"0",...!(4&~t)&&!!(2&~t)&&{display:"none"}}};return(0,_utils_render_js__WEBPACK_IMPORTED_MODULE_0__.XX)({ourProps:r,theirProps:e,slot:{},defaultTag:"div",name:"Hidden"})}))},"./src/quiz-question/quiz-question.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Correct:()=>Correct,Default:()=>Default,Disabled:()=>Disabled,Incorrect:()=>Incorrect,WithCodeInQuestionAndAnswerText:()=>WithCodeInQuestionAndAnswerText,WithPosistion:()=>WithPosistion,__namedExportsOrder:()=>__namedExportsOrder,default:()=>quiz_question_stories});var react=__webpack_require__("./node_modules/.pnpm/react@16.14.0/node_modules/react/index.js"),prism_formatted=__webpack_require__("./src/prism-formatted/prism-formatted.tsx"),quiz_question=__webpack_require__("./src/quiz-question/quiz-question.tsx");const story={title:"Components/QuizQuestion",component:quiz_question.a},QuizQuestionComp=({question,answers,disabled,validation,position})=>{const[answer,setAnswer]=(0,react.useState)();return react.createElement(quiz_question.a,{question,answers,disabled,validation,onChange:newAnswer=>setAnswer(newAnswer),selectedAnswer:answer,position})},Default={render:QuizQuestionComp,args:{question:"Lorem ipsum dolor sit amet, consectetur adipiscing elit",answers:[{label:"Option 1",value:1},{label:"Option 2",value:2},{label:"Option 3",value:3}]},parameters:{docs:{source:{code:'const App = () => {\n  const [answer, setAnswer] = useState();\n\n  return (\n    <QuizQuestion\n      question="Lorem ipsum dolor sit amet, consectetur adipiscing elit"\n      answers={[\n        { label: "Option 1", value: 1 },\n        { label: "Option 2", value: 2 },\n        { label: "Option 3", value: 3 }\n      ]}\n      onChange={(newAnswer) => setAnswer(newAnswer)}\n      selectedAnswer={answer}\n    />\n  );\n}'}}}},WithCodeInQuestionAndAnswerText={render:QuizQuestionComp,args:{question:react.createElement(prism_formatted.C,{text:'<p>Given the following code:</p>\n<pre><code class="language-python">temp = "5 degrees"\ncel = 0\nfahr = float(temp)\ncel = (fahr - 32.0) * 5.0 / 9.0\nprint(cel)\n</code></pre>\n<p>Which line/lines should be surrounded by <code>try</code> block?</p>',getCodeBlockAriaLabel:codeName=>`${codeName} code example`}),answers:[{label:react.createElement(prism_formatted.C,{text:'<pre><code class="language-html"><p>Option 1</p>\n<p>Lorem ipsum</p>\n</code></pre>',getCodeBlockAriaLabel:codeName=>`${codeName} code example`}),value:1},{label:"Option 2",value:2},{label:"Option 3",value:3}]},parameters:{docs:{source:{code:'const App = () => {\n  const [answer, setAnswer] = useState();\n\n  return (\n    <QuizQuestion\n      question={\n        <PrismFormatted\n          text={`<p>Given the following code:</p>\n<pre><code class="language-python">temp = "5 degrees"\ncel = 0\nfahr = float(temp)\ncel = (fahr - 32.0) * 5.0 / 9.0\nprint(cel)\n</code></pre>\n<p>Which line/lines should be surrounded by <code>try</code> block?</p>`}\n          getCodeBlockAriaLabel={(codeName) => `${codeName} code example`}\n      />}\n      answers={[\n        { \n          label: (\n            <PrismFormatted\n              text={`<pre><code class="language-html"><p>Option 1</p>\n<p>Lorem ipsum</p>\n</code></pre>`}\n              getCodeBlockAriaLabel={(codeName) => `${codeName} code example`}\n              />\n          ), \n          value: 1,\n        },\n        { label: "Option 2", value: 2 },\n        { label: "Option 3", value: 3 }\n      ]}\n      onChange={(newAnswer) => setAnswer(newAnswer)}\n      selectedAnswer={answer}\n      validation={{ state: "incorrect", message: "Incorrect." }}\n    />\n  );\n}'}}}},Disabled={render:QuizQuestionComp,args:{question:"Lorem ipsum dolor sit amet, consectetur adipiscing elit",answers:[{label:"Option 1",value:1},{label:"Option 2",value:2},{label:"Option 3",value:3}],disabled:!0},parameters:{docs:{source:{code:'const App = () => {\n  const [answer, setAnswer] = useState();\n\n  return (\n    <QuizQuestion\n      question="Lorem ipsum dolor sit amet, consectetur adipiscing elit"\n      answers={[\n        { label: "Option 1", value: 1 },\n        { label: "Option 2", value: 2 },\n        { label: "Option 3", value: 3 }\n      ]}\n      onChange={(newAnswer) => setAnswer(newAnswer)}\n      selectedAnswer={answer}\n      disabled\n    />\n  );\n}'}}}},Correct={render:QuizQuestionComp,args:{question:"Lorem ipsum dolor sit amet, consectetur adipiscing elit",answers:[{label:"Option 1",value:1},{label:"Option 2",value:2},{label:"Option 3",value:3}],validation:{state:"correct",message:"Correct."}},parameters:{docs:{source:{code:'const App = () => {\n  const [answer, setAnswer] = useState();\n\n  return (\n    <QuizQuestion\n      question="Lorem ipsum dolor sit amet, consectetur adipiscing elit"\n      answers={[\n        { label: "Option 1", value: 1 },\n        { label: "Option 2", value: 2 },\n        { label: "Option 3", value: 3 }\n      ]}\n      onChange={(newAnswer) => setAnswer(newAnswer)}\n      selectedAnswer={answer}\n      validation={{ state: "correct", message: "Correct." }}\n    />\n  );\n}'}}}},Incorrect={render:QuizQuestionComp,args:{question:"Lorem ipsum dolor sit amet, consectetur adipiscing elit",answers:[{label:"Option 1",value:1},{label:"Option 2",value:2},{label:"Option 3",value:3}],validation:{state:"incorrect",message:"Incorrect."}},parameters:{docs:{source:{code:'const App = () => {\n  const [answer, setAnswer] = useState();\n\n  return (\n    <QuizQuestion\n      question="Lorem ipsum dolor sit amet, consectetur adipiscing elit"\n      answers={[\n        { label: "Option 1", value: 1 },\n        { label: "Option 2", value: 2 },\n        { label: "Option 3", value: 3 }\n      ]}\n      onChange={(newAnswer) => setAnswer(newAnswer)}\n      selectedAnswer={answer}\n      validation={{ state: "incorrect", message: "Incorrect." }}\n    />\n  );\n}'}}}},WithPosistion={render:QuizQuestionComp,args:{question:react.createElement(prism_formatted.C,{text:'<p>Given the following code:</p>\n<pre><code class="language-python">temp = "5 degrees"\ncel = 0\nfahr = float(temp)\ncel = (fahr - 32.0) * 5.0 / 9.0\nprint(cel)\n</code></pre>\n<p>Which line/lines should be surrounded by <code>try</code> block?</p>',getCodeBlockAriaLabel:codeName=>`${codeName} code example`}),answers:[{label:"Option 1",value:1},{label:"Option 2",value:2},{label:"Option 3",value:3}],position:1},parameters:{docs:{source:{code:'const App = () => {\n  const [answer, setAnswer] = useState();\n\n  return (\n    <QuizQuestion\n      question={\n        <PrismFormatted\n          text={`<p>Given the following code:</p>\n<pre><code class="language-python">temp = "5 degrees"\ncel = 0\nfahr = float(temp)\ncel = (fahr - 32.0) * 5.0 / 9.0\nprint(cel)\n</code></pre>\n<p>Which line/lines should be surrounded by <code>try</code> block?</p>`}\n          getCodeBlockAriaLabel={(codeName) => `${codeName} code example`}\n       />\n      }\n      answers={[\n        { label: "Option 1", value: 1 },\n        { label: "Option 2", value: 2 },\n        { label: "Option 3", value: 3 }\n      ]}\n      onChange={(newAnswer) => setAnswer(newAnswer)}\n      selectedAnswer={answer}\n      position={1}\n    />\n  );\n}'}}}},quiz_question_stories=story,__namedExportsOrder=["Default","WithCodeInQuestionAndAnswerText","Disabled","Correct","Incorrect","WithPosistion"];Default.parameters={...Default.parameters,docs:{...Default.parameters?.docs,source:{originalSource:'{\n  render: QuizQuestionComp,\n  args: {\n    question: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",\n    answers: [{\n      label: "Option 1",\n      value: 1\n    }, {\n      label: "Option 2",\n      value: 2\n    }, {\n      label: "Option 3",\n      value: 3\n    }]\n  },\n  parameters: {\n    docs: {\n      source: {\n        code: `const App = () => {\n  const [answer, setAnswer] = useState();\n\n  return (\n    <QuizQuestion\n      question="Lorem ipsum dolor sit amet, consectetur adipiscing elit"\n      answers={[\n        { label: "Option 1", value: 1 },\n        { label: "Option 2", value: 2 },\n        { label: "Option 3", value: 3 }\n      ]}\n      onChange={(newAnswer) => setAnswer(newAnswer)}\n      selectedAnswer={answer}\n    />\n  );\n}`\n      }\n    }\n  }\n}',...Default.parameters?.docs?.source}}},WithCodeInQuestionAndAnswerText.parameters={...WithCodeInQuestionAndAnswerText.parameters,docs:{...WithCodeInQuestionAndAnswerText.parameters?.docs,source:{originalSource:'{\n  render: QuizQuestionComp,\n  args: {\n    question: <PrismFormatted text={`<p>Given the following code:</p>\n<pre><code class="language-python">temp = "5 degrees"\ncel = 0\nfahr = float(temp)\ncel = (fahr - 32.0) * 5.0 / 9.0\nprint(cel)\n</code></pre>\n<p>Which line/lines should be surrounded by <code>try</code> block?</p>`} getCodeBlockAriaLabel={codeName => `${codeName} code example`} />,\n    answers: [{\n      label: <PrismFormatted text={`<pre><code class="language-html"><p>Option 1</p>\n<p>Lorem ipsum</p>\n</code></pre>`} getCodeBlockAriaLabel={codeName => `${codeName} code example`} />,\n      value: 1\n    }, {\n      label: "Option 2",\n      value: 2\n    }, {\n      label: "Option 3",\n      value: 3\n    }]\n  },\n  parameters: {\n    docs: {\n      source: {\n        code: `const App = () => {\n  const [answer, setAnswer] = useState();\n\n  return (\n    <QuizQuestion\n      question={\n        <PrismFormatted\n          text={\\`<p>Given the following code:</p>\n<pre><code class="language-python">temp = "5 degrees"\ncel = 0\nfahr = float(temp)\ncel = (fahr - 32.0) * 5.0 / 9.0\nprint(cel)\n</code></pre>\n<p>Which line/lines should be surrounded by <code>try</code> block?</p>\\`}\n          getCodeBlockAriaLabel={(codeName) => \\`\\${codeName} code example\\`}\n      />}\n      answers={[\n        { \n          label: (\n            <PrismFormatted\n              text={\\`<pre><code class="language-html"><p>Option 1</p>\n<p>Lorem ipsum</p>\n</code></pre>\\`}\n              getCodeBlockAriaLabel={(codeName) => \\`\\${codeName} code example\\`}\n              />\n          ), \n          value: 1,\n        },\n        { label: "Option 2", value: 2 },\n        { label: "Option 3", value: 3 }\n      ]}\n      onChange={(newAnswer) => setAnswer(newAnswer)}\n      selectedAnswer={answer}\n      validation={{ state: "incorrect", message: "Incorrect." }}\n    />\n  );\n}`\n      }\n    }\n  }\n}',...WithCodeInQuestionAndAnswerText.parameters?.docs?.source}}},Disabled.parameters={...Disabled.parameters,docs:{...Disabled.parameters?.docs,source:{originalSource:'{\n  render: QuizQuestionComp,\n  args: {\n    question: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",\n    answers: [{\n      label: "Option 1",\n      value: 1\n    }, {\n      label: "Option 2",\n      value: 2\n    }, {\n      label: "Option 3",\n      value: 3\n    }],\n    disabled: true\n  },\n  parameters: {\n    docs: {\n      source: {\n        code: `const App = () => {\n  const [answer, setAnswer] = useState();\n\n  return (\n    <QuizQuestion\n      question="Lorem ipsum dolor sit amet, consectetur adipiscing elit"\n      answers={[\n        { label: "Option 1", value: 1 },\n        { label: "Option 2", value: 2 },\n        { label: "Option 3", value: 3 }\n      ]}\n      onChange={(newAnswer) => setAnswer(newAnswer)}\n      selectedAnswer={answer}\n      disabled\n    />\n  );\n}`\n      }\n    }\n  }\n}',...Disabled.parameters?.docs?.source}}},Correct.parameters={...Correct.parameters,docs:{...Correct.parameters?.docs,source:{originalSource:'{\n  render: QuizQuestionComp,\n  args: {\n    question: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",\n    answers: [{\n      label: "Option 1",\n      value: 1\n    }, {\n      label: "Option 2",\n      value: 2\n    }, {\n      label: "Option 3",\n      value: 3\n    }],\n    validation: {\n      state: "correct",\n      message: "Correct."\n    }\n  },\n  parameters: {\n    docs: {\n      source: {\n        code: `const App = () => {\n  const [answer, setAnswer] = useState();\n\n  return (\n    <QuizQuestion\n      question="Lorem ipsum dolor sit amet, consectetur adipiscing elit"\n      answers={[\n        { label: "Option 1", value: 1 },\n        { label: "Option 2", value: 2 },\n        { label: "Option 3", value: 3 }\n      ]}\n      onChange={(newAnswer) => setAnswer(newAnswer)}\n      selectedAnswer={answer}\n      validation={{ state: "correct", message: "Correct." }}\n    />\n  );\n}`\n      }\n    }\n  }\n}',...Correct.parameters?.docs?.source}}},Incorrect.parameters={...Incorrect.parameters,docs:{...Incorrect.parameters?.docs,source:{originalSource:'{\n  render: QuizQuestionComp,\n  args: {\n    question: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",\n    answers: [{\n      label: "Option 1",\n      value: 1\n    }, {\n      label: "Option 2",\n      value: 2\n    }, {\n      label: "Option 3",\n      value: 3\n    }],\n    validation: {\n      state: "incorrect",\n      message: "Incorrect."\n    }\n  },\n  parameters: {\n    docs: {\n      source: {\n        code: `const App = () => {\n  const [answer, setAnswer] = useState();\n\n  return (\n    <QuizQuestion\n      question="Lorem ipsum dolor sit amet, consectetur adipiscing elit"\n      answers={[\n        { label: "Option 1", value: 1 },\n        { label: "Option 2", value: 2 },\n        { label: "Option 3", value: 3 }\n      ]}\n      onChange={(newAnswer) => setAnswer(newAnswer)}\n      selectedAnswer={answer}\n      validation={{ state: "incorrect", message: "Incorrect." }}\n    />\n  );\n}`\n      }\n    }\n  }\n}',...Incorrect.parameters?.docs?.source}}},WithPosistion.parameters={...WithPosistion.parameters,docs:{...WithPosistion.parameters?.docs,source:{originalSource:'{\n  render: QuizQuestionComp,\n  args: {\n    question: <PrismFormatted text={`<p>Given the following code:</p>\n<pre><code class="language-python">temp = "5 degrees"\ncel = 0\nfahr = float(temp)\ncel = (fahr - 32.0) * 5.0 / 9.0\nprint(cel)\n</code></pre>\n<p>Which line/lines should be surrounded by <code>try</code> block?</p>`} getCodeBlockAriaLabel={codeName => `${codeName} code example`} />,\n    answers: [{\n      label: "Option 1",\n      value: 1\n    }, {\n      label: "Option 2",\n      value: 2\n    }, {\n      label: "Option 3",\n      value: 3\n    }],\n    position: 1\n  },\n  parameters: {\n    docs: {\n      source: {\n        code: `const App = () => {\n  const [answer, setAnswer] = useState();\n\n  return (\n    <QuizQuestion\n      question={\n        <PrismFormatted\n          text={\\`<p>Given the following code:</p>\n<pre><code class="language-python">temp = "5 degrees"\ncel = 0\nfahr = float(temp)\ncel = (fahr - 32.0) * 5.0 / 9.0\nprint(cel)\n</code></pre>\n<p>Which line/lines should be surrounded by <code>try</code> block?</p>\\`}\n          getCodeBlockAriaLabel={(codeName) => \\`\\${codeName} code example\\`}\n       />\n      }\n      answers={[\n        { label: "Option 1", value: 1 },\n        { label: "Option 2", value: 2 },\n        { label: "Option 3", value: 3 }\n      ]}\n      onChange={(newAnswer) => setAnswer(newAnswer)}\n      selectedAnswer={answer}\n      position={1}\n    />\n  );\n}`\n      }\n    }\n  }\n}',...WithPosistion.parameters?.docs?.source}}}},"./src/quiz-question/quiz-question.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{a:()=>QuizQuestion});var react=__webpack_require__("./node_modules/.pnpm/react@16.14.0/node_modules/react/index.js"),description=__webpack_require__("./node_modules/.pnpm/@headlessui+react@1.7.19_react-dom@16.14.0_react@16.14.0__react@16.14.0/node_modules/@headlessui/react/dist/components/description/description.js"),keyboard=__webpack_require__("./node_modules/.pnpm/@headlessui+react@1.7.19_react-dom@16.14.0_react@16.14.0__react@16.14.0/node_modules/@headlessui/react/dist/components/keyboard.js"),use_event=__webpack_require__("./node_modules/.pnpm/@headlessui+react@1.7.19_react-dom@16.14.0_react@16.14.0__react@16.14.0/node_modules/@headlessui/react/dist/hooks/use-event.js"),use_id=__webpack_require__("./node_modules/.pnpm/@headlessui+react@1.7.19_react-dom@16.14.0_react@16.14.0__react@16.14.0/node_modules/@headlessui/react/dist/hooks/use-id.js"),use_iso_morphic_effect=__webpack_require__("./node_modules/.pnpm/@headlessui+react@1.7.19_react-dom@16.14.0_react@16.14.0__react@16.14.0/node_modules/@headlessui/react/dist/hooks/use-iso-morphic-effect.js"),use_sync_refs=__webpack_require__("./node_modules/.pnpm/@headlessui+react@1.7.19_react-dom@16.14.0_react@16.14.0__react@16.14.0/node_modules/@headlessui/react/dist/hooks/use-sync-refs.js"),render=__webpack_require__("./node_modules/.pnpm/@headlessui+react@1.7.19_react-dom@16.14.0_react@16.14.0__react@16.14.0/node_modules/@headlessui/react/dist/utils/render.js");let d=(0,react.createContext)(null);function u(){let a=(0,react.useContext)(d);if(null===a){let t=new Error("You used a <Label /> component, but it is not inside a relevant parent.");throw Error.captureStackTrace&&Error.captureStackTrace(t,u),t}return a}function label_F(){let[a,t]=(0,react.useState)([]);return[a.length>0?a.join(" "):void 0,(0,react.useMemo)((()=>function(e){let s=(0,use_event._)((r=>(t((l=>[...l,r])),()=>t((l=>{let n=l.slice(),p=n.indexOf(r);return-1!==p&&n.splice(p,1),n}))))),o=(0,react.useMemo)((()=>({register:s,slot:e.slot,name:e.name,props:e.props})),[s,e.slot,e.name,e.props]);return react.createElement(d.Provider,{value:o},e.children)}),[t])]}let v=(0,render.FX)((function h(a,t){let i=(0,use_id.B)(),{id:e=`headlessui-label-${i}`,passive:s=!1,...o}=a,r=u(),l=(0,use_sync_refs.P)(t);(0,use_iso_morphic_effect.s)((()=>r.register(e)),[e,r.register]);let n={ref:l,...r.props,id:e};return s&&("onClick"in n&&(delete n.htmlFor,delete n.onClick),"onClick"in o&&delete o.onClick),(0,render.XX)({ourProps:n,theirProps:o,slot:r.slot||{},defaultTag:"label",name:r.name||"Label"})})),B=Object.assign(v,{});var use_disposables=__webpack_require__("./node_modules/.pnpm/@headlessui+react@1.7.19_react-dom@16.14.0_react@16.14.0__react@16.14.0/node_modules/@headlessui/react/dist/hooks/use-disposables.js"),use_flags=__webpack_require__("./node_modules/.pnpm/@headlessui+react@1.7.19_react-dom@16.14.0_react@16.14.0__react@16.14.0/node_modules/@headlessui/react/dist/hooks/use-flags.js"),use_latest_value=__webpack_require__("./node_modules/.pnpm/@headlessui+react@1.7.19_react-dom@16.14.0_react@16.14.0__react@16.14.0/node_modules/@headlessui/react/dist/hooks/use-latest-value.js"),use_tree_walker=__webpack_require__("./node_modules/.pnpm/@headlessui+react@1.7.19_react-dom@16.14.0_react@16.14.0__react@16.14.0/node_modules/@headlessui/react/dist/hooks/use-tree-walker.js"),internal_hidden=__webpack_require__("./node_modules/.pnpm/@headlessui+react@1.7.19_react-dom@16.14.0_react@16.14.0__react@16.14.0/node_modules/@headlessui/react/dist/internal/hidden.js"),bugs=__webpack_require__("./node_modules/.pnpm/@headlessui+react@1.7.19_react-dom@16.14.0_react@16.14.0__react@16.14.0/node_modules/@headlessui/react/dist/utils/bugs.js"),focus_management=__webpack_require__("./node_modules/.pnpm/@headlessui+react@1.7.19_react-dom@16.14.0_react@16.14.0__react@16.14.0/node_modules/@headlessui/react/dist/utils/focus-management.js");function e(i={},s=null,t=[]){for(let[r,n]of Object.entries(i))o(t,f(s,r),n);return t}function f(i,s){return i?i+"["+s+"]":s}function o(i,s,t){if(Array.isArray(t))for(let[r,n]of t.entries())o(i,f(s,r.toString()),n);else t instanceof Date?i.push([s,t.toISOString()]):"boolean"==typeof t?i.push([s,t?"1":"0"]):"string"==typeof t?i.push([s,t]):"number"==typeof t?i.push([s,`${t}`]):null==t?i.push([s,""]):e(t,s,i)}var t,match=__webpack_require__("./node_modules/.pnpm/@headlessui+react@1.7.19_react-dom@16.14.0_react@16.14.0__react@16.14.0/node_modules/@headlessui/react/dist/utils/match.js"),owner=__webpack_require__("./node_modules/.pnpm/@headlessui+react@1.7.19_react-dom@16.14.0_react@16.14.0__react@16.14.0/node_modules/@headlessui/react/dist/utils/owner.js"),Ge=((t=Ge||{})[t.RegisterOption=0]="RegisterOption",t[t.UnregisterOption=1]="UnregisterOption",t);let Ce={0(o,r){let t=[...o.options,{id:r.id,element:r.element,propsRef:r.propsRef}];return{...o,options:(0,focus_management.wl)(t,(p=>p.element.current))}},1(o,r){let t=o.options.slice(),p=o.options.findIndex((T=>T.id===r.id));return-1===p?o:(t.splice(p,1),{...o,options:t})}},radio_group_B=(0,react.createContext)(null);function oe(o){let r=(0,react.useContext)(radio_group_B);if(null===r){let t=new Error(`<${o} /> is missing a parent <RadioGroup /> component.`);throw Error.captureStackTrace&&Error.captureStackTrace(t,oe),t}return r}radio_group_B.displayName="RadioGroupDataContext";let $=(0,react.createContext)(null);function ne(o){let r=(0,react.useContext)($);if(null===r){let t=new Error(`<${o} /> is missing a parent <RadioGroup /> component.`);throw Error.captureStackTrace&&Error.captureStackTrace(t,ne),t}return r}function ke(o,r){return(0,match.Y)(r.type,Ce,o,r)}$.displayName="RadioGroupActionsContext";var xe=(t=>(t[t.Empty=1]="Empty",t[t.Active=2]="Active",t))(xe||{});let Ie=(0,render.FX)((function he(o,r){let t=(0,use_id.B)(),{id:p=`headlessui-radiogroup-${t}`,value:T,defaultValue:v,form:M,name:m,onChange:H,by:G=((e,i)=>e===i),disabled:P=!1,...N}=o,y=(0,use_event._)("string"==typeof G?(e,i)=>{let n=G;return(null==e?void 0:e[n])===(null==i?void 0:i[n])}:G),[A,L]=(0,react.useReducer)(ke,{options:[]}),a=A.options,[h,R]=label_F(),[C,U]=(0,description.r)(),k=(0,react.useRef)(null),W=(0,use_sync_refs.P)(k,r),[l,s]=function use_controllable_T(l,r,c){let[i,s]=(0,react.useState)(c),e=void 0!==l,t=(0,react.useRef)(e),u=(0,react.useRef)(!1),d=(0,react.useRef)(!1);return!e||t.current||u.current?!e&&t.current&&!d.current&&(d.current=!0,t.current=e,console.error("A component is changing from controlled to uncontrolled. This may be caused by the value changing from a defined value to undefined, which should not happen.")):(u.current=!0,t.current=e,console.error("A component is changing from uncontrolled to controlled. This may be caused by the value changing from undefined to a defined value, which should not happen.")),[e?l:i,(0,use_event._)((n=>(e||s(n),null==r?void 0:r(n))))]}(T,H,v),b=(0,react.useMemo)((()=>a.find((e=>!e.propsRef.current.disabled))),[a]),x=(0,react.useMemo)((()=>a.some((e=>y(e.propsRef.current.value,l)))),[a,l]),d=(0,use_event._)((e=>{var n;if(P||y(e,l))return!1;let i=null==(n=a.find((f=>y(f.propsRef.current.value,e))))?void 0:n.propsRef.current;return(null==i||!i.disabled)&&(null==s||s(e),!0)}));(0,use_tree_walker.i)({container:k.current,accept:e=>"radio"===e.getAttribute("role")?NodeFilter.FILTER_REJECT:e.hasAttribute("role")?NodeFilter.FILTER_SKIP:NodeFilter.FILTER_ACCEPT,walk(e){e.setAttribute("role","none")}});let F=(0,use_event._)((e=>{let i=k.current;if(!i)return;let n=(0,owner.T)(i),f=a.filter((u=>!1===u.propsRef.current.disabled)).map((u=>u.element.current));switch(e.key){case keyboard.D.Enter:!function form_p(i){var t,r;let s=null!=(t=null==i?void 0:i.form)?t:i.closest("form");if(s){for(let n of s.elements)if(n!==i&&("INPUT"===n.tagName&&"submit"===n.type||"BUTTON"===n.tagName&&"submit"===n.type||"INPUT"===n.nodeName&&"image"===n.type))return void n.click();null==(r=s.requestSubmit)||r.call(s)}}(e.currentTarget);break;case keyboard.D.ArrowLeft:case keyboard.D.ArrowUp:if(e.preventDefault(),e.stopPropagation(),(0,focus_management.CU)(f,focus_management.BD.Previous|focus_management.BD.WrapAround)===focus_management.Me.Success){let g=a.find((K=>K.element.current===(null==n?void 0:n.activeElement)));g&&d(g.propsRef.current.value)}break;case keyboard.D.ArrowRight:case keyboard.D.ArrowDown:if(e.preventDefault(),e.stopPropagation(),(0,focus_management.CU)(f,focus_management.BD.Next|focus_management.BD.WrapAround)===focus_management.Me.Success){let g=a.find((K=>K.element.current===(null==n?void 0:n.activeElement)));g&&d(g.propsRef.current.value)}break;case keyboard.D.Space:{e.preventDefault(),e.stopPropagation();let u=a.find((g=>g.element.current===(null==n?void 0:n.activeElement)));u&&d(u.propsRef.current.value)}}})),c=(0,use_event._)((e=>(L({type:0,...e}),()=>L({type:1,id:e.id})))),w=(0,react.useMemo)((()=>({value:l,firstOption:b,containsCheckedOption:x,disabled:P,compare:y,...A})),[l,b,x,P,y,A]),ie=(0,react.useMemo)((()=>({registerOption:c,change:d})),[c,d]),ae={ref:W,id:p,role:"radiogroup","aria-labelledby":h,"aria-describedby":C,onKeyDown:F},pe=(0,react.useMemo)((()=>({value:l})),[l]),I=(0,react.useRef)(null),le=(0,use_disposables.L)();return(0,react.useEffect)((()=>{I.current&&void 0!==v&&le.addEventListener(I.current,"reset",(()=>{d(v)}))}),[I,d]),react.createElement(U,{name:"RadioGroup.Description"},react.createElement(R,{name:"RadioGroup.Label"},react.createElement($.Provider,{value:ie},react.createElement(radio_group_B.Provider,{value:w},null!=m&&null!=l&&e({[m]:l}).map((([e,i],n)=>react.createElement(internal_hidden.j,{features:internal_hidden.O.Hidden,ref:0===n?f=>{var u;I.current=null!=(u=null==f?void 0:f.closest("form"))?u:null}:void 0,...(0,render.oE)({key:e,as:"input",type:"radio",checked:null!=i,hidden:!0,readOnly:!0,form:M,disabled:P,name:e,value:i})}))),(0,render.XX)({ourProps:ae,theirProps:N,slot:pe,defaultTag:"div",name:"RadioGroup"})))))})),Se=(0,render.FX)((function we(o,r){var F;let t=(0,use_id.B)(),{id:p=`headlessui-radiogroup-option-${t}`,value:T,disabled:v=!1,...M}=o,m=(0,react.useRef)(null),H=(0,use_sync_refs.P)(m,r),[G,P]=label_F(),[N,y]=(0,description.r)(),{addFlag:A,removeFlag:L,hasFlag:a}=(0,use_flags.D)(1),h=(0,use_latest_value.Y)({value:T,disabled:v}),R=oe("RadioGroup.Option"),C=ne("RadioGroup.Option");(0,use_iso_morphic_effect.s)((()=>C.registerOption({id:p,element:m,propsRef:h})),[p,C,m,h]);let U=(0,use_event._)((c=>{var w;if((0,bugs.l)(c.currentTarget))return c.preventDefault();C.change(T)&&(A(2),null==(w=m.current)||w.focus())})),k=(0,use_event._)((c=>{if((0,bugs.l)(c.currentTarget))return c.preventDefault();A(2)})),W=(0,use_event._)((()=>L(2))),l=(null==(F=R.firstOption)?void 0:F.id)===p,s=R.disabled||v,b=R.compare(R.value,T),x={ref:H,id:p,role:"radio","aria-checked":b?"true":"false","aria-labelledby":G,"aria-describedby":N,"aria-disabled":!!s||void 0,tabIndex:s?-1:b||!R.containsCheckedOption&&l?0:-1,onClick:s?void 0:U,onFocus:s?void 0:k,onBlur:s?void 0:W},d=(0,react.useMemo)((()=>({checked:b,disabled:s,active:a(2)})),[b,s,a]);return react.createElement(y,{name:"RadioGroup.Description"},react.createElement(P,{name:"RadioGroup.Label"},(0,render.XX)({ourProps:x,theirProps:M,slot:d,defaultTag:"div",name:"RadioGroup.Option"})))})),it=Object.assign(Ie,{Option:Se,Label:B,Description:description.V});var index_es=__webpack_require__("./node_modules/.pnpm/@fortawesome+react-fontawesome@0.2.2_@fortawesome+fontawesome-svg-core@6.6.0_react@16.14.0/node_modules/@fortawesome/react-fontawesome/index.es.js"),free_solid_svg_icons=__webpack_require__("./node_modules/.pnpm/@fortawesome+free-solid-svg-icons@6.6.0/node_modules/@fortawesome/free-solid-svg-icons/index.mjs");const radioIconDefaultClasses=["block","relative","w-[20px]","h-[20px]","bg-background-secondary","rounded-full","border-2","border-foreground-primary","me-[15px]"],radioIconActiveClasses=["outline","outline-3","outline-focus-outline-color","outline-offset-2"],radioIconCheckedClasses=["before:absolute","before:w-[10px]","before:h-[10px]","before:bg-foreground-primary","before:rounded-full","before:top-1/2","before:start-1/2","before:-translate-x-1/2","before:-translate-y-1/2"],radioOptionDefaultClasses=["focus:outline-none","cursor-pointer","flex","items-center","p-[20px]","border-x-4","border-t-4","last:border-b-4","border-background-tertiary"],RadioIcon=_ref=>{let{active,checked}=_ref,radioCls=[...radioIconDefaultClasses];return active&&(radioCls=radioCls.concat(radioIconActiveClasses)),checked&&(radioCls=radioCls.concat(radioIconCheckedClasses)),react.createElement("span",{className:radioCls.join(" ")})},Answer=_ref2=>{let{value,label,disabled,checked}=_ref2;const radioOptionCls=[...radioOptionDefaultClasses,...disabled?["aria-disabled:cursor-not-allowed","aria-disabled:opacity-80"]:[]];return react.createElement(it.Option,{key:value,value,className:radioOptionCls.join(" ")},(_ref3=>{let{active}=_ref3;return react.createElement(react.Fragment,null,react.createElement(RadioIcon,{active,checked:!!checked}),react.createElement(it.Label,{className:"m-0 text-foreground-primary",as:"p"},label))}))};try{Answer.displayName="Answer",Answer.__docgenInfo={description:"",displayName:"Answer",props:{checked:{defaultValue:null,description:"",name:"checked",required:!1,type:{name:"boolean | undefined"}},disabled:{defaultValue:null,description:"",name:"disabled",required:!1,type:{name:"boolean | undefined"}},label:{defaultValue:null,description:"",name:"label",required:!0,type:{name:"ReactNode"}},value:{defaultValue:null,description:"",name:"value",required:!0,type:{name:"number"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/quiz-question/answer.tsx#Answer"]={docgenInfo:Answer.__docgenInfo,name:"Answer",path:"src/quiz-question/answer.tsx#Answer"})}catch(__react_docgen_typescript_loader_error){}const QuestionText=_ref=>{let{question,position}=_ref;return null==position?react.createElement("span",{className:"text-foreground-primary"},question):react.createElement("span",{className:"text-foreground-primary flex"},react.createElement("span",null,position,".")," ",question)},ValidationIcon=_ref2=>{let{validation}=_ref2;const{state,message}=validation;return"correct"===state?react.createElement(index_es.g,{icon:free_solid_svg_icons.e68,className:"text-background-success me-[8px]","aria-label":message,"aria-hidden":!1}):react.createElement(index_es.g,{icon:free_solid_svg_icons.Jyw,className:"text-background-danger me-[8px]","aria-label":message,"aria-hidden":!1})},QuizQuestion=_ref3=>{let{question,answers,required,disabled,validation,selectedAnswer,onChange,position}=_ref3;return react.createElement(it,{onChange:selectedOption=>{onChange&&onChange(selectedOption)},"aria-required":required,disabled,value:selectedAnswer??null},react.createElement(it.Label,{className:"block mb-[20px]"},validation&&react.createElement(ValidationIcon,{validation}),react.createElement(QuestionText,{question,position})),answers.map((_ref4=>{let{value,label}=_ref4;return react.createElement(Answer,{key:value,value,label,checked:selectedAnswer===value,disabled})})))};try{QuizQuestion.displayName="QuizQuestion",QuizQuestion.__docgenInfo={description:"QuizQuestion is a radio group that allows users to select a single option from a list of multiple options.\nThe component can be used as a standalone component or in a group of multiple questions.\n\nQuizQuestion does not track its selected option internally,\nbut instead, it provides a `selectedAnswer` and an `onChange` props,\ngiving the parent component full control over the selection handling logic.",displayName:"QuizQuestion",props:{question:{defaultValue:null,description:"Question text, can be plain text or contain code.\nIf the question text contains code, use the PrismFormatted component to ensure the code is rendered correctly.",name:"question",required:!0,type:{name:"ReactNode"}},answers:{defaultValue:null,description:"Answer options",name:"answers",required:!0,type:{name:"QuizQuestionAnswer[]"}},position:{defaultValue:null,description:"Position of the question amongst its siblings",name:"position",required:!1,type:{name:"number | undefined"}},required:{defaultValue:null,description:"Whether the question is required",name:"required",required:!1,type:{name:"boolean | undefined"}},disabled:{defaultValue:null,description:"Whether the question is disabled",name:"disabled",required:!1,type:{name:"boolean | undefined"}},validation:{defaultValue:null,description:"Information needed to render the validation status",name:"validation",required:!1,type:{name:"QuizQuestionValidation | undefined"}},selectedAnswer:{defaultValue:null,description:"Value of the selected answer",name:"selectedAnswer",required:!1,type:{name:"number | undefined"}},onChange:{defaultValue:null,description:"Change event handler, called when an answer is selected",name:"onChange",required:!1,type:{name:"((selectedAnswer: number) => void) | undefined"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/quiz-question/quiz-question.tsx#QuizQuestion"]={docgenInfo:QuizQuestion.__docgenInfo,name:"QuizQuestion",path:"src/quiz-question/quiz-question.tsx#QuizQuestion"})}catch(__react_docgen_typescript_loader_error){}}}]);