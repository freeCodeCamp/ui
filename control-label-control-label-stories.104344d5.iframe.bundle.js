"use strict";(self.webpackChunk_freecodecamp_ui=self.webpackChunk_freecodecamp_ui||[]).push([[94],{"./src/control-label/control-label.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:()=>Default,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});const story={title:"Components/ControlLabel",component:__webpack_require__("./src/control-label/index.ts").m,parameters:{controls:{include:["className"]}},argTypes:{className:{control:{type:"text"}},htmlFor:{control:{type:"text"}},srOnly:{options:["srOnly",""]}}},Default={args:{children:"Control Label"}},__WEBPACK_DEFAULT_EXPORT__=story;Default.parameters={...Default.parameters,docs:{...Default.parameters?.docs,source:{originalSource:'{\n  args: {\n    children: "Control Label"\n  }\n}',...Default.parameters?.docs?.source}}};const __namedExportsOrder=["Default"]},"./src/control-label/index.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{m:()=>ControlLabel});var react=__webpack_require__("./node_modules/.pnpm/react@16.14.0/node_modules/react/index.js"),form_group=__webpack_require__("./src/form-group/form-group.tsx");function _extends(){return _extends=Object.assign?Object.assign.bind():function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source)Object.prototype.hasOwnProperty.call(source,key)&&(target[key]=source[key])}return target},_extends.apply(this,arguments)}const validationLabel={success:"text-background-info",warning:"text-background-warning",error:"text-background-danger"},ControlLabel=_ref=>{let{className,htmlFor,srOnly,...props}=_ref;const{controlId,validationState}=(0,react.useContext)(form_group.c),defaultClasses=[validationState?validationLabel[validationState]:void 0,srOnly?"sr-only":void 0,className].join(" ");return react.createElement("label",_extends({className:defaultClasses,htmlFor:htmlFor||controlId},props))};try{ControlLabel.displayName="ControlLabel",ControlLabel.__docgenInfo={description:"",displayName:"ControlLabel",props:{htmlFor:{defaultValue:null,description:"",name:"htmlFor",required:!1,type:{name:"string | undefined"}},srOnly:{defaultValue:null,description:"",name:"srOnly",required:!1,type:{name:"boolean | undefined"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/control-label/control-label.tsx#ControlLabel"]={docgenInfo:ControlLabel.__docgenInfo,name:"ControlLabel",path:"src/control-label/control-label.tsx#ControlLabel"})}catch(__react_docgen_typescript_loader_error){}},"./src/form-group/form-group.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{c:()=>FormContext,g:()=>FormGroup});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/.pnpm/react@16.14.0/node_modules/react/index.js");function _extends(){return _extends=Object.assign?Object.assign.bind():function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source)Object.prototype.hasOwnProperty.call(source,key)&&(target[key]=source[key])}return target},_extends.apply(this,arguments)}const FormContext=(0,react__WEBPACK_IMPORTED_MODULE_0__.createContext)({}),defaultClasses="mb-3.5 relative",FormGroup=_ref=>{let{className,validationState,controlId,as,...props}=_ref;const context={controlId,validationState},Component=as||"div",classes=[defaultClasses,className].join(" ");return react__WEBPACK_IMPORTED_MODULE_0__.createElement(FormContext.Provider,{value:context},react__WEBPACK_IMPORTED_MODULE_0__.createElement(Component,_extends({className:classes,as},props,{validationstate:validationState})))};try{FormGroup.displayName="FormGroup",FormGroup.__docgenInfo={description:"",displayName:"FormGroup",props:{as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"typeof Component | undefined"}},controlId:{defaultValue:null,description:"",name:"controlId",required:!1,type:{name:"string | undefined"}},validationState:{defaultValue:null,description:"",name:"validationState",required:!1,type:{name:'"success" | "warning" | "error" | null | undefined'}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/form-group/form-group.tsx#FormGroup"]={docgenInfo:FormGroup.__docgenInfo,name:"FormGroup",path:"src/form-group/form-group.tsx#FormGroup"})}catch(__react_docgen_typescript_loader_error){}}}]);