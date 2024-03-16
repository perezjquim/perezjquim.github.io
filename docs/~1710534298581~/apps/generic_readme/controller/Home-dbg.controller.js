sap.ui.define([
	"./util/BaseController"
], function(BaseController) {
	"use strict";
	return BaseController.extend("com.perezjquim.showcase.generic_readme.controller.Home", {
		onInit: function() {
			this.attachPatternMatched("Home", this._onObjectMatched.bind(this));
		},
		_onObjectMatched: function(oEvent) {
			this.setBusy(true);

			setTimeout(function() {
				var oEmbed = this.byId("embed-repo");
				var oStartupModel = this.getModel("startup");
				var sRepoLabel = oStartupModel.getProperty("/repo_label")[0];
				var sRepoName = oStartupModel.getProperty("/repo_name")[0];
				oEmbed.setContent("<embed src='https://perezjquim.github.io/" + sRepoName + "''" + " " + "width='100%' height='100%'/>");

				var oComponent = this.getOwnerComponent();
				oComponent.getService("ShellUIService").then(
					function(oService) {
						oService.setTitle(sRepoLabel);
						this.setBusy(false);
					}.bind(this),
					function(oError) {
						this.setBusy(false);
					}.bind(this),
				);
			}.bind(this));
		}
	});
});