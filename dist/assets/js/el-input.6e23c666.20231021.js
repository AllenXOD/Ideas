import{i as ke,c as p,aN as Ke,g as Pe,r as N,s as G,w as q,V as je,aa as Ue,T as we,b as We,d as ae,av as Se,aM as Ye,m as oe,e as Ve,aO as Xe,af as Ge,u as Ce,aq as qe,aP as Je,aQ as Qe,p as Ze,ae as et,o as tt,O as V,al as at,C as ot,L as nt,f as v,h as S,G as m,F as ne,n as h,k as t,a4 as W,j as F,A as I,B as $,ai as Y,J as L,aL as se,E as st,aw as lt,a0 as rt,aR as it,I as X,l as ut,_ as ct,P as Ie,an as Ee,R as dt}from"./index.fd9023e2.20231021.js";import{u as pt,a as ft,d as vt,b as mt,c as yt}from"./use-form-item.4cf4ceef.20231021.js";const ht=()=>ke&&/firefox/i.test(window.navigator.userAgent),le="update:modelValue",Lt="change",Ot="input",gt=o=>/([\uAC00-\uD7AF\u3130-\u318F])+/gi.test(o),bt=["class","style"],xt=/^on[A-Z]/,wt=(o={})=>{const{excludeListeners:f=!1,excludeKeys:u}=o,a=p(()=>((u==null?void 0:u.value)||[]).concat(bt)),r=Pe();return r?p(()=>{var i;return Ke(Object.entries((i=r.proxy)==null?void 0:i.$attrs).filter(([c])=>!a.value.includes(c)&&!(f&&xt.test(c))))}):p(()=>({}))};function St(o){const f=N();function u(){if(o.value==null)return;const{selectionStart:r,selectionEnd:i,value:c}=o.value;if(r==null||i==null)return;const g=c.slice(0,Math.max(0,r)),d=c.slice(Math.max(0,i));f.value={selectionStart:r,selectionEnd:i,value:c,beforeTxt:g,afterTxt:d}}function a(){if(o.value==null||f.value==null)return;const{value:r}=o.value,{beforeTxt:i,afterTxt:c,selectionStart:g}=f.value;if(i==null||c==null||g==null)return;let d=r.length;if(r.endsWith(c))d=r.length-c.length;else if(r.startsWith(i))d=i.length;else{const b=i[g-1],w=r.indexOf(b,g-1);w!==-1&&(d=w+1)}o.value.setSelectionRange(d,d)}return[u,a]}function Ct(o,{afterFocus:f,beforeBlur:u,afterBlur:a}={}){const r=Pe(),{emit:i}=r,c=G(),g=N(!1),d=s=>{g.value||(g.value=!0,i("focus",s),f==null||f())},b=s=>{var T;Ue(u)&&u(s)||s.relatedTarget&&((T=c.value)!=null&&T.contains(s.relatedTarget))||(g.value=!1,i("blur",s),a==null||a())},w=()=>{var s;(s=o.value)==null||s.focus()};return q(c,s=>{s&&s.setAttribute("tabindex","-1")}),je(c,"click",w),{wrapperRef:c,isFocused:g,handleFocus:d,handleBlur:b}}let x;const It=`
  height:0 !important;
  visibility:hidden !important;
  ${ht()?"":"overflow:hidden !important;"}
  position:absolute !important;
  z-index:-1000 !important;
  top:0 !important;
  right:0 !important;
`,Et=["letter-spacing","line-height","padding-top","padding-bottom","font-family","font-weight","font-size","text-rendering","text-transform","width","text-indent","padding-left","padding-right","border-width","box-sizing"];function zt(o){const f=window.getComputedStyle(o),u=f.getPropertyValue("box-sizing"),a=Number.parseFloat(f.getPropertyValue("padding-bottom"))+Number.parseFloat(f.getPropertyValue("padding-top")),r=Number.parseFloat(f.getPropertyValue("border-bottom-width"))+Number.parseFloat(f.getPropertyValue("border-top-width"));return{contextStyle:Et.map(c=>`${c}:${f.getPropertyValue(c)}`).join(";"),paddingSize:a,borderSize:r,boxSizing:u}}function ze(o,f=1,u){var a;x||(x=document.createElement("textarea"),document.body.appendChild(x));const{paddingSize:r,borderSize:i,boxSizing:c,contextStyle:g}=zt(o);x.setAttribute("style",`${g};${It}`),x.value=o.value||o.placeholder||"";let d=x.scrollHeight;const b={};c==="border-box"?d=d+i:c==="content-box"&&(d=d-r),x.value="";const w=x.scrollHeight-r;if(we(f)){let s=w*f;c==="border-box"&&(s=s+r+i),d=Math.max(s,d),b.minHeight=`${s}px`}if(we(u)){let s=w*u;c==="border-box"&&(s=s+r+i),d=Math.min(s,d)}return b.height=`${d}px`,(a=x.parentNode)==null||a.removeChild(x),x=void 0,b}const kt=We({id:{type:String,default:void 0},size:pt,disabled:Boolean,modelValue:{type:ae([String,Number,Object]),default:""},type:{type:String,default:"text"},resize:{type:String,values:["none","both","horizontal","vertical"]},autosize:{type:ae([Boolean,Object]),default:!1},autocomplete:{type:String,default:"off"},formatter:{type:Function},parser:{type:Function},placeholder:{type:String},form:{type:String},readonly:{type:Boolean,default:!1},clearable:{type:Boolean,default:!1},showPassword:{type:Boolean,default:!1},showWordLimit:{type:Boolean,default:!1},suffixIcon:{type:Se},prefixIcon:{type:Se},containerRole:{type:String,default:void 0},label:{type:String,default:void 0},tabindex:{type:[String,Number],default:0},validateEvent:{type:Boolean,default:!0},inputStyle:{type:ae([Object,Array,String]),default:()=>Ye({})},autofocus:{type:Boolean,default:!1}}),Pt={[le]:o=>oe(o),input:o=>oe(o),change:o=>oe(o),focus:o=>o instanceof FocusEvent,blur:o=>o instanceof FocusEvent,clear:()=>!0,mouseleave:o=>o instanceof MouseEvent,mouseenter:o=>o instanceof MouseEvent,keydown:o=>o instanceof Event,compositionstart:o=>o instanceof CompositionEvent,compositionupdate:o=>o instanceof CompositionEvent,compositionend:o=>o instanceof CompositionEvent},Vt=["role"],Ft=["id","type","disabled","formatter","parser","readonly","autocomplete","tabindex","aria-label","placeholder","form","autofocus"],Nt=["id","tabindex","disabled","readonly","autocomplete","aria-label","placeholder","form","autofocus"],Tt=Ve({name:"ElInput",inheritAttrs:!1}),Rt=Ve({...Tt,props:kt,emits:Pt,setup(o,{expose:f,emit:u}){const a=o,r=Xe(),i=Ge(),c=p(()=>{const e={};return a.containerRole==="combobox"&&(e["aria-haspopup"]=r["aria-haspopup"],e["aria-owns"]=r["aria-owns"],e["aria-expanded"]=r["aria-expanded"]),e}),g=p(()=>[a.type==="textarea"?ie.b():l.b(),l.m(re.value),l.is("disabled",z.value),l.is("exceed",Re.value),{[l.b("group")]:i.prepend||i.append,[l.bm("group","append")]:i.append,[l.bm("group","prepend")]:i.prepend,[l.m("prefix")]:i.prefix||a.prefixIcon,[l.m("suffix")]:i.suffix||a.suffixIcon||a.clearable||a.showPassword,[l.bm("suffix","password-clear")]:j.value&&Z.value},r.class]),d=p(()=>[l.e("wrapper"),l.is("focus",Q.value)]),b=wt({excludeKeys:p(()=>Object.keys(c.value))}),{form:w,formItem:s}=ft(),{inputId:T}=vt(a,{formItemContext:s}),re=mt(),z=yt(),l=Ce("input"),ie=Ce("textarea"),O=G(),C=G(),J=N(!1),R=N(!1),_=N(!1),ue=N(),H=G(a.inputStyle),k=p(()=>O.value||C.value),{wrapperRef:Fe,isFocused:Q,handleFocus:D,handleBlur:K}=Ct(k,{afterBlur(){var e;a.validateEvent&&((e=s==null?void 0:s.validate)==null||e.call(s,"blur").catch(n=>Ie()))}}),ce=p(()=>{var e;return(e=w==null?void 0:w.statusIcon)!=null?e:!1}),B=p(()=>(s==null?void 0:s.validateState)||""),de=p(()=>B.value&&qe[B.value]),Ne=p(()=>_.value?Je:Qe),Te=p(()=>[r.style,a.inputStyle]),pe=p(()=>[a.inputStyle,H.value,{resize:a.resize}]),E=p(()=>Ze(a.modelValue)?"":String(a.modelValue)),j=p(()=>a.clearable&&!z.value&&!a.readonly&&!!E.value&&(Q.value||J.value)),Z=p(()=>a.showPassword&&!z.value&&!a.readonly&&!!E.value&&(!!E.value||Q.value)),P=p(()=>a.showWordLimit&&!!b.value.maxlength&&(a.type==="text"||a.type==="textarea")&&!z.value&&!a.readonly&&!a.showPassword),ee=p(()=>E.value.length),Re=p(()=>!!P.value&&ee.value>Number(b.value.maxlength)),Be=p(()=>!!i.suffix||!!a.suffixIcon||j.value||a.showPassword||P.value||!!B.value&&ce.value),[Ae,Me]=St(O);et(C,e=>{if($e(),!P.value||a.resize!=="both")return;const n=e[0],{width:y}=n.contentRect;ue.value={right:`calc(100% - ${y+15+6}px)`}});const A=()=>{const{type:e,autosize:n}=a;if(!(!ke||e!=="textarea"||!C.value))if(n){const y=Ee(n)?n.minRows:void 0,U=Ee(n)?n.maxRows:void 0,xe=ze(C.value,y,U);H.value={overflowY:"hidden",...xe},V(()=>{C.value.offsetHeight,H.value=xe})}else H.value={minHeight:ze(C.value).minHeight}},$e=(e=>{let n=!1;return()=>{var y;if(n||!a.autosize)return;((y=C.value)==null?void 0:y.offsetParent)===null||(e(),n=!0)}})(A),M=()=>{const e=k.value,n=a.formatter?a.formatter(E.value):E.value;!e||e.value===n||(e.value=n)},te=async e=>{Ae();let{value:n}=e.target;if(a.formatter&&(n=a.parser?a.parser(n):n),!R.value){if(n===E.value){M();return}u(le,n),u("input",n),await V(),M(),Me()}},fe=e=>{u("change",e.target.value)},ve=e=>{u("compositionstart",e),R.value=!0},me=e=>{var n;u("compositionupdate",e);const y=(n=e.target)==null?void 0:n.value,U=y[y.length-1]||"";R.value=!gt(U)},ye=e=>{u("compositionend",e),R.value&&(R.value=!1,te(e))},Le=()=>{_.value=!_.value,he()},he=async()=>{var e;await V(),(e=k.value)==null||e.focus()},Oe=()=>{var e;return(e=k.value)==null?void 0:e.blur()},_e=e=>{J.value=!1,u("mouseleave",e)},He=e=>{J.value=!0,u("mouseenter",e)},ge=e=>{u("keydown",e)},De=()=>{var e;(e=k.value)==null||e.select()},be=()=>{u(le,""),u("change",""),u("clear"),u("input","")};return q(()=>a.modelValue,()=>{var e;V(()=>A()),a.validateEvent&&((e=s==null?void 0:s.validate)==null||e.call(s,"change").catch(n=>Ie()))}),q(E,()=>M()),q(()=>a.type,async()=>{await V(),M(),A()}),tt(()=>{!a.formatter&&a.parser,M(),V(A)}),f({input:O,textarea:C,ref:k,textareaStyle:pe,autosize:at(a,"autosize"),focus:he,blur:Oe,select:De,clear:be,resizeTextarea:A}),(e,n)=>ot((v(),S("div",se(t(c),{class:t(g),style:t(Te),role:e.containerRole,onMouseenter:He,onMouseleave:_e}),[m(" input "),e.type!=="textarea"?(v(),S(ne,{key:0},[m(" prepend slot "),e.$slots.prepend?(v(),S("div",{key:0,class:h(t(l).be("group","prepend"))},[W(e.$slots,"prepend")],2)):m("v-if",!0),F("div",{ref_key:"wrapperRef",ref:Fe,class:h(t(d))},[m(" prefix slot "),e.$slots.prefix||e.prefixIcon?(v(),S("span",{key:0,class:h(t(l).e("prefix"))},[F("span",{class:h(t(l).e("prefix-inner"))},[W(e.$slots,"prefix"),e.prefixIcon?(v(),I(t(L),{key:0,class:h(t(l).e("icon"))},{default:$(()=>[(v(),I(Y(e.prefixIcon)))]),_:1},8,["class"])):m("v-if",!0)],2)],2)):m("v-if",!0),F("input",se({id:t(T),ref_key:"input",ref:O,class:t(l).e("inner")},t(b),{type:e.showPassword?_.value?"text":"password":e.type,disabled:t(z),formatter:e.formatter,parser:e.parser,readonly:e.readonly,autocomplete:e.autocomplete,tabindex:e.tabindex,"aria-label":e.label,placeholder:e.placeholder,style:e.inputStyle,form:a.form,autofocus:a.autofocus,onCompositionstart:ve,onCompositionupdate:me,onCompositionend:ye,onInput:te,onFocus:n[0]||(n[0]=(...y)=>t(D)&&t(D)(...y)),onBlur:n[1]||(n[1]=(...y)=>t(K)&&t(K)(...y)),onChange:fe,onKeydown:ge}),null,16,Ft),m(" suffix slot "),t(Be)?(v(),S("span",{key:1,class:h(t(l).e("suffix"))},[F("span",{class:h(t(l).e("suffix-inner"))},[!t(j)||!t(Z)||!t(P)?(v(),S(ne,{key:0},[W(e.$slots,"suffix"),e.suffixIcon?(v(),I(t(L),{key:0,class:h(t(l).e("icon"))},{default:$(()=>[(v(),I(Y(e.suffixIcon)))]),_:1},8,["class"])):m("v-if",!0)],64)):m("v-if",!0),t(j)?(v(),I(t(L),{key:1,class:h([t(l).e("icon"),t(l).e("clear")]),onMousedown:rt(t(it),["prevent"]),onClick:be},{default:$(()=>[st(t(lt))]),_:1},8,["class","onMousedown"])):m("v-if",!0),t(Z)?(v(),I(t(L),{key:2,class:h([t(l).e("icon"),t(l).e("password")]),onClick:Le},{default:$(()=>[(v(),I(Y(t(Ne))))]),_:1},8,["class"])):m("v-if",!0),t(P)?(v(),S("span",{key:3,class:h(t(l).e("count"))},[F("span",{class:h(t(l).e("count-inner"))},X(t(ee))+" / "+X(t(b).maxlength),3)],2)):m("v-if",!0),t(B)&&t(de)&&t(ce)?(v(),I(t(L),{key:4,class:h([t(l).e("icon"),t(l).e("validateIcon"),t(l).is("loading",t(B)==="validating")])},{default:$(()=>[(v(),I(Y(t(de))))]),_:1},8,["class"])):m("v-if",!0)],2)],2)):m("v-if",!0)],2),m(" append slot "),e.$slots.append?(v(),S("div",{key:1,class:h(t(l).be("group","append"))},[W(e.$slots,"append")],2)):m("v-if",!0)],64)):(v(),S(ne,{key:1},[m(" textarea "),F("textarea",se({id:t(T),ref_key:"textarea",ref:C,class:t(ie).e("inner")},t(b),{tabindex:e.tabindex,disabled:t(z),readonly:e.readonly,autocomplete:e.autocomplete,style:t(pe),"aria-label":e.label,placeholder:e.placeholder,form:a.form,autofocus:a.autofocus,onCompositionstart:ve,onCompositionupdate:me,onCompositionend:ye,onInput:te,onFocus:n[2]||(n[2]=(...y)=>t(D)&&t(D)(...y)),onBlur:n[3]||(n[3]=(...y)=>t(K)&&t(K)(...y)),onChange:fe,onKeydown:ge}),null,16,Nt),t(P)?(v(),S("span",{key:0,style:ut(ue.value),class:h(t(l).e("count"))},X(t(ee))+" / "+X(t(b).maxlength),7)):m("v-if",!0)],64))],16,Vt)),[[nt,e.type!=="hidden"]])}});var Bt=ct(Rt,[["__file","/home/runner/work/element-plus/element-plus/packages/components/input/src/input.vue"]]);const _t=dt(Bt);export{Lt as C,_t as E,Ot as I,le as U,gt as i,Ct as u};