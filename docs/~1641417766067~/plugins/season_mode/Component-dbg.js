sap.ui.define([
	"sap/ui/core/Component"
], function(Component) {
	return Component.extend("com.perezjquim.showcase.plugins.season_mode.Component", {
		metadata: {
			"manifest": "json"
		},

		init: function() {
			var rendererPromise = this._getRenderer();
			rendererPromise.then(function(oRenderer) {
				this._renderSeason();
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

		_renderSeason: function() {
			var oCurrentDate = new Date();
			var iCurrentMonth = oCurrentDate.getMonth() + 1;

			var sClass = "";
			switch (iCurrentMonth) {
				case 12:
				case 1:
				case 2:
					sClass = "z_winter";
					break;

				case 3:
				case 4:
				case 5:
					sClass = "z_spring";
					break;

				case 6:
				case 7:
				case 8:
					sClass = "z_summer";
					break;

				case 9:
				case 10:
				case 11:
					sClass = "z_autumn";
					break;
			}

			$("body").addClass(sClass);
			$("body").append("<z_season_message_container><z_season_message/></z_season_message_container>");
		}
	});
});