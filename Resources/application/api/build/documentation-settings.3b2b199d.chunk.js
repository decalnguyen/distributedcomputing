"use strict";(self.webpackChunkapi=self.webpackChunkapi||[]).push([[8503],{31346:function(M,l,e){e.r(l),e.d(l,{default:function(){return U}});var t=e(67294),d=e(86896),a=e(41054),g=e(91134),m=e(185),f=e(53979),v=e(29728),h=e(49066),E=e(41580),x=e(11047),O=e(75515),A=e(11276),P=e(74571),y=e(20707),n=e(16364),i=e(85018),r=e(8934),o=e(94123),c=e(80826),s=e(93742),u=e(90306),D=e(88972),T=e(25752),b=(0,D.ZP)(T.E)`
  svg {
    height: 1rem;
    width: 1rem;
    path {
      fill: ${({theme:p})=>p.colors.neutral600};
    }
  }
`,B=e(87561),w=B.Ry().shape({restrictedAccess:B.O7(),password:B.Z_().when("restrictedAccess",(p,L)=>p?L.required(g.I0.required):L)}),U=()=>{(0,g.go)();const{formatMessage:p}=(0,d.Z)(),{submitMutation:L,data:I,isLoading:K}=(0,u.Z)(),[C,$]=(0,t.useState)(!1),H=S=>{L.mutate({prefix:I?.prefix,body:S})};return t.createElement(m.o,null,K?t.createElement(g.dO,null,"Plugin settings are loading"):t.createElement(a.J9,{initialValues:{restrictedAccess:I?.documentationAccess.restrictedAccess||!1,password:""},onSubmit:H,validationSchema:w},({handleSubmit:S,values:R,handleChange:z,errors:Z,setFieldTouched:F,setFieldValue:W})=>t.createElement(g.l0,{noValidate:!0,onSubmit:S},t.createElement(f.T,{title:p({id:(0,s.O)("plugin.name"),defaultMessage:"Documentation"}),subtitle:p({id:(0,s.O)("pages.SettingsPage.header.description"),defaultMessage:"Configure the documentation plugin"}),primaryAction:t.createElement(g.jW,{permissions:c.Z.update},t.createElement(v.z,{type:"submit",startIcon:t.createElement(i.Z,null)},p({id:(0,s.O)("pages.SettingsPage.Button.save"),defaultMessage:"Save"})))}),t.createElement(h.D,null,t.createElement(E.x,{background:"neutral0",hasRadius:!0,shadow:"filterShadow",paddingTop:6,paddingBottom:6,paddingLeft:7,paddingRight:7},t.createElement(x.k,{direction:"column",alignItems:"stretch",gap:4},t.createElement(O.Z,{variant:"delta",as:"h2"},p({id:"global.settings",defaultMessage:"Settings"})),t.createElement(A.r,{gap:4},t.createElement(P.P,{col:6,s:12},t.createElement(y.s,{name:"restrictedAccess",label:p({id:(0,s.O)("pages.SettingsPage.toggle.label"),defaultMessage:"Restricted Access"}),hint:p({id:(0,s.O)("pages.SettingsPage.toggle.hint"),defaultMessage:"Make the documentation endpoint private"}),checked:R.restrictedAccess,onChange:()=>{R.restrictedAccess===!0&&(W("password","",!1),F("password",!1,!1)),W("restrictedAccess",!R.restrictedAccess,!1)},onLabel:"On",offLabel:"Off"})),R.restrictedAccess&&t.createElement(P.P,{col:6,s:12},t.createElement(n.o,{label:p({id:"global.password",defaultMessage:"Password"}),name:"password",placeholder:"**********",type:C?"text":"password",value:R.password,onChange:z,error:Z.password?p({id:Z.password,defaultMessage:"Invalid value"}):null,endAction:t.createElement(b,{onClick:Q=>{Q.stopPropagation(),$(N=>!N)},label:p(C?{id:"Auth.form.password.show-password",defaultMessage:"Show password"}:{id:"Auth.form.password.hide-password",defaultMessage:"Hide password"})},C?t.createElement(r.Z,null):t.createElement(o.Z,null))})))))))))}},90306:function(M,l,e){var t=e(88767),d=e(91134),a=e(49950),g=e(798);const m=()=>{const f=(0,t.useQueryClient)(),v=(0,d.lm)(),{isLoading:h,isError:E,data:x}=(0,t.useQuery)(["get-documentation",a.Z],async()=>{try{const{data:s}=await y(`/${a.Z}/getInfos`);return s}catch{return v({type:"warning",message:{id:"notification.error"}}),null}}),{del:O,post:A,put:P,get:y}=(0,d.kY)(),n=s=>{v({type:"warning",message:s.response.payload.message})},i=(s,u)=>{f.invalidateQueries("get-documentation"),v({type:s,message:{id:(0,g.Z)(u)}})},r=(0,t.useMutation)(({prefix:s,version:u})=>O(`${s}/deleteDoc/${u}`),{onSuccess:()=>i("info","notification.delete.success"),onError:s=>n(s)}),o=(0,t.useMutation)(({prefix:s,body:u})=>P(`${s}/updateSettings`,u),{onSuccess:()=>i("success","notification.update.success"),onError:n}),c=(0,t.useMutation)(({prefix:s,version:u})=>A(`${s}/regenerateDoc`,{version:u}),{onSuccess:()=>i("info","notification.generate.success"),onError:s=>n(s)});return{data:x,isLoading:h,isError:E,deleteMutation:r,submitMutation:o,regenerateDocMutation:c}};l.Z=m},798:function(M,l,e){var t=e(49950);const d=a=>`${t.Z}.${a}`;l.Z=d},93742:function(M,l,e){e.d(l,{O:function(){return t.Z}});var t=e(798)},49066:function(M,l,e){e.d(l,{D:function(){return m}});var t=e(85893),d=e(67294),a=e(45697),g=e(41580);const m=({children:f})=>(0,t.jsx)(g.x,{paddingLeft:10,paddingRight:10,children:f});m.propTypes={children:a.node.isRequired}},53979:function(M,l,e){e.d(l,{T:function(){return A}});var t=e(85893),d=e(67294),a=e(45697),g=e(88972);const m=n=>{const i=(0,d.useRef)(null),[r,o]=(0,d.useState)(!0),c=([s])=>{o(s.isIntersecting)};return(0,d.useEffect)(()=>{const s=i.current,u=new IntersectionObserver(c,n);return s&&u.observe(i.current),()=>{s&&u.disconnect()}},[i,n]),[i,r]};var f=e(66300);const v=(n,i)=>{const r=(0,f.W)(i);(0,d.useLayoutEffect)(()=>{const o=new ResizeObserver(r);return Array.isArray(n)?n.forEach(c=>{c.current&&o.observe(c.current)}):n.current&&o.observe(n.current),()=>{o.disconnect()}},[n,r])};var h=e(41580),E=e(11047),x=e(75515);const O=()=>{const n=(0,d.useRef)(null),[i,r]=(0,d.useState)(null),[o,c]=m({root:null,rootMargin:"0px",threshold:0});return v(o,()=>{o.current&&r(o.current.getBoundingClientRect())}),(0,d.useEffect)(()=>{n.current&&r(n.current.getBoundingClientRect())},[n]),{containerRef:o,isVisible:c,baseHeaderLayoutRef:n,headerSize:i}},A=n=>{const{containerRef:i,isVisible:r,baseHeaderLayoutRef:o,headerSize:c}=O();return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)("div",{style:{height:c?.height},ref:i,children:r&&(0,t.jsx)(y,{ref:o,...n})}),!r&&(0,t.jsx)(y,{...n,sticky:!0,width:c?.width})]})};A.displayName="HeaderLayout";const P=(0,g.ZP)(h.x)`
  width: ${n=>n.width}px;
  z-index: ${({theme:n})=>n.zIndices[1]};
`,y=d.forwardRef(({navigationAction:n,primaryAction:i,secondaryAction:r,subtitle:o,title:c,sticky:s,width:u,...D},T)=>{const j=typeof o=="string";return s?(0,t.jsx)(P,{paddingLeft:6,paddingRight:6,paddingTop:3,paddingBottom:3,position:"fixed",top:0,right:0,background:"neutral0",shadow:"tableShadow",width:u,"data-strapi-header-sticky":!0,children:(0,t.jsxs)(E.k,{justifyContent:"space-between",children:[(0,t.jsxs)(E.k,{children:[n&&(0,t.jsx)(h.x,{paddingRight:3,children:n}),(0,t.jsxs)(h.x,{children:[(0,t.jsx)(x.Z,{variant:"beta",as:"h1",...D,children:c}),j?(0,t.jsx)(x.Z,{variant:"pi",textColor:"neutral600",children:o}):o]}),r?(0,t.jsx)(h.x,{paddingLeft:4,children:r}):null]}),(0,t.jsx)(E.k,{children:i?(0,t.jsx)(h.x,{paddingLeft:2,children:i}):void 0})]})}):(0,t.jsxs)(h.x,{ref:T,paddingLeft:10,paddingRight:10,paddingBottom:8,paddingTop:n?6:8,background:"neutral100","data-strapi-header":!0,children:[n?(0,t.jsx)(h.x,{paddingBottom:2,children:n}):null,(0,t.jsxs)(E.k,{justifyContent:"space-between",children:[(0,t.jsxs)(E.k,{minWidth:0,children:[(0,t.jsx)(x.Z,{as:"h1",variant:"alpha",...D,children:c}),r?(0,t.jsx)(h.x,{paddingLeft:4,children:r}):null]}),i]}),j?(0,t.jsx)(x.Z,{variant:"epsilon",textColor:"neutral600",as:"p",children:o}):o]})});y.displayName="BaseHeaderLayout",y.defaultProps={navigationAction:void 0,primaryAction:void 0,secondaryAction:void 0,subtitle:void 0,sticky:!1,width:void 0},y.propTypes={navigationAction:a.node,primaryAction:a.node,secondaryAction:a.node,sticky:a.bool,subtitle:a.oneOfType([a.string,a.node]),title:a.string.isRequired,width:a.number},A.defaultProps={navigationAction:void 0,primaryAction:void 0,secondaryAction:void 0,subtitle:void 0},A.propTypes={navigationAction:a.node,primaryAction:a.node,secondaryAction:a.node,subtitle:a.oneOfType([a.string,a.node]),title:a.string.isRequired}},185:function(M,l,e){e.d(l,{o:function(){return m}});var t=e(85893),d=e(88972),a=e(41580);const g=(0,d.ZP)(a.x)`
  // To prevent global outline on focus visible to force an outline when Main is focused
  &:focus-visible {
    outline: none;
  }
`,m=({labelledBy:f="main-content-title",...v})=>(0,t.jsx)(g,{"aria-labelledby":f,as:"main",id:"main-content",tabIndex:-1,...v})}}]);