import f from"./ChartAxisPointer-d6acb032.js";import{T as V}from"./TextStyle-ad1952d9.js";import{_ as C,r as u,o as v,k as S,a as t,w as i,bb as a,d,h as w}from"./index-e2017088.js";import{V as y}from"./VCol-ec63a4cb.js";import{e as r,f as c,g as m,h as p,i as g}from"./VisualizationBuilder-93f21fad.js";import"./VContainer-bf123b99.js";const T={props:["values"],data(){return{tooltip:{show:!0,showContent:!0,alwaysShowContent:!1,position:function(n){return[n[0],130]},trigger:"item",triggerOn:"mousemove|click",axisPointer:{show:!1,type:"line",label:{show:!1,margin:3,color:"#fff",fontStyle:"normal",fontWeight:"normal",fontFamily:"sans-serif",lineHeight:12},triggerTooltip:!0,value:"",handle:{show:!0,size:45,color:"#333"}},textStyle:{},order:"seriesAsc"},triggers:["item","axis","none"],triggerOn:["mousemove","click","mousemove|click","none"],order:[{name:"Ascending Order, based on series",value:"seriesAsc"},{name:"Descending Order, based on series",value:"seriesDesc"},{name:"Ascending Order, based on values",value:"valueAsc"},{name:"Ascending Order, based on values",value:"valueDesc"}],expandSettings:[]}},methods:{externalSettings(n){this.tooltip[n.name]=n.value,this.updated()},textStyle(n){this.tooltip[n.name]=n.value,this.updated()},updated(){this.$emit("chartTooltip",{name:"tooltip",value:this.tooltip})}},components:{ChartAxisPointer:f,TextStyle:V},created(){for(const n in this.values)this.tooltip[n]=this.values[n];this.expandSettings=[0,1],setTimeout(()=>{this.expandSettings=[]},500)}};function b(n,l,A,P,e,s){const h=u("ChartAxisPointer"),x=u("TextStyle");return v(),S("div",null,[t(w,null,{default:i(()=>[t(y,{cols:"12"},{default:i(()=>[t(r,{label:"Show/Hide",modelValue:e.tooltip.show,"onUpdate:modelValue":l[0]||(l[0]=o=>e.tooltip.show=o),onChange:s.updated,color:"blue"},null,8,["modelValue","onChange"]),t(a,{items:e.triggers,modelValue:e.tooltip.trigger,"onUpdate:modelValue":l[1]||(l[1]=o=>e.tooltip.trigger=o),label:"Type of triggering",onChange:s.updated},null,8,["items","modelValue","onChange"]),t(a,{items:e.triggerOn,modelValue:e.tooltip.triggerOn,"onUpdate:modelValue":l[2]||(l[2]=o=>e.tooltip.triggerOn=o),label:"Type of triggering",onChange:s.updated},null,8,["items","modelValue","onChange"]),t(a,{items:e.order,modelValue:e.tooltip.order,"onUpdate:modelValue":l[3]||(l[3]=o=>e.tooltip.order=o),label:"Tooltip Order","item-title":"name","item-value":"value",onChange:s.updated},null,8,["items","modelValue","onChange"]),t(r,{color:"blue",label:"Show Floating Layer",modelValue:e.tooltip.showContent,"onUpdate:modelValue":l[4]||(l[4]=o=>e.tooltip.showContent=o),onChange:s.updated},null,8,["modelValue","onChange"]),t(r,{color:"blue",label:"Always Show Content",modelValue:e.tooltip.alwaysShowContent,"onUpdate:modelValue":l[5]||(l[5]=o=>e.tooltip.alwaysShowContent=o),onChange:s.updated},null,8,["modelValue","onChange"]),t(c,{multiple:"",focusable:"",modelValue:e.expandSettings,"onUpdate:modelValue":l[6]||(l[6]=o=>e.expandSettings=o)},{default:i(()=>[t(m,null,{default:i(()=>[t(p,null,{default:i(()=>[d("Chart Axis Pointer")]),_:1}),t(g,null,{default:i(()=>[t(h,{onChartAxisPointer:s.externalSettings,values:e.tooltip.axisPointer},null,8,["onChartAxisPointer","values"])]),_:1})]),_:1}),t(m,null,{default:i(()=>[t(p,null,{default:i(()=>[d("Text Style")]),_:1}),t(g,null,{default:i(()=>[t(x,{onTextStyle:s.textStyle,values:e.tooltip.textStyle},null,8,["onTextStyle","values"])]),_:1})]),_:1})]),_:1},8,["modelValue"])]),_:1})]),_:1})])}const B=C(T,[["render",b]]);export{B as default};
