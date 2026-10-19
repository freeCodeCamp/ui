import{n as e}from"./rolldown-runtime-sJBDdmOt.js";import{a as t}from"./chunk-W22LQPXL-T2UsgLd9.js";import{c as n,l as r,s as i,u as a}from"./iframe-CDWkeNRG.js";function o(e){let t={a:`a`,code:`code`,h1:`h1`,h2:`h2`,li:`li`,p:`p`,pre:`pre`,ul:`ul`,...a(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(i,{title:`Introduction`}),`
`,(0,c.jsx)(t.h1,{id:`freecodecamps-ui-component-library`,children:`freeCodeCamp's UI Component Library`}),`
`,(0,c.jsx)(t.p,{children:`Welcome to freeCodeCamp's UI component library. This is a collection of reusable
components that can be used to build user interfaces for freeCodeCamp projects.`}),`
`,(0,c.jsx)(t.h2,{id:`installation`,children:`Installation`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsx)(t.li,{children:`Run the following command to install the library in your app:`}),`
`]}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-bash`,children:`pnpm install @freecodecamp/ui
`})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsx)(t.li,{children:`Import the library's base stylesheet in your app, then import your app CSS after so the library's defaults can be overridden:`}),`
`]}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-tsx`,children:`// app.tsx
import "@freecodecamp/ui/dist/base.css";
import "./my-app.css";
`})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[`Use the `,(0,c.jsx)(t.code,{children:`getThemingClass`}),` util to get a CSS class for theming, and add the class to the `,(0,c.jsx)(t.code,{children:`body`}),` element:`]}),`
`]}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-tsx`,children:`import { getThemingClass } from "@freecodecamp/ui";

const MyApp = () => {
	const cls = getThemingClass();

	return <body className={cls}></body>;
};
`})}),`
`,(0,c.jsx)(t.h2,{id:`where-to-get-help`,children:`Where to Get Help`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[`Report bugs or request features on `,(0,c.jsx)(t.a,{href:`https://github.com/freeCodeCamp/ui`,rel:`nofollow`,children:`our GitHub repository`}),`.`]}),`
`,(0,c.jsxs)(t.li,{children:[`Ask questions on `,(0,c.jsx)(t.a,{href:`https://forum.freecodecamp.org/`,rel:`nofollow`,children:`our forum`}),` or `,(0,c.jsx)(t.a,{href:`https://discord.gg/PRyKn3Vbay`,rel:`nofollow`,children:`our Discord server`}),`.`]}),`
`]})]})}function s(e={}){let{wrapper:t}={...a(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;function l(){return(l=e((()=>{c=t(),r(),n()})))()}l();export{s as default};