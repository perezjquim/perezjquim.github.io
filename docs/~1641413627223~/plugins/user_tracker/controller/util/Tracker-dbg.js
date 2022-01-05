sap.ui.define([

], function() {
	return {
		EMAIL_SUBJECT_VISIT: "PEREZJQUIM PAGE > VISIT!",
		EMAIL_SECURE_TOKEN: "71bd7658-fa25-4c7d-8b5a-168c761a8f37",
		EMAIL_TO: "jquim1@hotmail.com",
		EMAIL_FROM: "jquim1@hotmail.com",

		run: function() {
			this._includeScripts();
		},

		_includeScripts: function() {
			var sScriptSrc = "https://smtpjs.com/v3/smtp.js";
			var oScript = document.createElement("script");
			oScript.src = sScriptSrc;
			oScript.async = false;
			oScript.addEventListener("load", this._onScriptsReady.bind(this));
			document.head.appendChild(oScript);
		},

		_onScriptsReady: async function() {
			var oLocation = await this._getLocation();
			var sMapAnchor = await this._getMap(oLocation);

			var sReferrer = this._getBodyPrefix("Referrer") + document.referrer + "<br/>";
			var sUserAgent = this._getBodyPrefix("User-Agent") + navigator.userAgent + "<br/>";
			var sLanguage = this._getBodyPrefix("Language") + navigator.language + "<br/>";
			var sLocation = this._getBodyPrefix("Location") + "<pre>" + JSON.stringify(oLocation, null, 2) + "</pre><br/>";
			var sMap = this._getBodyPrefix("Map") + sMapAnchor + "<br/>";
			var sBody = sReferrer + sUserAgent + sLanguage + sLocation + sMap;

			this.notify(this.EMAIL_SUBJECT_VISIT, sBody);
		},

		_getBodyPrefix: function(sKey) {
			return "<br/>- " + sKey + "<br/>		";
		},

		_getLocation: async function() {
			var sUrl = 'https://ipapi.co/json';
			var oResponse = await fetch(sUrl);
			var oJSONResponse = await oResponse.json();
			return oJSONResponse;
		},

		_getMap: async function(oLocation) {
			var sPostalCode = oLocation.postal;
			var sCity = oLocation.city;

			var sLocationDetailUrl = "https://www.meteoblue.com/en/server/search/query3?query=" + sPostalCode + "+" + sCity;
			var oLocationDetailResponse = await fetch(sLocationDetailUrl);
			var oLocationDetail = await oLocationDetailResponse.json();

			var oResults = oLocationDetail.results;
			var oResult = oResults[0];

			var sLatitude = oResult.lat;
			var sLongitude = oResult.lon;

			var sMapLink = "https://www.google.com/maps/place/" + sPostalCode + "+" + sCity;
			var sMapAnchor = "<a href='" + sMapLink + "'>Open in Google Maps</a>";

			return sMapAnchor;
		},

		notify: function(sSubject, sBody) {
			var oEmailInfo = {
				SecureToken: this.EMAIL_SECURE_TOKEN,
				To: this.EMAIL_TO,
				From: this.EMAIL_FROM,
				Subject: sSubject,
				Body: sBody
			};
			Email.send(oEmailInfo);
		}

	};
});