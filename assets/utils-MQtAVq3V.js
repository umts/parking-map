function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["./symbolLayerUtils-D3uoZHua.js","./index-BMJZ-YmQ.js","./index-DonDir88.css"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
import{aW as l,dd as O,da as u,eM as G,a1 as A,eV as h,gP as b,gQ as j,gR as v,dc as X,gS as Y,_ as R,gT as W}from"./index-BMJZ-YmQ.js";import{f as w,M as k,y as M,m as p,C as F,u as V}from"./utils-EKChdEfc.js";function P(e,t,o,n){if(e)if(e.type!=="CIMTextSymbol"){if(o&&e.effects)for(const r of e.effects)H(r,t);if(e.symbolLayers)for(const r of e.symbolLayers)switch(r.type){case"CIMPictureMarker":case"CIMVectorMarker":_(r,t,n);break;case"CIMPictureStroke":case"CIMSolidStroke":!(n!=null&&n.preserveOutlineWidth)&&r.width&&(r.width*=t);break;case"CIMPictureFill":r.height&&(r.height*=t),r.offsetX&&(r.offsetX*=t),r.offsetY&&(r.offsetY*=t);break;case"CIMHatchFill":P(r.lineSymbol,t,!0,{...n,preserveOutlineWidth:!1}),r.offsetX&&(r.offsetX*=t),r.offsetY&&(r.offsetY*=t),r.separation&&(r.separation*=t)}}else e.height!=null&&(e.height*=t)}function _(e,t,o){if(e&&(e.markerPlacement&&D(e.markerPlacement,t),e.offsetX&&(e.offsetX*=t),e.offsetY&&(e.offsetY*=t),e.anchorPoint&&e.anchorPointUnits==="Absolute"&&(e.anchorPoint={x:e.anchorPoint.x*t,y:e.anchorPoint.y*t}),e.size=e.size!=null?e.size*t:0,e.type==="CIMVectorMarker"&&e.markerGraphics))for(const n of e.markerGraphics)e.scaleSymbolsProportionally||P(n.symbol,t,!0,o)}function D(e,t){switch(p(e)&&e.offset&&(e.offset*=t),e.type){case"CIMMarkerPlacementAlongLineRandomSize":case"CIMMarkerPlacementAlongLineSameSize":if(e.customEndingOffset&&(e.customEndingOffset*=t),e.offsetAlongLine&&(e.offsetAlongLine*=t),e.placementTemplate&&e.placementTemplate.length){const o=e.placementTemplate.map(n=>n*t);e.placementTemplate=o}break;case"CIMMarkerPlacementAlongLineVariableSize":if(e.maxRandomOffset&&(e.maxRandomOffset*=t),e.placementTemplate&&e.placementTemplate.length){const o=e.placementTemplate.map(n=>n*t);e.placementTemplate=o}break;case"CIMMarkerPlacementOnLine":e.startPointOffset&&(e.startPointOffset*=t);break;case"CIMMarkerPlacementAtExtremities":e.offsetAlongLine&&(e.offsetAlongLine*=t);break;case"CIMMarkerPlacementAtMeasuredUnits":case"CIMMarkerPlacementOnVertices":break;case"CIMMarkerPlacementAtRatioPositions":e.beginPosition&&(e.beginPosition*=t),e.endPosition&&(e.endPosition*=t);break;case"CIMMarkerPlacementPolygonCenter":e.offsetX&&(e.offsetX*=t),e.offsetY&&(e.offsetY*=t);break;case"CIMMarkerPlacementInsidePolygon":e.offsetX&&(e.offsetX*=t),e.offsetY&&(e.offsetY*=t),e.stepX&&(e.stepX*=t),e.stepY&&(e.stepY*=t)}}function H(e,t){switch(e.type){case"CIMGeometricEffectArrow":case"CIMGeometricEffectDonut":e.width&&(e.width*=t);break;case"CIMGeometricEffectBuffer":e.size&&(e.size*=t);break;case"CIMGeometricEffectCut":e.beginCut&&(e.beginCut*=t),e.endCut&&(e.endCut*=t),e.middleCut&&(e.middleCut*=t);break;case"CIMGeometricEffectDashes":if(e.customEndingOffset&&(e.customEndingOffset*=t),e.offsetAlongLine&&(e.offsetAlongLine*=t),e.dashTemplate&&e.dashTemplate.length){const o=e.dashTemplate.map(n=>n*t);e.dashTemplate=o}break;case"CIMGeometricEffectExtension":case"CIMGeometricEffectJog":case"CIMGeometricEffectRadial":e.length&&(e.length*=t);break;case"CIMGeometricEffectMove":e.offsetX&&(e.offsetX*=t),e.offsetY&&(e.offsetY*=t);break;case"CIMGeometricEffectOffset":case"CIMGeometricEffectOffsetTangent":e.offset&&(e.offset*=t);break;case"CIMGeometricEffectRegularPolygon":e.radius&&(e.radius*=t);break;case"CIMGeometricEffectTaperedPolygon":e.fromWidth&&(e.fromWidth*=t),e.length&&(e.length*=t),e.toWidth&&(e.toWidth*=t);break;case"CIMGeometricEffectWave":e.amplitude&&(e.amplitude*=t),e.period&&(e.period*=t)}}function S(e){const t=[];return g(w(e),t),t.length?new l(V(t[0])):null}function g(e,t){var r;if(!e)return;let o;o=e.type==="CIMTextSymbol"?e.symbol:e;const n=e.type==="CIMPolygonSymbol";if(o!=null&&o.symbolLayers){for(const a of o.symbolLayers)if(!(a.colorLocked||n&&(k(a)||M(a)&&a.markerPlacement&&p(a.markerPlacement))))switch(a.type){case"CIMPictureMarker":case"CIMPictureStroke":case"CIMPictureFill":a.tintColor&&I(t,a.tintColor);break;case"CIMVectorMarker":(r=a.markerGraphics)==null||r.forEach(s=>{g(s.symbol,t)});break;case"CIMSolidStroke":case"CIMSolidFill":I(t,a.color);break;case"CIMHatchFill":g(a.lineSymbol,t)}}}function I(e,t){for(const o of e)if(o.join(".")===t.join("."))return;e.push(t)}function ue(e,t,o){t instanceof l||(t=new l(t));const n=w(e);n&&C(n,t,o)}function C(e,t,o){var a;if(!e)return;let n;n=e.type==="CIMTextSymbol"?e.symbol:e;const r=(n==null?void 0:n.type)==="CIMPolygonSymbol";if(n!=null&&n.symbolLayers)for(const s of n.symbolLayers){if(s.colorLocked)continue;if(r){if(o){const{layersToColor:i}=o;if((k(s)||M(s)&&s.markerPlacement&&p(s.markerPlacement))&&i==="fill"||F(s)&&i==="outline")continue}else if(k(s)||M(s)&&s.markerPlacement&&p(s.markerPlacement))continue}const c=t.toArray();switch(s.type){case"CIMPictureMarker":case"CIMPictureStroke":case"CIMPictureFill":s.tintColor=c;break;case"CIMVectorMarker":(a=s.markerGraphics)==null||a.forEach(i=>{C(i.symbol,t,o)});break;case"CIMSolidStroke":case"CIMSolidFill":s.color=c;break;case"CIMHatchFill":C(s.lineSymbol,t,o)}}}const $="picture-fill",L="simple-fill",U="simple-line",E="simple-marker",J="text",N="cim",d=new O(1e3);function me(e){const t=e.style;let o=null;if(e)switch(e.type){case E:t!=="cross"&&t!=="x"&&(o=e.color);break;case L:t==="solid"?o=e.color:t!=="none"&&(o={type:"pattern",x:0,y:0,src:G(`esri/symbols/patterns/${t}.png`),width:5,height:5});break;case $:o={type:"pattern",src:e.url,width:u(e.width)*e.xscale,height:u(e.height)*e.yscale,x:u(e.xoffset),y:u(e.yoffset)};break;case J:o=e.color;break;case N:o=S(e)}return o}function ye(e,t){const o=e+"-"+t;return d.get(o)!==void 0?Promise.resolve(d.get(o)):A(e,{responseType:"image"}).then(n=>{const r=n.data,a=r.naturalWidth,s=r.naturalHeight,c=document.createElement("canvas");c.width=a,c.height=s;const i=c.getContext("2d");i.fillStyle=t,i.fillRect(0,0,a,s),i.globalCompositeOperation="destination-in",i.drawImage(r,0,0);const f=c.toDataURL();return d.put(o,f),f})}function x(e){if(!e)return null;let t=null;switch(e.type){case L:case $:case E:t=x(e.outline);break;case U:{const o=u(e.width);e.style!=null&&e.style!=="none"&&o!==0&&(t={color:e.color,style:B(e.style),width:o,cap:e.cap,join:e.join==="miter"?u(e.miterLimit):e.join});break}default:t=null}return t}const B=(()=>{const e={};return t=>{if(e[t])return e[t];const o=t.replaceAll("-","");return e[t]=o,o}})(),he=new l([128,128,128]),Q=new l("white");function q(e){var o,n;const t=(o=e.symbolLayers)==null?void 0:o.at(-1);if(t&&"outline"in t)return(n=t==null?void 0:t.outline)==null?void 0:n.size}function pe(e){var t;if(!e)return 0;if(h(e)){const o=q(e);return o??0}return X((t=x(e))==null?void 0:t.width)}function be(e){if(e==null||!("symbolLayers"in e)||e.symbolLayers==null)return!1;switch(e.type){case"point-3d":return e.symbolLayers.some(t=>t.type==="object");case"line-3d":return e.symbolLayers.some(t=>t.type==="path");case"polygon-3d":return e.symbolLayers.some(t=>t.type==="object"||t.type==="extrude");default:return!1}}function de(e){var t;return((t=e.resource)==null?void 0:t.href)??""}function ke(e,t){if(!e)return null;let o=null;return h(e)?o=K(e):b(e)&&(o=e.type==="cim"?S(e):e.color?new l(e.color):null),o?y(o,t):null}function K(e){const t=e.symbolLayers;if(!t)return null;let o=null;return t.forEach(n=>{var r;n.type==="object"&&((r=n.resource)!=null&&r.href)||(o=n.type==="water"?n.color:n.material?n.material.color:null)}),o?new l(o):null}function y(e,t){if(t==null||e==null)return e;const o=e.toRgba();return o[3]=o[3]*t,new l(o)}function Z(e,t,o){const n=e.symbolLayers;if(!n)return;const r=a=>y(t=t??a??(o!=null?Q:null),o);n.forEach(a=>{var s,c;if(a.type!=="object"||!((s=a.resource)!=null&&s.href)||t)if(a.type==="water")a.color=r(a.color);else{const i=a.material!=null?a.material.color:null,f=r(i);a.material==null?a.material=new W({color:f}):a.material.color=f,o!=null&&"outline"in a&&((c=a.outline)==null?void 0:c.color)!=null&&(a.outline.color=y(a.outline.color,o))}})}function ee(e,t,o){var n;(t=t??e.color)&&(e.color=y(t,o)),o!=null&&"outline"in e&&((n=e.outline)!=null&&n.color)&&(e.outline.color=y(e.outline.color,o))}function Me(e,t,o){e&&(t||o!=null)&&(t&&(t=new l(t)),h(e)?Z(e,t,o):b(e)&&ee(e,t,o))}async function te(e,t){const o=e.symbolLayers;o&&await j(o,async n=>oe(n,t))}async function oe(e,t){switch(e.type){case"extrude":re(e,t);break;case"icon":case"line":case"text":ne(e,t);break;case"path":se(e,t);break;case"object":await ae(e,t)}}function ne(e,t){const o=T(t);o!=null&&(e.size=o)}function T(e){for(const t of e)if(typeof t=="number")return t;return null}function re(e,t){e.size=typeof t[2]=="number"?t[2]:0}async function ae(e,t){const{resourceSize:o,symbolSize:n}=await ie(e),r=z(t,o,n);e.width=m(t[0],n[0],o[0],r),e.depth=m(t[1],n[1],o[1],r),e.height=m(t[2],n[2],o[2],r)}function se(e,t){const o=z(t,Y,[e.width,void 0,e.height]);e.width=m(t[0],e.width,1,o),e.height=m(t[2],e.height,1,o)}function z(e,t,o){for(let n=0;n<3;n++){const r=e[n];switch(r){case"symbol-value":{const a=o[n];return a!=null?a/t[n]:1}case"proportional":break;default:if(r&&t[n])return r/t[n]}}return 1}async function ie(e){const{computeObjectLayerResourceSize:t}=await R(()=>import("./symbolLayerUtils-D3uoZHua.js"),__vite__mapDeps([0,1,2]),import.meta.url),o=await t(e,10),{width:n,height:r,depth:a}=e,s=[n,a,r];let c=1;for(let i=0;i<3;i++){const f=s[i];if(f!=null){c=f/o[i];break}}for(let i=0;i<3;i++)s[i]==null&&(s[i]=o[i]*c);return{resourceSize:o,symbolSize:s}}function m(e,t,o,n){switch(e){case"proportional":return o*n;case"symbol-value":return t??o;default:return e}}function ce(e,t){const o=T(t);if(o!=null)switch(e.type){case"simple-marker":e.size=o;break;case"picture-marker":{const n=e.width/e.height;n>1?(e.width=o,e.height=o*n):(e.width=o*n,e.height=o);break}case"simple-line":e.width=o;break;case"text":e.font.size=o}}async function ge(e,t){if(e&&t)return h(e)?te(e,t):void(b(e)&&ce(e,t))}function Ce(e,t,o){if(e&&t!=null)if(h(e)){const n=e.symbolLayers;n&&n.forEach(r=>{if(r&&r.type==="object")switch(o){case"tilt":r.tilt=t;break;case"roll":r.roll=t;break;default:r.heading=t}})}else b(e)&&(e.type!=="simple-marker"&&e.type!=="picture-marker"&&e.type!=="text"||(e.angle=t))}function Ie(e){if(!e)return null;const t=e.effects.filter(o=>o.type!=="bloom").map(o=>o.toJSON());return v(t)}async function we(e,t){return await e.fetchSymbol(t)||e.fetchCIMSymbol(t)}export{Ce as D,Ie as I,we as N,ge as R,ke as a,be as b,pe as c,B as d,ue as e,me as f,he as g,ye as h,Me as k,_ as m,de as p,x as y};