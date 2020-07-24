// ==UserScript==
// @name         SAMSUNG UTAG
// @namespace    UTAG Injection
// @version      0.1
// @description  try to take over the world!
// @author       Catherine
// @include       *catherineszeto.com/*

// ==/UserScript==

(function(a,b,c,d){
    a='//tags.tiqcdn.com/utag/samsung-gmo/khq/dev/utag.js';
    b=document;c='script';d=b.createElement(c);d.src=a;d.type='text/java'+c;d.async=true;
    a=b.getElementsByTagName(c)[0];a.parentNode.insertBefore(d,a);
})();