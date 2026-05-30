import{a as e,n as t}from"./chunk-BneVvdWh.js";import{t as n}from"./react-XedgCGTy.js";import{n as r,t as i}from"./iframe-DzyGt2uA.js";var a,o,s,c,l=t((()=>{a=e(n()),o=[`relative`,`border-3`,`text-center`,`inline-block`,`cursor-pointer`,`border-foreground-secondary`,`focus-within:ring`,`focus-within:ring-focus-outline-color`,`aria-disabled:cursor-not-allowed`,`aria-disabled:opacity-50`,`ml-[-3px]`,`first:ml-0`],s=({bsSize:e,checked:t,disabled:n})=>{let r=[...o,...t?[`cursor-default`,`bg-foreground-primary`,`text-background-primary`]:[`bg-background-quaternary`,`text-foreground-secondary`],...n?[`active:before:hidden`]:[`active:before:w-full`,`active:before:h-full`,`active:before:absolute`,`active:before:inset-0`,`active:before:border-3`,`active:before:border-transparent`,`active:before:bg-gray-900`,`active:before:opacity-20`,`dark:hover:bg-background-primary`,`dark:hover:text-foreground-primary`,...t?[`hover:bg-background-quaternary`,`hover:text-foreground-secondary`]:[`hover:bg-foreground-primary`,`hover:text-background-primary`]]];switch(e){case`large`:r.push(`px-8 py-2.5 text-lg`);break;case`medium`:r.push(`px-6 py-1.5 text-md`);break;default:r.push(`px-5 py-1 text-sm`)}return r.join(` `)},c=({bsSize:e=`small`,type:t=`button`,disabled:n,children:r,checked:i,onChange:o,value:c,name:l})=>{let u=s({bsSize:e,disabled:n,checked:i}),d=()=>{!n&&o&&o(!0)};return t===`radio`?a.createElement(`label`,{htmlFor:`toggle-btn-radio`,className:u},a.createElement(`input`,{type:`radio`,id:`toggle-btn-radio`,name:l,value:c,onChange:d,checked:i,"aria-disabled":n,className:`absolute h-0 w-0 opacity-0`}),r):a.createElement(`button`,{"aria-pressed":i,"aria-disabled":n,className:u,onClick:d},r)},c.__docgenInfo={description:``,methods:[],displayName:`ToggleButton`,props:{children:{required:!0,tsType:{name:`ReactReactNode`,raw:`React.ReactNode`},description:``},bsSize:{required:!1,tsType:{name:`union`,raw:`"small" | "medium" | "large"`,elements:[{name:`literal`,value:`"small"`},{name:`literal`,value:`"medium"`},{name:`literal`,value:`"large"`}]},description:``,defaultValue:{value:`"small"`,computed:!1}},bsStyle:{required:!1,tsType:{name:`union`,raw:`"primary" | "danger"`,elements:[{name:`literal`,value:`"primary"`},{name:`literal`,value:`"danger"`}]},description:``},disabled:{required:!1,tsType:{name:`boolean`},description:``},checked:{required:!1,tsType:{name:`boolean`},description:``},onChange:{required:!1,tsType:{name:`signature`,type:`function`,raw:`(value: boolean) => void`,signature:{arguments:[{type:{name:`boolean`},name:`value`}],return:{name:`void`}}},description:``},className:{required:!1,tsType:{name:`string`},description:``},value:{required:!1,tsType:{name:`string`},description:``},name:{required:!1,tsType:{name:`string`},description:``},type:{required:!1,tsType:{name:`union`,raw:`"button" | "radio"`,elements:[{name:`literal`,value:`"button"`},{name:`literal`,value:`"radio"`}]},description:``,defaultValue:{value:`"button"`,computed:!1}}}}})),u=t((()=>{l()})),d,f,p,m,h,g,_,v,y,b,x,S,C;t((()=>{d=e(n()),i(),u(),{fn:f}=__STORYBOOK_MODULE_TEST__,p=r.meta({title:`WIP/ToggleButton`,component:c,tags:[`autodocs`],parameters:{controls:{include:[`children`,`bsStyle`,`bsSize`,`disabled`,`checked`,`onChange`,`value`,`name`]}},args:{onChange:f()},argTypes:{bsStyle:{options:[`primary`]},bsSize:{options:[`small`,`medium`,`large`]},disabled:{options:[!0,!1],control:{type:`radio`}},checked:{options:[!0,!1],control:{type:`radio`}},value:{type:{name:`string`}},name:{type:{name:`string`}}}}),m=p.story({args:{children:`Off`}}),h=p.story({args:{checked:!0,children:`On`,value:`Value`}}),g=p.story({args:{bsSize:`large`,children:`Off`}}),_=p.story({args:{bsSize:`medium`,children:`Off`}}),v=p.story({args:{children:`Off`,disabled:!0}}),y=p.story({args:{type:`radio`,children:`On`,value:`radio`,name:`radio`,checked:!0}}),b=p.story({args:{type:`radio`,children:`Off`,value:`radio`,name:`radio`}}),x=()=>{let[e,t]=(0,d.useState)(!0);return d.createElement(d.Fragment,null,d.createElement(c,{checked:e,onChange:e=>{t(e)}},`On`),d.createElement(c,{checked:!e,onChange:e=>{t(!e)}},`Off`))},S=p.story({render:x}),m.input.parameters={...m.input.parameters,docs:{...m.input.parameters?.docs,source:{originalSource:`meta.story({
  args: {
    children: "Off"
  }
})`,...m.input.parameters?.docs?.source}}},h.input.parameters={...h.input.parameters,docs:{...h.input.parameters?.docs,source:{originalSource:`meta.story({
  args: {
    checked: true,
    children: "On",
    value: "Value"
  }
})`,...h.input.parameters?.docs?.source}}},g.input.parameters={...g.input.parameters,docs:{...g.input.parameters?.docs,source:{originalSource:`meta.story({
  args: {
    bsSize: "large",
    children: "Off"
  }
})`,...g.input.parameters?.docs?.source}}},_.input.parameters={..._.input.parameters,docs:{..._.input.parameters?.docs,source:{originalSource:`meta.story({
  args: {
    bsSize: "medium",
    children: "Off"
  }
})`,..._.input.parameters?.docs?.source}}},v.input.parameters={...v.input.parameters,docs:{...v.input.parameters?.docs,source:{originalSource:`meta.story({
  args: {
    children: "Off",
    disabled: true
  }
})`,...v.input.parameters?.docs?.source}}},y.input.parameters={...y.input.parameters,docs:{...y.input.parameters?.docs,source:{originalSource:`meta.story({
  args: {
    type: "radio",
    children: "On",
    value: "radio",
    name: "radio",
    checked: true
  }
})`,...y.input.parameters?.docs?.source}}},b.input.parameters={...b.input.parameters,docs:{...b.input.parameters?.docs,source:{originalSource:`meta.story({
  args: {
    type: "radio",
    children: "Off",
    value: "radio",
    name: "radio"
  }
})`,...b.input.parameters?.docs?.source}}},S.input.parameters={...S.input.parameters,docs:{...S.input.parameters?.docs,source:{originalSource:`meta.story({
  render: InsideToggleGroupRender
})`,...S.input.parameters?.docs?.source}}},C=[`Default`,`Checked`,`Large`,`Medium`,`Disabled`,`RadioChecked`,`RadioUnchecked`,`InsideToggleGroup`]}))();export{h as Checked,m as Default,v as Disabled,S as InsideToggleGroup,g as Large,_ as Medium,y as RadioChecked,b as RadioUnchecked,C as __namedExportsOrder,p as default};