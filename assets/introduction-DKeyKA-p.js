import{n as e}from"./chunk-BneVvdWh.js";import{a as t,o as n}from"./blocks-BU3tDAGJ.js";import{a as r}from"./chunk-RD3KTAHR-BgZVswLK.js";import{r as i,t as a}from"./react-I7edUPeI.js";var o=e((()=>{a()}));function s(e){let n={a:`a`,code:`code`,h1:`h1`,h2:`h2`,li:`li`,p:`p`,pre:`pre`,ul:`ul`,...i(),...e.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(t,{title:`Introduction`}),`
`,(0,l.jsx)(n.h1,{id:`freecodecamps-ui-component-library`,children:`freeCodeCamp's UI Component Library`}),`
`,(0,l.jsx)(n.p,{children:`Welcome to freeCodeCamp's UI component library. This is a collection of reusable
components that can be used to build user interfaces for freeCodeCamp projects.`}),`
`,(0,l.jsx)(n.h2,{id:`installation`,children:`Installation`}),`
`,(0,l.jsxs)(n.ul,{children:[`
`,(0,l.jsx)(n.li,{children:`Run the following command to install the library in your app:`}),`
`]}),`
`,(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:`language-bash`,children:`pnpm install @freecodecamp/ui
`})}),`
`,(0,l.jsxs)(n.ul,{children:[`
`,(0,l.jsx)(n.li,{children:`Import the library's base stylesheet in your app, then import your app CSS after so the library's defaults can be overridden:`}),`
`]}),`
`,(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:`language-tsx`,children:`// app.tsx
import "@freecodecamp/ui/dist/base.css";
import "./my-app.css";
`})}),`
`,(0,l.jsxs)(n.ul,{children:[`
`,(0,l.jsxs)(n.li,{children:[`Use the `,(0,l.jsx)(n.code,{children:`getThemingClass`}),` util to get a CSS class for theming, and add the class to the `,(0,l.jsx)(n.code,{children:`body`}),` element:`]}),`
`]}),`
`,(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:`language-tsx`,children:`import { getThemingClass } from "@freecodecamp/ui";

const MyApp = () => {
	const cls = getThemingClass();

	return <body className={cls}></body>;
};
`})}),`
`,(0,l.jsx)(n.h2,{id:`where-to-get-help`,children:`Where to Get Help`}),`
`,(0,l.jsxs)(n.ul,{children:[`
`,(0,l.jsxs)(n.li,{children:[`Report bugs or request features on `,(0,l.jsx)(n.a,{href:`https://github.com/freeCodeCamp/ui`,rel:`nofollow`,children:`our GitHub repository`}),`.`]}),`
`,(0,l.jsxs)(n.li,{children:[`Ask questions on `,(0,l.jsx)(n.a,{href:`https://forum.freecodecamp.org/`,rel:`nofollow`,children:`our forum`}),` or `,(0,l.jsx)(n.a,{href:`https://discord.gg/PRyKn3Vbay`,rel:`nofollow`,children:`our Discord server`}),`.`]}),`
`]})]})}function c(e={}){let{wrapper:t}={...i(),...e.components};return t?(0,l.jsx)(t,{...e,children:(0,l.jsx)(s,{...e})}):s(e)}var l;e((()=>{l=r(),o(),n()}))();export{c as default};