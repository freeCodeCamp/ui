import{a as e,n as t}from"./chunk-BneVvdWh.js";import{t as n}from"./react-XedgCGTy.js";import{n as r,t as i}from"./iframe-DzyGt2uA.js";import{n as a,t as o}from"./form-control-CEbwiX5D.js";var s,c,l,u,d,f,p,m;t((()=>{s=e(n()),i(),o(),{fn:c}=__STORYBOOK_MODULE_TEST__,l=r.meta({title:`Components/FormControl`,component:a,tags:[`autodocs`],parameters:{controls:{include:[`className`,`id`,`onChange`,`value`,`componentClass`,`placeholder`,`required`,`type`]}},args:{onChange:c()},argTypes:{className:{control:{type:`text`}},id:{control:{type:`text`}},value:{control:{type:`text`}},componentClass:{options:[`input`,`textarea`]},placeholder:{control:{type:`text`}},required:{control:`boolean`},type:{options:[`text`,`email`,`url`]}}}),u=l.story({}),d=l.story({render:e=>s.createElement(a.Static,e),args:{children:`foo@bar.com`}}),f=s.createElement(`svg`,{"aria-hidden":`true`,focusable:`false`,"data-prefix":`fas`,"data-icon":`check`,xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 448 512`},s.createElement(`path`,{fill:`currentColor`,d:`M438.6 105.4C451.1 117.9 451.1 138.1 438.6 150.6L182.6 406.6C170.1 419.1 149.9 419.1 137.4 406.6L9.372 278.6C-3.124 266.1-3.124 245.9 9.372 233.4C21.87 220.9 42.13 220.9 54.63 233.4L159.1 338.7L393.4 105.4C405.9 92.88 426.1 92.88 438.6 105.4H438.6z`})),p=l.story({render:e=>s.createElement(a.Feedback,e),args:{children:f}}),u.input.parameters={...u.input.parameters,docs:{...u.input.parameters?.docs,source:{originalSource:`meta.story({})`,...u.input.parameters?.docs?.source}}},d.input.parameters={...d.input.parameters,docs:{...d.input.parameters?.docs,source:{originalSource:`meta.story({
  render: args => {
    return <FormControl.Static {...args as ComponentProps<typeof FormControl.Static>} />;
  },
  args: {
    children: "foo@bar.com"
  }
})`,...d.input.parameters?.docs?.source}}},p.input.parameters={...p.input.parameters,docs:{...p.input.parameters?.docs,source:{originalSource:`meta.story({
  render: args => {
    return <FormControl.Feedback {...args as ComponentProps<typeof FormControl.Feedback>} />;
  },
  args: {
    children: checkMark
  }
})`,...p.input.parameters?.docs?.source}}},m=[`Default`,`Static`,`Feedback`]}))();export{u as Default,p as Feedback,d as Static,m as __namedExportsOrder,l as default};