(() => {
var exports = {};
exports.id = 405;
exports.ids = [405];
exports.modules = {

/***/ 5134:
/***/ ((module) => {

// Exports
module.exports = {
	"latest": "featured-posts_latest__IxJlP"
};


/***/ }),

/***/ 4604:
/***/ ((module) => {

// Exports
module.exports = {
	"hero": "hero_hero__oA_rp",
	"image": "hero_image__OntSE"
};


/***/ }),

/***/ 4578:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ pages),
  "getStaticProps": () => (/* binding */ getStaticProps)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: external "next/head"
var head_ = __webpack_require__(968);
var head_default = /*#__PURE__*/__webpack_require__.n(head_);
// EXTERNAL MODULE: ./components/posts/posts-grid.js + 1 modules
var posts_grid = __webpack_require__(8794);
// EXTERNAL MODULE: ./components/home-page/featured-posts.module.css
var featured_posts_module = __webpack_require__(5134);
var featured_posts_module_default = /*#__PURE__*/__webpack_require__.n(featured_posts_module);
;// CONCATENATED MODULE: ./components/home-page/featured-posts.js



function FeaturedPosts({ posts  }) {
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("section", {
        className: (featured_posts_module_default()).latest,
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("h2", {
                children: "Featured Posts"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(posts_grid/* default */.Z, {
                posts: posts
            })
        ]
    });
}
/* harmony default export */ const featured_posts = (FeaturedPosts);

// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(5675);
var image_default = /*#__PURE__*/__webpack_require__.n(next_image);
// EXTERNAL MODULE: ./components/home-page/hero.module.css
var hero_module = __webpack_require__(4604);
var hero_module_default = /*#__PURE__*/__webpack_require__.n(hero_module);
;// CONCATENATED MODULE: ./components/home-page/hero.js



function Hero() {
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("section", {
        className: (hero_module_default()).hero,
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: (hero_module_default()).image,
                children: /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                    src: "/images/site/ProfileCraig.png",
                    alt: "Author's image",
                    width: 300,
                    height: 300
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("h1", {
                children: "Hi, I'm Craig"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("p", {
                children: "I blog about web development."
            })
        ]
    });
}
/* harmony default export */ const hero = (Hero);

// EXTERNAL MODULE: ./lib/posts-util.js
var posts_util = __webpack_require__(2633);
;// CONCATENATED MODULE: ./pages/index.js






function HomePage(props) {
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(external_react_.Fragment, {
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)((head_default()), {
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("title", {
                        children: "Craig's Blog"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                        name: "description",
                        content: "Learn my thoughts on web development and programming"
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(hero, {}),
            /*#__PURE__*/ jsx_runtime_.jsx(featured_posts, {
                posts: props.posts
            })
        ]
    });
}
function getStaticProps() {
    const featuredPosts = (0,posts_util/* getFeaturedPosts */.mH)();
    return {
        props: {
            posts: featuredPosts
        },
        revalidate: 1800
    };
}
/* harmony default export */ const pages = (HomePage);


/***/ }),

/***/ 8076:
/***/ ((module) => {

"use strict";
module.exports = require("gray-matter");

/***/ }),

/***/ 3280:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/app-router-context.js");

/***/ }),

/***/ 2796:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/head-manager-context.js");

/***/ }),

/***/ 4957:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/head.js");

/***/ }),

/***/ 4014:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/i18n/normalize-locale-path.js");

/***/ }),

/***/ 744:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/image-config-context.js");

/***/ }),

/***/ 5843:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/image-config.js");

/***/ }),

/***/ 8524:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/is-plain-object.js");

/***/ }),

/***/ 8020:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/mitt.js");

/***/ }),

/***/ 4406:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/page-path/denormalize-page-path.js");

/***/ }),

/***/ 4964:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router-context.js");

/***/ }),

/***/ 1751:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/add-path-prefix.js");

/***/ }),

/***/ 6220:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/compare-states.js");

/***/ }),

/***/ 299:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/format-next-pathname-info.js");

/***/ }),

/***/ 3938:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/format-url.js");

/***/ }),

/***/ 9565:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/get-asset-path-from-route.js");

/***/ }),

/***/ 5789:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/get-next-pathname-info.js");

/***/ }),

/***/ 1428:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/is-dynamic.js");

/***/ }),

/***/ 8854:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/parse-path.js");

/***/ }),

/***/ 1292:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/parse-relative-url.js");

/***/ }),

/***/ 4567:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/path-has-prefix.js");

/***/ }),

/***/ 979:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/querystring.js");

/***/ }),

/***/ 3297:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/remove-trailing-slash.js");

/***/ }),

/***/ 6052:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/resolve-rewrites.js");

/***/ }),

/***/ 4226:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/route-matcher.js");

/***/ }),

/***/ 5052:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/route-regex.js");

/***/ }),

/***/ 9232:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 968:
/***/ ((module) => {

"use strict";
module.exports = require("next/head");

/***/ }),

/***/ 6689:
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ 997:
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-runtime");

/***/ }),

/***/ 7147:
/***/ ((module) => {

"use strict";
module.exports = require("fs");

/***/ }),

/***/ 1017:
/***/ ((module) => {

"use strict";
module.exports = require("path");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [598,676,664,675,633,794], () => (__webpack_exec__(4578)));
module.exports = __webpack_exports__;

})();