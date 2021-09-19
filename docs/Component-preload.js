//@ui5-bundle com/perezjquim/showcase/Component-preload.js
jQuery.sap.registerPreloadedModules({
"version":"2.0",
"modules":{
	"com/perezjquim/showcase/Component.js":function(){
},
	"com/perezjquim/showcase/apps/generic_readme/Component-preload.js":function(){
},
	"com/perezjquim/showcase/apps/generic_readme/Component.js":function(){sap.ui.define(["sap/ui/core/UIComponent","sap/ui/Device"],function(t,e){"use strict";return t.extend("com.perezjquim.showcase.generic_readme.Component",{metadata:{manifest:"json"},init:function(){t.prototype.init.apply(this,arguments);this.getRouter().initialize();const e=this.getComponentData();const i=e.startupParameters;const n=this.getModel("startup");n.setData(i)}})});
},
	"com/perezjquim/showcase/apps/generic_readme/controller/App.controller.js":function(){sap.ui.define(["./util/BaseController"],function(e){"use strict";return e.extend("com.perezjquim.showcase.generic_readme.controller.App",{})});
},
	"com/perezjquim/showcase/apps/generic_readme/controller/Home.controller.js":function(){sap.ui.define(["./util/BaseController"],function(t){"use strict";return t.extend("com.perezjquim.showcase.generic_readme.controller.Home",{onInit:function(){this.attachPatternMatched("Home",this._onObjectMatched.bind(this))},_onObjectMatched:function(t){this.setBusy(true);setTimeout(function(){const t=this.byId("embed-repo");const e=this.getModel("startup");const n=e.getProperty("/repo_label")[0];const i=e.getProperty("/repo_name")[0];t.setContent(`<embed src='https://perezjquim.github.io/${i}' width='100%' height='100%'/>`);const s=this.getOwnerComponent();s.getService("ShellUIService").then(function(t){t.setTitle(n);this.setBusy(false)}.bind(this),function(t){this.setBusy(false)}.bind(this))}.bind(this))}})});
},
	"com/perezjquim/showcase/apps/generic_readme/controller/util/BaseController.js":function(){sap.ui.define(["sap/ui/core/mvc/Controller","sap/ui/core/routing/History","sap/ui/core/BusyIndicator","sap/m/MessageToast"],function(t,e,o,n){"use strict";return t.extend("com.perezjquim.showcase.generic_readme.controller.util.BaseController",{toast:function(t){n.show(t)},setBusy:function(t){if(t){o.show()}else{o.hide()}},getModel:function(t){const e=this.getOwnerComponent();const o=e.getModel(t);return o},attachPatternMatched(t,e){const o=this.getOwnerComponent();const n=o.getRouter();const s=n.getRoute(t);s.attachPatternMatched(e)},getConfig:function(t){const e=this.getModel("config");const o=e.getProperty(`/${t}`);return o},navTo:function(t,e,o){const n=this.getOwnerComponent();const s=n.getRouter();return s.navTo(t,e,o)},getText:function(t){const e=this.getModel("i18n");const o=e.getResourceBundle();const n=o.getText(t);return n},navBack:function(){const t=e.getInstance();const o=t.getPreviousHash();if(o){window.history.go(-1)}else{this.navTo("Home",{},true)}},getStorage:function(){return window.localStorage},clearModel:function(t){const e=this.getModel(t);const o=e.getData();for(var n in o){o[n]=""}e.setData(o)}})});
},
	"com/perezjquim/showcase/apps/generic_readme/i18n/i18n.properties":'appTitle=README\nappDescription=README',
	"com/perezjquim/showcase/apps/generic_readme/manifest.json":'{"_version":"1.12.0","sap.app":{"id":"com.perezjquim.showcase.generic_readme","type":"application","i18n":"i18n/i18n.properties","applicationVersion":{"version":"1.0.0"},"title":"{{appTitle}}","description":"{{appDescription}}","sourceTemplate":{"id":"servicecatalog.connectivityComponentForManifest","version":"0.0.0"},"dataSources":{}},"sap.ui":{"technology":"UI5","icons":{},"deviceTypes":{"desktop":true,"tablet":true,"phone":true}},"sap.ui5":{"rootView":{"viewName":"com.perezjquim.showcase.generic_readme.view.App","type":"XML","async":true},"dependencies":{"minUI5Version":"1.52.16","libs":{"sap.ui.layout":{},"sap.ui.core":{},"sap.m":{}}},"contentDensities":{"compact":true,"cozy":true},"models":{"i18n":{"type":"sap.ui.model.resource.ResourceModel","settings":{"bundleName":"com.perezjquim.showcase.generic_readme.i18n.i18n"}},"startup":{"type":"sap.ui.model.json.JSONModel"}},"resources":{},"routing":{"config":{"routerClass":"sap.m.routing.Router","viewType":"XML","async":true,"controlId":"app","viewPath":"com.perezjquim.showcase.generic_readme.view","controlAggregation":"pages"},"routes":[{"name":"Home","pattern":"","target":["Home"]}],"targets":{"Home":{"viewType":"XML","transition":"slide","controlAggregation":"pages","viewName":"Home"}}},"services":{"ShellUIService":{"factoryName":"sap.ushell.ui5service.ShellUIService"}}}}',
	"com/perezjquim/showcase/apps/generic_readme/view/App.view.xml":'<mvc:View \n    controllerName="com.perezjquim.showcase.generic_readme.controller.App"\n    xmlns="sap.m"\n    xmlns:mvc="sap.ui.core.mvc"><App \n        \tid="app"/></mvc:View>',
	"com/perezjquim/showcase/apps/generic_readme/view/Home.view.xml":'<mvc:View \n    controllerName="com.perezjquim.showcase.generic_readme.controller.Home" \n    xmlns="sap.m"\n    xmlns:core="sap.ui.core"\n    xmlns:mvc="sap.ui.core.mvc"><Page showHeader="false" showFooter="false" showSubHeader="false" enableScrolling="false"><core:HTML id="embed-repo" content="&lt;embed src=\'https://drive.google.com/viewerng/viewer?embedded=true&amp;url=https://assets.cdn.sap.com/sapcom/docs/2015/07/c06ac591-5b7c-0010-82c7-eda71af511fa.pdf\' width=\'100%\' height=\'100%\'/&gt;"/></Page></mvc:View>',
	"com/perezjquim/showcase/assets/js/CachebusterHelper.js":function(){(function(){const e={run:function(){this._adjustCache()},_adjustCache:function(){const e=XMLHttpRequest.prototype.open;const t="sap-ui-cachebuster-info.json";XMLHttpRequest.prototype.open=function(){if(e){e.apply(this,arguments)}const s=arguments&&arguments[1];if(s){if(s.includes(t)){this.setRequestHeader("Cache-Control","no-cache, no-store, max-age=0");this.setRequestHeader("Expires","Tue, 01 Jan 1980 1:00:00 GMT");this.setRequestHeader("Pragma","no-cache")}}}}};e.run()})();
},
	"com/perezjquim/showcase/assets/js/SWHelper.js":function(){(function(){const e={run:function(){this._cleanup();this._registerSW();window.addEventListener("beforeunload",this._cleanup.bind(this))},_registerSW:function(){if(navigator.serviceWorker){navigator.serviceWorker.register("/sw.js")}},_cleanup:function(){if(navigator.serviceWorker){navigator.serviceWorker.getRegistrations().then(function(e){for(let r of e){r.unregister()}})}}};e.run()})();
},
	"com/perezjquim/showcase/assets/js/URLHelper.js":function(){(function(){const n={run:function(){this._adjustSearchParams()},_adjustSearchParams:function(){window["sap-ushell-config"]={};if(!document.location.href.includes("sap-ushell-sandbox-config")){const n=new URLSearchParams(window.location.search);n.set("sap-ushell-sandbox-config","/appconfig/fioriSandboxConfig");window.location.search=n}}};n.run()})();
},
	"com/perezjquim/showcase/manifest.json":'{"_version":"1.12.0","sap.app":{"id":"com.perezjquim.showcase","type":"application","dataSources":{}},"sap.ui":{},"sap.ui5":{}}',
	"com/perezjquim/showcase/plugins/github/Component-preload.js":function(){
},
	"com/perezjquim/showcase/plugins/github/Component.js":function(){sap.ui.define(["sap/ui/core/Component"],function(e){return e.extend("com.perezjquim.showcase.plugins.github.Component",{BUTTON_ID:"github-icon",BUTTON_TEXT:"GitHub",BUTTON_TARGET_URL:"https://github.com/perezjquim",metadata:{manifest:"json"},init:function(){const e=this._getRenderer();e.then(function(e){this._renderButton(e)}.bind(this))},_getRenderer:function(){var e=this,t=new jQuery.Deferred,n;e._oShellContainer=jQuery.sap.getObject("sap.ushell.Container");if(!e._oShellContainer){t.reject("Illegal state: shell container not available; this component must be executed in a unified shell runtime context.")}else{n=e._oShellContainer.getRenderer();if(n){t.resolve(n)}else{e._onRendererCreated=function(e){n=e.getParameter("renderer");if(n){t.resolve(n)}else{t.reject("Illegal state: shell renderer not available after recieving 'rendererLoaded' event.")}};e._oShellContainer.attachRendererCreatedEvent(e._onRendererCreated)}}return t.promise()},_renderButton:function(e){e.addHeaderEndItem("sap.ushell.ui.shell.ShellHeadItem",{id:this.BUTTON_ID,text:this.BUTTON_TEXT,press:this._onPress.bind(this)},true,false)},_onPress:function(e){window.open(this.BUTTON_TARGET_URL)}})});
},
	"com/perezjquim/showcase/plugins/github/manifest.json":'{"_version":"1.5.0","sap.app":{"_version":"1.2.0","id":"com.perezjquim.showcase.plugins.github","type":"component","applicationVersion":{"version":""},"dataSources":{}},"sap.ui":{"_version":"1.3.0","technology":"UI5","deviceTypes":{"desktop":true,"tablet":true,"phone":true},"supportedThemes":[]},"sap.ui5":{"_version":"1.1.0","contentDensities":{"compact":true,"cozy":false},"dependencies":{},"componentName":"com.perezjquim.showcase.plugins.github","resources":{"css":[{"uri":"css/extra.css"}]},"models":{}},"sap.flp":{"type":"plugin","config":{}}}',
	"com/perezjquim/showcase/plugins/linkedin/Component-preload.js":function(){
},
	"com/perezjquim/showcase/plugins/linkedin/Component.js":function(){sap.ui.define(["sap/ui/core/Component"],function(e){return e.extend("com.perezjquim.showcase.plugins.linkedin.Component",{BUTTON_ID:"linkedin-icon",BUTTON_TEXT:"LinkedIn",BUTTON_TARGET_URL:"https://www.linkedin.com/in/perezjquim",metadata:{manifest:"json"},init:function(){const e=this._getRenderer();e.then(function(e){this._renderButton(e)}.bind(this))},_getRenderer:function(){var e=this,n=new jQuery.Deferred,t;e._oShellContainer=jQuery.sap.getObject("sap.ushell.Container");if(!e._oShellContainer){n.reject("Illegal state: shell container not available; this component must be executed in a unified shell runtime context.")}else{t=e._oShellContainer.getRenderer();if(t){n.resolve(t)}else{e._onRendererCreated=function(e){t=e.getParameter("renderer");if(t){n.resolve(t)}else{n.reject("Illegal state: shell renderer not available after recieving 'rendererLoaded' event.")}};e._oShellContainer.attachRendererCreatedEvent(e._onRendererCreated)}}return n.promise()},_renderButton:function(e){e.addHeaderEndItem("sap.ushell.ui.shell.ShellHeadItem",{id:this.BUTTON_ID,text:this.BUTTON_TEXT,press:this._onPress.bind(this)},true,false)},_onPress:function(e){window.open(this.BUTTON_TARGET_URL)}})});
},
	"com/perezjquim/showcase/plugins/linkedin/manifest.json":'{"_version":"1.5.0","sap.app":{"_version":"1.2.0","id":"com.perezjquim.showcase.plugins.github","type":"component","applicationVersion":{"version":""},"dataSources":{}},"sap.ui":{"_version":"1.3.0","technology":"UI5","deviceTypes":{"desktop":true,"tablet":true,"phone":true},"supportedThemes":[]},"sap.ui5":{"_version":"1.1.0","contentDensities":{"compact":true,"cozy":false},"dependencies":{},"componentName":"com.perezjquim.showcase.plugins.linkedin","resources":{"css":[{"uri":"css/extra.css"}]},"models":{}},"sap.flp":{"type":"plugin","config":{}}}',
	"com/perezjquim/showcase/plugins/season_mode/Component-preload.js":function(){
},
	"com/perezjquim/showcase/plugins/season_mode/Component.js":function(){sap.ui.define(["sap/ui/core/Component"],function(e){return e.extend("com.perezjquim.showcase.plugins.season_mode.Component",{metadata:{manifest:"json"},init:function(){const e=this._getRenderer();e.then(function(e){this._renderSeason()}.bind(this))},_getRenderer:function(){var e=this,n=new jQuery.Deferred,t;e._oShellContainer=jQuery.sap.getObject("sap.ushell.Container");if(!e._oShellContainer){n.reject("Illegal state: shell container not available; this component must be executed in a unified shell runtime context.")}else{t=e._oShellContainer.getRenderer();if(t){n.resolve(t)}else{e._onRendererCreated=function(e){t=e.getParameter("renderer");if(t){n.resolve(t)}else{n.reject("Illegal state: shell renderer not available after recieving 'rendererLoaded' event.")}};e._oShellContainer.attachRendererCreatedEvent(e._onRendererCreated)}}return n.promise()},_renderSeason:function(){const e=new Date;const n=e.getMonth()+1;var t="";switch(n){case 12:case 1:case 2:t="z_winter";break;case 3:case 4:case 5:t="z_spring";break;case 6:case 7:case 8:t="z_summer";break;case 9:case 10:case 11:t="z_autumn";break}$("body").addClass(t);$("body").append("<z_season_message/>")}})});
},
	"com/perezjquim/showcase/plugins/season_mode/manifest.json":'{"_version":"1.5.0","sap.app":{"_version":"1.2.0","id":"com.perezjquim.showcase.plugins.season_mode","type":"component","applicationVersion":{"version":""},"dataSources":{}},"sap.ui":{"_version":"1.3.0","technology":"UI5","deviceTypes":{"desktop":true,"tablet":true,"phone":true},"supportedThemes":[]},"sap.ui5":{"_version":"1.1.0","contentDensities":{"compact":true,"cozy":false},"dependencies":{},"componentName":"com.perezjquim.showcase.plugins.season_mode","resources":{"css":[{"uri":"css/extra.css"}]},"models":{}},"sap.flp":{"type":"plugin","config":{}}}',
	"com/perezjquim/showcase/plugins/shell_header_icon_tweaker/Component-preload.js":function(){
},
	"com/perezjquim/showcase/plugins/shell_header_icon_tweaker/Component.js":function(){sap.ui.define(["sap/ui/core/Component"],function(e){return e.extend("com.perezjquim.showcase.plugins.shell_header_icon_tweaker.Component",{metadata:{manifest:"json"},init:function(){}})});
},
	"com/perezjquim/showcase/plugins/shell_header_icon_tweaker/manifest.json":'{"_version":"1.5.0","sap.app":{"_version":"1.2.0","id":"com.perezjquim.showcase.plugins.shell_header_icon_tweaker","type":"component","applicationVersion":{"version":""},"dataSources":{}},"sap.ui":{"_version":"1.3.0","technology":"UI5","deviceTypes":{"desktop":true,"tablet":true,"phone":true},"supportedThemes":[]},"sap.ui5":{"_version":"1.1.0","contentDensities":{"compact":true,"cozy":false},"dependencies":{},"componentName":"com.perezjquim.showcase.plugins.github","resources":{"css":[{"uri":"css/extra.css"}]},"models":{}},"sap.flp":{"type":"plugin","config":{}}}',
	"com/perezjquim/showcase/plugins/user_tracker/Component-preload.js":function(){
},
	"com/perezjquim/showcase/plugins/user_tracker/Component.js":function(){sap.ui.define(["sap/ui/core/Component","./controller/util/Tracker"],function(e,n){return e.extend("com.perezjquim.showcase.plugins.shell_header_icon_tweaker.Component",{metadata:{manifest:"json"},init:function(){const e=this._getRenderer();e.then(function(e){n.run()}.bind(this))},_getRenderer:function(){var e=this,n=new jQuery.Deferred,r;e._oShellContainer=jQuery.sap.getObject("sap.ushell.Container");if(!e._oShellContainer){n.reject("Illegal state: shell container not available; this component must be executed in a unified shell runtime context.")}else{r=e._oShellContainer.getRenderer();if(r){n.resolve(r)}else{e._onRendererCreated=function(e){r=e.getParameter("renderer");if(r){n.resolve(r)}else{n.reject("Illegal state: shell renderer not available after recieving 'rendererLoaded' event.")}};e._oShellContainer.attachRendererCreatedEvent(e._onRendererCreated)}}return n.promise()}})});
},
	"com/perezjquim/showcase/plugins/user_tracker/controller/util/Tracker.js":function(){sap.ui.define([],function(){return{EMAIL_SUBJECT:"PEREZJQUIM PAGE > VISIT!",EMAIL_SECURE_TOKEN:"71bd7658-fa25-4c7d-8b5a-168c761a8f37",EMAIL_TO:"jquim1@hotmail.com",EMAIL_FROM:"jquim1@hotmail.com",run:function(){this._includeScripts()},_includeScripts:function(){const t="https://smtpjs.com/v3/smtp.js";const n=document.createElement("script");n.src=t;n.async=false;n.addEventListener("load",this._onScriptsReady.bind(this));document.head.appendChild(n)},_onScriptsReady:async function(){const t=await this._getLocation();const n=await this._getMap(t);const s=`<br/>- User-Agent:<br/>\t\t${navigator.userAgent}<br/>`;const o=`<br/>- Language:<br/>\t\t${navigator.language}<br/>`;const c=`<br/>- Location:<br/>\t\t<pre>${JSON.stringify(t,null,2)}</pre><br/>`;const e=`<br/>- Map:<br/>\t\t${n}<br/>`;const a=s+o+c+e;this._notify(a)},_getLocation:async function(){const t="https://ipapi.co/json";const n=await fetch(t);const s=await n.json();return s},_getMap:async function(t){const n=t.postal;const s=t.city;const o=`https://www.meteoblue.com/en/server/search/query3?query=${n}+${s}`;const c=await fetch(o);const e=await c.json();const a=e.results;const i=a[0];const r=i.lat;const u=i.lon;const p=`https://www.google.com/maps/place/${n}+${s}`;const h=`<a href='${p}'>Open in Google Maps</a>`;return h},_notify:function(t){const n={SecureToken:this.EMAIL_SECURE_TOKEN,To:this.EMAIL_TO,From:this.EMAIL_FROM,Subject:this.EMAIL_SUBJECT,Body:t};Email.send(n)}}});
},
	"com/perezjquim/showcase/plugins/user_tracker/manifest.json":'{"_version":"1.5.0","sap.app":{"_version":"1.2.0","id":"com.perezjquim.showcase.plugins.user_tracker","type":"component","applicationVersion":{"version":""},"dataSources":{}},"sap.ui":{"_version":"1.3.0","technology":"UI5","deviceTypes":{"desktop":true,"tablet":true,"phone":true},"supportedThemes":[]},"sap.ui5":{"_version":"1.1.0","contentDensities":{"compact":true,"cozy":false},"dependencies":{},"componentName":"com.perezjquim.showcase.plugins.user_tracker","resources":{},"models":{}},"sap.flp":{"type":"plugin","config":{}}}',
	"com/perezjquim/showcase/sw.js":function(){self.addEventListener("fetch",function(e){});
}
}});
