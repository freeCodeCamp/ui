import{a as e,n as t}from"./chunk-BneVvdWh.js";import{t as n}from"./react-XedgCGTy.js";import{n as r,t as i}from"./iframe-DzyGt2uA.js";import{a,g as o,h as s,i as c,m as l}from"./free-solid-svg-icons-BSySrVD2.js";import{a as u,t as d}from"./headlessui.esm-CHEgjAkh.js";var f=t((()=>{d()})),p,m,h,g,_,v,y;t((()=>{p=e(n()),i(),o(),l(),f(),m=r.meta({title:`Components/HeadlessDisclosure`,component:u,tags:[`autodocs`]}),h=e=>p.createElement(u,e,({open:e})=>p.createElement(p.Fragment,null,p.createElement(u.Button,{className:`text-foreground-primary`},e?`Collapse`:`Expand`,p.createElement(s,{icon:e?a:c,className:`ml-2`,"aria-hidden":`true`})),p.createElement(u.Panel,{className:`text-foreground-primary`},p.createElement(`p`,null,`This is the disclosure panel content.`)))),g=e=>`<HeadlessDisclosure${e?` defaultOpen`:``}>
  {({ open }) => (
    <>
      <HeadlessDisclosure.Button>
        {open ? "Collapse" : "Expand"}
        <FontAwesomeIcon
          icon={open ? faChevronUp : faChevronDown}
          className="ml-2"
          aria-hidden="true"
        />
      </HeadlessDisclosure.Button>
      <HeadlessDisclosure.Panel>
        <p>This is the disclosure panel content.</p>
      </HeadlessDisclosure.Panel>
    </>
  )}
</HeadlessDisclosure>`,_=m.story({args:{defaultOpen:!1},render:e=>h(e),parameters:{docs:{source:{code:g(!1),language:`tsx`}}}}),v=m.story({args:{defaultOpen:!0},render:e=>h(e),parameters:{docs:{source:{code:g(!0),language:`tsx`}}}}),_.input.parameters={..._.input.parameters,docs:{..._.input.parameters?.docs,source:{originalSource:`meta.story({
  args: {
    defaultOpen: false
  },
  render: args => renderDisclosure(args),
  parameters: {
    docs: {
      source: {
        code: sourceCode(false),
        language: "tsx"
      }
    }
  }
})`,..._.input.parameters?.docs?.source}}},v.input.parameters={...v.input.parameters,docs:{...v.input.parameters?.docs,source:{originalSource:`meta.story({
  args: {
    defaultOpen: true
  },
  render: args => renderDisclosure(args),
  parameters: {
    docs: {
      source: {
        code: sourceCode(true),
        language: "tsx"
      }
    }
  }
})`,...v.input.parameters?.docs?.source}}},y=[`Default`,`DefaultOpen`]}))();export{_ as Default,v as DefaultOpen,y as __namedExportsOrder,m as default};