sap.ui.define([
	"sap/ui/core/Component",
	"./controller/util/Tracker"
], function(Component, Tracker) {
	return Component.extend("com.perezjquim.showcase.plugins.user_tracker.Component", {
		metadata: {
			"manifest": "json"
		},

		init: function() {
			Tracker.run();
		}
	});
});