import{R as _,S as f,C as K,T as A,U as T,W as $,X as u,Y as G,Z as y,_ as I}from"./index-7JBYUV_z.js";import{i as P}from"./originUtils-1w5HeAJR.js";import{I as k,y as E,w as N,b as z,u as B,v as j,l as g,d as C,m as b}from"./utils-3aUE2h0R.js";import{t as V}from"./fetchService-Rxum3pdF.js";import{a as W}from"./lazyLayerLoader-hbSIilh7.js";import{o as x}from"./jsonContext-WzHE5rwC.js";import"./multiOriginJSONSupportUtils-R5XHSAtL.js";import"./saveAPIKeyUtils-0lkCfuiO.js";const h="Feature Service",w="feature-layer-utils",X=`${w}-save`,q=`${w}-save-as`,p=`${w}-saveall`,m=`${w}-saveall-as`;function v(e){return{isValid:G(e)&&(e.type!=="feature"||!e.dynamicDataSource),errorMessage:"Feature layer should be a layer or table in a map or feature service"}}function O(e){const a=[],t=[];for(const{layer:n,layerJSON:l}of e)n.isTable?t.push(l):a.push(l);return{layers:a,tables:t}}function F(e){return O([e])}async function J(e,a){return/\/\d+\/?$/.test(e.url)?F(a[0]):M(a,e)}async function M(e,a){if(!a)return e.reverse(),O(e);const{layer:{url:t,customParameters:n,apiKey:l}}=e[0];let r=await a.fetchData("json");(r==null?void 0:r.layers)!=null&&(r==null?void 0:r.tables)!=null||(r=await H(r,{url:t??"",customParameters:n,apiKey:l},e.map(s=>s.layer.layerId)));for(const s of e)R(s.layer,s.layerJSON,r);return r}async function H(e,a,t){e||(e={}),e.layers||(e.layers=[]),e.tables||(e.tables=[]);const{url:n,customParameters:l,apiKey:r}=a,{serviceJSON:s,layersJSON:o}=await V(n,{customParameters:l,apiKey:r}),i=S(e.layers,s.layers,t),c=S(e.tables,s.tables,t);e.layers=i.itemResources,e.tables=c.itemResources;const d=[...i.added,...c.added],Y=o?[...o.layers,...o.tables]:[];return await Q(e,d,n,Y),e}function S(e,a,t){const n=_(e,a,(r,s)=>r.id===s.id);e=e.filter(r=>!n.removed.some(s=>s.id===r.id));const l=n.added;return l.forEach(({id:r})=>{e.push({id:r})}),{itemResources:e,added:l.filter(({id:r})=>!t.includes(r))}}async function Q(e,a,t,n){const l=await Z(a),r=a.map(({id:s,type:o})=>new(l.get(o))({url:t,layerId:s,sourceJSON:n.find(({id:i})=>i===s)}));await Promise.allSettled(r.map(s=>s.load())),r.forEach(s=>{const{layerId:o,loaded:i,defaultPopupTemplate:c}=s;if(!i||c==null)return;const d={id:o,popupInfo:c.toJSON()};s.operationalLayerType!=="ArcGISFeatureLayer"&&(d.layerType=s.operationalLayerType),R(s,d,e)})}async function Z(e){const a=[];e.forEach(({type:l})=>{const r=ee(l),s=W[r];a.push(s())});const t=await Promise.all(a),n=new Map;return e.forEach(({type:l},r)=>{n.set(l,t[r])}),n}function ee(e){let a;switch(e){case"Feature Layer":case"Table":a="FeatureLayer";break;case"Oriented Imagery Layer":a="OrientedImageryLayer"}return a}function R(e,a,t){e.isTable?L(t.tables,a):L(t.layers,a)}function L(e,a){const t=e.findIndex(({id:n})=>n===a.id);t===-1?e.push(a):e[t]=a}function U(e,a){if(!e.length)throw new y(`${a}:missing-parameters`,"'layers' array should contain at least one feature layer")}function ae(e,a){const t=e.map(n=>n.portalItem.id);if(new Set(t).size>1)throw new y(`${a}:invalid-parameters`,"All layers in the 'layers' array should be loaded from the same portal item")}function D(e,a){const t=e.map(n=>n.layerId);if(new Set(t).size!==t.length)throw new y(`${a}:invalid-parameters`,"'layers' array should contain only one instance each of layer or table in a feature service")}async function te(e){U(e,p),await Promise.all(e.map(a=>a.load()));for(const a of e)g(a,p,v),C({layer:a,itemType:h,errorNamePrefix:p});ae(e,p),D(e,p)}async function re(e,a){const{url:t,layerId:n,title:l,fullExtent:r,isTable:s}=e,o=f(t);a.url=(o==null?void 0:o.serverType)==="FeatureServer"?t:`${t}/${n}`,a.title||(a.title=l),a.extent=null,s||r==null||(a.extent=await A(r)),T(a,u.METADATA),T(a,u.MULTI_LAYER),I(a,u.SINGLE_LAYER),s&&I(a,u.TABLE)}function se(e,a){for(const r of e){const s=r.parsedUrl.path,o=f(s);if(!(o==null?void 0:o.url.path))throw new y(`${a}:invalid-parameters`,b(r,`has unsupported url pattern: ${s}`),{layer:r});const c=o==null?void 0:o.serverType;if(c!=="FeatureServer"&&c!=="MapServer")throw new y(`${a}:invalid-parameters`,b(r,`has unsupported server type: ${c}`),{layer:r});if(c==="MapServer"&&e.length>1)throw new y(`${a}:invalid-parameters`,"Only one layer or table in a map service can be saved")}const t=f(e[0].parsedUrl.path),n=t==null?void 0:t.url.path;if(!e.every(r=>{const s=f(r.parsedUrl.path);return(s==null?void 0:s.url.path)===n}))throw new y(`${a}:invalid-parameters`,"'layers' array should only contain layers or tables that belong to the same feature service")}async function ne(e){U(e,m),await Promise.all(e.map(a=>a.load()));for(const a of e)g(a,m,v);se(e,m),D(e,m)}async function oe(e,a){let t=0,n=0;for(const{isTable:s}of a)s?n++:t++;const l=a[0].parsedUrl.path,r=f(l);if(e.url=(r==null?void 0:r.serverType)==="FeatureServer"?r.url.path:l,e.title||(e.title=r.title),e.extent=null,t>0){const s=a.map(o=>o.fullExtent).filter(K).reduce((o,i)=>o.clone().union(i));s&&(e.extent=await A(s))}T(e,u.METADATA),$(e,u.MULTI_LAYER,a.length>1),$(e,u.SINGLE_LAYER,a.length===1),$(e,u.TABLE,n>0&&t===0),N(e)}async function de(e,a){return k({layer:e,itemType:h,validateLayer:v,createItemData:(t,n)=>J(n,[t]),errorNamePrefix:X},a)}async function he(e,a){await te(e);const t=e[0].portalItem,n=x(t),l=await Promise.all(e.map(s=>E(s,n,a))),r=await J(t,e.map((s,o)=>({layer:s,layerJSON:l[o]})));return N(t),await t.update({data:r}),await Promise.all(e.slice(1).map(s=>s.portalItem.reload())),P(n),t.clone()}async function we(e,a,t){return z({layer:e,itemType:h,validateLayer:v,createItemData:(n,l)=>Promise.resolve(F(n)),errorNamePrefix:q,newItem:a,setItemProperties:re},t)}async function ve(e,a,t){await ne(e);const n=B({itemType:h,errorNamePrefix:m,newItem:a}),l=x(n),r=await Promise.all(e.map(o=>E(o,l,t))),s=await M(e.map((o,i)=>({layer:o,layerJSON:r[i]})));await oe(n,e),await j(n,s,t);for(const o of e)o.portalItem=n.clone();return P(l),n}export{de as save,he as saveAll,ve as saveAllAs,we as saveAs};