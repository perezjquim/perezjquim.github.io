sap.ui.define([
	"sap/ui/core/Component"
], function(Component) {
	return Component.extend("com.perezjquim.showcase.plugins.shell_header_icon_tweaker.Component", {
		metadata: {
			"manifest": "json"
		},

		init: function() {
			this._replaceShellHeaderIcon();
		},

		_replaceShellHeaderIcon: function() {
			const sNewSrc = "/assets/images/icon.jpeg";
			$("#shell-header-icon").attr('src', sNewSrc);
		}
	});
});