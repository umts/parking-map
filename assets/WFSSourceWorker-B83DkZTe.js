import{Y as m,bu as y,cr as g,aS as _,cv as d,j as F,s as w,f as S}from"./index-BMJZ-YmQ.js";import{r as E,s as q}from"./featureConversionUtils-CnqKp2uY.js";import{m as x}from"./FeatureStore-BPDzqreW.js";import{x as T,j as R}from"./projectionSupport-Cj-TY8D6.js";import{W as I}from"./QueryEngine-383yeBys.js";import{E as b,N as j}from"./geojson-yiKHyuLf.js";import{p as C}from"./sourceUtils-C-SxvCcN.js";import{a as k,B as P}from"./wfsUtils-D_n8atyq.js";import"./OptimizedFeature-CtWGeB6U.js";import"./OptimizedFeatureSet-Blu9Ckm7.js";import"./OptimizedGeometry-CDs4YGAj.js";import"./BoundsStore-DfKx3n5n.js";import"./PooledRBush-Bbx3LMrL.js";import"./timeSupport-DFhf0QR5.js";import"./json-Wa8cmqdu.js";import"./WhereClause-_u-fjGWV.js";import"./TimeOnly-4SU57PR9.js";import"./QueryEngineCapabilities-CTDe3LlQ.js";import"./quantizationUtils-BjrihBQP.js";import"./utils-C7vs_htw.js";import"./utils-CnWENqDr.js";import"./generateRendererUtils-mZIois5-.js";import"./RenderState-DaVlEYWY.js";import"./date-M6n_RqpC.js";import"./xmlUtils-CtUoQO7q.js";class ie{constructor(){this._queryEngine=null,this._customParameters=null}destroy(){var e;(e=this._queryEngine)==null||e.destroy(),this._queryEngine=null}async load(e,t){const{getFeatureUrl:r,getFeatureOutputFormat:p,fields:o,geometryType:i,featureType:n,objectIdField:u,customParameters:a}=e,{spatialReference:s,getFeatureSpatialReference:h}=k(r,n,e.spatialReference);this._featureType=n,this._customParameters=a,this._getFeatureUrl=r,this._getFeatureOutputFormat=p,this._getFeatureSpatialReference=h;try{await T(h,s)}catch{throw new m("unsupported-projection","Projection not supported",{inSpatialReference:h,outSpatialReference:s})}y(t);const l=g.fromLayerJSON({fields:o,dateFieldsTimeReference:o.some(f=>f.type==="esriFieldTypeDate")?{timeZoneIANA:_}:null}),c=await this._snapshotFeatures({fieldsIndex:l,geometryType:i,objectIdField:u,spatialReference:s},t.signal);return this._queryEngine=new I({fieldsIndex:l,geometryType:i,hasM:!1,hasZ:!1,objectIdField:u,spatialReference:s,timeInfo:null,featureStore:new x({geometryType:i,hasM:!1,hasZ:!1})}),this._queryEngine.featureStore.addMany(c),{extent:(await this._queryEngine.fetchRecomputedExtents()).fullExtent}}async applyEdits(){throw new m("wfs-source:editing-not-supported","applyEdits() is not supported on WFSLayer")}async queryFeatures(e={},t={}){return await this._waitSnapshotComplete(),this._queryEngine.executeQuery(e,t.signal)}async queryFeatureCount(e={},t={}){return await this._waitSnapshotComplete(),this._queryEngine.executeQueryForCount(e,t.signal)}async queryObjectIds(e={},t={}){return await this._waitSnapshotComplete(),this._queryEngine.executeQueryForIds(e,t.signal)}async queryExtent(e={},t={}){return await this._waitSnapshotComplete(),this._queryEngine.executeQueryForExtent(e,t.signal)}async querySnapping(e,t={}){return await this._waitSnapshotComplete(),this._queryEngine.executeQueryForSnapping(e,t.signal)}async refresh(e){var t;return this._customParameters=e,(t=this._snapshotTask)==null||t.abort(),this._snapshotTask=d(r=>this._snapshotFeatures(this._queryEngine,r)),this._snapshotTask.promise.then(r=>{this._queryEngine.featureStore.clear(),r&&this._queryEngine.featureStore.addMany(r)},r=>{this._queryEngine.featureStore.clear(),F(r)||w.getLogger("esri.layers.WFSLayer").error(new m("wfs-layer:getfeature-error","An error occurred during the GetFeature request",{error:r}))}),await this._waitSnapshotComplete(),{extent:(await this._queryEngine.fetchRecomputedExtents()).fullExtent}}async _waitSnapshotComplete(){if(this._snapshotTask&&!this._snapshotTask.finished){try{await this._snapshotTask.promise}catch{}return this._waitSnapshotComplete()}}async _snapshotFeatures({objectIdField:e,geometryType:t,spatialReference:r,fieldsIndex:p},o){const i=await P(this._getFeatureUrl??"",this._featureType.typeName,this._getFeatureSpatialReference,this._getFeatureOutputFormat,{customParameters:this._customParameters,signal:o});b(i,this._getFeatureSpatialReference.wkid),y(o);const n=j(i,{geometryType:t,hasZ:!1,objectIdField:e});if(!S(r,this._getFeatureSpatialReference))for(const a of n)a.geometry!=null&&(a.geometry=E(R(q(a.geometry,t,!1,!1),this._getFeatureSpatialReference,r)));let u=1;for(const a of n){const s={};C(p,s,a.attributes,!0),a.attributes=s,s[e]==null&&(a.objectId=s[e]=u++)}return n}}export{ie as default};