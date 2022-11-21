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
	"com/perezjquim/showcase/apps/generic_readme/view/Home.view.xml":'<mvc:View \n    controllerName="com.perezjquim.showcase.generic_readme.controller.Home" \n    xmlns="sap.m"\n    xmlns:core="sap.ui.core"\n    xmlns:mvc="sap.ui.core.mvc"><Page showHeader="false" showFooter="false" showSubHeader="false" enableScrolling="false"><core:HTML id="embed-repo"/></Page></mvc:View>',
	"com/perezjquim/showcase/assets/js/CachebusterHelper.js":function(){(function(){var e={run:function(){this._adjustCache()},_adjustCache:function(){var e=XMLHttpRequest.prototype.open;var t="sap-ui-cachebuster-info.json";XMLHttpRequest.prototype.open=function(){if(e){e.apply(this,arguments)}var a=arguments&&arguments[1];if(a){if(a.includes(t)){this.setRequestHeader("Cache-Control","no-cache, no-store, max-age=0");this.setRequestHeader("Expires","Tue, 01 Jan 1980 1:00:00 GMT");this.setRequestHeader("Pragma","no-cache")}}}}};e.run()})();
},
	"com/perezjquim/showcase/assets/js/SWHelper.js":function(){(function(){var e={run:function(){this._cleanup();this._registerSW();window.addEventListener("beforeunload",this._cleanup.bind(this))},_registerSW:function(){if(navigator.serviceWorker){navigator.serviceWorker.register("/sw.js")}},_cleanup:function(){if(navigator.serviceWorker){navigator.serviceWorker.getRegistrations().then(function(e){for(let r of e){r.unregister()}})}}};e.run()})();
},
	"com/perezjquim/showcase/assets/js/URLHelper.js":function(){(function(){var a={run:function(){this._adjustSearchParams()},_adjustSearchParams:function(){window["sap-ushell-config"]={};if(window.URLSearchParams&&!document.location.href.includes("sap-ushell-sandbox-config")){var a=new URLSearchParams(window.location.search);a.set("sap-ushell-sandbox-config","/appconfig/fioriSandboxConfig");window.location.search=a}}};a.run()})();
},
	"com/perezjquim/showcase/custom_tiles/embed_tile/Component-preload.js":function(){
},
	"com/perezjquim/showcase/custom_tiles/embed_tile/Component.js":function(){sap.ui.define(["sap/ui/core/UIComponent","sap/ui/Device"],function(t,e){"use strict";return t.extend("com.perezjquim.showcase.custom_tiles.embed_tile.Component",{metadata:{manifest:"json"},init:function(){t.prototype.init.apply(this,arguments);const e=this.getModel("config");const i=this.getComponentData();e.setData(i&&i.properties)},onAfterRendering:function(){this._hideOuterTile()},_hideOuterTile:function(){const t=this.oContainer;const e=t.getParent();e.addStyleClass("z_outer_tile")}})});
},
	"com/perezjquim/showcase/custom_tiles/embed_tile/controller/Tile.controller.js":function(){sap.ui.define(["sap/ui/core/mvc/Controller"],function(e){return e.extend("com.perezjquim.showcase.custom_tiles.embed_tile.controller.Tile",{formatContent:function(e){return`<embed src='${e}' width='100%' height='100%'/>`}})});
},
	"com/perezjquim/showcase/custom_tiles/embed_tile/manifest.json":'{"_version":"1.12.0","sap.app":{"id":"com.perezjquim.showcase.custom_tiles.embed_tile","type":"application","i18n":"i18n/i18n.properties","applicationVersion":{"version":"1.0.0"},"sourceTemplate":{"id":"servicecatalog.connectivityComponentForManifest","version":"0.0.0"},"dataSources":{}},"sap.ui":{"technology":"UI5","icons":{},"deviceTypes":{"desktop":true,"tablet":true,"phone":true}},"sap.ui5":{"rootView":{"viewName":"com.perezjquim.showcase.custom_tiles.embed_tile.view.Tile","type":"XML","async":true},"dependencies":{"minUI5Version":"1.52.16","libs":{"sap.ui.layout":{},"sap.ui.core":{},"sap.m":{}}},"contentDensities":{"compact":true,"cozy":true},"models":{"i18n":{"type":"sap.ui.model.resource.ResourceModel","settings":{"bundleName":"com.perezjquim.showcase.custom_tiles.embed_tile.i18n.i18n"}},"config":{"type":"sap.ui.model.json.JSONModel"}},"resources":{"css":[{"uri":"css/extra.css"}]},"routing":{"config":{"routerClass":"sap.m.routing.Router","viewType":"XML","async":true,"controlId":"app","viewPath":"com.perezjquim.showcase.custom_tiles.embed_tile.view","controlAggregation":"pages"}}}}',
	"com/perezjquim/showcase/custom_tiles/embed_tile/view/Tile.view.xml":'<mvc:View \n    xmlns="sap.m"\n\txmlns:core="sap.ui.core"\n    xmlns:mvc="sap.ui.core.mvc"\n\tcontrollerName="com.perezjquim.showcase.custom_tiles.embed_tile.controller.Tile"><GenericTile\n\t\tclass="z_embed_tile"\n\t\tframeType="TwoByOne"\n\t\tpressEnabled="false"><TileContent><core:HTML content="{ path: \'config>/embed_url\', formatter: \'.formatContent\' }"\t/></TileContent></GenericTile></mvc:View>',
	"com/perezjquim/showcase/custom_tiles/overview_tile/Component-preload.js":function(){
},
	"com/perezjquim/showcase/custom_tiles/overview_tile/Component.js":function(){sap.ui.define(["sap/ui/core/UIComponent","sap/ui/Device"],function(e,t){"use strict";return e.extend("com.perezjquim.showcase.custom_tiles.overview_tile.Component",{metadata:{manifest:"json"},init:function(){e.prototype.init.apply(this,arguments)},onAfterRendering:function(){this._hideOuterTile()},_hideOuterTile:function(){const e=this.oContainer;const t=e.getParent();t.addStyleClass("z_outer_tile")}})});
},
	"com/perezjquim/showcase/custom_tiles/overview_tile/manifest.json":'{"_version":"1.12.0","sap.app":{"id":"com.perezjquim.showcase.custom_tiles.overview_tile","type":"application","i18n":"i18n/i18n.properties","applicationVersion":{"version":"1.0.0"},"sourceTemplate":{"id":"servicecatalog.connectivityComponentForManifest","version":"0.0.0"},"dataSources":{}},"sap.ui":{"technology":"UI5","icons":{},"deviceTypes":{"desktop":true,"tablet":true,"phone":true}},"sap.ui5":{"rootView":{"viewName":"com.perezjquim.showcase.custom_tiles.overview_tile.view.Tile","type":"XML","async":true},"dependencies":{"minUI5Version":"1.52.16","libs":{"sap.ui.layout":{},"sap.ui.core":{},"sap.m":{}}},"contentDensities":{"compact":true,"cozy":true},"models":{"i18n":{"type":"sap.ui.model.resource.ResourceModel","settings":{"bundleName":"com.perezjquim.showcase.custom_tiles.overview_tile.i18n.i18n"}},"config":{"type":"sap.ui.model.json.JSONModel","uri":"model/config.json"}},"resources":{"css":[{"uri":"css/extra.css"}]},"routing":{"config":{"routerClass":"sap.m.routing.Router","viewType":"XML","async":true,"controlId":"app","viewPath":"com.perezjquim.showcase.custom_tiles.overview_tile.view","controlAggregation":"pages"}}}}',
	"com/perezjquim/showcase/custom_tiles/overview_tile/view/Tile.view.xml":'<mvc:View \n    xmlns="sap.m"\n    xmlns:mvc="sap.ui.core.mvc"><SlideTile tiles="{config>/slides}" displayTime="10000"><tiles><GenericTile\n\t\t\t\tbackgroundImage="custom_tiles/overview_tile/images/{config>image_name}"\n\t\t\t\tframeType="TwoByOne"\n\t\t\t\tpressEnabled="false"><TileContent footer="{= ${config>footer} || \'\' }"><NewsContent\n\t\t\t\t\t\tcontentText="{= ${config>contentText} || \'\' }"\n\t\t\t\t\t\tsubheader="{= ${config>subheader} || \'\' }" /></TileContent></GenericTile></tiles></SlideTile></mvc:View>',
	"com/perezjquim/showcase/custom_tiles/social_tile/Component-preload.js":function(){
},
	"com/perezjquim/showcase/custom_tiles/social_tile/Component.js":function(){sap.ui.define(["sap/ui/core/UIComponent","sap/ui/Device"],function(t,e){"use strict";return t.extend("com.perezjquim.showcase.custom_tiles.social_tile.Component",{metadata:{manifest:"json"},init:function(){t.prototype.init.apply(this,arguments);const e=this.getModel("config");const i=this.getComponentData();e.setData(i&&i.properties)}})});
},
	"com/perezjquim/showcase/custom_tiles/social_tile/controller/Tile.controller.js":function(){sap.ui.define(["sap/ui/core/mvc/Controller"],function(t){return t.extend("com.perezjquim.showcase.custom_tiles.social_tile.controller.Tile",{onAfterRendering:function(t){const n=t.getSource();const o=n.getModel("config");const e=o.getProperty("/tile_background_color");if(e){const t=n&&n.getContent()&&n.getContent()[0];const o=t.getDomRef();$(o).css("background-color",e)}},onTilePress:function(t){const n=t.getSource();const o=n.getModel("config");const e=o.getProperty("/target_url");window.open(e)},fetchCount:async function(t,n){try{if(t){const o=await fetch(`https://api.allorigins.win/get?url=${encodeURIComponent(t)}`);if(o.ok){const t=await o.json();const e=t.contents;if(n){const t=JSON.parse(e);return n.split(".").reduce(function(t,n){return t?t[n]:null},t)}else{const t=e;return t}}}}catch(t){console.warn(t)}}})});
},
	"com/perezjquim/showcase/custom_tiles/social_tile/manifest.json":'{"_version":"1.12.0","sap.app":{"id":"com.perezjquim.showcase.custom_tiles.social_tile","type":"application","i18n":"i18n/i18n.properties","applicationVersion":{"version":"1.0.0"},"sourceTemplate":{"id":"servicecatalog.connectivityComponentForManifest","version":"0.0.0"},"dataSources":{}},"sap.ui":{"technology":"UI5","icons":{},"deviceTypes":{"desktop":true,"tablet":true,"phone":true}},"sap.ui5":{"rootView":{"viewName":"com.perezjquim.showcase.custom_tiles.social_tile.view.Tile","type":"XML","async":true},"dependencies":{"minUI5Version":"1.52.16","libs":{"sap.ui.layout":{},"sap.ui.core":{},"sap.m":{}}},"contentDensities":{"compact":true,"cozy":true},"models":{"i18n":{"type":"sap.ui.model.resource.ResourceModel","settings":{"bundleName":"com.perezjquim.showcase.custom_tiles.social_tile.i18n.i18n"}},"config":{"type":"sap.ui.model.json.JSONModel"}},"resources":{"css":[{"uri":"css/extra.css"}]},"routing":{"config":{"routerClass":"sap.m.routing.Router","viewType":"XML","async":true,"controlId":"app","viewPath":"com.perezjquim.showcase.custom_tiles.social_tile.view","controlAggregation":"pages"}}}}',
	"com/perezjquim/showcase/custom_tiles/social_tile/view/Tile.view.xml":'<mvc:View \n    xmlns="sap.m"\n    xmlns:mvc="sap.ui.core.mvc"\n    controllerName="com.perezjquim.showcase.custom_tiles.social_tile.controller.Tile"><GenericTile header="{config>/header}" press="onTilePress"><TileContent><NumericContent \n\t\t\t\tnullifyValue="false"\n\t\t\t\ticon="{config>/icon_src}"\n\t\t\t\tvalue="{ \n\t\t\t\t\tparts: \n\t\t\t\t\t[\n\t\t\t\t\t\t\'config>/count_endpoint_url\',\n\t\t\t\t\t\t\'config>/count_endpoint_property\'\n\t\t\t\t\t],\n\t\t\t\t\tformatter: \'.fetchCount\'\n\t\t\t\t}"/></TileContent></GenericTile></mvc:View>',
	"com/perezjquim/showcase/manifest.json":'{"_version":"1.12.0","sap.app":{"id":"com.perezjquim.showcase","type":"application","dataSources":{}},"sap.ui":{},"sap.ui5":{}}',
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
	"com/perezjquim/showcase/plugins/user_tracker/Component-preload.js":function(){
},
	"com/perezjquim/showcase/plugins/user_tracker/Component.js":function(){sap.ui.define(["sap/ui/core/Component","./controller/util/Tracker"],function(e,n){return e.extend("com.perezjquim.showcase.plugins.user_tracker.Component",{metadata:{manifest:"json"},init:function(){n.run()}})});
},
	"com/perezjquim/showcase/plugins/user_tracker/controller/util/Tracker.js":function(){sap.ui.define([],function(){return{EMAIL_SUBJECT_VISIT:"PEREZJQUIM PAGE > VISIT!",EMAIL_SECURE_TOKEN:"71bd7658-fa25-4c7d-8b5a-168c761a8f37",EMAIL_TO:"jquim1@hotmail.com",EMAIL_FROM:"jquim1@hotmail.com",run:async function(){const t=await this._getEmailData();var n="<table><tr><th>Name</th><th>Value</th></tr>";t.forEach(function(t){n+="<tr>"+"<td>"+t["name"]+"</td>"+"<td>"+t["value"]+"</td>"+"</tr>"});n+="<style>td,th { border: 1px solid gray; text-align: left; }</style>";this.notify(this.EMAIL_SUBJECT_VISIT,n);const a=$(".sapUshellTile").control();a.forEach(function(t){const a=t.getBindingContext();if(a){const e=a.getProperty("object/id");if(e){t.attachPress(function(){this.notify(`PEREZJQUIM PAGE > CLICKED ON '${e}'`,n)}.bind(this))}}}.bind(this))},_getEmailData:async function(){const t=await this._getLocation();const n=await this._getMap(t);const a=new URLSearchParams(window.location.search);const e=a.get("src");var i="";switch(e){case"i":i="Instagram";break;case"g":i="GitHub";break;case"l":i="LinkedIn";break;default:i="Unknown";break}const o=[{name:"Referrer",value:document.referrer},{name:"Origin",value:`${i} (${e})`},{name:"User-Agent",value:navigator.userAgent||JSON.stringify(navigator.userAgentData,null,2)},{name:"Language",value:navigator.language},{name:"Location",value:"<pre>"+JSON.stringify(t,null,2)+"</pre>"},{name:"Map",value:n}];return o},_getLocation:async function(){const t="https://ipapi.co/json";const n=await fetch(t);const a=await n.json();return a},_getMap:async function(t){const n=t.postal;const a=t.city;const e="https://www.google.com/maps/place/"+n+"+"+a;const i="<a href='"+e+"'>Open in Google Maps</a>";return i},notify:function(t,n){const a={SecureToken:this.EMAIL_SECURE_TOKEN,To:this.EMAIL_TO,From:this.EMAIL_FROM,Subject:t,Body:n};Email.send(a)}}});
},
	"com/perezjquim/showcase/plugins/user_tracker/manifest.json":'{"_version":"1.5.0","sap.app":{"_version":"1.2.0","id":"com.perezjquim.showcase.plugins.user_tracker","type":"component","applicationVersion":{"version":""},"dataSources":{}},"sap.ui":{"_version":"1.3.0","technology":"UI5","deviceTypes":{"desktop":true,"tablet":true,"phone":true},"supportedThemes":[]},"sap.ui5":{"_version":"1.1.0","contentDensities":{"compact":true,"cozy":false},"dependencies":{},"componentName":"com.perezjquim.showcase.plugins.user_tracker","resources":{"js":[{"uri":"./static/smtp.js"}]},"models":{}},"sap.flp":{"type":"plugin","config":{}}}',
	"com/perezjquim/showcase/plugins/user_tracker/static/smtp.js":'var Email={send:function(e){return new Promise(function(n,t){e.nocache=Math.floor(1e6*Math.random()+1),e.Action="Send";var a=JSON.stringify(e);Email.ajaxPost("https://smtpjs.com/v3/smtpjs.aspx?",a,function(e){n(e)})})},ajaxPost:function(e,n,t){var a=Email.createCORSRequest("POST",e);a.setRequestHeader("Content-type","application/x-www-form-urlencoded"),a.onload=function(){var e=a.responseText;null!=t&&t(e)},a.send(n)},ajax:function(e,n){var t=Email.createCORSRequest("GET",e);t.onload=function(){var e=t.responseText;null!=n&&n(e)},t.send()},createCORSRequest:function(e,n){var t=new XMLHttpRequest;return"withCredentials"in t?t.open(e,n,!0):"undefined"!=typeof XDomainRequest?(t=new XDomainRequest).open(e,n):t=null,t}};',
	"com/perezjquim/showcase/sw.js":function(){self.addEventListener("fetch",function(e){});
}
}});
