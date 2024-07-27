"use strict";(self.webpackChunk_freecodecamp_ui=self.webpackChunk_freecodecamp_ui||[]).push([[628],{"./src/spacer/spacer.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{L:()=>L,M:()=>M,S:()=>S,XL:()=>XL,XS:()=>XS,XXL:()=>XXL,XXS:()=>XXS,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/.pnpm/react@16.14.0/node_modules/react/index.js"),_spacer__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/spacer/spacer.tsx"),_button__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/button/index.ts");const story={title:"Components/Spacer",component:_spacer__WEBPACK_IMPORTED_MODULE_1__.h},Template=args=>react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment,null,react__WEBPACK_IMPORTED_MODULE_0__.createElement(_button__WEBPACK_IMPORTED_MODULE_2__.$,null,"Button one"),react__WEBPACK_IMPORTED_MODULE_0__.createElement(_spacer__WEBPACK_IMPORTED_MODULE_1__.h,args),react__WEBPACK_IMPORTED_MODULE_0__.createElement(_button__WEBPACK_IMPORTED_MODULE_2__.$,null,"Button two")),XXS={render:Template,args:{size:"xxs"}},XS={render:Template,args:{size:"xs"}},S={render:Template,args:{size:"s"}},M={render:Template,args:{size:"m"}},L={render:Template,args:{size:"l"}},XL={render:Template,args:{size:"xl"}},XXL={render:Template,args:{size:"xxl"}},__WEBPACK_DEFAULT_EXPORT__=story,__namedExportsOrder=["XXS","XS","S","M","L","XL","XXL"];XXS.parameters={...XXS.parameters,docs:{...XXS.parameters?.docs,source:{originalSource:'{\n  render: Template,\n  args: {\n    size: "xxs"\n  }\n}',...XXS.parameters?.docs?.source}}},XS.parameters={...XS.parameters,docs:{...XS.parameters?.docs,source:{originalSource:'{\n  render: Template,\n  args: {\n    size: "xs"\n  }\n}',...XS.parameters?.docs?.source}}},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:'{\n  render: Template,\n  args: {\n    size: "s"\n  }\n}',...S.parameters?.docs?.source}}},M.parameters={...M.parameters,docs:{...M.parameters?.docs,source:{originalSource:'{\n  render: Template,\n  args: {\n    size: "m"\n  }\n}',...M.parameters?.docs?.source}}},L.parameters={...L.parameters,docs:{...L.parameters?.docs,source:{originalSource:'{\n  render: Template,\n  args: {\n    size: "l"\n  }\n}',...L.parameters?.docs?.source}}},XL.parameters={...XL.parameters,docs:{...XL.parameters?.docs,source:{originalSource:'{\n  render: Template,\n  args: {\n    size: "xl"\n  }\n}',...XL.parameters?.docs?.source}}},XXL.parameters={...XXL.parameters,docs:{...XXL.parameters?.docs,source:{originalSource:'{\n  render: Template,\n  args: {\n    size: "xxl"\n  }\n}',...XXL.parameters?.docs?.source}}}},"./src/button/index.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{$:()=>Button,Q:()=>HeadlessButton});var react=__webpack_require__("./node_modules/.pnpm/react@16.14.0/node_modules/react/index.js");function _extends(){return _extends=Object.assign?Object.assign.bind():function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var r in t)({}).hasOwnProperty.call(t,r)&&(n[r]=t[r])}return n},_extends.apply(null,arguments)}const defaultClassNames=["relative","inline-block","mt-[0.5px]","border-solid","border-3","active:before:w-full","active:before:h-full","active:before:absolute","active:before:inset-0","active:before:border-3","active:before:border-transparent","active:before:bg-gray-900","active:before:opacity-20","text-center","cursor-pointer","no-underline"],StylessButton=react.forwardRef(((_ref2,ref)=>{let{className,onClick,disabled,children,type="button",...rest}=_ref2;return react.createElement("button",_extends({className,onClick:event=>{disabled?event.preventDefault():onClick&&onClick(event)},"aria-disabled":disabled,ref,type},rest),children)})),Link=react.forwardRef(((_ref3,ref)=>{let{className,href,download,target,children,...rest}=_ref3;return react.createElement("a",_extends({className,download,target,ref,href},rest),children)})),HeadlessButton=react.forwardRef(((_ref4,ref)=>{let{onClick,className,children,disabled,href,download,target,...rest}=_ref4;return href&&!disabled?react.createElement(Link,_extends({className,href,download,target,ref,onClick},rest),children):react.createElement(StylessButton,_extends({className,onClick,disabled,ref},rest),children)})),Button=react.forwardRef(((_ref5,ref)=>{let{className,size="medium",disabled,variant="primary",block,...rest}=_ref5;const buttonStyle=[className,(0,react.useMemo)((()=>(_ref=>{let{size,variant,disabled,block}=_ref;const classNames=[...defaultClassNames];switch(block&&classNames.push("block","w-full"),variant){case"danger":classNames.push("border-foreground-danger","bg-background-danger","text-foreground-danger","hover:bg-foreground-danger","hover:text-background-danger","hover:border-foreground-danger","dark:hover:bg-background-danger","dark:hover:text-foreground-danger");break;case"info":classNames.push("border-foreground-info","bg-background-info","text-foreground-info","hover:bg-foreground-info","hover:text-background-info","hover:border-foreground-info","dark:hover:bg-background-info","dark:hover:text-foreground-info");break;default:classNames.push("bg-background-quaternary","text-foreground-secondary",...disabled?["active:before:hidden","border-gray-450","aria-disabled:cursor-not-allowed","aria-disabled:opacity-80"]:["border-foreground-secondary","hover:bg-foreground-primary","hover:text-background-primary","hover:border-foreground-secondary","dark:hover:bg-background-primary","dark:hover:text-foreground-primary"])}switch(size){case"large":classNames.push("px-4 py-2.5 text-lg");break;case"small":classNames.push("px-2.5 py-1 text-sm");break;default:classNames.push("px-3 py-1.5 text-md")}return classNames.join(" ")})({size,variant,disabled,block})),[size,variant,disabled,block])].join(" ");return react.createElement(HeadlessButton,_extends({className:buttonStyle,ref,disabled},rest))}));Button.displayName="Button",HeadlessButton.displayName="HeadlessButton",StylessButton.displayName="StylessButton",Link.displayName="Link";try{HeadlessButton.displayName="Button",HeadlessButton.__docgenInfo={description:"",displayName:"Button",props:{variant:{defaultValue:{value:"primary"},description:"",name:"variant",required:!1,type:{name:"enum",value:[{value:"undefined"},{value:'"primary"'},{value:'"danger"'},{value:'"info"'}]}},disabled:{defaultValue:null,description:"",name:"disabled",required:!1,type:{name:"boolean | undefined"}},size:{defaultValue:{value:"medium"},description:"",name:"size",required:!1,type:{name:"enum",value:[{value:"undefined"},{value:'"small"'},{value:'"medium"'},{value:'"large"'}]}},onClick:{defaultValue:null,description:"",name:"onClick",required:!1,type:{name:"MouseEventHandler<HTMLAnchorElement | HTMLButtonElement> | undefined"}},type:{defaultValue:{value:"button"},description:"",name:"type",required:!1,type:{name:"enum",value:[{value:"undefined"},{value:'"button"'},{value:'"submit"'}]}},block:{defaultValue:null,description:"",name:"block",required:!1,type:{name:"boolean | undefined"}},href:{defaultValue:null,description:"",name:"href",required:!1,type:{name:"string | undefined"}},download:{defaultValue:null,description:"",name:"download",required:!1,type:{name:"string | undefined"}},target:{defaultValue:null,description:"",name:"target",required:!1,type:{name:"HTMLAttributeAnchorTarget | undefined"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/button/button.tsx#Button"]={docgenInfo:Button.__docgenInfo,name:"Button",path:"src/button/button.tsx#Button"})}catch(__react_docgen_typescript_loader_error){}},"./src/spacer/spacer.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{h:()=>Spacer});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/.pnpm/react@16.14.0/node_modules/react/index.js");const sizes={xxs:"h-[5px]",xs:"h-[10px]",s:"h-[20px]",m:"h-[30px]",l:"h-[60px]",xl:"h-[90px]",xxl:"h-[180px]"},Spacer=_ref=>{let{size}=_ref;return react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",{className:sizes[size]})};try{Spacer.displayName="Spacer",Spacer.__docgenInfo={description:"",displayName:"Spacer",props:{size:{defaultValue:null,description:"Sizes:\n- xxs: 5px\n- xs: 10px\n- s: 20px\n- m: 30px\n- l: 60px\n- xl: 90px\n- xxl: 180px",name:"size",required:!0,type:{name:"enum",value:[{value:'"s"'},{value:'"xxs"'},{value:'"xs"'},{value:'"m"'},{value:'"l"'},{value:'"xl"'},{value:'"xxl"'}]}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/spacer/spacer.tsx#Spacer"]={docgenInfo:Spacer.__docgenInfo,name:"Spacer",path:"src/spacer/spacer.tsx#Spacer"})}catch(__react_docgen_typescript_loader_error){}}}]);