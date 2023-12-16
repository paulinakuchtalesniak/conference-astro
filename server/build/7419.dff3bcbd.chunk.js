"use strict";(self.webpackChunkmy_project=self.webpackChunkmy_project||[]).push([[7419],{37472:(b,D,s)=>{s.d(D,{Z:()=>f});var e=s(74081),c=s(10701);const f=({startActions:x,endActions:m})=>!x&&!m?null:(0,e.jsxs)(c.k,{justifyContent:"space-between",alignItems:"flex-start",paddingBottom:4,paddingLeft:10,paddingRight:10,children:[(0,e.jsx)(c.k,{gap:2,wrap:"wrap",children:x}),(0,e.jsx)(c.k,{gap:2,shrink:0,wrap:"wrap",children:m})]})},27997:(b,D,s)=>{s.d(D,{A:()=>v});var e=s(74081),c=s(72450),f=s(93415);const x=(0,c.ZP)(f.x)`
  display: grid;
  grid-template-columns: ${({hasSideNav:L})=>L?"auto 1fr":"1fr"};
`,m=(0,c.ZP)(f.x)`
  overflow-x: hidden;
`,v=({sideNav:L,children:W})=>(0,e.jsxs)(x,{hasSideNav:Boolean(L),children:[L,(0,e.jsx)(m,{paddingBottom:10,children:W})]})},68412:(b,D,s)=>{s.d(D,{r:()=>K});var e=s(74081),c=s(27279),f=s(48157),x=s(47533),m=s(72450),v=s(61657),L=s(32370),W=s(93415);const X=m.ZP.a`
  display: inline-flex;
  align-items: center;
  text-decoration: none;
  pointer-events: ${({disabled:O})=>O?"none":void 0};
  color: ${({disabled:O,theme:j})=>O?j.colors.neutral600:j.colors.primary600};

  svg path {
    transition: fill 150ms ease-out;
    fill: currentColor;
  }

  svg {
    font-size: ${10/16}rem;
  }

  ${L.Z} {
    transition: color 150ms ease-out;
    color: currentColor;
  }

  &:hover {
    color: ${({theme:O})=>O.colors.primary500};
  }

  &:active {
    color: ${({theme:O})=>O.colors.primary700};
  }

  ${v.BF};
`,z=(0,m.ZP)(W.x)`
  display: flex;
`,K=c.forwardRef(({children:O,href:j,to:Q,disabled:F=!1,startIcon:V,endIcon:H,...q},G)=>{const ee=j?"_blank":void 0,$=j?"noreferrer noopener":void 0;return(0,e.jsxs)(X,{as:Q&&!F?x.OL:"a",target:ee,rel:$,to:F?void 0:Q,href:F?"#":j,disabled:F,ref:G,...q,children:[V&&(0,e.jsx)(z,{as:"span","aria-hidden":!0,paddingRight:2,children:V}),(0,e.jsx)(L.Z,{children:O}),H&&!j&&(0,e.jsx)(z,{as:"span","aria-hidden":!0,paddingLeft:2,children:H}),j&&(0,e.jsx)(z,{as:"span","aria-hidden":!0,paddingLeft:2,children:(0,e.jsx)(f.Z,{})})]})})},76827:(b,D,s)=>{s.d(D,{Z:()=>f});var e=s(74081);const c=x=>(0,e.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"1rem",height:"1rem",fill:"none",viewBox:"0 0 24 24",...x,children:(0,e.jsx)("path",{fill:"#212134",d:"M24 13.3a.2.2 0 0 1-.2.2H5.74l8.239 8.239a.2.2 0 0 1 0 .282L12.14 23.86a.2.2 0 0 1-.282 0L.14 12.14a.2.2 0 0 1 0-.282L11.86.14a.2.2 0 0 1 .282 0L13.98 1.98a.2.2 0 0 1 0 .282L5.74 10.5H23.8c.11 0 .2.09.2.2v2.6Z"})}),f=c},35318:(b,D,s)=>{s.d(D,{Z:()=>f});var e=s(74081);const c=x=>(0,e.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"1rem",height:"1rem",fill:"none",viewBox:"0 0 24 24",...x,children:(0,e.jsx)("path",{fill:"#212134",fillRule:"evenodd",d:"M2.68 9.192c-.6.276-2.114 1.18-2.306 1.303a.792.792 0 0 0-.374.68v1.65a.797.797 0 0 0 .384.687c.254.16 1.73 1.042 2.306 1.303l.744 1.8c-.24.634-.67 2.333-.72 2.554a.797.797 0 0 0 .216.744l1.167 1.166a.801.801 0 0 0 .744.216l.03-.008c.36-.092 1.946-.498 2.523-.712l1.8.744c.276.6 1.181 2.115 1.304 2.307a.805.805 0 0 0 .679.374h1.649a.797.797 0 0 0 .686-.384c.16-.254 1.042-1.73 1.303-2.306l1.8-.744c.634.24 2.333.67 2.554.72a.797.797 0 0 0 .744-.216l1.166-1.167a.803.803 0 0 0 .216-.744l-.008-.03c-.092-.36-.498-1.946-.712-2.523l.744-1.8c.6-.276 2.115-1.181 2.307-1.304a.804.804 0 0 0 .374-.679v-1.649a.796.796 0 0 0-.382-.679c-.254-.16-1.73-1.041-2.306-1.303l-.744-1.8c.24-.634.67-2.333.72-2.554a.796.796 0 0 0-.216-.744l-1.166-1.173a.802.802 0 0 0-.744-.216l-.03.008c-.361.092-1.947.498-2.524.712l-1.8-.744c-.276-.6-1.18-2.115-1.303-2.307a.803.803 0 0 0-.68-.374h-1.65a.797.797 0 0 0-.68.382c-.16.254-1.041 1.73-1.303 2.306l-1.8.744c-.634-.24-2.333-.67-2.554-.72a.797.797 0 0 0-.744.216L2.921 4.094a.802.802 0 0 0-.216.744l.008.03c.092.361.498 1.947.712 2.524l-.744 1.8ZM12 17a5 5 0 1 0 0-10 5 5 0 0 0 0 10Z",clipRule:"evenodd"})}),f=c},7419:(b,D,s)=>{s.r(D),s.d(D,{default:()=>ts});var e=s(74081),c=s(27279),f=s(93415),x=s(73411),m=s(10701),v=s(48102),L=s(5938),W=s(15244),X=s(77970),z=s(6918),K=s(32370),O=s(23298),j=s(74577),Q=s(2878),F=s(35250),V=s(27875),H=s(68412),q=s(27997),G=s(73354),ee=s(37472),$=s(4987),Re=s(74758),Ie=s(10989),Ue=s(84366),_=s(87006),We=s(364),R=s(61020),S=s(51447),Ke=s(47533),t=s(96634),hs=s(31855),ue=s(29206),Fe=s(78665),Se=s(61287),Ze=s(6162),se=s(36938),be=s(57121),ze=s(76827),$e=s(35318),Qe=s(86485),Ve=s(66351),He=s(26784),te=s(72450),u=s(70627),Ge=s(71563),ke=s(10124),Ee=s(40464),fs=s(6078),Ms=s(47853),ms=s(50547),xs=s(74063);const Ne=(n,{pathname:o,query:r})=>{let l=[{id:null,label:{id:(0,t.g)("plugin.name"),defaultMessage:"Media Library"},href:n?(0,t.a)(o,r):void 0}];return n?.parent?.parent&&l.push([]),n?.parent&&l.push({id:n.parent.id,label:n.parent.name,href:(0,t.a)(o,r,{folder:n.parent.id,folderPath:n.parent.path})}),n&&l.push({id:n.id,label:n.name}),l},Ye=n=>{const{id:o}=(0,t.u)();return(0,e.jsx)(f.x,{position:"relative",zIndex:2,children:(0,e.jsx)(x.C,{"aria-labelledby":`${o}-title`,...n})})},ne=({pagination:n})=>(0,e.jsx)(f.x,{paddingTop:6,children:(0,e.jsxs)(m.k,{alignItems:"flex-end",justifyContent:"space-between",children:[(0,e.jsx)(_.v4,{}),(0,e.jsx)(_.tU,{pagination:n})]})});ne.defaultProps={pagination:{pageCount:0,pageSize:10,total:0}},ne.propTypes={pagination:u.shape({page:u.number,pageCount:u.number,pageSize:u.number,total:u.number})};const pe=({selected:n,onSuccess:o})=>{const{formatMessage:r}=(0,R.Z)(),[l,d]=(0,c.useState)(!1),{isLoading:g,remove:E}=(0,t.b)(),h=async()=>{await E(n),o()};return(0,e.jsxs)(e.Fragment,{children:[(0,e.jsx)(v.z,{variant:"danger-light",size:"S",startIcon:(0,e.jsx)(Fe.Z,{}),onClick:()=>d(!0),children:r({id:"global.delete",defaultMessage:"Delete"})}),(0,e.jsx)(_.QH,{isConfirmButtonLoading:g,isOpen:l,onToggleDialog:()=>d(!1),onConfirm:h})]})};pe.propTypes={selected:u.arrayOf(t.A,t.F).isRequired,onSuccess:u.func.isRequired};const we=()=>{const n=(0,_.lm)(),o=(0,Ee.useQueryClient)(),{post:r}=(0,_.kY)(),l=({destinationFolderId:E,filesAndFolders:h})=>{const p=h.reduce((M,A)=>{const{id:i,type:I}=A,P=I==="asset"?"fileIds":"folderIds";return M[P]||(M[P]=[]),M[P].push(i),M},{});return r("/upload/actions/bulk-move",{...p,destinationFolderId:E})},d=(0,Ee.useMutation)(l,{onSuccess(E){const{data:{data:h}}=E;h?.files?.length>0&&(o.refetchQueries([t.p,"assets"],{active:!0}),o.refetchQueries([t.p,"asset-count"],{active:!0})),o.refetchQueries([t.p,"folders"],{active:!0}),n({type:"success",message:{id:(0,t.g)("modal.move.success-label"),defaultMessage:"Elements have been moved successfully."}})}});return{...d,move:(E,h)=>d.mutateAsync({destinationFolderId:E,filesAndFolders:h})}},ae=({onClose:n,selected:o,currentFolder:r})=>{const{formatMessage:l}=(0,R.Z)(),{data:d,isLoading:g}=(0,t.c)(),{move:E}=we();if(!d)return null;const h=async(A,{setErrors:i})=>{try{await E(A.destination.value,o),n()}catch(I){const k=(0,_.OT)(I).errors.reduce((N,T)=>(N[T.values?.path?.length||"destination"]=T.defaultMessage,N),{});ke(k)||i(k)}},p=()=>{n()};if(g)return(0,e.jsx)(L.P,{onClose:p,labelledBy:"title",children:(0,e.jsx)(W.f,{children:(0,e.jsx)(m.k,{justifyContent:"center",paddingTop:4,paddingBottom:4,children:(0,e.jsx)(X.a,{children:l({id:(0,t.g)("content.isLoading"),defaultMessage:"Content is loading."})})})})});const M={destination:{value:r?.id||"",label:r?.name||d[0].label}};return(0,e.jsx)(L.P,{onClose:p,labelledBy:"title",children:(0,e.jsx)(Ge.J9,{validateOnChange:!1,onSubmit:h,initialValues:M,children:({values:A,errors:i,setFieldValue:I})=>(0,e.jsxs)(_.l0,{noValidate:!0,children:[(0,e.jsx)(z.x,{children:(0,e.jsx)(K.Z,{fontWeight:"bold",textColor:"neutral800",as:"h2",id:"title",children:l({id:(0,t.g)("modal.folder.move.title"),defaultMessage:"Move elements to"})})}),(0,e.jsx)(W.f,{children:(0,e.jsx)(O.r,{gap:4,children:(0,e.jsx)(j.P,{xs:12,col:12,children:(0,e.jsxs)(m.k,{direction:"column",alignItems:"stretch",gap:1,children:[(0,e.jsx)(Q.Q,{htmlFor:"folder-destination",children:l({id:(0,t.g)("form.input.label.folder-location"),defaultMessage:"Location"})}),(0,e.jsx)(t.S,{options:d,onChange:P=>{I("destination",P)},defaultValue:A.destination,name:"destination",menuPortalTarget:document.querySelector("body"),inputId:"folder-destination",error:i?.destination,ariaErrorMessage:"destination-error"}),i.destination&&(0,e.jsx)(K.Z,{variant:"pi",as:"p",id:"folder-destination-error",textColor:"danger600",children:i.destination})]})})})}),(0,e.jsx)(F.m,{startActions:(0,e.jsx)(v.z,{onClick:p,variant:"tertiary",name:"cancel",children:l({id:"cancel",defaultMessage:"Cancel"})}),endActions:(0,e.jsx)(v.z,{type:"submit",loading:g,children:l({id:"modal.folder.move.submit",defaultMessage:"Move"})})})]})})})};ae.defaultProps={currentFolder:void 0},ae.propTypes={onClose:u.func.isRequired,currentFolder:t.F,selected:u.arrayOf(t.F,t.A).isRequired};const oe=({selected:n,onSuccess:o,currentFolder:r})=>{const{formatMessage:l}=(0,R.Z)(),[d,g]=(0,c.useState)(!1),E=()=>{g(!1),o()};return(0,e.jsxs)(e.Fragment,{children:[(0,e.jsx)(v.z,{variant:"secondary",size:"S",startIcon:(0,e.jsx)(Se.Z,{}),onClick:()=>g(!0),children:l({id:"global.move",defaultMessage:"Move"})}),d&&(0,e.jsx)(ae,{currentFolder:r,onClose:E,selected:n})]})};oe.defaultProps={currentFolder:void 0},oe.propTypes={onSuccess:u.func.isRequired,currentFolder:t.F,selected:u.arrayOf(t.A,t.F).isRequired};const ie=({selected:n,onSuccess:o,currentFolder:r})=>{const{formatMessage:l}=(0,R.Z)();return(0,e.jsxs)(m.k,{gap:2,paddingBottom:5,children:[(0,e.jsx)(K.Z,{variant:"epsilon",textColor:"neutral600",children:l({id:(0,t.g)("list.assets.selected"),defaultMessage:"{numberFolders, plural, one {1 folder} other {# folders}} - {numberAssets, plural, one {1 asset} other {# assets}} selected"},{numberFolders:n.filter(({type:d})=>d==="folder").length,numberAssets:n.filter(({type:d})=>d==="asset").length})}),(0,e.jsx)(pe,{selected:n,onSuccess:o}),(0,e.jsx)(oe,{currentFolder:r,selected:n,onSuccess:o})]})};ie.defaultProps={currentFolder:void 0},ie.propTypes={onSuccess:u.func.isRequired,currentFolder:t.F,selected:u.arrayOf(t.A,t.F).isRequired};const Je=({isFiltering:n,canCreate:o,canRead:r})=>n?{id:"list.assets-empty.title-withSearch",defaultMessage:"There are no elements with the applied filters"}:r?o?{id:"list.assets.empty-upload",defaultMessage:"Upload your first assets..."}:{id:"list.assets.empty",defaultMessage:"Media Library is empty"}:{id:"header.actions.no-permissions",defaultMessage:"No permissions to view"},he=({canCreate:n,isFiltering:o,canRead:r,onActionClick:l})=>{const{formatMessage:d}=(0,R.Z)(),g=Je({isFiltering:o,canCreate:n,canRead:r});return(0,e.jsx)(t.E,{icon:r?null:Ze.Z,action:n&&!o&&(0,e.jsx)(v.z,{variant:"secondary",startIcon:(0,e.jsx)(se.Z,{}),onClick:l,children:d({id:(0,t.g)("header.actions.add-assets"),defaultMessage:"Add new assets"})}),content:d({...g,id:(0,t.g)(g.id)})})};he.propTypes={canCreate:u.bool.isRequired,canRead:u.bool.isRequired,isFiltering:u.bool.isRequired,onActionClick:u.func.isRequired};const Xe=()=>{const n=(0,c.useRef)(null),[o,r]=(0,c.useState)(!1),{formatMessage:l}=(0,R.Z)(),{trackUsage:d}=(0,_.rS)(),[{query:g},E]=(0,_.Kx)(),h=g?.filters?.$and||[],p=()=>r(i=>!i),M=i=>{E({filters:{$and:i},page:1})},A=i=>{d("didFilterMediaLibraryElements",{location:"content-manager",filter:Object.keys(i[i.length-1])[0]}),E({filters:{$and:i},page:1})};return(0,e.jsxs)(e.Fragment,{children:[(0,e.jsx)(v.z,{variant:"tertiary",ref:n,startIcon:(0,e.jsx)(be.Z,{}),onClick:p,size:"S",children:l({id:"app.utils.filters",defaultMessage:"Filters"})}),o&&(0,e.jsx)(t.d,{displayedFilters:t.e,filters:h,onSubmit:A,onToggle:p,source:n}),(0,e.jsx)(t.f,{appliedFilters:h,filtersSchema:t.e,onRemoveFilter:M})]})},re=({breadcrumbs:n,canCreate:o,folder:r,onToggleEditFolderDialog:l,onToggleUploadAssetDialog:d})=>{const{formatMessage:g}=(0,R.Z)(),{pathname:E}=(0,S.TH)(),[{query:h}]=(0,_.Kx)(),p={...h,folder:r?.parent?.id??void 0,folderPath:r?.parent?.path??void 0};return(0,e.jsx)(V.T,{title:g({id:(0,t.g)("plugin.name"),defaultMessage:"Media Library"}),subtitle:n&&r&&(0,e.jsx)(t.h,{as:"nav",label:g({id:(0,t.g)("header.breadcrumbs.nav.label"),defaultMessage:"Folders navigation"}),breadcrumbs:n,currentFolderId:r?.id}),navigationAction:r&&(0,e.jsx)(H.r,{startIcon:(0,e.jsx)(ze.Z,{}),to:`${E}?${(0,ue.stringify)(p,{encode:!1})}`,children:g({id:(0,t.g)("header.actions.folder-level-up"),defaultMessage:"Back"})}),primaryAction:o&&(0,e.jsxs)(m.k,{gap:2,children:[(0,e.jsx)(v.z,{startIcon:(0,e.jsx)(se.Z,{}),variant:"secondary",onClick:l,children:g({id:(0,t.g)("header.actions.add-folder"),defaultMessage:"Add new folder"})}),(0,e.jsx)(v.z,{startIcon:(0,e.jsx)(se.Z,{}),onClick:d,children:g({id:(0,t.g)("header.actions.add-assets"),defaultMessage:"Add new assets"})})]})})};re.defaultProps={breadcrumbs:!1,folder:null},re.propTypes={breadcrumbs:u.oneOfType([t.B,u.bool]),canCreate:u.bool.isRequired,folder:t.F,onToggleEditFolderDialog:u.func.isRequired,onToggleUploadAssetDialog:u.func.isRequired};const qe=(0,te.ZP)(f.x)`
  height: ${32/16}rem;
  display: flex;
  align-items: center;
`,fe=(0,te.ZP)(K.Z)`
  max-width: 100%;
`,Me=(0,te.ZP)(f.x)`
  svg {
    path {
      fill: ${({theme:n})=>n.colors.neutral500};
    }
  }
`,es=()=>{const{push:n}=(0,S.k6)(),{canRead:o,canCreate:r,canUpdate:l,canCopyLink:d,canDownload:g,isLoading:E}=(0,t.i)(),h=(0,c.useRef)(),{formatMessage:p}=(0,R.Z)(),{pathname:M}=(0,S.TH)(),{trackUsage:A}=(0,_.rS)(),[{query:i},I]=(0,_.Kx)(),P=Boolean(i._q||i.filters),[k,N]=(0,_.Yw)(t.l.view,t.v.GRID),T=k===t.v.GRID,{data:B,isLoading:ns,errors:as}=(0,t.j)({skipWhen:!o,query:i}),{data:os,isLoading:is,errors:rs}=(0,t.k)({enabled:o&&B?.pagination?.page===1&&!(0,t.m)(i),query:i}),{data:le,isLoading:me,error:ls}=(0,t.n)(i?.folder,{enabled:o&&!!i?.folder});ls?.response?.status===404&&n(M);const Y=os?.map(a=>({...a,type:"folder",folderURL:(0,t.a)(M,i,a.id),isSelectable:l}))??[],C=Y?.length||0,w=B?.results?.map(a=>({...a,type:"asset",isSelectable:l}))||[],y=w?.length??0,ds=B?.pagination?.total,xe=me||is||E||ns,[cs,_s]=(0,c.useState)(!1),[gs,De]=(0,c.useState)(!1),[ve,de]=(0,c.useState)(void 0),[ce,Pe]=(0,c.useState)(void 0),[U,{selectOne:J,selectAll:Oe}]=(0,_.Uq)(["type","id"],[]),je=U?.length>0&&U?.length!==y+C,_e=()=>_s(a=>!a),Ce=({created:a=!1}={})=>{a&&i?.page!=="1"&&I({...i,page:1}),De(Z=>!Z)},ye=(a,Z)=>{a.target.checked&&A("didSelectAllMediaLibraryElements"),Oe(Z)},Le=a=>{A("didSortMediaLibraryElements",{location:"upload",sort:a}),I({sort:a})},Ae=a=>{Pe(a),De(!0)},us=a=>{Pe(null),Ce(a),h.current&&h.current.focus()},Te=a=>{a===y&&B.pagination.page===B.pagination.pageCount&&B.pagination.page>1&&I({...i,page:B.pagination.page-1})},Es=()=>{Oe(),Te(U.length)};return(0,_.go)(),(0,e.jsxs)(q.A,{children:[(0,e.jsxs)(G.o,{"aria-busy":xe,children:[(0,e.jsx)(re,{breadcrumbs:!me&&Ne(le,{pathname:M,query:i}),canCreate:r,onToggleEditFolderDialog:Ce,onToggleUploadAssetDialog:_e,folder:le}),(0,e.jsx)(ee.Z,{startActions:(0,e.jsxs)(e.Fragment,{children:[l&&T&&(y>0||C>0)&&(0,e.jsx)(qe,{paddingLeft:2,paddingRight:2,background:"neutral0",hasRadius:!0,borderColor:"neutral200",children:(0,e.jsx)(x.C,{"aria-label":p({id:(0,t.g)("bulk.select.label"),defaultMessage:"Select all folders & assets"}),indeterminate:je,value:(y>0||C>0)&&U.length===y+C,onChange:a=>ye(a,[...w,...Y])})}),o&&T&&(0,e.jsx)(t.o,{value:i?.sort,onChangeSort:Le}),o&&(0,e.jsx)(Xe,{})]}),endActions:(0,e.jsxs)(e.Fragment,{children:[(0,e.jsx)(_.jW,{permissions:t.P.configureView,children:(0,e.jsx)(Me,{paddingTop:1,paddingBottom:1,children:(0,e.jsx)($.h,{forwardedAs:Ke.rU,to:{pathname:`${M}/configuration`,search:(0,ue.stringify)(i,{encode:!1})},icon:(0,e.jsx)($e.Z,{}),label:p({id:"app.links.configure-view",defaultMessage:"Configure the view"})})})}),(0,e.jsx)(Me,{paddingTop:1,paddingBottom:1,children:(0,e.jsx)($.h,{icon:T?(0,e.jsx)(Qe.Z,{}):(0,e.jsx)(Ve.Z,{}),label:p(T?{id:(0,t.g)("view-switch.list"),defaultMessage:"List View"}:{id:(0,t.g)("view-switch.grid"),defaultMessage:"Grid View"}),onClick:()=>N(T?t.v.LIST:t.v.GRID)})}),(0,e.jsx)(_.m,{label:p({id:(0,t.g)("search.label"),defaultMessage:"Search for an asset"}),trackedEvent:"didSearchMediaLibraryElements",trackedEventDetails:{location:"upload"}})]})}),(0,e.jsxs)(Re.D,{children:[U.length>0&&(0,e.jsx)(ie,{currentFolder:le,selected:U,onSuccess:Es}),xe&&(0,e.jsx)(_.dO,{}),(as||rs)&&(0,e.jsx)(_.Hn,{}),C===0&&y===0&&(0,e.jsx)(he,{canCreate:r,canRead:o,isFiltering:P,onActionClick:_e}),o&&!T&&(y>0||C>0)&&(0,e.jsx)(t.T,{assetCount:y,folderCount:C,indeterminate:je,onChangeSort:Le,onChangeFolder:(a,Z)=>n((0,t.a)(M,i,{folder:a,folderPath:Z})),onEditAsset:de,onEditFolder:Ae,onSelectOne:J,onSelectAll:ye,rows:[...Y,...w],selected:U,shouldDisableBulkSelect:!l,sortQuery:i?.sort??""}),o&&T&&(0,e.jsxs)(e.Fragment,{children:[C>0&&(0,e.jsx)(t.q,{title:(P&&y>0||!P)&&p({id:(0,t.g)("list.folders.title"),defaultMessage:"Folders ({count})"},{count:C})||"",children:Y.map(a=>{const ps=!!U.filter(({type:ge})=>ge==="folder").find(ge=>ge.id===a.id),Be=(0,t.a)(M,i,{folder:a?.id,folderPath:a?.path});return(0,e.jsx)(j.P,{col:3,children:(0,e.jsx)(t.r,{ref:ce&&a.id===ce.id?h:void 0,ariaLabel:a.name,id:`folder-${a.id}`,to:Be,startAction:J&&a.isSelectable?(0,e.jsx)(Ye,{"data-testid":`folder-checkbox-${a.id}`,value:ps,onChange:()=>J(a)}):null,cardActions:(0,e.jsx)($.h,{icon:(0,e.jsx)(He.Z,{}),"aria-label":p({id:(0,t.g)("list.folder.edit"),defaultMessage:"Edit folder"}),onClick:()=>Ae(a)}),children:(0,e.jsx)(t.s,{children:(0,e.jsx)(t.t,{to:Be,children:(0,e.jsxs)(m.k,{as:"h2",direction:"column",alignItems:"start",maxWidth:"100%",children:[(0,e.jsxs)(fe,{fontWeight:"semiBold",ellipsis:!0,children:[a.name,(0,e.jsx)(Ie.T,{children:":"})]}),(0,e.jsx)(fe,{as:"span",textColor:"neutral600",variant:"pi",ellipsis:!0,children:p({id:(0,t.g)("list.folder.subtitle"),defaultMessage:"{folderCount, plural, =0 {# folder} one {# folder} other {# folders}}, {filesCount, plural, =0 {# asset} one {# asset} other {# assets}}"},{folderCount:a.children.count,filesCount:a.files.count})})]})})})})},`folder-${a.id}`)})}),y>0&&C>0&&(0,e.jsx)(f.x,{paddingTop:6,paddingBottom:4,children:(0,e.jsx)(Ue.i,{})}),y>0&&(0,e.jsx)(t.w,{assets:w,onEditAsset:de,onSelectAsset:J,selectedAssets:U.filter(({type:a})=>a==="asset"),title:(!P||P&&C>0)&&B?.pagination?.page===1&&p({id:(0,t.g)("list.assets.title"),defaultMessage:"Assets ({count})"},{count:ds})||""})]}),B?.pagination&&(0,e.jsx)(ne,{pagination:B.pagination})]})]}),cs&&(0,e.jsx)(t.U,{onClose:_e,trackedLocation:"upload",folderId:i?.folder}),gs&&(0,e.jsx)(t.x,{onClose:us,folder:ce,parentFolderId:i?.folder,location:"upload"}),ve&&(0,e.jsx)(t.y,{onClose:a=>{a===null&&Te(1),de(void 0)},asset:ve,canUpdate:l,canCopyLink:d,canDownload:g,trackedLocation:"upload"})]})},ss=(0,c.lazy)(()=>s.e(2473).then(s.bind(s,32473))),ts=()=>{const{config:{isLoading:n,isError:o,data:r}}=(0,t.z)(),[{rawQuery:l},d]=(0,_.Kx)(),{formatMessage:g}=(0,R.Z)(),E=g({id:(0,t.g)("plugin.name"),defaultMessage:"Media Library"});return(0,c.useEffect)(()=>{n||o||l||d({sort:r.sort,page:1,pageSize:r.pageSize})},[n,o,r,l,d]),(0,_.go)(),(0,e.jsxs)(G.o,{"aria-busy":n,children:[(0,e.jsx)(We.q,{title:E}),n&&(0,e.jsx)(_.dO,{}),l?(0,e.jsx)(c.Suspense,{fallback:(0,e.jsx)(_.dO,{}),children:(0,e.jsxs)(S.rs,{children:[(0,e.jsx)(S.AW,{exact:!0,path:`/plugins/${t.p}`,component:es}),(0,e.jsx)(S.AW,{exact:!0,path:`/plugins/${t.p}/configuration`,render:()=>(0,e.jsx)(ss,{config:r})})]})}):null]})}}}]);
