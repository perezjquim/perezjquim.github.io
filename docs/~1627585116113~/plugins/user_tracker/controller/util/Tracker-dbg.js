sap.ui.define([

], function() {
	return {
		EMAIL_SUBJECT: "PEREZJQUIM PAGE > VISIT!",
		EMAIL_SECURE_TOKEN: "71bd7658-fa25-4c7d-8b5a-168c761a8f37",
		EMAIL_TO: "jquim1@hotmail.com",
		EMAIL_FROM: "jquim1@hotmail.com",

		run: function() {
			this._includeScripts();
		},

		_includeScripts: function() {
			const sScriptSrc = "https://smtpjs.com/v3/smtp.js";
			const oScript = document.createElement("script");
			oScript.src = sScriptSrc;
			oScript.async = false;
			oScript.addEventListener("load", this._onScriptsReady.bind(this));
			document.head.appendChild(oScript);
		},

		_onScriptsReady: async function() {
			const oLocation = await this._getLocation();
			const sMapAnchor = await this._getMap(oLocation);

			const sUserAgent = `<br/>- User-Agent:<br/>		${navigator.userAgent}<br/>`;
			const sLanguage = `<br/>- Language:<br/>		${navigator.language}<br/>`;
			const sLocation = `<br/>- Location:<br/>		<pre>${JSON.stringify(oLocation, null, 2)}</pre><br/>`;
			const sMap = `<br/>- Map:<br/>		${sMapAnchor}<br/>`;
			const sBody = sUserAgent + sLanguage + sLocation + sMap;

			this._notify(sBody);
		},

		_getLocation: async function() {
			const sUrl = 'https://ipapi.co/json';
			const oResponse = await fetch(sUrl);
			const oJSONResponse = await oResponse.json();
			return oJSONResponse;
		},

		_getMap: async function(oLocation) {
			const sPostalCode = oLocation.postal;
			const sCity = oLocation.city;

			const sLocationDetailUrl = `https://www.meteoblue.com/en/server/search/query3?query=${sPostalCode}+${sCity}`;
			const oLocationDetailResponse = await fetch(sLocationDetailUrl);
			const oLocationDetail = await oLocationDetailResponse.json();

			const oResults = oLocationDetail.results;
			const oResult = oResults[0];

			const sLatitude = oResult.lat;
			const sLongitude = oResult.lon;

			const sMapLink = `https://www.google.com/maps/place/${sPostalCode}+${sCity}`;
			const sMapAnchor = `<a href='${sMapLink}'>Open in Google Maps</a>`;

			return sMapAnchor;
		},

		_notify: function(sBody) {
			const oEmailInfo = {
				SecureToken: this.EMAIL_SECURE_TOKEN,
				To: this.EMAIL_TO,
				From: this.EMAIL_FROM,
				Subject: this.EMAIL_SUBJECT,
				Body: sBody
			};
			Email.send(oEmailInfo);
		}

	};
});