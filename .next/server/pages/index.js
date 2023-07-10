"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/index";
exports.ids = ["pages/index"];
exports.modules = {

/***/ "./pages/index.tsx":
/*!*************************!*\
  !*** ./pages/index.tsx ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ ListPage),\n/* harmony export */   \"getStaticProps\": () => (/* binding */ getStaticProps)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! fs */ \"fs\");\n/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(fs__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! path */ \"path\");\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(path__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var gray_matter__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! gray-matter */ \"gray-matter\");\n/* harmony import */ var gray_matter__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(gray_matter__WEBPACK_IMPORTED_MODULE_3__);\n\n\n\n\nfunction ListPage({ posts  }) {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                children: \"포스트 목록\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\User\\\\Desktop\\\\next-blog-ssg\\\\pages\\\\index.tsx\",\n                lineNumber: 18,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                children: posts.map((post)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                            href: `/${post.id}`,\n                            children: post.title\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\User\\\\Desktop\\\\next-blog-ssg\\\\pages\\\\index.tsx\",\n                            lineNumber: 22,\n                            columnNumber: 13\n                        }, this)\n                    }, post.id, false, {\n                        fileName: \"C:\\\\Users\\\\User\\\\Desktop\\\\next-blog-ssg\\\\pages\\\\index.tsx\",\n                        lineNumber: 21,\n                        columnNumber: 11\n                    }, this))\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\User\\\\Desktop\\\\next-blog-ssg\\\\pages\\\\index.tsx\",\n                lineNumber: 19,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\User\\\\Desktop\\\\next-blog-ssg\\\\pages\\\\index.tsx\",\n        lineNumber: 17,\n        columnNumber: 5\n    }, this);\n}\nconst getStaticProps = async ()=>{\n    const postsDirectory = path__WEBPACK_IMPORTED_MODULE_2___default().join(process.cwd(), \"__posts\");\n    const fileNames = fs__WEBPACK_IMPORTED_MODULE_1___default().readdirSync(postsDirectory);\n    const posts = fileNames.map((fileName)=>{\n        const id = fileName.replace(/\\.md$/, \"\");\n        const filePath = path__WEBPACK_IMPORTED_MODULE_2___default().join(postsDirectory, fileName);\n        const fileContents = fs__WEBPACK_IMPORTED_MODULE_1___default().readFileSync(filePath, \"utf8\");\n        const { data  } = gray_matter__WEBPACK_IMPORTED_MODULE_3___default()(fileContents);\n        return {\n            id,\n            title: data.title\n        };\n    });\n    return {\n        props: {\n            posts\n        }\n    };\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleC50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ29CO0FBQ0k7QUFDUztBQVdsQixTQUFTRyxRQUFRLENBQUMsRUFBRUMsS0FBSyxHQUFpQixFQUFlO0lBQ3RFLHFCQUNFLDhEQUFDQyxLQUFHOzswQkFDRiw4REFBQ0MsSUFBRTswQkFBQyxRQUFNOzs7OztvQkFBSzswQkFDZiw4REFBQ0MsSUFBRTswQkFDQUgsS0FBSyxDQUFDSSxHQUFHLENBQUMsQ0FBQ0MsSUFBSSxpQkFDZCw4REFBQ0MsSUFBRTtrQ0FDRCw0RUFBQ0MsR0FBQzs0QkFBQ0MsSUFBSSxFQUFFLENBQUMsQ0FBQyxFQUFFSCxJQUFJLENBQUNJLEVBQUUsQ0FBQyxDQUFDO3NDQUFHSixJQUFJLENBQUNLLEtBQUs7Ozs7O2dDQUFLO3VCQURqQ0wsSUFBSSxDQUFDSSxFQUFFOzs7OzRCQUVYLENBQ0w7Ozs7O29CQUNDOzs7Ozs7WUFDRCxDQUNOO0FBQ0osQ0FBQztBQUVNLE1BQU1FLGNBQWMsR0FBa0MsVUFBWTtJQUN2RSxNQUFNQyxjQUFjLEdBQUdmLGdEQUFTLENBQUNpQixPQUFPLENBQUNDLEdBQUcsRUFBRSxFQUFFLFNBQVMsQ0FBQztJQUMxRCxNQUFNQyxTQUFTLEdBQUdwQixxREFBYyxDQUFDZ0IsY0FBYyxDQUFDO0lBRWhELE1BQU1aLEtBQUssR0FBR2dCLFNBQVMsQ0FBQ1osR0FBRyxDQUFDLENBQUNjLFFBQVEsR0FBSztRQUN4QyxNQUFNVCxFQUFFLEdBQUdTLFFBQVEsQ0FBQ0MsT0FBTyxVQUFVLEVBQUUsQ0FBQztRQUN4QyxNQUFNQyxRQUFRLEdBQUd2QixnREFBUyxDQUFDZSxjQUFjLEVBQUVNLFFBQVEsQ0FBQztRQUNwRCxNQUFNRyxZQUFZLEdBQUd6QixzREFBZSxDQUFDd0IsUUFBUSxFQUFFLE1BQU0sQ0FBQztRQUN0RCxNQUFNLEVBQUVHLElBQUksR0FBRSxHQUFHekIsa0RBQU0sQ0FBQ3VCLFlBQVksQ0FBQztRQUVyQyxPQUFPO1lBQ0xaLEVBQUU7WUFDRkMsS0FBSyxFQUFFYSxJQUFJLENBQUNiLEtBQUs7U0FDbEIsQ0FBQztJQUNKLENBQUMsQ0FBQztJQUVGLE9BQU87UUFDTGMsS0FBSyxFQUFFO1lBQ0x4QixLQUFLO1NBQ047S0FDRixDQUFDO0FBQ0osQ0FBQyxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbmV4dC1ibG9nLXNzZy8uL3BhZ2VzL2luZGV4LnRzeD8wN2ZmIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEdldFN0YXRpY1Byb3BzIH0gZnJvbSBcIm5leHRcIjtcclxuaW1wb3J0IGZzIGZyb20gXCJmc1wiO1xyXG5pbXBvcnQgcGF0aCBmcm9tIFwicGF0aFwiO1xyXG5pbXBvcnQgbWF0dGVyIGZyb20gXCJncmF5LW1hdHRlclwiO1xyXG5cclxuaW50ZXJmYWNlIFBvc3Qge1xyXG4gIGlkOiBzdHJpbmc7XHJcbiAgdGl0bGU6IHN0cmluZztcclxufVxyXG5cclxuaW50ZXJmYWNlIExpc3RQYWdlUHJvcHMge1xyXG4gIHBvc3RzOiBQb3N0W107XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIExpc3RQYWdlKHsgcG9zdHMgfTogTGlzdFBhZ2VQcm9wcyk6IEpTWC5FbGVtZW50IHtcclxuICByZXR1cm4gKFxyXG4gICAgPGRpdj5cclxuICAgICAgPGgxPu2PrOyKpO2KuCDrqqnroZ08L2gxPlxyXG4gICAgICA8dWw+XHJcbiAgICAgICAge3Bvc3RzLm1hcCgocG9zdCkgPT4gKFxyXG4gICAgICAgICAgPGxpIGtleT17cG9zdC5pZH0+XHJcbiAgICAgICAgICAgIDxhIGhyZWY9e2AvJHtwb3N0LmlkfWB9Pntwb3N0LnRpdGxlfTwvYT5cclxuICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgKSl9XHJcbiAgICAgIDwvdWw+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59XHJcblxyXG5leHBvcnQgY29uc3QgZ2V0U3RhdGljUHJvcHM6IEdldFN0YXRpY1Byb3BzPExpc3RQYWdlUHJvcHM+ID0gYXN5bmMgKCkgPT4ge1xyXG4gIGNvbnN0IHBvc3RzRGlyZWN0b3J5ID0gcGF0aC5qb2luKHByb2Nlc3MuY3dkKCksIFwiX19wb3N0c1wiKTtcclxuICBjb25zdCBmaWxlTmFtZXMgPSBmcy5yZWFkZGlyU3luYyhwb3N0c0RpcmVjdG9yeSk7XHJcblxyXG4gIGNvbnN0IHBvc3RzID0gZmlsZU5hbWVzLm1hcCgoZmlsZU5hbWUpID0+IHtcclxuICAgIGNvbnN0IGlkID0gZmlsZU5hbWUucmVwbGFjZSgvXFwubWQkLywgXCJcIik7XHJcbiAgICBjb25zdCBmaWxlUGF0aCA9IHBhdGguam9pbihwb3N0c0RpcmVjdG9yeSwgZmlsZU5hbWUpO1xyXG4gICAgY29uc3QgZmlsZUNvbnRlbnRzID0gZnMucmVhZEZpbGVTeW5jKGZpbGVQYXRoLCBcInV0ZjhcIik7XHJcbiAgICBjb25zdCB7IGRhdGEgfSA9IG1hdHRlcihmaWxlQ29udGVudHMpO1xyXG5cclxuICAgIHJldHVybiB7XHJcbiAgICAgIGlkLFxyXG4gICAgICB0aXRsZTogZGF0YS50aXRsZSxcclxuICAgIH07XHJcbiAgfSk7XHJcblxyXG4gIHJldHVybiB7XHJcbiAgICBwcm9wczoge1xyXG4gICAgICBwb3N0cyxcclxuICAgIH0sXHJcbiAgfTtcclxufTtcclxuIl0sIm5hbWVzIjpbImZzIiwicGF0aCIsIm1hdHRlciIsIkxpc3RQYWdlIiwicG9zdHMiLCJkaXYiLCJoMSIsInVsIiwibWFwIiwicG9zdCIsImxpIiwiYSIsImhyZWYiLCJpZCIsInRpdGxlIiwiZ2V0U3RhdGljUHJvcHMiLCJwb3N0c0RpcmVjdG9yeSIsImpvaW4iLCJwcm9jZXNzIiwiY3dkIiwiZmlsZU5hbWVzIiwicmVhZGRpclN5bmMiLCJmaWxlTmFtZSIsInJlcGxhY2UiLCJmaWxlUGF0aCIsImZpbGVDb250ZW50cyIsInJlYWRGaWxlU3luYyIsImRhdGEiLCJwcm9wcyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/index.tsx\n");

/***/ }),

/***/ "gray-matter":
/*!******************************!*\
  !*** external "gray-matter" ***!
  \******************************/
/***/ ((module) => {

module.exports = require("gray-matter");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

module.exports = require("react/jsx-dev-runtime");

/***/ }),

/***/ "fs":
/*!*********************!*\
  !*** external "fs" ***!
  \*********************/
/***/ ((module) => {

module.exports = require("fs");

/***/ }),

/***/ "path":
/*!***********************!*\
  !*** external "path" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("path");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/index.tsx"));
module.exports = __webpack_exports__;

})();