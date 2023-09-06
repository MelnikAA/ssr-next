exports.id = "components_MainContainer_js";
exports.ids = ["components_MainContainer_js"];
exports.modules = {

/***/ "./components/A.js":
/*!*************************!*\
  !*** ./components/A.js ***!
  \*************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ A; }
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _styles_A_module_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../styles/A.module.css */ "./styles/A.module.css");
/* harmony import */ var _styles_A_module_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styles_A_module_css__WEBPACK_IMPORTED_MODULE_2__);

var _jsxFileName = "C:\\Users\\user\\Desktop\\ssr1\\components\\A.js";


function A({
  text,
  href
}) {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
    href: href,
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
      className: (_styles_A_module_css__WEBPACK_IMPORTED_MODULE_2___default().link),
      children: text
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 13
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 6,
    columnNumber: 9
  }, this);
}

/***/ }),

/***/ "./components/MainContainer.js":
/*!*************************************!*\
  !*** ./components/MainContainer.js ***!
  \*************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _A__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./A */ "./components/A.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/head */ "next/head");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_3__);


var _jsxFileName = "C:\\Users\\user\\Desktop\\ssr1\\components\\MainContainer.js";




const MainContainer = ({
  children,
  keywords
}) => {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_3___default()), {
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("meta", {
        keywords: "dvgups, nextjs" + keywords,
        className: "jsx-204863688"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 8,
        columnNumber: 17
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("title", {
        className: "jsx-204863688",
        children: "\u0413\u043B\u0430\u0432\u043D\u0430\u044F \u0441\u0442\u0440\u0430\u043D\u0438\u0446\u0430"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 9,
        columnNumber: 17
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 13
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: "jsx-204863688" + " " + "navbar",
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_A__WEBPACK_IMPORTED_MODULE_2__.default, {
        href: '/',
        text: "\u0413\u043B\u0430\u0432\u043D\u0430\u044F"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 12,
        columnNumber: 17
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_A__WEBPACK_IMPORTED_MODULE_2__.default, {
        href: '/users',
        text: "\u041F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u0435\u043B\u0438"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 13,
        columnNumber: 17
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 13
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: "jsx-204863688",
      children: children
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 13
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default()), {
      id: "204863688",
      children: ".navbar.jsx-204863688{background:black;padding:15px;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcdXNlclxcRGVza3RvcFxcc3NyMVxcY29tcG9uZW50c1xcTWFpbkNvbnRhaW5lci5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFrQmlCLEFBRzBDLGlCQUNKLGFBQ2pCIiwiZmlsZSI6IkM6XFxVc2Vyc1xcdXNlclxcRGVza3RvcFxcc3NyMVxcY29tcG9uZW50c1xcTWFpbkNvbnRhaW5lci5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBBIGZyb20gXCIuL0FcIjtcclxuaW1wb3J0IEhlYWQgZnJvbSBcIm5leHQvaGVhZFwiO1xyXG5cclxuY29uc3QgTWFpbkNvbnRhaW5lciA9ICh7Y2hpbGRyZW4sIGtleXdvcmRzfSkgPT4ge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8PlxyXG4gICAgICAgICAgICA8SGVhZD5cclxuICAgICAgICAgICAgICAgIDxtZXRhIGtleXdvcmRzPXtcImR2Z3VwcywgbmV4dGpzXCIgKyBrZXl3b3Jkc30+PC9tZXRhPlxyXG4gICAgICAgICAgICAgICAgPHRpdGxlPtCT0LvQsNCy0L3QsNGPINGB0YLRgNCw0L3QuNGG0LA8L3RpdGxlPlxyXG4gICAgICAgICAgICA8L0hlYWQ+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibmF2YmFyXCI+XHJcbiAgICAgICAgICAgICAgICA8QSBocmVmPXsnLyd9IHRleHQ9XCLQk9C70LDQstC90LDRj1wiLz5cclxuICAgICAgICAgICAgICAgIDxBIGhyZWY9eycvdXNlcnMnfSB0ZXh0PVwi0J/QvtC70YzQt9C+0LLQsNGC0LXQu9C4XCIvPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgIHtjaGlsZHJlbn1cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxzdHlsZSBqc3g+XHJcbiAgICAgICAgICAgICAgICB7YFxyXG4gICAgICAgICAgICAgICAgICAgIC5uYXZiYXIge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiBibGFjaztcclxuICAgICAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogMTVweDtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIGB9XHJcbiAgICAgICAgICAgIDwvc3R5bGU+XHJcbiAgICAgICAgPC8+XHJcbiAgICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgTWFpbkNvbnRhaW5lcjtcclxuIl19 */\n/*@ sourceURL=C:\\\\Users\\\\user\\\\Desktop\\\\ssr1\\\\components\\\\MainContainer.js */"
    }, void 0, false, void 0, undefined)]
  }, void 0, true);
};

/* harmony default export */ __webpack_exports__["default"] = (MainContainer);

/***/ }),

/***/ "./styles/A.module.css":
/*!*****************************!*\
  !*** ./styles/A.module.css ***!
  \*****************************/
/***/ (function(module) {

// Exports
module.exports = {
	"link": "A_link__2N3in"
};


/***/ }),

/***/ "?ca47":
/*!******************************************!*\
  !*** ./utils/resolve-rewrites (ignored) ***!
  \******************************************/
/***/ (function() {

/* (ignored) */

/***/ })

};
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9zc3IxLy4vY29tcG9uZW50cy9BLmpzIiwid2VicGFjazovL3NzcjEvLi9jb21wb25lbnRzL01haW5Db250YWluZXIuanMiLCJ3ZWJwYWNrOi8vc3NyMS8uL3N0eWxlcy9BLm1vZHVsZS5jc3MiLCJ3ZWJwYWNrOi8vc3NyMS9pZ25vcmVkfEM6XFxVc2Vyc1xcdXNlclxcRGVza3RvcFxcc3NyMVxcbm9kZV9tb2R1bGVzXFxuZXh0XFxkaXN0XFxuZXh0LXNlcnZlclxcbGliXFxyb3V0ZXJ8Li91dGlscy9yZXNvbHZlLXJld3JpdGVzIl0sIm5hbWVzIjpbIkEiLCJ0ZXh0IiwiaHJlZiIsInN0eWxlcyIsIk1haW5Db250YWluZXIiLCJjaGlsZHJlbiIsImtleXdvcmRzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFFZSxTQUFTQSxDQUFULENBQVc7QUFBQ0MsTUFBRDtBQUFPQztBQUFQLENBQVgsRUFBeUI7QUFDcEMsc0JBQ0ksOERBQUMsa0RBQUQ7QUFBTSxRQUFJLEVBQUVBLElBQVo7QUFBQSwyQkFDSTtBQUFHLGVBQVMsRUFBRUMsa0VBQWQ7QUFBQSxnQkFBNEJGO0FBQTVCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREo7QUFLSCxDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ1REO0FBQ0E7O0FBRUEsTUFBTUcsYUFBYSxHQUFHLENBQUM7QUFBQ0MsVUFBRDtBQUFXQztBQUFYLENBQUQsS0FBMEI7QUFDNUMsc0JBQ0k7QUFBQSw0QkFDSSw4REFBQyxrREFBRDtBQUFBLDhCQUNJO0FBQU0sZ0JBQVEsRUFBRSxtQkFBbUJBLFFBQW5DO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQURKLGVBRUk7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFGSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBREosZUFLSTtBQUFBLHlDQUFlLFFBQWY7QUFBQSw4QkFDSSw4REFBQyx1Q0FBRDtBQUFHLFlBQUksRUFBRSxHQUFUO0FBQWMsWUFBSSxFQUFDO0FBQW5CO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBREosZUFFSSw4REFBQyx1Q0FBRDtBQUFHLFlBQUksRUFBRSxRQUFUO0FBQW1CLFlBQUksRUFBQztBQUF4QjtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQUZKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFMSixlQVNJO0FBQUE7QUFBQSxnQkFDS0Q7QUFETDtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQVRKO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBREo7QUF3QkgsQ0F6QkQ7O0FBMkJBLCtEQUFlRCxhQUFmLEU7Ozs7Ozs7Ozs7QUM5QkE7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7O0FDSEEsZSIsImZpbGUiOiJjb21wb25lbnRzX01haW5Db250YWluZXJfanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XHJcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi4vc3R5bGVzL0EubW9kdWxlLmNzcydcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEEoe3RleHQsIGhyZWZ9KSB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxMaW5rIGhyZWY9e2hyZWZ9PlxyXG4gICAgICAgICAgICA8YSBjbGFzc05hbWU9e3N0eWxlcy5saW5rfT57dGV4dH08L2E+XHJcbiAgICAgICAgPC9MaW5rPlxyXG4gICAgKVxyXG59XHJcbiIsImltcG9ydCBBIGZyb20gXCIuL0FcIjtcclxuaW1wb3J0IEhlYWQgZnJvbSBcIm5leHQvaGVhZFwiO1xyXG5cclxuY29uc3QgTWFpbkNvbnRhaW5lciA9ICh7Y2hpbGRyZW4sIGtleXdvcmRzfSkgPT4ge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8PlxyXG4gICAgICAgICAgICA8SGVhZD5cclxuICAgICAgICAgICAgICAgIDxtZXRhIGtleXdvcmRzPXtcImR2Z3VwcywgbmV4dGpzXCIgKyBrZXl3b3Jkc30+PC9tZXRhPlxyXG4gICAgICAgICAgICAgICAgPHRpdGxlPtCT0LvQsNCy0L3QsNGPINGB0YLRgNCw0L3QuNGG0LA8L3RpdGxlPlxyXG4gICAgICAgICAgICA8L0hlYWQ+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibmF2YmFyXCI+XHJcbiAgICAgICAgICAgICAgICA8QSBocmVmPXsnLyd9IHRleHQ9XCLQk9C70LDQstC90LDRj1wiLz5cclxuICAgICAgICAgICAgICAgIDxBIGhyZWY9eycvdXNlcnMnfSB0ZXh0PVwi0J/QvtC70YzQt9C+0LLQsNGC0LXQu9C4XCIvPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgIHtjaGlsZHJlbn1cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxzdHlsZSBqc3g+XHJcbiAgICAgICAgICAgICAgICB7YFxyXG4gICAgICAgICAgICAgICAgICAgIC5uYXZiYXIge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiBibGFjaztcclxuICAgICAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogMTVweDtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIGB9XHJcbiAgICAgICAgICAgIDwvc3R5bGU+XHJcbiAgICAgICAgPC8+XHJcbiAgICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgTWFpbkNvbnRhaW5lcjtcclxuIiwiLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSB7XG5cdFwibGlua1wiOiBcIkFfbGlua19fMk4zaW5cIlxufTtcbiIsIi8qIChpZ25vcmVkKSAqLyJdLCJzb3VyY2VSb290IjoiIn0=