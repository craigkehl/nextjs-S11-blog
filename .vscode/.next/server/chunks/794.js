exports.id = 794;
exports.ids = [794];
exports.modules = {

/***/ 577:
/***/ ((module) => {

// Exports
module.exports = {
	"grid": "posts-grid_grid__mLDZf"
};


/***/ }),

/***/ 4839:
/***/ ((module) => {

// Exports
module.exports = {
	"post": "posts-item_post__Ge_bY",
	"image": "posts-item_image__nzXun",
	"content": "posts-item_content__jSE_E"
};


/***/ }),

/***/ 8794:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ posts_grid)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(5675);
var image_default = /*#__PURE__*/__webpack_require__.n(next_image);
// EXTERNAL MODULE: ./components/posts/posts-item.module.css
var posts_item_module = __webpack_require__(4839);
var posts_item_module_default = /*#__PURE__*/__webpack_require__.n(posts_item_module);
;// CONCATENATED MODULE: ./components/posts/posts-item.js




function PostItem({ post  }) {
    const { title , image , excerpt , date , slug  } = post;
    const formattedDate = new Date(date).toLocaleDateString("en-US", {
        day: "numeric",
        month: "long",
        year: "numeric"
    });
    const imagePath = `/images/posts/${slug}/${image}`;
    const slugPath = `/posts/${slug}`;
    return /*#__PURE__*/ jsx_runtime_.jsx("li", {
        className: (posts_item_module_default()).post,
        children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
            href: slugPath,
            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("a", {
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: (posts_item_module_default()).image,
                        children: /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                            src: imagePath,
                            alt: title,
                            width: 300,
                            height: 200,
                            layout: "responsive"
                        })
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: (posts_item_module_default()).content,
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                                children: title
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("time", {
                                children: formattedDate
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                children: excerpt
                            })
                        ]
                    })
                ]
            })
        })
    });
}
/* harmony default export */ const posts_item = (PostItem);

// EXTERNAL MODULE: ./components/posts/posts-grid.module.css
var posts_grid_module = __webpack_require__(577);
var posts_grid_module_default = /*#__PURE__*/__webpack_require__.n(posts_grid_module);
;// CONCATENATED MODULE: ./components/posts/posts-grid.js



function PostsGrid({ posts  }) {
    return /*#__PURE__*/ jsx_runtime_.jsx("ul", {
        className: (posts_grid_module_default()).grid,
        children: posts.map((post)=>/*#__PURE__*/ jsx_runtime_.jsx(posts_item, {
                post: post
            }, post.slug))
    });
}
/* harmony default export */ const posts_grid = (PostsGrid);


/***/ })

};
;