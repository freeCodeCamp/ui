"use strict";(self.webpackChunk_freecodecamp_ui=self.webpackChunk_freecodecamp_ui||[]).push([[762],{"./src/panel/panel.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Danger:()=>Danger,Default:()=>Default,Info:()=>Info,Primary:()=>Primary,__namedExportsOrder:()=>__namedExportsOrder,default:()=>panel_stories});var react=__webpack_require__("./node_modules/.pnpm/react@16.14.0/node_modules/react/index.js");function _extends(){return _extends=Object.assign?Object.assign.bind():function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var r in t)({}).hasOwnProperty.call(t,r)&&(n[r]=t[r])}return n},_extends.apply(null,arguments)}const PanelContext=(0,react.createContext)({}),border={primary:"border-foreground-primary",danger:"border-foreground-danger",info:"border-foreground-info"},heading={primary:"outline-[1px] outline outline-foreground-primary text-foreground-primary",danger:"bg-foreground-danger text-background-danger",info:"bg-foreground-info text-background-info"},Body=_ref=>{let{children,className,...props}=_ref;const classes=[className,"p-3.5"].join(" ");return react.createElement("div",_extends({className:classes},props),children)},Heading=_ref2=>{let{children,className,...props}=_ref2;const{variant}=(0,react.useContext)(PanelContext),classes=[className,variant?heading[variant]:"outline outline-[1px] outline-background-tertiary","px-3.5 py-2.5"].join(" ");return react.createElement("div",_extends({className:classes},props),children)},Title=_ref3=>{let{children,...props}=_ref3;return react.createElement("h3",_extends({className:"text-inherit mb-0 text-xl"},props),children)},Panel=_ref4=>{let{children,className,variant,...restProps}=_ref4;const panelClassed=["border-1 border-solid shadow-sm mb-6",variant?border[variant]:"border-background-tertiary",className].join(" ");return react.createElement(PanelContext.Provider,{value:{variant}},react.createElement("div",_extends({className:panelClassed},restProps),children))};Panel.Body=Body,Panel.Heading=Heading,Panel.Title=Title;try{Heading.displayName="Heading",Heading.__docgenInfo={description:"",displayName:"Heading",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/panel/panel.tsx#Heading"]={docgenInfo:Heading.__docgenInfo,name:"Heading",path:"src/panel/panel.tsx#Heading"})}catch(__react_docgen_typescript_loader_error){}try{Title.displayName="Title",Title.__docgenInfo={description:"",displayName:"Title",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/panel/panel.tsx#Title"]={docgenInfo:Title.__docgenInfo,name:"Title",path:"src/panel/panel.tsx#Title"})}catch(__react_docgen_typescript_loader_error){}try{Panel.displayName="Panel",Panel.__docgenInfo={description:"",displayName:"Panel",props:{variant:{defaultValue:null,description:"",name:"variant",required:!1,type:{name:"enum",value:[{value:"undefined"},{value:'"primary"'},{value:'"danger"'},{value:'"info"'}]}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/panel/panel.tsx#Panel"]={docgenInfo:Panel.__docgenInfo,name:"Panel",path:"src/panel/panel.tsx#Panel"})}catch(__react_docgen_typescript_loader_error){}try{Body.displayName="Panel.Body",Body.__docgenInfo={description:"",displayName:"Panel.Body",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/panel/panel.tsx#Panel.Body"]={docgenInfo:Panel.Body.__docgenInfo,name:"Panel.Body",path:"src/panel/panel.tsx#Panel.Body"})}catch(__react_docgen_typescript_loader_error){}try{Heading.displayName="Panel.Heading",Heading.__docgenInfo={description:"",displayName:"Panel.Heading",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/panel/panel.tsx#Panel.Heading"]={docgenInfo:Panel.Heading.__docgenInfo,name:"Panel.Heading",path:"src/panel/panel.tsx#Panel.Heading"})}catch(__react_docgen_typescript_loader_error){}try{Title.displayName="Panel.Title",Title.__docgenInfo={description:"",displayName:"Panel.Title",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/panel/panel.tsx#Panel.Title"]={docgenInfo:Panel.Title.__docgenInfo,name:"Panel.Title",path:"src/panel/panel.tsx#Panel.Title"})}catch(__react_docgen_typescript_loader_error){}const story={title:"Components/Panel",component:Panel,parameters:{controls:{include:["className","variant"]}},argTypes:{className:{control:{type:"text"}},variant:{option:["primary","danger","info",void 0]}}},Child=()=>react.createElement(react.Fragment,null,react.createElement(Panel.Heading,null,react.createElement(Panel.Title,null,"Here is panel Heading")),react.createElement(Panel.Body,null,"Here is Panel body")),Default={args:{children:react.createElement(Child,null)}},Primary={args:{children:react.createElement(Child,null),variant:"primary"}},Info={args:{children:react.createElement(Child,null),variant:"info"}},Danger={args:{children:react.createElement(Child,null),variant:"danger"}},panel_stories=story;Default.parameters={...Default.parameters,docs:{...Default.parameters?.docs,source:{originalSource:"{\n  args: {\n    children: <Child />\n  }\n}",...Default.parameters?.docs?.source}}},Primary.parameters={...Primary.parameters,docs:{...Primary.parameters?.docs,source:{originalSource:'{\n  args: {\n    children: <Child />,\n    variant: "primary"\n  }\n}',...Primary.parameters?.docs?.source}}},Info.parameters={...Info.parameters,docs:{...Info.parameters?.docs,source:{originalSource:'{\n  args: {\n    children: <Child />,\n    variant: "info"\n  }\n}',...Info.parameters?.docs?.source}}},Danger.parameters={...Danger.parameters,docs:{...Danger.parameters?.docs,source:{originalSource:'{\n  args: {\n    children: <Child />,\n    variant: "danger"\n  }\n}',...Danger.parameters?.docs?.source}}};const __namedExportsOrder=["Default","Primary","Info","Danger"]}}]);