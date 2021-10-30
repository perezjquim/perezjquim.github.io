(function() {
    var oCore = {
        run: function() {
            this._cleanup();
            this._registerSW();
            window.addEventListener("beforeunload", this._cleanup.bind(this));
        },
        _registerSW: function() {
            if (navigator.serviceWorker) {
                navigator.serviceWorker.register('/sw.js');
            }
        },
        _cleanup: function() {
            if (navigator.serviceWorker) {
                navigator.serviceWorker
                    .getRegistrations()
                    .then(function(registrations) {
                        for (let registration of registrations) {
                            registration.unregister();
                        }
                    });
            }
        }
    };
    oCore.run();
})();