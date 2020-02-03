function(module, __webpack_exports__, __webpack_require__) {
    "use strict";
    var detect_ua__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(50),
        detect_ua__WEBPACK_IMPORTED_MODULE_0___default = __webpack_require__.n(detect_ua__WEBPACK_IMPORTED_MODULE_0__);
    const device = new detect_ua__WEBPACK_IMPORTED_MODULE_0__.DetectUA,
        MAX_DPR = 1,
        dpr = Math.min(MAX_DPR, window.devicePixelRatio || 1),
        settings = {
            dpr: dpr,
            fxaa: !1,
            dom: device.isDesktop,
            device: device,
            boarding: !0,
            lottie: !0,
            bodymovin: !1,
            particles: !0,
            orbit: !1
        },
        search = window.location.search;
    "Internet Explorer" !== device.browser.name && "Microsoft Edge" !== device.browser.name || (settings.boarding = !1, settings.dom = !1), "Internet Explorer" === device.browser.name && document.documentElement.classList.add("show-notsupported");
    for (const k in settings) {
        const re = new RegExp(`${k}=(.+?);`),
            match = search.match(re);
        match && (settings[k] = eval(match[1]))
    }
    settings.dom || document.documentElement.classList.add("static"), __webpack_exports__.a = settings
}
