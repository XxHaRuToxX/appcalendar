(this["webpackJsonpcalendar-app"]=this["webpackJsonpcalendar-app"]||[]).push([[0],{121:function(e,t,n){},122:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n(8),c=n.n(r),o=n(9),s=n(27),i=n(65),l=n(5),u="[ui] Open modal",j="[ui] Close modal",d="[event] Set active",b="[event] Logout event",m="[event] Add new",O="[event] Clear active event",f="[event] Event updated",p="[event] Event deleted",v="[event] Events loaded",h="[Auth] Finish checking login state",x="[Auth] Login",g="[Auth] Logout",y={checking:!0},w=n(51),N={events:[],activeEvent:null},k={modalOpen:!1},E=Object(s.b)({ui:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:k,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case u:return Object(l.a)(Object(l.a)({},e),{},{modalOpen:!0});case j:return Object(l.a)(Object(l.a)({},e),{},{modalOpen:!1});default:return e}},calendar:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:N,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case d:return Object(l.a)(Object(l.a)({},e),{},{activeEvent:t.payload});case m:return Object(l.a)(Object(l.a)({},e),{},{events:[].concat(Object(w.a)(e.events),[t.payload])});case O:return Object(l.a)(Object(l.a)({},e),{},{activeEvent:null});case f:return Object(l.a)(Object(l.a)({},e),{},{events:e.events.map((function(e){return e.id===t.payload.id?t.payload:e}))});case p:return Object(l.a)(Object(l.a)({},e),{},{events:e.events.filter((function(t){return t.id!==e.activeEvent.id})),activeEvent:null});case v:return Object(l.a)(Object(l.a)({},e),{},{events:Object(w.a)(t.payload)});case b:return Object(l.a)({},N);default:return e}},auth:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:y,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case x:return Object(l.a)(Object(l.a)(Object(l.a)({},e),t.payload),{},{checking:!1});case h:return Object(l.a)(Object(l.a)({},e),{},{checking:!1});case g:return{checking:!1};default:return e}}}),S="undefined"!==typeof window&&window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||s.c,C=Object(s.d)(E,S(Object(s.a)(i.a))),T=n(22),A=n(10),D=n(12),P=n.n(D),I=n(21),M=n(18),L=n.n(M),_="https://backend-ehsj.herokuapp.com/api",R=function(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"GET",a="".concat(_,"/").concat(e);return"GET"===n?fetch(a):fetch(a,{method:n,headers:{"Content-type":"application/json"},body:JSON.stringify(t)})},G=function(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"GET",a="".concat(_,"/").concat(e),r=localStorage.getItem("token")||"";return"GET"===n?fetch(a,{method:n,headers:{"x-token":r}}):fetch(a,{method:n,headers:{"Content-type":"application/json","x-token":r},body:JSON.stringify(t)})},V=n(17),F=n.n(V),H=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];return e.map((function(e){return Object(l.a)(Object(l.a)({},e),{},{end:F()(e.end).toDate(),start:F()(e.start).toDate()})}))},J=function(e){return{type:m,payload:e}},U=function(){return{type:O}},B=function(e){return{type:f,payload:e}},X=function(){return{type:p}},q=function(e){return{type:v,payload:e}},z=function(){return{type:h}},K=function(e){return{type:x,payload:e}},Q=function(){return function(e){localStorage.clear(),e({type:b}),e(W())}},W=function(){return{type:g}},Y=n(15),Z=n(26),$=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=Object(a.useState)(e),n=Object(Y.a)(t,2),r=n[0],c=n[1],o=function(){c(e)},s=function(e){c(Object(l.a)(Object(l.a)({},r),{},Object(Z.a)({},e.target.name,e.target.value)))};return[r,s,o]},ee=(n(55),n(2)),te=function(){var e=Object(o.b)(),t=$({lEmail:"",lPassword:""}),n=Object(Y.a)(t,2),a=n[0],r=n[1],c=a.lEmail,s=a.lPassword;return Object(ee.jsx)("div",{className:"login-form-2-main",children:Object(ee.jsxs)("div",{className:"login-form-1",children:[Object(ee.jsx)("h3",{children:"Ingreso"}),Object(ee.jsxs)("form",{onSubmit:function(t){var n,a;t.preventDefault(),e((n=c,a=s,function(){var e=Object(I.a)(P.a.mark((function e(t){var r,c;return P.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,R("auth",{email:n,password:a},"POST");case 2:return r=e.sent,e.next=5,r.json();case 5:(c=e.sent).ok?(localStorage.setItem("token",c.token),localStorage.setItem("token-init-date",(new Date).getTime()),t(K({uid:c.uid,name:c.name}))):L.a.fire("Error",c.msg,"error");case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()))},children:[Object(ee.jsx)("div",{className:"form-group",children:Object(ee.jsx)("input",{type:"text",className:"form-control",placeholder:"Correo",onChange:r,name:"lEmail",value:c})}),Object(ee.jsx)("div",{className:"form-group",children:Object(ee.jsx)("input",{type:"password",className:"form-control",placeholder:"Contrase\xf1a",onChange:r,name:"lPassword",value:s})}),Object(ee.jsx)("div",{className:"form-group",children:Object(ee.jsx)("input",{type:"submit",className:"btnSubmit",value:"Login"})}),Object(ee.jsx)("div",{children:Object(ee.jsx)(T.b,{to:"/register",children:"Registrarse"})})]})]})})},ne=function(){var e=Object(o.b)(),t=$({rName:"",rEmail:"",rPasswordOne:"",rPasswordTwo:""}),n=Object(Y.a)(t,2),a=n[0],r=n[1],c=a.rName,s=a.rEmail,i=a.rPasswordOne,l=a.rPasswordTwo;return Object(ee.jsx)("div",{className:"login-form-2-main",children:Object(ee.jsxs)("div",{className:"login-form-2",children:[Object(ee.jsx)("h3",{children:"Registro"}),Object(ee.jsxs)("form",{onSubmit:function(t){if(t.preventDefault(),i!==l)return L.a.fire("Error","Las contrase\xf1as deben de ser iguales","error");var n,a,r;e((n=s,a=i,r=c,function(){var e=Object(I.a)(P.a.mark((function e(t){var c,o;return P.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,R("auth/new",{email:n,password:a,name:r},"POST");case 2:return c=e.sent,e.next=5,c.json();case 5:(o=e.sent).ok?(localStorage.setItem("token",o.token),localStorage.setItem("token-init-date",(new Date).getTime()),t(K({uid:o.uid,name:o.name}))):L.a.fire("Error",o.msg,"error");case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()))},children:[Object(ee.jsx)("div",{className:"form-group",children:Object(ee.jsx)("input",{type:"text",className:"form-control",placeholder:"Nombre",name:"rName",value:c,onChange:r})}),Object(ee.jsx)("div",{className:"form-group",children:Object(ee.jsx)("input",{type:"email",className:"form-control",placeholder:"Correo",name:"rEmail",value:s,onChange:r})}),Object(ee.jsx)("div",{className:"form-group",children:Object(ee.jsx)("input",{type:"password",className:"form-control",placeholder:"Contrase\xf1a",name:"rPasswordOne",value:i,onChange:r})}),Object(ee.jsx)("div",{className:"form-group",children:Object(ee.jsx)("input",{type:"password",className:"form-control",placeholder:"Repita la contrase\xf1a",name:"rPasswordTwo",value:l,onChange:r})}),Object(ee.jsx)("div",{className:"form-group",children:Object(ee.jsx)("input",{type:"submit",className:"btnSubmit",value:"Crear cuenta"})}),Object(ee.jsx)("div",{children:Object(ee.jsx)(T.b,{to:"/login",style:{color:"white"},children:"Loguearse"})})]})]})})},ae=n(50),re=function(){var e=Object(o.b)(),t=Object(o.c)((function(e){return e.auth})).name;return Object(ee.jsxs)("div",{className:"navbar navbar-dark bg-dark mb-4",children:[Object(ee.jsx)("span",{className:"navbar-brand",children:t}),Object(ee.jsxs)("button",{className:"btn btn-outline-danger",onClick:function(){e(Q())},children:[Object(ee.jsx)("i",{className:"fas fa-sign-out-alt"}),Object(ee.jsx)("span",{children:" Salir"})]})]})},ce={allDay:"Todo el d\xeda",previous:"<",next:">",today:"Hoy",month:"Mes",week:"Semana",day:"D\xeda",agenda:"Agenda",date:"Fecha",time:"Hora",event:"Evento",noEventsInRange:"No hay eventos en este rango",showMore:function(e){return"+ Ver m\xe1s (".concat(e,")")}},oe=function(e){var t=e.event,n=t.title,a=t.user;return Object(ee.jsxs)("div",{children:[Object(ee.jsx)("strong",{children:n}),Object(ee.jsxs)("span",{children:["- ",a.name]})]})},se=n(47),ie=n.n(se),le=n(48),ue=n.n(le),je=function(){return{type:u}},de={content:{top:"50%",left:"50%",right:"auto",bottom:"auto",marginRight:"-50%",transform:"translate(-50%, -50%)"}};ie.a.setAppElement("#root");var be=F()().minutes(0).seconds(0).add(1,"hours"),me=be.clone().add(1,"hours"),Oe={title:"",notes:"",start:be.toDate(),end:me.toDate()},fe=function(){var e=Object(o.c)((function(e){return e.ui})).modalOpen,t=Object(o.c)((function(e){return e.calendar})).activeEvent,n=Object(a.useState)(be.toDate()),r=Object(Y.a)(n,2),c=r[0],s=r[1],i=Object(a.useState)(me.toDate()),u=Object(Y.a)(i,2),d=u[0],b=u[1],m=Object(a.useState)(!0),O=Object(Y.a)(m,2),f=O[0],p=O[1],v=Object(o.b)(),h=Object(a.useState)(Oe),x=Object(Y.a)(h,2),g=x[0],y=x[1],w=g.title,N=g.notes,k=g.start,E=g.end;Object(a.useEffect)((function(){y(t||Oe)}),[t,y]);var S=function(e){var t=e.target;y(Object(l.a)(Object(l.a)({},g),{},Object(Z.a)({},t.name,t.value)))},C=function(){v({type:j}),v(U()),y(Oe)};return Object(ee.jsxs)(ie.a,{isOpen:e,onRequestClose:C,style:de,closeTimeoutMS:200,className:"modal",overlayClassName:"modal-fondo",children:[Object(ee.jsxs)("h1",{children:[" ",t?"Editar Evento":"Nuevo evento"," "]}),Object(ee.jsx)("hr",{}),Object(ee.jsxs)("form",{className:"container",onSubmit:function(e){e.preventDefault();var n,a=F()(k),r=F()(E);return a.isSameOrAfter(r)?L.a.fire("Error","La fecha fin debe ser mayor a la fecha de inicio","error"):w.trim().length<2?p(!1):(v(t?(n=g,function(){var e=Object(I.a)(P.a.mark((function e(t){var a,r;return P.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,G("events/".concat(n.id),n,"PUT");case 3:return a=e.sent,e.next=6,a.json();case 6:(r=e.sent).ok?t(B(n)):L.a.fire("Error",r.msg,"error"),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(0),console.log(e.t0);case 13:case"end":return e.stop()}}),e,null,[[0,10]])})));return function(t){return e.apply(this,arguments)}}()):function(e){return function(){var t=Object(I.a)(P.a.mark((function t(n,a){var r,c,o,s,i;return P.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r=a().auth,c=r.uid,o=r.name,t.prev=1,t.next=4,G("events",e,"POST");case 4:return s=t.sent,t.next=7,s.json();case 7:i=t.sent,console.log(i),i.ok&&(e.id=i.event.id,e.user={_id:c,name:o}),n(J(e)),t.next=16;break;case 13:t.prev=13,t.t0=t.catch(1),console.log(t.t0);case 16:case"end":return t.stop()}}),t,null,[[1,13]])})));return function(e,n){return t.apply(this,arguments)}}()}(g)),p(!0),void C())},children:[Object(ee.jsxs)("div",{className:"form-group",children:[Object(ee.jsx)("label",{children:"Fecha y hora inicio"}),Object(ee.jsx)(ue.a,{onChange:function(e){s(e),y(Object(l.a)(Object(l.a)({},g),{},{start:e}))},value:c,className:"form-control",format:"y-MM-dd h:mm:ss a",amPmArialLabel:"Select AM/PM"})]}),Object(ee.jsxs)("div",{className:"form-group",children:[Object(ee.jsx)("label",{children:"Fecha y hora fin"}),Object(ee.jsx)(ue.a,{onChange:function(e){b(e),y(Object(l.a)(Object(l.a)({},g),{},{end:e}))},value:d,className:"form-control",format:"y-MM-dd h:mm:ss a",amPmArialLabel:"Select AM/PM",minDate:c})]}),Object(ee.jsx)("hr",{}),Object(ee.jsxs)("div",{className:"form-group",children:[Object(ee.jsx)("label",{children:"Titulo y notas"}),Object(ee.jsx)("input",{type:"text",className:"form-control ".concat(!f&&"is-invalid"),placeholder:"T\xedtulo del evento",name:"title",value:w,autoComplete:"off",onChange:S}),Object(ee.jsx)("small",{id:"emailHelp",className:"form-text text-muted",children:"Una descripci\xf3n corta"})]}),Object(ee.jsxs)("div",{className:"form-group",children:[Object(ee.jsx)("textarea",{type:"text",className:"form-control",placeholder:"Notas",rows:"5",name:"notes",value:N,onChange:S}),Object(ee.jsx)("small",{id:"emailHelp",className:"form-text text-muted",children:"Informaci\xf3n adicional"})]}),Object(ee.jsxs)("button",{type:"submit",className:"btn btn-outline-primary btn-block",children:[Object(ee.jsx)("i",{className:"far fa-save"}),Object(ee.jsx)("span",{children:" Guardar"})]})]})]})},pe=(n(119),n(120),function(){var e=Object(o.b)();return Object(ee.jsx)("button",{className:"btn btn-primary fab",onClick:function(){e(je())},children:Object(ee.jsx)("i",{className:"fas fa-plus"})})}),ve=function(){var e=Object(o.b)();return Object(ee.jsxs)("button",{className:"btn btn-danger fab-danger",onClick:function(){e(function(){var e=Object(I.a)(P.a.mark((function e(t,n){var a,r,c;return P.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=n().calendar.activeEvent.id,e.prev=1,e.next=4,G("events/".concat(a),{},"DELETE");case 4:return r=e.sent,e.next=7,r.json();case 7:(c=e.sent).ok?t(X()):L.a.fire("Error",c.msg,"error"),e.next=14;break;case 11:e.prev=11,e.t0=e.catch(1),console.log(e.t0);case 14:case"end":return e.stop()}}),e,null,[[1,11]])})));return function(t,n){return e.apply(this,arguments)}}())},children:[Object(ee.jsx)("i",{className:"fas fa-trash"}),Object(ee.jsx)("span",{children:"Borrar evento"})]})};F.a.locale("es");var he=Object(ae.b)(F.a),xe=function(){var e=Object(a.useState)(localStorage.getItem("lastView")),t=Object(Y.a)(e,2),n=t[0],r=t[1],c=Object(o.b)(),s=Object(o.c)((function(e){return e.auth})).uid,i=Object(o.c)((function(e){return e.calendar})),l=i.events,u=i.activeEvent;Object(a.useEffect)((function(){c(function(){var e=Object(I.a)(P.a.mark((function e(t){var n,a,r;return P.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,G("events");case 3:return n=e.sent,e.next=6,n.json();case 6:a=e.sent,r=H(a.events),t(q(r)),e.next=14;break;case 11:e.prev=11,e.t0=e.catch(0),console.log(e.t0);case 14:case"end":return e.stop()}}),e,null,[[0,11]])})));return function(t){return e.apply(this,arguments)}}())}),[c]);return Object(ee.jsxs)("div",{className:"calendar-screen",children:[Object(ee.jsx)(re,{}),Object(ee.jsx)(ae.a,{localizer:he,events:l,startAccessor:"start",endAccessor:"end",messages:ce,eventPropGetter:function(e,t,n,a){return{style:{backgroundColor:s===e.user._id?"#367cf7":"#465660",borderRadius:"0px",opacity:.8,display:"flex",color:"white"}}},onDoubleClickEvent:function(e){c(je())},onSelectEvent:function(e){c({type:d,payload:e})},onView:function(e){r(e),localStorage.setItem("lastView",e)},onSelectSlot:function(e){c(U())},selectable:!0,view:n||"month",components:{event:oe}}),Object(ee.jsx)(pe,{}),u&&Object(ee.jsx)(ve,{}),Object(ee.jsx)(fe,{})]})},ge=n(36),ye=function(e){var t=e.isAuthenticated,n=e.component,a=Object(ge.a)(e,["isAuthenticated","component"]);return Object(ee.jsx)(A.b,Object(l.a)(Object(l.a)({},a),{},{component:function(e){return t?Object(ee.jsx)(n,Object(l.a)({},e)):Object(ee.jsx)(A.a,{to:"/login"})}}))},we=function(e){var t=e.isAuthenticated,n=e.component,a=Object(ge.a)(e,["isAuthenticated","component"]);return Object(ee.jsx)(A.b,Object(l.a)(Object(l.a)({},a),{},{component:function(e){return t?Object(ee.jsx)(A.a,{to:"/"}):Object(ee.jsx)(n,Object(l.a)({},e))}}))},Ne=function(){var e=Object(o.b)(),t=Object(o.c)((function(e){return e.auth})),n=t.checking,r=t.uid;return Object(a.useEffect)((function(){e(function(){var e=Object(I.a)(P.a.mark((function e(t){var n,a;return P.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(localStorage.getItem("token")){e.next=4;break}return t(z()),e.abrupt("return");case 4:return e.next=6,G("auth/renew");case 6:return n=e.sent,e.next=9,n.json();case 9:(a=e.sent).ok?(localStorage.setItem("token",a.token),localStorage.setItem("token-init-date",(new Date).getTime()),t(K({uid:a.uid,name:a.name}))):t(z());case 11:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}())}),[e]),n?Object(ee.jsx)("h5",{children:"Espere ... "}):Object(ee.jsx)(T.a,{children:Object(ee.jsx)("div",{children:Object(ee.jsxs)(A.d,{children:[Object(ee.jsx)(we,{exact:!0,path:"/login",component:te,isAuthenticated:!!r}),Object(ee.jsx)(we,{exact:!0,path:"/register",component:ne,isAuthenticated:!!r}),Object(ee.jsx)(ye,{exact:!0,path:"/",component:xe,isAuthenticated:!!r}),Object(ee.jsx)(A.a,{to:"/login"})]})})})},ke=function(){return Object(ee.jsx)(o.a,{store:C,children:Object(ee.jsx)(Ne,{})})};n(121);c.a.render(Object(ee.jsx)(ke,{}),document.getElementById("root"))},55:function(e,t,n){}},[[122,1,2]]]);
//# sourceMappingURL=main.fbcd4755.chunk.js.map