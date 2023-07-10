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
exports.id = "pages/[id]";
exports.ids = ["pages/[id]"];
exports.modules = {

/***/ "./pages/[id].tsx":
/*!************************!*\
  !*** ./pages/[id].tsx ***!
  \************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ PostPage),\n/* harmony export */   \"getStaticPaths\": () => (/* binding */ getStaticPaths),\n/* harmony export */   \"getStaticProps\": () => (/* binding */ getStaticProps)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! fs */ \"fs\");\n/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(fs__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! path */ \"path\");\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(path__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var gray_matter__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! gray-matter */ \"gray-matter\");\n/* harmony import */ var gray_matter__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(gray_matter__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var marked__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! marked */ \"marked\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([marked__WEBPACK_IMPORTED_MODULE_4__]);\nmarked__WEBPACK_IMPORTED_MODULE_4__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\n\n\n\n\nfunction PostPage({ post  }) {\n    const { id , title , content  } = post;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                children: title\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\User\\\\Desktop\\\\next-blog-ssg\\\\pages\\\\[id].tsx\",\n                lineNumber: 23,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                dangerouslySetInnerHTML: {\n                    __html: content\n                }\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\User\\\\Desktop\\\\next-blog-ssg\\\\pages\\\\[id].tsx\",\n                lineNumber: 24,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\User\\\\Desktop\\\\next-blog-ssg\\\\pages\\\\[id].tsx\",\n        lineNumber: 22,\n        columnNumber: 5\n    }, this);\n}\nconst getStaticPaths = async ()=>{\n    const postsDirectory = path__WEBPACK_IMPORTED_MODULE_2___default().join(process.cwd(), \"__posts\");\n    const fileNames = fs__WEBPACK_IMPORTED_MODULE_1___default().readdirSync(postsDirectory);\n    const paths = fileNames.map((fileName)=>{\n        const id = fileName.replace(/\\.md$/, \"\");\n        return {\n            params: {\n                id\n            }\n        };\n    });\n    return {\n        paths,\n        fallback: false\n    };\n};\nconst getStaticProps = async ({ params  })=>{\n    const { id  } = params;\n    const filePath = path__WEBPACK_IMPORTED_MODULE_2___default().join(process.cwd(), \"__posts\", `${id}.md`);\n    const fileContents = fs__WEBPACK_IMPORTED_MODULE_1___default().readFileSync(filePath, \"utf8\");\n    const { content , data  } = gray_matter__WEBPACK_IMPORTED_MODULE_3___default()(fileContents);\n    const markdownContent = (0,marked__WEBPACK_IMPORTED_MODULE_4__.marked)(content);\n    const post = {\n        id,\n        title: data.title,\n        content: markdownContent\n    };\n    return {\n        props: {\n            post\n        }\n    };\n};\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9baWRdLnRzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUFvQjtBQUNJO0FBQ1M7QUFDRDtBQWNqQixTQUFTSSxRQUFRLENBQUMsRUFBRUMsSUFBSSxHQUFrQixFQUFlO0lBQ3RFLE1BQU0sRUFBRUMsRUFBRSxHQUFFQyxLQUFLLEdBQUVDLE9BQU8sR0FBRSxHQUFHSCxJQUFJO0lBRW5DLHFCQUNFLDhEQUFDSSxLQUFHOzswQkFDRiw4REFBQ0MsSUFBRTswQkFBRUgsS0FBSzs7Ozs7b0JBQU07MEJBQ2hCLDhEQUFDRSxLQUFHO2dCQUFDRSx1QkFBdUIsRUFBRTtvQkFBRUMsTUFBTSxFQUFFSixPQUFPO2lCQUFFOzs7OztvQkFBSTs7Ozs7O1lBQ2pELENBQ047QUFDSixDQUFDO0FBRU0sTUFBTUssY0FBYyxHQUErQixVQUFZO0lBQ3BFLE1BQU1DLGNBQWMsR0FBR2IsZ0RBQVMsQ0FBQ2UsT0FBTyxDQUFDQyxHQUFHLEVBQUUsRUFBRSxTQUFTLENBQUM7SUFDMUQsTUFBTUMsU0FBUyxHQUFHbEIscURBQWMsQ0FBQ2MsY0FBYyxDQUFDO0lBRWhELE1BQU1NLEtBQUssR0FBR0YsU0FBUyxDQUFDRyxHQUFHLENBQUMsQ0FBQ0MsUUFBUSxHQUFLO1FBQ3hDLE1BQU1oQixFQUFFLEdBQUdnQixRQUFRLENBQUNDLE9BQU8sVUFBVSxFQUFFLENBQUM7UUFDeEMsT0FBTztZQUNMQyxNQUFNLEVBQUU7Z0JBQUVsQixFQUFFO2FBQUU7U0FDZixDQUFDO0lBQ0osQ0FBQyxDQUFDO0lBRUYsT0FBTztRQUNMYyxLQUFLO1FBQ0xLLFFBQVEsRUFBRSxLQUFLO0tBQ2hCLENBQUM7QUFDSixDQUFDLENBQUM7QUFFSyxNQUFNQyxjQUFjLEdBR3ZCLE9BQU8sRUFBRUYsTUFBTSxHQUFFLEdBQUs7SUFDeEIsTUFBTSxFQUFFbEIsRUFBRSxHQUFFLEdBQUdrQixNQUFNO0lBRXJCLE1BQU1HLFFBQVEsR0FBRzFCLGdEQUFTLENBQUNlLE9BQU8sQ0FBQ0MsR0FBRyxFQUFFLEVBQUUsU0FBUyxFQUFFLENBQUMsRUFBRVgsRUFBRSxDQUFDLEdBQUcsQ0FBQyxDQUFDO0lBQ2hFLE1BQU1zQixZQUFZLEdBQUc1QixzREFBZSxDQUFDMkIsUUFBUSxFQUFFLE1BQU0sQ0FBQztJQUN0RCxNQUFNLEVBQUVuQixPQUFPLEdBQUVzQixJQUFJLEdBQUUsR0FBRzVCLGtEQUFNLENBQUMwQixZQUFZLENBQUM7SUFFOUMsTUFBTUcsZUFBZSxHQUFHNUIsOENBQU0sQ0FBQ0ssT0FBTyxDQUFDO0lBRXZDLE1BQU1ILElBQUksR0FBUztRQUNqQkMsRUFBRTtRQUNGQyxLQUFLLEVBQUV1QixJQUFJLENBQUN2QixLQUFLO1FBQ2pCQyxPQUFPLEVBQUV1QixlQUFlO0tBQ3pCO0lBRUQsT0FBTztRQUNMQyxLQUFLLEVBQUU7WUFDTDNCLElBQUk7U0FDTDtLQUNGLENBQUM7QUFDSixDQUFDLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9uZXh0LWJsb2ctc3NnLy4vcGFnZXMvW2lkXS50c3g/YzM1NiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgZnMgZnJvbSBcImZzXCI7XHJcbmltcG9ydCBwYXRoIGZyb20gXCJwYXRoXCI7XHJcbmltcG9ydCBtYXR0ZXIgZnJvbSBcImdyYXktbWF0dGVyXCI7XHJcbmltcG9ydCB7IG1hcmtlZCB9IGZyb20gXCJtYXJrZWRcIjtcclxuaW1wb3J0IHsgR2V0U3RhdGljUGF0aHMsIEdldFN0YXRpY1Byb3BzIH0gZnJvbSBcIm5leHRcIjtcclxuXHJcbmludGVyZmFjZSBQb3N0IHtcclxuICBpZDogc3RyaW5nO1xyXG4gIHRpdGxlOiBzdHJpbmc7XHJcbiAgY29udGVudDogc3RyaW5nO1xyXG59XHJcblxyXG5pbnRlcmZhY2UgUG9zdFBhcmFtcyB7XHJcbiAgaWQ6IHN0cmluZztcclxuICBba2V5OiBzdHJpbmddOiBzdHJpbmc7IC8vIOyduOuNseyKpCDsi5zqt7jri4jsspjrpbwg7LaU6rCA7ZWY7JesIHN0cmluZyDtmJXsi53snZgg64uk66W4IOunpOqwnOuzgOyImOuPhCDsspjrpqztlaAg7IiYIOyeiOuPhOuhnSDtlanri4jri6QuXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFBvc3RQYWdlKHsgcG9zdCB9OiB7IHBvc3Q6IFBvc3QgfSk6IEpTWC5FbGVtZW50IHtcclxuICBjb25zdCB7IGlkLCB0aXRsZSwgY29udGVudCB9ID0gcG9zdDtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXY+XHJcbiAgICAgIDxoMT57dGl0bGV9PC9oMT5cclxuICAgICAgPGRpdiBkYW5nZXJvdXNseVNldElubmVySFRNTD17eyBfX2h0bWw6IGNvbnRlbnQgfX0gLz5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBnZXRTdGF0aWNQYXRoczogR2V0U3RhdGljUGF0aHM8UG9zdFBhcmFtcz4gPSBhc3luYyAoKSA9PiB7XHJcbiAgY29uc3QgcG9zdHNEaXJlY3RvcnkgPSBwYXRoLmpvaW4ocHJvY2Vzcy5jd2QoKSwgXCJfX3Bvc3RzXCIpO1xyXG4gIGNvbnN0IGZpbGVOYW1lcyA9IGZzLnJlYWRkaXJTeW5jKHBvc3RzRGlyZWN0b3J5KTtcclxuXHJcbiAgY29uc3QgcGF0aHMgPSBmaWxlTmFtZXMubWFwKChmaWxlTmFtZSkgPT4ge1xyXG4gICAgY29uc3QgaWQgPSBmaWxlTmFtZS5yZXBsYWNlKC9cXC5tZCQvLCBcIlwiKTtcclxuICAgIHJldHVybiB7XHJcbiAgICAgIHBhcmFtczogeyBpZCB9LFxyXG4gICAgfTtcclxuICB9KTtcclxuXHJcbiAgcmV0dXJuIHtcclxuICAgIHBhdGhzLFxyXG4gICAgZmFsbGJhY2s6IGZhbHNlLFxyXG4gIH07XHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgZ2V0U3RhdGljUHJvcHM6IEdldFN0YXRpY1Byb3BzPFxyXG4gIHsgcG9zdDogUG9zdCB9LFxyXG4gIFBvc3RQYXJhbXNcclxuPiA9IGFzeW5jICh7IHBhcmFtcyB9KSA9PiB7XHJcbiAgY29uc3QgeyBpZCB9ID0gcGFyYW1zO1xyXG5cclxuICBjb25zdCBmaWxlUGF0aCA9IHBhdGguam9pbihwcm9jZXNzLmN3ZCgpLCBcIl9fcG9zdHNcIiwgYCR7aWR9Lm1kYCk7XHJcbiAgY29uc3QgZmlsZUNvbnRlbnRzID0gZnMucmVhZEZpbGVTeW5jKGZpbGVQYXRoLCBcInV0ZjhcIik7XHJcbiAgY29uc3QgeyBjb250ZW50LCBkYXRhIH0gPSBtYXR0ZXIoZmlsZUNvbnRlbnRzKTtcclxuXHJcbiAgY29uc3QgbWFya2Rvd25Db250ZW50ID0gbWFya2VkKGNvbnRlbnQpO1xyXG5cclxuICBjb25zdCBwb3N0OiBQb3N0ID0ge1xyXG4gICAgaWQsXHJcbiAgICB0aXRsZTogZGF0YS50aXRsZSxcclxuICAgIGNvbnRlbnQ6IG1hcmtkb3duQ29udGVudCxcclxuICB9O1xyXG5cclxuICByZXR1cm4ge1xyXG4gICAgcHJvcHM6IHtcclxuICAgICAgcG9zdCxcclxuICAgIH0sXHJcbiAgfTtcclxufTtcclxuIl0sIm5hbWVzIjpbImZzIiwicGF0aCIsIm1hdHRlciIsIm1hcmtlZCIsIlBvc3RQYWdlIiwicG9zdCIsImlkIiwidGl0bGUiLCJjb250ZW50IiwiZGl2IiwiaDEiLCJkYW5nZXJvdXNseVNldElubmVySFRNTCIsIl9faHRtbCIsImdldFN0YXRpY1BhdGhzIiwicG9zdHNEaXJlY3RvcnkiLCJqb2luIiwicHJvY2VzcyIsImN3ZCIsImZpbGVOYW1lcyIsInJlYWRkaXJTeW5jIiwicGF0aHMiLCJtYXAiLCJmaWxlTmFtZSIsInJlcGxhY2UiLCJwYXJhbXMiLCJmYWxsYmFjayIsImdldFN0YXRpY1Byb3BzIiwiZmlsZVBhdGgiLCJmaWxlQ29udGVudHMiLCJyZWFkRmlsZVN5bmMiLCJkYXRhIiwibWFya2Rvd25Db250ZW50IiwicHJvcHMiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/[id].tsx\n");

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

/***/ "marked":
/*!*************************!*\
  !*** external "marked" ***!
  \*************************/
/***/ ((module) => {

module.exports = import("marked");;

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
var __webpack_exports__ = (__webpack_exec__("./pages/[id].tsx"));
module.exports = __webpack_exports__;

})();