// Google Analytics initialization
// This file is loaded externally to comply with Content Security Policy
// See: /docs/CSP.md for details

/* global dataLayer */
window.dataLayer = window.dataLayer || [];
function gtag() {
  dataLayer.push(arguments);
}
window.gtag = gtag;
