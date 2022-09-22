exports.id = 867;
exports.ids = [867];
exports.modules = {

/***/ 2982:
/***/ ((module) => {

// Exports
module.exports = {
	"notification": "notification_notification__ivOBk",
	"success": "notification_success__oL5MY",
	"error": "notification_error__1Zbg9"
};


/***/ }),

/***/ 6435:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6405);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _notification_module_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2982);
/* harmony import */ var _notification_module_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_notification_module_css__WEBPACK_IMPORTED_MODULE_2__);



function Notification(props) {
    const { title , message , status  } = props;
    let statusClasses = "";
    if (status === "success") {
        statusClasses = (_notification_module_css__WEBPACK_IMPORTED_MODULE_2___default().success);
    }
    if (status === "error") {
        statusClasses = (_notification_module_css__WEBPACK_IMPORTED_MODULE_2___default().error);
    }
    const cssClasses = `${(_notification_module_css__WEBPACK_IMPORTED_MODULE_2___default().notification)} ${statusClasses}`;
    return /*#__PURE__*/ react_dom__WEBPACK_IMPORTED_MODULE_1___default().createPortal(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: cssClasses,
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
                children: title
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                children: message
            })
        ]
    }), document.getElementById("notifications"));
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Notification);


/***/ }),

/***/ 7095:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "l": () => (/* binding */ NotificationContextProvider)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);


const NotificationContext = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.createContext)({
    notification: null,
    showNotification: function(notificationData) {},
    hideNotification: function() {}
});
function NotificationContextProvider(props) {
    const { 0: activeNotification , 1: setActiveNotification  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)();
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        if (activeNotification && (activeNotification.status === "success" || activeNotification.status === "error")) {
            const timer = setTimeout(()=>{
                setActiveNotification(null);
            }, 3000);
            return ()=>{
                clearTimeout(timer);
            };
        }
    }, [
        activeNotification
    ]);
    function showNotificationHandler(notificationData) {
        setActiveNotification(notificationData);
    }
    function hideNotificationHandler() {
        setActiveNotification(null);
    }
    const context = {
        notification: activeNotification,
        showNotification: showNotificationHandler,
        hideNotification: hideNotificationHandler
    };
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(NotificationContext.Provider, {
        value: context,
        children: props.children
    });
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (NotificationContext);


/***/ })

};
;