import{b as r,r as c,j as s,_ as $,c as ot}from"./index-t1rrV4Sx.js";import{u as nt,a as at}from"./request-GoKRw2Zf.js";import{G as D,C as it}from"./Grid-TV4o3r8x.js";import{T as C}from"./Typography-5Xi7ereZ.js";import{B as I}from"./Box-_BwqDWt5.js";import{a as O,g as W,s as G,u as H,_ as S,c as j,e as z,b as h}from"./styled-UjONbMFN.js";import{L,i as rt,a as U}from"./ListContext-eOsIIqi-.js";import{u as ct,a as lt,B as dt}from"./ButtonBase--uzGsFCx.js";import{B as pt}from"./Button-nFjaOsq3.js";import"./useTheme-E2srquI0.js";function ut(t){return W("MuiListItem",t)}const mt=O("MuiListItem",["root","container","focusVisible","dense","alignItemsFlexStart","disabled","divider","gutters","padding","button","secondaryAction","selected"]),g=mt,gt=O("MuiListItemButton",["root","focusVisible","dense","alignItemsFlexStart","disabled","divider","gutters","selected"]),xt=gt;function ft(t){return W("MuiListItemSecondaryAction",t)}O("MuiListItemSecondaryAction",["root","disableGutters"]);const bt=["className"],vt=t=>{const{disableGutters:e,classes:n}=t;return z({root:["root",e&&"disableGutters"]},ft,n)},yt=G("div",{name:"MuiListItemSecondaryAction",slot:"Root",overridesResolver:(t,e)=>{const{ownerState:n}=t;return[e.root,n.disableGutters&&e.disableGutters]}})(({ownerState:t})=>r({position:"absolute",right:16,top:"50%",transform:"translateY(-50%)"},t.disableGutters&&{right:0})),Q=c.forwardRef(function(e,n){const i=H({props:e,name:"MuiListItemSecondaryAction"}),{className:l}=i,o=S(i,bt),d=c.useContext(L),a=r({},i,{disableGutters:d.disableGutters}),x=vt(a);return s.jsx(yt,r({className:j(x.root,l),ownerState:a,ref:n},o))});Q.muiName="ListItemSecondaryAction";const Ct=Q,It=["className"],ht=["alignItems","autoFocus","button","children","className","component","components","componentsProps","ContainerComponent","ContainerProps","dense","disabled","disableGutters","disablePadding","divider","focusVisibleClassName","secondaryAction","selected","slotProps","slots"],jt=(t,e)=>{const{ownerState:n}=t;return[e.root,n.dense&&e.dense,n.alignItems==="flex-start"&&e.alignItemsFlexStart,n.divider&&e.divider,!n.disableGutters&&e.gutters,!n.disablePadding&&e.padding,n.button&&e.button,n.hasSecondaryAction&&e.secondaryAction]},Lt=t=>{const{alignItems:e,button:n,classes:i,dense:l,disabled:o,disableGutters:d,disablePadding:a,divider:x,hasSecondaryAction:f,selected:A}=t;return z({root:["root",l&&"dense",!d&&"gutters",!a&&"padding",x&&"divider",o&&"disabled",n&&"button",e==="flex-start"&&"alignItemsFlexStart",f&&"secondaryAction",A&&"selected"],container:["container"]},ut,i)},At=G("div",{name:"MuiListItem",slot:"Root",overridesResolver:jt})(({theme:t,ownerState:e})=>r({display:"flex",justifyContent:"flex-start",alignItems:"center",position:"relative",textDecoration:"none",width:"100%",boxSizing:"border-box",textAlign:"left"},!e.disablePadding&&r({paddingTop:8,paddingBottom:8},e.dense&&{paddingTop:4,paddingBottom:4},!e.disableGutters&&{paddingLeft:16,paddingRight:16},!!e.secondaryAction&&{paddingRight:48}),!!e.secondaryAction&&{[`& > .${xt.root}`]:{paddingRight:48}},{[`&.${g.focusVisible}`]:{backgroundColor:(t.vars||t).palette.action.focus},[`&.${g.selected}`]:{backgroundColor:t.vars?`rgba(${t.vars.palette.primary.mainChannel} / ${t.vars.palette.action.selectedOpacity})`:h(t.palette.primary.main,t.palette.action.selectedOpacity),[`&.${g.focusVisible}`]:{backgroundColor:t.vars?`rgba(${t.vars.palette.primary.mainChannel} / calc(${t.vars.palette.action.selectedOpacity} + ${t.vars.palette.action.focusOpacity}))`:h(t.palette.primary.main,t.palette.action.selectedOpacity+t.palette.action.focusOpacity)}},[`&.${g.disabled}`]:{opacity:(t.vars||t).palette.action.disabledOpacity}},e.alignItems==="flex-start"&&{alignItems:"flex-start"},e.divider&&{borderBottom:`1px solid ${(t.vars||t).palette.divider}`,backgroundClip:"padding-box"},e.button&&{transition:t.transitions.create("background-color",{duration:t.transitions.duration.shortest}),"&:hover":{textDecoration:"none",backgroundColor:(t.vars||t).palette.action.hover,"@media (hover: none)":{backgroundColor:"transparent"}},[`&.${g.selected}:hover`]:{backgroundColor:t.vars?`rgba(${t.vars.palette.primary.mainChannel} / calc(${t.vars.palette.action.selectedOpacity} + ${t.vars.palette.action.hoverOpacity}))`:h(t.palette.primary.main,t.palette.action.selectedOpacity+t.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:t.vars?`rgba(${t.vars.palette.primary.mainChannel} / ${t.vars.palette.action.selectedOpacity})`:h(t.palette.primary.main,t.palette.action.selectedOpacity)}}},e.hasSecondaryAction&&{paddingRight:48})),Pt=G("li",{name:"MuiListItem",slot:"Container",overridesResolver:(t,e)=>e.container})({position:"relative"}),Rt=c.forwardRef(function(e,n){const i=H({props:e,name:"MuiListItem"}),{alignItems:l="center",autoFocus:o=!1,button:d=!1,children:a,className:x,component:f,components:A={},componentsProps:N={},ContainerComponent:B="li",ContainerProps:{className:Y}={},dense:k=!1,disabled:M=!1,disableGutters:P=!1,disablePadding:q=!1,divider:J=!1,focusVisibleClassName:K,secondaryAction:E,selected:X=!1,slotProps:Z={},slots:tt={}}=i,et=S(i.ContainerProps,It),st=S(i,ht),F=c.useContext(L),R=c.useMemo(()=>({dense:k||F.dense||!1,alignItems:l,disableGutters:P}),[l,F.dense,k,P]),_=c.useRef(null);ct(()=>{o&&_.current&&_.current.focus()},[o]);const m=c.Children.toArray(a),V=m.length&&rt(m[m.length-1],["ListItemSecondaryAction"]),v=r({},i,{alignItems:l,autoFocus:o,button:d,dense:R.dense,disabled:M,disableGutters:P,disablePadding:q,divider:J,hasSecondaryAction:V,selected:X}),T=Lt(v),w=lt(_,n),y=tt.root||A.Root||At,b=Z.root||N.root||{},p=r({className:j(T.root,b.className,x),disabled:M},st);let u=f||"li";return d&&(p.component=f||"div",p.focusVisibleClassName=j(g.focusVisible,K),u=dt),V?(u=!p.component&&!f?"div":u,B==="li"&&(u==="li"?u="div":p.component==="li"&&(p.component="div")),s.jsx(L.Provider,{value:R,children:s.jsxs(Pt,r({as:B,className:j(T.container,Y),ref:w,ownerState:v},et,{children:[s.jsx(y,r({},b,!U(y)&&{as:u,ownerState:r({},v,b.ownerState)},p,{children:m})),m.pop()]}))})):s.jsx(L.Provider,{value:R,children:s.jsxs(y,r({},b,{as:u,ref:w},!U(y)&&{ownerState:r({},v,b.ownerState)},p,{children:[m,E&&s.jsx(Ct,{children:E})]}))})}),_t=Rt;function St({images:t}){return s.jsx(s.Fragment,{children:s.jsx(D,{container:!0,spacing:1,children:t.map(e=>s.jsx(D,{item:!0,xs:12,sm:6,md:4,children:s.jsx("img",{src:e==null?void 0:e.img,alt:"hotels",style:{width:"100%",height:"100%",objectFit:"conver"}})},e.id))})})}const $t=c.lazy(()=>$(()=>import("./Navbar-kXrW4_ia.js"),__vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11,12]))),Ot=c.lazy(()=>$(()=>import("./LoadingSkeleton-_G20RTNp.js"),__vite__mapDeps([13,1,3,6,14]))),Gt=c.lazy(()=>$(()=>import("./BookingModal-1Zf9asIq.js"),__vite__mapDeps([15,1,7,3,6,4,5,8,2,10,9,16,12,17])));function Ut(){const{slug:t}=ot(),[e,n]=c.useState(!1),i=async()=>{const{data:a}=await at(t);return console.log(a),a},{isLoading:l,data:o}=nt("hotelData",i),d=()=>{n(!0)};return s.jsxs(s.Fragment,{children:[s.jsx($t,{loggedIn:!0}),s.jsxs(it,{children:[l?s.jsx(Ot,{}):s.jsxs(s.Fragment,{children:[s.jsx(C,{variant:"h6",sx:{margin:"3px 0",fontWeight:"bold"},children:o&&o.name}),s.jsx(St,{images:o==null?void 0:o.images})]}),s.jsx(I,{sx:{display:"flex",margin:"3px 0"},children:o==null?void 0:o.rooms.map(a=>s.jsx(C,{variant:"h6",fontWeight:"bold",sx:{margin:"3px 20px 5px 0",color:"gray"},children:a.content},a.id))}),s.jsx(C,{variant:"p",sx:{margin:"3px 0",lineHeight:"1.5"},children:o==null?void 0:o.aboutThePlace}),s.jsx(C,{variant:"h4",sx:{margin:"3rem 0 1.5rem",fontWeight:"bold"},children:"What this place offers!!!"}),s.jsxs(I,{sx:{margin:"3px 0",display:"flex",justifyContent:"space-between",alignItems:"center"},children:[s.jsx(I,{children:o==null?void 0:o.features.map(a=>s.jsx(_t,{children:a.text},a.id))}),s.jsx(I,{sx:{maxWidth:"70%"},children:s.jsx(pt,{onClick:d,variant:"outlined",children:"Reserve"})})]}),s.jsx(Gt,{open:e,setOpen:n,data:o})]})]})}export{Ut as default};
function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/Navbar-kXrW4_ia.js","assets/index-t1rrV4Sx.js","assets/createSvgIcon-zJmJAGgS.js","assets/styled-UjONbMFN.js","assets/Select-MfDAEuej.js","assets/ListContext-eOsIIqi-.js","assets/useTheme-E2srquI0.js","assets/ButtonBase--uzGsFCx.js","assets/Paper-6i5jI8J0.js","assets/Typography-5Xi7ereZ.js","assets/Box-_BwqDWt5.js","assets/TextField-FErTdQeD.js","assets/MenuItem-Id0JMeWN.js","assets/LoadingSkeleton-_G20RTNp.js","assets/Grid-TV4o3r8x.js","assets/BookingModal-1Zf9asIq.js","assets/Button-nFjaOsq3.js","assets/BookingModal-gAa6HVyB.css"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}