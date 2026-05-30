import{a as e,n as t}from"./chunk-BneVvdWh.js";import{t as n}from"./react-XedgCGTy.js";import{n as r,t as i}from"./iframe-DzyGt2uA.js";import{n as a,t as o}from"./button-BslSpz5e.js";var s,c,l,u=t((()=>{s=e(n()),c={success:`text-green-800 bg-green-50 border-green-100`,info:`text-blue-800 bg-blue-50 border-blue-100`,warning:`text-yellow-800 bg-yellow-50 border-yellow-100`,danger:`text-red-900 bg-red-50 border-red-100`},l=({children:e,className:t,variant:n,...r})=>{let i=[`p-4 mb-6 border border-solid border-1 break-words`,`[&_button]:bg-transparent [&_button]:text-current [&_button]:border [&_button]:border-3 [&_button]:border-current`,`[&_button:hover]:bg-[#31708f] [&_button:hover]:text-[#d9edf7] [&_button:hover]:border-[#31708f]`,`[&_button:focus]:bg-[#31708f] [&_button:focus]:text-[#d9edf7] [&_button:focus]:border-[#31708f]`,`[&_button:active]:bg-[#31708f] [&_button:active]:text-[#d9edf7] [&_button:active]:border-[#31708f]`,`[&_a:hover]:bg-[#31708f] [&_a:hover]:text-[#d9edf7]`,`[&_a:focus]:bg-[#31708f] [&_a:focus]:text-[#d9edf7]`,`[&_a:active]:bg-[#31708f] [&_a:active]:text-[#d9edf7]`,c[n],t].join(` `);return s.createElement(`div`,{className:i,role:`alert`,...r},e)},l.__docgenInfo={description:"`Alert` is used to communicate high-priority or time-sensitive information.\n`Alert` is not dismissable.\nUse `Callout` instead of `Alert` if you want to communicate information specific to a page.",methods:[],displayName:`Alert`,props:{variant:{required:!0,tsType:{name:`union`,raw:`"success" | "info" | "warning" | "danger"`,elements:[{name:`literal`,value:`"success"`},{name:`literal`,value:`"info"`},{name:`literal`,value:`"warning"`},{name:`literal`,value:`"danger"`}]},description:``}}}})),d,f,p,m,h,g,_,v,y,b;t((()=>{d=e(n()),o(),i(),u(),f=r.meta({title:`Components/Alert`,component:l,tags:[`autodocs`],argTypes:{children:{control:{type:`text`}},className:{control:{type:`text`}}}}),p=f.story({args:{children:`Hello, Alert!`,variant:`success`}}),m=f.story({args:{children:`Hello, Alert!`,variant:`info`}}),h=f.story({args:{children:`Hello, Alert!`,variant:`warning`}}),g=f.story({args:{children:`Hello, Alert!`,variant:`danger`}}),_=f.story({args:{variant:`success`,children:`Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet animi commodi cumque dicta ducimus eum iure, maiores mollitia, odit porro quas quod rerum soluta sunt tempora unde, vel voluptas voluptates.`}}),v=f.story({args:{variant:`info`,children:d.createElement(d.Fragment,null,d.createElement(`h4`,null,d.createElement(`strong`,null,`Some Heading Text`)),d.createElement(`p`,null,`Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet animi commodi cumque dicta ducimus eum iure, maiores mollitia, odit porro quas quod rerum soluta sunt tempora unde, vel voluptas voluptates.`),d.createElement(`p`,null,`Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet animi commodi cumque dicta ducimus eum iure, maiores mollitia, odit porro quas quod rerum soluta sunt tempora unde, vel voluptas voluptates.`))}}),y=f.story({args:{variant:`info`,children:d.createElement(d.Fragment,null,d.createElement(`p`,null,`This is an alert with a`,` `,d.createElement(`a`,{href:`#test`,onClick:e=>e.preventDefault()},`link`),` `,`and a button.`),d.createElement(a,null,`Click me`))}}),p.input.parameters={...p.input.parameters,docs:{...p.input.parameters?.docs,source:{originalSource:`meta.story({
  args: {
    children: "Hello, Alert!",
    variant: "success"
  }
})`,...p.input.parameters?.docs?.source}}},m.input.parameters={...m.input.parameters,docs:{...m.input.parameters?.docs,source:{originalSource:`meta.story({
  args: {
    children: "Hello, Alert!",
    variant: "info"
  }
})`,...m.input.parameters?.docs?.source}}},h.input.parameters={...h.input.parameters,docs:{...h.input.parameters?.docs,source:{originalSource:`meta.story({
  args: {
    children: "Hello, Alert!",
    variant: "warning"
  }
})`,...h.input.parameters?.docs?.source}}},g.input.parameters={...g.input.parameters,docs:{...g.input.parameters?.docs,source:{originalSource:`meta.story({
  args: {
    children: "Hello, Alert!",
    variant: "danger"
  }
})`,...g.input.parameters?.docs?.source}}},_.input.parameters={..._.input.parameters,docs:{..._.input.parameters?.docs,source:{originalSource:`meta.story({
  args: {
    variant: "success",
    children: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet animi commodi cumque dicta ducimus eum iure, maiores mollitia, odit porro quas quod rerum soluta sunt tempora unde, vel voluptas voluptates."
  }
})`,..._.input.parameters?.docs?.source}}},v.input.parameters={...v.input.parameters,docs:{...v.input.parameters?.docs,source:{originalSource:`meta.story({
  args: {
    variant: "info",
    children: <>
                <h4>
                    <strong>Some Heading Text</strong>
                </h4>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet animi
                    commodi cumque dicta ducimus eum iure, maiores mollitia, odit porro
                    quas quod rerum soluta sunt tempora unde, vel voluptas voluptates.
                </p>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet animi
                    commodi cumque dicta ducimus eum iure, maiores mollitia, odit porro
                    quas quod rerum soluta sunt tempora unde, vel voluptas voluptates.
                </p>
            </>
  }
})`,...v.input.parameters?.docs?.source}}},y.input.parameters={...y.input.parameters,docs:{...y.input.parameters?.docs,source:{originalSource:`meta.story({
  args: {
    variant: "info",
    children: <>
                <p>
                    This is an alert with a{" "}
                    <a href="#test" onClick={e => e.preventDefault()}>
                        link
                    </a>{" "}
                    and a button.
                </p>
                <Button>Click me</Button>
            </>
  }
})`,...y.input.parameters?.docs?.source}}},b=[`Success`,`Info`,`Warning`,`Danger`,`LongText`,`WithHeadingAndParagraphs`,`WithButtonAndLink`]}))();export{g as Danger,m as Info,_ as LongText,p as Success,h as Warning,y as WithButtonAndLink,v as WithHeadingAndParagraphs,b as __namedExportsOrder,f as default};