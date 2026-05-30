import{a as e,n as t}from"./chunk-BneVvdWh.js";import{t as n}from"./react-XedgCGTy.js";import{n as r,t as i}from"./iframe-DzyGt2uA.js";import{r as a,t as o}from"./button-BslSpz5e.js";import{g as s,h as c,m as l,n as u,t as d}from"./free-solid-svg-icons-BSySrVD2.js";import{i as f,t as p}from"./headlessui.esm-CHEgjAkh.js";var m,h,g,_=t((()=>{p(),m=e(n()),o(),h=`block text-center no-underline border-none px-4 py-1.5 focus:bg-foreground-secondary focus:text-background-secondary hover:text-background-secondary hover:bg-foreground-secondary w-full`,g=({children:e,className:t,...n})=>m.createElement(f.Item,null,({active:r})=>{let i=[h,t,r?`text-background-secondary bg-foreground-secondary outline outline-3 outline-blue-500 outline-offset-[-3px]`:`text-foreground-secondary bg-background-primary`].join(` `);return m.createElement(a,{className:i,...n},e)}),g.__docgenInfo={description:``,methods:[],displayName:`MenuItem`}})),v,y,b,x,S,C,w,T,E=t((()=>{v=e(n()),p(),s(),l(),y=(0,v.createContext)({menuButtonRef:v.createRef(),block:!1}),b=`list-none bg-background-primary text-center border-1 border-solid border-foreground-primary focus:outline-transparent origin-top-right absolute min-w-max py-1 px-0 z-10`,x=b+` transform -translate-y-full top-0`,S=`cursor-pointer border-3 border-solid flex items-center justify-center text-center touch-manipulation bg-background-quaternary text-foreground-secondary px-3 py-1.5 mt-[0.5px] relative hover:bg-foreground-secondary hover:text-background-secondary border-foreground-secondary aria-expanded:bg-foreground-secondary aria-expanded:text-background-secondary`,C=v.forwardRef(({children:e,className:t},n)=>{let{dropup:r,menuButtonRef:i,block:a}=(0,v.useContext)(y),o=()=>{i.current?.focus()},s=[t,r?x:b,a?`w-full`:``].join(` `).trim();return v.createElement(f.Items,{className:s,ref:n,onClick:o},e)}),w=({children:e,className:t,...n})=>{let{dropup:r,menuButtonRef:i,block:a}=(0,v.useContext)(y),o=[t,S,a?`block w-full`:``].join(` `).trim();return v.createElement(f.Button,{ref:i,className:o,...n},e,v.createElement(c,{icon:r?u:d,className:`mx-2 h-3 fa-width-auto`,"aria-hidden":`true`}))},T=({children:e,id:t,dropup:n,block:r=!1})=>{let i={dropup:n,menuButtonRef:(0,v.useRef)(null),block:r};return v.createElement(y.Provider,{value:i},v.createElement(f,{className:`relative`,as:`div`,id:t},e))},T.Menu=C,T.Toggle=w,C.displayName=`MenuItems`,T.displayName=`Dropdown`,C.__docgenInfo={description:``,methods:[],displayName:`MenuItems`,props:{children:{required:!0,tsType:{name:`ReactReactNode`,raw:`React.ReactNode`},description:``},className:{required:!1,tsType:{name:`string`},description:``}}},T.__docgenInfo={description:``,methods:[{name:`Toggle`,docblock:null,modifiers:[`static`],params:[{name:`{
	children,
	className,
	...rest
}: DropDownButtonProps`,optional:!1,type:{name:`DropDownButtonProps`,alias:`DropDownButtonProps`}}],returns:{type:{name:`JSX.Element`}}}],displayName:`Dropdown`,props:{children:{required:!0,tsType:{name:`ReactReactNode`,raw:`React.ReactNode`},description:``},dropup:{required:!1,tsType:{name:`boolean`},description:``},id:{required:!1,tsType:{name:`string`},description:``},block:{required:!1,tsType:{name:`boolean`},description:``,defaultValue:{value:`false`,computed:!1}}}}})),D,O,k,A,j,M;t((()=>{D=e(n()),i(),_(),E(),O=r.meta({title:`Components/Dropdown`,component:T,tags:[`autodocs`]}),k=O.story({render:()=>D.createElement(T,null,D.createElement(T.Toggle,null,`Options`),D.createElement(T.Menu,null,D.createElement(g,{onClick:()=>{}},`Unlock Hidden Achievements`),D.createElement(g,{href:`#`,onClick:e=>e.preventDefault()},`Enable Zen Coding Mode`),D.createElement(g,{href:`#`,onClick:e=>e.preventDefault()},`Generate Motivational Quote`)))}),A=O.story({render:()=>D.createElement(`div`,{style:{height:`500px`,display:`flex`,flexDirection:`column`,justifyContent:`center`,alignItems:`center`}},D.createElement(T,{dropup:!0},D.createElement(T.Toggle,null,`Options`),D.createElement(T.Menu,null,D.createElement(g,{onClick:()=>{}},`Reveal Easter Egg`),D.createElement(g,{href:`#`,onClick:e=>e.preventDefault()},`Switch to Light Mode`),D.createElement(g,{href:`#`,onClick:e=>e.preventDefault()},`Open Changelog`))))}),j=O.story({render:()=>D.createElement(T,{block:!0},D.createElement(T.Toggle,null,`Full width Dropdown`),D.createElement(T.Menu,null,D.createElement(g,{onClick:()=>{}},`Start Pomodoro Timer`),D.createElement(g,{href:`#`,onClick:e=>e.preventDefault()},`Mute Notifications`),D.createElement(g,{href:`#`,onClick:e=>e.preventDefault()},`View Keyboard Shortcuts`)))}),k.input.parameters={...k.input.parameters,docs:{...k.input.parameters?.docs,source:{originalSource:`meta.story({
  render: () => <Dropdown>
            <Dropdown.Toggle>Options</Dropdown.Toggle>
            <Dropdown.Menu>
                <MenuItem onClick={() => {}}>Unlock Hidden Achievements</MenuItem>
                <MenuItem href="#" onClick={e => e.preventDefault()}>
                    Enable Zen Coding Mode
                </MenuItem>
                <MenuItem href="#" onClick={e => e.preventDefault()}>
                    Generate Motivational Quote
                </MenuItem>
            </Dropdown.Menu>
        </Dropdown>
})`,...k.input.parameters?.docs?.source}}},A.input.parameters={...A.input.parameters,docs:{...A.input.parameters?.docs,source:{originalSource:`meta.story({
  render: () => <div style={{
    height: "500px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center"
  }}>
            <Dropdown dropup>
                <Dropdown.Toggle>Options</Dropdown.Toggle>
                <Dropdown.Menu>
                    <MenuItem onClick={() => {}}>Reveal Easter Egg</MenuItem>
                    <MenuItem href="#" onClick={e => e.preventDefault()}>
                        Switch to Light Mode
                    </MenuItem>
                    <MenuItem href="#" onClick={e => e.preventDefault()}>
                        Open Changelog
                    </MenuItem>
                </Dropdown.Menu>
            </Dropdown>
        </div>
})`,...A.input.parameters?.docs?.source}}},j.input.parameters={...j.input.parameters,docs:{...j.input.parameters?.docs,source:{originalSource:`meta.story({
  render: () => <Dropdown block>
            <Dropdown.Toggle>Full width Dropdown</Dropdown.Toggle>
            <Dropdown.Menu>
                <MenuItem onClick={() => {}}>Start Pomodoro Timer</MenuItem>
                <MenuItem href="#" onClick={e => e.preventDefault()}>
                    Mute Notifications
                </MenuItem>
                <MenuItem href="#" onClick={e => e.preventDefault()}>
                    View Keyboard Shortcuts
                </MenuItem>
            </Dropdown.Menu>
        </Dropdown>
})`,...j.input.parameters?.docs?.source}}},M=[`Menus`,`DropUp`,`FullWidth`]}))();export{A as DropUp,j as FullWidth,k as Menus,M as __namedExportsOrder,O as default};