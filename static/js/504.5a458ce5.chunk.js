"use strict";(self.webpackChunkconnectify=self.webpackChunkconnectify||[]).push([[504],{4504:function(e,n,r){r.r(n),r.d(n,{default:function(){return _}});var s=r(364),o=(r(2791),{dialogs:"Dialogs_dialogs__XA5+i",dialogsItems:"Dialogs_dialogsItems__lTy72",active:"Dialogs_active__INhAe",messages:"Dialogs_messages__6xVuw",message:"Dialogs_message__vJ8In"}),t=r(184),a=function(e){return(0,t.jsx)("div",{className:o.dialog,children:e.message})},i=r(1523),u=function(e){var n="/dialogs/"+e.id;return(0,t.jsx)("div",{className:o.dialog+" "+o.active,children:(0,t.jsx)(i.OL,{to:n,children:e.name})})},c=r(6139),l=r(704),d=r(4254),m=r(169),g=(0,m.D)(50),f=(0,l.Z)({form:"dialogsForm"})((function(e){return(0,t.jsx)("form",{onSubmit:e.handleSubmit,children:(0,t.jsxs)("div",{children:[(0,t.jsx)(c.Z,{component:d.gx,placeholder:"Enter your Message",name:"newMessageBody",validate:[m.C,g]}),(0,t.jsx)("button",{children:"Send"})]})})})),h=function(e){var n=e.sendMessage,r=e.dialogsPage,s=r.dialogs,i=r.messages,c=(r.newMessageBody,s.map((function(e){return(0,t.jsx)(u,{name:e.name,id:e.id},e.id)}))),l=i.map((function(e){return(0,t.jsx)(a,{message:e.message},e.id)}));return(0,t.jsxs)("div",{className:o.dialogs,children:[(0,t.jsx)("div",{className:o.dialogsItems,children:c}),(0,t.jsx)("div",{className:o.messages,children:(0,t.jsx)("div",{children:l})}),(0,t.jsx)(f,{onSubmit:function(e){n(e.newMessageBody)}})]})},v=r(7781),x=r(2932),j=r(1304),_=(0,v.qC)((0,s.$j)((function(e){return{dialogsPage:e.dialogsPage}}),(function(e){return{updateNewMessageBody:function(n){e(function(e){return{type:j.dB,body:e}}(n))},sendMessage:function(n){e(function(e){return{type:j.Hu,newMessageBody:e}}(n))}}})),x.D)(h)},4254:function(e,n,r){r.d(n,{gx:function(){return l},II:function(){return d},Gr:function(){return m}});var s=r(8683),o=r(5987),t=(r(2791),r(6139)),a=r(7851),i=r(184),u=["input","meta","FormType"],c=function(e){var n=e.input,r=e.meta,t=e.FormType,c=(0,o.Z)(e,u),l=r.touched&&r.error,d="".concat(a.Z.formControl," ").concat(l?a.Z.error:"");return(0,i.jsxs)("div",{className:d,children:[(0,i.jsx)(t,(0,s.Z)((0,s.Z)({},n),c)),l&&(0,i.jsx)("div",{className:a.Z.errorMessage,children:r.error})]})},l=function(e){var n=Object.assign({},e);return(0,i.jsx)(c,(0,s.Z)((0,s.Z)({},n),{},{FormType:"textarea"}))},d=function(e){var n=Object.assign({},e);return(0,i.jsx)(c,(0,s.Z)((0,s.Z)({},n),{},{FormType:"input"}))};function m(e,n,r,o,u){var c=arguments.length>5&&void 0!==arguments[5]?arguments[5]:"";return(0,i.jsxs)("div",{className:a.Z.createFieldRoot,children:[(0,i.jsx)(t.Z,(0,s.Z)({placeholder:e,name:n,validate:r,component:o,className:null===u||void 0===u?void 0:u.className},u))," ",(0,i.jsxs)("label",{className:a.Z.createFieldText,children:[" ",c," "]})]})}},2932:function(e,n,r){r.d(n,{D:function(){return l}});var s=r(8683),o=r(5987),t=(r(2791),r(9271)),a=r(364),i=r(184),u=["isAuth"],c=function(e){return{isAuth:e.auth.isAuth}};function l(e){return(0,a.$j)(c)((function(n){var r=n.isAuth,a=(0,o.Z)(n,u);return r?(0,i.jsx)(e,(0,s.Z)({},a)):(0,i.jsx)(t.l_,{to:"/login"})}))}},169:function(e,n,r){r.d(n,{C:function(){return s},D:function(){return o}});var s=function(e){return e?void 0:"error message"},o=function(e){return function(n){if(n.length>e)return"Max length is ".concat(e," symbols")}}},7851:function(e,n){n.Z={formControl:"FormsControls_formControl__KaVHj",error:"FormsControls_error__VuK27",errorMessage:"FormsControls_errorMessage__KVrex",formSummaryError:"FormsControls_formSummaryError__FRBhk"}}}]);
//# sourceMappingURL=504.5a458ce5.chunk.js.map