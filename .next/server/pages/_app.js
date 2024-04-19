(() => {
var exports = {};
exports.id = 2888;
exports.ids = [2888];
exports.modules = {

/***/ 9912:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* reexport */ App)
});

// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(5893);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
;// CONCATENATED MODULE: ./src/hooks/useMagneticHover.js

const useMagneticHover = ()=>{
    (0,external_react_.useEffect)(()=>{
        const handleMouseMove = (event)=>{
            const magneticItems = document.querySelectorAll(".magnetic-item");
            magneticItems.forEach((item)=>{
                const rect = item.getBoundingClientRect();
                const x = rect.left + rect.width / 2;
                const y = rect.top + rect.height / 2;
                const offsetX = event.clientX - x;
                const offsetY = event.clientY - y;
                if (Math.abs(offsetX) <= rect.width / 3 && Math.abs(offsetY) <= rect.height / 3) {
                    item.style.transform = `translate3d(${offsetX * 0.05}px, ${offsetY * 0.05}px, 0)`;
                    item.style.transition = "transform 0.3s ease";
                } else {
                    item.style.transform = "translate3d(0, 0, 0)";
                    item.style.transition = "transform 0.3s ease";
                }
            });
        };
        const handleMouseEnter = (event)=>{
            const item = document.querySelector(".magnetic-item");
            if (item) {
                item.style.transition = "transform 0.3s ease";
            }
        };
        const handleMouseLeave = (event)=>{
            const item = document.querySelector(".magnetic-item");
            if (item) {
                item.style.transform = "translate3d(0, 0, 0)";
                item.style.transition = "transform 0.3s ease";
                setTimeout(()=>{
                    item.style.transition = "none";
                }, 300);
            }
        };
        document.addEventListener("mousemove", handleMouseMove);
        document.addEventListener("mouseenter", handleMouseEnter);
        document.addEventListener("mouseleave", handleMouseLeave);
        return ()=>{
            document.removeEventListener("mousemove", handleMouseMove);
            document.removeEventListener("mouseenter", handleMouseEnter);
            document.removeEventListener("mouseleave", handleMouseLeave);
        };
    }, []);
};
/* harmony default export */ const hooks_useMagneticHover = (useMagneticHover);

// EXTERNAL MODULE: ./node_modules/next/script.js
var script = __webpack_require__(4298);
var script_default = /*#__PURE__*/__webpack_require__.n(script);
// EXTERNAL MODULE: ./public/assets/css/bootstrap-icons.css
var bootstrap_icons = __webpack_require__(3059);
// EXTERNAL MODULE: ./node_modules/@fortawesome/fontawesome-free/css/all.min.css
var all_min = __webpack_require__(4595);
// EXTERNAL MODULE: ./public/assets/css/bootstrap.min.css
var bootstrap_min = __webpack_require__(8984);
// EXTERNAL MODULE: ./public/assets/css/boxicons.min.css
var boxicons_min = __webpack_require__(838);
// EXTERNAL MODULE: ./public/assets/css/swiper-bundle.min.css
var swiper_bundle_min = __webpack_require__(1408);
// EXTERNAL MODULE: ./public/assets/css/preloader.css
var preloader = __webpack_require__(22);
// EXTERNAL MODULE: ./public/assets/css/animate.min.css
var animate_min = __webpack_require__(2759);
// EXTERNAL MODULE: ./public/assets/css/style2.css
var style2 = __webpack_require__(5018);
// EXTERNAL MODULE: ./node_modules/react-modal-video/css/modal-video.css
var modal_video = __webpack_require__(1352);
// EXTERNAL MODULE: ./src/components/common/Preloader.js
var Preloader = __webpack_require__(8657);
;// CONCATENATED MODULE: ./src/pages/_app.js














function App({ Component , pageProps  }) {
    const [loading, setLoading] = (0,external_react_.useState)(false);
    (0,external_react_.useEffect)(()=>{
        setLoading(false);
        setTimeout(()=>{
            setLoading(true);
        }, 3000);
    }, []);
    hooks_useMagneticHover();
    (0,external_react_.useEffect)(()=>{
        Promise.resolve(/* import() */).then(__webpack_require__.t.bind(__webpack_require__, 7064, 23));
    }, []);
    return /*#__PURE__*/ jsx_runtime.jsx(jsx_runtime.Fragment, {
        children: loading ? /*#__PURE__*/ (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
            children: [
                /*#__PURE__*/ jsx_runtime.jsx(Component, {
                    ...pageProps
                }),
                /*#__PURE__*/ jsx_runtime.jsx((script_default()), {
                    id: "wow",
                    src: "/js/wow.min.js"
                }),
                /*#__PURE__*/ jsx_runtime.jsx((script_default()), {
                    id: "initWow",
                    strategy: "lazyOnload",
                    children: `new WOW().init();`
                })
            ]
        }) : /*#__PURE__*/ jsx_runtime.jsx(Preloader/* default */.Z, {})
    });
}

;// CONCATENATED MODULE: ./node_modules/next/dist/build/webpack/loaders/next-route-loader.js?page=%2F_app&absolutePagePath=private-next-pages%2F_app.js&preferredRegion=!

        // Next.js Route Loader
        
        
    

/***/ }),

/***/ 4595:
/***/ (() => {



/***/ }),

/***/ 1352:
/***/ (() => {



/***/ }),

/***/ 2759:
/***/ (() => {



/***/ }),

/***/ 3059:
/***/ (() => {



/***/ }),

/***/ 8984:
/***/ (() => {



/***/ }),

/***/ 838:
/***/ (() => {



/***/ }),

/***/ 22:
/***/ (() => {



/***/ }),

/***/ 5018:
/***/ (() => {



/***/ }),

/***/ 1408:
/***/ (() => {



/***/ }),

/***/ 7064:
/***/ ((module) => {

"use strict";
module.exports = require("bootstrap/dist/js/bootstrap");

/***/ }),

/***/ 2796:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/head-manager-context.js");

/***/ }),

/***/ 6689:
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ 6405:
/***/ ((module) => {

"use strict";
module.exports = require("react-dom");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [5893,6894,8760,4298,8657], () => (__webpack_exec__(9912)));
module.exports = __webpack_exports__;

})();