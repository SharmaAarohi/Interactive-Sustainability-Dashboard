(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[295],{7864:(e,t,n)=>{(window.__NEXT_P=window.__NEXT_P||[]).push(["/login",function(){return n(5739)}])},5739:(e,t,n)=>{"use strict";n.r(t),n.d(t,{default:()=>u});var a=n(4848),o=n(6540),r=n(6715),i=n(8509),s=n.n(i);let l=async(e,t)=>{try{let n=await fetch("/auth/login",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({email:e,password:t})});if(!n.ok){let e=await n.json();throw Error(e.message||"Login failed")}return await n.json()}catch(e){throw console.error("Error during login:",e),e}},u=()=>{let[e,t]=(0,o.useState)(""),[n,i]=(0,o.useState)(""),u=(0,r.useRouter)(),c=async t=>{t.preventDefault();try{let t=await l(e,n);t.token&&(localStorage.setItem("token",t.token),u.push("/dashboard"))}catch(e){console.error(e),alert("Login failed, please try again")}};return(0,a.jsx)("div",{className:s().container,children:(0,a.jsxs)("div",{className:s().formContainer,children:[(0,a.jsx)("h1",{className:s().title,children:"Login"}),(0,a.jsxs)("form",{onSubmit:c,children:[(0,a.jsx)("input",{type:"email",value:e,onChange:e=>t(e.target.value),placeholder:"Email",required:!0,className:s().input}),(0,a.jsx)("input",{type:"password",value:n,onChange:e=>i(e.target.value),placeholder:"Password",required:!0,className:s().input}),(0,a.jsx)("button",{type:"submit",className:s().button,children:"Login"})]})]})})}},8509:e=>{e.exports={container:"login_container__I6N6n",formContainer:"login_formContainer__YsGXy",title:"login_title__PqfOC",input:"login_input__3uA_r",button:"login_button__OLXCa"}},6715:(e,t,n)=>{e.exports=n(4009)}},e=>{var t=t=>e(e.s=t);e.O(0,[636,593,792],()=>t(7864)),_N_E=e.O()}]);