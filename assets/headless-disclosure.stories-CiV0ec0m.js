import{a as e,n as t}from"./rolldown-runtime-sJBDdmOt.js";import{t as n}from"./react-pByjoP3I.js";import{n as r,r as i}from"./iframe-DGhDax1U.js";import{a,g as o,h as s,i as c,m as l}from"./free-solid-svg-icons-j0MmyGIF.js";import{E as u,S as d,T as f,_ as p,a as m,b as h,c as g,g as _,h as v,i as y,l as b,m as x,n as S,o as C,s as w,t as ee,v as te,x as ne}from"./keyboard-BNoCKUpm.js";import{n as re,t as ie}from"./use-resolve-button-type-CvG5fX7l.js";import{i as ae,n as oe,r as se,t as T}from"./open-closed-DEetVAVr.js";var E,D;function O(){return(O=t((()=>{E=e(n(),1),D=E.startTransition??function(e){e()}})))()}function k(e){let t=(0,j.useContext)(F);if(t===null){let t=Error(`<${e} /> is missing a parent <Disclosure /> component.`);throw Error.captureStackTrace&&Error.captureStackTrace(t,k),t}return t}function A(e){let t=(0,j.useContext)(I);if(t===null){let t=Error(`<${e} /> is missing a parent <Disclosure /> component.`);throw Error.captureStackTrace&&Error.captureStackTrace(t,A),t}return t}function ce(){return(0,j.useContext)(L)}function le(e,t){return h(t.type,P,e,t)}function ue(e,t){let{defaultOpen:n=!1,...r}=e,i=(0,j.useRef)(null),a=_(t,x(e=>{i.current=e},e.as===void 0||e.as===j.Fragment)),o=(0,j.useRef)(null),s=(0,j.useRef)(null),c=(0,j.useReducer)(le,{disclosureState:+!n,linkedPanel:!1,buttonRef:s,panelRef:o,buttonId:null,panelId:null}),[{disclosureState:l,buttonId:d},f]=c,p=u(e=>{f({type:1});let t=te(i);t&&d&&(e?e instanceof HTMLElement?e:e.current instanceof HTMLElement?e.current:t.getElementById(d):t.getElementById(d))?.focus()}),g=(0,j.useMemo)(()=>({close:p}),[p]),v=(0,j.useMemo)(()=>({open:l===0,close:p}),[l,p]),y={ref:a};return j.createElement(F.Provider,{value:c},j.createElement(I.Provider,{value:g},j.createElement(se,{value:h(l,{0:T.Open,1:T.Closed})},m({ourProps:y,theirProps:r,slot:v,defaultTag:R,name:`Disclosure`}))))}function de(e,t){let n=ne(),{id:r=`headlessui-disclosure-button-${n}`,...i}=e,[a,o]=k(`Disclosure.Button`),s=ce(),c=s!==null&&s===a.panelId,l=(0,j.useRef)(null),d=_(l,t,c?null:a.buttonRef),f=C();(0,j.useEffect)(()=>{if(!c)return o({type:2,buttonId:r}),()=>{o({type:2,buttonId:null})}},[r,o,c]);let p=u(e=>{var t;if(c){if(a.disclosureState===1)return;switch(e.key){case S.Space:case S.Enter:e.preventDefault(),e.stopPropagation(),o({type:0}),(t=a.buttonRef.current)==null||t.focus()}}else switch(e.key){case S.Space:case S.Enter:e.preventDefault(),e.stopPropagation(),o({type:0})}}),h=u(e=>{switch(e.key){case S.Space:e.preventDefault()}}),g=u(t=>{var n;y(t.currentTarget)||e.disabled||(c?(o({type:0}),(n=a.buttonRef.current)==null||n.focus()):o({type:0}))}),v=(0,j.useMemo)(()=>({open:a.disclosureState===0}),[a]),b=ie(e,l),x=c?{ref:d,type:b,onKeyDown:p,onClick:g}:{ref:d,id:r,type:b,"aria-expanded":a.disclosureState===0,"aria-controls":a.linkedPanel?a.panelId:void 0,onKeyDown:p,onKeyUp:h,onClick:g};return m({mergeRefs:f,ourProps:x,theirProps:i,slot:v,defaultTag:z,name:`Disclosure.Button`})}function fe(e,t){let n=ne(),{id:r=`headlessui-disclosure-panel-${n}`,...i}=e,[a,o]=k(`Disclosure.Panel`),{close:s}=A(`Disclosure.Panel`),c=C(),l=_(t,a.panelRef,e=>{D(()=>o({type:e?4:5}))});(0,j.useEffect)(()=>(o({type:3,panelId:r}),()=>{o({type:3,panelId:null})}),[r,o]);let u=ae(),d=u===null?a.disclosureState===0:(u&T.Open)===T.Open,f=(0,j.useMemo)(()=>({open:a.disclosureState===0,close:s}),[a,s]),p={ref:l,id:r};return j.createElement(L.Provider,{value:a.panelId},m({mergeRefs:c,ourProps:p,theirProps:i,slot:f,defaultTag:B,features:V,visible:d,name:`Disclosure.Panel`}))}var j,M,N,P,F,I,L,R,z,B,V,H,U,W,G;function K(){return(K=t((()=>{j=e(n(),1),f(),d(),re(),v(),oe(),p(),b(),O(),ee(),M=(e=>(e[e.Open=0]=`Open`,e[e.Closed=1]=`Closed`,e))(M||{}),N=(e=>(e[e.ToggleDisclosure=0]=`ToggleDisclosure`,e[e.CloseDisclosure=1]=`CloseDisclosure`,e[e.SetButtonId=2]=`SetButtonId`,e[e.SetPanelId=3]=`SetPanelId`,e[e.LinkPanel=4]=`LinkPanel`,e[e.UnlinkPanel=5]=`UnlinkPanel`,e))(N||{}),P={0:e=>({...e,disclosureState:h(e.disclosureState,{0:1,1:0})}),1:e=>e.disclosureState===1?e:{...e,disclosureState:1},4(e){return e.linkedPanel===!0?e:{...e,linkedPanel:!0}},5(e){return e.linkedPanel===!1?e:{...e,linkedPanel:!1}},2(e,t){return e.buttonId===t.buttonId?e:{...e,buttonId:t.buttonId}},3(e,t){return e.panelId===t.panelId?e:{...e,panelId:t.panelId}}},F=(0,j.createContext)(null),F.displayName=`DisclosureContext`,I=(0,j.createContext)(null),I.displayName=`DisclosureAPIContext`,L=(0,j.createContext)(null),L.displayName=`DisclosurePanelContext`,R=j.Fragment,z=`button`,B=`div`,V=w.RenderStrategy|w.Static,H=g(ue),U=g(de),W=g(fe),G=Object.assign(H,{Button:U,Panel:W})})))()}var q,J,Y,X,Z,Q,pe;function $(){return($=t((()=>{q=e(n()),r(),o(),l(),K(),J=i.meta({title:`Components/HeadlessDisclosure`,component:G,tags:[`autodocs`]}),Y=e=>q.createElement(G,e,({open:e})=>q.createElement(q.Fragment,null,q.createElement(G.Button,{className:`text-foreground-primary`},e?`Collapse`:`Expand`,q.createElement(s,{icon:e?a:c,className:`ml-2`,"aria-hidden":`true`})),q.createElement(G.Panel,{className:`text-foreground-primary`},q.createElement(`p`,null,`This is the disclosure panel content.`)))),X=e=>`<HeadlessDisclosure${e?` defaultOpen`:``}>
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
</HeadlessDisclosure>`,Z=J.story({args:{defaultOpen:!1},render:e=>Y(e),parameters:{docs:{source:{code:X(!1),language:`tsx`}}}}),Q=J.story({args:{defaultOpen:!0},render:e=>Y(e),parameters:{docs:{source:{code:X(!0),language:`tsx`}}}}),pe=[`Default`,`DefaultOpen`],Z.input.parameters={...Z.input.parameters,docs:{...Z.input.parameters?.docs,source:{originalSource:`meta.story({
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
})`,...Z.input.parameters?.docs?.source}}},Q.input.parameters={...Q.input.parameters,docs:{...Q.input.parameters?.docs,source:{originalSource:`meta.story({
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
})`,...Q.input.parameters?.docs?.source}}}})))()}$();export{Z as Default,Q as DefaultOpen,pe as __namedExportsOrder,J as default};