(this["webpackJsonpCaloreator-Project4-Frontend"]=this["webpackJsonpCaloreator-Project4-Frontend"]||[]).push([[0],{69:function(e,t,a){},70:function(e,t,a){},96:function(e,t,a){"use strict";a.r(t);var n=a(0),s=a(24),c=a.n(s),r=(a(69),a(49)),i=a(5),o=a(7),l=a(99),j=(a(70),a(52)),u=a(1);var d=function(e){var t=e.variant,a=e.heading,s=e.message,c=Object(n.useState)(!0),r=Object(i.a)(c,2),o=r[0],l=r[1],d=Object(n.useState)(null),b=Object(i.a)(d,2),h=b[0],m=b[1];return console.log(h),Object(n.useEffect)((function(){var e=setTimeout((function(){return l(!1)}),5e3);return m(e),function(){clearTimeout(h)}}),[]),Object(u.jsx)(j.a,{variant:t,onClose:function(){return l(!1)},dismissible:!0,show:o,children:Object(u.jsxs)("div",{className:"container",children:[Object(u.jsx)(j.a.Heading,{children:a}),Object(u.jsx)("p",{className:"alert-body",children:s})]})})},b=a(64),h=a(40),m=a(63),O=a(10),p=Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)(O.c,{to:"/change-password",className:"nav-link",children:"Change Password"}),Object(u.jsx)(O.c,{to:"/sign-out",className:"nav-link",children:"Sign Out"}),Object(u.jsx)(O.c,{to:"/meal",className:"nav-link",children:"Create Meal"}),Object(u.jsx)(O.c,{to:"/meals",className:"nav-link",children:"Show Meals"}),Object(u.jsx)(O.c,{to:"/meals/:id",className:"nav-link",children:"Edit Meals"})]}),x=Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)(O.c,{to:"/sign-up",className:"nav-link",children:"Sign Up"}),Object(u.jsx)(O.c,{to:"/sign-in",className:"nav-link",children:"Sign In"})]}),g=Object(u.jsx)(u.Fragment,{children:Object(u.jsx)(O.c,{to:"/",className:"nav-link",children:"Home"})}),v=function(e){var t=e.user;return Object(u.jsx)(h.a,{bg:"primary",variant:"dark",expand:"md",children:Object(u.jsxs)(m.a,{children:[Object(u.jsx)(h.a.Brand,{children:Object(u.jsx)(O.b,{to:"/",style:{color:"#FFF",textDecoration:"none"},children:"react-auth-template"})}),Object(u.jsx)(h.a.Toggle,{"aria-controls":"basic-navbar-nav"}),Object(u.jsx)(h.a.Collapse,{id:"basic-navbar-nav",children:Object(u.jsxs)(b.a,{className:"ms-auto",children:[t&&Object(u.jsxs)("span",{className:"navbar-text me-2",children:["Welcome, ",t.email]}),g,t?p:x]})})]})})},f=a(20),w=a.n(f),S=a(28),y="https://shielded-sierra-15733.herokuapp.com",N="http://localhost:4741",C="localhost"===window.location.hostname?N:y,k=a(21),F=a.n(k),P=function(e,t,a){return F.a.post(C+"/sign-up/",{credentials:{email:e,password:t,password_confirmation:a}})},A=function(e,t){return F.a.post(C+"/sign-in/",{credentials:{email:e,password:t}})},I=function(e){return F.a.delete(C+"/sign-out/",{headers:{Authorization:"Bearer ".concat(e.token)}})},E=function(e,t,a){return F.a.patch(C+"/change-password/",{passwords:{old:e,new:t}},{headers:{Authorization:"Bearer ".concat(a.token)}})},U=a(9),L=a(33),q=function(e){var t=e.msgAlert,a=e.setUser,s=Object(n.useState)(""),c=Object(i.a)(s,2),r=c[0],l=c[1],j=Object(n.useState)(""),d=Object(i.a)(j,2),b=d[0],h=d[1],m=Object(n.useState)(""),O=Object(i.a)(m,2),p=O[0],x=O[1],g=Object(n.useState)(!1),v=Object(i.a)(g,2),f=v[0],y=v[1],N=function(){var e=Object(S.a)(w.a.mark((function e(n){var s;return w.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n.preventDefault(),e.prev=1,e.next=4,P(r,b,p);case 4:return e.next=6,A(r,b);case 6:s=e.sent,a(s.data.user),t({heading:"Sign Up Success",message:"Succesfully registered! You've been signed in as well.",variant:"success"}),y(!0),e.next=18;break;case 12:e.prev=12,e.t0=e.catch(1),l(""),h(""),x(""),t({heading:"Sign Up Failed with error: "+e.t0.message,message:"Registration failed. Email may be taken, or passwords don't match.",variant:"danger"});case 18:case"end":return e.stop()}}),e,null,[[1,12]])})));return function(t){return e.apply(this,arguments)}}();return f?Object(u.jsx)(o.a,{to:"/"}):Object(u.jsx)("div",{className:"row",children:Object(u.jsxs)("div",{className:"col-sm-10 col-md-8 mx-auto mt-5",children:[Object(u.jsx)("h3",{children:"Sign Up"}),Object(u.jsxs)(U.a,{onSubmit:N,children:[Object(u.jsxs)(U.a.Group,{controlId:"email",children:[Object(u.jsx)(U.a.Label,{children:"Email address"}),Object(u.jsx)(U.a.Control,{required:!0,type:"email",name:"email",value:r,placeholder:"Enter email",onChange:function(e){return l(e.target.value)}})]}),Object(u.jsxs)(U.a.Group,{controlId:"password",children:[Object(u.jsx)(U.a.Label,{children:"Password"}),Object(u.jsx)(U.a.Control,{required:!0,name:"password",value:b,type:"password",placeholder:"Password",onChange:function(e){return h(e.target.value)}})]}),Object(u.jsxs)(U.a.Group,{controlId:"passwordConfirmation",children:[Object(u.jsx)(U.a.Label,{children:"Password Confirmation"}),Object(u.jsx)(U.a.Control,{required:!0,name:"passwordConfirmation",value:p,type:"password",placeholder:"Confirm Password",onChange:function(e){return x(e.target.value)}})]}),Object(u.jsx)(L.a,{className:"mt-2",variant:"primary",type:"submit",children:"Submit"})]})]})})},D=function(e){var t=e.msgAlert,a=e.setUser,s=Object(n.useState)(""),c=Object(i.a)(s,2),r=c[0],l=c[1],j=Object(n.useState)(""),d=Object(i.a)(j,2),b=d[0],h=d[1],m=Object(n.useState)(!1),O=Object(i.a)(m,2),p=O[0],x=O[1],g=function(){var e=Object(S.a)(w.a.mark((function e(n){var s;return w.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n.preventDefault(),e.prev=1,e.next=4,A(r,b);case 4:s=e.sent,a(s.data.user),t({heading:"Sign In Success",message:"Welcome!",variant:"success"}),x(!0),e.next=15;break;case 10:e.prev=10,e.t0=e.catch(1),l(""),h(""),t({heading:"Sign In Failed with error: "+e.t0.message,message:"Failed to sign in. Check your email and password and try again.",variant:"danger"});case 15:case"end":return e.stop()}}),e,null,[[1,10]])})));return function(t){return e.apply(this,arguments)}}();return p?Object(u.jsx)(o.a,{to:"/"}):Object(u.jsx)("div",{className:"row",children:Object(u.jsxs)("div",{className:"col-sm-10 col-md-8 mx-auto mt-5",children:[Object(u.jsx)("h3",{children:"Sign In"}),Object(u.jsxs)(U.a,{onSubmit:g,children:[Object(u.jsxs)(U.a.Group,{controlId:"email",children:[Object(u.jsx)(U.a.Label,{children:"Email address"}),Object(u.jsx)(U.a.Control,{required:!0,type:"email",name:"email",value:r,placeholder:"Enter email",onChange:function(e){return l(e.target.value)}})]}),Object(u.jsxs)(U.a.Group,{controlId:"password",children:[Object(u.jsx)(U.a.Label,{children:"Password"}),Object(u.jsx)(U.a.Control,{required:!0,name:"password",value:b,type:"password",placeholder:"Password",onChange:function(e){return h(e.target.value)}})]}),Object(u.jsx)(L.a,{className:"mt-2",variant:"primary",type:"submit",children:"Submit"})]})]})})},G=function(e){var t=e.msgAlert,a=e.clearUser,s=e.user,c=Object(n.useState)(!1),r=Object(i.a)(c,2),l=r[0],j=r[1];return Object(n.useEffect)((function(){(function(){var e=Object(S.a)(w.a.mark((function e(){return w.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,I(s);case 2:t({heading:"Signed Out Successfully",message:"Come back soon!",variant:"success"}),a(),j(!0);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[]),!s||l?Object(u.jsx)(o.a,{to:"/"}):""},B=function(e){var t=e.msgAlert,a=e.user,s=Object(n.useState)(""),c=Object(i.a)(s,2),r=c[0],l=c[1],j=Object(n.useState)(""),d=Object(i.a)(j,2),b=d[0],h=d[1],m=Object(n.useState)(!1),O=Object(i.a)(m,2),p=O[0],x=O[1],g=function(){var e=Object(S.a)(w.a.mark((function e(n){return w.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n.preventDefault(),e.prev=1,e.next=4,E(r,b,a);case 4:t({heading:"Change Password Success",message:"Password changed successfully!",variant:"success"}),x(!0),e.next=13;break;case 8:e.prev=8,e.t0=e.catch(1),l(""),h(""),t({heading:"Change Password Failed with error: "+e.t0.message,message:"Failed to change passwords. Check your old password and try again.",variant:"danger"});case 13:case"end":return e.stop()}}),e,null,[[1,8]])})));return function(t){return e.apply(this,arguments)}}();return!a||p?Object(u.jsx)(o.a,{to:"/"}):Object(u.jsx)("div",{className:"row",children:Object(u.jsxs)("div",{className:"col-sm-10 col-md-8 mx-auto mt-5",children:[Object(u.jsx)("h3",{children:"Change Password"}),Object(u.jsxs)(U.a,{onSubmit:g,children:[Object(u.jsxs)(U.a.Group,{controlId:"oldPassword",children:[Object(u.jsx)(U.a.Label,{children:"Old password"}),Object(u.jsx)(U.a.Control,{required:!0,name:"oldPassword",value:r,type:"password",placeholder:"Old Password",onChange:function(e){return l(e.target.value)}})]}),Object(u.jsxs)(U.a.Group,{controlId:"newPassword",children:[Object(u.jsx)(U.a.Label,{children:"New Password"}),Object(u.jsx)(U.a.Control,{required:!0,name:"newPassword",value:b,type:"password",placeholder:"New Password",onChange:function(e){return h(e.target.value)}})]}),Object(u.jsx)(L.a,{className:"mt-2",variant:"primary",type:"submit",children:"Submit"})]})]})})},M=function(){return Object(u.jsx)("h4",{children:"Caloreator App"})},_=a(8),z=a(2),T=function(e){var t=e.user,a=(e.id,Object(n.useState)({type:"",name:"",description:"",photo:"",calories:"",fat:"",sugar:"",protein:"",carbs:""})),s=Object(i.a)(a,2),c=s[0],r=s[1],l=Object(n.useState)(!1),j=Object(i.a)(l,2),d=j[0],b=j[1],h=function(e){var t=e.target,a=t.name,n=t.value;r((function(e){return Object(z.a)(Object(z.a)({},e),{},Object(_.a)({},a,n))}))};return!t||d?Object(u.jsx)(o.a,{to:"/meals"}):Object(u.jsx)("div",{className:"container",children:Object(u.jsxs)("form",{onSubmit:function(e){!function(e,t){e.preventDefault(),F.a.post(C+"/meals",{meal:c},{headers:{Authorization:"Bearer ".concat(t.token)}}).then((function(e){console.log(e.data),b(!0)}))}(e,t)},action:"action_page.php",children:[Object(u.jsxs)("div",{className:"row",children:[Object(u.jsx)("div",{className:"col-25",children:Object(u.jsx)("label",{htmlFor:"fname",children:"Title:"})}),Object(u.jsx)("div",{className:"col-75",children:Object(u.jsx)("input",{type:"text",name:"type",value:c.type,onChange:h})})]}),Object(u.jsxs)("div",{className:"row",children:[Object(u.jsx)("div",{className:"col-25",children:Object(u.jsx)("label",{htmlFor:"author",children:"Author:"})}),Object(u.jsx)("div",{className:"col-75",children:Object(u.jsx)("input",{type:"text",name:"name",value:c.name,onChange:h})})]}),Object(u.jsxs)("div",{className:"row",children:[Object(u.jsx)("div",{className:"col-25",children:Object(u.jsx)("label",{htmlFor:"img_url",children:"Image Link:"})}),Object(u.jsx)("div",{className:"col-75",children:Object(u.jsx)("input",{type:"text",name:"photo",value:c.photo,onChange:h})})]}),Object(u.jsxs)("div",{className:"row",children:[Object(u.jsx)("div",{className:"col-25",children:Object(u.jsx)("label",{htmlFor:"subject",children:"Description:"})}),Object(u.jsx)("div",{className:"col-75",children:Object(u.jsx)("textarea",{name:"description",style:{height:"200px"},value:c.description,onChange:h})})]}),Object(u.jsx)("div",{className:"row",children:Object(u.jsx)("input",{type:"submit",value:"Submit"})})]})})},H=function(e){var t=e.user,a=Object(n.useState)([]),s=Object(i.a)(a,2),c=s[0],r=s[1];Object(n.useEffect)((function(){return F.a.get("".concat(C,"/meals"),{headers:{Authorization:"Bearer ".concat(t.token)}}).then((function(e){r(e.data.meals)})).catch(console.error)}),[]);var o=c.map((function(e){return Object(u.jsxs)("li",{children:[Object(u.jsx)(O.b,{to:"/meals/".concat(e._id),children:Object(u.jsx)("h6",{children:e.type})}),Object(u.jsx)("p",{children:e.name})]},e._id)}));return Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)("h3",{children:"Meals:"}),Object(u.jsx)("ul",{children:o})]})},J=function(){var e=Object(n.useState)({type:"",name:"",description:"",photo:"",calories:"",fat:"",sugar:"",protein:"",carbs:""}),t=Object(i.a)(e,2),a=t[0],s=t[1],c=Object(n.useState)(!1),r=Object(i.a)(c,2),l=r[0],j=r[1],d=Object(o.h)().id;Object(n.useEffect)((function(){F.a.get("".concat(C,"/books/").concat(d)).then((function(e){return s(e.data.book)})).catch(console.error)}),[]);return l?Object(u.jsx)(o.a,{to:"/books/".concat(d)}):Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)("h3",{children:"Meals:"}),Object(u.jsx)("ul",{children:H}),"handleChange=",function(e){console.log(e.target.name,e.target.value),s((function(t){return Object(z.a)(Object(z.a)({},t),{},Object(_.a)({},e.target.name,e.target.value))}))},"handleSubmit=",function(e){e.preventDefault(),F.a.patch("".concat(C,"/meals/").concat(d),{meal:a}).then((function(){return j(!0)})).catch(console.error)}]})},W=function(){var e=Object(n.useState)(null),t=Object(i.a)(e,2),a=t[0],s=t[1],c=Object(n.useState)([]),j=Object(i.a)(c,2),b=j[0],h=j[1],m=function(e){var t=e.heading,a=e.message,n=e.variant,s=Object(l.a)();h((function(e){return[].concat(Object(r.a)(e),[{heading:t,message:a,variant:n,id:s}])}))};return Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)(v,{user:a}),b.map((function(e){return Object(u.jsx)(d,{heading:e.heading,variant:e.variant,message:e.message,id:e.id},e.id)})),Object(u.jsx)("main",{className:"container",children:Object(u.jsxs)(o.d,{children:[Object(u.jsx)(o.b,{path:"/sign-up",element:Object(u.jsx)(q,{msgAlert:m,setUser:s})}),Object(u.jsx)(o.b,{path:"/sign-in",element:Object(u.jsx)(D,{msgAlert:m,setUser:s})}),Object(u.jsx)(o.b,{path:"/sign-out",element:Object(u.jsx)(G,{msgAlert:m,clearUser:function(){return s(null)},user:a})}),Object(u.jsx)(o.b,{path:"/change-password",element:Object(u.jsx)(B,{msgAlert:m,user:a})}),Object(u.jsx)(o.b,{path:"/",element:Object(u.jsx)(M,{})}),Object(u.jsx)(o.b,{path:"/meal",element:Object(u.jsx)(T,{user:a})}),Object(u.jsx)(o.b,{path:"/meals",element:Object(u.jsx)(H,{user:a})}),Object(u.jsx)(o.b,{path:"/meals/:id",element:Object(u.jsx)(J,{user:a})})]})})]})},R=Object(u.jsx)(O.a,{basename:"/Caloreator-Project4-Frontend",children:Object(u.jsx)(W,{})});c.a.render(R,document.getElementById("root"))}},[[96,1,2]]]);
//# sourceMappingURL=main.c73592d4.chunk.js.map