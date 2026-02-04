(function() {
    var oCore = {
        run: function() {
            this._adjustSearchParams();
        },
        _adjustSearchParams: function() {
            window["sap-ushell-config"] = {};
            if (window.URLSearchParams && !document.location.href.includes("sap-ushell-sandbox-config")) {
                var oSearchParams = new URLSearchParams(window.location.search);
                oSearchParams.set('sap-ushell-sandbox-config', '/appconfig/fioriSandboxConfig');
                window.location.search = oSearchParams;
            }
        }
    };
    oCore.run();
})();