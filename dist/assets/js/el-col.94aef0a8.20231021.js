import{b as g,e as p,u as _,c as n,z as k,f as h,A as w,B as $,a4 as v,n as j,k as c,l as N,ai as C,_ as x,R,d as u,aM as r,t as O,T as b,an as S}from"./index.fd9023e2.20231021.js";const E=Symbol("rowContextKey"),K=["start","center","end","space-around","space-between","space-evenly"],B=["top","middle","bottom"],P=g({tag:{type:String,default:"div"},gutter:{type:Number,default:0},justify:{type:String,values:K,default:"start"},align:{type:String,values:B}}),A=p({name:"ElRow"}),L=p({...A,props:P,setup(f){const t=f,l=_("row"),a=n(()=>t.gutter);k(E,{gutter:a});const i=n(()=>{const e={};return t.gutter&&(e.marginRight=e.marginLeft=`-${t.gutter/2}px`),e}),m=n(()=>[l.b(),l.is(`justify-${t.justify}`,t.justify!=="start"),l.is(`align-${t.align}`,!!t.align)]);return(e,d)=>(h(),w(C(e.tag),{class:j(c(m)),style:N(c(i))},{default:$(()=>[v(e.$slots,"default")]),_:3},8,["class","style"]))}});var T=x(L,[["__file","/home/runner/work/element-plus/element-plus/packages/components/row/src/row.vue"]]);const G=R(T),D=g({tag:{type:String,default:"div"},span:{type:Number,default:24},offset:{type:Number,default:0},pull:{type:Number,default:0},push:{type:Number,default:0},xs:{type:u([Number,Object]),default:()=>r({})},sm:{type:u([Number,Object]),default:()=>r({})},md:{type:u([Number,Object]),default:()=>r({})},lg:{type:u([Number,Object]),default:()=>r({})},xl:{type:u([Number,Object]),default:()=>r({})}}),I=p({name:"ElCol"}),J=p({...I,props:D,setup(f){const t=f,{gutter:l}=O(E,{gutter:n(()=>0)}),a=_("col"),i=n(()=>{const e={};return l.value&&(e.paddingLeft=e.paddingRight=`${l.value/2}px`),e}),m=n(()=>{const e=[];return["span","offset","pull","push"].forEach(s=>{const o=t[s];b(o)&&(s==="span"?e.push(a.b(`${t[s]}`)):o>0&&e.push(a.b(`${s}-${t[s]}`)))}),["xs","sm","md","lg","xl"].forEach(s=>{b(t[s])?e.push(a.b(`${s}-${t[s]}`)):S(t[s])&&Object.entries(t[s]).forEach(([o,y])=>{e.push(o!=="span"?a.b(`${s}-${o}-${y}`):a.b(`${s}-${y}`))})}),l.value&&e.push(a.is("guttered")),[a.b(),e]});return(e,d)=>(h(),w(C(e.tag),{class:j(c(m)),style:N(c(i))},{default:$(()=>[v(e.$slots,"default")]),_:3},8,["class","style"]))}});var M=x(J,[["__file","/home/runner/work/element-plus/element-plus/packages/components/col/src/col.vue"]]);const H=R(M);export{G as E,H as a};