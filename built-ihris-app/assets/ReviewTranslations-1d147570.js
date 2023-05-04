import{g as ye,a2 as be,C as Ee,a3 as xe,u as Ue,d as Ce,a4 as Te,e as B,r as A,w as O,k as Ve,a5 as we,a6 as oe,a7 as Se,l as t,a8 as Pe,p as T,F as I,x as Me,a9 as Ie,A as Fe,aa as pe,B as ae,ab as Re,ac as je,ad as Ge,ae as Oe,af as ve,ag as Le,ah as He,ai as qe,aj as Ke,_ as De,E as m,Z as P,H as l,M as G,N as ge,z as o,L as v,O as L,a0 as he,a1 as C,G as D,v as y,Y as _e,Q as Be,K as k,R as ne,J as Ne,P as f,D as ke,I as We,U as me,W as ee,X as te,V as Je}from"./index-98a581eb.js";import{V as ze}from"./VContainer-a709e22b.js";import{V as S,a as le}from"./VTooltip-28bda13a.js";const Ye=ye()({name:"VFileInput",inheritAttrs:!1,props:{chips:Boolean,counter:Boolean,counterSizeString:{type:String,default:"$vuetify.fileInput.counterSize"},counterString:{type:String,default:"$vuetify.fileInput.counter"},multiple:Boolean,showSize:{type:[Boolean,Number],default:!1,validator:e=>typeof e=="boolean"||[1e3,1024].includes(e)},...be({prependIcon:"$file"}),modelValue:{type:Array,default:()=>[],validator:e=>Ee(e).every(n=>n!=null&&typeof n=="object")},...xe({clearable:!0})},emits:{"click:control":e=>!0,"mousedown:control":e=>!0,"update:focused":e=>!0,"update:modelValue":e=>!0},setup(e,n){let{attrs:c,emit:E,slots:a}=n;const{t:u}=Ue(),d=Ce(e,"modelValue"),{isFocused:_,focus:i,blur:h}=Te(e),U=B(()=>typeof e.showSize!="boolean"?e.showSize:void 0),Y=B(()=>(d.value??[]).reduce((r,s)=>{let{size:g=0}=s;return r+g},0)),H=B(()=>pe(Y.value,U.value)),N=B(()=>(d.value??[]).map(r=>{const{name:s="",size:g=0}=r;return e.showSize?`${s} (${pe(g,U.value)})`:s})),Q=B(()=>{var s;const r=((s=d.value)==null?void 0:s.length)??0;return e.showSize?u(e.counterSizeString,r,H.value):u(e.counterString,r)}),M=A(),X=A(),b=A(),se=B(()=>_.value||e.active);function q(){var r;b.value!==document.activeElement&&((r=b.value)==null||r.focus()),_.value||i()}function re(r){F(r)}function ie(r){E("mousedown:control",r)}function F(r){var s;(s=b.value)==null||s.click(),E("click:control",r)}function z(r){r.stopPropagation(),q(),ae(()=>{d.value=[],Re(e["onClick:clear"],r)})}return O(d,r=>{(!Array.isArray(r)||!r.length)&&b.value&&(b.value.value="")}),Ve(()=>{const r=!!(a.counter||e.counter),s=!!(r||a.details),[g,p]=we(c),[{modelValue:V,...K}]=oe.filterProps(e),[W]=Se(e);return t(oe,T({ref:M,modelValue:d.value,"onUpdate:modelValue":R=>d.value=R,class:["v-file-input",e.class],style:e.style,"onClick:prepend":re},g,K,{focused:_.value}),{...a,default:R=>{let{id:w,isDisabled:x,isDirty:J,isReadonly:ue,isValid:de}=R;return t(Pe,T({ref:X,"prepend-icon":e.prependIcon,onMousedown:ie,onClick:F,"onClick:clear":z,"onClick:prependInner":e["onClick:prependInner"],"onClick:appendInner":e["onClick:appendInner"]},W,{id:w.value,active:se.value||J.value,dirty:J.value,disabled:x.value,focused:_.value,error:de.value===!1}),{...a,default:ce=>{var $;let{props:{class:Z,...fe}}=ce;return t(I,null,[t("input",T({ref:b,type:"file",readonly:ue.value,disabled:x.value,multiple:e.multiple,name:e.name,onClick:j=>{j.stopPropagation(),q()},onChange:j=>{if(!j.target)return;const Ae=j.target;d.value=[...Ae.files??[]]},onFocus:q,onBlur:h},fe,p),null),t("div",{class:Z},[!!(($=d.value)!=null&&$.length)&&(a.selection?a.selection({fileNames:N.value,totalBytes:Y.value,totalBytesReadable:H.value}):e.chips?N.value.map(j=>t(Me,{key:j,size:"small",color:e.color},{default:()=>[j]})):N.value.join(", "))])])}})},details:s?R=>{var w,x;return t(I,null,[(w=a.details)==null?void 0:w.call(a,R),r&&t(I,null,[t("span",null,null),t(Ie,{active:!!((x=d.value)!=null&&x.length),value:Q.value},a.counter)])])}:void 0})}),Fe({},M,X,b)}});const Qe=ye()({name:"VTextarea",directives:{Intersect:je},inheritAttrs:!1,props:{autoGrow:Boolean,autofocus:Boolean,counter:[Boolean,Number,String],counterValue:Function,prefix:String,placeholder:String,persistentPlaceholder:Boolean,persistentCounter:Boolean,noResize:Boolean,rows:{type:[Number,String],default:5,validator:e=>!isNaN(parseFloat(e))},maxRows:{type:[Number,String],validator:e=>!isNaN(parseFloat(e))},suffix:String,modelModifiers:Object,...be(),...xe()},emits:{"click:control":e=>!0,"mousedown:control":e=>!0,"update:focused":e=>!0,"update:modelValue":e=>!0},setup(e,n){let{attrs:c,emit:E,slots:a}=n;const u=Ce(e,"modelValue"),{isFocused:d,focus:_,blur:i}=Te(e),h=B(()=>typeof e.counterValue=="function"?e.counterValue(u.value):(u.value||"").toString().length),U=B(()=>{if(c.maxlength)return c.maxlength;if(!(!e.counter||typeof e.counter!="number"&&typeof e.counter!="string"))return e.counter});function Y(s,g){var p,V;!e.autofocus||!s||(V=(p=g[0].target)==null?void 0:p.focus)==null||V.call(p)}const H=A(),N=A(),Q=A(""),M=A(),X=B(()=>e.persistentPlaceholder||d.value||e.active);function b(){var s;M.value!==document.activeElement&&((s=M.value)==null||s.focus()),d.value||_()}function se(s){b(),E("click:control",s)}function q(s){E("mousedown:control",s)}function re(s){s.stopPropagation(),b(),ae(()=>{u.value="",Re(e["onClick:clear"],s)})}function ie(s){var p;const g=s.target;if(u.value=g.value,(p=e.modelModifiers)!=null&&p.trim){const V=[g.selectionStart,g.selectionEnd];ae(()=>{g.selectionStart=V[0],g.selectionEnd=V[1]})}}const F=A();function z(){e.autoGrow&&ae(()=>{if(!F.value||!N.value)return;const s=getComputedStyle(F.value),g=getComputedStyle(N.value.$el),p=parseFloat(s.getPropertyValue("--v-field-padding-top"))+parseFloat(s.getPropertyValue("--v-input-padding-top"))+parseFloat(s.getPropertyValue("--v-field-padding-bottom")),V=F.value.scrollHeight,K=parseFloat(s.lineHeight),W=Math.max(parseFloat(e.rows)*K+p,parseFloat(g.getPropertyValue("--v-input-control-height"))),R=parseFloat(e.maxRows)*K+p||1/0;Q.value=qe(Ke(V??0,W,R))})}Ge(z),O(u,z),O(()=>e.rows,z),O(()=>e.maxRows,z),O(()=>e.density,z);let r;return O(F,s=>{s?(r=new ResizeObserver(z),r.observe(F.value)):r==null||r.disconnect()}),Oe(()=>{r==null||r.disconnect()}),Ve(()=>{const s=!!(a.counter||e.counter||e.counterValue),g=!!(s||a.details),[p,V]=we(c),[{modelValue:K,...W}]=oe.filterProps(e),[R]=Se(e);return t(oe,T({ref:H,modelValue:u.value,"onUpdate:modelValue":w=>u.value=w,class:["v-textarea v-text-field",{"v-textarea--prefixed":e.prefix,"v-textarea--suffixed":e.suffix,"v-text-field--prefixed":e.prefix,"v-text-field--suffixed":e.suffix,"v-textarea--auto-grow":e.autoGrow,"v-textarea--no-resize":e.noResize||e.autoGrow,"v-text-field--flush-details":["plain","underlined"].includes(e.variant)},e.class],style:e.style},p,W,{focused:d.value}),{...a,default:w=>{let{isDisabled:x,isDirty:J,isReadonly:ue,isValid:de}=w;return t(Pe,T({ref:N,style:{"--v-textarea-control-height":Q.value},onClick:se,onMousedown:q,"onClick:clear":re,"onClick:prependInner":e["onClick:prependInner"],"onClick:appendInner":e["onClick:appendInner"],role:"textbox"},R,{active:X.value||J.value,dirty:J.value||e.dirty,disabled:x.value,focused:d.value,error:de.value===!1}),{...a,default:ce=>{let{props:{class:Z,...fe}}=ce;return t(I,null,[e.prefix&&t("span",{class:"v-text-field__prefix"},[e.prefix]),ve(t("textarea",T({ref:M,class:Z,value:u.value,onInput:ie,autofocus:e.autofocus,readonly:ue.value,disabled:x.value,placeholder:e.placeholder,rows:e.rows,name:e.name,onFocus:b,onBlur:i},fe,V),null),[[Le("intersect"),{handler:Y},null,{once:!0}]]),e.autoGrow&&ve(t("textarea",{class:[Z,"v-textarea__sizer"],"onUpdate:modelValue":$=>u.value=$,ref:F,readonly:!0,"aria-hidden":"true"},null),[[He,u.value]]),e.suffix&&t("span",{class:"v-text-field__suffix"},[e.suffix])])}})},details:g?w=>{var x;return t(I,null,[(x=a.details)==null?void 0:x.call(a,w),s&&t(I,null,[t("span",null,null),t(Ie,{active:e.persistentCounter||d.value,value:h.value,max:U.value},a.counter)])])}:void 0})}),Fe({},H,N,M)}}),Xe={props:["importDialog","locale","language"],data(){return{importedTranslation:"",importStatus:{running:!1,failed:!1,successful:!1,duplicated:[],invalid:[]}}},computed:{displayDialog(){return this.importDialog}},methods:{closeImportDialog(){this.importStatus.running=!1,this.importStatus.failed=!1,this.importStatus.successful=!1,this.importStatus.duplicated=[],this.importStatus.invalid=[],this.importedTranslation="",this.emitter.emit("closeImportDialog")},importTranslation(){const e=new FormData;e.append("translation",this.importedTranslation),this.importStatus.running=!0,fetch("/translator/import/"+this.locale,{method:"POST",body:e}).then(n=>{n.status===200?(this.importStatus.running=!1,this.importStatus.successful=!0):n.status===400&&n.json().then(c=>{this.importStatus.running=!1,this.importStatus.failed=!0,this.importStatus.duplicated=c.duplicated,this.importStatus.invalid=c.invalid})})}}},Ze={key:1,style:{color:"green"}},$e=f("b",null,"Translations imported successfully",-1),et={key:2,style:{color:"red"}},tt=f("b",null,"Import failed because of below error(s)",-1),lt=[tt],at={key:3},nt=f("br",null,null,-1),ot={key:4},st=f("br",null,null,-1);function rt(e,n,c,E,a,u){return m(),P(ze,{"grid-list-xs":""},{default:l(()=>[t(Ne,{transition:"dialog-top-transition","max-width":"600",modelValue:u.displayDialog,"onUpdate:modelValue":n[1]||(n[1]=d=>u.displayDialog=d)},{default:l(()=>[t(G,null,{default:l(()=>[t(ge,{color:"primary",dark:""},{default:l(()=>[o("Import "+v(c.language)+" Translations",1)]),_:1}),t(L,null,{default:l(()=>[t(Ye,{disabled:a.importStatus.running,accept:".xlsx",label:"Translation File","show-size":"",modelValue:a.importedTranslation,"onUpdate:modelValue":n[0]||(n[0]=d=>a.importedTranslation=d),ref:"trans"},null,8,["disabled","modelValue"]),a.importStatus.running?(m(),P(he,{key:0,indeterminate:!0,height:"20"},{default:l(()=>[o(" Importing Translations ")]),_:1})):C("",!0),a.importStatus.successful?(m(),D("div",Ze,[t(y,null,{default:l(()=>[o("mdi-check")]),_:1}),$e])):C("",!0),a.importStatus.failed?(m(),D("div",et,lt)):C("",!0),a.importStatus.duplicated.length>0?(m(),D("div",at,[o("    Below Keys are Dupplicated "),nt,(m(!0),D(I,null,_e(a.importStatus.duplicated,(d,_)=>(m(),D(I,null,[o("       "+v(++_)+". "+v(d),1)],64))),256))])):C("",!0),a.importStatus.invalid.length>0?(m(),D("div",ot,[o("    Below Keys were not expected and must be removed before importing "),st,(m(!0),D(I,null,_e(a.importStatus.invalid,(d,_)=>(m(),D(I,null,[o("       "+v(++_)+". "+v(d),1)],64))),256))])):C("",!0)]),_:1}),t(Be,{class:"justify-end"},{default:l(()=>[t(k,{disabled:a.importStatus.running,text:"",onClick:u.closeImportDialog},{default:l(()=>[t(y,null,{default:l(()=>[o("mdi-close")]),_:1}),o(" Cancel ")]),_:1},8,["disabled","onClick"]),t(ne),t(k,{disabled:a.importStatus.running||!a.importedTranslation,text:"",onClick:u.importTranslation},{default:l(()=>[t(y,null,{default:l(()=>[o("mdi-import")]),_:1}),o(" Import ")]),_:1},8,["disabled","onClick"])]),_:1})]),_:1})]),_:1},8,["modelValue"])]),_:1})}const it=De(Xe,[["render",rt]]),ut={data(){return{snackbarColor:"green",snackbarText:"",snackbar:!1,confirmGTrans:!1,importDialog:!1,exporting:!1,loading:!0,search:"",selected:{},newTranslation:"",translations:[],transRunType:"",headers:[{text:"SN",value:"sn"},{text:"Word",value:"en"},{text:"Translated To",value:"text"}],translationProgress:{showTransProgress:!1,required:0,translated:0,percent:0,interval:""}}},filters:{limitTexts(e){return e.length<100?e:e.substring(0,100)+"..."}},methods:{displayTransConf(e){this.transRunType=e,e==="full"?this.confirmGTrans=!0:this.googleTranslate()},edit(e){this.selected=e,this.newTranslation=e.text},closeEdit(){this.selected={}},save(){fetch("/translator/update",{method:"PUT",headers:{"Content-Type":"application/json"},body:JSON.stringify({locale:this.$route.params.locale,path:this.selected.key,text:this.newTranslation})}).then(e=>{e.status===200&&(this.getTranslations(),this.snackbar=!0,this.snackbarColor="green",this.snackbarText="Translation Updated")}).catch(()=>{this.snackbar=!0,this.snackbarColor="red",this.snackbarText="Error Occured"})},getTranslations(e){e||(this.loading=!0),fetch("/translator/getTranslations/"+this.$route.params.locale).then(n=>{n.json().then(c=>{this.loading=!1,this.translations=c.translations,this.language=c.language})}).catch(n=>{console.log(n)})},googleTranslate(){this.confirmGTrans=!1,fetch("/translator/translate/en/"+this.$route.params.locale+"/"+this.transRunType).then(e=>{e.status===200&&(this.translationProgress.interval=setInterval(()=>{this.googleTranslateCount()},1e3))}).catch(()=>{this.snackbar=!0,this.snackbarColor="red",this.snackbarText="Error Occured During Translation"})},googleTranslateCount(){this.translationProgress.showTransProgress=!0,fetch("/translator/translationCount/en/"+this.$route.params.locale).then(e=>{e.json().then(n=>{this.getTranslations(!0),this.translationProgress.required=n.from,this.translationProgress.translated=n.to,this.translationProgress.percent=parseInt(n.to)*100/parseInt(n.from),(n.from===n.to||!n.running)&&(clearInterval(this.translationProgress.interval),this.translationProgress.showTransProgress=!1,this.snackbar=!0,this.snackbarColor="green",this.snackbarText="Translation completed successfully")})}).catch(()=>{this.snackbar=!0,this.snackbarColor="red",this.snackbarText="Cant get progress"})},exportTranslation(){this.exporting=!0,fetch("/translator/export/"+this.$route.params.locale).then(e=>e.blob()).then(e=>{this.exporting=!1;const n=window.URL.createObjectURL(e),c=document.createElement("a");c.href=n,c.download=this.language+".xlsx",document.body.appendChild(c),c.click(),c.remove()}).catch(()=>{this.snackbar=!0,this.snackbarColor="red",this.snackbarText="Cant download translation",this.exporting=!1})}},components:{ImportTranslations:it},created(){this.language=this.$route.params.locale,this.getTranslations(),fetch("/translator/translationCount/en/"+this.$route.params.locale).then(e=>{e.json().then(n=>{n.running&&(this.translationProgress.showTransProgress=!0,this.translationProgress.interval=setInterval(()=>{this.googleTranslateCount()},1e3))})}).catch(()=>{this.snackbar=!0,this.snackbarColor="red",this.snackbarText="Cant get translation progress"}),this.emitter.on("closeImportDialog",()=>{this.importDialog=!1})},beforeDestroy(){clearInterval(this.translationProgress.interval)}},dt=f("br",null,null,-1),ct=f("br",null,null,-1),ft=f("span",null,"Back to Enabled Languages List",-1),mt={key:0,style:{color:"green"}},gt=f("span",null,"Translate all texts",-1),ht=f("span",null,"Only missing translations",-1),pt=["onClick"],vt=f("span",null,"Close translation dialog",-1),_t=f("br",null,null,-1),kt=f("br",null,null,-1),yt=f("br",null,null,-1);function bt(e,n,c,E,a,u){const d=ke("ImportTranslations"),_=ke("v-data-table");return m(),P(ze,{"grid-list-xs":""},{default:l(()=>[t(We,{modelValue:a.snackbar,"onUpdate:modelValue":n[1]||(n[1]=i=>a.snackbar=i),timeout:"2000"},{action:l(({attrs:i})=>[t(k,T({color:a.snackbarColor,text:""},i,{onClick:n[0]||(n[0]=h=>a.snackbar=!1)}),{default:l(()=>[o(" Close ")]),_:2},1040,["color"])]),default:l(()=>[o(v(a.snackbarText)+" ",1)]),_:1},8,["modelValue"]),t(Ne,{transition:"dialog-top-transition","max-width":"600",modelValue:a.confirmGTrans,"onUpdate:modelValue":n[2]||(n[2]=i=>a.confirmGTrans=i)},{default:l(i=>[t(G,null,{default:l(()=>[t(ge,{color:"primary",dark:""},{default:l(()=>[o("Proceed?")]),_:1}),t(L,null,{default:l(()=>[o(" This will overwrite all existing "+v(e.language)+" translations, do you want to proceed? ",1)]),_:1}),t(Be,{class:"justify-end"},{default:l(()=>[t(k,{text:"",onClick:h=>i.value=!1},{default:l(()=>[t(y,null,{default:l(()=>[o("mdi-close")]),_:1}),o(" No ")]),_:2},1032,["onClick"]),t(ne),t(k,{text:"",onClick:u.googleTranslate},{default:l(()=>[t(y,null,{default:l(()=>[o("mdi-check")]),_:1}),o(" Yes ")]),_:1},8,["onClick"])]),_:2},1024)]),_:2},1024)]),_:1},8,["modelValue"]),t(d,{importDialog:a.importDialog,locale:this.$route.params.locale,language:e.language},null,8,["importDialog","locale","language"]),t(G,null,{default:l(()=>[t(me,{"primary-title":""},{default:l(()=>[t(ee,null,{default:l(()=>[t(S,null,{default:l(()=>[o(v(e.language)+" Translations ",1),dt,ct,t(le,{top:""},{activator:l(({on:i,attrs:h})=>[t(k,T({color:"indigo",dark:"",to:"/",small:"",class:"mx-2",fab:""},h,te(i)),{default:l(()=>[t(y,null,{default:l(()=>[o("mdi-arrow-left-circle")]),_:1})]),_:2},1040)]),default:l(()=>[ft]),_:1})]),_:1}),e.$store.state.user.loggedin?(m(),P(S,{key:0},{default:l(()=>[t(G,{width:"300"},{default:l(()=>[t(me,{"primary-title":""},{default:l(()=>[o(" Translate with google ")]),_:1}),t(L,null,{default:l(()=>[a.translationProgress.showTransProgress?(m(),D("label",mt," Translation on progress ")):C("",!0),t(ee,null,{default:l(()=>[t(S,null,{default:l(()=>[t(le,{bottom:""},{activator:l(({on:i,attrs:h})=>[t(k,T({color:"primary",disabled:a.translationProgress.showTransProgress,small:"",onClick:n[3]||(n[3]=U=>u.displayTransConf("full"))},h,te(i)),{default:l(()=>[t(y,{left:""},{default:l(()=>[o("mdi-google-translate")]),_:1}),o(" Full ")]),_:2},1040,["disabled"])]),default:l(()=>[gt]),_:1})]),_:1}),t(S,null,{default:l(()=>[t(le,{bottom:""},{activator:l(({on:i,attrs:h})=>[t(k,T({color:"blue",dark:"",disabled:a.translationProgress.showTransProgress,small:"",onClick:n[4]||(n[4]=U=>u.displayTransConf("partial"))},h,te(i)),{default:l(()=>[t(y,{left:""},{default:l(()=>[o("mdi-google-translate")]),_:1}),o(" Partial ")]),_:2},1040,["disabled"])]),default:l(()=>[ht]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})):C("",!0),t(S,null,{default:l(()=>[e.$store.state.user.loggedin?(m(),P(G,{key:0,width:"300"},{default:l(()=>[t(me,{"primary-title":""},{default:l(()=>[o(" Import/Export ")]),_:1}),t(L,null,{default:l(()=>[t(ee,null,{default:l(()=>[t(S,null,{default:l(()=>[a.exporting?(m(),P(he,{key:1,indeterminate:!0,height:"20"},{default:l(()=>[o(" Preparing Export ")]),_:1})):(m(),P(k,{key:0,color:"primary",small:"",onClick:u.exportTranslation},{default:l(()=>[t(y,{left:""},{default:l(()=>[o("mdi-export")]),_:1}),o(" Export ")]),_:1},8,["onClick"]))]),_:1}),t(S,null,{default:l(()=>[t(k,{color:"primary",small:"",onClick:n[5]||(n[5]=i=>a.importDialog=!0)},{default:l(()=>[t(y,{left:""},{default:l(()=>[o("mdi-import")]),_:1}),o(" Import ")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})):C("",!0)]),_:1}),t(S,null,{default:l(()=>[t(Je,{modelValue:a.search,"onUpdate:modelValue":n[6]||(n[6]=i=>a.search=i),label:"Search",class:"mx-4",clearable:"","prepend-icon":"mdi-magnify"},null,8,["modelValue"])]),_:1})]),_:1})]),_:1})]),_:1}),t(ee,null,{default:l(()=>[t(S,null,{default:l(()=>[t(G,null,{default:l(()=>[t(L,null,{default:l(()=>[a.translationProgress.showTransProgress?(m(),P(he,{key:0,modelValue:a.translationProgress.percent,"onUpdate:modelValue":n[7]||(n[7]=i=>a.translationProgress.percent=i),height:"25","buffer-value":"0",stream:""},{default:l(()=>[f("strong",null,v(a.translationProgress.translated)+"/"+v(a.translationProgress.required),1)]),_:1},8,["modelValue"])):C("",!0),t(_,{headers:a.headers,items:a.translations,search:a.search,loading:a.loading,"loading-text":"Loading",class:"elevation-1",style:{cursor:"pointer"}},{item:l(({item:i,index:h})=>[f("tr",{onClick:U=>u.edit(i)},[f("td",null,v(++h),1),f("td",null,v(i.en|e.limitTexts),1),f("td",null,v(i.text|e.limitTexts),1)],8,pt)]),_:1},8,["headers","items","search","loading"])]),_:1})]),_:1})]),_:1}),a.selected.key?(m(),P(S,{key:0},{default:l(()=>[t(G,null,{default:l(()=>[t(ge,{color:"secondary",dark:"",height:"30"},{default:l(()=>[o(" Edit Translation "),t(ne),t(le,{top:""},{activator:l(({on:i,attrs:h})=>[t(k,T({fab:"",icon:"",color:"white",onClick:u.closeEdit},h,te(i)),{default:l(()=>[t(y,null,{default:l(()=>[o("mdi-close")]),_:1})]),_:2},1040,["onClick"])]),default:l(()=>[vt]),_:1})]),_:1}),t(L,null,{default:l(()=>[o(" WORD: "),_t,f("i",null,[f("b",null,v(a.selected.en),1)]),kt,yt,o(" TRANSLATION: "),t(Qe,{clearable:"","clear-icon":"mdi-close-circle",modelValue:a.newTranslation,"onUpdate:modelValue":n[8]||(n[8]=i=>a.newTranslation=i),style:{"background-color":"#ffffc2","font-family":`'Franklin Gothic Medium', 'Arial Narrow', Arial,
                  sans-serif`}},null,8,["modelValue"]),t(ne),e.$store.state.user.loggedin?(m(),P(k,{key:0,small:"",rounded:"",color:"primary",dark:"",onClick:u.save},{default:l(()=>[t(y,{left:""},{default:l(()=>[o("mdi-content-save")]),_:1}),o(" Save ")]),_:1},8,["onClick"])):C("",!0)]),_:1})]),_:1})]),_:1})):C("",!0)]),_:1})]),_:1})}const Vt=De(ut,[["render",bt]]);export{Vt as default};
