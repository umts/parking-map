import{I as l,b as p}from"./utils-CgdyLAqO.js";import{a as s}from"./jsonContext-CrwY8wtH.js";import{Z as y,W as f,bT as v}from"./index-BMJZ-YmQ.js";import{u as i}from"./saveUtils-C7bMF2V8.js";import"./originUtils-D69mHv66.js";import"./multiOriginJSONSupportUtils-C0wm8_Yw.js";import"./saveAPIKeyUtils-CUV6DOWX.js";import"./resourceUtils-CZhgn7-F.js";const n="Group Layer",d="group-layer-save",I="group-layer-save-as",o=f.GROUP_LAYER_MAP;function c(e){return{isValid:e.type==="group",errorMessage:"Layer.type should be 'group'"}}function g(e){return{isValid:v(e,o),errorMessage:`Layer.portalItem.typeKeywords should have '${o}'`}}function u(e){const r=e.layerJSON;return Promise.resolve(r&&Object.keys(r).length?r:null)}async function P(e,r){r.title||(r.title=e.title),y(r,o)}async function $(e,r){return l({layer:e,itemType:n,validateLayer:c,validateItem:g,createJSONContext:t=>s(t,e),createItemData:u,errorNamePrefix:d,saveResources:async(t,a)=>(e.sourceIsPortalItem||await t.removeAllResources().catch(()=>{}),i(e.resourceReferences,a))},r)}async function w(e,r,t){return p({layer:e,itemType:n,validateLayer:c,createJSONContext:a=>s(a,e),createItemData:u,errorNamePrefix:I,newItem:r,setItemProperties:P,saveResources:(a,m)=>i(e.resourceReferences,m)},t)}export{$ as save,w as saveAs};