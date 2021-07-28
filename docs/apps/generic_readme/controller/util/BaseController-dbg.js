sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/ui/core/routing/History",
	"sap/ui/core/BusyIndicator",
	"sap/m/MessageToast"
], function(Controller, History, BusyIndicator, MessageToast) {
	"use strict";
	return Controller.extend("com.perezjquim.showcase.generic_readme.controller.util.BaseController", {
		toast: function(sText) {
			MessageToast.show(sText);
		},
		setBusy: function(bBusy) {
			if (bBusy) {
				BusyIndicator.show(0);
			} else {
				BusyIndicator.hide();
			}
		},
		getModel: function(sName) {
			const oComponent = this.getOwnerComponent();
			const oModel = oComponent.getModel(sName);
			return oModel;
		},
		attachPatternMatched(sRoute, fFunction) {
			const oComponent = this.getOwnerComponent();
			const oRouter = oComponent.getRouter();
			const oRoute = oRouter.getRoute(sRoute);
			oRoute.attachPatternMatched(fFunction);
		},
		getConfig: function(sKey) {
			const oConfigModel = this.getModel("config");
			const oConfig = oConfigModel.getProperty(`/${sKey}`);
			return oConfig;
		},
		navTo: function(sRoute, oParams, bReplace) {
			const oComponent = this.getOwnerComponent();
			const oRouter = oComponent.getRouter();
			return oRouter.navTo(sRoute, oParams, bReplace);
		},
		getText: function(sKey) {
			const oI18n = this.getModel("i18n");
			const oBundle = oI18n.getResourceBundle();
			const sText = oBundle.getText(sKey);
			return sText;
		},
		navBack: function() {
			const oHistory = History.getInstance();
			const sPreviousHash = oHistory.getPreviousHash();

			if (sPreviousHash) {
				window.history.go(-1);
			} else {
				this.navTo("Home", {}, true);
			}
		},
		getStorage: function() {
			return window.localStorage;
		},
		clearModel: function(sName) {
			const oModel = this.getModel(sName);
			const oData = oModel.getData();
			for (var sKey in oData) {
				oData[sKey] = "";
			}
			oModel.setData(oData);
		}
	});
});