(() => {
var exports = {};
exports.id = 922;
exports.ids = [922];
exports.modules = {

/***/ 8147:
/***/ ((module) => {

// Exports
module.exports = {
	"content": "post-content_content__XyRqJ",
	"image": "post-content_image__zuBQj"
};


/***/ }),

/***/ 6047:
/***/ ((module) => {

// Exports
module.exports = {
	"header": "post-header_header__UQSWy"
};


/***/ }),

/***/ 8459:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_markdown__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3135);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5675);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_syntax_highlighter__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(727);
/* harmony import */ var react_syntax_highlighter__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_syntax_highlighter__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_syntax_highlighter_dist_cjs_styles_prism_atom_dark__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(638);
/* harmony import */ var react_syntax_highlighter_dist_cjs_styles_prism_atom_dark__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_syntax_highlighter_dist_cjs_styles_prism_atom_dark__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_syntax_highlighter_dist_cjs_languages_prism_javascript__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(4913);
/* harmony import */ var react_syntax_highlighter_dist_cjs_languages_prism_javascript__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_syntax_highlighter_dist_cjs_languages_prism_javascript__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react_syntax_highlighter_dist_cjs_languages_prism_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(4831);
/* harmony import */ var react_syntax_highlighter_dist_cjs_languages_prism_css__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_syntax_highlighter_dist_cjs_languages_prism_css__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react_syntax_highlighter_dist_cjs_languages_prism_jsx__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(1391);
/* harmony import */ var react_syntax_highlighter_dist_cjs_languages_prism_jsx__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_syntax_highlighter_dist_cjs_languages_prism_jsx__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _post_header__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(368);
/* harmony import */ var _post_content_module_css__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(8147);
/* harmony import */ var _post_content_module_css__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_post_content_module_css__WEBPACK_IMPORTED_MODULE_9__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([react_markdown__WEBPACK_IMPORTED_MODULE_1__]);
react_markdown__WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];










react_syntax_highlighter__WEBPACK_IMPORTED_MODULE_3__.PrismLight.registerLanguage("js", (react_syntax_highlighter_dist_cjs_languages_prism_javascript__WEBPACK_IMPORTED_MODULE_5___default()));
react_syntax_highlighter__WEBPACK_IMPORTED_MODULE_3__.PrismLight.registerLanguage("jsx", (react_syntax_highlighter_dist_cjs_languages_prism_jsx__WEBPACK_IMPORTED_MODULE_7___default()));
react_syntax_highlighter__WEBPACK_IMPORTED_MODULE_3__.PrismLight.registerLanguage("css", (react_syntax_highlighter_dist_cjs_languages_prism_css__WEBPACK_IMPORTED_MODULE_6___default()));
function PostContent(props) {
    const { post  } = props;
    const imagePath = `/images/posts/${post.slug}/${post.image}`;
    const customRenderers = {
        p: ({ node , ...props })=>{
            if (node.children[0].tagName && node.children[0].tagName === "img") {
                const image = node.children[0];
                return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: (_post_content_module_css__WEBPACK_IMPORTED_MODULE_9___default().image),
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {
                        src: `/images/posts/getting-started-with-nextjs/${image.properties.src}`,
                        alt: image.properties.alta,
                        width: 600,
                        height: 300
                    })
                });
            }
            return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                children: props.children
            });
        },
        code: ({ node , inline , className , children , ...props })=>{
            console.log(children);
            const match = /language-(\w+)/.exec(className || "");
            return !inline && match ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_syntax_highlighter__WEBPACK_IMPORTED_MODULE_3__.PrismLight, {
                children: String(children).replace(/\n$/, ""),
                style: (react_syntax_highlighter_dist_cjs_styles_prism_atom_dark__WEBPACK_IMPORTED_MODULE_4___default()),
                language: match[1],
                PreTag: "div",
                ...props
            }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("code", {
                className: className,
                ...props,
                children: children
            });
        }
    };
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("article", {
        className: (_post_content_module_css__WEBPACK_IMPORTED_MODULE_9___default().content),
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_post_header__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z, {
                title: post.title,
                image: imagePath
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_markdown__WEBPACK_IMPORTED_MODULE_1__["default"], {
                components: customRenderers,
                children: post.content
            })
        ]
    });
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (PostContent);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 368:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _post_header_module_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6047);
/* harmony import */ var _post_header_module_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_post_header_module_css__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5675);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_1__);



function PostHeader({ title , image  }) {
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("header", {
        className: (_post_header_module_css__WEBPACK_IMPORTED_MODULE_2___default().header),
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                children: title
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_1___default()), {
                src: image,
                alt: title,
                width: 200,
                height: 150
            })
        ]
    });
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (PostHeader);


/***/ }),

/***/ 1663:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "getStaticPaths": () => (/* binding */ getStaticPaths),
/* harmony export */   "getStaticProps": () => (/* binding */ getStaticProps)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(968);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_posts_post_detail_post_content__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(8459);
/* harmony import */ var _lib_posts_util__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(2633);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_components_posts_post_detail_post_content__WEBPACK_IMPORTED_MODULE_3__]);
_components_posts_post_detail_post_content__WEBPACK_IMPORTED_MODULE_3__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];





function PostDetailPage({ post  }) {
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react__WEBPACK_IMPORTED_MODULE_1__.Fragment, {
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((next_head__WEBPACK_IMPORTED_MODULE_2___default()), {
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("title", {
                        children: post.title
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
                        name: "description",
                        content: post.excerpt
                    })
                ]
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_posts_post_detail_post_content__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
                post: post
            })
        ]
    });
}
function getStaticProps(context) {
    const { slug  } = context.params;
    const postData = (0,_lib_posts_util__WEBPACK_IMPORTED_MODULE_4__/* .getPostData */ .AU)(slug);
    return {
        props: {
            post: postData
        },
        revalidate: 600
    };
}
function getStaticPaths() {
    const postFilenames = (0,_lib_posts_util__WEBPACK_IMPORTED_MODULE_4__/* .getPostsFiles */ .uH)();
    const slugs = postFilenames.map((fileName)=>fileName.replace(/\.md$/, ""));
    return {
        paths: slugs.map((slug)=>({
                params: {
                    slug: slug
                }
            })),
        fallback: false
    };
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (PostDetailPage);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 8076:
/***/ ((module) => {

"use strict";
module.exports = require("gray-matter");

/***/ }),

/***/ 4957:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/head.js");

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

/***/ 8854:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/parse-path.js");

/***/ }),

/***/ 3297:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/remove-trailing-slash.js");

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

/***/ 727:
/***/ ((module) => {

"use strict";
module.exports = require("react-syntax-highlighter");

/***/ }),

/***/ 4831:
/***/ ((module) => {

"use strict";
module.exports = require("react-syntax-highlighter/dist/cjs/languages/prism/css");

/***/ }),

/***/ 4913:
/***/ ((module) => {

"use strict";
module.exports = require("react-syntax-highlighter/dist/cjs/languages/prism/javascript");

/***/ }),

/***/ 1391:
/***/ ((module) => {

"use strict";
module.exports = require("react-syntax-highlighter/dist/cjs/languages/prism/jsx");

/***/ }),

/***/ 638:
/***/ ((module) => {

"use strict";
module.exports = require("react-syntax-highlighter/dist/cjs/styles/prism/atom-dark");

/***/ }),

/***/ 997:
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-runtime");

/***/ }),

/***/ 3135:
/***/ ((module) => {

"use strict";
module.exports = import("react-markdown");;

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
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [598,675,633], () => (__webpack_exec__(1663)));
module.exports = __webpack_exports__;

})();