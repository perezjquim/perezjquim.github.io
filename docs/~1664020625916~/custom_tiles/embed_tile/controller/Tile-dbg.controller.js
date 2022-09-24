sap.ui.define([
	"sap/ui/core/mvc/Controller"
], function(Controller) {
	return Controller.extend("com.perezjquim.showcase.custom_tiles.embed_tile.controller.Tile", {
		
		formatContent: function(sEmbedUrl)
		{
			return `<embed src='${sEmbedUrl}' width='100%' height='100%'/>`;
		}

	});
});