import{gs as ee,k as A,P as $,ev as I,gt as te,gu as se,s as X,Q as re,q as L,gv as T,eQ as ie,gw as ne,eu as ae,ew as oe,ex as le,H as he,ey as me,ez as ce,eA as pe,eB as de,X as ue,gx as fe,V as ye,z as U,y as _e,a as ge,gy as ve,b as we,az as xe,gz as Re,f as G,g as W,j as $e,W as Te,gA as Me}from"./index-_dU_iSbC.js";import{j as be,i as Q}from"./perspectiveUtils-m-IqfARf.js";import{i as Ve}from"./Container-_QA7nuyl.js";import"./BufferPool-GfU65DXC.js";import{T as Ee}from"./color-MoG5E2oX.js";import{n as Ce,w as Se}from"./WGLContainer-3x8Q4cnm.js";import{D as qe,F as k}from"./enums-8pc8f5Ge.js";import{e as Ae,T as B}from"./Texture-qs2mP2n9.js";import{f as Ge}from"./ProgramTemplate-Ltda-mNV.js";import"./definitions-9tXFrCdu.js";import"./GeometryUtils-D_QpbI_S.js";import{h as F}from"./FramebufferObject-RCeL4O_T.js";import"./StyleDefinition-ohiNeWtS.js";import"./enums-W_WZ2jKy.js";import{l as Pe}from"./MagnifierPrograms-r_qeWXXS.js";import"./OrderIndependentTransparency-JGZ_PxZN.js";import"./floatRGBA-wSML2Jow.js";import"./testSVGPremultipliedAlpha-v1e9yagD.js";import"./GraphicsView2D-dVCNvSxW.js";import"./AttributeStoreView-8FlCXQIn.js";import"./earcut-x1fbMz4s.js";import"./featureConversionUtils-YwOEkXDp.js";import{r as De}from"./vec3f32-6rWBPTzX.js";import{e as Oe}from"./mat3f64-sunSSgMR.js";import{d as P}from"./enums--FbEXJ87.js";import{m as He,u as je}from"./LayerView-B-kwmaoA.js";import"./normalizeUtilsSync-seZmd-S0.js";import"./VertexElementDescriptor-0hGjloLE.js";import"./config-z2KFXUcx.js";import"./OptimizedGeometry-1RFAES06.js";import"./ExpandedCIM-EqtATKhk.js";import"./BidiEngine-8z8MVveq.js";import"./visualVariablesUtils-L5SycTO1.js";import"./GeometryUtils-CEMOhUyj.js";import"./utils-WSVhIa5b.js";import"./Rect-pT1ASav_.js";import"./quantizationUtils-adEHf9y5.js";import"./rasterizingUtils-WU1b0uDl.js";import"./pbf-VcPVuOP3.js";import"./imageutils-UMC0OnPa.js";import"./Matcher-qLucttOY.js";import"./tileUtils-pcBJnprf.js";import"./TurboLine-tb6RCzsH.js";import"./CircularArray-1_thnT0U.js";import"./throttle-SZpAiZ7F.js";import"./ComputedAttributeStorage-B-ne3mtc.js";import"./TimeOnly-GUFt9a4u.js";import"./basicInterfaces-IwaMq8O_.js";import"./projectionSupport-PDoH8Bht.js";import"./json-v6EOeNTY.js";import"./TiledDisplayObject-MhfQaoyZ.js";import"./util-pvwubzOV.js";import"./OptimizedFeatureSet-smVI1ez9.js";const y=Oe(),ze={none:P.None,loop:P.Loop,oscillate:P.Oscillate};function Ie(s){return s?{...s,playAnimation:s.playing,repeatType:s.repeatType?ze[s.repeatType]:void 0}:{}}let Le=class extends Ve{constructor(e){super(),this.elementView=e,this.isWrapAround=!1,this.perspectiveTransform=ee(),this._playHandle=null,this._vertices=new Float32Array(20),this._handles=[],this._handles.push(A(()=>this.elementView.element.opacity,t=>this.opacity=t,$),A(()=>[this.elementView.coords],()=>{this.requestRender()},$),A(()=>["animationOptions"in this.elementView.element&&this.elementView.element.animationOptions],()=>{var t;(t=this._playHandle)==null||t.remove(),this.texture=I(this.texture),this.requestRender()},$),te(()=>this.elementView.element.loaded,()=>{const t=this.elementView.element;this.ready(),t.type==="video"&&t.content!=null&&this._handles.push(se(t.content,"play",()=>this.requestRender()))},$)),e.element.load().catch(t=>{X.getLogger("esri.views.2d.layers.MediaLayerView2D").error(new re("element-load-error","Element cannot be displayed",{element:e,error:t}))})}destroy(){var e;(e=this._playHandle)==null||e.remove(),this._handles.forEach(t=>t.remove()),this.texture=I(this.texture)}get dvsMat3(){return this.parent.dvsMat3}beforeRender(e){const{context:t}=e,r=this.elementView.element.content;if(r!=null){const i=r instanceof HTMLImageElement,n=r instanceof HTMLVideoElement,l=i?r.naturalWidth:n?r.videoWidth:r.width,a=i?r.naturalHeight:n?r.videoHeight:r.height;if(this._updatePerspectiveTransform(l,a),this.texture)n&&!r.paused&&(this.texture.setData(r),this.requestRender(),(t.type===L.WEBGL2||T(l)&&T(a))&&this.texture.generateMipmap());else{const m=new Ae;if(m.wrapMode=qe.CLAMP_TO_EDGE,m.preMultiplyAlpha=!0,m.width=l,m.height=a,"getFrame"in r){const h=o=>{this.texture?this.texture.setData(o):this.texture=new B(t,m,o),this.requestRender()};"animationOptions"in this.elementView.element&&(this._playHandle=Pe(r,Ie(this.elementView.element.animationOptions),null,h))}else this.texture=new B(t,m,r);(t.type===L.WEBGL2||T(l)&&T(a))&&this.texture.generateMipmap(),n&&!r.paused&&this.requestRender()}}super.beforeRender(e)}_createTransforms(){return null}updateDrawCoords(e,t){const r=this.elementView.coords;if(r==null)return;const[i,n,l,a]=r.rings[0],m=this._vertices,{x:h,y:o}=e,d=t!==0;d?m.set([n[0]-h,n[1]-o,i[0]-h,i[1]-o,l[0]-h,l[1]-o,a[0]-h,a[1]-o,a[0]-h,a[1]-o,n[0]+t-h,n[1]-o,n[0]+t-h,n[1]-o,i[0]+t-h,i[1]-o,l[0]+t-h,l[1]-o,a[0]+t-h,a[1]-o]):m.set([n[0]-h,n[1]-o,i[0]-h,i[1]-o,l[0]-h,l[1]-o,a[0]-h,a[1]-o]),this.isWrapAround=d}getVAO(e,t,r){if(this.elementView.coords==null)return null;const i=this._vertices;if(this._vao)this._geometryVbo.setData(i);else{this._geometryVbo=F.createVertex(e,k.DYNAMIC_DRAW,i);const n=F.createVertex(e,k.STATIC_DRAW,new Uint16Array([0,0,0,1,1,0,1,1,1,1,0,0,0,0,0,1,1,0,1,1]));this._vao=new Ge(e,r,t,{geometry:this._geometryVbo,tex:n})}return this._vao}_updatePerspectiveTransform(e,t){const r=this._vertices;be(y,[0,0,e,0,0,t,e,t],[r[0],r[1],r[4],r[5],r[2],r[3],r[6],r[7]]),ie(this.perspectiveTransform,y[6]/y[8]*e,y[7]/y[8]*t)}};class Ue extends Ce{constructor(){super(...arguments),this._localOrigin=ne(0,0),this._viewStateId=-1,this._dvsMat3=ae()}get dvsMat3(){return this._dvsMat3}beforeRender(e){this._updateMatrices(e),this._updateOverlays(e,this.children);for(const t of this.children)t.beforeRender(e)}prepareRenderPasses(e){const t=e.registerRenderPass({name:"overlay",brushes:[Se.overlay],target:()=>this.children,drawPhase:Ee.MAP});return[...super.prepareRenderPasses(e),t]}_updateMatrices(e){const{state:t}=e,{id:r,size:i,pixelRatio:n,resolution:l,rotation:a,viewpoint:m,displayMat3:h}=t;if(this._viewStateId===r)return;const o=Math.PI/180*a,d=n*i[0],f=n*i[1],{x:M,y:v}=m.targetGeometry,b=oe(M,t.spatialReference);this._localOrigin.x=b,this._localOrigin.y=v;const V=l*d,w=l*f,c=le(this._dvsMat3);he(c,c,h),me(c,c,ce(d/2,f/2)),pe(c,c,De(d/V,-f/w,1)),de(c,c,-o),this._viewStateId=r}_updateOverlays(e,t){const{state:r}=e,{rotation:i,spatialReference:n,worldScreenWidth:l,size:a,viewpoint:m}=r,h=this._localOrigin;let o=0;const d=ue(n);if(d&&n.isWrappable){const f=a[0],M=a[1],v=180/Math.PI*i,b=Math.abs(Math.cos(v)),V=Math.abs(Math.sin(v)),w=Math.round(f*b+M*V),[c,E]=d.valid,u=fe(n),{x:D,y:Y}=m.targetGeometry,J=[D,Y],C=[0,0];r.toScreen(C,J);const x=[0,0];let S;S=w>l?.5*l:.5*w;const O=Math.floor((D+.5*u)/u),K=c+O*u,Z=E+O*u,q=[C[0]+S,0];r.toMap(x,q),x[0]>Z&&(o=u),q[0]=C[0]-S,r.toMap(x,q),x[0]<K&&(o=-u);for(const R of t){const H=R.elementView.bounds;if(H==null)continue;const[j,,z]=H;j<c&&z>c?R.updateDrawCoords(h,u):z>E&&j<E?R.updateDrawCoords(h,-u):R.updateDrawCoords(h,o)}}else for(const f of t)f.updateDrawCoords(h,o)}}let g=class extends He(je){constructor(){super(...arguments),this._overlayContainer=null,this._fetchQueue=null,this._tileStrategy=null,this._elementReferences=new Map,this._debugGraphicsView=null,this.layer=null,this.elements=new ye}attach(){this.addAttachHandles([U(()=>this.layer.effectiveSource,"refresh",()=>{this._tileStrategy.refresh(s=>this._updateTile(s)),this.requestUpdate()}),U(()=>this.layer.effectiveSource,"change",({element:s})=>this._elementUpdateHandler(s))]),this._overlayContainer=new Ue,this.container.addChild(this._overlayContainer),this._fetchQueue=new _e({tileInfoView:this.view.featuresTilingScheme,concurrency:10,process:(s,e)=>this._queryElements(s,e)}),this._tileStrategy=new ge({cachePolicy:"purge",resampling:!0,acquireTile:s=>this._acquireTile(s),releaseTile:s=>this._releaseTile(s),tileInfoView:this.view.featuresTilingScheme}),this.requestUpdate()}detach(){var s;this.elements.removeAll(),this._tileStrategy.destroy(),this._fetchQueue.destroy(),this._overlayContainer.removeAllChildren(),this.container.removeAllChildren(),this._elementReferences.clear(),(s=this._debugGraphicsView)==null||s.destroy()}supportsSpatialReference(s){return!0}moveStart(){this.requestUpdate()}viewChange(){this.requestUpdate()}moveEnd(){this.requestUpdate()}update(s){var e;this._tileStrategy.update(s),(e=this._debugGraphicsView)==null||e.update(s)}async hitTest(s,e){const t=[],r=s.normalize(),i=[r.x,r.y];for(const{projectedElement:{normalizedCoords:n,element:l}}of this._elementReferences.values())n!=null&&ve(n.rings,i)&&t.push({type:"media",element:l,layer:this.layer,mapPoint:s,sourcePoint:l.toSource(s)});return t.reverse()}canResume(){return this.layer.source!=null&&super.canResume()}async doRefresh(){this._fetchQueue.reset(),this._tileStrategy.refresh(s=>this._updateTile(s))}_acquireTile(s){const e=new We(s.clone());return this._updateTile(e),e}_updateTile(s){this._updatingHandles.addPromise(this._fetchQueue.push(s.key).then(e=>{const[t,r]=s.setElements(e);this._referenceElements(s,t),this._dereferenceElements(s,r),this.requestUpdate()},e=>{we(e)||X.getLogger(this).error(e)}))}_releaseTile(s){this._fetchQueue.abort(s.key.id),s.elements&&this._dereferenceElements(s,s.elements),this.requestUpdate()}async _queryElements(s,e){const t=this.layer.effectiveSource;if(t==null)return[];this.view.featuresTilingScheme.getTileBounds(p,s,!0);const r=new xe({xmin:p[0],ymin:p[1],xmax:p[2],ymax:p[3],spatialReference:this.view.spatialReference});return t.queryElements(r,e)}_referenceElements(s,e){if(this.layer.source!=null)for(const t of e)this._referenceElement(s,t)}_referenceElement(s,e){Re(this._elementReferences,e.uid,()=>{const t=new Q({element:e,spatialReference:this.view.spatialReference}),r=new Le(t);return this._overlayContainer.addChild(r),this.elements.add(e),{tiles:new Set,projectedElement:t,overlay:r,debugGraphic:null}}).tiles.add(s)}_dereferenceElements(s,e){for(const t of e)this._dereferenceElement(s,t)}_dereferenceElement(s,e){var r;const t=this._elementReferences.get(e.uid);t.tiles.delete(s),t.tiles.size||(this._overlayContainer.removeChild(t.overlay),t.overlay.destroy(),t.projectedElement.destroy(),this._elementReferences.delete(e.uid),this.elements.remove(e),(r=this._debugGraphicsView)==null||r.graphics.remove(t.debugGraphic))}_elementUpdateHandler(s){var r;let e=this._elementReferences.get(s.uid);if(e){const i=e.projectedElement.normalizedCoords;if(i==null)return this._overlayContainer.removeChild(e.overlay),e.overlay.destroy(),e.projectedElement.destroy(),this._elementReferences.delete(s.uid),this.elements.remove(s),void((r=this._debugGraphicsView)==null?void 0:r.graphics.remove(e.debugGraphic));const n=[],l=[];for(const a of this._tileStrategy.tiles){const m=N(this.view.featuresTilingScheme,a,i);e.tiles.has(a)?m||l.push(a):m&&n.push(a)}for(const a of n)this._referenceElement(a,s);for(const a of l)this._dereferenceElement(a,s);return e=this._elementReferences.get(s.uid),void((e==null?void 0:e.debugGraphic)&&(e.debugGraphic.geometry=e.projectedElement.normalizedCoords,this._debugGraphicsView.graphicUpdateHandler({graphic:e.debugGraphic,property:"geometry"})))}const t=new Q({element:s,spatialReference:this.view.spatialReference}).normalizedCoords;if(t!=null)for(const i of this._tileStrategy.tiles)N(this.view.featuresTilingScheme,i,t)&&this._referenceElement(i,s)}};G([W()],g.prototype,"layer",void 0),G([W({readOnly:!0})],g.prototype,"elements",void 0),g=G([$e("esri.views.2d.layers.MediaLayerView2D")],g);const p=Te(),_={xmin:0,ymin:0,xmax:0,ymax:0};function N(s,e,t){return s.getTileBounds(p,e.key,!0),_.xmin=p[0],_.ymin=p[1],_.xmax=p[2],_.ymax=p[3],Me(_,t)}class We{constructor(e){this.key=e,this.elements=null,this.isReady=!1,this.visible=!0}setElements(e){const t=[],r=new Set(this.elements);this.elements=e;for(const i of e)r.has(i)?r.delete(i):t.push(i);return this.isReady=!0,[t,Array.from(r)]}destroy(){}}const Qt=g;export{Qt as default};