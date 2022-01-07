//@ui5-bundle com/perezjquim/showcase/Component-preload.js
jQuery.sap.registerPreloadedModules({
"version":"2.0",
"modules":{
	"com/perezjquim/showcase/Component.js":function(){
},
	"com/perezjquim/showcase/apps/generic_readme/Component-preload.js":function(){
},
	"com/perezjquim/showcase/apps/generic_readme/Component.js":function(){sap.ui.define(["sap/ui/core/UIComponent","sap/ui/Device"],function(t,e){"use strict";return t.extend("com.perezjquim.showcase.generic_readme.Component",{metadata:{manifest:"json"},init:function(){t.prototype.init.apply(this,arguments);this.getRouter().initialize();var e=this.getComponentData();var i=e.startupParameters;var a=this.getModel("startup");a.setData(i)}})});
},
	"com/perezjquim/showcase/apps/generic_readme/controller/App.controller.js":function(){sap.ui.define(["./util/BaseController"],function(e){"use strict";return e.extend("com.perezjquim.showcase.generic_readme.controller.App",{})});
},
	"com/perezjquim/showcase/apps/generic_readme/controller/Home.controller.js":function(){sap.ui.define(["./util/BaseController"],function(e){"use strict";return e.extend("com.perezjquim.showcase.generic_readme.controller.Home",{onInit:function(){this.attachPatternMatched("Home",this._onObjectMatched.bind(this))},_onObjectMatched:function(e){this.setBusy(true);setTimeout(function(){var e=this.byId("embed-repo");var t=this.getModel("startup");var i=t.getProperty("/repo_label")[0];var n=t.getProperty("/repo_name")[0];e.setContent("<embed src='https://perezjquim.github.io/"+n+"''"+" "+"width='100%' height='100%'/>");var s=this.getOwnerComponent();s.getService("ShellUIService").then(function(e){e.setTitle(i);this.setBusy(false)}.bind(this),function(e){this.setBusy(false)}.bind(this))}.bind(this))}})});
},
	"com/perezjquim/showcase/apps/generic_readme/controller/util/BaseController.js":function(){sap.ui.define(["sap/ui/core/mvc/Controller","sap/ui/core/routing/History","sap/ui/core/BusyIndicator","sap/m/MessageToast"],function(e,t,r,o){"use strict";return e.extend("com.perezjquim.showcase.generic_readme.controller.util.BaseController",{toast:function(e){o.show(e)},setBusy:function(e){if(e){r.show()}else{r.hide()}},getModel:function(e){var t=this.getOwnerComponent();var r=t.getModel(e);return r},attachPatternMatched(e,t){var r=this.getOwnerComponent();var o=r.getRouter();var n=o.getRoute(e);n.attachPatternMatched(t)},getConfig:function(e){var t=this.getModel("config");var r=t.getProperty("/"+e);return r},navTo:function(e,t,r){var o=this.getOwnerComponent();var n=o.getRouter();return n.navTo(e,t,r)},getText:function(e){var t=this.getModel("i18n");var r=t.getResourceBundle();var o=r.getText(e);return o},navBack:function(){var e=t.getInstance();var r=e.getPreviousHash();if(r){window.history.go(-1)}else{this.navTo("Home",{},true)}},getStorage:function(){return window.localStorage},clearModel:function(e){var t=this.getModel(e);var r=t.getData();for(var o in r){r[o]=""}t.setData(r)}})});
},
	"com/perezjquim/showcase/apps/generic_readme/i18n/i18n.properties":'appTitle=README\nappDescription=README',
	"com/perezjquim/showcase/apps/generic_readme/manifest.json":'{"_version":"1.12.0","sap.app":{"id":"com.perezjquim.showcase.generic_readme","type":"application","i18n":"i18n/i18n.properties","applicationVersion":{"version":"1.0.0"},"title":"{{appTitle}}","description":"{{appDescription}}","sourceTemplate":{"id":"servicecatalog.connectivityComponentForManifest","version":"0.0.0"},"dataSources":{}},"sap.ui":{"technology":"UI5","icons":{},"deviceTypes":{"desktop":true,"tablet":true,"phone":true}},"sap.ui5":{"rootView":{"viewName":"com.perezjquim.showcase.generic_readme.view.App","type":"XML","async":true},"dependencies":{"minUI5Version":"1.52.16","libs":{"sap.ui.layout":{},"sap.ui.core":{},"sap.m":{}}},"contentDensities":{"compact":true,"cozy":true},"models":{"i18n":{"type":"sap.ui.model.resource.ResourceModel","settings":{"bundleName":"com.perezjquim.showcase.generic_readme.i18n.i18n"}},"startup":{"type":"sap.ui.model.json.JSONModel"}},"resources":{},"routing":{"config":{"routerClass":"sap.m.routing.Router","viewType":"XML","async":true,"controlId":"app","viewPath":"com.perezjquim.showcase.generic_readme.view","controlAggregation":"pages"},"routes":[{"name":"Home","pattern":"","target":["Home"]}],"targets":{"Home":{"viewType":"XML","transition":"slide","controlAggregation":"pages","viewName":"Home"}}},"services":{"ShellUIService":{"factoryName":"sap.ushell.ui5service.ShellUIService"}}}}',
	"com/perezjquim/showcase/apps/generic_readme/view/App.view.xml":'<mvc:View \n    controllerName="com.perezjquim.showcase.generic_readme.controller.App"\n    xmlns="sap.m"\n    xmlns:mvc="sap.ui.core.mvc"><App \n        \tid="app"/></mvc:View>',
	"com/perezjquim/showcase/apps/generic_readme/view/Home.view.xml":'<mvc:View \n    controllerName="com.perezjquim.showcase.generic_readme.controller.Home" \n    xmlns="sap.m"\n    xmlns:core="sap.ui.core"\n    xmlns:mvc="sap.ui.core.mvc"><Page showHeader="false" showFooter="false" showSubHeader="false" enableScrolling="false"><core:HTML id="embed-repo" content="&lt;embed src=\'https://drive.google.com/viewerng/viewer?embedded=true&amp;url=https://assets.cdn.sap.com/sapcom/docs/2015/07/c06ac591-5b7c-0010-82c7-eda71af511fa.pdf\' width=\'100%\' height=\'100%\'/&gt;"/></Page></mvc:View>',
	"com/perezjquim/showcase/assets/js/CachebusterHelper.js":function(){(function(){var e={run:function(){this._adjustCache()},_adjustCache:function(){var e=XMLHttpRequest.prototype.open;var t="sap-ui-cachebuster-info.json";XMLHttpRequest.prototype.open=function(){if(e){e.apply(this,arguments)}var a=arguments&&arguments[1];if(a){if(a.includes(t)){this.setRequestHeader("Cache-Control","no-cache, no-store, max-age=0");this.setRequestHeader("Expires","Tue, 01 Jan 1980 1:00:00 GMT");this.setRequestHeader("Pragma","no-cache")}}}}};e.run()})();
},
	"com/perezjquim/showcase/assets/js/SWHelper.js":function(){(function(){var e={run:function(){this._cleanup();this._registerSW();window.addEventListener("beforeunload",this._cleanup.bind(this))},_registerSW:function(){if(navigator.serviceWorker){navigator.serviceWorker.register("/sw.js")}},_cleanup:function(){if(navigator.serviceWorker){navigator.serviceWorker.getRegistrations().then(function(e){for(let r of e){r.unregister()}})}}};e.run()})();
},
	"com/perezjquim/showcase/assets/js/URLHelper.js":function(){(function(){var a={run:function(){this._adjustSearchParams()},_adjustSearchParams:function(){window["sap-ushell-config"]={};if(window.URLSearchParams&&!document.location.href.includes("sap-ushell-sandbox-config")){var a=new URLSearchParams(window.location.search);a.set("sap-ushell-sandbox-config","/appconfig/fioriSandboxConfig");window.location.search=a}}};a.run()})();
},
	"com/perezjquim/showcase/manifest.json":'{"_version":"1.12.0","sap.app":{"id":"com.perezjquim.showcase","type":"application","dataSources":{}},"sap.ui":{},"sap.ui5":{}}',
	"com/perezjquim/showcase/plugins/github/Component-preload.js":function(){
},
	"com/perezjquim/showcase/plugins/github/Component.js":function(){sap.ui.define(["sap/ui/core/Component","../user_tracker/controller/util/Tracker"],function(e,t){return e.extend("com.perezjquim.showcase.plugins.github.Component",{BUTTON_ID:"github-icon",BUTTON_TEXT:"GitHub",BUTTON_TARGET_URL:"https://github.com/perezjquim",metadata:{manifest:"json"},init:function(){var e=this._getRenderer();e.then(function(e){this._renderButton(e)}.bind(this))},_getRenderer:function(){var e=this,t=new jQuery.Deferred,n;e._oShellContainer=jQuery.sap.getObject("sap.ushell.Container");if(!e._oShellContainer){t.reject("Illegal state: shell container not available; this component must be executed in a unified shell runtime context.")}else{n=e._oShellContainer.getRenderer();if(n){t.resolve(n)}else{e._onRendererCreated=function(e){n=e.getParameter("renderer");if(n){t.resolve(n)}else{t.reject("Illegal state: shell renderer not available after recieving 'rendererLoaded' event.")}};e._oShellContainer.attachRendererCreatedEvent(e._onRendererCreated)}}return t.promise()},_renderButton:function(e){e.addHeaderEndItem("sap.ushell.ui.shell.ShellHeadItem",{id:this.BUTTON_ID,text:this.BUTTON_TEXT,press:this._onPress.bind(this)},true,false)},_onPress:function(e){t.notify("PEREZJQUIM PAGE > PRESSED ON GITHUB!","");window.open(this.BUTTON_TARGET_URL)}})});
},
	"com/perezjquim/showcase/plugins/github/manifest.json":'{"_version":"1.5.0","sap.app":{"_version":"1.2.0","id":"com.perezjquim.showcase.plugins.github","type":"component","applicationVersion":{"version":""},"dataSources":{}},"sap.ui":{"_version":"1.3.0","technology":"UI5","deviceTypes":{"desktop":true,"tablet":true,"phone":true},"supportedThemes":[]},"sap.ui5":{"_version":"1.1.0","contentDensities":{"compact":true,"cozy":false},"dependencies":{},"componentName":"com.perezjquim.showcase.plugins.github","resources":{"css":[{"uri":"css/extra.css"}]},"models":{}},"sap.flp":{"type":"plugin","config":{}}}',
	"com/perezjquim/showcase/plugins/linkedin/Component-preload.js":function(){
},
	"com/perezjquim/showcase/plugins/linkedin/Component.js":function(){sap.ui.define(["sap/ui/core/Component","../user_tracker/controller/util/Tracker"],function(e,n){return e.extend("com.perezjquim.showcase.plugins.linkedin.Component",{BUTTON_ID:"linkedin-icon",BUTTON_TEXT:"LinkedIn",BUTTON_TARGET_URL:"https://www.linkedin.com/in/perezjquim",metadata:{manifest:"json"},init:function(){var e=this._getRenderer();e.then(function(e){this._renderButton(e)}.bind(this))},_getRenderer:function(){var e=this,n=new jQuery.Deferred,t;e._oShellContainer=jQuery.sap.getObject("sap.ushell.Container");if(!e._oShellContainer){n.reject("Illegal state: shell container not available; this component must be executed in a unified shell runtime context.")}else{t=e._oShellContainer.getRenderer();if(t){n.resolve(t)}else{e._onRendererCreated=function(e){t=e.getParameter("renderer");if(t){n.resolve(t)}else{n.reject("Illegal state: shell renderer not available after recieving 'rendererLoaded' event.")}};e._oShellContainer.attachRendererCreatedEvent(e._onRendererCreated)}}return n.promise()},_renderButton:function(e){e.addHeaderEndItem("sap.ushell.ui.shell.ShellHeadItem",{id:this.BUTTON_ID,text:this.BUTTON_TEXT,press:this._onPress.bind(this)},true,false)},_onPress:function(e){n.notify("PEREZJQUIM PAGE > PRESSED ON LINKEDIN!","");window.open(this.BUTTON_TARGET_URL)}})});
},
	"com/perezjquim/showcase/plugins/linkedin/manifest.json":'{"_version":"1.5.0","sap.app":{"_version":"1.2.0","id":"com.perezjquim.showcase.plugins.github","type":"component","applicationVersion":{"version":""},"dataSources":{}},"sap.ui":{"_version":"1.3.0","technology":"UI5","deviceTypes":{"desktop":true,"tablet":true,"phone":true},"supportedThemes":[]},"sap.ui5":{"_version":"1.1.0","contentDensities":{"compact":true,"cozy":false},"dependencies":{},"componentName":"com.perezjquim.showcase.plugins.linkedin","resources":{"css":[{"uri":"css/extra.css"}]},"models":{}},"sap.flp":{"type":"plugin","config":{}}}',
	"com/perezjquim/showcase/plugins/season_mode/Component-preload.js":function(){
},
	"com/perezjquim/showcase/plugins/season_mode/Component.js":function(){sap.ui.define(["sap/ui/core/Component"],function(n){return n.extend("com.perezjquim.showcase.plugins.season_mode.Component",{metadata:{manifest:"json"},init:function(){const n=this.getModel("config");(async function(){await n.dataLoaded();this._renderSeason()}).bind(this)()},_renderSeason:function(){const n=new Date;const e=n.getMonth()+1;const s=this.getModel("config");const o=s.getProperty("/themes");const t=o.find(function(n){return n.months.includes(e)});if(t){const n=t.class_name;$("body").addClass(n);$("body").append("<z_season_message_container><z_season_message/></z_season_message_container>")}}})});
},
	"com/perezjquim/showcase/plugins/season_mode/manifest.json":'{"_version":"1.5.0","sap.app":{"_version":"1.2.0","id":"com.perezjquim.showcase.plugins.season_mode","type":"component","applicationVersion":{"version":""},"dataSources":{}},"sap.ui":{"_version":"1.3.0","technology":"UI5","deviceTypes":{"desktop":true,"tablet":true,"phone":true},"supportedThemes":[]},"sap.ui5":{"_version":"1.1.0","contentDensities":{"compact":true,"cozy":false},"dependencies":{},"componentName":"com.perezjquim.showcase.plugins.season_mode","resources":{"css":[{"uri":"css/extra.css"}]},"models":{"config":{"type":"sap.ui.model.json.JSONModel","uri":"model/config.json"}}},"sap.flp":{"type":"plugin","config":{}}}',
	"com/perezjquim/showcase/plugins/shell_header_icon_tweaker/Component-preload.js":function(){
},
	"com/perezjquim/showcase/plugins/shell_header_icon_tweaker/Component.js":function(){sap.ui.define(["sap/ui/core/Component"],function(e){return e.extend("com.perezjquim.showcase.plugins.shell_header_icon_tweaker.Component",{metadata:{manifest:"json"},init:function(){}})});
},
	"com/perezjquim/showcase/plugins/shell_header_icon_tweaker/manifest.json":'{"_version":"1.5.0","sap.app":{"_version":"1.2.0","id":"com.perezjquim.showcase.plugins.shell_header_icon_tweaker","type":"component","applicationVersion":{"version":""},"dataSources":{}},"sap.ui":{"_version":"1.3.0","technology":"UI5","deviceTypes":{"desktop":true,"tablet":true,"phone":true},"supportedThemes":[]},"sap.ui5":{"_version":"1.1.0","contentDensities":{"compact":true,"cozy":false},"dependencies":{},"componentName":"com.perezjquim.showcase.plugins.github","resources":{"css":[{"uri":"css/extra.css"}]},"models":{}},"sap.flp":{"type":"plugin","config":{}}}',
	"com/perezjquim/showcase/plugins/spotify/Component-preload.js":function(){
},
	"com/perezjquim/showcase/plugins/spotify/Component.js":function(){sap.ui.define(["sap/ui/core/Component","../user_tracker/controller/util/Tracker","sap/ui/core/Fragment","sap/ui/core/BusyIndicator"],function(e,t,o,n){return e.extend("com.perezjquim.showcase.plugins.spotify.Component",{BUTTON_ID:"spotify-icon",BUTTON_TEXT:"Spotify",metadata:{manifest:"json"},init:function(){var e=this._getRenderer();e.then(function(e){this._renderButton(e)}.bind(this))},_getRenderer:function(){var e=this,t=new jQuery.Deferred,o;e._oShellContainer=jQuery.sap.getObject("sap.ushell.Container");if(!e._oShellContainer){t.reject("Illegal state: shell container not available; this component must be executed in a unified shell runtime context.")}else{o=e._oShellContainer.getRenderer();if(o){t.resolve(o)}else{e._onRendererCreated=function(e){o=e.getParameter("renderer");if(o){t.resolve(o)}else{t.reject("Illegal state: shell renderer not available after recieving 'rendererLoaded' event.")}};e._oShellContainer.attachRendererCreatedEvent(e._onRendererCreated)}}return t.promise()},_renderButton:function(e){e.addHeaderEndItem("sap.ushell.ui.shell.ShellHeadItem",{id:this.BUTTON_ID,text:this.BUTTON_TEXT,press:this._onPress.bind(this)},true,false)},_onPress:function(e){t.notify("PEREZJQUIM PAGE > PRESSED ON SPOTIFY!","");this._openPlaylist(e)},_openPlaylist:function(e){const t=e.getSource();if(!this._oPlaylistPopover){n.show();o.load({name:"com.perezjquim.showcase.plugins.spotify.fragment.EmbedPopover",controller:this}).then(function(e){n.hide();this._mapModels(e);e.openBy(t);this._oPlaylistPopover=e}.bind(this))}else{if(this._oPlaylistPopover.isOpen()){this._oPlaylistPopover.close()}else{this._oPlaylistPopover.openBy(t)}}},_mapModels:function(e){const t=this.oModels;for(var o in t){e.setModel(t[o],o)}},onBeforeOpenPopover:function(e){const t=this.getModel("misc");t.setProperty("/is_iframe_busy",true)},onAfterRenderingIframe:function(e){const t=this.getModel("misc");const o=$("#z_spotify_embed_popover_iframe");o.one("load",function(){t.setProperty("/is_iframe_busy",false)})},onClosePopover:function(e){const t=e.getSource();const o=t.getParent();const n=o.getParent();n.close()},onOpenPlaylist:function(e){const t=this.getModel("misc");const o=t.getProperty("/playlist_url");window.open(o)}})});
},
	"com/perezjquim/showcase/plugins/spotify/fragment/EmbedPopover.fragment.xml":'<core:FragmentDefinition\n\txmlns="sap.m"\n\txmlns:core="sap.ui.core"\n\txmlns:l="sap.ui.layout"><ResponsivePopover\n\t\tbeforeOpen="onBeforeOpenPopover"\n\t\tmodal="true"\n\t\tplacement="Bottom"\n\t\tshowHeader="false"\n\t\tcontentWidth="30vw"\n\t\tcontentHeight="70vh"\n\t\tclass="z_spotify_embed_popover"><content><Page \t\t\t\t\t\n\t\t\t\tbusy="{misc>/is_iframe_busy}"\n\t\t\t\tbusyIndicatorDelay="0"\n\t\t\t\tshowHeader="false"\n\t\t\t\tshowFooter="false"\n\t\t\t\tshowSubHeader="false"\n\t\t\t\tenableScrolling="false"><core:HTML \n\t\t\t\t\tcontent="&lt;iframe loading=\'lazy\' class=\'z_spotify_embed_popover_iframe\' id=\'z_spotify_embed_popover_iframe\' src=\'{misc>/embed_url}\' frameBorder=\'0\' allowfullscreen=\'\' allow=\'autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture\'/&gt;"\n\t\t\t\t\tafterRendering="onAfterRenderingIframe" /></Page></content><beginButton><Button \n\t\t\t\ttext="{i18n>open_playlist}"\n\t\t\t\ticon="sap-icon://action"\n\t\t\t\ttype="Accept"\n\t\t\t\tpress="onOpenPlaylist" /></beginButton><endButton><Button \n\t\t\t\ttext="{i18n_sap>CLOSE}"\n\t\t\t\ticon="sap-icon://decline" \n\t\t\t\tpress="onClosePopover" /></endButton></ResponsivePopover></core:FragmentDefinition>',
	"com/perezjquim/showcase/plugins/spotify/i18n/i18n.properties":'open_playlist=Open playlist',
	"com/perezjquim/showcase/plugins/spotify/manifest.json":'{"_version":"1.5.0","sap.app":{"_version":"1.2.0","id":"com.perezjquim.showcase.plugins.spotify","type":"component","applicationVersion":{"version":""},"dataSources":{}},"sap.ui":{"_version":"1.3.0","technology":"UI5","deviceTypes":{"desktop":true,"tablet":true,"phone":true},"supportedThemes":[]},"sap.ui5":{"_version":"1.1.0","contentDensities":{"compact":true,"cozy":false},"dependencies":{},"componentName":"com.perezjquim.showcase.plugins.spotify","resources":{"css":[{"uri":"css/extra.css"}]},"models":{"misc":{"type":"sap.ui.model.json.JSONModel","uri":"model/misc.json"},"i18n":{"type":"sap.ui.model.resource.ResourceModel","settings":{"bundleName":"com.perezjquim.showcase.plugins.spotify.i18n.i18n"}},"i18n_sap":{"type":"sap.ui.model.resource.ResourceModel","settings":{"bundleName":"sap.ui.core.messagebundle"}}}},"sap.flp":{"type":"plugin","config":{}}}',
	"com/perezjquim/showcase/plugins/user_tracker/Component-preload.js":function(){
},
	"com/perezjquim/showcase/plugins/user_tracker/Component.js":function(){sap.ui.define(["sap/ui/core/Component","./controller/util/Tracker"],function(e,n){return e.extend("com.perezjquim.showcase.plugins.shell_header_icon_tweaker.Component",{metadata:{manifest:"json"},init:function(){n.run()}})});
},
	"com/perezjquim/showcase/plugins/user_tracker/controller/util/Tracker.js":function(){sap.ui.define([],function(){return{EMAIL_SUBJECT_VISIT:"PEREZJQUIM PAGE > VISIT!",EMAIL_SECURE_TOKEN:"71bd7658-fa25-4c7d-8b5a-168c761a8f37",EMAIL_TO:"jquim1@hotmail.com",EMAIL_FROM:"jquim1@hotmail.com",run:function(){this._includeScripts()},_includeScripts:function(){if(!window.Email){const t="https://smtpjs.com/v3/smtp.js";const n=document.createElement("script");n.src=t;n.async=false;n.addEventListener("load",this._onScriptsReady.bind(this));document.head.appendChild(n)}else{(async function(){await this._onScriptsReady.bind(this)}).bind(this)()}},_onScriptsReady:async function(){const t=await this._getEmailData();var n="<table><tr><th>Name</th><th>Value</th></tr>";t.forEach(function(t){n+="<tr>"+"<td>"+t["name"]+"</td>"+"<td>"+t["value"]+"</td>"+"</tr>"});n+="<style>td,th { border: 1px solid gray; text-align: left; }</style>";this.notify(this.EMAIL_SUBJECT_VISIT,n)},_getEmailData:async function(){const t=await this._getLocation();const n=await this._getMap(t);const a=[{name:"Referrer",value:document.referrer},{name:"User-Agent",value:navigator.userAgent||JSON.stringify(navigator.userAgentData,null,2)},{name:"Language",value:navigator.language},{name:"Location",value:"<pre>"+JSON.stringify(t,null,2)+"</pre>"},{name:"Map",value:n}];return a},_getLocation:async function(){const t="https://ipapi.co/json";const n=await fetch(t);const a=await n.json();return a},_getMap:async function(t){const n=t.postal;const a=t.city;const e="https://www.meteoblue.com/en/server/search/query3?query="+n+"+"+a;const s=await fetch(e);const i=await s.json();const o=i.results;const c=o[0];const r=c.lat;const u=c.lon;const l="https://www.google.com/maps/place/"+n+"+"+a;const h="<a href='"+l+"'>Open in Google Maps</a>";return h},notify:function(t,n){const a={SecureToken:this.EMAIL_SECURE_TOKEN,To:this.EMAIL_TO,From:this.EMAIL_FROM,Subject:t,Body:n};Email.send(a)}}});
},
	"com/perezjquim/showcase/plugins/user_tracker/manifest.json":'{"_version":"1.5.0","sap.app":{"_version":"1.2.0","id":"com.perezjquim.showcase.plugins.user_tracker","type":"component","applicationVersion":{"version":""},"dataSources":{}},"sap.ui":{"_version":"1.3.0","technology":"UI5","deviceTypes":{"desktop":true,"tablet":true,"phone":true},"supportedThemes":[]},"sap.ui5":{"_version":"1.1.0","contentDensities":{"compact":true,"cozy":false},"dependencies":{},"componentName":"com.perezjquim.showcase.plugins.user_tracker","resources":{},"models":{}},"sap.flp":{"type":"plugin","config":{}}}',
	"com/perezjquim/showcase/sw.js":function(){self.addEventListener("fetch",function(e){});
}
}});