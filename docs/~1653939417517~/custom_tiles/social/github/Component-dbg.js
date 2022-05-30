sap.ui.define([
	"sap/ui/core/UIComponent",
	"sap/ui/Device"
], function(UIComponent, Device) {
	"use strict";

	return UIComponent.extend("com.perezjquim.showcase.custom_tiles.social.github.Component", {

		metadata: {
			manifest: "json"
		},

		init: function() {
			UIComponent.prototype.init.apply(this, arguments);
		}

	});
});