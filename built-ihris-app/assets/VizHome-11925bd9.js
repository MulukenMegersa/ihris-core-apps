import{_ as z,o as g,c as V,w as i,a,i as c,f as h,d as s,h as v,v as l}from"./index-932a5ff4.js";import{V as _}from"./VContainer-1ee36015.js";import{V as p}from"./VCol-558e9971.js";const y={data(){return{displayVizList:!1,displayDashList:!1,loading:!1,visualizations:[]}},methods:{listViz(){this.loading=!0,this.displayVizList=!0,this.getViz().then(()=>{this.loading=!1})},getViz(r){return new Promise((e,u)=>{r||(r="/fhir/Basic?_profile=http://ihris.org/fhir/StructureDefinition/ihris-data-visualization"),fetch(r).then(d=>{d.json().then(n=>{for(const t of n.entry){const f=t.resource.extension.find(m=>m.url==="http://ihris.org/fhir/StructureDefinition/ihris-basic-name");f&&this.visualizations.push({id:t.resource.id,name:f.valueString})}const o=n.link.find(t=>t.relation==="next");if(o)this.getViz(o.url).then(()=>e()).catch(t=>u(t));else return e()})})})}}},x=l("div",{style:{"text-align":"center"}},[s(" iHRIS Data Visualizer lets you create different charts to easily visualize your data for better decision making. "),l("br"),s(" You may start by creating a new visualization or open an existing visualization to either edit it or creating a new visualization based on the open data visualization. ")],-1),b=l("br",null,null,-1);function $(r,e,u,d,n,o){return g(),V(_,{"grid-list-xs":""},{default:i(()=>[x,b,a(v,{justify:"center"},{default:i(()=>[a(p,{cols:"auto"},{default:i(()=>[a(c,{variant:"outlined",color:"primary",size:"x-large",onClick:e[0]||(e[0]=t=>r.$router.push({name:"vizBuilder"}))},{default:i(()=>[a(h,{start:"",size:"x-large"},{default:i(()=>[s("mdi-eye")]),_:1}),s("Visualizations ")]),_:1})]),_:1}),a(p,{cols:"auto"},{default:i(()=>[a(c,{variant:"outlined",color:"primary",size:"x-large",onClick:e[1]||(e[1]=t=>r.$router.push({name:"dashBuilder",params:{edit:!0}}))},{default:i(()=>[a(h,{start:"",size:"x-large"},{default:i(()=>[s("mdi-view-dashboard-edit-outline ")]),_:1}),s(" Dashboards ")]),_:1})]),_:1})]),_:1})]),_:1})}const C=z(y,[["render",$]]);export{C as default};
