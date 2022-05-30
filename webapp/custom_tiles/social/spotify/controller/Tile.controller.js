sap.ui.define([
	"sap/ui/core/mvc/Controller"
], function(Controller) {
	return Controller.extend("com.perezjquim.showcase.custom_tiles.social.spotify.controller.Tile", {
		onPress: function(oEvent) {
			const oSource = oEvent.getSource();
			const oConfigModel = oSource.getModel("config");

			const sTargetUrl = oConfigModel.getProperty("/target_url");
			window.open(sTargetUrl);
		}
	});
});