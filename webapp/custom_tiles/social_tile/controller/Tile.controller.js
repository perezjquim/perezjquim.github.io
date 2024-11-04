sap.ui.define([
	"sap/ui/core/mvc/Controller"
], function (Controller) {
	return Controller.extend("com.perezjquim.showcase.custom_tiles.social_tile.controller.Tile", {

		onAfterRendering: function (oEvent) {
			const oSource = oEvent.getSource();
			const oConfigModel = oSource.getModel("config");
			const sBackground = oConfigModel.getProperty("/tile_background");

			if (sBackground) {
				const oTile = oSource && oSource.getContent() && oSource.getContent()[0];
				const oDomRef = oTile.getDomRef();
				$(oDomRef).css("background", sBackground);
			}
		},

		onTilePress: function (oEvent) {
			const oSource = oEvent.getSource();
			const oConfigModel = oSource.getModel("config");

			const sTargetUrl = oConfigModel.getProperty("/target_url");
			window.open(sTargetUrl);
		},

		fetchCount: async function (sEndpoint, sProperty) {
			if (sEndpoint) {
				var iNoOfTries = 2;
				while (iNoOfTries > 0) {
					try {
						const oResponse = await fetch(`https://corsproxy.io/?${encodeURIComponent(sEndpoint)}`);
						if (oResponse.ok) {
							const oJSONResponse = await oResponse.json();
							if (sProperty) {
								return sProperty.split('.').reduce(function (oPrev, sCurr) {
									return oPrev ? oPrev[sCurr] : null
								}, oJSONResponse)
							}
							else {
								const iValue = oJSONResponse;
								return iValue;
							}
						}
					}
					catch (oException) {
						console.warn(oException);
					}
					iNoOfTries -= 1;
				}
			}
		}

	});
});