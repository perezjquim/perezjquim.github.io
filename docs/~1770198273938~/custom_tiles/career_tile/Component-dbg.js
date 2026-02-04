sap.ui.define([
	"sap/ui/core/UIComponent",
	"sap/ui/Device"
], function(UIComponent, Device) {
	"use strict";

	return UIComponent.extend("com.perezjquim.showcase.custom_tiles.career_tile.Component", {

		metadata: {
			manifest: "json"
		},

		init: function() {
			UIComponent.prototype.init.apply(this, arguments);
		},

		onAfterRendering: function() {
			this._hideOuterTile();
		},

		_hideOuterTile: function() {
			const oContainer = this.oContainer;
			const oOuterTile = oContainer.getParent();
			oOuterTile.addStyleClass("z_outer_tile");
		}
	});
});