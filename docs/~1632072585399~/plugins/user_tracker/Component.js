sap.ui.define(["sap/ui/core/Component","./controller/util/Tracker"],function(e,n){return e.extend("com.perezjquim.showcase.plugins.shell_header_icon_tweaker.Component",{metadata:{manifest:"json"},init:function(){const e=this._getRenderer();e.then(function(e){n.run()}.bind(this))},_getRenderer:function(){var e=this,n=new jQuery.Deferred,r;e._oShellContainer=jQuery.sap.getObject("sap.ushell.Container");if(!e._oShellContainer){n.reject("Illegal state: shell container not available; this component must be executed in a unified shell runtime context.")}else{r=e._oShellContainer.getRenderer();if(r){n.resolve(r)}else{e._onRendererCreated=function(e){r=e.getParameter("renderer");if(r){n.resolve(r)}else{n.reject("Illegal state: shell renderer not available after recieving 'rendererLoaded' event.")}};e._oShellContainer.attachRendererCreatedEvent(e._onRendererCreated)}}return n.promise()}})});