import{a as e,n as t}from"./chunk-BneVvdWh.js";import{t as n}from"./react-XedgCGTy.js";import{n as r,t as i}from"./iframe-DzyGt2uA.js";import{n as a,t as o}from"./button-BslSpz5e.js";import{n as s}from"./form-group-C1CRMoTi.js";import{n as c,t as l}from"./form-control-CEbwiX5D.js";import{t as u}from"./form-group-Ck1tbXHq.js";import{n as d,t as f}from"./control-label-DItF1RAZ.js";var p,m,h,g,_,v,y,b,x,S,C,w,T,E,D;t((()=>{p=e(n()),i(),l(),u(),f(),o(),{fn:m}=__STORYBOOK_MODULE_TEST__,h=r.meta({title:`Components/Button`,component:a,tags:[`autodocs`],parameters:{controls:{include:[`children`,`variant`,`size`,`disabled`,`block`,`href`,`download`,`target`,`onClick`]}},args:{onClick:m()},argTypes:{variant:{options:[`primary`,`danger`,`info`]},size:{options:[`small`,`medium`,`large`]},disabled:{options:[!0,!1],control:{type:`radio`}},block:{options:[!0,!1],control:{type:`radio`}},target:{options:[`_self`,`_blank`,`_parent`,`_top`]},href:{control:{type:`text`}},download:{control:{type:`text`}}}}),g=h.story({args:{children:`Button`}}),_=h.story({args:{variant:`danger`,children:`Button`}}),v=h.story({args:{variant:`info`,children:`Button`}}),y=h.story({args:{size:`large`,children:`Button`}}),b=h.story({args:{size:`small`,children:`Button`}}),x=h.story({args:{children:`Button`,disabled:!0}}),S=h.story({args:{children:`Button`,block:!0}}),C=h.story({args:{children:`I'm a link that looks like a button`,href:`https://www.freecodecamp.org`}}),w=h.story({args:{children:`I'm a download link`,href:`https://www.freecodecamp.org`,download:`my_file.txt`}}),T=()=>{let[e,t]=(0,p.useState)(``);return p.createElement(`form`,{onSubmit:()=>{alert(`Submitted`)}},p.createElement(s,{controlId:`username`},p.createElement(d,null,`Username`),p.createElement(c,{componentClass:`input`,type:`text`,onChange:e=>{t(e.target.value)}})),p.createElement(a,{type:`submit`,disabled:!e},`Submit`))},E=h.story({render:T}),g.input.parameters={...g.input.parameters,docs:{...g.input.parameters?.docs,source:{originalSource:`meta.story({
  args: {
    children: "Button"
  }
})`,...g.input.parameters?.docs?.source}}},_.input.parameters={..._.input.parameters,docs:{..._.input.parameters?.docs,source:{originalSource:`meta.story({
  args: {
    variant: "danger",
    children: "Button"
  }
})`,..._.input.parameters?.docs?.source}}},v.input.parameters={...v.input.parameters,docs:{...v.input.parameters?.docs,source:{originalSource:`meta.story({
  args: {
    variant: "info",
    children: "Button"
  }
})`,...v.input.parameters?.docs?.source}}},y.input.parameters={...y.input.parameters,docs:{...y.input.parameters?.docs,source:{originalSource:`meta.story({
  args: {
    size: "large",
    children: "Button"
  }
})`,...y.input.parameters?.docs?.source}}},b.input.parameters={...b.input.parameters,docs:{...b.input.parameters?.docs,source:{originalSource:`meta.story({
  args: {
    size: "small",
    children: "Button"
  }
})`,...b.input.parameters?.docs?.source}}},x.input.parameters={...x.input.parameters,docs:{...x.input.parameters?.docs,source:{originalSource:`meta.story({
  args: {
    children: "Button",
    disabled: true
  }
})`,...x.input.parameters?.docs?.source}}},S.input.parameters={...S.input.parameters,docs:{...S.input.parameters?.docs,source:{originalSource:`meta.story({
  args: {
    children: "Button",
    block: true
  }
})`,...S.input.parameters?.docs?.source}}},C.input.parameters={...C.input.parameters,docs:{...C.input.parameters?.docs,source:{originalSource:`meta.story({
  args: {
    children: "I'm a link that looks like a button",
    href: "https://www.freecodecamp.org"
  }
})`,...C.input.parameters?.docs?.source}}},w.input.parameters={...w.input.parameters,docs:{...w.input.parameters?.docs,source:{originalSource:`meta.story({
  args: {
    children: "I'm a download link",
    href: "https://www.freecodecamp.org",
    download: "my_file.txt"
  }
})`,...w.input.parameters?.docs?.source}}},E.input.parameters={...E.input.parameters,docs:{...E.input.parameters?.docs,source:{originalSource:`meta.story({
  render: FormWithSubmitButton
})`,...E.input.parameters?.docs?.source}}},D=[`Default`,`Danger`,`Info`,`Large`,`Small`,`Disabled`,`FullWidth`,`AsALink`,`AsADownloadLink`,`AsASubmitButton`]}))();export{w as AsADownloadLink,C as AsALink,E as AsASubmitButton,_ as Danger,g as Default,x as Disabled,S as FullWidth,v as Info,y as Large,b as Small,D as __namedExportsOrder,h as default};