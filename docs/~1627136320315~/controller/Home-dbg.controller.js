sap.ui.define([
	"./util/BaseController"
], function(BaseController) {
	"use strict";
	return BaseController.extend("com.perezjquim.showcase.controller.Home", {

		API_BASE_URL: "https://perezjquim-ytc.herokuapp.com",

		onPressDownload: function() {
			this.setBusy(true);

			const oPromptModel = this.getModel("prompt");
			const oPromptData = oPromptModel.getData();

			const oSearchParams = new URLSearchParams(oPromptData);
			const sSearchParams = decodeURIComponent(oSearchParams.toString());

			const sTimestamp = new Date().getTime();
			const sDownloadUrl = `${this.API_BASE_URL}/crop-video?${sSearchParams}&=${sTimestamp}`;
			fetch(sDownloadUrl)
				.then(oResponse => {
					if (oResponse.ok) {
						const sFilename = oResponse.headers.get('content-disposition').split('filename=')[1].split(';')[0];
						oResponse.blob().then(oData => {
							const oBlob = new Blob([oData], {
								type: 'application/octet-stream'
							});
							this.setBusy(false);
							if (window.navigator.msSaveBlob) {
								window.navigator.msSaveBlob(oBlob, sFilename);
							} else {
								const sBlobUrl = window.URL.createObjectURL(oBlob);
								const oAnchor = document.createElement('a');
								oAnchor.setAttribute('href', sBlobUrl);
								oAnchor.setAttribute('download', sFilename);
								oAnchor.click();
							}
						});
					} else {
						throw new Error("Response NOK");
					}
				})
				.catch((oError) => {
					this.setBusy(false);
					this.toast(`Error! - ${oError}`);
				});
		}

	});
});