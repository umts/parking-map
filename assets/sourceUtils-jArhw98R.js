import{cB as d,cC as m,cA as h,cD as p,aL as y,cE as g,ak as a,$ as w}from"./index-7JBYUV_z.js";import{n as I}from"./date-be_IQzZd.js";class _{constructor(){this.code=null,this.description=null}}class b{constructor(r){this.error=new _,this.globalId=null,this.objectId=null,this.success=!1,this.uniqueId=null,this.error.description=r}}function c(n){return new b(n)}class q{constructor(r){this.globalId=null,this.success=!0,this.objectId=this.uniqueId=r}}function v(n){return new q(n)}const u=new Set;function D(n,r,e,f=!1){u.clear();for(const i in e){const t=n.get(i);if(!t)continue;const o=E(t,e[i]);if(u.add(t.name),t&&(f||t.editable)){const l=d(t,o);if(l)return c(m(l,t,o));r[t.name]=o}}for(const i of(n==null?void 0:n.requiredFields)??[])if(!u.has(i.name))return c(`missing required field "${i.name}"`);return null}function E(n,r){let e=r;return h(n)&&typeof r=="string"?e=parseFloat(r):p(n)&&r!=null&&typeof r!="string"?e=String(r):y(n)&&typeof r=="string"&&(e=I(r)),g(e)}let s;function F(n,r){if(!n||!a(r))return n;if("rings"in n||"paths"in n){if(s==null)throw new TypeError("geometry engine not loaded");return s.simplify(r,n)}return n}async function P(){return s==null&&(s=await w(()=>import("./geometryEngineJSON-CNMHN2-s.js"),__vite__mapDeps([0,1,2,3,4,5]),import.meta.url)),s}async function G(n,r){!a(n)||r!=="esriGeometryPolygon"&&r!=="esriGeometryPolyline"||await P()}export{G as I,v as d,c as f,D as p,F as w};
function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["./geometryEngineJSON-CNMHN2-s.js","./geometryEngineBase-aUXwhIVu.js","./index-7JBYUV_z.js","./index-HZO3cfKG.css","./geometryEngineJSON-Tsus8iFo.js","./json-v6EOeNTY.js"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}