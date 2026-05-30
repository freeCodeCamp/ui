import{a as e,n as t}from"./chunk-BneVvdWh.js";import{t as n}from"./react-XedgCGTy.js";import{n as r,t as i}from"./iframe-DzyGt2uA.js";import{n as a,t as o}from"./col-BjE42hhi.js";import{n as s,t as c}from"./row-CNtk0DzH.js";var l,u,d=t((()=>{l=e(n()),u=({children:e,className:t,fluid:n})=>{let r=n?``:`my-0 md:w-[750px] min-[992px]:w-[970px] min-[1200px]:w-[1170px]`;return l.createElement(`div`,{className:`mx-auto px-[15px] ${r} ${t??``}`},e)},u.__docgenInfo={description:``,methods:[],displayName:`Container`,props:{children:{required:!1,tsType:{name:`ReactReactNode`,raw:`React.ReactNode`},description:``},className:{required:!1,tsType:{name:`string`},description:``},fluid:{required:!1,tsType:{name:`boolean`},description:``}}}})),f=t((()=>{d()})),p,m,h,g,_,v;t((()=>{p=e(n()),i(),f(),c(),o(),m=r.meta({title:`Components/Container`,component:u,tags:[`autodocs`],argTypes:{fluid:{control:{type:`boolean`}}}}),h=e=>p.createElement(u,e,p.createElement(s,null,p.createElement(a,{xs:12,className:`bg-blue-700 px-3 py-2 text-white text-center`},`Column`))),g=m.story({render:h,args:{},parameters:{docs:{description:{story:`Default container: centers content with horizontal padding and applies fixed max-widths.
- For medium screens (768px and up), the max width is 750px.
- For screens around 992px and wider, the max width is 970px.
- For large screens (1200px and wider), the max width is 1170px.
`}}}}),_=m.story({render:h,args:{fluid:!0},parameters:{docs:{description:{story:`Fluid container: centers content with horizontal padding and stretches to full viewport width.`}}}}),g.input.parameters={...g.input.parameters,docs:{...g.input.parameters?.docs,source:{originalSource:`meta.story({
  render: ContainerTemplate,
  args: {},
  parameters: {
    docs: {
      description: {
        story: \`Default container: centers content with horizontal padding and applies fixed max-widths.
- For medium screens (768px and up), the max width is 750px.
- For screens around 992px and wider, the max width is 970px.
- For large screens (1200px and wider), the max width is 1170px.
\`
      }
    }
  }
})`,...g.input.parameters?.docs?.source}}},_.input.parameters={..._.input.parameters,docs:{..._.input.parameters?.docs,source:{originalSource:`meta.story({
  render: ContainerTemplate,
  args: {
    fluid: true
  },
  parameters: {
    docs: {
      description: {
        story: "Fluid container: centers content with horizontal padding and stretches to full viewport width."
      }
    }
  }
})`,..._.input.parameters?.docs?.source}}},v=[`Default`,`Fluid`]}))();export{g as Default,_ as Fluid,v as __namedExportsOrder,m as default};