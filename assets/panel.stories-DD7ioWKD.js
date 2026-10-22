import{a as e,n as t}from"./rolldown-runtime-sJBDdmOt.js";import{t as n}from"./react-pByjoP3I.js";import{n as r,r as i}from"./iframe-AlbDbHln.js";var a,o,s,c,l,u,d,f;function p(){return(p=t((()=>{a=e(n()),o=(0,a.createContext)({}),s={primary:`border-foreground-primary`,danger:`border-foreground-danger`,info:`border-foreground-info`},c={primary:`outline-[1px] outline outline-foreground-primary text-foreground-primary`,danger:`bg-foreground-danger text-background-danger`,info:`bg-foreground-info text-background-info`},l=({children:e,className:t,...n})=>{let r=[t,`p-3.5`].join(` `);return a.createElement(`div`,{className:r,...n},e)},u=({children:e,className:t,...n})=>{let{variant:r}=(0,a.useContext)(o),i=[t,r?c[r]:`outline outline-[1px] outline-background-tertiary`,`px-3.5 py-2.5`].join(` `);return a.createElement(`div`,{className:i,...n},e)},d=({children:e,...t})=>a.createElement(`h3`,{className:`text-inherit mb-0 text-xl`,...t},e),f=({children:e,className:t,variant:n,...r})=>{let i=[`border-1 border-solid shadow-sm mb-6`,n?s[n]:`border-background-tertiary`,t].join(` `);return a.createElement(o.Provider,{value:{variant:n}},a.createElement(`div`,{className:i,...r},e))},f.Body=l,f.Heading=u,f.Title=d,u.__docgenInfo={description:``,methods:[],displayName:`Heading`},d.__docgenInfo={description:``,methods:[],displayName:`Title`},f.__docgenInfo={description:``,methods:[{name:`Body`,docblock:null,modifiers:[`static`],params:[{name:`{
	children,
	className,
	...props
}: ComponentProps<"div">`,optional:!1,type:{name:`ComponentProps`,elements:[{name:`literal`,value:`"div"`}],raw:`ComponentProps<"div">`,alias:`ComponentProps`}}],returns:{type:{name:`JSX.Element`}}},{name:`Heading`,docblock:null,modifiers:[`static`],params:[{name:`{
	children,
	className,
	...props
}: ComponentProps<"div">`,optional:!1,type:{name:`ComponentProps`,elements:[{name:`literal`,value:`"div"`}],raw:`ComponentProps<"div">`,alias:`ComponentProps`}}],returns:{type:{name:`JSX.Element`}}},{name:`Title`,docblock:null,modifiers:[`static`],params:[{name:`{
	children,
	...props
}: ComponentProps<"h3">`,optional:!1,type:{name:`ComponentProps`,elements:[{name:`literal`,value:`"h3"`}],raw:`ComponentProps<"h3">`,alias:`ComponentProps`}}],returns:{type:{name:`JSX.Element`}}}],displayName:`Panel`,props:{variant:{required:!1,tsType:{name:`union`,raw:`"primary" | "info" | "danger"`,elements:[{name:`literal`,value:`"primary"`},{name:`literal`,value:`"info"`},{name:`literal`,value:`"danger"`}]},description:``}}}})))()}function m(){return(m=t((()=>{p()})))()}var h,g,_,v,y,b,x,S;function C(){return(C=t((()=>{h=e(n()),r(),m(),g=i.meta({title:`Components/Panel`,component:f,tags:[`autodocs`],parameters:{controls:{include:[`className`,`variant`]}},argTypes:{className:{control:{type:`text`}},variant:{option:[`primary`,`danger`,`info`,void 0]}}}),_=()=>h.createElement(h.Fragment,null,h.createElement(f.Heading,null,h.createElement(f.Title,null,`Here is panel Heading`)),h.createElement(f.Body,null,`Here is Panel body`)),v=g.story({args:{children:h.createElement(_,null)}}),y=g.story({args:{children:h.createElement(_,null),variant:`primary`}}),b=g.story({args:{children:h.createElement(_,null),variant:`info`}}),x=g.story({args:{children:h.createElement(_,null),variant:`danger`}}),S=[`Default`,`Primary`,`Info`,`Danger`],v.input.parameters={...v.input.parameters,docs:{...v.input.parameters?.docs,source:{originalSource:`meta.story({
  args: {
    children: <Child />
  }
})`,...v.input.parameters?.docs?.source}}},y.input.parameters={...y.input.parameters,docs:{...y.input.parameters?.docs,source:{originalSource:`meta.story({
  args: {
    children: <Child />,
    variant: "primary"
  }
})`,...y.input.parameters?.docs?.source}}},b.input.parameters={...b.input.parameters,docs:{...b.input.parameters?.docs,source:{originalSource:`meta.story({
  args: {
    children: <Child />,
    variant: "info"
  }
})`,...b.input.parameters?.docs?.source}}},x.input.parameters={...x.input.parameters,docs:{...x.input.parameters?.docs,source:{originalSource:`meta.story({
  args: {
    children: <Child />,
    variant: "danger"
  }
})`,...x.input.parameters?.docs?.source}}}})))()}C();export{x as Danger,v as Default,b as Info,y as Primary,S as __namedExportsOrder,g as default};