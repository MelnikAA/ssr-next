(function() {
var exports = {};
exports.id = "pages/users";
exports.ids = ["pages/users"];
exports.modules = {

/***/ "./pages/users.js":
/*!************************!*\
  !*** ./pages/users.js ***!
  \************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getStaticProps": function() { return /* binding */ getStaticProps; }
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_MainContainer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/MainContainer */ "./components/MainContainer.js");

var _jsxFileName = "C:\\Users\\user\\Desktop\\ssr1\\pages\\users.js";




const Users = ({
  users
}) => {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_MainContainer__WEBPACK_IMPORTED_MODULE_3__.default, {
    keywords: "users next js",
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h1", {
      children: "C\u043F\u0438\u0441\u043E\u043A \u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u0435\u043B\u0435\u0439"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 13
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("ul", {
      children: users.map(user => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
          href: `/users/${user.id}`,
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
            children: user.name
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 13,
            columnNumber: 29
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 12,
          columnNumber: 25
        }, undefined)
      }, user.id, false, {
        fileName: _jsxFileName,
        lineNumber: 11,
        columnNumber: 21
      }, undefined))
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 13
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 7,
    columnNumber: 9
  }, undefined);
};

/* harmony default export */ __webpack_exports__["default"] = (Users);
async function getStaticProps(context) {
  const response = await fetch(`https://jsonplaceholder.typicode.com/users`);
  const users = await response.json();
  return {
    props: {
      users
    } // will be passed to the page component as props

  };
}

/***/ }),

/***/ "../next-server/lib/router-context":
/*!**************************************************************!*\
  !*** external "next/dist/next-server/lib/router-context.js" ***!
  \**************************************************************/
/***/ (function(module) {

"use strict";
module.exports = require("next/dist/next-server/lib/router-context.js");;

/***/ }),

/***/ "../next-server/lib/router/utils/get-asset-path-from-route":
/*!**************************************************************************************!*\
  !*** external "next/dist/next-server/lib/router/utils/get-asset-path-from-route.js" ***!
  \**************************************************************************************/
/***/ (function(module) {

"use strict";
module.exports = require("next/dist/next-server/lib/router/utils/get-asset-path-from-route.js");;

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/***/ (function(module) {

"use strict";
module.exports = require("next/head");;

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ (function(module) {

"use strict";
module.exports = require("react");;

/***/ }),

/***/ "react-is":
/*!***************************!*\
  !*** external "react-is" ***!
  \***************************/
/***/ (function(module) {

"use strict";
module.exports = require("react-is");;

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ (function(module) {

"use strict";
module.exports = require("react/jsx-dev-runtime");;

/***/ }),

/***/ "styled-jsx/style":
/*!***********************************!*\
  !*** external "styled-jsx/style" ***!
  \***********************************/
/***/ (function(module) {

"use strict";
module.exports = require("styled-jsx/style");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
var __webpack_exports__ = __webpack_require__.X(0, ["vendors-node_modules_next_link_js","components_MainContainer_js"], function() { return __webpack_exec__("./pages/users.js"); });
module.exports = __webpack_exports__;

})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9zc3IxLy4vcGFnZXMvdXNlcnMuanMiLCJ3ZWJwYWNrOi8vc3NyMS9leHRlcm5hbCBcIm5leHQvZGlzdC9uZXh0LXNlcnZlci9saWIvcm91dGVyLWNvbnRleHQuanNcIiIsIndlYnBhY2s6Ly9zc3IxL2V4dGVybmFsIFwibmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi9yb3V0ZXIvdXRpbHMvZ2V0LWFzc2V0LXBhdGgtZnJvbS1yb3V0ZS5qc1wiIiwid2VicGFjazovL3NzcjEvZXh0ZXJuYWwgXCJuZXh0L2hlYWRcIiIsIndlYnBhY2s6Ly9zc3IxL2V4dGVybmFsIFwicmVhY3RcIiIsIndlYnBhY2s6Ly9zc3IxL2V4dGVybmFsIFwicmVhY3QtaXNcIiIsIndlYnBhY2s6Ly9zc3IxL2V4dGVybmFsIFwicmVhY3QvanN4LWRldi1ydW50aW1lXCIiLCJ3ZWJwYWNrOi8vc3NyMS9leHRlcm5hbCBcInN0eWxlZC1qc3gvc3R5bGVcIiJdLCJuYW1lcyI6WyJVc2VycyIsInVzZXJzIiwibWFwIiwidXNlciIsImlkIiwibmFtZSIsImdldFN0YXRpY1Byb3BzIiwiY29udGV4dCIsInJlc3BvbnNlIiwiZmV0Y2giLCJqc29uIiwicHJvcHMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBOztBQUNBLE1BQU1BLEtBQUssR0FBRyxDQUFDO0FBQUNDO0FBQUQsQ0FBRCxLQUFhO0FBRXZCLHNCQUNJLDhEQUFDLDhEQUFEO0FBQWUsWUFBUSxFQUFFLGVBQXpCO0FBQUEsNEJBQ0k7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBREosZUFFSTtBQUFBLGdCQUNLQSxLQUFLLENBQUNDLEdBQU4sQ0FBVUMsSUFBSSxpQkFDWDtBQUFBLCtCQUNJLDhEQUFDLGtEQUFEO0FBQU0sY0FBSSxFQUFHLFVBQVNBLElBQUksQ0FBQ0MsRUFBRyxFQUE5QjtBQUFBLGlDQUNJO0FBQUEsc0JBQUlELElBQUksQ0FBQ0U7QUFBVDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKLFNBQVNGLElBQUksQ0FBQ0MsRUFBZDtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQURIO0FBREw7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFGSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFESjtBQWNILENBaEJEOztBQWtCQSwrREFBZUosS0FBZjtBQUVPLGVBQWVNLGNBQWYsQ0FBOEJDLE9BQTlCLEVBQXVDO0FBQzFDLFFBQU1DLFFBQVEsR0FBRyxNQUFNQyxLQUFLLENBQUUsNENBQUYsQ0FBNUI7QUFDQSxRQUFNUixLQUFLLEdBQUcsTUFBTU8sUUFBUSxDQUFDRSxJQUFULEVBQXBCO0FBRUEsU0FBTztBQUNIQyxTQUFLLEVBQUU7QUFBQ1Y7QUFBRCxLQURKLENBQ2E7O0FBRGIsR0FBUDtBQUdILEM7Ozs7Ozs7Ozs7O0FDOUJELHlFOzs7Ozs7Ozs7OztBQ0FBLGlHOzs7Ozs7Ozs7OztBQ0FBLHVDOzs7Ozs7Ozs7OztBQ0FBLG1DOzs7Ozs7Ozs7OztBQ0FBLHNDOzs7Ozs7Ozs7OztBQ0FBLG1EOzs7Ozs7Ozs7OztBQ0FBLDhDIiwiZmlsZSI6InBhZ2VzL3VzZXJzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHt1c2VTdGF0ZSwgdXNlRWZmZWN0fSBmcm9tICdyZWFjdCdcclxuaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xyXG5pbXBvcnQgTWFpbkNvbnRhaW5lciBmcm9tIFwiLi4vY29tcG9uZW50cy9NYWluQ29udGFpbmVyXCI7XHJcbmNvbnN0IFVzZXJzID0gKHt1c2Vyc30pID0+IHtcclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxNYWluQ29udGFpbmVyIGtleXdvcmRzPXtcInVzZXJzIG5leHQganNcIn0+XHJcbiAgICAgICAgICAgIDxoMT5D0L/QuNGB0L7QuiDQv9C+0LvRjNC30L7QstCw0YLQtdC70LXQuTwvaDE+XHJcbiAgICAgICAgICAgIDx1bD5cclxuICAgICAgICAgICAgICAgIHt1c2Vycy5tYXAodXNlciA9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxsaSBrZXk9e3VzZXIuaWR9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPXtgL3VzZXJzLyR7dXNlci5pZH1gfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhPnt1c2VyLm5hbWV9PC9hPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgIDwvdWw+XHJcbiAgICAgICAgPC9NYWluQ29udGFpbmVyPlxyXG4gICAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFVzZXJzO1xyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFN0YXRpY1Byb3BzKGNvbnRleHQpIHtcclxuICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goYGh0dHBzOi8vanNvbnBsYWNlaG9sZGVyLnR5cGljb2RlLmNvbS91c2Vyc2ApXHJcbiAgICBjb25zdCB1c2VycyA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKVxyXG5cclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgcHJvcHM6IHt1c2Vyc30sIC8vIHdpbGwgYmUgcGFzc2VkIHRvIHRoZSBwYWdlIGNvbXBvbmVudCBhcyBwcm9wc1xyXG4gICAgfVxyXG59XHJcbiIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvZGlzdC9uZXh0LXNlcnZlci9saWIvcm91dGVyLWNvbnRleHQuanNcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvZGlzdC9uZXh0LXNlcnZlci9saWIvcm91dGVyL3V0aWxzL2dldC1hc3NldC1wYXRoLWZyb20tcm91dGUuanNcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvaGVhZFwiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3RcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LWlzXCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInN0eWxlZC1qc3gvc3R5bGVcIik7OyJdLCJzb3VyY2VSb290IjoiIn0=