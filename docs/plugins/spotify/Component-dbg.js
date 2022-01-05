sap.ui.define([
	"sap/ui/core/Component",
	"../user_tracker/controller/util/Tracker",
	"sap/ui/core/Fragment",
	"sap/ui/core/BusyIndicator"
], function(Component, Tracker, Fragment, BusyIndicator) {
	return Component.extend("com.perezjquim.showcase.plugins.spotify.Component", {
		BUTTON_ID: "spotify-icon",
		BUTTON_TEXT: "Spotify",

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
			Tracker.notify("PEREZJQUIM PAGE > PRESSED ON SPOTIFY!", "");
			this._openPlaylist(oEvent);
		},

		_openPlaylist: function(oEvent) {
			const oSource = oEvent.getSource();
			if (!this._oPlaylistPopover) {
				BusyIndicator.show();
				Fragment.load({
					name: "com.perezjquim.showcase.plugins.spotify.fragment.EmbedPopover",
					controller: this
				}).then(function(oPopover) {
					BusyIndicator.hide();

					this._mapModels(oPopover);

					oPopover.openBy(oSource);

					this._oPlaylistPopover = oPopover;
				}.bind(this));
			} else {
				if (this._oPlaylistPopover.isOpen()) {
					this._oPlaylistPopover.close();
				} else {
					this._oPlaylistPopover.openBy(oSource);
				}
			}
		},

		_mapModels: function(oControl) {
			const oModels = this.oModels;
			for (var sModelName in oModels) {
				oControl.setModel(oModels[sModelName], sModelName);
			}
		},

		onBeforeOpenPopover: function(oEvent) {
			const oMiscModel = this.getModel("misc");
			oMiscModel.setProperty("/is_iframe_busy", true);
		},

		onAfterRenderingIframe: function(oEvent) {
			const oMiscModel = this.getModel("misc");

			const oIframe = $("#z_spotify_embed_popover_iframe");
			oIframe.one("load", function() {
				oMiscModel.setProperty("/is_iframe_busy", false);
			});
		},

		onClosePopover: function(oEvent) {
			const oButton = oEvent.getSource();
			const oFooter = oButton.getParent();
			const oPopover = oFooter.getParent();
			oPopover.close();
		},

		onOpenPlaylist: function(oEvent) {
			const oMiscModel = this.getModel("misc");
			const sPlaylistUrl = oMiscModel.getProperty("/playlist_url");
			window.open(sPlaylistUrl);
		}
	});
});