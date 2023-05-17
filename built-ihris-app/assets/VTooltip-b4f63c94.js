import{an as g,ao as V,p as P,ak as T,al as w,k,n as l,ap as x,h as A,aq as j,l as B,ar as E,as as I,r as U,z,at as b,e as F,C as y,L as G}from"./index-27d70d11.js";const h=(()=>g.reduce((e,a)=>(e[a]={type:[Boolean,String,Number],default:!1},e),{}))(),C=(()=>g.reduce((e,a)=>{const t="offset"+V(a);return e[t]={type:[String,Number],default:null},e},{}))(),N=(()=>g.reduce((e,a)=>{const t="order"+V(a);return e[t]={type:[String,Number],default:null},e},{}))(),S={col:Object.keys(h),offset:Object.keys(C),order:Object.keys(N)};function K(e,a,t){let o=e;if(!(t==null||t===!1)){if(a){const n=a.replace(e,"");o+=`-${n}`}return e==="col"&&(o="v-"+o),e==="col"&&(t===""||t===!0)||(o+=`-${t}`),o.toLowerCase()}}const M=["auto","start","end","center","baseline","stretch"],R=P({cols:{type:[Boolean,String,Number],default:!1},...h,offset:{type:[String,Number],default:null},...C,order:{type:[String,Number],default:null},...N,alignSelf:{type:String,default:null,validator:e=>M.includes(e)},...T(),...w()},"v-col"),H=k()({name:"VCol",props:R(),setup(e,a){let{slots:t}=a;const o=l(()=>{const n=[];let s;for(s in S)S[s].forEach(r=>{const d=e[r],c=K(s,r,d);c&&n.push(c)});const i=n.some(r=>r.startsWith("v-col-"));return n.push({"v-col":!i||!e.cols,[`v-col-${e.cols}`]:e.cols,[`offset-${e.offset}`]:e.offset,[`order-${e.order}`]:e.order,[`align-self-${e.alignSelf}`]:e.alignSelf}),n});return()=>{var n;return x(e.tag,{class:[o.value,e.class],style:e.style},(n=t.default)==null?void 0:n.call(t))}}});const W=P({id:String,text:String,...A(j({closeOnBack:!1,location:"end",locationStrategy:"connected",eager:!0,minWidth:0,offset:10,openOnClick:!1,openOnHover:!0,origin:"auto",scrim:!1,scrollStrategy:"reposition",transition:!1}),["absolute","persistent"])},"v-tooltip"),D=k()({name:"VTooltip",props:W(),emits:{"update:modelValue":e=>!0},setup(e,a){let{slots:t}=a;const o=B(e,"modelValue"),{scopeId:n}=E(),s=I(),i=l(()=>e.id||`v-tooltip-${s}`),r=U(),d=l(()=>e.location.split(" ").length>1?e.location:e.location+" center"),c=l(()=>e.origin==="auto"||e.origin==="overlap"||e.origin.split(" ").length>1||e.location.split(" ").length>1?e.origin:e.origin+" center"),O=l(()=>e.transition?e.transition:o.value?"scale-transition":"fade-transition"),$=l(()=>y({"aria-describedby":i.value},e.activatorProps));return z(()=>{const[L]=b.filterProps(e);return F(b,y({ref:r,class:["v-tooltip",e.class],style:e.style,id:i.value},L,{modelValue:o.value,"onUpdate:modelValue":u=>o.value=u,transition:O.value,absolute:!0,location:d.value,origin:c.value,persistent:!0,role:"tooltip",activatorProps:$.value,_disableGlobalStack:!0},n),{activator:t.activator,default:function(){var v;for(var u=arguments.length,m=new Array(u),f=0;f<u;f++)m[f]=arguments[f];return((v=t.default)==null?void 0:v.call(t,...m))??e.text}})}),G({},r)}});export{H as V,D as a};
