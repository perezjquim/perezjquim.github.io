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
				BusyIndicator.show();
			} else {
				BusyIndicator.hide();
			}
		},
		getModel: function(sName) {
			var oComponent = this.getOwnerComponent();
			var oModel = oComponent.getModel(sName);
			return oModel;
		},
		attachPatternMatched(sRoute, fFunction) {
			var oComponent = this.getOwnerComponent();
			var oRouter = oComponent.getRouter();
			var oRoute = oRouter.getRoute(sRoute);
			oRoute.attachPatternMatched(fFunction);
		},
		getConfig: function(sKey) {
			var oConfigModel = this.getModel("config");
			var oConfig = oConfigModel.getProperty("/" + sKey);
			return oConfig;
		},
		navTo: function(sRoute, oParams, bReplace) {
			var oComponent = this.getOwnerComponent();
			var oRouter = oComponent.getRouter();
			return oRouter.navTo(sRoute, oParams, bReplace);
		},
		getText: function(sKey) {
			var oI18n = this.getModel("i18n");
			var oBundle = oI18n.getResourceBundle();
			var sText = oBundle.getText(sKey);
			return sText;
		},
		navBack: function() {
			var oHistory = History.getInstance();
			var sPreviousHash = oHistory.getPreviousHash();

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
			var oModel = this.getModel(sName);
			var oData = oModel.getData();
			for (var sKey in oData) {
				oData[sKey] = "";
			}
			oModel.setData(oData);
		}
	});
});