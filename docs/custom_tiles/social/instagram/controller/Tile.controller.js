sap.ui.define(["sap/ui/core/mvc/Controller"],function(o){return o.extend("com.perezjquim.showcase.custom_tiles.social.instagram.controller.Tile",{onPress:function(o){const e=o.getSource();const t=e.getModel("config");const n=t.getProperty("/notification_subject");window.Tracker.notify(n,"");const r=t.getProperty("/target_url");window.open(r)}})});