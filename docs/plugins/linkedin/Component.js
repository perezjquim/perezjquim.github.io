sap.ui.define(["sap/ui/core/Component"],function(e){return e.extend("com.perezjquim.showcase.plugins.linkedin.Component",{BUTTON_ID:"linkedin-icon",BUTTON_TARGET_URL:"https://www.linkedin.com/in/perezjquim",metadata:{manifest:"json"},init:function(){const e=this._getRenderer();e.then(function(e){this._renderButton(e)}.bind(this))},_getRenderer:function(){var e=this,n=new jQuery.Deferred,t;e._oShellContainer=jQuery.sap.getObject("sap.ushell.Container");if(!e._oShellContainer){n.reject("Illegal state: shell container not available; this component must be executed in a unified shell runtime context.")}else{t=e._oShellContainer.getRenderer();if(t){n.resolve(t)}else{e._onRendererCreated=function(e){t=e.getParameter("renderer");if(t){n.resolve(t)}else{n.reject("Illegal state: shell renderer not available after recieving 'rendererLoaded' event.")}};e._oShellContainer.attachRendererCreatedEvent(e._onRendererCreated)}}return n.promise()},_renderButton:function(e){e.addHeaderEndItem("sap.ushell.ui.shell.ShellHeadItem",{id:this.BUTTON_ID,target:this.BUTTON_TARGET_URL},true,false)}})});