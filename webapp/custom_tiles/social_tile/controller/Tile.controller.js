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
		}

	});
});