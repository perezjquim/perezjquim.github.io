sap.ui.define([
	"sap/ui/core/Component"
], function(Component) {
	return Component.extend("com.perezjquim.showcase.plugins.spotify.Component", {
		BUTTON_ID: "spotify-icon",
		BUTTON_TEXT: "Spotify",
		BUTTON_TARGET_URL: "https://open.spotify.com/playlist/3j9aAlq5fmf6V5FXmsCUOS",

		metadata: {
			"manifest": "json"
		},

		init: function() {
			var rendererPromise = this._getRenderer();
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
				id: this.BUTTON_ID,
				text: this.BUTTON_TEXT,
				press: this._onPress.bind(this)
			}, true, false);
		},

		_onPress: function(oEvent) {
			window.open(this.BUTTON_TARGET_URL);
		}
	});
});