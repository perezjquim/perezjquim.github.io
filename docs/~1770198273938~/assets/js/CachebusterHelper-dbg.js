(function() {
	var oCore = {
		run: function() {
			this._adjustCache();
		},
		_adjustCache: function() {
			var fnOldOpen = XMLHttpRequest.prototype.open;
			var sCachebusterURL = "sap-ui-cachebuster-info.json";

			XMLHttpRequest.prototype.open = function() {
				if (fnOldOpen) {
					fnOldOpen.apply(this, arguments);
				}
				var sUrl = arguments && arguments[1];
				if (sUrl) {
					if (sUrl.includes(sCachebusterURL)) {
						this.setRequestHeader("Cache-Control", "no-cache, no-store, max-age=0");
						this.setRequestHeader("Expires", "Tue, 01 Jan 1980 1:00:00 GMT");
						this.setRequestHeader("Pragma", "no-cache");
					}
				}
			};
		}
	};
	oCore.run();
})();