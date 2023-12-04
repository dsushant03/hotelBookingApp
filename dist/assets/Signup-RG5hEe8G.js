import{r as a,_ as b,u as v,a as w,j as e}from"./index-t1rrV4Sx.js";import{T as m}from"./Typography-5Xi7ereZ.js";import{B as o}from"./Box-_BwqDWt5.js";import{T as r}from"./TextField-FErTdQeD.js";import{B as n}from"./Button-nFjaOsq3.js";import{M as y}from"./Select-MfDAEuej.js";import"./styled-UjONbMFN.js";import"./ButtonBase--uzGsFCx.js";import"./useTheme-E2srquI0.js";import"./ListContext-eOsIIqi-.js";import"./Paper-6i5jI8J0.js";import"./createSvgIcon-zJmJAGgS.js";const C=a.lazy(()=>b(()=>import("./Navbar-kXrW4_ia.js"),__vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11,12])));function D(){const d=v(),[i,l]=a.useState(""),[p,x]=a.useState(""),[c,u]=a.useState(""),[g,s]=a.useState(!1),h=()=>{s(!1)},f=w(),j=async()=>{const t=await d.signupUtil(i,p);t.user.displayName=c,console.log(t),t&&s(!0)};return e.jsxs(e.Fragment,{children:[e.jsx(C,{loggedIn:!1}),e.jsx(m,{variant:"h4",fontWeight:"bold",sx:{mt:"100px",textAlign:"center"},children:"Create new account"}),e.jsxs(o,{sx:{display:"flex",flexDirection:"column",width:"30%",mt:"30px",ml:"35%"},children:[e.jsx("br",{}),e.jsx(r,{label:"Name",onChange:t=>u(t.target.value),value:c}),e.jsx("br",{}),e.jsx(r,{label:"Email",type:"email",onChange:t=>l(t.target.value),value:i}),e.jsx("br",{}),e.jsx(r,{label:"Password",type:"password",onChange:t=>x(t.target.value),value:p}),e.jsx("br",{}),e.jsx(n,{size:"large",variant:"contained",sx:{width:"50%",ml:"25%",borderRadius:"10px",mt:"90px"},onClick:j,children:"Signup"})]}),e.jsx(y,{open:g,onClose:h,children:e.jsxs(o,{sx:{position:"absolute",top:"35%",left:"50%",bgcolor:"white",width:"300px",margin:"auto",transform:"translate(-50%, -50%)",boxShadow:"0 0 10px 0 rgba(0,0,0,0.2)",borderRadius:"3px",p:5,height:"23%"},children:[e.jsx(m,{sx:{ml:"30px"},variant:"h5",children:"Signed up succesfully."}),e.jsxs(o,{sx:{display:"flex",justifyContent:"space-between",mt:"100px"},children:[e.jsx(n,{sx:{mt:2},onClick:()=>f("/"),variant:"contained",children:"Login"}),e.jsx(n,{sx:{mt:2},onClick:()=>{s(!1),l(""),x("")},variant:"contained",color:"error",children:"Cancel"})]})]})})]})}export{D as default};
function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/Navbar-kXrW4_ia.js","assets/index-t1rrV4Sx.js","assets/createSvgIcon-zJmJAGgS.js","assets/styled-UjONbMFN.js","assets/Select-MfDAEuej.js","assets/ListContext-eOsIIqi-.js","assets/useTheme-E2srquI0.js","assets/ButtonBase--uzGsFCx.js","assets/Paper-6i5jI8J0.js","assets/Typography-5Xi7ereZ.js","assets/Box-_BwqDWt5.js","assets/TextField-FErTdQeD.js","assets/MenuItem-Id0JMeWN.js"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}