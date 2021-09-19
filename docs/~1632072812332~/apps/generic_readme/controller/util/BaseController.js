sap.ui.define(["sap/ui/core/mvc/Controller","sap/ui/core/routing/History","sap/ui/core/BusyIndicator","sap/m/MessageToast"],function(t,e,o,n){"use strict";return t.extend("com.perezjquim.showcase.generic_readme.controller.util.BaseController",{toast:function(t){n.show(t)},setBusy:function(t){if(t){o.show()}else{o.hide()}},getModel:function(t){const e=this.getOwnerComponent();const o=e.getModel(t);return o},attachPatternMatched(t,e){const o=this.getOwnerComponent();const n=o.getRouter();const s=n.getRoute(t);s.attachPatternMatched(e)},getConfig:function(t){const e=this.getModel("config");const o=e.getProperty(`/${t}`);return o},navTo:function(t,e,o){const n=this.getOwnerComponent();const s=n.getRouter();return s.navTo(t,e,o)},getText:function(t){const e=this.getModel("i18n");const o=e.getResourceBundle();const n=o.getText(t);return n},navBack:function(){const t=e.getInstance();const o=t.getPreviousHash();if(o){window.history.go(-1)}else{this.navTo("Home",{},true)}},getStorage:function(){return window.localStorage},clearModel:function(t){const e=this.getModel(t);const o=e.getData();for(var n in o){o[n]=""}e.setData(o)}})});