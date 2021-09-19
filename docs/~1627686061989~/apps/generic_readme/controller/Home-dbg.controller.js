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
				const oEmbed = this.byId("embed-repo");
				const oStartupModel = this.getModel("startup");
				const sRepoLabel = oStartupModel.getProperty("/repo_label")[0];
				const sRepoName = oStartupModel.getProperty("/repo_name")[0];
				oEmbed.setContent(`<embed src='https://perezjquim.github.io/${sRepoName}' width='100%' height='100%'/>`);

				const oComponent = this.getOwnerComponent();
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