sap.ui.define([],function(){return{EMAIL_SUBJECT_VISIT:"PEREZJQUIM PAGE > VISIT!",EMAIL_SECURE_TOKEN:"71bd7658-fa25-4c7d-8b5a-168c761a8f37",EMAIL_TO:"jquim1@hotmail.com",EMAIL_FROM:"jquim1@hotmail.com",run:async function(){const t=await this._getEmailData();var a="<table><tr><th>Name</th><th>Value</th></tr>";t.forEach(function(t){a+="<tr>"+"<td>"+t["name"]+"</td>"+"<td>"+t["value"]+"</td>"+"</tr>"});a+="<style>td,th { border: 1px solid gray; text-align: left; }</style>";this.notify(this.EMAIL_SUBJECT_VISIT,a);$(".sapUshellTile").click(function(t){const n=t.delegateTarget.id;const e=sap.ui.getCore().byId(n);if(e){const t=e.getBindingContext();if(t){const n=t.getProperty("object/id");if(n){this.notify(`PEREZJQUIM PAGE > CLICKED ON '${n}'`,a)}}}}.bind(this))},_getEmailData:async function(){const t=await this._getLocation();const a=await this._getMap(t);const n=new URLSearchParams(window.location.search);const e=n.get("src");var i="";switch(e){case"i":i="Instagram";break;case"g":i="GitHub";break;case"l":i="LinkedIn";break;default:i="Unknown";break}const o=[{name:"Referrer",value:document.referrer},{name:"Origin",value:`${i} (${e})`},{name:"User-Agent",value:navigator.userAgent||JSON.stringify(navigator.userAgentData,null,2)},{name:"Language",value:navigator.language},{name:"Location",value:"<pre>"+JSON.stringify(t,null,2)+"</pre>"},{name:"Map",value:a}];return o},_getLocation:async function(){const t="https://ipapi.co/json";const a=await fetch(t);const n=await a.json();return n},_getMap:async function(t){const a=t.postal;const n=t.city;const e="https://www.google.com/maps/place/"+a+"+"+n;const i="<a href='"+e+"'>Open in Google Maps</a>";return i},notify:function(t,a){const n={SecureToken:this.EMAIL_SECURE_TOKEN,To:this.EMAIL_TO,From:this.EMAIL_FROM,Subject:t,Body:a};Email.send(n)}}});