import{bt as n,bu as a,av as p,bv as c,f as o,bw as g,g as l,j as y,bx as d}from"./index-_dU_iSbC.js";let r=class extends n(d){constructor(e){super(e),this.type="georeferenced-relative",this.isRelative=!0,this.isGeoreferenced=!0,this.origin=a()}getOriginPoint(e){const[t,i,s]=this.origin;return new p({x:t,y:i,z:s,spatialReference:e})}setOriginFromPoint({x:e,y:t,z:i}){this.origin=c(e,t,i??0)}};o([g({georeferencedRelative:"georeferenced-relative"},{readOnly:!0})],r.prototype,"type",void 0),o([l({type:[Number],nonNullable:!0,json:{write:!0}})],r.prototype,"origin",void 0),r=o([y("esri.geometry.support.MeshGeoreferencedRelativeVertexSpace")],r);const v=r;export{v as m};