"use strict";(self.webpackChunk_freecodecamp_ui=self.webpackChunk_freecodecamp_ui||[]).push([[694],{"./src/help-block/help-block.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:()=>Default,__namedExportsOrder:()=>__namedExportsOrder,default:()=>help_block_stories});var react=__webpack_require__("./node_modules/.pnpm/react@16.14.0/node_modules/react/index.js"),form_group=__webpack_require__("./src/form-group/form-group.tsx");function _extends(){return _extends=Object.assign?Object.assign.bind():function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var r in t)({}).hasOwnProperty.call(t,r)&&(n[r]=t[r])}return n},_extends.apply(null,arguments)}const defaultClasses="block mt-1 mb-2",validationLabel={success:"text-background-info",warning:"text-background-warning",error:"text-background-danger"},HelpBlock=react.forwardRef(((_ref,ref)=>{let{className,children,...props}=_ref;const{validationState}=(0,react.useContext)(form_group.c),classes=[className,defaultClasses,validationState?validationLabel[validationState]:"text-foreground-quaternary"].join(" ");return react.createElement("span",_extends({ref,"data-testid":"help-block",className:classes},props),children)}));HelpBlock.displayName="HelpBlock";try{HelpBlock.displayName="HelpBlock",HelpBlock.__docgenInfo={description:"",displayName:"HelpBlock",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/help-block/help-block.tsx#HelpBlock"]={docgenInfo:HelpBlock.__docgenInfo,name:"HelpBlock",path:"src/help-block/help-block.tsx#HelpBlock"})}catch(__react_docgen_typescript_loader_error){}const Default={args:{children:"This is a HelpBlock"}},help_block_stories={title:"Components/HelpBlock",component:HelpBlock,parameters:{controls:{include:["className","children"]}}};Default.parameters={...Default.parameters,docs:{...Default.parameters?.docs,source:{originalSource:'{\n  args: {\n    children: "This is a HelpBlock"\n  }\n}',...Default.parameters?.docs?.source}}};const __namedExportsOrder=["Default"]},"./src/form-group/form-group.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{c:()=>FormContext,g:()=>FormGroup});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/.pnpm/react@16.14.0/node_modules/react/index.js");function _extends(){return _extends=Object.assign?Object.assign.bind():function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var r in t)({}).hasOwnProperty.call(t,r)&&(n[r]=t[r])}return n},_extends.apply(null,arguments)}const FormContext=(0,react__WEBPACK_IMPORTED_MODULE_0__.createContext)({}),defaultClasses="mb-3.5 relative",FormGroup=_ref=>{let{className,validationState,controlId,as,...props}=_ref;const context={controlId,validationState},Component=as||"div",classes=[defaultClasses,className].join(" ");return react__WEBPACK_IMPORTED_MODULE_0__.createElement(FormContext.Provider,{value:context},react__WEBPACK_IMPORTED_MODULE_0__.createElement(Component,_extends({className:classes,as},props,{validationstate:validationState})))};try{FormGroup.displayName="FormGroup",FormGroup.__docgenInfo={description:"",displayName:"FormGroup",props:{as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"typeof Component | undefined"}},controlId:{defaultValue:null,description:"",name:"controlId",required:!1,type:{name:"string | undefined"}},validationState:{defaultValue:null,description:"",name:"validationState",required:!1,type:{name:'"success" | "warning" | "error" | null | undefined'}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/form-group/form-group.tsx#FormGroup"]={docgenInfo:FormGroup.__docgenInfo,name:"FormGroup",path:"src/form-group/form-group.tsx#FormGroup"})}catch(__react_docgen_typescript_loader_error){}}}]);