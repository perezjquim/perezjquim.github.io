sap.ui.define([
	"sap/ui/core/UIComponent",
	"sap/ui/Device"
], function(UIComponent, Device) {
	"use strict";

	return UIComponent.extend("com.perezjquim.showcase.custom_tiles.social_tile.Component", {

		metadata: {
			manifest: "json"
		},

		init: function() {
			UIComponent.prototype.init.apply(this, arguments);

			const oConfigModel = this.getModel("config");
			const oComponentData = this.getComponentData();
			oConfigModel.setData(oComponentData && oComponentData.properties);			
		}

	});
});