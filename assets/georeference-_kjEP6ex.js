import{iK as Lt,iL as et,iM as jt,iN as Bt,iO as f,d as Vt,gB as It,iP as b,iQ as Wt,ia as yt,bu as O,bt as Gt,bx as $t,f as m,bw as zt,j as mt,iR as Ht,iS as Ut,iT as qt,cA as Dt,hF as Yt,g as R,iU as Kt,bv as ht,cz as S,iV as Qt,iW as At,it as rt,iX as Xt,s as Pt,f5 as z,iY as nt,eP as ot,eO as at,iZ as Zt,cg as kt,i_ as Jt,b$ as te,c0 as ee,hD as U,i$ as Ft,j0 as it,j1 as re,cF as ne,aT as oe,j2 as ae,j3 as ie,gC as se,j4 as le}from"./index-_dU_iSbC.js";import{e as Tt}from"./mat3f64-sunSSgMR.js";import{e as E,o as I}from"./mat4f64-aoQZ5j3f.js";import{c as w}from"./spatialReferenceEllipsoidUtils-dkfihcCi.js";import{m as ce,t as st,o as ue}from"./MeshLocalVertexSpace-w26wjwI_.js";import{m as fe}from"./MeshGeoreferencedRelativeVertexSpace-1j_eq_gj.js";import{v as K,y as pe,x as ge}from"./quat-bb4kwpgF.js";import{e as k}from"./quatf64-5VCgza3C.js";import{n as d,s as Rt,r as v}from"./vec32-Gk328Kni.js";import{i as F,T}from"./BufferView-8b3C2tgD.js";function Mt(t,e,r){const n=Math.sin(t),o=Math.cos(t),a=Math.sin(e),s=Math.cos(e),i=r;return i[0]=-n,i[4]=-a*o,i[8]=s*o,i[12]=0,i[1]=o,i[5]=-a*n,i[9]=s*n,i[13]=0,i[2]=0,i[6]=s,i[10]=a,i[14]=0,i[3]=0,i[7]=0,i[11]=0,i[15]=1,i}function ye(t,e,r){return Mt(t,e,r),Lt(r,r),r}function H(t,e,r,n){if(t==null||n==null)return!1;const o=et(t,jt),a=et(n,Bt);if(o===a&&!lt(a)&&(o!==f.UNKNOWN||Vt(t,n)))return It(r,e),!0;if(lt(a)){const s=b[o][f.LON_LAT],i=b[f.LON_LAT][a];return s!=null&&i!=null&&(s(e,0,A,0),i(A,0,P,0),Mt(N*A[0],N*A[1],r),r[12]=P[0],r[13]=P[1],r[14]=P[2],!0)}if((a===f.WEB_MERCATOR||a===f.PLATE_CARREE)&&(o===f.WGS84||o===f.CGCS2000&&a===f.PLATE_CARREE||o===f.SPHERICAL_ECEF||o===f.WEB_MERCATOR)){const s=b[o][f.LON_LAT],i=b[f.LON_LAT][a];return s!=null&&i!=null&&(s(e,0,A,0),i(A,0,P,0),o===f.SPHERICAL_ECEF?ye(N*A[0],N*A[1],r):Wt(r),r[12]=P[0],r[13]=P[1],r[14]=P[2],!0)}return!1}function lt(t){return t===f.SPHERICAL_ECEF||t===f.SPHERICAL_MARS_PCPF||t===f.SPHERICAL_MOON_PCPF}const N=yt(1),A=O(),P=O();let W=class extends Gt($t){constructor(){super({}),this.type="georeferenced",this.isRelative=!1,this.isGeoreferenced=!0}};m([zt({georeferenced:"georeferenced"},{readOnly:!0})],W.prototype,"type",void 0),W=m([mt("esri.geometry.support.MeshGeoreferencedVertexSpace")],W);const $e=W;function _(t=_t){return[t[0],t[1],t[2],t[3]]}function G(t,e,r=_()){return Dt(r,t),r[3]=e,r}function ct(t,e,r=_()){return K(L,t,Q(t)),K(ut,e,Q(e)),pe(L,ut,L),he(r,Yt(ge(r,L)))}function Ze(t,e,r,n=_()){return G(Ht,t,j),G(Ut,e,ft),G(qt,r,pt),ct(j,ft,j),ct(j,pt,n),n}function ke(t){return t}function me(t){return t[3]}function Q(t){return yt(t[3])}function he(t,e){return t[3]=e,t}const _t=[0,0,1,0],L=k(),ut=k();_();const j=_(),ft=_(),pt=_();var X;let $=X=class extends $t{constructor(t){super(t),this.translation=O(),this.rotationAxis=Kt(_t),this.rotationAngle=0,this.scale=ht(1,1,1)}get rotation(){return G(this.rotationAxis,this.rotationAngle)}set rotation(t){this.rotationAxis=S(t),this.rotationAngle=me(t)}get localMatrix(){const t=E();return K(gt,this.rotation,Q(this.rotation)),Qt(t,gt,this.translation,this.scale),t}get localMatrixInverse(){return At(E(),this.localMatrix)}applyLocal(t,e){return rt(e,t,this.localMatrix)}applyLocalInverse(t,e){return rt(e,t,this.localMatrixInverse)}equals(t){return this===t||t!=null&&Xt(this.localMatrix,t.localMatrix)}clone(){const t={translation:S(this.translation),rotationAxis:S(this.rotationAxis),rotationAngle:this.rotationAngle,scale:S(this.scale)};return new X(t)}};m([R({type:[Number],nonNullable:!0,json:{write:!0}})],$.prototype,"translation",void 0),m([R({type:[Number],nonNullable:!0,json:{write:!0}})],$.prototype,"rotationAxis",void 0),m([R({type:Number,nonNullable:!0,json:{write:!0}})],$.prototype,"rotationAngle",void 0),m([R({type:[Number],nonNullable:!0,json:{write:!0}})],$.prototype,"scale",void 0),m([R()],$.prototype,"rotation",null),m([R()],$.prototype,"localMatrix",null),m([R()],$.prototype,"localMatrixInverse",null),$=X=m([mt("esri.geometry.support.MeshTransform")],$);const gt=k(),Ae=$;function dt(t,e){return t.isGeographic||t.isWebMercator&&((e==null?void 0:e.geographic)??!0)}function Je(t,e,r){const n=!t.isGeoreferenced;(r==null?void 0:r.geographic)!=null&&r.geographic!==n&&Pt.getLogger(e).warnOnce(`Specifying the 'geographic' parameter (${r.geographic}) for a Mesh vertex space of type "${t.type}" is not supported. This parameter will be ignored.`)}const q=Pt.getLogger("esri.geometry.support.meshUtils.normalProjection");function Pe(t,e,r,n,o){return Y(n)?(D(h.TO_PCPF,F.fromTypedArray(t),T.fromTypedArray(e),T.fromTypedArray(r),n,F.fromTypedArray(o)),o):(q.error("Cannot convert spatial reference to PCPF"),o)}function Fe(t,e,r,n,o){return Y(n)?(D(h.FROM_PCPF,F.fromTypedArray(t),T.fromTypedArray(e),T.fromTypedArray(r),n,F.fromTypedArray(o)),o):(q.error("Cannot convert to spatial reference from PCPF"),o)}function Te(t,e,r){return z(t,e,0,r,w(e),0,t.length/3),r}function Re(t,e,r){return z(t,w(r),0,e,r,0,t.length/3),e}function Me(t,e,r){return U(u,r),d(e,t,u),Ft(u)||Rt(e,e),e}function _e(t,e,r){if(U(u,r),d(e,t,u,4),Ft(u)||Rt(e,e,4),t!==e)for(let n=3;n<t.length;n+=4)e[n]=t[n];return e}function de(t,e,r,n,o){if(!Y(n))return q.error("Cannot convert spatial reference to PCPF"),o;D(h.TO_PCPF,F.fromTypedArray(t,4*Float32Array.BYTES_PER_ELEMENT),T.fromTypedArray(e),T.fromTypedArray(r),n,F.fromTypedArray(o,4*Float32Array.BYTES_PER_ELEMENT));for(let a=3;a<t.length;a+=4)o[a]=t[a];return o}function Ce(t,e,r,n,o){if(!Y(n))return q.error("Cannot convert to spatial reference from PCPF"),o;D(h.FROM_PCPF,F.fromTypedArray(t,16),T.fromTypedArray(e),T.fromTypedArray(r),n,F.fromTypedArray(o,16));for(let a=3;a<t.length;a+=4)o[a]=t[a];return o}function D(t,e,r,n,o,a){if(!e)return;const s=r.count,i=w(o);if(Ct(o))for(let c=0;c<s;c++)n.getVec(c,B),e.getVec(c,y),H(i,B,V,i),nt(u,V),t===h.FROM_PCPF&&ot(u,u),at(y,y,u),a.setVec(c,y);else for(let c=0;c<s;c++){n.getVec(c,B),e.getVec(c,y),H(i,B,V,i),nt(u,V);const l=Zt(r.get(c,1));let p=Math.cos(l);t===h.TO_PCPF&&(p=1/p),u[0]*=p,u[1]*=p,u[2]*=p,u[3]*=p,u[4]*=p,u[5]*=p,t===h.FROM_PCPF&&ot(u,u),at(y,y,u),kt(y,y),a.setVec(c,y)}return a}function Y(t){return Ct(t)||xe(t)}function Ct(t){return t.isWGS84||Jt(t)||te(t)||ee(t)}function xe(t){return t.isWebMercator}var h;(function(t){t[t.TO_PCPF=0]="TO_PCPF",t[t.FROM_PCPF=1]="FROM_PCPF"})(h||(h={}));const B=O(),y=O(),V=E(),u=Tt();function J(t,e,r){return dt(e.spatialReference,r)?be(t,e,r):we(t,e,r)}function xt(t,e=I){const{position:r,normal:n,tangent:o}=t;return{position:v(new Float64Array(r.length),r,e),normal:n!=null?Me(n,new Float32Array(n.length),e):null,tangent:o!=null?_e(o,new Float32Array(o.length),e):null}}function Et(t,e,r,n){const{position:o,normal:a,tangent:s}=t;return e.isRelative?J(xt(t,r==null?void 0:r.localMatrix),e.getOriginPoint(n),{geographic:!e.isGeoreferenced}):{position:o,normal:a,tangent:s}}function Ee(t,e,r){if(r!=null&&r.useTransform){const{position:n,normal:o,tangent:a}=t,{x:s,y:i,z:c}=e,l=ht(s,i,c??0);return{vertexAttributes:{position:n,normal:o,tangent:a},vertexSpace:r.geographic??1?new ce({origin:l}):new fe({origin:l}),transform:new Ae}}return{vertexAttributes:J(t,e,r),vertexSpace:new $e,transform:null}}function Z(t,e,r){return dt(e.spatialReference,r)?je(t,e,r):vt(t,e,r)}function ve(t,e,r,n,o){if(!e.isRelative)return Z(t,n,o);const{spatialReference:a}=n,s=Et(t,e,r,a);return n.equals(e.getOriginPoint(a))?vt(s,n,o):Z(s,n,o)}function Oe({positions:t,transform:e,vertexSpace:r,inSpatialReference:n,outSpatialReference:o,outPositions:a,localMode:s}){const i=r.isRelative?r.origin:it,c=r.isRelative?(e==null?void 0:e.localMatrix)??I:I;if(r.isGeoreferenced){const g=a??st(t.length);if(re(c,I)?ue(g,t):v(g,t,c),!ne(i,it)){const[bt,St,Nt]=i;for(let x=0;x<g.length;x+=3)g[x]+=bt,g[x+1]+=St,g[x+2]+=Nt}return z(g,n,0,g,o,0,g.length/3),g}let l=n;const p=w(n);l=o.isWebMercator&&s||!oe(n,p)?l:p,H(n,i,M,l),ae(M,M,c);const C=a??st(t.length);return v(C,t,M),z(C,l,0,C,o,0,C.length/3),C}function we(t,e,r){const n=new Float64Array(t.position.length),o=t.position,a=e.x,s=e.y,i=e.z??0,c=tt(r?r.unit:null,e.spatialReference);for(let l=0;l<o.length;l+=3)n[l]=o[l]*c+a,n[l+1]=o[l+1]*c+s,n[l+2]=o[l+2]*c+i;return{position:n,normal:t.normal,tangent:t.tangent}}function be(t,e,r){const n=e.spatialReference,o=Ot(e,r,M),a=new Float64Array(t.position.length),s=Se(t.position,o,n,a),i=U(wt,o);return{position:s,normal:Ne(s,a,t.normal,i,n),tangent:Le(s,a,t.tangent,i,n)}}function Se(t,e,r,n){v(n,t,e);const o=new Float64Array(t.length);return Re(n,o,r)}function Ne(t,e,r,n,o){if(r==null)return null;const a=new Float32Array(r.length);return d(a,r,n),Fe(a,t,e,o,a),a}function Le(t,e,r,n,o){if(r==null)return null;const a=new Float32Array(r.length);d(a,r,n,4);for(let s=3;s<a.length;s+=4)a[s]=r[s];return Ce(a,t,e,o,a),a}function vt(t,e,r){const n=new Float64Array(t.position.length),o=t.position,a=e.x,s=e.y,i=e.z??0,c=tt(r?r.unit:null,e.spatialReference);for(let l=0;l<o.length;l+=3)n[l]=(o[l]-a)/c,n[l+1]=(o[l+1]-s)/c,n[l+2]=(o[l+2]-i)/c;return{position:n,normal:t.normal,tangent:t.tangent}}function je(t,e,r){const n=e.spatialReference;Ot(e,r,M);const o=At(We,M),a=new Float64Array(t.position.length),s=Be(t.position,n,o,a),i=U(wt,o);return{position:s,normal:Ve(t.normal,t.position,a,n,i),tangent:Ie(t.tangent,t.position,a,n,i)}}function Ot(t,e,r){H(t.spatialReference,[t.x,t.y,t.z??0],r,w(t.spatialReference));const n=tt(e?e.unit:null,t.spatialReference);return ie(r,r,[n,n,n]),r}function Be(t,e,r,n){const o=Te(t,e,n),a=new Float64Array(o.length);return v(a,o,r),a}function Ve(t,e,r,n,o){if(t==null)return null;const a=Pe(t,e,r,n,new Float32Array(t.length));return d(a,a,o),a}function Ie(t,e,r,n,o){if(t==null)return null;const a=de(t,e,r,n,new Float32Array(t.length));return d(a,a,o,4),a}function tt(t,e){if(t==null)return 1;const r=se(e);return 1/le(r,"meters",t)}const M=E(),We=E(),wt=Tt(),tr=Object.freeze(Object.defineProperty({__proto__:null,applyTransform:xt,georeference:J,georeferenceApplyTransform:Et,georeferenceByTransform:Ee,project:Oe,ungeoreference:Z,ungeoreferenceByTransform:ve},Symbol.toStringTag,{value:"Module"}));export{Ee as B,Z as D,ve as E,Oe as I,H as L,Ae as N,Re as O,de as R,J as U,xt as V,Fe as _,_ as a,ct as b,tr as c,Ze as g,Te as h,Pe as j,ke as l,Je as o,$e as p,Et as q,dt as r,Ce as v,Q as w};