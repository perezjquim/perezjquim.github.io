sap.ui.define(["sap/ui/core/UIComponent","sap/ui/Device"],function(t,e){"use strict";return t.extend("com.perezjquim.showcase.custom_tiles.social_tile.Component",{metadata:{manifest:"json"},init:function(){t.prototype.init.apply(this,arguments);const e=this.getModel("config");const i=this.getComponentData();e.setData(i&&i.properties)}})});