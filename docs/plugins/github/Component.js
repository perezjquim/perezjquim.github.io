sap.ui.define(["sap/ui/core/Component"],function(e){return e.extend("com.perezjquim.showcase.plugins.github.Component",{BUTTON_ID:"github-icon",BUTTON_TEXT:"GitHub",BUTTON_TARGET_URL:"https://github.com/perezjquim",metadata:{manifest:"json"},init:function(){const e=this._getRenderer();e.then(function(e){this._renderButton(e)}.bind(this))},_getRenderer:function(){var e=this,t=new jQuery.Deferred,n;e._oShellContainer=jQuery.sap.getObject("sap.ushell.Container");if(!e._oShellContainer){t.reject("Illegal state: shell container not available; this component must be executed in a unified shell runtime context.")}else{n=e._oShellContainer.getRenderer();if(n){t.resolve(n)}else{e._onRendererCreated=function(e){n=e.getParameter("renderer");if(n){t.resolve(n)}else{t.reject("Illegal state: shell renderer not available after recieving 'rendererLoaded' event.")}};e._oShellContainer.attachRendererCreatedEvent(e._onRendererCreated)}}return t.promise()},_renderButton:function(e){e.addHeaderEndItem("sap.ushell.ui.shell.ShellHeadItem",{id:this.BUTTON_ID,text:this.BUTTON_TEXT,target:this.BUTTON_TARGET_URL},true,false)}})});