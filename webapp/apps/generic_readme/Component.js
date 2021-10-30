sap.ui.define([
	"sap/ui/core/UIComponent",
	"sap/ui/Device"
], function(UIComponent, Device) {
	"use strict";

	return UIComponent.extend("com.perezjquim.showcase.generic_readme.Component", {

		metadata: {
			manifest: "json"
		},

		init: function() {
			UIComponent.prototype.init.apply(this, arguments);
			this.getRouter().initialize();

			var oComponentData = this.getComponentData();
			var oStartupParameters = oComponentData.startupParameters;
			var oStartupModel = this.getModel("startup");
			oStartupModel.setData(oStartupParameters);
		}

	});
});