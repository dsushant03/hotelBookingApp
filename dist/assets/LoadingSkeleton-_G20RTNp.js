import{b as o,r as R,j as n}from"./index-t1rrV4Sx.js";import{g as _,a as S,s as $,b as U,u as M,_ as A,c as W,e as X}from"./styled-UjONbMFN.js";import{k as C,c as p}from"./useTheme-E2srquI0.js";import{C as N,G as h}from"./Grid-TV4o3r8x.js";function T(t){return String(t).match(/[\d.\-+]*\s*(.*)/)[1]||""}function B(t){return parseFloat(t)}function E(t){return _("MuiSkeleton",t)}S("MuiSkeleton",["root","text","rectangular","rounded","circular","pulse","wave","withChildren","fitContent","heightAuto"]);const F=["animation","className","component","height","style","variant","width"];let l=t=>t,g,f,v,b;const G=t=>{const{classes:a,variant:e,animation:i,hasChildren:r,width:d,height:s}=t;return X({root:["root",e,i,r&&"withChildren",r&&!d&&"fitContent",r&&!s&&"heightAuto"]},E,a)},K=C(g||(g=l`
  0% {
    opacity: 1;
  }

  50% {
    opacity: 0.4;
  }

  100% {
    opacity: 1;
  }
`)),L=C(f||(f=l`
  0% {
    transform: translateX(-100%);
  }

  50% {
    /* +0.5s of delay between each loop */
    transform: translateX(100%);
  }

  100% {
    transform: translateX(100%);
  }
`)),P=$("span",{name:"MuiSkeleton",slot:"Root",overridesResolver:(t,a)=>{const{ownerState:e}=t;return[a.root,a[e.variant],e.animation!==!1&&a[e.animation],e.hasChildren&&a.withChildren,e.hasChildren&&!e.width&&a.fitContent,e.hasChildren&&!e.height&&a.heightAuto]}})(({theme:t,ownerState:a})=>{const e=T(t.shape.borderRadius)||"px",i=B(t.shape.borderRadius);return o({display:"block",backgroundColor:t.vars?t.vars.palette.Skeleton.bg:U(t.palette.text.primary,t.palette.mode==="light"?.11:.13),height:"1.2em"},a.variant==="text"&&{marginTop:0,marginBottom:0,height:"auto",transformOrigin:"0 55%",transform:"scale(1, 0.60)",borderRadius:`${i}${e}/${Math.round(i/.6*10)/10}${e}`,"&:empty:before":{content:'"\\00a0"'}},a.variant==="circular"&&{borderRadius:"50%"},a.variant==="rounded"&&{borderRadius:(t.vars||t).shape.borderRadius},a.hasChildren&&{"& > *":{visibility:"hidden"}},a.hasChildren&&!a.width&&{maxWidth:"fit-content"},a.hasChildren&&!a.height&&{height:"auto"})},({ownerState:t})=>t.animation==="pulse"&&p(v||(v=l`
      animation: ${0} 2s ease-in-out 0.5s infinite;
    `),K),({ownerState:t,theme:a})=>t.animation==="wave"&&p(b||(b=l`
      position: relative;
      overflow: hidden;

      /* Fix bug in Safari https://bugs.webkit.org/show_bug.cgi?id=68196 */
      -webkit-mask-image: -webkit-radial-gradient(white, black);

      &::after {
        animation: ${0} 2s linear 0.5s infinite;
        background: linear-gradient(
          90deg,
          transparent,
          ${0},
          transparent
        );
        content: '';
        position: absolute;
        transform: translateX(-100%); /* Avoid flash during server-side hydration */
        bottom: 0;
        left: 0;
        right: 0;
        top: 0;
      }
    `),L,(a.vars||a).palette.action.hover)),O=R.forwardRef(function(a,e){const i=M({props:a,name:"MuiSkeleton"}),{animation:r="pulse",className:d,component:s="span",height:c,style:k,variant:w="text",width:y}=i,u=A(i,F),m=o({},i,{animation:r,component:s,variant:w,hasChildren:!!u.children}),j=G(m);return n.jsx(P,o({as:s,ref:e,className:W(j.root,d),ownerState:m},u,{style:o({width:y,height:c},k)}))}),x=O;function H(){return n.jsxs("div",{children:[n.jsx(x,{animation:"wave",variant:"rectangular",width:"100%",height:60}),n.jsx(N,{maxWidth:"lg",children:n.jsx(h,{maxWidth:"lg",children:n.jsx(h,{container:!0,spacing:2,marginTop:3,children:[1,2,3,4,5,6,7,8,9].map((t,a)=>n.jsx(h,{item:!0,xs:12,sm:6,md:4,children:n.jsx(x,{animation:"wave",variant:"rectangular",width:"100%",height:200})},a))})})})]})}export{H as default};
