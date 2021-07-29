sap.ui.define([
	"sap/ui/core/Component"
], function(Component) {
	return Component.extend("com.perezjquim.showcase.plugins.season_mode.Component", {
		metadata: {
			"manifest": "json"
		},

		init: function() {
			this._renderSeason();
		},

		_renderSeason: function(oRenderer) {
			const oCurrentDate = new Date();
			const iCurrentMonth = oCurrentDate.getMonth() + 1;

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
			$("body").append("<z_season_message/>");
		}
	});
});