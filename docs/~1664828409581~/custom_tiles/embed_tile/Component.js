sap.ui.define(["sap/ui/core/UIComponent","sap/ui/Device"],function(t,e){"use strict";return t.extend("com.perezjquim.showcase.custom_tiles.embed_tile.Component",{metadata:{manifest:"json"},init:function(){t.prototype.init.apply(this,arguments);const e=this.getModel("config");const i=this.getComponentData();e.setData(i&&i.properties)},onAfterRendering:function(){this._hideOuterTile()},_hideOuterTile:function(){const t=this.oContainer;const e=t.getParent();e.addStyleClass("z_outer_tile")}})});