$(document).ready(function(){function o(o,e){for(const t of e)for(var n in t){const e=new RegExp("@"+n+"@","g");o=o.replace(e,t[n])}return o}function e(o,e){$.ajax({type:"GET",url:"templates/"+o,dataType:"text",success:e})}$.get("config/home.json",n=>{!function(n){e("home/base.xml",t=>{const i=o(t,[n]);e("home/social-item.xml",e=>{$("[home]").prepend(i),n.social.forEach(n=>{const t=o(e,[n]);$("[social]").append(t)})})})}(n),$.get("config/tabs.json",n=>{!function(n){e("repo.xml",t=>{e("portfolio-item.xml",e=>{n.forEach(n=>{const i=o(t,[n]);$("[portfolio-items]").append(i),n.repos.forEach(t=>{const i=o(e,[n,t]);$(".slides").append(i)})})})})}(n),$.get("config/config.json",o=>{const e=o.configure,n=o.initialize;Reveal.configure(e),Reveal.initialize(n)})})})});