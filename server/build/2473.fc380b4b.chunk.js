"use strict";(self.webpackChunkmy_project=self.webpackChunkmy_project||[]).push([[2473],{32473:(k,M,s)=>{s.r(M),s.d(M,{default:()=>p});var t=s(74081),O=s(27279),L=s(93415),R=s(23298),P=s(74577),c=s(5627),m=s(78955),W=s(27997),B=s(73354),I=s(27875),U=s(48102),K=s(74758),g=s(87006),j=s(76827),h=s(59082),x=s(6078),_=s(70627),u=s(61020),i=s(96634),S=s(61815),z=s(98934),N=s(43433),w=s(31855),q=s(29206),ss=s(40464),ts=s(71563),as=s(47853),is=s(50547),es=s(74063),ns=s(10124);const C=({sort:n="",pageSize:d=10,onChange:e})=>{const{formatMessage:o}=(0,u.Z)();return(0,t.jsx)(L.x,{background:"neutral0",hasRadius:!0,shadow:"tableShadow",paddingTop:6,paddingBottom:6,paddingLeft:7,paddingRight:7,children:(0,t.jsxs)(R.r,{gap:4,children:[(0,t.jsx)(P.P,{s:12,col:6,children:(0,t.jsx)(c.P,{label:o({id:(0,i.g)("config.entries.title"),defaultMessage:"Entries per page"}),hint:o({id:(0,i.g)("config.entries.note"),defaultMessage:"Number of assets displayed by default in the Media Library"}),onChange:a=>e({target:{name:"pageSize",value:a}}),name:"pageSize",value:d,children:i.C.map(a=>(0,t.jsx)(m.W,{value:a,children:a},a))})}),(0,t.jsx)(P.P,{s:12,col:6,children:(0,t.jsx)(c.P,{label:o({id:(0,i.g)("config.sort.title"),defaultMessage:"Default sort order"}),hint:o({id:(0,i.g)("config.note"),defaultMessage:"Note: You can override this value in the media library."}),onChange:a=>e({target:{name:"sort",value:a}}),name:"sort",value:n,"test-sort":n,"data-testid":"sort-select",children:i.D.map(a=>(0,t.jsx)(m.W,{"data-testid":`sort-option-${a.value}`,value:a.value,children:o({id:(0,i.g)(a.key),defaultMessage:`${a.value}`})},a.key))})})]})})};C.propTypes={sort:_.string.isRequired,pageSize:_.number.isRequired,onChange:_.func.isRequired};const v=`${i.p}/ON_CHANGE`,f=`${i.p}/SET_LOADED`,Z=({name:n,value:d})=>({type:v,keys:n,value:d}),$=()=>({type:f}),r={initialData:{},modifiedData:{}},y=n=>({...r,initialData:n,modifiedData:n}),b=(n=r,d)=>(0,S.ZP)(n,e=>{switch(d.type){case v:{N(e,["modifiedData",...d.keys.split(".")],d.value);break}case f:{const o=y(z(e,["modifiedData"],{}));e.initialData=o.initialData,e.modifiedData=o.modifiedData;break}default:return e}}),p=({config:n})=>{const{trackUsage:d}=(0,g.rS)(),{formatMessage:e}=(0,u.Z)(),o=(0,g.lm)(),{mutateConfig:a}=(0,i.z)(),{isLoading:T}=a,[H,G]=(0,O.useState)(!1),D=()=>G(E=>!E),[F,A]=(0,O.useReducer)(b,r,()=>y(n)),{initialData:Q,modifiedData:l}=F,V=E=>{E.preventDefault(),D()},Y=async()=>{d("willEditMediaLibraryConfig"),await a.mutateAsync(l),D(),A($()),o({type:"success",message:{id:"notification.form.success.fields",defaultMessage:"Changes saved"}})},J=({target:{name:E,value:X}})=>{A(Z({name:E,value:X}))};return(0,g.go)(),(0,t.jsx)(W.A,{children:(0,t.jsx)(B.o,{"aria-busy":T,children:(0,t.jsxs)("form",{onSubmit:V,children:[(0,t.jsx)(I.T,{navigationAction:(0,t.jsx)(g.rU,{startIcon:(0,t.jsx)(j.Z,{}),to:`/plugins/${i.p}`,id:"go-back",children:e({id:(0,i.g)("config.back"),defaultMessage:"Back"})}),primaryAction:(0,t.jsx)(U.z,{size:"S",startIcon:(0,t.jsx)(h.Z,{}),disabled:x(l,Q),type:"submit",children:e({id:"global.save",defaultMessage:"Save"})}),subtitle:e({id:(0,i.g)("config.subtitle"),defaultMessage:"Define the view settings of the media library."}),title:e({id:(0,i.g)("config.title"),defaultMessage:"Configure the view - Media Library"})}),(0,t.jsx)(K.D,{children:(0,t.jsx)(C,{"data-testid":"settings",pageSize:l.pageSize||"",sort:l.sort||"",onChange:J})}),(0,t.jsx)(g.QH,{bodyText:{id:(0,i.g)("config.popUpWarning.warning.updateAllSettings"),defaultMessage:"This will modify all your settings"},iconRightButton:(0,t.jsx)(h.Z,{}),isConfirmButtonLoading:T,isOpen:H,onToggleDialog:D,onConfirm:Y,variantRightButton:"success-light"})]})})})};p.propTypes={config:_.shape({pageSize:_.number,sort:_.string}).isRequired}}}]);
