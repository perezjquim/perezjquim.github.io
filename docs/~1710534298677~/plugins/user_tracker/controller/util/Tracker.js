sap.ui.define([],function(){return{EMAIL_SUBJECT_VISIT:"PEREZJQUIM PAGE > VISIT!",EMAIL_SECURE_TOKEN:"71bd7658-fa25-4c7d-8b5a-168c761a8f37",EMAIL_TO:"jquim1@hotmail.com",EMAIL_FROM:"jquim1@hotmail.com",run:async function(){const t=await this._getEmailData();var n="<table><tr><th>Name</th><th>Value</th></tr>";t.forEach(function(t){n+="<tr>"+"<td>"+t["name"]+"</td>"+"<td>"+t["value"]+"</td>"+"</tr>"});n+="<style>td,th { border: 1px solid gray; text-align: left; }</style>";this.notify(this.EMAIL_SUBJECT_VISIT,n);const a=$(".sapUshellTile").control();a.forEach(function(t){const a=t.getBindingContext();if(a){const e=a.getProperty("object/id");if(e){t.attachPress(function(){this.notify(`PEREZJQUIM PAGE > CLICKED ON '${e}'`,n)}.bind(this))}}}.bind(this))},_getEmailData:async function(){const t=await this._getLocation();const n=await this._getMap(t);const a=new URLSearchParams(window.location.search);const e=a.get("src");var i="";switch(e){case"i":i="Instagram";break;case"g":i="GitHub";break;case"l":i="LinkedIn";break;default:i="Unknown";break}const o=[{name:"Referrer",value:document.referrer},{name:"Origin",value:`${i} (${e})`},{name:"User-Agent",value:navigator.userAgent||JSON.stringify(navigator.userAgentData,null,2)},{name:"Language",value:navigator.language},{name:"Location",value:"<pre>"+JSON.stringify(t,null,2)+"</pre>"},{name:"Map",value:n}];return o},_getLocation:async function(){const t="https://ipapi.co/json";const n=await fetch(t);const a=await n.json();return a},_getMap:async function(t){const n=t.postal;const a=t.city;const e="https://www.google.com/maps/place/"+n+"+"+a;const i="<a href='"+e+"'>Open in Google Maps</a>";return i},notify:function(t,n){const a={SecureToken:this.EMAIL_SECURE_TOKEN,To:this.EMAIL_TO,From:this.EMAIL_FROM,Subject:t,Body:n};Email.send(a)}}});