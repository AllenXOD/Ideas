import{b as qe,d as ve,U as Rt,m as me,a8 as it,r as W,c as T,e as X,u as Ee,w as ie,z as at,y as st,X as ot,a9 as _e,f as ye,h as ft,a4 as te,n as z,k as _,_ as ut,P as Bt,aa as lt,t as ae,ab as he,W as Wt,o as dt,ac as ct,ad as Ct,ae as Vt,E as se,F as Dt,O as pt,af as Ut,ag as Gt,ah as Kt,a as Ne,B as ce,A as zt,ai as Yt,l as Le,H as Jt,I as Re,G as Be,j as We,aj as Zt,R as Ht,ak as Xt}from"./index.fd9023e2.20231021.js";import{e as gt,b as vt}from"./use-form-item.4cf4ceef.20231021.js";import{i as Z,g as Qt,e as kt,a as mt,b as er,c as tr,o as rr,d as yt,k as ht,r as nr,f as bt,s as ir,h as ar,j as sr,U as Ce,S as Ve,l as wt,m as Te,n as oe,p as Ft,q as or,t as fr,u as ur,v as lr,w as dr,x as cr,y as pr}from"./el-button.628ab2fb.20231021.js";var De=Object.create,gr=function(){function t(){}return function(e){if(!Z(e))return{};if(De)return De(e);t.prototype=e;var r=new t;return t.prototype=void 0,r}}();const vr=gr;function mr(t,e){var r=-1,n=t.length;for(e||(e=Array(n));++r<n;)e[r]=t[r];return e}var yr=function(){try{var t=Qt(Object,"defineProperty");return t({},"",{}),t}catch{}}();const Ue=yr;function hr(t,e){for(var r=-1,n=t==null?0:t.length;++r<n&&e(t[r],r,t)!==!1;);return t}function xt(t,e,r){e=="__proto__"&&Ue?Ue(t,e,{configurable:!0,enumerable:!0,value:r,writable:!0}):t[e]=r}var br=Object.prototype,wr=br.hasOwnProperty;function Pe(t,e,r){var n=t[e];(!(wr.call(t,e)&&kt(n,r))||r===void 0&&!(e in t))&&xt(t,e,r)}function fe(t,e,r,n){var i=!r;r||(r={});for(var s=-1,a=e.length;++s<a;){var o=e[s],f=n?n(r[o],t[o],o,r,t):void 0;f===void 0&&(f=t[o]),i?xt(r,o,f):Pe(r,o,f)}return r}function Fr(t){var e=[];if(t!=null)for(var r in Object(t))e.push(r);return e}var xr=Object.prototype,Or=xr.hasOwnProperty;function Ar(t){if(!Z(t))return Fr(t);var e=mt(t),r=[];for(var n in t)n=="constructor"&&(e||!Or.call(t,n))||r.push(n);return r}function Se(t){return er(t)?tr(t,!0):Ar(t)}var qr=rr(Object.getPrototypeOf,Object);const Ot=qr;function be(){if(!arguments.length)return[];var t=arguments[0];return yt(t)?t:[t]}function Er(t,e){return t&&fe(e,ht(e),t)}function _r(t,e){return t&&fe(e,Se(e),t)}var At=typeof exports=="object"&&exports&&!exports.nodeType&&exports,Ge=At&&typeof module=="object"&&module&&!module.nodeType&&module,Tr=Ge&&Ge.exports===At,Ke=Tr?nr.Buffer:void 0,ze=Ke?Ke.allocUnsafe:void 0;function Pr(t,e){if(e)return t.slice();var r=t.length,n=ze?ze(r):new t.constructor(r);return t.copy(n),n}function Sr(t,e){return fe(t,bt(t),e)}var jr=Object.getOwnPropertySymbols,$r=jr?function(t){for(var e=[];t;)ar(e,bt(t)),t=Ot(t);return e}:ir;const qt=$r;function Ir(t,e){return fe(t,qt(t),e)}function Mr(t){return sr(t,Se,qt)}var Nr=Object.prototype,Lr=Nr.hasOwnProperty;function Rr(t){var e=t.length,r=new t.constructor(e);return e&&typeof t[0]=="string"&&Lr.call(t,"index")&&(r.index=t.index,r.input=t.input),r}function je(t){var e=new t.constructor(t.byteLength);return new Ce(e).set(new Ce(t)),e}function Br(t,e){var r=e?je(t.buffer):t.buffer;return new t.constructor(r,t.byteOffset,t.byteLength)}var Wr=/\w*$/;function Cr(t){var e=new t.constructor(t.source,Wr.exec(t));return e.lastIndex=t.lastIndex,e}var Ye=Ve?Ve.prototype:void 0,Je=Ye?Ye.valueOf:void 0;function Vr(t){return Je?Object(Je.call(t)):{}}function Dr(t,e){var r=e?je(t.buffer):t.buffer;return new t.constructor(r,t.byteOffset,t.length)}var Ur="[object Boolean]",Gr="[object Date]",Kr="[object Map]",zr="[object Number]",Yr="[object RegExp]",Jr="[object Set]",Zr="[object String]",Hr="[object Symbol]",Xr="[object ArrayBuffer]",Qr="[object DataView]",kr="[object Float32Array]",en="[object Float64Array]",tn="[object Int8Array]",rn="[object Int16Array]",nn="[object Int32Array]",an="[object Uint8Array]",sn="[object Uint8ClampedArray]",on="[object Uint16Array]",fn="[object Uint32Array]";function un(t,e,r){var n=t.constructor;switch(e){case Xr:return je(t);case Ur:case Gr:return new n(+t);case Qr:return Br(t,r);case kr:case en:case tn:case rn:case nn:case an:case sn:case on:case fn:return Dr(t,r);case Kr:return new n;case zr:case Zr:return new n(t);case Yr:return Cr(t);case Jr:return new n;case Hr:return Vr(t)}}function ln(t){return typeof t.constructor=="function"&&!mt(t)?vr(Ot(t)):{}}var dn="[object Map]";function cn(t){return wt(t)&&Te(t)==dn}var Ze=oe&&oe.isMap,pn=Ze?Ft(Ze):cn;const gn=pn;var vn="[object Set]";function mn(t){return wt(t)&&Te(t)==vn}var He=oe&&oe.isSet,yn=He?Ft(He):mn;const hn=yn;var bn=1,wn=2,Fn=4,Et="[object Arguments]",xn="[object Array]",On="[object Boolean]",An="[object Date]",qn="[object Error]",_t="[object Function]",En="[object GeneratorFunction]",_n="[object Map]",Tn="[object Number]",Tt="[object Object]",Pn="[object RegExp]",Sn="[object Set]",jn="[object String]",$n="[object Symbol]",In="[object WeakMap]",Mn="[object ArrayBuffer]",Nn="[object DataView]",Ln="[object Float32Array]",Rn="[object Float64Array]",Bn="[object Int8Array]",Wn="[object Int16Array]",Cn="[object Int32Array]",Vn="[object Uint8Array]",Dn="[object Uint8ClampedArray]",Un="[object Uint16Array]",Gn="[object Uint32Array]",O={};O[Et]=O[xn]=O[Mn]=O[Nn]=O[On]=O[An]=O[Ln]=O[Rn]=O[Bn]=O[Wn]=O[Cn]=O[_n]=O[Tn]=O[Tt]=O[Pn]=O[Sn]=O[jn]=O[$n]=O[Vn]=O[Dn]=O[Un]=O[Gn]=!0;O[qn]=O[_t]=O[In]=!1;function re(t,e,r,n,i,s){var a,o=e&bn,f=e&wn,y=e&Fn;if(r&&(a=i?r(t,n,i,s):r(t)),a!==void 0)return a;if(!Z(t))return t;var c=yt(t);if(c){if(a=Rr(t),!o)return mr(t,a)}else{var g=Te(t),w=g==_t||g==En;if(or(t))return Pr(t,o);if(g==Tt||g==Et||w&&!i){if(a=f||w?{}:ln(t),!o)return f?Ir(t,_r(a,t)):Sr(t,Er(a,t))}else{if(!O[g])return i?t:{};a=un(t,g,o)}}s||(s=new fr);var q=s.get(t);if(q)return q;s.set(t,a),hn(t)?t.forEach(function(v){a.add(re(v,e,r,v,t,s))}):gn(t)&&t.forEach(function(v,u){a.set(u,re(v,e,r,u,t,s))});var E=y?f?Mr:ur:f?Se:ht,d=c?void 0:E(t);return hr(d||t,function(v,u){d&&(u=v,v=t[u]),Pe(a,u,re(v,e,r,u,t,s))}),a}var Kn=4;function Xe(t){return re(t,Kn)}function zn(t,e,r,n){if(!Z(t))return t;e=lr(e,t);for(var i=-1,s=e.length,a=s-1,o=t;o!=null&&++i<s;){var f=dr(e[i]),y=r;if(f==="__proto__"||f==="constructor"||f==="prototype")return t;if(i!=a){var c=o[f];y=n?n(c,f,o):void 0,y===void 0&&(y=Z(c)?c:cr(e[i+1])?[]:{})}Pe(o,f,y),o=o[f]}return t}function Yn(t,e,r){return t==null?t:zn(t,e,r)}const pe=(t,e,r)=>({get value(){return pr(t,e,r)},set value(n){Yn(t,e,n)}}),Jn=qe({size:{type:String,values:gt},disabled:Boolean}),Zn=qe({...Jn,model:Object,rules:{type:ve(Object)},labelPosition:{type:String,values:["left","right","top"],default:"right"},requireAsteriskPosition:{type:String,values:["left","right"],default:"left"},labelWidth:{type:[String,Number],default:""},labelSuffix:{type:String,default:""},inline:Boolean,inlineMessage:Boolean,statusIcon:Boolean,showMessage:{type:Boolean,default:!0},validateOnRuleChange:{type:Boolean,default:!0},hideRequiredAsterisk:Boolean,scrollToError:Boolean,scrollIntoViewOptions:{type:[Object,Boolean]}}),Hn={validate:(t,e,r)=>(Rt(t)||me(t))&&it(e)&&me(r)};function Xn(){const t=W([]),e=T(()=>{if(!t.value.length)return"0";const s=Math.max(...t.value);return s?`${s}px`:""});function r(s){const a=t.value.indexOf(s);return a===-1&&e.value,a}function n(s,a){if(s&&a){const o=r(a);t.value.splice(o,1,s)}else s&&t.value.push(s)}function i(s){const a=r(s);a>-1&&t.value.splice(a,1)}return{autoLabelWidth:e,registerLabelWidth:n,deregisterLabelWidth:i}}const k=(t,e)=>{const r=be(e);return r.length>0?t.filter(n=>n.prop&&r.includes(n.prop)):t},Qn="ElForm",kn=X({name:Qn}),ei=X({...kn,props:Zn,emits:Hn,setup(t,{expose:e,emit:r}){const n=t,i=[],s=vt(),a=Ee("form"),o=T(()=>{const{labelPosition:m,inline:l}=n;return[a.b(),a.m(s.value||"default"),{[a.m(`label-${m}`)]:m,[a.m("inline")]:l}]}),f=m=>{i.push(m)},y=m=>{m.prop&&i.splice(i.indexOf(m),1)},c=(m=[])=>{n.model&&k(i,m).forEach(l=>l.resetField())},g=(m=[])=>{k(i,m).forEach(l=>l.clearValidate())},w=T(()=>!!n.model),q=m=>{if(i.length===0)return[];const l=k(i,m);return l.length?l:[]},E=async m=>v(void 0,m),d=async(m=[])=>{if(!w.value)return!1;const l=q(m);if(l.length===0)return!0;let b={};for(const x of l)try{await x.validate("")}catch(A){b={...b,...A}}return Object.keys(b).length===0?!0:Promise.reject(b)},v=async(m=[],l)=>{const b=!lt(l);try{const x=await d(m);return x===!0&&(l==null||l(x)),x}catch(x){if(x instanceof Error)throw x;const A=x;return n.scrollToError&&u(Object.keys(A)[0]),l==null||l(!1,A),b&&Promise.reject(A)}},u=m=>{var l;const b=k(i,m)[0];b&&((l=b.$el)==null||l.scrollIntoView(n.scrollIntoViewOptions))};return ie(()=>n.rules,()=>{n.validateOnRuleChange&&E().catch(m=>Bt())},{deep:!0}),at(_e,st({...ot(n),emit:r,resetFields:c,clearValidate:g,validateField:v,addField:f,removeField:y,...Xn()})),e({validate:E,validateField:v,resetFields:c,clearValidate:g,scrollToField:u}),(m,l)=>(ye(),ft("form",{class:z(_(o))},[te(m.$slots,"default")],2))}});var ti=ut(ei,[["__file","/home/runner/work/element-plus/element-plus/packages/components/form/src/form.vue"]]);function C(){return C=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var r=arguments[e];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(t[n]=r[n])}return t},C.apply(this,arguments)}function ri(t,e){t.prototype=Object.create(e.prototype),t.prototype.constructor=t,H(t,e)}function we(t){return we=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(r){return r.__proto__||Object.getPrototypeOf(r)},we(t)}function H(t,e){return H=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(n,i){return n.__proto__=i,n},H(t,e)}function ni(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch{return!1}}function ne(t,e,r){return ni()?ne=Reflect.construct.bind():ne=function(i,s,a){var o=[null];o.push.apply(o,s);var f=Function.bind.apply(i,o),y=new f;return a&&H(y,a.prototype),y},ne.apply(null,arguments)}function ii(t){return Function.toString.call(t).indexOf("[native code]")!==-1}function Fe(t){var e=typeof Map=="function"?new Map:void 0;return Fe=function(n){if(n===null||!ii(n))return n;if(typeof n!="function")throw new TypeError("Super expression must either be null or a function");if(typeof e<"u"){if(e.has(n))return e.get(n);e.set(n,i)}function i(){return ne(n,arguments,we(this).constructor)}return i.prototype=Object.create(n.prototype,{constructor:{value:i,enumerable:!1,writable:!0,configurable:!0}}),H(i,n)},Fe(t)}var ai=/%[sdj%]/g,si=function(){};typeof process<"u"&&process.env;function xe(t){if(!t||!t.length)return null;var e={};return t.forEach(function(r){var n=r.field;e[n]=e[n]||[],e[n].push(r)}),e}function I(t){for(var e=arguments.length,r=new Array(e>1?e-1:0),n=1;n<e;n++)r[n-1]=arguments[n];var i=0,s=r.length;if(typeof t=="function")return t.apply(null,r);if(typeof t=="string"){var a=t.replace(ai,function(o){if(o==="%%")return"%";if(i>=s)return o;switch(o){case"%s":return String(r[i++]);case"%d":return Number(r[i++]);case"%j":try{return JSON.stringify(r[i++])}catch{return"[Circular]"}break;default:return o}});return a}return t}function oi(t){return t==="string"||t==="url"||t==="hex"||t==="email"||t==="date"||t==="pattern"}function P(t,e){return!!(t==null||e==="array"&&Array.isArray(t)&&!t.length||oi(e)&&typeof t=="string"&&!t)}function fi(t,e,r){var n=[],i=0,s=t.length;function a(o){n.push.apply(n,o||[]),i++,i===s&&r(n)}t.forEach(function(o){e(o,a)})}function Qe(t,e,r){var n=0,i=t.length;function s(a){if(a&&a.length){r(a);return}var o=n;n=n+1,o<i?e(t[o],s):r([])}s([])}function ui(t){var e=[];return Object.keys(t).forEach(function(r){e.push.apply(e,t[r]||[])}),e}var ke=function(t){ri(e,t);function e(r,n){var i;return i=t.call(this,"Async Validation Error")||this,i.errors=r,i.fields=n,i}return e}(Fe(Error));function li(t,e,r,n,i){if(e.first){var s=new Promise(function(w,q){var E=function(u){return n(u),u.length?q(new ke(u,xe(u))):w(i)},d=ui(t);Qe(d,r,E)});return s.catch(function(w){return w}),s}var a=e.firstFields===!0?Object.keys(t):e.firstFields||[],o=Object.keys(t),f=o.length,y=0,c=[],g=new Promise(function(w,q){var E=function(v){if(c.push.apply(c,v),y++,y===f)return n(c),c.length?q(new ke(c,xe(c))):w(i)};o.length||(n(c),w(i)),o.forEach(function(d){var v=t[d];a.indexOf(d)!==-1?Qe(v,r,E):fi(v,r,E)})});return g.catch(function(w){return w}),g}function di(t){return!!(t&&t.message!==void 0)}function ci(t,e){for(var r=t,n=0;n<e.length;n++){if(r==null)return r;r=r[e[n]]}return r}function et(t,e){return function(r){var n;return t.fullFields?n=ci(e,t.fullFields):n=e[r.field||t.fullField],di(r)?(r.field=r.field||t.fullField,r.fieldValue=n,r):{message:typeof r=="function"?r():r,fieldValue:n,field:r.field||t.fullField}}}function tt(t,e){if(e){for(var r in e)if(e.hasOwnProperty(r)){var n=e[r];typeof n=="object"&&typeof t[r]=="object"?t[r]=C({},t[r],n):t[r]=n}}return t}var Pt=function(e,r,n,i,s,a){e.required&&(!n.hasOwnProperty(e.field)||P(r,a||e.type))&&i.push(I(s.messages.required,e.fullField))},pi=function(e,r,n,i,s){(/^\s+$/.test(r)||r==="")&&i.push(I(s.messages.whitespace,e.fullField))},ee,gi=function(){if(ee)return ee;var t="[a-fA-F\\d:]",e=function(b){return b&&b.includeBoundaries?"(?:(?<=\\s|^)(?="+t+")|(?<="+t+")(?=\\s|$))":""},r="(?:25[0-5]|2[0-4]\\d|1\\d\\d|[1-9]\\d|\\d)(?:\\.(?:25[0-5]|2[0-4]\\d|1\\d\\d|[1-9]\\d|\\d)){3}",n="[a-fA-F\\d]{1,4}",i=(`
(?:
(?:`+n+":){7}(?:"+n+`|:)|                                    // 1:2:3:4:5:6:7::  1:2:3:4:5:6:7:8
(?:`+n+":){6}(?:"+r+"|:"+n+`|:)|                             // 1:2:3:4:5:6::    1:2:3:4:5:6::8   1:2:3:4:5:6::8  1:2:3:4:5:6::1.2.3.4
(?:`+n+":){5}(?::"+r+"|(?::"+n+`){1,2}|:)|                   // 1:2:3:4:5::      1:2:3:4:5::7:8   1:2:3:4:5::8    1:2:3:4:5::7:1.2.3.4
(?:`+n+":){4}(?:(?::"+n+"){0,1}:"+r+"|(?::"+n+`){1,3}|:)| // 1:2:3:4::        1:2:3:4::6:7:8   1:2:3:4::8      1:2:3:4::6:7:1.2.3.4
(?:`+n+":){3}(?:(?::"+n+"){0,2}:"+r+"|(?::"+n+`){1,4}|:)| // 1:2:3::          1:2:3::5:6:7:8   1:2:3::8        1:2:3::5:6:7:1.2.3.4
(?:`+n+":){2}(?:(?::"+n+"){0,3}:"+r+"|(?::"+n+`){1,5}|:)| // 1:2::            1:2::4:5:6:7:8   1:2::8          1:2::4:5:6:7:1.2.3.4
(?:`+n+":){1}(?:(?::"+n+"){0,4}:"+r+"|(?::"+n+`){1,6}|:)| // 1::              1::3:4:5:6:7:8   1::8            1::3:4:5:6:7:1.2.3.4
(?::(?:(?::`+n+"){0,5}:"+r+"|(?::"+n+`){1,7}|:))             // ::2:3:4:5:6:7:8  ::2:3:4:5:6:7:8  ::8             ::1.2.3.4
)(?:%[0-9a-zA-Z]{1,})?                                             // %eth0            %1
`).replace(/\s*\/\/.*$/gm,"").replace(/\n/g,"").trim(),s=new RegExp("(?:^"+r+"$)|(?:^"+i+"$)"),a=new RegExp("^"+r+"$"),o=new RegExp("^"+i+"$"),f=function(b){return b&&b.exact?s:new RegExp("(?:"+e(b)+r+e(b)+")|(?:"+e(b)+i+e(b)+")","g")};f.v4=function(l){return l&&l.exact?a:new RegExp(""+e(l)+r+e(l),"g")},f.v6=function(l){return l&&l.exact?o:new RegExp(""+e(l)+i+e(l),"g")};var y="(?:(?:[a-z]+:)?//)",c="(?:\\S+(?::\\S*)?@)?",g=f.v4().source,w=f.v6().source,q="(?:(?:[a-z\\u00a1-\\uffff0-9][-_]*)*[a-z\\u00a1-\\uffff0-9]+)",E="(?:\\.(?:[a-z\\u00a1-\\uffff0-9]-*)*[a-z\\u00a1-\\uffff0-9]+)*",d="(?:\\.(?:[a-z\\u00a1-\\uffff]{2,}))",v="(?::\\d{2,5})?",u='(?:[/?#][^\\s"]*)?',m="(?:"+y+"|www\\.)"+c+"(?:localhost|"+g+"|"+w+"|"+q+E+d+")"+v+u;return ee=new RegExp("(?:^"+m+"$)","i"),ee},rt={email:/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+\.)+[a-zA-Z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]{2,}))$/,hex:/^#?([a-f0-9]{6}|[a-f0-9]{3})$/i},Y={integer:function(e){return Y.number(e)&&parseInt(e,10)===e},float:function(e){return Y.number(e)&&!Y.integer(e)},array:function(e){return Array.isArray(e)},regexp:function(e){if(e instanceof RegExp)return!0;try{return!!new RegExp(e)}catch{return!1}},date:function(e){return typeof e.getTime=="function"&&typeof e.getMonth=="function"&&typeof e.getYear=="function"&&!isNaN(e.getTime())},number:function(e){return isNaN(e)?!1:typeof e=="number"},object:function(e){return typeof e=="object"&&!Y.array(e)},method:function(e){return typeof e=="function"},email:function(e){return typeof e=="string"&&e.length<=320&&!!e.match(rt.email)},url:function(e){return typeof e=="string"&&e.length<=2048&&!!e.match(gi())},hex:function(e){return typeof e=="string"&&!!e.match(rt.hex)}},vi=function(e,r,n,i,s){if(e.required&&r===void 0){Pt(e,r,n,i,s);return}var a=["integer","float","array","regexp","object","method","email","number","date","url","hex"],o=e.type;a.indexOf(o)>-1?Y[o](r)||i.push(I(s.messages.types[o],e.fullField,e.type)):o&&typeof r!==e.type&&i.push(I(s.messages.types[o],e.fullField,e.type))},mi=function(e,r,n,i,s){var a=typeof e.len=="number",o=typeof e.min=="number",f=typeof e.max=="number",y=/[\uD800-\uDBFF][\uDC00-\uDFFF]/g,c=r,g=null,w=typeof r=="number",q=typeof r=="string",E=Array.isArray(r);if(w?g="number":q?g="string":E&&(g="array"),!g)return!1;E&&(c=r.length),q&&(c=r.replace(y,"_").length),a?c!==e.len&&i.push(I(s.messages[g].len,e.fullField,e.len)):o&&!f&&c<e.min?i.push(I(s.messages[g].min,e.fullField,e.min)):f&&!o&&c>e.max?i.push(I(s.messages[g].max,e.fullField,e.max)):o&&f&&(c<e.min||c>e.max)&&i.push(I(s.messages[g].range,e.fullField,e.min,e.max))},G="enum",yi=function(e,r,n,i,s){e[G]=Array.isArray(e[G])?e[G]:[],e[G].indexOf(r)===-1&&i.push(I(s.messages[G],e.fullField,e[G].join(", ")))},hi=function(e,r,n,i,s){if(e.pattern){if(e.pattern instanceof RegExp)e.pattern.lastIndex=0,e.pattern.test(r)||i.push(I(s.messages.pattern.mismatch,e.fullField,r,e.pattern));else if(typeof e.pattern=="string"){var a=new RegExp(e.pattern);a.test(r)||i.push(I(s.messages.pattern.mismatch,e.fullField,r,e.pattern))}}},h={required:Pt,whitespace:pi,type:vi,range:mi,enum:yi,pattern:hi},bi=function(e,r,n,i,s){var a=[],o=e.required||!e.required&&i.hasOwnProperty(e.field);if(o){if(P(r,"string")&&!e.required)return n();h.required(e,r,i,a,s,"string"),P(r,"string")||(h.type(e,r,i,a,s),h.range(e,r,i,a,s),h.pattern(e,r,i,a,s),e.whitespace===!0&&h.whitespace(e,r,i,a,s))}n(a)},wi=function(e,r,n,i,s){var a=[],o=e.required||!e.required&&i.hasOwnProperty(e.field);if(o){if(P(r)&&!e.required)return n();h.required(e,r,i,a,s),r!==void 0&&h.type(e,r,i,a,s)}n(a)},Fi=function(e,r,n,i,s){var a=[],o=e.required||!e.required&&i.hasOwnProperty(e.field);if(o){if(r===""&&(r=void 0),P(r)&&!e.required)return n();h.required(e,r,i,a,s),r!==void 0&&(h.type(e,r,i,a,s),h.range(e,r,i,a,s))}n(a)},xi=function(e,r,n,i,s){var a=[],o=e.required||!e.required&&i.hasOwnProperty(e.field);if(o){if(P(r)&&!e.required)return n();h.required(e,r,i,a,s),r!==void 0&&h.type(e,r,i,a,s)}n(a)},Oi=function(e,r,n,i,s){var a=[],o=e.required||!e.required&&i.hasOwnProperty(e.field);if(o){if(P(r)&&!e.required)return n();h.required(e,r,i,a,s),P(r)||h.type(e,r,i,a,s)}n(a)},Ai=function(e,r,n,i,s){var a=[],o=e.required||!e.required&&i.hasOwnProperty(e.field);if(o){if(P(r)&&!e.required)return n();h.required(e,r,i,a,s),r!==void 0&&(h.type(e,r,i,a,s),h.range(e,r,i,a,s))}n(a)},qi=function(e,r,n,i,s){var a=[],o=e.required||!e.required&&i.hasOwnProperty(e.field);if(o){if(P(r)&&!e.required)return n();h.required(e,r,i,a,s),r!==void 0&&(h.type(e,r,i,a,s),h.range(e,r,i,a,s))}n(a)},Ei=function(e,r,n,i,s){var a=[],o=e.required||!e.required&&i.hasOwnProperty(e.field);if(o){if(r==null&&!e.required)return n();h.required(e,r,i,a,s,"array"),r!=null&&(h.type(e,r,i,a,s),h.range(e,r,i,a,s))}n(a)},_i=function(e,r,n,i,s){var a=[],o=e.required||!e.required&&i.hasOwnProperty(e.field);if(o){if(P(r)&&!e.required)return n();h.required(e,r,i,a,s),r!==void 0&&h.type(e,r,i,a,s)}n(a)},Ti="enum",Pi=function(e,r,n,i,s){var a=[],o=e.required||!e.required&&i.hasOwnProperty(e.field);if(o){if(P(r)&&!e.required)return n();h.required(e,r,i,a,s),r!==void 0&&h[Ti](e,r,i,a,s)}n(a)},Si=function(e,r,n,i,s){var a=[],o=e.required||!e.required&&i.hasOwnProperty(e.field);if(o){if(P(r,"string")&&!e.required)return n();h.required(e,r,i,a,s),P(r,"string")||h.pattern(e,r,i,a,s)}n(a)},ji=function(e,r,n,i,s){var a=[],o=e.required||!e.required&&i.hasOwnProperty(e.field);if(o){if(P(r,"date")&&!e.required)return n();if(h.required(e,r,i,a,s),!P(r,"date")){var f;r instanceof Date?f=r:f=new Date(r),h.type(e,f,i,a,s),f&&h.range(e,f.getTime(),i,a,s)}}n(a)},$i=function(e,r,n,i,s){var a=[],o=Array.isArray(r)?"array":typeof r;h.required(e,r,i,a,s,o),n(a)},ge=function(e,r,n,i,s){var a=e.type,o=[],f=e.required||!e.required&&i.hasOwnProperty(e.field);if(f){if(P(r,a)&&!e.required)return n();h.required(e,r,i,o,s,a),P(r,a)||h.type(e,r,i,o,s)}n(o)},Ii=function(e,r,n,i,s){var a=[],o=e.required||!e.required&&i.hasOwnProperty(e.field);if(o){if(P(r)&&!e.required)return n();h.required(e,r,i,a,s)}n(a)},J={string:bi,method:wi,number:Fi,boolean:xi,regexp:Oi,integer:Ai,float:qi,array:Ei,object:_i,enum:Pi,pattern:Si,date:ji,url:ge,hex:ge,email:ge,required:$i,any:Ii};function Oe(){return{default:"Validation error on field %s",required:"%s is required",enum:"%s must be one of %s",whitespace:"%s cannot be empty",date:{format:"%s date %s is invalid for format %s",parse:"%s date could not be parsed, %s is invalid ",invalid:"%s date %s is invalid"},types:{string:"%s is not a %s",method:"%s is not a %s (function)",array:"%s is not an %s",object:"%s is not an %s",number:"%s is not a %s",date:"%s is not a %s",boolean:"%s is not a %s",integer:"%s is not an %s",float:"%s is not a %s",regexp:"%s is not a valid %s",email:"%s is not a valid %s",url:"%s is not a valid %s",hex:"%s is not a valid %s"},string:{len:"%s must be exactly %s characters",min:"%s must be at least %s characters",max:"%s cannot be longer than %s characters",range:"%s must be between %s and %s characters"},number:{len:"%s must equal %s",min:"%s cannot be less than %s",max:"%s cannot be greater than %s",range:"%s must be between %s and %s"},array:{len:"%s must be exactly %s in length",min:"%s cannot be less than %s in length",max:"%s cannot be greater than %s in length",range:"%s must be between %s and %s in length"},pattern:{mismatch:"%s value %s does not match pattern %s"},clone:function(){var e=JSON.parse(JSON.stringify(this));return e.clone=this.clone,e}}}var Ae=Oe(),Q=function(){function t(r){this.rules=null,this._messages=Ae,this.define(r)}var e=t.prototype;return e.define=function(n){var i=this;if(!n)throw new Error("Cannot configure a schema with no rules");if(typeof n!="object"||Array.isArray(n))throw new Error("Rules must be an object");this.rules={},Object.keys(n).forEach(function(s){var a=n[s];i.rules[s]=Array.isArray(a)?a:[a]})},e.messages=function(n){return n&&(this._messages=tt(Oe(),n)),this._messages},e.validate=function(n,i,s){var a=this;i===void 0&&(i={}),s===void 0&&(s=function(){});var o=n,f=i,y=s;if(typeof f=="function"&&(y=f,f={}),!this.rules||Object.keys(this.rules).length===0)return y&&y(null,o),Promise.resolve(o);function c(d){var v=[],u={};function m(b){if(Array.isArray(b)){var x;v=(x=v).concat.apply(x,b)}else v.push(b)}for(var l=0;l<d.length;l++)m(d[l]);v.length?(u=xe(v),y(v,u)):y(null,o)}if(f.messages){var g=this.messages();g===Ae&&(g=Oe()),tt(g,f.messages),f.messages=g}else f.messages=this.messages();var w={},q=f.keys||Object.keys(this.rules);q.forEach(function(d){var v=a.rules[d],u=o[d];v.forEach(function(m){var l=m;typeof l.transform=="function"&&(o===n&&(o=C({},o)),u=o[d]=l.transform(u)),typeof l=="function"?l={validator:l}:l=C({},l),l.validator=a.getValidationMethod(l),l.validator&&(l.field=d,l.fullField=l.fullField||d,l.type=a.getType(l),w[d]=w[d]||[],w[d].push({rule:l,value:u,source:o,field:d}))})});var E={};return li(w,f,function(d,v){var u=d.rule,m=(u.type==="object"||u.type==="array")&&(typeof u.fields=="object"||typeof u.defaultField=="object");m=m&&(u.required||!u.required&&d.value),u.field=d.field;function l(A,N){return C({},N,{fullField:u.fullField+"."+A,fullFields:u.fullFields?[].concat(u.fullFields,[A]):[A]})}function b(A){A===void 0&&(A=[]);var N=Array.isArray(A)?A:[A];!f.suppressWarning&&N.length&&t.warning("async-validator:",N),N.length&&u.message!==void 0&&(N=[].concat(u.message));var $=N.map(et(u,o));if(f.first&&$.length)return E[u.field]=1,v($);if(!m)v($);else{if(u.required&&!d.value)return u.message!==void 0?$=[].concat(u.message).map(et(u,o)):f.error&&($=[f.error(u,I(f.messages.required,u.field))]),v($);var B={};u.defaultField&&Object.keys(d.value).map(function(L){B[L]=u.defaultField}),B=C({},B,d.rule.fields);var K={};Object.keys(B).forEach(function(L){var M=B[L],ue=Array.isArray(M)?M:[M];K[L]=ue.map(l.bind(null,L))});var V=new t(K);V.messages(f.messages),d.rule.options&&(d.rule.options.messages=f.messages,d.rule.options.error=f.error),V.validate(d.value,d.rule.options||f,function(L){var M=[];$&&$.length&&M.push.apply(M,$),L&&L.length&&M.push.apply(M,L),v(M.length?M:null)})}}var x;if(u.asyncValidator)x=u.asyncValidator(u,d.value,b,d.source,f);else if(u.validator){try{x=u.validator(u,d.value,b,d.source,f)}catch(A){console.error==null||console.error(A),f.suppressValidatorError||setTimeout(function(){throw A},0),b(A.message)}x===!0?b():x===!1?b(typeof u.message=="function"?u.message(u.fullField||u.field):u.message||(u.fullField||u.field)+" fails"):x instanceof Array?b(x):x instanceof Error&&b(x.message)}x&&x.then&&x.then(function(){return b()},function(A){return b(A)})},function(d){c(d)},o)},e.getType=function(n){if(n.type===void 0&&n.pattern instanceof RegExp&&(n.type="pattern"),typeof n.validator!="function"&&n.type&&!J.hasOwnProperty(n.type))throw new Error(I("Unknown rule type %s",n.type));return n.type||"string"},e.getValidationMethod=function(n){if(typeof n.validator=="function")return n.validator;var i=Object.keys(n),s=i.indexOf("message");return s!==-1&&i.splice(s,1),i.length===1&&i[0]==="required"?J.required:J[this.getType(n)]||void 0},t}();Q.register=function(e,r){if(typeof r!="function")throw new Error("Cannot register a validator by type, validator is not a function");J[e]=r};Q.warning=si;Q.messages=Ae;Q.validators=J;const Mi=["","error","validating","success"],Ni=qe({label:String,labelWidth:{type:[String,Number],default:""},prop:{type:ve([String,Array])},required:{type:Boolean,default:void 0},rules:{type:ve([Object,Array])},error:String,validateStatus:{type:String,values:Mi},for:String,inlineMessage:{type:[String,Boolean],default:""},showMessage:{type:Boolean,default:!0},size:{type:String,values:gt}}),nt="ElLabelWrap";var Li=X({name:nt,props:{isAutoWidth:Boolean,updateAll:Boolean},setup(t,{slots:e}){const r=ae(_e,void 0),n=ae(he);n||Wt(nt,"usage: <el-form-item><label-wrap /></el-form-item>");const i=Ee("form"),s=W(),a=W(0),o=()=>{var c;if((c=s.value)!=null&&c.firstElementChild){const g=window.getComputedStyle(s.value.firstElementChild).width;return Math.ceil(Number.parseFloat(g))}else return 0},f=(c="update")=>{pt(()=>{e.default&&t.isAutoWidth&&(c==="update"?a.value=o():c==="remove"&&(r==null||r.deregisterLabelWidth(a.value)))})},y=()=>f("update");return dt(()=>{y()}),ct(()=>{f("remove")}),Ct(()=>y()),ie(a,(c,g)=>{t.updateAll&&(r==null||r.registerLabelWidth(c,g))}),Vt(T(()=>{var c,g;return(g=(c=s.value)==null?void 0:c.firstElementChild)!=null?g:null}),y),()=>{var c,g;if(!e)return null;const{isAutoWidth:w}=t;if(w){const q=r==null?void 0:r.autoLabelWidth,E=n==null?void 0:n.hasLabel,d={};if(E&&q&&q!=="auto"){const v=Math.max(0,Number.parseInt(q,10)-a.value),u=r.labelPosition==="left"?"marginRight":"marginLeft";v&&(d[u]=`${v}px`)}return se("div",{ref:s,class:[i.be("item","label-wrap")],style:d},[(c=e.default)==null?void 0:c.call(e)])}else return se(Dt,{ref:s},[(g=e.default)==null?void 0:g.call(e)])}}});const Ri=["role","aria-labelledby"],Bi=X({name:"ElFormItem"}),Wi=X({...Bi,props:Ni,setup(t,{expose:e}){const r=t,n=Ut(),i=ae(_e,void 0),s=ae(he,void 0),a=vt(void 0,{formItem:!1}),o=Ee("form-item"),f=Gt().value,y=W([]),c=W(""),g=Kt(c,100),w=W(""),q=W();let E,d=!1;const v=T(()=>{if((i==null?void 0:i.labelPosition)==="top")return{};const p=Ne(r.labelWidth||(i==null?void 0:i.labelWidth)||"");return p?{width:p}:{}}),u=T(()=>{if((i==null?void 0:i.labelPosition)==="top"||i!=null&&i.inline)return{};if(!r.label&&!r.labelWidth&&B)return{};const p=Ne(r.labelWidth||(i==null?void 0:i.labelWidth)||"");return!r.label&&!n.label?{marginLeft:p}:{}}),m=T(()=>[o.b(),o.m(a.value),o.is("error",c.value==="error"),o.is("validating",c.value==="validating"),o.is("success",c.value==="success"),o.is("required",ue.value||r.required),o.is("no-asterisk",i==null?void 0:i.hideRequiredAsterisk),(i==null?void 0:i.requireAsteriskPosition)==="right"?"asterisk-right":"asterisk-left",{[o.m("feedback")]:i==null?void 0:i.statusIcon}]),l=T(()=>it(r.inlineMessage)?r.inlineMessage:(i==null?void 0:i.inlineMessage)||!1),b=T(()=>[o.e("error"),{[o.em("error","inline")]:l.value}]),x=T(()=>r.prop?me(r.prop)?r.prop:r.prop.join("."):""),A=T(()=>!!(r.label||n.label)),N=T(()=>r.for||(y.value.length===1?y.value[0]:void 0)),$=T(()=>!N.value&&A.value),B=!!s,K=T(()=>{const p=i==null?void 0:i.model;if(!(!p||!r.prop))return pe(p,r.prop).value}),V=T(()=>{const{required:p}=r,F=[];r.rules&&F.push(...be(r.rules));const j=i==null?void 0:i.rules;if(j&&r.prop){const S=pe(j,r.prop).value;S&&F.push(...be(S))}if(p!==void 0){const S=F.map((R,U)=>[R,U]).filter(([R])=>Object.keys(R).includes("required"));if(S.length>0)for(const[R,U]of S)R.required!==p&&(F[U]={...R,required:p});else F.push({required:p})}return F}),L=T(()=>V.value.length>0),M=p=>V.value.filter(j=>!j.trigger||!p?!0:Array.isArray(j.trigger)?j.trigger.includes(p):j.trigger===p).map(({trigger:j,...S})=>S),ue=T(()=>V.value.some(p=>p.required)),jt=T(()=>{var p;return g.value==="error"&&r.showMessage&&((p=i==null?void 0:i.showMessage)!=null?p:!0)}),$e=T(()=>`${r.label||""}${(i==null?void 0:i.labelSuffix)||""}`),D=p=>{c.value=p},$t=p=>{var F,j;const{errors:S,fields:R}=p;(!S||!R)&&console.error(p),D("error"),w.value=S?(j=(F=S==null?void 0:S[0])==null?void 0:F.message)!=null?j:`${r.prop} is required`:"",i==null||i.emit("validate",r.prop,!1,w.value)},It=()=>{D("success"),i==null||i.emit("validate",r.prop,!0,"")},Mt=async p=>{const F=x.value;return new Q({[F]:p}).validate({[F]:K.value},{firstFields:!0}).then(()=>(It(),!0)).catch(S=>($t(S),Promise.reject(S)))},Ie=async(p,F)=>{if(d||!r.prop)return!1;const j=lt(F);if(!L.value)return F==null||F(!1),!1;const S=M(p);return S.length===0?(F==null||F(!0),!0):(D("validating"),Mt(S).then(()=>(F==null||F(!0),!0)).catch(R=>{const{fields:U}=R;return F==null||F(!1,U),j?!1:Promise.reject(U)}))},le=()=>{D(""),w.value="",d=!1},Me=async()=>{const p=i==null?void 0:i.model;if(!p||!r.prop)return;const F=pe(p,r.prop);d=!0,F.value=Xe(E),await pt(),le(),d=!1},Nt=p=>{y.value.includes(p)||y.value.push(p)},Lt=p=>{y.value=y.value.filter(F=>F!==p)};ie(()=>r.error,p=>{w.value=p||"",D(p?"error":"")},{immediate:!0}),ie(()=>r.validateStatus,p=>D(p||""));const de=st({...ot(r),$el:q,size:a,validateState:c,labelId:f,inputIds:y,isGroup:$,hasLabel:A,addInputId:Nt,removeInputId:Lt,resetField:Me,clearValidate:le,validate:Ie});return at(he,de),dt(()=>{r.prop&&(i==null||i.addField(de),E=Xe(K.value))}),ct(()=>{i==null||i.removeField(de)}),e({size:a,validateMessage:w,validateState:c,validate:Ie,clearValidate:le,resetField:Me}),(p,F)=>{var j;return ye(),ft("div",{ref_key:"formItemRef",ref:q,class:z(_(m)),role:_($)?"group":void 0,"aria-labelledby":_($)?_(f):void 0},[se(_(Li),{"is-auto-width":_(v).width==="auto","update-all":((j=_(i))==null?void 0:j.labelWidth)==="auto"},{default:ce(()=>[_(A)?(ye(),zt(Yt(_(N)?"label":"div"),{key:0,id:_(f),for:_(N),class:z(_(o).e("label")),style:Le(_(v))},{default:ce(()=>[te(p.$slots,"label",{label:_($e)},()=>[Jt(Re(_($e)),1)])]),_:3},8,["id","for","class","style"])):Be("v-if",!0)]),_:3},8,["is-auto-width","update-all"]),We("div",{class:z(_(o).e("content")),style:Le(_(u))},[te(p.$slots,"default"),se(Zt,{name:`${_(o).namespace.value}-zoom-in-top`},{default:ce(()=>[_(jt)?te(p.$slots,"error",{key:0,error:w.value},()=>[We("div",{class:z(_(b))},Re(w.value),3)]):Be("v-if",!0)]),_:3},8,["name"])],6)],10,Ri)}}});var St=ut(Wi,[["__file","/home/runner/work/element-plus/element-plus/packages/components/form/src/form-item.vue"]]);const Ui=Ht(ti,{FormItem:St}),Gi=Xt(St);export{Ui as E,Gi as a};