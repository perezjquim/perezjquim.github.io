sap.ui.define([
	"sap/ui/core/Component"
], function(Component) {

	return Component.extend("com.perezjquim.showcase.plugins.github.Component", {

		metadata: {
			"manifest": "json"
		},

		init: function() {
			const rendererPromise = this._getRenderer();
			rendererPromise.then(function(oRenderer) {
				this._renderButton(oRenderer);
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
		},

		_renderButton: function(oRenderer) {
			oRenderer.addHeaderEndItem("sap.ushell.ui.shell.ShellHeadItem", {
				icon: "sap-icon://excel-attachment",
				press: this.onItemClick.bind(this)
			}, true, false);
		},

		onItemClick: function(oEvent) {
			this._openGithub();
		},

		_openGithub: function() {

		}

	});
});