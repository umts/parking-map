import{k as s,s as p,m as r,n as a,o as m}from"./index-7JBYUV_z.js";import{a as n}from"./BitmapContainer-gQFosoRo.js";import{m as h,u as d}from"./LayerView-y4Q2Jeie.js";import{v as c}from"./ExportStrategy-0JrCYHLv.js";import{a as u}from"./RefreshableLayerView-_-mkLGeQ.js";import"./WGLContainer-P4_IhvKo.js";import"./definitions-vrYdBLx4.js";import"./FramebufferObject-fcw81XF_.js";import"./Texture-RhoYH26K.js";import"./enums-8pc8f5Ge.js";import"./ProgramTemplate-xoZy-JHl.js";import"./VertexElementDescriptor-0hGjloLE.js";import"./color-SUQhQfy7.js";import"./enums--FbEXJ87.js";import"./number-sTjsTbdA.js";import"./GeometryUtils-oNvzB3pB.js";import"./alignmentUtils-XT3TYmYW.js";import"./StyleDefinition-ohiNeWtS.js";import"./config-z2KFXUcx.js";import"./Container-7WvEQJMV.js";import"./EffectView-Y3---ozF.js";import"./earcut-dTSpeKR3.js";import"./featureConversionUtils-6w9Gl5-w.js";import"./OptimizedFeature-5RGb7-P9.js";import"./OptimizedFeatureSet-smVI1ez9.js";import"./OptimizedGeometry-CbNXANBG.js";import"./Bitmap-ugIOYjbZ.js";let t=class extends u(h(d)){update(e){this._strategy.update(e).catch(i=>{s(i)||p.getLogger(this).error(i)}),this.notifyChange("updating")}attach(){this._bitmapContainer=new n,this.container.addChild(this._bitmapContainer),this._strategy=new c({container:this._bitmapContainer,fetchSource:this.fetchBitmapData.bind(this),requestUpdate:this.requestUpdate.bind(this)})}detach(){this._strategy.destroy(),this._strategy=null,this.container.removeChild(this._bitmapContainer),this._bitmapContainer.removeAllChildren()}moveStart(){}viewChange(){}moveEnd(){this.requestUpdate()}fetchBitmapData(e,i,o){return this.layer.fetchImageBitmap(e,i,o)}async doRefresh(){this.requestUpdate()}isUpdating(){return this._strategy.updating||this.updateRequested}};r([a()],t.prototype,"_strategy",void 0),r([a()],t.prototype,"updating",void 0),t=r([m("esri.views.2d.layers.BaseDynamicLayerView2D")],t);const H=t;export{H as default};