import{p as ye,a2 as be,N as Ee,a3 as xe,k as Te,u as Me,l as Ce,a4 as Ve,n as B,r as A,y as O,z as we,a5 as Pe,a6 as oe,a7 as Se,e as t,a8 as Ie,C,F as I,I as je,a9 as Fe,L as Re,aa as pe,M as ae,ab as De,_ as Be,o as f,c as S,w as l,V as j,T as ge,K as o,t as v,f as L,a1 as he,d as T,P as D,H as y,$ as ve,U as Ne,S as _,W as ne,R as ze,b as g,ac as Ge,ad as Oe,ae as Le,af as ke,ag as He,ah as qe,ai as Ke,aj as We,O as _e,Q as Je,a as me,X as ee,Z as te,A as Qe}from"./index-105a909f.js";import{V as Ae}from"./VContainer-c1c95350.js";import{V as P,a as le}from"./VTooltip-d4e0cc60.js";const Xe=ye({chips:Boolean,counter:Boolean,counterSizeString:{type:String,default:"$vuetify.fileInput.counterSize"},counterString:{type:String,default:"$vuetify.fileInput.counter"},multiple:Boolean,showSize:{type:[Boolean,Number],default:!1,validator:e=>typeof e=="boolean"||[1e3,1024].includes(e)},...be({prependIcon:"$file"}),modelValue:{type:Array,default:()=>[],validator:e=>Ee(e).every(n=>n!=null&&typeof n=="object")},...xe({clearable:!0})},"v-file-input"),Ye=Te()({name:"VFileInput",inheritAttrs:!1,props:Xe(),emits:{"click:control":e=>!0,"mousedown:control":e=>!0,"update:focused":e=>!0,"update:modelValue":e=>!0},setup(e,n){let{attrs:c,emit:U,slots:a}=n;const{t:d}=Me(),u=Ce(e,"modelValue"),{isFocused:k,focus:i,blur:p}=Ve(e),G=B(()=>typeof e.showSize!="boolean"?e.showSize:void 0),Q=B(()=>(u.value??[]).reduce((r,s)=>{let{size:m=0}=s;return r+m},0)),H=B(()=>pe(Q.value,G.value)),N=B(()=>(u.value??[]).map(r=>{const{name:s="",size:m=0}=r;return e.showSize?`${s} (${pe(m,G.value)})`:s})),X=B(()=>{var s;const r=((s=u.value)==null?void 0:s.length)??0;return e.showSize?d(e.counterSizeString,r,H.value):d(e.counterString,r)}),E=A(),Y=A(),b=A(),se=B(()=>k.value||e.active);function q(){var r;b.value!==document.activeElement&&((r=b.value)==null||r.focus()),k.value||i()}function re(r){F(r)}function ie(r){U("mousedown:control",r)}function F(r){var s;(s=b.value)==null||s.click(),U("click:control",r)}function z(r){r.stopPropagation(),q(),ae(()=>{u.value=[],De(e["onClick:clear"],r)})}return O(u,r=>{(!Array.isArray(r)||!r.length)&&b.value&&(b.value.value="")}),we(()=>{const r=!!(a.counter||e.counter),s=!!(r||a.details),[m,h]=Pe(c),[{modelValue:V,...K}]=oe.filterProps(e),[W]=Se(e);return t(oe,C({ref:E,modelValue:u.value,"onUpdate:modelValue":R=>u.value=R,class:["v-file-input",e.class],style:e.style,"onClick:prepend":re},m,K,{focused:k.value}),{...a,default:R=>{let{id:w,isDisabled:x,isDirty:J,isReadonly:ue,isValid:de}=R;return t(Ie,C({ref:Y,"prepend-icon":e.prependIcon,onMousedown:ie,onClick:F,"onClick:clear":z,"onClick:prependInner":e["onClick:prependInner"],"onClick:appendInner":e["onClick:appendInner"]},W,{id:w.value,active:se.value||J.value,dirty:J.value,disabled:x.value,focused:k.value,error:de.value===!1}),{...a,default:ce=>{var $;let{props:{class:Z,...fe}}=ce;return t(I,null,[t("input",C({ref:b,type:"file",readonly:ue.value,disabled:x.value,multiple:e.multiple,name:e.name,onClick:M=>{M.stopPropagation(),q()},onChange:M=>{if(!M.target)return;const Ue=M.target;u.value=[...Ue.files??[]]},onFocus:q,onBlur:p},fe,h),null),t("div",{class:Z},[!!(($=u.value)!=null&&$.length)&&(a.selection?a.selection({fileNames:N.value,totalBytes:Q.value,totalBytesReadable:H.value}):e.chips?N.value.map(M=>t(je,{key:M,size:"small",color:e.color},{default:()=>[M]})):N.value.join(", "))])])}})},details:s?R=>{var w,x;return t(I,null,[(w=a.details)==null?void 0:w.call(a,R),r&&t(I,null,[t("span",null,null),t(Fe,{active:!!((x=u.value)!=null&&x.length),value:X.value},a.counter)])])}:void 0})}),Re({},E,Y,b)}}),Ze={props:["importDialog","locale","language"],data(){return{importedTranslation:"",importStatus:{running:!1,failed:!1,successful:!1,duplicated:[],invalid:[]}}},computed:{displayDialog(){return this.importDialog}},methods:{closeImportDialog(){this.importStatus.running=!1,this.importStatus.failed=!1,this.importStatus.successful=!1,this.importStatus.duplicated=[],this.importStatus.invalid=[],this.importedTranslation="",this.emitter.emit("closeImportDialog")},importTranslation(){const e=new FormData;e.append("translation",this.importedTranslation),this.importStatus.running=!0,fetch("/translator/import/"+this.locale,{method:"POST",body:e}).then(n=>{n.status===200?(this.importStatus.running=!1,this.importStatus.successful=!0):n.status===400&&n.json().then(c=>{this.importStatus.running=!1,this.importStatus.failed=!0,this.importStatus.duplicated=c.duplicated,this.importStatus.invalid=c.invalid})})}}},$e={key:1,style:{color:"green"}},et=g("b",null,"Translations imported successfully",-1),tt={key:2,style:{color:"red"}},lt=g("b",null,"Import failed because of below error(s)",-1),at=[lt],nt={key:3},ot=g("br",null,null,-1),st={key:4},rt=g("br",null,null,-1);function it(e,n,c,U,a,d){return f(),S(Ae,{"grid-list-xs":""},{default:l(()=>[t(ze,{transition:"dialog-top-transition","max-width":"600",modelValue:d.displayDialog,"onUpdate:modelValue":n[1]||(n[1]=u=>d.displayDialog=u)},{default:l(()=>[t(j,null,{default:l(()=>[t(ge,{color:"primary",dark:""},{default:l(()=>[o("Import "+v(c.language)+" Translations",1)]),_:1}),t(L,null,{default:l(()=>[t(Ye,{disabled:a.importStatus.running,accept:".xlsx",label:"Translation File","show-size":"",modelValue:a.importedTranslation,"onUpdate:modelValue":n[0]||(n[0]=u=>a.importedTranslation=u),ref:"trans"},null,8,["disabled","modelValue"]),a.importStatus.running?(f(),S(he,{key:0,indeterminate:!0,height:"20"},{default:l(()=>[o(" Importing Translations ")]),_:1})):T("",!0),a.importStatus.successful?(f(),D("div",$e,[t(y,null,{default:l(()=>[o("mdi-check")]),_:1}),et])):T("",!0),a.importStatus.failed?(f(),D("div",tt,at)):T("",!0),a.importStatus.duplicated.length>0?(f(),D("div",nt,[o("    Below Keys are Dupplicated "),ot,(f(!0),D(I,null,ve(a.importStatus.duplicated,(u,k)=>(f(),D(I,null,[o("       "+v(++k)+". "+v(u),1)],64))),256))])):T("",!0),a.importStatus.invalid.length>0?(f(),D("div",st,[o("    Below Keys were not expected and must be removed before importing "),rt,(f(!0),D(I,null,ve(a.importStatus.invalid,(u,k)=>(f(),D(I,null,[o("       "+v(++k)+". "+v(u),1)],64))),256))])):T("",!0)]),_:1}),t(Ne,{class:"justify-end"},{default:l(()=>[t(_,{disabled:a.importStatus.running,text:"",onClick:d.closeImportDialog},{default:l(()=>[t(y,null,{default:l(()=>[o("mdi-close")]),_:1}),o(" Cancel ")]),_:1},8,["disabled","onClick"]),t(ne),t(_,{disabled:a.importStatus.running||!a.importedTranslation,text:"",onClick:d.importTranslation},{default:l(()=>[t(y,null,{default:l(()=>[o("mdi-import")]),_:1}),o(" Import ")]),_:1},8,["disabled","onClick"])]),_:1})]),_:1})]),_:1},8,["modelValue"])]),_:1})}const ut=Be(Ze,[["render",it]]);const dt=ye({autoGrow:Boolean,autofocus:Boolean,counter:[Boolean,Number,String],counterValue:Function,prefix:String,placeholder:String,persistentPlaceholder:Boolean,persistentCounter:Boolean,noResize:Boolean,rows:{type:[Number,String],default:5,validator:e=>!isNaN(parseFloat(e))},maxRows:{type:[Number,String],validator:e=>!isNaN(parseFloat(e))},suffix:String,modelModifiers:Object,...be(),...xe()},"v-textarea"),ct=Te()({name:"VTextarea",directives:{Intersect:Ge},inheritAttrs:!1,props:dt(),emits:{"click:control":e=>!0,"mousedown:control":e=>!0,"update:focused":e=>!0,"update:modelValue":e=>!0},setup(e,n){let{attrs:c,emit:U,slots:a}=n;const d=Ce(e,"modelValue"),{isFocused:u,focus:k,blur:i}=Ve(e),p=B(()=>typeof e.counterValue=="function"?e.counterValue(d.value):(d.value||"").toString().length),G=B(()=>{if(c.maxlength)return c.maxlength;if(!(!e.counter||typeof e.counter!="number"&&typeof e.counter!="string"))return e.counter});function Q(s,m){var h,V;!e.autofocus||!s||(V=(h=m[0].target)==null?void 0:h.focus)==null||V.call(h)}const H=A(),N=A(),X=A(""),E=A(),Y=B(()=>e.persistentPlaceholder||u.value||e.active);function b(){var s;E.value!==document.activeElement&&((s=E.value)==null||s.focus()),u.value||k()}function se(s){b(),U("click:control",s)}function q(s){U("mousedown:control",s)}function re(s){s.stopPropagation(),b(),ae(()=>{d.value="",De(e["onClick:clear"],s)})}function ie(s){var h;const m=s.target;if(d.value=m.value,(h=e.modelModifiers)!=null&&h.trim){const V=[m.selectionStart,m.selectionEnd];ae(()=>{m.selectionStart=V[0],m.selectionEnd=V[1]})}}const F=A();function z(){e.autoGrow&&ae(()=>{if(!F.value||!N.value)return;const s=getComputedStyle(F.value),m=getComputedStyle(N.value.$el),h=parseFloat(s.getPropertyValue("--v-field-padding-top"))+parseFloat(s.getPropertyValue("--v-input-padding-top"))+parseFloat(s.getPropertyValue("--v-field-padding-bottom")),V=F.value.scrollHeight,K=parseFloat(s.lineHeight),W=Math.max(parseFloat(e.rows)*K+h,parseFloat(m.getPropertyValue("--v-input-control-height"))),R=parseFloat(e.maxRows)*K+h||1/0;X.value=Ke(We(V??0,W,R))})}Oe(z),O(d,z),O(()=>e.rows,z),O(()=>e.maxRows,z),O(()=>e.density,z);let r;return O(F,s=>{s?(r=new ResizeObserver(z),r.observe(F.value)):r==null||r.disconnect()}),Le(()=>{r==null||r.disconnect()}),we(()=>{const s=!!(a.counter||e.counter||e.counterValue),m=!!(s||a.details),[h,V]=Pe(c),[{modelValue:K,...W}]=oe.filterProps(e),[R]=Se(e);return t(oe,C({ref:H,modelValue:d.value,"onUpdate:modelValue":w=>d.value=w,class:["v-textarea v-text-field",{"v-textarea--prefixed":e.prefix,"v-textarea--suffixed":e.suffix,"v-text-field--prefixed":e.prefix,"v-text-field--suffixed":e.suffix,"v-textarea--auto-grow":e.autoGrow,"v-textarea--no-resize":e.noResize||e.autoGrow,"v-text-field--flush-details":["plain","underlined"].includes(e.variant)},e.class],style:e.style},h,W,{focused:u.value}),{...a,default:w=>{let{isDisabled:x,isDirty:J,isReadonly:ue,isValid:de}=w;return t(Ie,C({ref:N,style:{"--v-textarea-control-height":X.value},onClick:se,onMousedown:q,"onClick:clear":re,"onClick:prependInner":e["onClick:prependInner"],"onClick:appendInner":e["onClick:appendInner"],role:"textbox"},R,{active:Y.value||J.value,dirty:J.value||e.dirty,disabled:x.value,focused:u.value,error:de.value===!1}),{...a,default:ce=>{let{props:{class:Z,...fe}}=ce;return t(I,null,[e.prefix&&t("span",{class:"v-text-field__prefix"},[e.prefix]),ke(t("textarea",C({ref:E,class:Z,value:d.value,onInput:ie,autofocus:e.autofocus,readonly:ue.value,disabled:x.value,placeholder:e.placeholder,rows:e.rows,name:e.name,onFocus:b,onBlur:i},fe,V),null),[[He("intersect"),{handler:Q},null,{once:!0}]]),e.autoGrow&&ke(t("textarea",{class:[Z,"v-textarea__sizer"],"onUpdate:modelValue":$=>d.value=$,ref:F,readonly:!0,"aria-hidden":"true"},null),[[qe,d.value]]),e.suffix&&t("span",{class:"v-text-field__suffix"},[e.suffix])])}})},details:m?w=>{var x;return t(I,null,[(x=a.details)==null?void 0:x.call(a,w),s&&t(I,null,[t("span",null,null),t(Fe,{active:e.persistentCounter||u.value,value:p.value,max:G.value},a.counter)])])}:void 0})}),Re({},H,N,E)}}),ft={data(){return{snackbarColor:"green",snackbarText:"",snackbar:!1,confirmGTrans:!1,importDialog:!1,exporting:!1,loading:!0,search:"",selected:{},newTranslation:"",translations:[],transRunType:"",headers:[{text:"SN",value:"sn"},{text:"Word",value:"en"},{text:"Translated To",value:"text"}],translationProgress:{showTransProgress:!1,required:0,translated:0,percent:0,interval:""}}},filters:{limitTexts(e){return console.log(e),e.length<100?e:e.substring(0,100)+"..."}},methods:{displayTransConf(e){this.transRunType=e,e==="full"?this.confirmGTrans=!0:this.googleTranslate()},edit(e){this.selected=e,this.newTranslation=e.text},closeEdit(){this.selected={}},save(){fetch("/translator/update",{method:"PUT",headers:{"Content-Type":"application/json"},body:JSON.stringify({locale:this.$route.params.locale,path:this.selected.key,text:this.newTranslation})}).then(e=>{e.status===200&&(this.getTranslations(),this.snackbar=!0,this.snackbarColor="green",this.snackbarText="Translation Updated")}).catch(()=>{this.snackbar=!0,this.snackbarColor="red",this.snackbarText="Error Occured"})},getTranslations(e){e||(this.loading=!0),fetch("/translator/getTranslations/"+this.$route.params.locale).then(n=>{n.json().then(c=>{this.loading=!1,this.translations=c.translations,this.language=c.language})}).catch(n=>{console.log(n)})},googleTranslate(){this.confirmGTrans=!1,fetch("/translator/translate/en/"+this.$route.params.locale+"/"+this.transRunType).then(e=>{e.status===200&&(this.translationProgress.interval=setInterval(()=>{this.googleTranslateCount()},1e3))}).catch(()=>{this.snackbar=!0,this.snackbarColor="red",this.snackbarText="Error Occured During Translation"})},googleTranslateCount(){this.translationProgress.showTransProgress=!0,fetch("/translator/translationCount/en/"+this.$route.params.locale).then(e=>{e.json().then(n=>{this.getTranslations(!0),this.translationProgress.required=n.from,this.translationProgress.translated=n.to,this.translationProgress.percent=parseInt(n.to)*100/parseInt(n.from),(n.from===n.to||!n.running)&&(clearInterval(this.translationProgress.interval),this.translationProgress.showTransProgress=!1,this.snackbar=!0,this.snackbarColor="green",this.snackbarText="Translation completed successfully")})}).catch(()=>{this.snackbar=!0,this.snackbarColor="red",this.snackbarText="Cant get progress"})},exportTranslation(){this.exporting=!0,fetch("/translator/export/"+this.$route.params.locale).then(e=>e.blob()).then(e=>{this.exporting=!1;const n=window.URL.createObjectURL(e),c=document.createElement("a");c.href=n,c.download=this.language+".xlsx",document.body.appendChild(c),c.click(),c.remove()}).catch(()=>{this.snackbar=!0,this.snackbarColor="red",this.snackbarText="Cant download translation",this.exporting=!1})}},components:{ImportTranslations:ut},created(){this.language=this.$route.params.locale,this.getTranslations(),fetch("/translator/translationCount/en/"+this.$route.params.locale).then(e=>{e.json().then(n=>{n.running&&(this.translationProgress.showTransProgress=!0,this.translationProgress.interval=setInterval(()=>{this.googleTranslateCount()},1e3))})}).catch(()=>{this.snackbar=!0,this.snackbarColor="red",this.snackbarText="Cant get translation progress"}),this.emitter.on("closeImportDialog",()=>{this.importDialog=!1})},beforeDestroy(){clearInterval(this.translationProgress.interval)}},mt=g("br",null,null,-1),gt=g("br",null,null,-1),ht=g("span",null,"Back to Enabled Languages List",-1),pt={key:0,style:{color:"green"}},vt=g("span",null,"Translate all texts",-1),kt=g("span",null,"Only missing translations",-1),_t=g("span",null,"Close translation dialog",-1),yt=g("br",null,null,-1),bt=g("br",null,null,-1),xt=g("br",null,null,-1);function Tt(e,n,c,U,a,d){const u=_e("ImportTranslations"),k=_e("v-data-table");return f(),S(Ae,{"grid-list-xs":""},{default:l(()=>[t(Je,{modelValue:a.snackbar,"onUpdate:modelValue":n[1]||(n[1]=i=>a.snackbar=i),timeout:"2000"},{action:l(({attrs:i})=>[t(_,C({color:a.snackbarColor,text:""},i,{onClick:n[0]||(n[0]=p=>a.snackbar=!1)}),{default:l(()=>[o(" Close ")]),_:2},1040,["color"])]),default:l(()=>[o(v(a.snackbarText)+" ",1)]),_:1},8,["modelValue"]),t(ze,{transition:"dialog-top-transition","max-width":"600",modelValue:a.confirmGTrans,"onUpdate:modelValue":n[2]||(n[2]=i=>a.confirmGTrans=i)},{default:l(i=>[t(j,null,{default:l(()=>[t(ge,{color:"primary",dark:""},{default:l(()=>[o("Proceed?")]),_:1}),t(L,null,{default:l(()=>[o(" This will overwrite all existing "+v(e.language)+" translations, do you want to proceed? ",1)]),_:1}),t(Ne,{class:"justify-end"},{default:l(()=>[t(_,{text:"",onClick:p=>i.value=!1},{default:l(()=>[t(y,null,{default:l(()=>[o("mdi-close")]),_:1}),o(" No ")]),_:2},1032,["onClick"]),t(ne),t(_,{text:"",onClick:d.googleTranslate},{default:l(()=>[t(y,null,{default:l(()=>[o("mdi-check")]),_:1}),o(" Yes ")]),_:1},8,["onClick"])]),_:2},1024)]),_:2},1024)]),_:1},8,["modelValue"]),t(u,{importDialog:a.importDialog,locale:this.$route.params.locale,language:e.language},null,8,["importDialog","locale","language"]),t(j,null,{default:l(()=>[t(me,{"primary-title":""},{default:l(()=>[t(ee,null,{default:l(()=>[t(P,null,{default:l(()=>[o(v(e.language)+" Translations ",1),mt,gt,t(le,{top:""},{activator:l(({on:i,attrs:p})=>[t(_,C({color:"indigo",dark:"",to:"/",small:"",class:"mx-2",fab:""},p,te(i)),{default:l(()=>[t(y,null,{default:l(()=>[o("mdi-arrow-left-circle")]),_:1})]),_:2},1040)]),default:l(()=>[ht]),_:1})]),_:1}),e.$store.state.user.loggedin?(f(),S(P,{key:0},{default:l(()=>[t(j,{width:"300"},{default:l(()=>[t(me,{"primary-title":""},{default:l(()=>[o(" Translate with google ")]),_:1}),t(L,null,{default:l(()=>[a.translationProgress.showTransProgress?(f(),D("label",pt," Translation on progress ")):T("",!0),t(ee,null,{default:l(()=>[t(P,null,{default:l(()=>[t(le,{bottom:""},{activator:l(({on:i,attrs:p})=>[t(_,C({color:"primary",disabled:a.translationProgress.showTransProgress,small:"",onClick:n[3]||(n[3]=G=>d.displayTransConf("full"))},p,te(i)),{default:l(()=>[t(y,{left:""},{default:l(()=>[o("mdi-google-translate")]),_:1}),o(" Full ")]),_:2},1040,["disabled"])]),default:l(()=>[vt]),_:1})]),_:1}),t(P,null,{default:l(()=>[t(le,{bottom:""},{activator:l(({on:i,attrs:p})=>[t(_,C({color:"blue",dark:"",disabled:a.translationProgress.showTransProgress,small:"",onClick:n[4]||(n[4]=G=>d.displayTransConf("partial"))},p,te(i)),{default:l(()=>[t(y,{left:""},{default:l(()=>[o("mdi-google-translate")]),_:1}),o(" Partial ")]),_:2},1040,["disabled"])]),default:l(()=>[kt]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})):T("",!0),t(P,null,{default:l(()=>[e.$store.state.user.loggedin?(f(),S(j,{key:0,width:"300"},{default:l(()=>[t(me,{"primary-title":""},{default:l(()=>[o(" Import/Export ")]),_:1}),t(L,null,{default:l(()=>[t(ee,null,{default:l(()=>[t(P,null,{default:l(()=>[a.exporting?(f(),S(he,{key:1,indeterminate:!0,height:"20"},{default:l(()=>[o(" Preparing Export ")]),_:1})):(f(),S(_,{key:0,color:"primary",small:"",onClick:d.exportTranslation},{default:l(()=>[t(y,{left:""},{default:l(()=>[o("mdi-export")]),_:1}),o(" Export ")]),_:1},8,["onClick"]))]),_:1}),t(P,null,{default:l(()=>[t(_,{color:"primary",small:"",onClick:n[5]||(n[5]=i=>a.importDialog=!0)},{default:l(()=>[t(y,{left:""},{default:l(()=>[o("mdi-import")]),_:1}),o(" Import ")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})):T("",!0)]),_:1}),t(P,null,{default:l(()=>[t(Qe,{modelValue:a.search,"onUpdate:modelValue":n[6]||(n[6]=i=>a.search=i),label:"Search",class:"mx-4",clearable:"","prepend-icon":"mdi-magnify"},null,8,["modelValue"])]),_:1})]),_:1})]),_:1})]),_:1}),t(ee,null,{default:l(()=>[t(P,null,{default:l(()=>[t(j,null,{default:l(()=>[t(L,null,{default:l(()=>[a.translationProgress.showTransProgress?(f(),S(he,{key:0,modelValue:a.translationProgress.percent,"onUpdate:modelValue":n[7]||(n[7]=i=>a.translationProgress.percent=i),height:"25","buffer-value":"0",stream:""},{default:l(()=>[g("strong",null,v(a.translationProgress.translated)+"/"+v(a.translationProgress.required),1)]),_:1},8,["modelValue"])):T("",!0),t(k,{headers:a.headers,items:a.translations,search:a.search,loading:a.loading,"loading-text":"Loading",class:"elevation-1",style:{cursor:"pointer"}},{"item.value.en":l(({item:i})=>[o(v(i.value.en|e.limitTexts),1)]),"item.value.text":l(({item:i})=>[o(v(i.value.text|e.limitTexts),1)]),_:1},8,["headers","items","search","loading"])]),_:1})]),_:1})]),_:1}),a.selected.key?(f(),S(P,{key:0},{default:l(()=>[t(j,null,{default:l(()=>[t(ge,{color:"secondary",dark:"",height:"30"},{default:l(()=>[o(" Edit Translation "),t(ne),t(le,{top:""},{activator:l(({on:i,attrs:p})=>[t(_,C({fab:"",icon:"",color:"white",onClick:d.closeEdit},p,te(i)),{default:l(()=>[t(y,null,{default:l(()=>[o("mdi-close")]),_:1})]),_:2},1040,["onClick"])]),default:l(()=>[_t]),_:1})]),_:1}),t(L,null,{default:l(()=>[o(" WORD: "),yt,g("i",null,[g("b",null,v(a.selected.en),1)]),bt,xt,o(" TRANSLATION: "),t(ct,{clearable:"","clear-icon":"mdi-close-circle",modelValue:a.newTranslation,"onUpdate:modelValue":n[8]||(n[8]=i=>a.newTranslation=i),style:{"background-color":"#ffffc2","font-family":`'Franklin Gothic Medium', 'Arial Narrow', Arial,
                  sans-serif`}},null,8,["modelValue"]),t(ne),e.$store.state.user.loggedin?(f(),S(_,{key:0,small:"",rounded:"",color:"primary",dark:"",onClick:d.save},{default:l(()=>[t(y,{left:""},{default:l(()=>[o("mdi-content-save")]),_:1}),o(" Save ")]),_:1},8,["onClick"])):T("",!0)]),_:1})]),_:1})]),_:1})):T("",!0)]),_:1})]),_:1})}const Pt=Be(ft,[["render",Tt]]);export{Pt as default};
