import{a as Y,b as oe,g as A}from"./chunk-QTSOLNZM.mjs";import{a as ie}from"./chunk-6FKPVJMD.mjs";import{$ as _,G as r,H as q,N as I,S as U,V as ue,Z as b,_ as P,aa as D,c as H,ca as R,da as he,ea as ge,fa as T,g as C,k as E,l as ne,m as V,n as pe,p as F,pa as ye,q as x,r as ae,ra as M,sa as g,t as h,va as N,w as S,wa as X,x as k}from"./chunk-AKGKVPUZ.mjs";import{c as L}from"./chunk-ELYU6EKT.mjs";function B({type:e,url:t,html:a,style:n={}}){return e==="url"&&t?r(Ve,{url:t,style:n}):e==="html"&&a?r(Ie,{html:a,style:n}):r(Ce,{style:n})}ue(B,{type:{type:U.Enum,defaultValue:"url",displaySegmentedControl:!0,options:["url","html"],optionTitles:["URL","HTML"]},url:{title:"URL",type:U.String,description:"Some websites don\u2019t support embedding.",hidden(e){return e.type!=="url"}},html:{title:"HTML",type:U.String,displayTextArea:!0,hidden(e){return e.type!=="html"}}});function Ce({style:e}){return r("div",{style:{minHeight:ve(e),...oe,overflow:"hidden",...e},children:r("div",{style:se,children:"To embed a website or widget, add it to the properties\xA0panel."})})}function Ve({url:e,style:t}){let a=!t.height;/[a-z]+:\/\//.test(e)||(e="https://"+e);let n=A(),[s,m]=ae(n?void 0:!1);if(ne(()=>{if(!n)return;let i=!0;m(void 0);async function p(){let c=await fetch("https://api.framer.com/functions/check-iframe-url?url="+encodeURIComponent(e));if(c.status==200){let{isBlocked:l}=await c.json();i&&m(l)}else{let l=await c.text();console.error(l);let u=new Error("This site can\u2019t be reached.");m(u)}}return p().catch(c=>{console.error(c),m(c)}),()=>{i=!1}},[e]),n&&a)return r(J,{message:"URL embeds do not support auto height.",style:t});if(!e.startsWith("https://"))return r(J,{message:"Unsupported protocol.",style:t});if(s===void 0)return r(Ne,{});if(s instanceof Error)return r(J,{message:s.message,style:t});if(s===!0){let i=`Can\u2019t embed ${e} due to its content security policy.`;return r(J,{message:i,style:t})}return r("iframe",{src:e,style:{...xe,...t},loading:"lazy",fetchPriority:n?"low":"auto",referrerPolicy:"no-referrer",sandbox:ke(n)})}var xe={width:"100%",height:"100%",border:"none"};function ke(e){let t=["allow-same-origin","allow-scripts"];return e||t.push("allow-downloads","allow-forms","allow-modals","allow-orientation-lock","allow-pointer-lock","allow-popups","allow-popups-to-escape-sandbox","allow-presentation","allow-storage-access-by-user-activation","allow-top-navigation-by-user-activation"),t.join(" ")}function Ie({html:e,style:t}){let a=x(),n=A(),[s,m]=ae(0),i=!t.height,p=e.includes("<\/script>");if(ne(()=>{var c;let l=(c=a.current)===null||c===void 0?void 0:c.contentWindow;function u(y){if(y.source!==l)return;let o=y.data;if(typeof o!="object"||o===null)return;let O=o.embedHeight;typeof O=="number"&&m(O)}return L.addEventListener("message",u),l?.postMessage("getEmbedHeight","*"),()=>{L.removeEventListener("message",u)}},[]),p){let c=`<html>
    <head>
        <style>body { margin: 0; }</style>
    </head>
    <body>
        ${e}
        <script type="module">
            let height = 0

            function sendEmbedHeight() {
                window.parent.postMessage({
                    embedHeight: height
                }, "*")
            }

            const observer = new ResizeObserver((entries) => {
                if (entries.length !== 1) return
                const entry = entries[0]
                if (entry.target !== document.body) return

                height = entry.contentRect.height
                sendEmbedHeight()
            })

            observer.observe(document.body)

            window.addEventListener("message", (event) => {
                if (event.source !== window.parent) return
                if (event.data !== "getEmbedHeight") return
                sendEmbedHeight()
            })
        <\/script>
    <body>
</html>`,l={...xe,...t};return i&&(l.height=s+"px"),r("iframe",{ref:a,style:l,srcDoc:c})}return r("div",{style:{...Re,...t},dangerouslySetInnerHTML:{__html:e}})}var Re={width:"100%",height:"100%",display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center"};function Ne(){return r("div",{className:"framerInternalUI-componentPlaceholder",style:{...Y,overflow:"hidden"},children:r("div",{style:se,children:"Loading\u2026"})})}function J({message:e,style:t}){return r("div",{className:"framerInternalUI-errorPlaceholder",style:{minHeight:ve(t),...Y,overflow:"hidden",...t},children:r("div",{style:se,children:e})})}var se={textAlign:"center",minWidth:140};function ve(e){if(!e.height)return 200}var Se={GQtdvZdLq:{hover:!0}},Le=["GQtdvZdLq"],He="framer-R2oOn",Ee={GQtdvZdLq:"framer-v-6zwuxd"};function Fe(e,...t){let a={};return t?.forEach(n=>n&&Object.assign(a,e[n])),a}var Pe={damping:60,delay:0,mass:1,stiffness:500,type:"spring"},Te=({value:e,children:t})=>{let a=E(h),n=e??a.transition,s=F(()=>({...a,transition:n}),[JSON.stringify(n)]);return r(h.Provider,{value:s,children:t})},Me=S(H),Oe=({height:e,id:t,width:a,...n})=>({...n}),je=(e,t)=>t.join("-")+e.layoutDependency,_e=C(function(e,t){let{activeLocale:a,setLocale:n}=I(),{style:s,className:m,layoutId:i,variant:p,...c}=Oe(e),{baseVariant:l,classNames:u,gestureVariant:y,setGestureState:o,setVariant:O,variants:d}=M({cycleOrder:Le,defaultVariant:"GQtdvZdLq",enabledGestures:Se,variant:p,variantClassNames:Ee}),f=je(e,d),v=x(null),w=V(),j=[],Z=P();return r(k,{id:i??w,children:r(Me,{animate:d,initial:!1,children:r(Te,{value:Pe,children:r(T,{href:"https://dexscreener.com/solana/tokenscreen",children:r(g,{...c,as:"a",background:{alt:"",fit:"fit",pixelHeight:226,pixelWidth:379,positionX:"center",positionY:"center",src:"https://framerusercontent.com/images/cH787n9b4mhiZu6yrb43GDFC1VE.png"},className:`${b(He,...j,"framer-6zwuxd",m,u)} framer-14ebmsj`,"data-framer-name":"Variant 1",layoutDependency:f,layoutId:"GQtdvZdLq",onHoverEnd:()=>o({isHovered:!1}),onHoverStart:()=>o({isHovered:!0}),onTap:()=>o({isPressed:!1}),onTapCancel:()=>o({isPressed:!1}),onTapStart:()=>o({isPressed:!0}),ref:t??v,style:{...s},...Fe({"GQtdvZdLq-hover":{"data-framer-name":void 0,background:{alt:"",fit:"fit",pixelHeight:255,pixelWidth:394,positionX:"center",positionY:"center",src:"https://framerusercontent.com/images/v5BpVNPvWMGR3bRM7yz2YrG0InY.png"}}},l,y)})})})})})}),De=["@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }",".framer-R2oOn.framer-14ebmsj, .framer-R2oOn .framer-14ebmsj { display: block; }",".framer-R2oOn.framer-6zwuxd { cursor: pointer; height: 93px; position: relative; text-decoration: none; width: 175px; }",".framer-R2oOn.framer-v-6zwuxd.hover.framer-6zwuxd { aspect-ratio: 1.881720430107527 / 1; height: var(--framer-aspect-ratio-supported, 110px); width: 207px; }"],Q=R(_e,De,"framer-R2oOn"),ce=Q;Q.displayName="dex-comp";Q.defaultProps={height:93,width:175};N(Q,[{explicitInter:!0,fonts:[]}],{supportsExplicitInterCodegen:!0});var Xe={TR6TqosxQ:{hover:!0}},ze=["TR6TqosxQ"],We="framer-sEdkW",qe={TR6TqosxQ:"framer-v-1sp621k"};function Be(e,...t){let a={};return t?.forEach(n=>n&&Object.assign(a,e[n])),a}var Ge={damping:60,delay:0,mass:1,stiffness:500,type:"spring"},Ze=({value:e,children:t})=>{let a=E(h),n=e??a.transition,s=F(()=>({...a,transition:n}),[JSON.stringify(n)]);return r(h.Provider,{value:s,children:t})},Ue=S(H),Ye=({height:e,id:t,width:a,...n})=>({...n}),Ae=(e,t)=>t.join("-")+e.layoutDependency,Je=C(function(e,t){let{activeLocale:a,setLocale:n}=I(),{style:s,className:m,layoutId:i,variant:p,...c}=Ye(e),{baseVariant:l,classNames:u,gestureVariant:y,setGestureState:o,setVariant:O,variants:d}=M({cycleOrder:ze,defaultVariant:"TR6TqosxQ",enabledGestures:Xe,variant:p,variantClassNames:qe}),f=Ae(e,d),v=x(null),w=V(),j=[],Z=P();return r(k,{id:i??w,children:r(Ue,{animate:d,initial:!1,children:r(Ze,{value:Ge,children:r(T,{href:"https://www.pump.fun/tobeupdated",children:r(g,{...c,as:"a",background:{alt:"",fit:"fit",pixelHeight:223,pixelWidth:388,positionX:"center",positionY:"center",src:"https://framerusercontent.com/images/IDsozSCEBepaX85Qygo6TeSuV20.png"},className:`${b(We,...j,"framer-1sp621k",m,u)} framer-19nfjox`,"data-framer-name":"Variant 1",layoutDependency:f,layoutId:"TR6TqosxQ",onHoverEnd:()=>o({isHovered:!1}),onHoverStart:()=>o({isHovered:!0}),onTap:()=>o({isPressed:!1}),onTapCancel:()=>o({isPressed:!1}),onTapStart:()=>o({isPressed:!0}),ref:t??v,style:{...s},...Be({"TR6TqosxQ-hover":{"data-framer-name":void 0,background:{alt:"",fit:"fit",pixelHeight:236,pixelWidth:403,positionX:"center",positionY:"center",src:"https://framerusercontent.com/images/rcZ4nPvcyrStwLxgcBOOK1K5Uk.png"}}},l,y)})})})})})}),Qe=["@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }",".framer-sEdkW.framer-19nfjox, .framer-sEdkW .framer-19nfjox { display: block; }",".framer-sEdkW.framer-1sp621k { cursor: pointer; height: 93px; position: relative; text-decoration: none; width: 175px; }",".framer-sEdkW.framer-v-1sp621k.hover.framer-1sp621k { aspect-ratio: 1.881720430107527 / 1; height: var(--framer-aspect-ratio-supported, 110px); width: 207px; }"],K=R(Je,Qe,"framer-sEdkW"),le=K;K.displayName="pump-comp";K.defaultProps={height:93,width:175};N(K,[{explicitInter:!0,fonts:[]}],{supportsExplicitInterCodegen:!0});var Ke={ZvhZ5tvU9:{hover:!0}},$e=["ZvhZ5tvU9"],et="framer-XHR7V",tt={ZvhZ5tvU9:"framer-v-17ostvo"};function we(e,...t){let a={};return t?.forEach(n=>n&&Object.assign(a,e[n])),a}var rt={duration:0,type:"tween"},nt=({value:e,children:t})=>{let a=E(h),n=e??a.transition,s=F(()=>({...a,transition:n}),[JSON.stringify(n)]);return r(h.Provider,{value:s,children:t})},at=S(H),ot=({height:e,id:t,width:a,...n})=>({...n}),it=(e,t)=>t.join("-")+e.layoutDependency,st=C(function(e,t){let{activeLocale:a,setLocale:n}=I(),{style:s,className:m,layoutId:i,variant:p,...c}=ot(e),{baseVariant:l,classNames:u,gestureVariant:y,setGestureState:o,setVariant:O,variants:d}=M({cycleOrder:$e,defaultVariant:"ZvhZ5tvU9",enabledGestures:Ke,variant:p,variantClassNames:tt}),f=it(e,d),v=x(null),w=V(),j=[],Z=P();return r(k,{id:i??w,children:r(at,{animate:d,initial:!1,children:r(nt,{value:rt,children:r(T,{href:{webPageId:"augiA20Il"},openInNewTab:!1,children:r(S.a,{...c,className:`${b(et,...j,"framer-17ostvo",m,u)} framer-6y62rw`,"data-framer-name":"Variant 1",layoutDependency:f,layoutId:"ZvhZ5tvU9",onHoverEnd:()=>o({isHovered:!1}),onHoverStart:()=>o({isHovered:!0}),onTap:()=>o({isPressed:!1}),onTapCancel:()=>o({isPressed:!1}),onTapStart:()=>o({isPressed:!0}),ref:t??v,style:{backdropFilter:"blur(0px)",WebkitBackdropFilter:"blur(0px)",...s},...we({"ZvhZ5tvU9-hover":{"data-framer-name":void 0}},l,y),children:r(g,{background:{alt:"",fit:"fit",pixelHeight:180,pixelWidth:190,positionX:"center",positionY:"center",src:"https://framerusercontent.com/images/2uTIz9KmE429ZMlAT5BRLRqwhs.png"},className:"framer-1chdxte",layoutDependency:f,layoutId:"jx0oE27S9",...we({"ZvhZ5tvU9-hover":{background:{alt:"",fit:"fit",pixelHeight:180,pixelWidth:190,positionX:"center",positionY:"center",src:"https://framerusercontent.com/images/Ku7BL503wKpyUNIDMly9FUbxgg.png"}}},l,y)})})})})})})}),ct=["@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }",".framer-XHR7V.framer-6y62rw, .framer-XHR7V .framer-6y62rw { display: block; }",".framer-XHR7V.framer-17ostvo { align-content: center; align-items: center; cursor: pointer; display: flex; flex-direction: row; flex-wrap: nowrap; gap: 0px; height: 60px; justify-content: center; overflow: hidden; padding: 0px; position: relative; text-decoration: none; width: 60px; }",".framer-XHR7V .framer-1chdxte { flex: 1 0 0px; height: 100%; position: relative; width: 1px; }","@supports (background: -webkit-named-image(i)) and (not (font-palette:dark)) { .framer-XHR7V.framer-17ostvo { gap: 0px; } .framer-XHR7V.framer-17ostvo > * { margin: 0px; margin-left: calc(0px / 2); margin-right: calc(0px / 2); } .framer-XHR7V.framer-17ostvo > :first-child { margin-left: 0px; } .framer-XHR7V.framer-17ostvo > :last-child { margin-right: 0px; } }"],$=R(st,ct,"framer-XHR7V"),me=$;$.displayName="Back button";$.defaultProps={height:60,width:60};N($,[{explicitInter:!0,fonts:[]}],{supportsExplicitInterCodegen:!0});var lt={dL4hYhdv3:{hover:!0}},mt=["dL4hYhdv3"],dt="framer-pFxEH",ft={dL4hYhdv3:"framer-v-u51w3j"};function pt(e,...t){let a={};return t?.forEach(n=>n&&Object.assign(a,e[n])),a}var ut={damping:60,delay:0,mass:1,stiffness:500,type:"spring"},ht=({value:e,children:t})=>{let a=E(h),n=e??a.transition,s=F(()=>({...a,transition:n}),[JSON.stringify(n)]);return r(h.Provider,{value:s,children:t})},gt=S(H),yt=({height:e,id:t,width:a,...n})=>({...n}),xt=(e,t)=>t.join("-")+e.layoutDependency,vt=C(function(e,t){let{activeLocale:a,setLocale:n}=I(),{style:s,className:m,layoutId:i,variant:p,...c}=yt(e),{baseVariant:l,classNames:u,gestureVariant:y,setGestureState:o,setVariant:O,variants:d}=M({cycleOrder:mt,defaultVariant:"dL4hYhdv3",enabledGestures:lt,variant:p,variantClassNames:ft}),f=xt(e,d),v=x(null),w=V(),j=[],Z=P();return r(k,{id:i??w,children:r(gt,{animate:d,initial:!1,children:r(ht,{value:ut,children:r(T,{href:"https://x.com/MemegameSolana",children:r(g,{...c,as:"a",background:{alt:"",fit:"fit",pixelHeight:277,pixelWidth:428,positionX:"center",positionY:"center",src:"https://framerusercontent.com/images/jo3D6yTRURQeStCp5wRsj21zu4.png"},className:`${b(dt,...j,"framer-u51w3j",m,u)} framer-1wm33pp`,"data-framer-name":"Variant 1",layoutDependency:f,layoutId:"dL4hYhdv3",onHoverEnd:()=>o({isHovered:!1}),onHoverStart:()=>o({isHovered:!0}),onTap:()=>o({isPressed:!1}),onTapCancel:()=>o({isPressed:!1}),onTapStart:()=>o({isPressed:!0}),ref:t??v,style:{...s},...pt({"dL4hYhdv3-hover":{"data-framer-name":void 0,background:{alt:"",fit:"fit",pixelHeight:301,pixelWidth:452,positionX:"center",positionY:"center",src:"https://framerusercontent.com/images/JGElCebpL0VovYTVjmYhLg1cw.png"}}},l,y)})})})})})}),wt=["@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }",".framer-pFxEH.framer-1wm33pp, .framer-pFxEH .framer-1wm33pp { display: block; }",".framer-pFxEH.framer-u51w3j { cursor: pointer; height: 93px; position: relative; text-decoration: none; width: 175px; }",".framer-pFxEH.framer-v-u51w3j.hover.framer-u51w3j { aspect-ratio: 1.881720430107527 / 1; height: var(--framer-aspect-ratio-supported, 125px); width: 235px; }"],ee=R(vt,wt,"framer-pFxEH"),de=ee;ee.displayName="x-comp";ee.defaultProps={height:93,width:175};N(ee,[{explicitInter:!0,fonts:[]}],{supportsExplicitInterCodegen:!0});var bt={wOhA5nlve:{hover:!0}},Ct=["wOhA5nlve"],Vt="framer-nffGL",kt={wOhA5nlve:"framer-v-9uxm0h"};function It(e,...t){let a={};return t?.forEach(n=>n&&Object.assign(a,e[n])),a}var Rt={damping:60,delay:0,mass:1,stiffness:500,type:"spring"},Nt=({value:e,children:t})=>{let a=E(h),n=e??a.transition,s=F(()=>({...a,transition:n}),[JSON.stringify(n)]);return r(h.Provider,{value:s,children:t})},St=S(H),Lt=({height:e,id:t,width:a,...n})=>({...n}),Ht=(e,t)=>t.join("-")+e.layoutDependency,Et=C(function(e,t){let{activeLocale:a,setLocale:n}=I(),{style:s,className:m,layoutId:i,variant:p,...c}=Lt(e),{baseVariant:l,classNames:u,gestureVariant:y,setGestureState:o,setVariant:O,variants:d}=M({cycleOrder:Ct,defaultVariant:"wOhA5nlve",enabledGestures:bt,variant:p,variantClassNames:kt}),f=Ht(e,d),v=x(null),w=V(),j=[],Z=P();return r(k,{id:i??w,children:r(St,{animate:d,initial:!1,children:r(Nt,{value:Rt,children:r(T,{href:"https://t.me/newtelegram",children:r(g,{...c,as:"a",background:{alt:"",fit:"fit",pixelHeight:234,pixelWidth:403,positionX:"center",positionY:"center",src:"https://framerusercontent.com/images/hohrZ81FDuFTZ6Kqv23MkhAegk.png"},className:`${b(Vt,...j,"framer-9uxm0h",m,u)} framer-vemvxi`,"data-framer-name":"Variant 1",layoutDependency:f,layoutId:"wOhA5nlve",onHoverEnd:()=>o({isHovered:!1}),onHoverStart:()=>o({isHovered:!0}),onTap:()=>o({isPressed:!1}),onTapCancel:()=>o({isPressed:!1}),onTapStart:()=>o({isPressed:!0}),ref:t??v,style:{...s},...It({"wOhA5nlve-hover":{"data-framer-name":void 0,background:{alt:"",fit:"fit",pixelHeight:249,pixelWidth:423,positionX:"center",positionY:"center",src:"https://framerusercontent.com/images/QDYmSZlLnOOrp8Qbdk6kUFLlVs.png"}}},l,y)})})})})})}),Ft=["@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }",".framer-nffGL.framer-vemvxi, .framer-nffGL .framer-vemvxi { display: block; }",".framer-nffGL.framer-9uxm0h { cursor: pointer; height: 93px; position: relative; text-decoration: none; width: 175px; }",".framer-nffGL.framer-v-9uxm0h.hover.framer-9uxm0h { aspect-ratio: 1.881720430107527 / 1; height: var(--framer-aspect-ratio-supported, 110px); width: 207px; }"],te=R(Et,Ft,"framer-nffGL"),fe=te;te.displayName="telegram-comp";te.defaultProps={height:93,width:175};N(te,[{explicitInter:!0,fonts:[]}],{supportsExplicitInterCodegen:!0});var Pt=X(B),Tt=X(me),Mt=X(de),Ot=X(le),jt=X(fe),_t=X(ce);var Dt={};var be="framer-7rVyk",Xt={z1BF2WKXM:"framer-v-epng6d"},In=ie(),zt=({height:e,id:t,width:a,...n})=>({...n}),Wt=C(function(e,t){let{activeLocale:a,setLocale:n}=I(),{style:s,className:m,layoutId:i,variant:p,...c}=zt(e);pe(()=>{let f=ie(void 0,a);if(document.title=f.title||"",f.viewport){var v;(v=document.querySelector('meta[name="viewport"]'))===null||v===void 0||v.setAttribute("content",f.viewport)}if(f.bodyClassName)return Array.from(document.body.classList).filter(w=>w.startsWith("framer-body-")).map(w=>document.body.classList.remove(w)),document.body.classList.add(`${f.bodyClassName}-framer-7rVyk`),()=>{document.body.classList.remove(`${f.bodyClassName}-framer-7rVyk`)}},[void 0,a]);let[l,u]=ye(p,Dt,!1),y=void 0,o=x(null),O=V(),d=[];return he({}),r(ge.Provider,{value:{primaryVariantId:"z1BF2WKXM",variantClassNames:Xt},children:q(k,{id:i??O,children:[r(g,{...c,background:{alt:"",fit:"fill",pixelHeight:2160,pixelWidth:3840,sizes:"100vw",src:"https://framerusercontent.com/images/kzXJ6igedBa2v1pXF4VsJWx5Bj4.png",srcSet:"https://framerusercontent.com/images/kzXJ6igedBa2v1pXF4VsJWx5Bj4.png?scale-down-to=512 512w,https://framerusercontent.com/images/kzXJ6igedBa2v1pXF4VsJWx5Bj4.png?scale-down-to=1024 1024w,https://framerusercontent.com/images/kzXJ6igedBa2v1pXF4VsJWx5Bj4.png?scale-down-to=2048 2048w,https://framerusercontent.com/images/kzXJ6igedBa2v1pXF4VsJWx5Bj4.png 3840w"},className:b(be,...d,"framer-epng6d",m),ref:t??o,style:{...s},children:q(g,{background:{alt:"",fit:"fit",pixelHeight:2160,pixelWidth:3840,positionX:"center",positionY:"center",sizes:"100vw",src:"https://framerusercontent.com/images/i9kbNJqXCeNps5VXqyOSvU0oMUo.png",srcSet:"https://framerusercontent.com/images/i9kbNJqXCeNps5VXqyOSvU0oMUo.png?scale-down-to=512 512w,https://framerusercontent.com/images/i9kbNJqXCeNps5VXqyOSvU0oMUo.png?scale-down-to=1024 1024w,https://framerusercontent.com/images/i9kbNJqXCeNps5VXqyOSvU0oMUo.png?scale-down-to=2048 2048w,https://framerusercontent.com/images/i9kbNJqXCeNps5VXqyOSvU0oMUo.png 3840w"},className:"framer-1bn3f0l",children:[r(_,{children:r(D,{className:"framer-1tf6juc-container",children:r(B,{height:"100%",html:"",id:"vlXxOazqx",layoutId:"vlXxOazqx",style:{height:"100%",width:"100%"},type:"url",url:"https://memegame-git-main-laras-projects-66dab3aa.vercel.app/",width:"100%"})})}),q("div",{className:"framer-y72hln",children:[r("div",{className:"framer-1iui7hl",children:r(_,{width:"80px",children:r(D,{className:"framer-1dpya5v-container",children:r(me,{height:"100%",id:"gX6htXL0v",layoutId:"gX6htXL0v",style:{height:"100%",width:"100%"},width:"100%"})})})}),r(g,{background:{alt:"",fit:"fit",pixelHeight:1156,pixelWidth:1207,positionX:"center",positionY:"center",sizes:"26.4vw",src:"https://framerusercontent.com/images/bbhtYjwsnItxb51ZPwZRE2TBBrM.png",srcSet:"https://framerusercontent.com/images/bbhtYjwsnItxb51ZPwZRE2TBBrM.png?scale-down-to=512 512w,https://framerusercontent.com/images/bbhtYjwsnItxb51ZPwZRE2TBBrM.png?scale-down-to=1024 1024w,https://framerusercontent.com/images/bbhtYjwsnItxb51ZPwZRE2TBBrM.png 1207w"},className:"framer-18i72qn"}),q("div",{className:"framer-zxfy08",children:[r(_,{width:"max((28.05vw - 90px) / 4, 1px)",children:r(D,{className:"framer-f3uzy7-container",children:r(de,{height:"100%",id:"H71I4qoAc",layoutId:"H71I4qoAc",style:{height:"100%",width:"100%"},width:"100%"})})}),r(_,{width:"max((28.05vw - 90px) / 4, 1px)",children:r(D,{className:"framer-1cmtwkm-container",children:r(le,{height:"100%",id:"AM8KdVvwx",layoutId:"AM8KdVvwx",style:{height:"100%",width:"100%"},width:"100%"})})}),r(_,{width:"max((28.05vw - 90px) / 4, 1px)",children:r(D,{className:"framer-1c39d3r-container",children:r(fe,{height:"100%",id:"jsdyEnAdq",layoutId:"jsdyEnAdq",style:{height:"100%",width:"100%"},width:"100%"})})}),r(_,{width:"max((28.05vw - 90px) / 4, 1px)",children:r(D,{className:"framer-1l8e7xi-container",children:r(ce,{height:"100%",id:"tDa2_hJ86",layoutId:"tDa2_hJ86",style:{height:"100%",width:"100%"},width:"100%"})})})]})]}),q("div",{className:"framer-os8irq",children:[r(g,{background:{alt:"",fit:"fit",pixelHeight:208,pixelWidth:1116,positionX:"center",positionY:"center",sizes:"24.7656vw",src:"https://framerusercontent.com/images/NqOlJboMWC8KcVXGZElz6vFY.png",srcSet:"https://framerusercontent.com/images/NqOlJboMWC8KcVXGZElz6vFY.png?scale-down-to=512 512w,https://framerusercontent.com/images/NqOlJboMWC8KcVXGZElz6vFY.png?scale-down-to=1024 1024w,https://framerusercontent.com/images/NqOlJboMWC8KcVXGZElz6vFY.png 1116w"},className:"framer-1lx895c"}),r(_,{children:r(D,{className:"framer-1v17glg-container",children:r(B,{height:"100%",html:`<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Notification Frame</title>
    <style>
        body {
            font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
            display: flex;
            justify-content: center;
            align-items: center;
            height: 100vh;
            background: transparent;
            margin: 0;
        }
        #notifications {
            position: fixed;
            top: 20px;
            width: 80%;
        }
        .notification {
            background-color: rgba(255, 255, 255, 0.45);
            backdrop-filter: blur(20px);
            border-radius: 20px;
            box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
            margin-bottom: 10px;
            padding: 15px;
            display: flex;
            flex-direction: column;
            animation: slideIn 0.5s, slideOut 0.5s 2.5s forwards;
        }
        @keyframes slideIn {
            from {
                opacity: 0;
                transform: translateY(-20px);
            }
            to {
                opacity: 1;
                transform: translateY(0);
            }
        }
        @keyframes slideOut {
            from {
                opacity: 1;
                transform: translateY(0);
            }
            to {
                opacity: 0;
                transform: translateY(-20px);
            }
        }
        .notification-header {
            display: flex;
            align-items: center;
            margin-bottom: 8px;
        }
        .notification-icon {
            width: 30px;
            height: 30px;
            border-radius: 6px;
            margin-right: 10px;
        }
        .notification-title {
            font-weight: bold;
            font-size: 16px;
            color: #000;
        }
        .notification-time {
            margin-left: auto;
            font-size: 12px;
            color: #171717;
        }
        .notification-content {
            font-size: 14px;
            color: #171717;
        }
        .notification-message {
            font-weight: bold;
            color: #000;
        }
    </style>
</head>
<body>
    <div id="notifications"></div>

    <script>
        const maxNotifications = 6;
        const notificationsContainer = document.getElementById('notifications');

        function addNotification(data) {
            console.log('Adding notification:', data); // Log when adding a notification
            const notification = document.createElement('div');
            notification.className = 'notification';

            const header = document.createElement('div');
            header.className = 'notification-header';

            const icon = document.createElement('img');
            icon.className = 'notification-icon';
            icon.src = data.urlimg; // URL de l'image provenant du JSON
            header.appendChild(icon);

            const title = document.createElement('div');
            title.className = 'notification-title';
            title.innerText = data.appname; // Nom de l'application provenant du JSON
            header.appendChild(title);

            const time = document.createElement('div');
            time.className = 'notification-time';
            time.innerText = 'now'; // Vous pouvez utiliser une fonction pour obtenir l'heure actuelle
            header.appendChild(time);

            const contentDiv = document.createElement('div');
            contentDiv.className = 'notification-content';

            const notificationMessage = document.createElement('div');
            notificationMessage.className = 'notification-message';
            notificationMessage.innerText = data.title; // Titre de la notification provenant du JSON
            contentDiv.appendChild(notificationMessage);

            const messageDiv = document.createElement('div');
            messageDiv.innerText = data.message; // Message provenant du JSON
            contentDiv.appendChild(messageDiv);

            notification.appendChild(header);
            notification.appendChild(contentDiv);

            notificationsContainer.insertBefore(notification, notificationsContainer.firstChild);

            if (notificationsContainer.childElementCount > maxNotifications) {
                notificationsContainer.removeChild(notificationsContainer.lastChild);
            }

            // Supprimer la notification apr\xE8s 3 secondes avec une animation
            setTimeout(() => {
                notification.classList.add('slideOut');
                setTimeout(() => notificationsContainer.removeChild(notification), 500); // Assurez-vous que le d\xE9lai correspond \xE0 la dur\xE9e de l'animation de sortie
            }, 3000);
        }

        // \xC9couter les messages de la fen\xEAtre parente
        window.addEventListener('message', (event) => {
            console.log('Message received from parent:', event.data);
            const data = event.data;
            if (data && data.message) {
                addNotification(data);
            } else {
                console.warn('Received message with no relevant content:', data);
            }
        });
    <\/script>
</body>
</html>
`,id:"Bbp9ui130",layoutId:"Bbp9ui130",style:{height:"100%",width:"100%"},type:"html",url:"",width:"100%"})})})]})]})}),r("div",{className:b(be,...d),id:"overlay"})]})})}),qt=["@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }",".framer-7rVyk.framer-twuf1i, .framer-7rVyk .framer-twuf1i { display: block; }",".framer-7rVyk.framer-epng6d { align-content: center; align-items: center; display: flex; flex-direction: column; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: flex-start; overflow: hidden; padding: 0px; position: relative; width: 1920px; }",".framer-7rVyk .framer-1bn3f0l { align-content: flex-end; align-items: flex-end; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: 100vh; justify-content: flex-end; padding: 0px; position: relative; width: 100%; }",".framer-7rVyk .framer-1tf6juc-container { aspect-ratio: 0.5740740740740741 / 1; flex: none; height: 100vh; left: 50%; position: absolute; top: 50%; transform: translate(-50%, -50%); width: var(--framer-aspect-ratio-supported, 620px); z-index: 1; }",".framer-7rVyk .framer-y72hln { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 10px; height: 100%; justify-content: flex-start; left: calc(16.458333333333357% - 33% / 2); overflow: hidden; padding: 0px; position: absolute; top: calc(50.00000000000002% - 100% / 2); width: 33%; z-index: 1; }",".framer-7rVyk .framer-1iui7hl { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: 15%; justify-content: flex-start; overflow: hidden; padding: 0px; position: relative; width: 90%; }",".framer-7rVyk .framer-1dpya5v-container { flex: none; height: 80px; position: relative; width: 80px; }",".framer-7rVyk .framer-18i72qn { flex: none; height: 60%; position: relative; width: 80%; }",".framer-7rVyk .framer-zxfy08 { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 30px; height: 15%; justify-content: flex-start; overflow: hidden; padding: 0px; position: relative; width: 85%; }",".framer-7rVyk .framer-f3uzy7-container, .framer-7rVyk .framer-1cmtwkm-container, .framer-7rVyk .framer-1c39d3r-container, .framer-7rVyk .framer-1l8e7xi-container { flex: 1 0 0px; height: 100%; position: relative; width: 1px; }",".framer-7rVyk .framer-os8irq { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 10px; height: 100%; justify-content: center; overflow: hidden; padding: 0px; position: relative; width: 33%; }",".framer-7rVyk .framer-1lx895c { flex: none; height: 15%; position: relative; width: 75%; }",".framer-7rVyk .framer-1v17glg-container { flex: none; height: 85%; position: relative; width: 100%; z-index: 4; }","@supports (background: -webkit-named-image(i)) and (not (scale:1)) { .framer-7rVyk.framer-epng6d, .framer-7rVyk .framer-1bn3f0l, .framer-7rVyk .framer-y72hln, .framer-7rVyk .framer-1iui7hl, .framer-7rVyk .framer-zxfy08, .framer-7rVyk .framer-os8irq { gap: 0px; } .framer-7rVyk.framer-epng6d > *, .framer-7rVyk .framer-y72hln > *, .framer-7rVyk .framer-os8irq > * { margin: 0px; margin-bottom: calc(10px / 2); margin-top: calc(10px / 2); } .framer-7rVyk.framer-epng6d > :first-child, .framer-7rVyk .framer-y72hln > :first-child, .framer-7rVyk .framer-os8irq > :first-child { margin-top: 0px; } .framer-7rVyk.framer-epng6d > :last-child, .framer-7rVyk .framer-y72hln > :last-child, .framer-7rVyk .framer-os8irq > :last-child { margin-bottom: 0px; } .framer-7rVyk .framer-1bn3f0l > *, .framer-7rVyk .framer-1iui7hl > * { margin: 0px; margin-left: calc(10px / 2); margin-right: calc(10px / 2); } .framer-7rVyk .framer-1bn3f0l > :first-child, .framer-7rVyk .framer-1iui7hl > :first-child, .framer-7rVyk .framer-zxfy08 > :first-child { margin-left: 0px; } .framer-7rVyk .framer-1bn3f0l > :last-child, .framer-7rVyk .framer-1iui7hl > :last-child, .framer-7rVyk .framer-zxfy08 > :last-child { margin-right: 0px; } .framer-7rVyk .framer-zxfy08 > * { margin: 0px; margin-left: calc(30px / 2); margin-right: calc(30px / 2); } }"],re=R(Wt,qt,"framer-7rVyk"),Rn=re;re.displayName="Page";re.defaultProps={height:1080,width:1920};N(re,[{explicitInter:!0,fonts:[]},...Pt,...Tt,...Mt,...Ot,...jt,..._t],{supportsExplicitInterCodegen:!0});var Nn={exports:{default:{type:"reactComponent",name:"FramerKGfq_P5QE",slots:[],annotations:{framerIntrinsicWidth:"1920",framerImmutableVariables:"true",framerComponentViewportWidth:"true",framerIntrinsicHeight:"1080",framerContractVersion:"1",framerDisplayContentsDiv:"false",framerResponsiveScreen:"",framerCanvasComponentVariantDetails:'{"propertyName":"variant","data":{"default":{"layout":["fixed","auto"]}}}'}},Props:{type:"tsType",annotations:{framerContractVersion:"1"}},__FramerMetadata__:{type:"variable"}}};export{Nn as __FramerMetadata__,Rn as default};
//# sourceMappingURL=lwiuJe58TvJGVmFok9mHVQz5bymtwZyYrM-qhJMDjuE.UY3W24SW.mjs.map