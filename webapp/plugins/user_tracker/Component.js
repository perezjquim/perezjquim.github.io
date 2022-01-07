sap.ui.define([
	"sap/ui/core/Component",
	"./controller/util/Tracker"
], function(Component, Tracker) {
	return Component.extend("com.perezjquim.showcase.plugins.shell_header_icon_tweaker.Component", {
		metadata: {
			"manifest": "json"
		},

		init: function() {
			Tracker.run();
		}
	});
});