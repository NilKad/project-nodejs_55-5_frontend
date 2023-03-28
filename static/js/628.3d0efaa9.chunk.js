"use strict";(self.webpackChunkpet_support_project=self.webpackChunkpet_support_project||[]).push([[628],{19272:function(n,e,i){var o=i(8007),r=o.Ry().shape({email:o.Z_().matches(/^\s*\S+\s*$/,"Email must be without spaces").matches(/\S{7,}/,"Email too short (min 7 symbols)").matches(/^(?=.{7,63}$)([^\u0430-\u044f\u0410-\u042f]+@([a-zA-Z]+\.)+[a-zA-z]{2,3})$/g,"Invalid email").matches(/^[^-]+((.*[^-]))*@([a-zA-Z]+\.)+[a-zA-z]{2,3}$/g,"Dashes should only be inside email").required("Require field"),password:o.Z_().min(7,"Password too short (min 7)").max(32,"Password too long (max 32)").matches(/^\s*\S+\s*$/,"Password must be without spaces").required("Require field"),confirmPassword:o.Z_().oneOf([o.iH("password")],"Password must match").required("Require field"),name:o.Z_().matches(/\S{2,}/,"Name too short (min 2)").matches(/((\s*[a-zA-Z]+\s*){2,}|[a-zA-Z]{2,})/,"Name must includes only Latin alphabet").required("Require field"),phone:o.Z_().matches(/^\+380\d{9}$/,"Invalid number. valid +38(0xx) xxx-xx-xx").required("Require field"),location:o.Z_().matches(/^(\s*[a-zA-Z-]{2,}(?!,)\s*|\s*[a-zA-Z-]{2,},\s+([a-zA-Z-]+\s*)+\s*)$/,"Invalid format. valid: city or city, region").required("Require field")}),a=o.Ry().shape({email:o.Z_().matches(/^\s*\S+\s*$/,"Email must be without spaces").matches(/\S{7,}/,"Email too short (min 7 symbols)").matches(/^(?=.{7,63}$)([^\u0430-\u044f\u0410-\u042f]+@([a-zA-Z]+\.)+[a-zA-z]{2,3})$/g,"Invalid email").matches(/^[^-]+((.*[^-]))*@([a-zA-Z]+\.)+[a-zA-z]{2,3}$/g,"Dashes should only be inside email").required("Require"),password:o.Z_().min(7,"Password too short (min 7)").max(32,"Password too long (max 32)").matches(/^\s*\S+\s*$/,"Password must be without spaces").required("Require")}),t=o.Ry().shape({category:o.Z_().required("Categori is Required!"),title:o.Z_().min(2,"Too Short!").max(48,"Too Long!").required("Title is Required!"),name:o.Z_().min(2,"Too Short!").max(16,"Too Long!").required("Name is Required!"),birthday:o.hT().required("BirthDay is Required!"),breed:o.Z_().min(2,"Too Short!").max(34,"Too Long!").required("Breed is Required!")}),s=o.Ry().shape({sex:o.Z_().required("Sex is Required!"),location:o.Z_().required("Location is Required!"),imageUrl:o.nK().required("Image is Required!"),comments:o.Z_().min(8,"Too Short!").max(120,"Too Long!").required("Comments are Required!")}),d=s.concat(o.Ry().shape({price:o.Rx().moreThan("0").positive().integer().required("Price is Required!")})),l={registerSchema:r,schemasLogin:a,noticeSchemaFirst:t,noticeSchemaSecond:s,noticeSchemaSecondPrice:d,addPetsUser:o.Ry().shape({name:o.Z_().min(2,"Too Short!").max(16,"Too Long!").required("Name is Required!"),birthday:o.hT().required("BirthDay is Required!"),breed:o.Z_().min(2,"Too Short!").max(16,"Too Long!").required("Breed is Required!"),imageUrl:o.nK(),comments:o.Z_().min(8,"Too Short!").max(120,"Too Long!").required("Comments are Required!")})};e.Z=l},61628:function(n,e,i){i.r(e),i.d(e,{default:function(){return D}});var o,r,a,t,s,d,l,m,p,h,c=i(29439),u=i(72791),x=i(78687),g=i(55705),b=i(70828),f=i(19272),w=i(30168),Z=i(16444),q=i(11087),v=i(8126),y=i(42349),R=i(67478),j=i(77051),S=Z.ZP.div(o||(o=(0,w.Z)(["\n  width: 100%;\n  @media screen and (min-width: 768px) {\n    padding-top: 170px;\n  }\n  @media screen and (min-width: 1280px) {\n    padding-top: 50px;\n  }\n"]))),z=Z.ZP.h1(r||(r=(0,w.Z)(["\n  font-size: 24px;\n  font-weight: 700;\n  margin-bottom: 40px;\n  margin-top: 0;\n  @media screen and (min-width: 768px) {\n    font-size: 36px;\n    font-weight: 500;\n  }\n"]))),P=(0,Z.ZP)(g.l0)(a||(a=(0,w.Z)(["\n  position: relative;\n  width: 280px;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  padding-top: 44px;\n  padding-bottom: 40px;\n  margin: 0 auto;\n  @media screen and (min-width: 768px) {\n    width: 608px;\n    height: 492px;\n    margin: 0 auto;\n    padding: 60px 0 40px 0;\n    background-color: ",";\n    border-radius: 40px;\n    -webkit-box-shadow: 7px 4px 14px 0px rgba(0, 0, 0, 0.11);\n    -moz-box-shadow: 7px 4px 14px 0px rgba(0, 0, 0, 0.11);\n    box-shadow: 7px 4px 14px 0px rgba(0, 0, 0, 0.11);\n  }\n  @media screen and (min-width: 1280px) {\n    width: 618px;\n    padding: 60px 0 60px 0;\n  }\n  > div {\n    position: relative;\n  }\n"])),v.$.colors.white),_=Z.ZP.span(t||(t=(0,w.Z)(["\n  display: inline-block;\n  position: absolute;\n  width: 20px;\n  height: 20px;\n  right: 15px;\n  top: 50%;\n  transform: translateY(-80%);\n  color: grey;\n  cursor: pointer;\n  svg {\n    width: inherit;\n    height: inherit;\n  }\n"]))),L=Z.ZP.input(s||(s=(0,w.Z)(["\n  width: 280px;\n  font-size: 14px;\n  line-height: 1.3;\n  padding: 11px 0 12px 14px;\n  background: ",";\n  border: 1px solid rgba(245, 146, 86, 0.5);\n  border-radius: 40px;\n  margin-bottom: 16px;\n\n  &:focus,\n  &:hover {\n    border-color: ",";\n    outline: none;\n  }\n  @media screen and (min-width: 768px) {\n    width: 448px;\n    font-size: 18px;\n    padding: 14px 0 13px 32px;\n  }\n  @media screen and (min-width: 1280px) {\n    width: 458px;\n  }\n"])),v.$.colors.mainBg,v.$.colors.orange),$=Z.ZP.button(d||(d=(0,w.Z)(["\n  width: 100%;\n  padding: 11px 0 12px 14px;\n  text-align: center;\n  color: ",";\n  background: ",";\n  border: 1px solid rgba(245, 146, 86, 0.5);\n  border-radius: 40px;\n  margin: 24px 0 40px 0;\n  transform: scale(1);\n  transition: transform 0.5s;\n  cursor: pointer;\n  position: relative;\n  overflow-x: hidden;\n  overflow-y: hidden;\n  :hover,\n  :focus {\n    transform: scale(1.05);\n    transition: transform 0.5s;\n  }\n  :hover:before {\n    left: 100%;\n  }\n  :before {\n    content: '';\n    position: absolute;\n    top: 0;\n    left: -100%;\n    width: 100%;\n    height: 100%;\n    background: ",";\n    transition: all 450ms;\n  }\n  :disabled {\n    opacity: 0.5;\n    cursor: auto;\n    transform: none;\n    transition: none;\n  }\n  :disabled:before {\n    transform: none;\n    transition: none;\n  }\n  @media screen and (min-width: 768px) {\n    width: 458px;\n    font-size: 20px;\n  }\n"])),v.$.colors.white,v.$.colors.orangeLight,v.$.colors.orangeLight),T=Z.ZP.div(l||(l=(0,w.Z)(["\n  position: absolute;\n  white-space: nowrap;\n  bottom: 0px;\n  left: 15px;\n  color: #e53e3e;\n  font-family: 'Manrope';\n  font-size: 12px;\n  font-style: normal;\n  line-height: 1.4;\n  letter-spacing: 0.03em;\n  @media screen and (min-width: 768px) {\n    left: 32px;\n  }\n"]))),k=(0,Z.ZP)(q.rU)(m||(m=(0,w.Z)(["\n  color: ",";\n  margin-left: 4px;\n  :hover,\n  :focus {\n    color: ",";\n  }\n"])),v.$.colors.blue,v.$.colors.orangeLight),A=Z.ZP.div(p||(p=(0,w.Z)(["\n  font-family: 'Manrope';\n  font-style: normal;\n  font-weight: 400;\n  font-size: 12px;\n  line-height: 16px;\n  display: flex;\n  align-items: center;\n  text-align: center;\n  letter-spacing: 0.04em;\n  color: rgba(17, 17, 17, 0.6);\n"]))),C=Z.ZP.div(h||(h=(0,w.Z)(["\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  z-index: -100;\n  background-image: url(",");\n  background-position: center bottom;\n  background-size: contain;\n  background-repeat: no-repeat;\n  height: 100vh;\n  @media screen and (min-width: 768px) {\n    background-image: url(",");\n  }\n  @media screen and (min-width: 1280px) {\n    background-image: url(",");\n  }\n"])),y,R,j),B=i(69273),I=i(80184),E=function(){var n=(0,u.useState)(!0),e=(0,c.Z)(n,2),i=e[0],o=e[1],r=(0,u.useState)(!1),a=(0,c.Z)(r,2),t=a[0],s=a[1],d=(0,x.I0)(),l=(0,g.TA)({initialValues:{email:"",password:""},validationSchema:f.Z.schemasLogin,onSubmit:function(n){var e=n.email,i=n.password;d((0,B.Ib)({email:e,password:i}),void o(!0))}}),m=!!(l.errors.email&&l.touched.email||l.errors.password&&l.touched.password||""===l.values.email);return(0,I.jsx)(I.Fragment,{children:(0,I.jsxs)(S,{children:[(0,I.jsx)(g.J9,{validationSchema:f.Z.schemasLogin,children:(0,I.jsxs)(P,{onSubmit:l.handleSubmit,autoComplete:"off",children:[(0,I.jsx)(z,{children:"Login"}),i&&(0,I.jsx)(I.Fragment,{children:(0,I.jsxs)("div",{children:[(0,I.jsx)(L,{name:"email",type:"email",placeholder:"Email",validate:f.Z.schemasLogin.email,onChange:l.handleChange,value:l.values.email,onBlur:l.handleBlur}),l.errors.email||l.touched.email?(0,I.jsx)(T,{children:l.errors.email}):null]})}),i&&(0,I.jsx)(I.Fragment,{children:(0,I.jsxs)("div",{children:[(0,I.jsx)(L,{name:"password",type:t?"text":"password",placeholder:"Password",onChange:l.handleChange,value:l.values.password,onBlur:l.handleBlur}),(0,I.jsx)(_,{onClick:function(){s(!t)},children:t?(0,I.jsx)(b.bt0,{}):(0,I.jsx)(b.RF8,{})}),l.errors.password&&l.touched.password?(0,I.jsx)(T,{children:l.errors.password}):null]})}),i&&(0,I.jsx)($,{type:"submit",disabled:m,children:"Login"}),!i&&(0,I.jsx)($,{type:"submit",children:"Login"}),(0,I.jsxs)(A,{children:[(0,I.jsx)("span",{children:"Already have an account?"})," ",(0,I.jsx)(k,{to:"/register",children:"Register"})]})]})}),(0,I.jsx)(C,{})]})})},F=i(6907),D=function(){return(0,I.jsxs)("div",{children:[(0,I.jsx)(F.ql,{children:(0,I.jsx)("title",{children:"Log in"})}),(0,I.jsx)(E,{})]})}},77051:function(n,e,i){n.exports=i.p+"static/media/bg-register-desktop.264f6a19130fa42a992f.png"},42349:function(n,e,i){n.exports=i.p+"static/media/bg-register-mobile.3a526b154ba37c216a7a.png"},67478:function(n,e,i){n.exports=i.p+"static/media/bg-register-tablet.fc5f3af2953a94786376.png"}}]);
//# sourceMappingURL=628.3d0efaa9.chunk.js.map