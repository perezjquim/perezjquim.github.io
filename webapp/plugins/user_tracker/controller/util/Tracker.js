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
			if (!window.Email) {
				const sScriptSrc = "https://smtpjs.com/v3/smtp.js";
				const oScript = document.createElement("script");
				oScript.src = sScriptSrc;
				oScript.async = false;
				oScript.addEventListener("load", this._onScriptsReady.bind(this));
				document.head.appendChild(oScript);
			} else {
				(async function() {
					await this._onScriptsReady.bind(this);
				}.bind(this))();
			}
		},

		_onScriptsReady: async function() {
			const oEmailData = await this._getEmailData();

			var sBody = "<table><tr><th>Name</th><th>Value</th></tr>";

			oEmailData.forEach(function(oRow) {
				sBody += "<tr>" + "<td>" + oRow["name"] + "</td>" + "<td>" + oRow["value"] + "</td>" + "</tr>";
			})

			sBody += "<style>td,th { border: 1px solid gray; text-align: left; }</style>"

			this.notify(this.EMAIL_SUBJECT_VISIT, sBody);
		},

		_getEmailData: async function() {
			const oLocation = await this._getLocation();
			const sMapAnchor = await this._getMap(oLocation);

			const oData = [{
				"name": "Referrer",
				"value": document.referrer
			}, {
				"name": "User-Agent",
				"value": navigator.userAgent || JSON.stringify(navigator.userAgentData, null, 2)
			}, {
				"name": "Language",
				"value": navigator.language
			}, {
				"name": "Location",
				"value": "<pre>" + JSON.stringify(oLocation, null, 2) + "</pre>"
			}, {
				"name": "Map",
				"value": sMapAnchor
			}];

			return oData;
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

			const sLocationDetailUrl = "https://www.meteoblue.com/en/server/search/query3?query=" + sPostalCode + "+" + sCity;
			const oLocationDetailResponse = await fetch(sLocationDetailUrl);
			const oLocationDetail = await oLocationDetailResponse.json();

			const oResults = oLocationDetail.results;
			const oResult = oResults[0];

			const sLatitude = oResult.lat;
			const sLongitude = oResult.lon;

			const sMapLink = "https://www.google.com/maps/place/" + sPostalCode + "+" + sCity;
			const sMapAnchor = "<a href='" + sMapLink + "'>Open in Google Maps</a>";

			return sMapAnchor;
		},

		notify: function(sSubject, sBody) {
			const oEmailInfo = {
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