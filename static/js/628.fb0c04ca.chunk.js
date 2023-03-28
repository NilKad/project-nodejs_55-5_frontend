"use strict";(self.webpackChunkpet_support_project=self.webpackChunkpet_support_project||[]).push([[628],{19272:function(n,e,i){var r=i(8007),o=r.Ry().shape({email:r.Z_().matches(/^\s*\S+\s*$/,"Email must be without spaces").matches(/\S{7,}/,"Email too short (min 7 symbols)").matches(/^(?=.{7,63}$)([^\u0430-\u044f\u0410-\u042f]+@([a-zA-Z]+\.)+[a-zA-z]{2,3})$/g,"Invalid email").matches(/^[^-]+((.*[^-]))*@([a-zA-Z]+\.)+[a-zA-z]{2,3}$/g,"Dashes should only be inside email").required("Require field"),password:r.Z_().min(7,"Password too short (min 7)").max(32,"Password too long (max 32)").matches(/^\s*\S+\s*$/,"Password must be without spaces").required("Require field"),confirmPassword:r.Z_().oneOf([r.iH("password")],"Password must match").required("Require field"),name:r.Z_().matches(/\S{2,}/,"Name too short (min 2)").matches(/((\s*[a-zA-Z]+\s*){2,}|[a-zA-Z]{2,})/,"Name must includes only Latin alphabet").required("Require field"),phone:r.Z_().matches(/^\+380\d{9}$/,"Invalid number. valid +38(0xx) xxx-xx-xx").required("Require field"),location:r.Z_().matches(/(([A-Za-zsd&.-]){1,}, ([A-Za-zsd&,.-]){1,})/,"Invalid format. Example: Brovary, Kyiv ...").required("Require field")}),a=r.Ry().shape({email:r.Z_().matches(/^\s*\S+\s*$/,"Email must be without spaces").matches(/\S{7,}/,"Email too short (min 7 symbols)").matches(/^(?=.{7,63}$)([^\u0430-\u044f\u0410-\u042f]+@([a-zA-Z]+\.)+[a-zA-z]{2,3})$/g,"Invalid email").matches(/^[^-]+((.*[^-]))*@([a-zA-Z]+\.)+[a-zA-z]{2,3}$/g,"Dashes should only be inside email").required("Require"),password:r.Z_().min(7,"Password too short (min 7)").max(32,"Password too long (max 32)").matches(/^\s*\S+\s*$/,"Password must be without spaces").required("Require")}),t=r.Ry().shape({category:r.Z_().required("Categori is Required!"),title:r.Z_().min(2,"Too Short!").max(48,"Too Long!").required("Title is Required!"),name:r.Z_().min(2,"Too Short!").max(16,"Too Long!").required("Name is Required!"),birthday:r.hT().required("BirthDay is Required!"),breed:r.Z_().min(2,"Too Short!").max(34,"Too Long!").required("Breed is Required!")}),s=r.Ry().shape({sex:r.Z_().required("Sex is Required!"),location:r.Z_().matches(/(([A-Za-zsd&.-]){1,}, ([A-Za-zsd&,.-]){1,})/,"Invalid format. Example: Brovary, Kyiv ...").required("Location is Required!"),imageUrl:r.Z_().required("Image is Required!"),comments:r.Z_().min(8,"Too Short!").max(120,"Too Long!").required("Comments are Required!")}),d=s.concat(r.Ry().shape({price:r.Rx().moreThan("0").positive().integer().required("Price is Required!")})),l={registerSchema:o,schemasLogin:a,noticeSchemaFirst:t,noticeSchemaSecond:s,noticeSchemaSecondPrice:d,addPetsUser:r.Ry().shape({name:r.Z_().min(2,"Too Short!").max(16,"Too Long!").required("Name is Required!"),birthday:r.hT().required("BirthDay is Required!"),breed:r.Z_().min(2,"Too Short!").max(16,"Too Long!").required("Breed is Required!"),imageUrl:r.nK(),comments:r.Z_().min(8,"Too Short!").max(120,"Too Long!").required("Comments are Required!")})};e.Z=l},61628:function(n,e,i){i.r(e),i.d(e,{default:function(){return K}});var r,o,a,t,s,d,l,m,p,h,c,u=i(29439),x=i(72791),g=i(78687),b=i(55705),f=i(70828),w=i(19272),Z=i(8126),v=i(30168),q=i(16444),y=i(11087),R=i(56355),j=i(42349),S=i(67478),z=i(77051),_=q.ZP.div(r||(r=(0,v.Z)(["\n  width: 100%;\n  @media screen and (min-width: 768px) {\n    padding-top: 170px;\n  }\n  @media screen and (min-width: 1280px) {\n    padding-top: 50px;\n  }\n"]))),P=q.ZP.h1(o||(o=(0,v.Z)(["\n  font-size: 24px;\n  font-weight: 700;\n  margin-bottom: 40px;\n  margin-top: 0;\n  @media screen and (min-width: 768px) {\n    font-size: 36px;\n    font-weight: 500;\n  }\n"]))),$=(0,q.ZP)(R.l_A)(a||(a=(0,v.Z)(["\n  display: inline-block;\n  position: absolute;\n  width: 20px;\n  height: 20px;\n  right: 15px;\n  top: 50%;\n  transform: translateY(-80%);\n  color: grey;\n  cursor: pointer;\n  svg {\n    width: inherit;\n    height: inherit;\n  }\n"]))),k=(0,q.ZP)(R.aHS)(t||(t=(0,v.Z)(["\n  display: inline-block;\n  position: absolute;\n  width: 20px;\n  height: 20px;\n  right: 15px;\n  top: 50%;\n  transform: translateY(-80%);\n  color: grey;\n  cursor: pointer;\n  svg {\n    width: inherit;\n    height: inherit;\n  }\n"]))),L=(0,q.ZP)(b.l0)(s||(s=(0,v.Z)(["\n  position: relative;\n  width: 280px;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  padding-top: 44px;\n  padding-bottom: 40px;\n  margin: 0 auto;\n  @media screen and (min-width: 768px) {\n    width: 608px;\n    height: 492px;\n    margin: 0 auto;\n    padding: 60px 0 40px 0;\n    background-color: ",";\n    border-radius: 40px;\n    -webkit-box-shadow: 7px 4px 14px 0px rgba(0, 0, 0, 0.11);\n    -moz-box-shadow: 7px 4px 14px 0px rgba(0, 0, 0, 0.11);\n    box-shadow: 7px 4px 14px 0px rgba(0, 0, 0, 0.11);\n  }\n  @media screen and (min-width: 1280px) {\n    width: 618px;\n    padding: 60px 0 60px 0;\n  }\n  > div {\n    position: relative;\n  }\n"])),Z.$.colors.white),T=q.ZP.span(d||(d=(0,v.Z)(["\n  display: inline-block;\n  position: absolute;\n  width: 20px;\n  height: 20px;\n  right: 15px;\n  top: 50%;\n  transform: translateY(-80%);\n  color: grey;\n  cursor: pointer;\n  svg {\n    width: inherit;\n    height: inherit;\n  }\n"]))),A=q.ZP.input(l||(l=(0,v.Z)(["\n  width: 280px;\n  font-size: 14px;\n  line-height: 1.3;\n  padding: 11px 0 12px 14px;\n  background: ",";\n  border: 1px solid rgba(245, 146, 86, 0.5);\n  border-radius: 40px;\n  margin-bottom: 16px;\n\n  &:focus,\n  &:hover {\n    border-color: ",";\n    outline: none;\n  }\n  @media screen and (min-width: 768px) {\n    width: 448px;\n    font-size: 18px;\n    padding: 14px 0 13px 32px;\n  }\n  @media screen and (min-width: 1280px) {\n    width: 458px;\n  }\n"])),Z.$.colors.mainBg,Z.$.colors.orange),C=q.ZP.button(m||(m=(0,v.Z)(["\n  width: 100%;\n  padding: 11px 0 12px 14px;\n  text-align: center;\n  color: ",";\n  background: ",";\n  border: 1px solid rgba(245, 146, 86, 0.5);\n  border-radius: 40px;\n  margin: 24px 0 40px 0;\n  transform: scale(1);\n  transition: transform 0.5s;\n  cursor: pointer;\n  position: relative;\n  overflow-x: hidden;\n  overflow-y: hidden;\n  :hover,\n  :focus {\n    transform: scale(1.05);\n    transition: transform 0.5s;\n  }\n  :hover:before {\n    left: 100%;\n  }\n  :before {\n    content: '';\n    position: absolute;\n    top: 0;\n    left: -100%;\n    width: 100%;\n    height: 100%;\n    background: ",";\n    transition: all 450ms;\n  }\n  :disabled {\n    opacity: 0.5;\n    cursor: auto;\n    transform: none;\n    transition: none;\n  }\n  :disabled:before {\n    transform: none;\n    transition: none;\n  }\n  @media screen and (min-width: 768px) {\n    width: 458px;\n    font-size: 20px;\n  }\n"])),Z.$.colors.white,Z.$.colors.orangeLight,Z.$.colors.orangeLight),B=(0,q.ZP)(y.rU)(p||(p=(0,v.Z)(["\n  color: ",";\n  margin-left: 4px;\n  :hover,\n  :focus {\n    color: ",";\n  }\n"])),Z.$.colors.blue,Z.$.colors.orangeLight),E=q.ZP.div(h||(h=(0,v.Z)(["\n  font-family: 'Manrope';\n  font-style: normal;\n  font-weight: 400;\n  font-size: 12px;\n  line-height: 16px;\n  display: flex;\n  align-items: center;\n  text-align: center;\n  letter-spacing: 0.04em;\n  color: rgba(17, 17, 17, 0.6);\n"]))),I=q.ZP.div(c||(c=(0,v.Z)(["\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  z-index: -100;\n  background-image: url(",");\n  background-position: center bottom;\n  background-size: contain;\n  background-repeat: no-repeat;\n  height: 100vh;\n  @media screen and (min-width: 768px) {\n    background-image: url(",");\n  }\n  @media screen and (min-width: 1280px) {\n    background-image: url(",");\n  }\n"])),j,S,z),F=i(69273),D=i(80184),N=function(){var n=(0,x.useState)(!0),e=(0,u.Z)(n,2),i=e[0],r=e[1],o=(0,x.useState)(!1),a=(0,u.Z)(o,2),t=a[0],s=a[1],d=(0,g.I0)(),l=(0,b.TA)({initialValues:{email:"",password:""},validationSchema:w.Z.schemasLogin,onSubmit:function(n){var e=n.email,i=n.password;d((0,F.Ib)({email:e,password:i}),void r(!0))}}),m=!!(l.errors.email&&l.touched.email||l.errors.password&&l.touched.password||""===l.values.email),p=function(n,e){return n?e?"#E2001A":"#3CBC81":null};return(0,D.jsx)(D.Fragment,{children:(0,D.jsxs)(_,{children:[(0,D.jsx)(b.J9,{validationSchema:w.Z.schemasLogin,children:(0,D.jsxs)(L,{onSubmit:l.handleSubmit,autoComplete:"off",children:[(0,D.jsx)(P,{children:"Login"}),i&&(0,D.jsx)(D.Fragment,{children:(0,D.jsxs)("div",{children:[(0,D.jsx)(A,{style:{borderColor:p(l.values.email,l.errors.email)},name:"email",type:"email",placeholder:"Email",validate:w.Z.schemasLogin.email,onChange:l.handleChange,value:l.values.email,onBlur:l.handleBlur}),l.values.email?l.errors.email?(0,D.jsx)(k,{color:Z.$.colors.error}):(0,D.jsx)($,{color:Z.$.colors.success}):null]})}),i&&(0,D.jsx)(D.Fragment,{children:(0,D.jsxs)("div",{children:[(0,D.jsx)(A,{style:{borderColor:p(l.values.password,l.errors.password)},name:"password",type:t?"text":"password",placeholder:"Password",onChange:l.handleChange,value:l.values.password,onBlur:l.handleBlur}),(0,D.jsx)(T,{onClick:function(){s(!t)},children:t?(0,D.jsx)(f.bt0,{}):(0,D.jsx)(f.RF8,{})})]})}),i&&(0,D.jsx)(C,{type:"submit",disabled:m,children:"Login"}),!i&&(0,D.jsx)(C,{type:"submit",children:"Login"}),(0,D.jsxs)(E,{children:[(0,D.jsx)("span",{children:"Already have an account?"})," ",(0,D.jsx)(B,{to:"/register",children:"Register"})]})]})}),(0,D.jsx)(I,{})]})})},U=i(6907),K=function(){return(0,D.jsxs)("div",{children:[(0,D.jsx)(U.ql,{children:(0,D.jsx)("title",{children:"Log in"})}),(0,D.jsx)(N,{})]})}},77051:function(n,e,i){n.exports=i.p+"static/media/bg-register-desktop.264f6a19130fa42a992f.png"},42349:function(n,e,i){n.exports=i.p+"static/media/bg-register-mobile.3a526b154ba37c216a7a.png"},67478:function(n,e,i){n.exports=i.p+"static/media/bg-register-tablet.fc5f3af2953a94786376.png"}}]);
//# sourceMappingURL=628.fb0c04ca.chunk.js.map