"use strict";(self.webpackChunkpet_support_project=self.webpackChunkpet_support_project||[]).push([[649],{19272:function(n,e,o){var r=o(8007),i=r.Ry().shape({email:r.Z_().matches(/^\s*\S+\s*$/,"Email must be without spaces").matches(/\S{7,}/,"Email too short (min 7 symbols)").matches(/^(?=.{7,63}$)([^\u0430-\u044f\u0410-\u042f]+@([a-zA-Z]+\.)+[a-zA-z]{2,3})$/g,"Invalid email").matches(/^[^-]+((.*[^-]))*@([a-zA-Z]+\.)+[a-zA-z]{2,3}$/g,"Dashes should only be inside email").required("Require field"),password:r.Z_().min(7,"Password too short (min 7)").max(32,"Password too long (max 32)").matches(/^\s*\S+\s*$/,"Password must be without spaces").required("Require field"),confirmPassword:r.Z_().oneOf([r.iH("password")],"Password must match").required("Require field"),name:r.Z_().matches(/\S{2,}/,"Name too short (min 2)").matches(/((\s*[a-zA-Z]+\s*){2,}|[a-zA-Z]{2,})/,"Name must includes only Latin alphabet").required("Require field"),phone:r.Z_().matches(/^\+380\d{9}$/,"Invalid number. valid +38(0xx) xxx-xx-xx").required("Require field"),location:r.Z_().matches(/^(\s*[a-zA-Z-]{2,}(?!,)\s*|\s*[a-zA-Z-]{2,},\s+([a-zA-Z-]+\s*)+\s*)$/,"Invalid format. valid: city or city, region").required("Require field")}),a=r.Ry().shape({email:r.Z_().matches(/^\s*\S+\s*$/,"Email must be without spaces").matches(/\S{7,}/,"Email too short (min 7 symbols)").matches(/^(?=.{7,63}$)([^\u0430-\u044f\u0410-\u042f]+@([a-zA-Z]+\.)+[a-zA-z]{2,3})$/g,"Invalid email").matches(/^[^-]+((.*[^-]))*@([a-zA-Z]+\.)+[a-zA-z]{2,3}$/g,"Dashes should only be inside email").required("Require"),password:r.Z_().min(7,"Password too short (min 7)").max(32,"Password too long (max 32)").matches(/^\s*\S+\s*$/,"Password must be without spaces").required("Require")}),s=r.Ry().shape({category:r.Z_().required("Categori is Required!"),title:r.Z_().min(2,"Too Short!").max(48,"Too Long!").required("Title is Required!"),name:r.Z_().min(2,"Too Short!").max(16,"Too Long!").required("Name is Required!"),birthday:r.hT().required("BirthDay is Required!"),breed:r.Z_().min(2,"Too Short!").max(34,"Too Long!").required("Breed is Required!")}),t=r.Ry().shape({sex:r.Z_().required("Sex is Required!"),location:r.Z_().required("Location is Required!"),imageUrl:r.nK().required("Image is Required!"),comments:r.Z_().min(8,"Too Short!").max(120,"Too Long!").required("Comments are Required!")}),d=t.concat(r.Ry().shape({price:r.Rx().moreThan("0").positive().integer().required("Price is Required!")})),l={registerSchema:i,schemasLogin:a,noticeSchemaFirst:s,noticeSchemaSecond:t,noticeSchemaSecondPrice:d,addPetsUser:r.Ry().shape({name:r.Z_().min(2,"Too Short!").max(16,"Too Long!").required("Name is Required!"),birthday:r.hT().required("BirthDay is Required!"),breed:r.Z_().min(2,"Too Short!").max(16,"Too Long!").required("Breed is Required!"),imageUrl:r.nK(),comments:r.Z_().min(8,"Too Short!").max(120,"Too Long!").required("Comments are Required!")})};e.Z=l},32649:function(n,e,o){o.r(e),o.d(e,{default:function(){return K}});var r,i,a,s,t,d,l,h,c,m,p,x,u,g=o(29439),f=o(72791),b=o(78687),w=o(55705),v=o(70828),Z=o(56355),j=o(19272),q=o(69273),y=o(30168),P=o(16444),R=o(11087),S=o(8126),z=o(42349),k=o(67478),C=o(77051),$=P.ZP.div(r||(r=(0,y.Z)(["\n  width: 100%;\n  @media(min-width: 767px) and (max-width: 1279px) {\n    padding-top: 168px;\n  }\n\n  @media screen and (min-width: 1280px) {\n    padding-top: 44px;\n  }\n"]))),_=P.ZP.h1(i||(i=(0,y.Z)(["\n  font-size: 24px;\n  font-weight: 700;\n  margin-bottom: 40px;\n  margin-top: 0;\n  @media screen and (min-width: 768px) {\n    font-size: 36px;\n    font-weight: 500;\n  }\n"]))),B=(0,P.ZP)(w.l0)(a||(a=(0,y.Z)(["\n  position: relative;\n  width: 280px;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  padding-top: 44px;\n  padding-bottom: 40px;\n  margin: 0 auto;\n  @media screen and (min-width: 768px) {\n    width: 608px;\n    margin: 0 auto;\n    padding: 60px 0 40px 0;\n    background-color: ",";\n    border-radius: 40px;\n    -webkit-box-shadow: 7px 4px 14px 0px rgba(0, 0, 0, 0.11);\n    -moz-box-shadow: 7px 4px 14px 0px rgba(0, 0, 0, 0.11);\n    box-shadow: 7px 4px 14px 0px rgba(0, 0, 0, 0.11);\n  }\n  @media screen and (min-width: 1280px) {\n    width: 618px;\n    padding: 60px 0 60px 0;\n  }\n  > div {\n    position: relative;\n  }\n"])),S.$.colors.white),T=P.ZP.span(s||(s=(0,y.Z)(["\n  display: inline-block;\n  position: absolute;\n  width: 20px;\n  height: 20px;\n  right: 15px;\n  top: 50%;\n  transform: translateY(-80%);\n  color: grey;\n  cursor: pointer;\n  svg {\n    width: inherit;\n    height: inherit;\n  }\n"]))),L=(0,P.ZP)(w.gN)(t||(t=(0,y.Z)(["\n  width: 280px;\n  font-size: 14px;\n  line-height: 1.3;\n  padding: 11px 0 12px 14px;\n  background: ",";\n  border: 1px solid rgba(245, 146, 86, 0.5);\n  border-radius: 40px;\n  margin-bottom: 16px;\n  &:focus,\n  &:hover {\n    border-color: ",";\n    outline: none;\n  }\n  @media screen and (min-width: 768px) {\n    width: 448px;\n    font-size: 18px;\n    padding: 14px 0 13px 32px;\n  }\n  @media screen and (min-width: 1280px) {\n    width: 458px;\n  }\n"])),S.$.colors.mainBg,S.$.colors.orange),A=(P.ZP.div(d||(d=(0,y.Z)(["\n  width: 280px;\n  padding: 11px 0 12px 14px;\n  background: ",";\n  border: 1px solid rgba(245, 146, 86, 0.5);\n  border-radius: 40px;\n  margin-bottom: 16px;\n  &:focus,\n  &:hover {\n    border-color: ",";\n    outline: none;\n  }\n  @media screen and (min-width: 768px) {\n    width: 448px;\n    padding: 14px 0 13px 32px;\n    font-size: 18px;\n  }\n  @media screen and (min-width: 1280px) {\n    width: 458px;\n  }\n"])),S.$.colors.mainBg,S.$.colors.orange),P.ZP.button(l||(l=(0,y.Z)(["\n  width: 100%;\n  padding: 11px 0 12px 14px;\n  text-align: center;\n  color: ",";\n  background: ",";\n  border: 1px solid rgba(245, 146, 86, 0.5);\n  border-radius: 40px;\n  margin: 24px 0 40px 0;\n  transform: scale(1);\n  transition: transform 0.5s;\n  cursor: pointer;\n  position: relative;\n  overflow-x: hidden;\n  overflow-y: hidden;\n  :hover,\n  :focus {\n    transform: scale(1.05);\n    transition: transform 0.5s;\n  }\n  :hover:before {\n    left: 100%;\n  }\n  :before {\n    content: '';\n    position: absolute;\n    top: 0;\n    left: -100%;\n    width: 100%;\n    height: 100%;\n    background: ",";\n    transition: all 450ms;\n  }\n  :disabled {\n    opacity: 0.5;\n    cursor: auto;\n    transform: none;\n    transition: none;\n  }\n  :disabled:before {\n    transform: none;\n    transition: none;\n  }\n  @media screen and (min-width: 768px) {\n    width: 458px;\n    font-size: 20px;\n  }\n"])),S.$.colors.white,S.$.colors.orangeLight,S.$.colors.orangeLight)),F=P.ZP.button(h||(h=(0,y.Z)(["\n  width: 100%;\n  padding: 11px 0 12px 14px;\n  text-align: center;\n  color: #000;\n  background: ",";\n  border: 1px solid ",";\n  border-radius: 40px;\n  margin: -26px 0 40px 0;\n  cursor: pointer;\n  transform: scale(1);\n  transition: transform 0.5s;\n  overflow-x: hidden;\n  overflow-y: hidden;\n  :hover,\n  :focus {\n    transform: scale(1.05);\n    transition: transform 0.5s;\n  }\n  :hover:before {\n    left: 100%;\n  }\n  :before {\n    content: '';\n    position: absolute;\n    top: 0;\n    left: -100%;\n    width: 100%;\n    height: 100%;\n    background: ",";\n    transition: all 450ms;\n  }\n  @media screen and (min-width: 768px) {\n    width: 458px;\n    font-size: 20px;\n  }\n"])),S.$.colors.white,S.$.colors.orangeLight,S.$.colors.orangeLight),N=P.ZP.div(c||(c=(0,y.Z)(["\n  position: absolute;\n  white-space: nowrap;\n  bottom: 0px;\n  left: 15px;\n  color: #e53e3e;\n  font-family: 'Manrope';\n  font-size: 12px;\n  font-style: normal;\n  line-height: 1.4;\n  letter-spacing: 0.03em;\n  @media screen and (min-width: 768px) {\n    left: 32px;\n  }\n"]))),I=(0,P.ZP)(R.rU)(m||(m=(0,y.Z)(["\n  color: ",";\n  margin-left: 4px;\n  :hover,\n  :focus {\n    color: ",";\n  }\n"])),S.$.colors.blue,S.$.colors.orangeLight),E=P.ZP.div(p||(p=(0,y.Z)(["\n  font-family: 'Manrope';\n  font-style: normal;\n  font-weight: 400;\n  font-size: 12px;\n  line-height: 16px;\n  display: flex;\n  align-items: center;\n  text-align: center;\n  letter-spacing: 0.04em;\n\n  color: rgba(17, 17, 17, 0.6);\n"]))),D=P.ZP.div(x||(x=(0,y.Z)(["\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  z-index: -100;\n  background-image: url(",");\n  background-position: center bottom;\n  background-size: contain;\n  background-repeat: no-repeat;\n  height: 100vh;\n  @media screen and (min-width: 768px) {\n    background-image: url(",");\n  }\n  @media screen and (min-width: 1280px) {\n    background-image: url(",");\n  }\n"])),z,k,C),U=(P.ZP.div(u||(u=(0,y.Z)(["\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n"]))),o(80184)),M=function(){var n=(0,f.useState)(!0),e=(0,g.Z)(n,2),o=e[0],r=e[1],i=(0,f.useState)(!1),a=(0,g.Z)(i,2),s=a[0],t=a[1],d=(0,f.useState)(!1),l=(0,g.Z)(d,2),h=l[0],c=l[1],m=(0,b.I0)(),p=(0,w.TA)({initialValues:{name:"",email:"",password:"",confirmPassword:"",phone:"",location:""},validationSchema:j.Z.registerSchema,onSubmit:function(n,e){console.log("form values: ",n),function(n){var e=n.values;n.action,console.log("!!!!!!: ",e);var o=e.name,r=e.email,i=e.password,a=e.phone,s=e.location;m((0,q.z2)({userName:o,email:r,password:i,phone:a,location:s}))}({values:n,action:e})}}),x=!!(p.errors.email&&p.touched.email||p.errors.password&&p.touched.password||p.errors.confirmPassword&&p.touched.confirmPassword||""===p.values.email||""===p.values.confirmPassword);return(0,U.jsx)(U.Fragment,{children:(0,U.jsxs)($,{children:[(0,U.jsx)(w.J9,{validationSchema:j.Z.registerSchema,children:(0,U.jsxs)(B,{onSubmit:p.handleSubmit,autoComplete:"off",children:[" ",(0,U.jsx)(_,{children:"Register"}),o&&(0,U.jsx)(U.Fragment,{children:(0,U.jsxs)("div",{children:[(0,U.jsx)(L,{name:"email",type:"email",placeholder:"Email",validate:j.Z.registerSchema.email,onChange:p.handleChange,value:p.values.email,onBlur:p.handleBlur}),(0,U.jsxs)("div",{children:[(0,U.jsx)("input",{type:"text",value:p.values.email,validate:j.Z.registerSchema.email,onChange:p.handleChange,onBlur:p.handleBlur}),x?(0,U.jsx)(Z.l_A,{color:"green"}):(0,U.jsx)(Z.aHS,{color:"red"}),p.errors.email&&p.touched.email?(0,U.jsx)(N,{children:p.errors.email}):null]}),p.errors.email||p.touched.email?(0,U.jsx)(N,{children:p.errors.email}):null]})}),o&&(0,U.jsx)(U.Fragment,{children:(0,U.jsxs)("div",{children:[(0,U.jsx)(L,{name:"password",type:s?"text":"password",placeholder:"Password",onChange:p.handleChange,value:p.values.password,onBlur:p.handleBlur}),(0,U.jsx)(T,{onClick:function(){t(!s)},children:s?(0,U.jsx)(v.bt0,{}):(0,U.jsx)(v.RF8,{})}),p.errors.password&&p.touched.password?(0,U.jsx)(N,{children:p.errors.password}):null]})}),o&&(0,U.jsx)(U.Fragment,{children:(0,U.jsxs)("div",{children:[(0,U.jsx)(L,{name:"confirmPassword",type:h?"text":"password",placeholder:"Confirm Password",onChange:p.handleChange,value:p.values.confirmPassword,onBlur:p.handleBlur}),(0,U.jsx)(T,{onClick:function(){c(!h)},children:h?(0,U.jsx)(v.bt0,{}):(0,U.jsx)(v.RF8,{})}),p.errors.confirmPassword&&p.touched.confirmPassword?(0,U.jsx)(N,{children:p.errors.confirmPassword}):null]})}),o&&(0,U.jsx)(A,{type:"button",onClick:function(){r(!1)},disabled:x,children:"Next"}),!o&&(0,U.jsx)(U.Fragment,{children:(0,U.jsxs)("div",{children:[(0,U.jsx)(L,{name:"name",type:"text",placeholder:"Name",onChange:p.handleChange,value:p.values.name,onBlur:p.handleBlur}),p.errors.name&&p.touched.name?(0,U.jsx)(N,{children:p.errors.name}):null]})}),!o&&(0,U.jsx)(U.Fragment,{children:(0,U.jsxs)("div",{children:[(0,U.jsx)(L,{name:"location",type:"text",placeholder:"Location, region",onChange:p.handleChange,value:p.values.location,onBlur:p.handleBlur}),p.errors.location&&p.touched.location?(0,U.jsx)(N,{children:p.errors.location}):null]})}),!o&&(0,U.jsx)(U.Fragment,{children:(0,U.jsxs)("div",{children:[(0,U.jsx)(L,{id:"phone",type:"phone",placeholder:"Mobile phone",onChange:p.handleChange,value:p.values.phone,onBlur:p.handleBlur,name:"phone"}),p.errors.phone&&p.touched.phone?(0,U.jsx)(N,{children:p.errors.phone}):null]})}),!o&&(0,U.jsx)(A,{type:"submit",children:"Register"}),!o&&(0,U.jsx)(F,{type:"button",onClick:function(){r(!0)},children:"Back"}),(0,U.jsxs)(E,{children:[(0,U.jsx)("span",{children:"Already have an account?"})," ",(0,U.jsx)(I,{to:"/login",children:"Login"})]})]})}),(0,U.jsx)(D,{})]})})},H=o(6907),K=function(){return(0,U.jsxs)("div",{children:[(0,U.jsx)(H.ql,{children:(0,U.jsx)("title",{children:"Register"})}),(0,U.jsx)(M,{})]})}},77051:function(n,e,o){n.exports=o.p+"static/media/bg-register-desktop.264f6a19130fa42a992f.png"},42349:function(n,e,o){n.exports=o.p+"static/media/bg-register-mobile.3a526b154ba37c216a7a.png"},67478:function(n,e,o){n.exports=o.p+"static/media/bg-register-tablet.fc5f3af2953a94786376.png"}}]);
//# sourceMappingURL=649.c3722116.chunk.js.map