sap.ui.define([
	"sap/ui/core/Component",
	"./controller/util/Tracker"
], function(Component, Tracker) {
	return Component.extend("com.perezjquim.showcase.plugins.shell_header_icon_tweaker.Component", {
		metadata: {
			"manifest": "json"
		},

		init: function() {
			var rendererPromise = this._getRenderer();
			rendererPromise.then(function(oRenderer) {
				Tracker.run();
			}.bind(this));
		},

		_getRenderer: function() {
			var that = this,
				oDeferred = new jQuery.Deferred(),
				oRenderer;

			that._oShellContainer = jQuery.sap.getObject("sap.ushell.Container");
			if (!that._oShellContainer) {
				oDeferred.reject(
					"Illegal state: shell container not available; this component must be executed in a unified shell runtime context.");
			} else {
				oRenderer = that._oShellContainer.getRenderer();
				if (oRenderer) {
					oDeferred.resolve(oRenderer);
				} else {
					that._onRendererCreated = function(oEvent) {
						oRenderer = oEvent.getParameter("renderer");
						if (oRenderer) {
							oDeferred.resolve(oRenderer);
						} else {
							oDeferred.reject("Illegal state: shell renderer not available after recieving 'rendererLoaded' event.");
						}
					};
					that._oShellContainer.attachRendererCreatedEvent(that._onRendererCreated);
				}
			}
			return oDeferred.promise();
		}
	});
});