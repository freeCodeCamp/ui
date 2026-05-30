import{a as e,n as t}from"./chunk-BneVvdWh.js";import{t as n}from"./react-XedgCGTy.js";import{n as r,t as i}from"./iframe-DzyGt2uA.js";var a,o,s,c,l=t((()=>{a=e(n()),o=[`table-auto`,`w-full`,`max-w-full`,`border-collapse`,`text-start`,`text-foreground-tertiary`,`[&_th]:font-normal`],s=({condensed:e,striped:t})=>{let n=[...o];return e?n.push(`[&_td]:p-1 [&_th]:p-1`):n.push(`[&_td]:p-2 [&_th]:p-2`),t&&n.push(`[&>tbody>tr:nth-of-type(odd)]:bg-background-tertiary`),n.join(` `)},c=a.forwardRef(({striped:e=!1,condensed:t=!1,...n},r)=>{let i=a.useMemo(()=>s({condensed:t,striped:e}),[t,e]);return a.createElement(`table`,{...n,ref:r,className:i})}),c.displayName=`Table`,c.__docgenInfo={description:``,methods:[],displayName:`Table`,props:{condensed:{required:!1,tsType:{name:`boolean`},description:``,defaultValue:{value:`false`,computed:!1}},striped:{required:!1,tsType:{name:`boolean`},description:``,defaultValue:{value:`false`,computed:!1}}}}})),u=t((()=>{l()})),d,f,p,m,h,g,_;t((()=>{d=e(n()),i(),u(),f=d.createElement(d.Fragment,null,d.createElement(`thead`,null,d.createElement(`tr`,null,d.createElement(`th`,null,`#`),d.createElement(`th`,null,`First Name`),d.createElement(`th`,null,`Last Name`),d.createElement(`th`,null,`Username`))),d.createElement(`tbody`,null,d.createElement(`tr`,null,d.createElement(`td`,null,`1`),d.createElement(`td`,null,`Mark`),d.createElement(`td`,null,`Otto`),d.createElement(`td`,null,`@mdo`)),d.createElement(`tr`,null,d.createElement(`td`,null,`2`),d.createElement(`td`,null,`John`),d.createElement(`td`,null,`Loos`),d.createElement(`td`,null,`@mlos`)),d.createElement(`tr`,null,d.createElement(`td`,null,`3`),d.createElement(`td`,null,`Joe`),d.createElement(`td`,null,`Kot`),d.createElement(`td`,null,`@mko`)))),p=r.meta({title:`Components/Table`,component:c,tags:[`autodocs`],parameters:{controls:{include:[`variant`,`size`,`bordered`,`borderless`,`hover`,`striped`,`condensed`,`responsive`]}},argTypes:{striped:{options:[!0,!1],control:{type:`radio`}},condensed:{options:[!0,!1],control:{type:`radio`}}}}),m=p.story({render:e=>d.createElement(c,e,f),args:{condensed:!1,striped:!1}}),h=p.story({render:e=>d.createElement(c,e,f),args:{condensed:!0}}),g=p.story({render:e=>d.createElement(c,e,f),args:{striped:!0}}),m.input.parameters={...m.input.parameters,docs:{...m.input.parameters?.docs,source:{originalSource:`meta.story({
  render: args => <Table {...args}>{exampleTable}</Table>,
  args: {
    condensed: false,
    striped: false
  }
})`,...m.input.parameters?.docs?.source}}},h.input.parameters={...h.input.parameters,docs:{...h.input.parameters?.docs,source:{originalSource:`meta.story({
  render: args => <Table {...args}>{exampleTable}</Table>,
  args: {
    condensed: true
  }
})`,...h.input.parameters?.docs?.source}}},g.input.parameters={...g.input.parameters,docs:{...g.input.parameters?.docs,source:{originalSource:`meta.story({
  render: args => <Table {...args}>{exampleTable}</Table>,
  args: {
    striped: true
  }
})`,...g.input.parameters?.docs?.source}}},_=[`Default`,`Condensed`,`Striped`]}))();export{h as Condensed,m as Default,g as Striped,_ as __namedExportsOrder,p as default};