sap.ui.define([
	"sap/ui/core/mvc/Controller"
], function(Controller) {
	return Controller.extend("com.perezjquim.showcase.custom_tiles.social_tile.controller.Tile", {
		
		onAfterRendering: function(oEvent)
		{
			const oSource = oEvent.getSource();
			const oConfigModel = oSource.getModel("config");
			const sBackgroundColor = oConfigModel.getProperty("/tile_background_color");

			if(sBackgroundColor)
			{			
				const oTile = oSource && oSource.getContent() && oSource.getContent()[0];
				const oDomRef = oTile.getDomRef();
				$(oDomRef).css("background-color", sBackgroundColor);
			}
		},

		onTilePress: function(oEvent) {
			const oSource = oEvent.getSource();
			const oConfigModel = oSource.getModel("config");

			const sTargetUrl = oConfigModel.getProperty("/target_url");
			window.open(sTargetUrl);
		},

		fetchCount: async function(sEndpoint, sProperty)
		{
			try
			{
				if(sEndpoint)
				{
					const oResponse = await fetch(`https://api.allorigins.win/get?url=${encodeURIComponent(sEndpoint)}`);
					if(oResponse.ok)
					{
						const oJSONResponse = await oResponse.json();
						const sContents = oJSONResponse.contents;
						if(sProperty)
						{
							const oContents = JSON.parse(sContents);
							return sProperty.split('.').reduce(function(oPrev, sCurr) {
								return oPrev ? oPrev[sCurr] : null
							}, oContents)
						}
						else
						{
							const iValue = sContents;
							return iValue;
						}
					}
				}
			}
			catch(oException)
			{
				console.warn(oException);
			}
		}

	});
});