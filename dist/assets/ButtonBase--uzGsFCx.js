import{r as o,R as A,d as Oe,b as X,j as $}from"./index-t1rrV4Sx.js";import{_ as re,c as x,a as ye,s as ie,u as Ee,g as ze,e as Ae}from"./styled-UjONbMFN.js";import{k as oe}from"./useTheme-E2srquI0.js";function Xe(e,t){typeof e=="function"?e(t):e&&(e.current=t)}const We=typeof window<"u"?o.useLayoutEffect:o.useEffect,Ye=We;function H(e){const t=o.useRef(e);return Ye(()=>{t.current=e}),o.useRef((...r)=>(0,t.current)(...r)).current}function fe(...e){return o.useMemo(()=>e.every(t=>t==null)?null:t=>{e.forEach(r=>{Xe(r,t)})},e)}let G=!0,te=!1,de;const He={text:!0,search:!0,url:!0,tel:!0,email:!0,password:!0,number:!0,date:!0,month:!0,week:!0,time:!0,datetime:!0,"datetime-local":!0};function Ge(e){const{type:t,tagName:r}=e;return!!(r==="INPUT"&&He[t]&&!e.readOnly||r==="TEXTAREA"&&!e.readOnly||e.isContentEditable)}function qe(e){e.metaKey||e.altKey||e.ctrlKey||(G=!0)}function ee(){G=!1}function Je(){this.visibilityState==="hidden"&&te&&(G=!0)}function Qe(e){e.addEventListener("keydown",qe,!0),e.addEventListener("mousedown",ee,!0),e.addEventListener("pointerdown",ee,!0),e.addEventListener("touchstart",ee,!0),e.addEventListener("visibilitychange",Je,!0)}function Ze(e){const{target:t}=e;try{return t.matches(":focus-visible")}catch{}return G||Ge(t)}function et(){const e=o.useCallback(n=>{n!=null&&Qe(n.ownerDocument)},[]),t=o.useRef(!1);function r(){return t.current?(te=!0,window.clearTimeout(de),de=window.setTimeout(()=>{te=!1},100),t.current=!1,!0):!1}function u(n){return Ze(n)?(t.current=!0,!0):!1}return{isFocusVisibleRef:t,onFocus:u,onBlur:r,ref:e}}const he=A.createContext(null);function tt(e){if(e===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function se(e,t){var r=function(i){return t&&o.isValidElement(i)?t(i):i},u=Object.create(null);return e&&o.Children.map(e,function(n){return n}).forEach(function(n){u[n.key]=r(n)}),u}function nt(e,t){e=e||{},t=t||{};function r(d){return d in t?t[d]:e[d]}var u=Object.create(null),n=[];for(var i in e)i in t?n.length&&(u[i]=n,n=[]):n.push(i);var s,c={};for(var l in t){if(u[l])for(s=0;s<u[l].length;s++){var p=u[l][s];c[u[l][s]]=r(p)}c[l]=r(l)}for(s=0;s<n.length;s++)c[n[s]]=r(n[s]);return c}function S(e,t,r){return r[t]!=null?r[t]:e.props[t]}function rt(e,t){return se(e.children,function(r){return o.cloneElement(r,{onExited:t.bind(null,r),in:!0,appear:S(r,"appear",e),enter:S(r,"enter",e),exit:S(r,"exit",e)})})}function it(e,t,r){var u=se(e.children),n=nt(t,u);return Object.keys(n).forEach(function(i){var s=n[i];if(o.isValidElement(s)){var c=i in t,l=i in u,p=t[i],d=o.isValidElement(p)&&!p.props.in;l&&(!c||d)?n[i]=o.cloneElement(s,{onExited:r.bind(null,s),in:!0,exit:S(s,"exit",e),enter:S(s,"enter",e)}):!l&&c&&!d?n[i]=o.cloneElement(s,{in:!1}):l&&c&&o.isValidElement(p)&&(n[i]=o.cloneElement(s,{onExited:r.bind(null,s),in:p.props.in,exit:S(s,"exit",e),enter:S(s,"enter",e)}))}}),n}var ot=Object.values||function(e){return Object.keys(e).map(function(t){return e[t]})},st={component:"div",childFactory:function(t){return t}},ae=function(e){Oe(t,e);function t(u,n){var i;i=e.call(this,u,n)||this;var s=i.handleExited.bind(tt(i));return i.state={contextValue:{isMounting:!0},handleExited:s,firstRender:!0},i}var r=t.prototype;return r.componentDidMount=function(){this.mounted=!0,this.setState({contextValue:{isMounting:!1}})},r.componentWillUnmount=function(){this.mounted=!1},t.getDerivedStateFromProps=function(n,i){var s=i.children,c=i.handleExited,l=i.firstRender;return{children:l?rt(n,c):it(n,s,c),firstRender:!1}},r.handleExited=function(n,i){var s=se(this.props.children);n.key in s||(n.props.onExited&&n.props.onExited(i),this.mounted&&this.setState(function(c){var l=X({},c.children);return delete l[n.key],{children:l}}))},r.render=function(){var n=this.props,i=n.component,s=n.childFactory,c=re(n,["component","childFactory"]),l=this.state.contextValue,p=ot(this.state.children).map(s);return delete c.appear,delete c.enter,delete c.exit,i===null?A.createElement(he.Provider,{value:l},p):A.createElement(he.Provider,{value:l},A.createElement(i,c,p))},t}(A.Component);ae.propTypes={};ae.defaultProps=st;const at=ae;function ut(e){const{className:t,classes:r,pulsate:u=!1,rippleX:n,rippleY:i,rippleSize:s,in:c,onExited:l,timeout:p}=e,[d,g]=o.useState(!1),b=x(t,r.ripple,r.rippleVisible,u&&r.ripplePulsate),C={width:s,height:s,top:-(s/2)+i,left:-(s/2)+n},h=x(r.child,d&&r.childLeaving,u&&r.childPulsate);return!c&&!d&&g(!0),o.useEffect(()=>{if(!c&&l!=null){const R=setTimeout(l,p);return()=>{clearTimeout(R)}}},[l,c,p]),$.jsx("span",{className:b,style:C,children:$.jsx("span",{className:h})})}const lt=ye("MuiTouchRipple",["root","ripple","rippleVisible","ripplePulsate","child","childLeaving","childPulsate"]),m=lt,ct=["center","classes","className"];let q=e=>e,me,be,ge,Re;const ne=550,pt=80,ft=oe(me||(me=q`
  0% {
    transform: scale(0);
    opacity: 0.1;
  }

  100% {
    transform: scale(1);
    opacity: 0.3;
  }
`)),dt=oe(be||(be=q`
  0% {
    opacity: 1;
  }

  100% {
    opacity: 0;
  }
`)),ht=oe(ge||(ge=q`
  0% {
    transform: scale(1);
  }

  50% {
    transform: scale(0.92);
  }

  100% {
    transform: scale(1);
  }
`)),mt=ie("span",{name:"MuiTouchRipple",slot:"Root"})({overflow:"hidden",pointerEvents:"none",position:"absolute",zIndex:0,top:0,right:0,bottom:0,left:0,borderRadius:"inherit"}),bt=ie(ut,{name:"MuiTouchRipple",slot:"Ripple"})(Re||(Re=q`
  opacity: 0;
  position: absolute;

  &.${0} {
    opacity: 0.3;
    transform: scale(1);
    animation-name: ${0};
    animation-duration: ${0}ms;
    animation-timing-function: ${0};
  }

  &.${0} {
    animation-duration: ${0}ms;
  }

  & .${0} {
    opacity: 1;
    display: block;
    width: 100%;
    height: 100%;
    border-radius: 50%;
    background-color: currentColor;
  }

  & .${0} {
    opacity: 0;
    animation-name: ${0};
    animation-duration: ${0}ms;
    animation-timing-function: ${0};
  }

  & .${0} {
    position: absolute;
    /* @noflip */
    left: 0px;
    top: 0;
    animation-name: ${0};
    animation-duration: 2500ms;
    animation-timing-function: ${0};
    animation-iteration-count: infinite;
    animation-delay: 200ms;
  }
`),m.rippleVisible,ft,ne,({theme:e})=>e.transitions.easing.easeInOut,m.ripplePulsate,({theme:e})=>e.transitions.duration.shorter,m.child,m.childLeaving,dt,ne,({theme:e})=>e.transitions.easing.easeInOut,m.childPulsate,ht,({theme:e})=>e.transitions.easing.easeInOut),gt=o.forwardRef(function(t,r){const u=Ee({props:t,name:"MuiTouchRipple"}),{center:n=!1,classes:i={},className:s}=u,c=re(u,ct),[l,p]=o.useState([]),d=o.useRef(0),g=o.useRef(null);o.useEffect(()=>{g.current&&(g.current(),g.current=null)},[l]);const b=o.useRef(!1),C=o.useRef(0),h=o.useRef(null),R=o.useRef(null);o.useEffect(()=>()=>{C.current&&clearTimeout(C.current)},[]);const U=o.useCallback(f=>{const{pulsate:y,rippleX:E,rippleY:D,rippleSize:j,cb:_}=f;p(T=>[...T,$.jsx(bt,{classes:{ripple:x(i.ripple,m.ripple),rippleVisible:x(i.rippleVisible,m.rippleVisible),ripplePulsate:x(i.ripplePulsate,m.ripplePulsate),child:x(i.child,m.child),childLeaving:x(i.childLeaving,m.childLeaving),childPulsate:x(i.childPulsate,m.childPulsate)},timeout:ne,pulsate:y,rippleX:E,rippleY:D,rippleSize:j},d.current)]),d.current+=1,g.current=_},[i]),N=o.useCallback((f={},y={},E=()=>{})=>{const{pulsate:D=!1,center:j=n||y.pulsate,fakeElement:_=!1}=y;if((f==null?void 0:f.type)==="mousedown"&&b.current){b.current=!1;return}(f==null?void 0:f.type)==="touchstart"&&(b.current=!0);const T=_?null:R.current,B=T?T.getBoundingClientRect():{width:0,height:0,left:0,top:0};let v,P,L;if(j||f===void 0||f.clientX===0&&f.clientY===0||!f.clientX&&!f.touches)v=Math.round(B.width/2),P=Math.round(B.height/2);else{const{clientX:F,clientY:V}=f.touches&&f.touches.length>0?f.touches[0]:f;v=Math.round(F-B.left),P=Math.round(V-B.top)}if(j)L=Math.sqrt((2*B.width**2+B.height**2)/3),L%2===0&&(L+=1);else{const F=Math.max(Math.abs((T?T.clientWidth:0)-v),v)*2+2,V=Math.max(Math.abs((T?T.clientHeight:0)-P),P)*2+2;L=Math.sqrt(F**2+V**2)}f!=null&&f.touches?h.current===null&&(h.current=()=>{U({pulsate:D,rippleX:v,rippleY:P,rippleSize:L,cb:E})},C.current=setTimeout(()=>{h.current&&(h.current(),h.current=null)},pt)):U({pulsate:D,rippleX:v,rippleY:P,rippleSize:L,cb:E})},[n,U]),K=o.useCallback(()=>{N({},{pulsate:!0})},[N]),I=o.useCallback((f,y)=>{if(clearTimeout(C.current),(f==null?void 0:f.type)==="touchend"&&h.current){h.current(),h.current=null,C.current=setTimeout(()=>{I(f,y)});return}h.current=null,p(E=>E.length>0?E.slice(1):E),g.current=y},[]);return o.useImperativeHandle(r,()=>({pulsate:K,start:N,stop:I}),[K,N,I]),$.jsx(mt,X({className:x(m.root,i.root,s),ref:R},c,{children:$.jsx(at,{component:null,exit:!0,children:l})}))}),Rt=gt;function yt(e){return ze("MuiButtonBase",e)}const Et=ye("MuiButtonBase",["root","disabled","focusVisible"]),Tt=Et,Mt=["action","centerRipple","children","className","component","disabled","disableRipple","disableTouchRipple","focusRipple","focusVisibleClassName","LinkComponent","onBlur","onClick","onContextMenu","onDragLeave","onFocus","onFocusVisible","onKeyDown","onKeyUp","onMouseDown","onMouseLeave","onMouseUp","onTouchEnd","onTouchMove","onTouchStart","tabIndex","TouchRippleProps","touchRippleRef","type"],xt=e=>{const{disabled:t,focusVisible:r,focusVisibleClassName:u,classes:n}=e,s=Ae({root:["root",t&&"disabled",r&&"focusVisible"]},yt,n);return r&&u&&(s.root+=` ${u}`),s},Ct=ie("button",{name:"MuiButtonBase",slot:"Root",overridesResolver:(e,t)=>t.root})({display:"inline-flex",alignItems:"center",justifyContent:"center",position:"relative",boxSizing:"border-box",WebkitTapHighlightColor:"transparent",backgroundColor:"transparent",outline:0,border:0,margin:0,borderRadius:0,padding:0,cursor:"pointer",userSelect:"none",verticalAlign:"middle",MozAppearance:"none",WebkitAppearance:"none",textDecoration:"none",color:"inherit","&::-moz-focus-inner":{borderStyle:"none"},[`&.${Tt.disabled}`]:{pointerEvents:"none",cursor:"default"},"@media print":{colorAdjust:"exact"}}),vt=o.forwardRef(function(t,r){const u=Ee({props:t,name:"MuiButtonBase"}),{action:n,centerRipple:i=!1,children:s,className:c,component:l="button",disabled:p=!1,disableRipple:d=!1,disableTouchRipple:g=!1,focusRipple:b=!1,LinkComponent:C="a",onBlur:h,onClick:R,onContextMenu:U,onDragLeave:N,onFocus:K,onFocusVisible:I,onKeyDown:f,onKeyUp:y,onMouseDown:E,onMouseLeave:D,onMouseUp:j,onTouchEnd:_,onTouchMove:T,onTouchStart:B,tabIndex:v=0,TouchRippleProps:P,touchRippleRef:L,type:F}=u,V=re(u,Mt),O=o.useRef(null),M=o.useRef(null),Te=fe(M,L),{isFocusVisibleRef:ue,onFocus:Me,onBlur:xe,ref:Ce}=et(),[k,W]=o.useState(!1);p&&k&&W(!1),o.useImperativeHandle(n,()=>({focusVisible:()=>{W(!0),O.current.focus()}}),[]);const[J,ve]=o.useState(!1);o.useEffect(()=>{ve(!0)},[]);const Ve=J&&!d&&!p;o.useEffect(()=>{k&&b&&!d&&J&&M.current.pulsate()},[d,b,k,J]);function w(a,ce,_e=g){return H(pe=>(ce&&ce(pe),!_e&&M.current&&M.current[a](pe),!0))}const we=w("start",E),Be=w("stop",U),Pe=w("stop",N),Le=w("stop",j),De=w("stop",a=>{k&&a.preventDefault(),D&&D(a)}),Fe=w("start",B),ke=w("stop",_),Se=w("stop",T),$e=w("stop",a=>{xe(a),ue.current===!1&&W(!1),h&&h(a)},!1),Ne=H(a=>{O.current||(O.current=a.currentTarget),Me(a),ue.current===!0&&(W(!0),I&&I(a)),K&&K(a)}),Q=()=>{const a=O.current;return l&&l!=="button"&&!(a.tagName==="A"&&a.href)},Z=o.useRef(!1),Ie=H(a=>{b&&!Z.current&&k&&M.current&&a.key===" "&&(Z.current=!0,M.current.stop(a,()=>{M.current.start(a)})),a.target===a.currentTarget&&Q()&&a.key===" "&&a.preventDefault(),f&&f(a),a.target===a.currentTarget&&Q()&&a.key==="Enter"&&!p&&(a.preventDefault(),R&&R(a))}),je=H(a=>{b&&a.key===" "&&M.current&&k&&!a.defaultPrevented&&(Z.current=!1,M.current.stop(a,()=>{M.current.pulsate(a)})),y&&y(a),R&&a.target===a.currentTarget&&Q()&&a.key===" "&&!a.defaultPrevented&&R(a)});let Y=l;Y==="button"&&(V.href||V.to)&&(Y=C);const z={};Y==="button"?(z.type=F===void 0?"button":F,z.disabled=p):(!V.href&&!V.to&&(z.role="button"),p&&(z["aria-disabled"]=p));const Ue=fe(r,Ce,O),le=X({},u,{centerRipple:i,component:l,disabled:p,disableRipple:d,disableTouchRipple:g,focusRipple:b,tabIndex:v,focusVisible:k}),Ke=xt(le);return $.jsxs(Ct,X({as:Y,className:x(Ke.root,c),ownerState:le,onBlur:$e,onClick:R,onContextMenu:Be,onFocus:Ne,onKeyDown:Ie,onKeyUp:je,onMouseDown:we,onMouseLeave:De,onMouseUp:Le,onDragLeave:Pe,onTouchEnd:ke,onTouchMove:Se,onTouchStart:Fe,ref:Ue,tabIndex:p?-1:v,type:F},z,V,{children:[s,Ve?$.jsx(Rt,X({ref:Te,center:i},P)):null]}))}),Lt=vt;export{Lt as B,he as T,tt as _,fe as a,H as b,et as c,Xe as s,Ye as u};
