"use strict";
exports.id = 633;
exports.ids = [633];
exports.modules = {

/***/ 2633:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AU": () => (/* binding */ getPostData),
/* harmony export */   "Bd": () => (/* binding */ getAllPosts),
/* harmony export */   "mH": () => (/* binding */ getFeaturedPosts),
/* harmony export */   "uH": () => (/* binding */ getPostsFiles)
/* harmony export */ });
/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7147);
/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(fs__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1017);
/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(path__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var gray_matter__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(8076);
/* harmony import */ var gray_matter__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(gray_matter__WEBPACK_IMPORTED_MODULE_2__);



const postsDirectory = path__WEBPACK_IMPORTED_MODULE_1___default().join(process.cwd(), "posts");
function getPostsFiles() {
    return fs__WEBPACK_IMPORTED_MODULE_0___default().readdirSync(postsDirectory);
}
function getPostData(postIdentifier) {
    const postSlug = postIdentifier.replace(/\.md$/, "");
    const filePath = path__WEBPACK_IMPORTED_MODULE_1___default().join(postsDirectory, `${postSlug}.md`);
    const fileContent = fs__WEBPACK_IMPORTED_MODULE_0___default().readFileSync(filePath, "utf-8");
    const { data , content  } = gray_matter__WEBPACK_IMPORTED_MODULE_2___default()(fileContent);
    const postData = {
        slug: postSlug,
        ...data,
        content
    };
    return postData;
}
function getAllPosts() {
    const postFiles = getPostsFiles();
    const allPosts = postFiles.map((postFile)=>{
        return getPostData(postFile);
    });
    const sortedPosts = allPosts.sort((postA, postB)=>postA.date > postB.date ? -1 : 1);
    return sortedPosts;
}
function getFeaturedPosts() {
    const allPosts = getAllPosts();
    const featuredPosts = allPosts.filter((post)=>post.isFeatured);
    return featuredPosts;
}


/***/ })

};
;