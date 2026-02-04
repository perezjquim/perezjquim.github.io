sap.ui.define([
	"sap/ui/core/Component"
], function(Component) {
	return Component.extend("com.perezjquim.showcase.plugins.season_mode.Component", {
		metadata: {
			"manifest": "json"
		},

		init: function() {
			const oConfigModel = this.getModel("config");
			(async function() {
				await oConfigModel.dataLoaded();
				this._renderSeason();
			}.bind(this))();
		},

		_renderSeason: function() {
			const oCurrentDate = new Date();
			const iCurrentMonth = oCurrentDate.getMonth() + 1;

			const oConfigModel = this.getModel("config");
			const oThemes = oConfigModel.getProperty("/themes");
			const oCurrentTheme = oThemes.find(function(oTheme) {
				return oTheme.months.includes(iCurrentMonth);
			});

			if (oCurrentTheme) {
				const sClass = oCurrentTheme.class_name;
				$("body").addClass(sClass);
				//$("body").append("<z_season_message_container><z_season_message/></z_season_message_container>");
			}
		}
	});
});