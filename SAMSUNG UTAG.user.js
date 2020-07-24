// ==UserScript==
// @name         SAMSUNG UTAG
// @namespace    UTAG Injection
// @version      0.1
// @description  Inject Tealium Script on Samsung Site when tealium=true is appended in the URL
// @author       Catherine
// @include       *samsung.com/*

// ==/UserScript==
var check_value = sessionStorage['tealium_script'];

if (document.URL.indexOf("tealium=true") > -1 || check_value == "true"){
    sessionStorage['tealium_script'] = "true";
    (function(a,b,c,d){
        a='//tags.tiqcdn.com/utag/samsung-gmo/khq/dev/utag.js';
        b=document;c='script';d=b.createElement(c);d.src=a;d.type='text/java'+c;d.async=true;
        a=b.getElementsByTagName(c)[0];a.parentNode.insertBefore(d,a);
    })();
}
