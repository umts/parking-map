import{s as w,eh as g,ei as h,ej as v,Y as f,ek as y,aK as b,aP as x,aO as $,cz as E,el as F,em as j}from"./index-BMJZ-YmQ.js";const d=w.getLogger("esri.layers.support.labelFormatUtils"),p={type:"simple",evaluate:()=>null},A={getAttribute:(r,t)=>r.field(t)};async function V(r,t,c){if(!r||!r.symbol||!t)return p;const l=r.where,o=g(r);let a;if(o.type==="arcade"){const e=await h(o.expression,c,t);if(e==null)return p;a={type:"arcade",evaluate(u,n){try{const s="attributes"in u?e.repurposeFeature(u):u;s.contextTimeZone=n??null;const i=e.evaluate({$view:{timeZone:n},$feature:s},e.services);if(i!=null)return i.toString()}catch(s){d.error(new f("arcade-expression-error","Encountered an error when evaluating label expression for feature",{error:s,feature:u,expression:o}))}return null},needsHydrationToEvaluate:()=>j(o.expression)==null}}else a={type:"simple",evaluate:e=>o.expression.replaceAll(/{[^}]*}/g,u=>{const n=u.slice(1,-1),s=t.get(n);if(!s)return u;let i=null;return"attributes"in e?e&&e.attributes&&(i=e.attributes[s.name]):i=e.field(s.name),i==null?"":L(i,s)})};if(l){let e;try{e=await v(l,t)}catch(n){return d.error(new f("bad-where-clause","Encountered an error when evaluating where clause, ignoring",{where:l,error:n})),p}const u=a.evaluate;a.evaluate=(n,s)=>{const i="attributes"in n?void 0:A;try{if(e.testFeature(n,i))return u(n,s)}catch(m){d.error(new f("bad-where-clause","Encountered an error when evaluating where clause for feature",{where:l,feature:n,error:m}))}return null}}return a}function L(r,t){if(r==null)return"";const c=t.domain;if(c){if(c.type==="codedValue"||c.type==="coded-value"){const o=r;for(const a of c.codedValues)if(a.code===o)return a.name}else if(c.type==="range"){const{max:o,min:a}=y(t),e=+r;if(a!=null&&o!=null&&a<=e&&e<=o)return c.name}}let l=r;return b(t)?l=x(l,$("short-date")):E(t)&&(l=F(+l)),l||""}export{V as createLabelFunction,L as formatField};