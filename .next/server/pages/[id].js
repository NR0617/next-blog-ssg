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

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ PostDetail),\n/* harmony export */   \"getStaticPaths\": () => (/* binding */ getStaticPaths),\n/* harmony export */   \"getStaticProps\": () => (/* binding */ getStaticProps)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! fs */ \"fs\");\n/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(fs__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! path */ \"path\");\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(path__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var gray_matter__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! gray-matter */ \"gray-matter\");\n/* harmony import */ var gray_matter__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(gray_matter__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var unified__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! unified */ \"unified\");\n/* harmony import */ var remark_parse__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! remark-parse */ \"remark-parse\");\n/* harmony import */ var remark_rehype__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! remark-rehype */ \"remark-rehype\");\n/* harmony import */ var rehype_stringify__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rehype-stringify */ \"rehype-stringify\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([unified__WEBPACK_IMPORTED_MODULE_4__, remark_parse__WEBPACK_IMPORTED_MODULE_5__, remark_rehype__WEBPACK_IMPORTED_MODULE_6__, rehype_stringify__WEBPACK_IMPORTED_MODULE_7__]);\n([unified__WEBPACK_IMPORTED_MODULE_4__, remark_parse__WEBPACK_IMPORTED_MODULE_5__, remark_rehype__WEBPACK_IMPORTED_MODULE_6__, rehype_stringify__WEBPACK_IMPORTED_MODULE_7__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);\n\n\n\n\n\n\n\n\nfunction PostDetail({ post  }) {\n    const { title , content  } = post;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                children: title\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\User\\\\Desktop\\\\next-blog-ssg\\\\pages\\\\[id].tsx\",\n                lineNumber: 25,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                dangerouslySetInnerHTML: {\n                    __html: content\n                }\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\User\\\\Desktop\\\\next-blog-ssg\\\\pages\\\\[id].tsx\",\n                lineNumber: 26,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\User\\\\Desktop\\\\next-blog-ssg\\\\pages\\\\[id].tsx\",\n        lineNumber: 24,\n        columnNumber: 5\n    }, this);\n}\nconst getStaticPaths = async ()=>{\n    const postsDirectory = path__WEBPACK_IMPORTED_MODULE_2___default().join(process.cwd(), \"__posts\");\n    const fileNames = fs__WEBPACK_IMPORTED_MODULE_1___default().readdirSync(postsDirectory);\n    const paths = fileNames.map((fileName)=>{\n        const id = fileName.replace(/\\.md$/, \"\");\n        return {\n            params: {\n                id\n            }\n        };\n    });\n    return {\n        paths,\n        fallback: false\n    };\n};\nconst getStaticProps = async ({ params ,  })=>{\n    const { id  } = params;\n    const filePath = path__WEBPACK_IMPORTED_MODULE_2___default().join(process.cwd(), \"__posts\", `${id}.md`);\n    const fileContents = fs__WEBPACK_IMPORTED_MODULE_1___default().readFileSync(filePath, \"utf8\");\n    const { content , data  } = gray_matter__WEBPACK_IMPORTED_MODULE_3___default()(fileContents);\n    const processor = (0,unified__WEBPACK_IMPORTED_MODULE_4__.unified)().use(remark_parse__WEBPACK_IMPORTED_MODULE_5__[\"default\"]).use(remark_rehype__WEBPACK_IMPORTED_MODULE_6__[\"default\"]).use(rehype_stringify__WEBPACK_IMPORTED_MODULE_7__[\"default\"]);\n    const htmlContent = processor.processSync(content).toString();\n    const post = {\n        id,\n        title: data.title,\n        content: htmlContent\n    };\n    return {\n        props: {\n            post\n        }\n    };\n};\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9baWRdLnRzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNvQjtBQUNJO0FBQ1M7QUFDQztBQUNLO0FBQ0U7QUFDTTtBQVloQyxTQUFTTyxVQUFVLENBQUMsRUFBRUMsSUFBSSxHQUFtQixFQUFlO0lBQ3pFLE1BQU0sRUFBRUMsS0FBSyxHQUFFQyxPQUFPLEdBQUUsR0FBR0YsSUFBSTtJQUUvQixxQkFDRSw4REFBQ0csS0FBRzs7MEJBQ0YsOERBQUNDLElBQUU7MEJBQUVILEtBQUs7Ozs7O29CQUFNOzBCQUNoQiw4REFBQ0UsS0FBRztnQkFBQ0UsdUJBQXVCLEVBQUU7b0JBQUVDLE1BQU0sRUFBRUosT0FBTztpQkFBRTs7Ozs7b0JBQUk7Ozs7OztZQUNqRCxDQUNOO0FBQ0osQ0FBQztBQUVNLE1BQU1LLGNBQWMsR0FBbUIsVUFBWTtJQUN4RCxNQUFNQyxjQUFjLEdBQUdmLGdEQUFTLENBQUNpQixPQUFPLENBQUNDLEdBQUcsRUFBRSxFQUFFLFNBQVMsQ0FBQztJQUMxRCxNQUFNQyxTQUFTLEdBQUdwQixxREFBYyxDQUFDZ0IsY0FBYyxDQUFDO0lBRWhELE1BQU1NLEtBQUssR0FBR0YsU0FBUyxDQUFDRyxHQUFHLENBQUMsQ0FBQ0MsUUFBUSxHQUFLO1FBQ3hDLE1BQU1DLEVBQUUsR0FBR0QsUUFBUSxDQUFDRSxPQUFPLFVBQVUsRUFBRSxDQUFDO1FBQ3hDLE9BQU87WUFDTEMsTUFBTSxFQUFFO2dCQUFFRixFQUFFO2FBQUU7U0FDZixDQUFDO0lBQ0osQ0FBQyxDQUFDO0lBRUYsT0FBTztRQUNMSCxLQUFLO1FBQ0xNLFFBQVEsRUFBRSxLQUFLO0tBQ2hCLENBQUM7QUFDSixDQUFDLENBQUM7QUFFSyxNQUFNQyxjQUFjLEdBQW9DLE9BQU8sRUFDcEVGLE1BQU0sS0FDUCxHQUFLO0lBQ0osTUFBTSxFQUFFRixFQUFFLEdBQUUsR0FBR0UsTUFBTTtJQUVyQixNQUFNRyxRQUFRLEdBQUc3QixnREFBUyxDQUFDaUIsT0FBTyxDQUFDQyxHQUFHLEVBQUUsRUFBRSxTQUFTLEVBQUUsQ0FBQyxFQUFFTSxFQUFFLENBQUMsR0FBRyxDQUFDLENBQUM7SUFDaEUsTUFBTU0sWUFBWSxHQUFHL0Isc0RBQWUsQ0FBQzhCLFFBQVEsRUFBRSxNQUFNLENBQUM7SUFDdEQsTUFBTSxFQUFFcEIsT0FBTyxHQUFFdUIsSUFBSSxHQUFFLEdBQUcvQixrREFBTSxDQUFDNkIsWUFBWSxDQUFDO0lBRTlDLE1BQU1HLFNBQVMsR0FBRy9CLGdEQUFPLEVBQUUsQ0FDeEJnQyxHQUFHLENBQUMvQixvREFBVyxDQUFDLENBQ2hCK0IsR0FBRyxDQUFDOUIscURBQVksQ0FBQyxDQUNqQjhCLEdBQUcsQ0FBQzdCLHdEQUFlLENBQUM7SUFDdkIsTUFBTThCLFdBQVcsR0FBR0YsU0FBUyxDQUFDRyxXQUFXLENBQUMzQixPQUFPLENBQUMsQ0FBQzRCLFFBQVEsRUFBRTtJQUU3RCxNQUFNOUIsSUFBSSxHQUFTO1FBQ2pCaUIsRUFBRTtRQUNGaEIsS0FBSyxFQUFFd0IsSUFBSSxDQUFDeEIsS0FBSztRQUNqQkMsT0FBTyxFQUFFMEIsV0FBVztLQUNyQjtJQUVELE9BQU87UUFDTEcsS0FBSyxFQUFFO1lBQ0wvQixJQUFJO1NBQ0w7S0FDRixDQUFDO0FBQ0osQ0FBQyxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbmV4dC1ibG9nLXNzZy8uL3BhZ2VzL1tpZF0udHN4P2MzNTYiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgR2V0U3RhdGljUHJvcHMsIEdldFN0YXRpY1BhdGhzIH0gZnJvbSBcIm5leHRcIjtcclxuaW1wb3J0IGZzIGZyb20gXCJmc1wiO1xyXG5pbXBvcnQgcGF0aCBmcm9tIFwicGF0aFwiO1xyXG5pbXBvcnQgbWF0dGVyIGZyb20gXCJncmF5LW1hdHRlclwiO1xyXG5pbXBvcnQgeyB1bmlmaWVkIH0gZnJvbSBcInVuaWZpZWRcIjtcclxuaW1wb3J0IHJlbWFya1BhcnNlIGZyb20gXCJyZW1hcmstcGFyc2VcIjtcclxuaW1wb3J0IHJlbWFya1JlaHlwZSBmcm9tIFwicmVtYXJrLXJlaHlwZVwiO1xyXG5pbXBvcnQgcmVoeXBlU3RyaW5naWZ5IGZyb20gXCJyZWh5cGUtc3RyaW5naWZ5XCI7XHJcblxyXG5pbnRlcmZhY2UgUG9zdCB7XHJcbiAgaWQ6IHN0cmluZyB8IHN0cmluZ1tdO1xyXG4gIHRpdGxlOiBzdHJpbmc7XHJcbiAgY29udGVudDogc3RyaW5nO1xyXG59XHJcblxyXG5pbnRlcmZhY2UgRGV0YWlsUGFnZVByb3BzIHtcclxuICBwb3N0OiBQb3N0O1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBQb3N0RGV0YWlsKHsgcG9zdCB9OiBEZXRhaWxQYWdlUHJvcHMpOiBKU1guRWxlbWVudCB7XHJcbiAgY29uc3QgeyB0aXRsZSwgY29udGVudCB9ID0gcG9zdDtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXY+XHJcbiAgICAgIDxoMT57dGl0bGV9PC9oMT5cclxuICAgICAgPGRpdiBkYW5nZXJvdXNseVNldElubmVySFRNTD17eyBfX2h0bWw6IGNvbnRlbnQgfX0gLz5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBnZXRTdGF0aWNQYXRoczogR2V0U3RhdGljUGF0aHMgPSBhc3luYyAoKSA9PiB7XHJcbiAgY29uc3QgcG9zdHNEaXJlY3RvcnkgPSBwYXRoLmpvaW4ocHJvY2Vzcy5jd2QoKSwgXCJfX3Bvc3RzXCIpO1xyXG4gIGNvbnN0IGZpbGVOYW1lcyA9IGZzLnJlYWRkaXJTeW5jKHBvc3RzRGlyZWN0b3J5KTtcclxuXHJcbiAgY29uc3QgcGF0aHMgPSBmaWxlTmFtZXMubWFwKChmaWxlTmFtZSkgPT4ge1xyXG4gICAgY29uc3QgaWQgPSBmaWxlTmFtZS5yZXBsYWNlKC9cXC5tZCQvLCBcIlwiKTtcclxuICAgIHJldHVybiB7XHJcbiAgICAgIHBhcmFtczogeyBpZCB9LFxyXG4gICAgfTtcclxuICB9KTtcclxuXHJcbiAgcmV0dXJuIHtcclxuICAgIHBhdGhzLFxyXG4gICAgZmFsbGJhY2s6IGZhbHNlLFxyXG4gIH07XHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgZ2V0U3RhdGljUHJvcHM6IEdldFN0YXRpY1Byb3BzPERldGFpbFBhZ2VQcm9wcz4gPSBhc3luYyAoe1xyXG4gIHBhcmFtcyxcclxufSkgPT4ge1xyXG4gIGNvbnN0IHsgaWQgfSA9IHBhcmFtcztcclxuXHJcbiAgY29uc3QgZmlsZVBhdGggPSBwYXRoLmpvaW4ocHJvY2Vzcy5jd2QoKSwgXCJfX3Bvc3RzXCIsIGAke2lkfS5tZGApO1xyXG4gIGNvbnN0IGZpbGVDb250ZW50cyA9IGZzLnJlYWRGaWxlU3luYyhmaWxlUGF0aCwgXCJ1dGY4XCIpO1xyXG4gIGNvbnN0IHsgY29udGVudCwgZGF0YSB9ID0gbWF0dGVyKGZpbGVDb250ZW50cyk7XHJcblxyXG4gIGNvbnN0IHByb2Nlc3NvciA9IHVuaWZpZWQoKVxyXG4gICAgLnVzZShyZW1hcmtQYXJzZSlcclxuICAgIC51c2UocmVtYXJrUmVoeXBlKVxyXG4gICAgLnVzZShyZWh5cGVTdHJpbmdpZnkpO1xyXG4gIGNvbnN0IGh0bWxDb250ZW50ID0gcHJvY2Vzc29yLnByb2Nlc3NTeW5jKGNvbnRlbnQpLnRvU3RyaW5nKCk7XHJcblxyXG4gIGNvbnN0IHBvc3Q6IFBvc3QgPSB7XHJcbiAgICBpZCxcclxuICAgIHRpdGxlOiBkYXRhLnRpdGxlLFxyXG4gICAgY29udGVudDogaHRtbENvbnRlbnQsXHJcbiAgfTtcclxuXHJcbiAgcmV0dXJuIHtcclxuICAgIHByb3BzOiB7XHJcbiAgICAgIHBvc3QsXHJcbiAgICB9LFxyXG4gIH07XHJcbn07XHJcbiJdLCJuYW1lcyI6WyJmcyIsInBhdGgiLCJtYXR0ZXIiLCJ1bmlmaWVkIiwicmVtYXJrUGFyc2UiLCJyZW1hcmtSZWh5cGUiLCJyZWh5cGVTdHJpbmdpZnkiLCJQb3N0RGV0YWlsIiwicG9zdCIsInRpdGxlIiwiY29udGVudCIsImRpdiIsImgxIiwiZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUwiLCJfX2h0bWwiLCJnZXRTdGF0aWNQYXRocyIsInBvc3RzRGlyZWN0b3J5Iiwiam9pbiIsInByb2Nlc3MiLCJjd2QiLCJmaWxlTmFtZXMiLCJyZWFkZGlyU3luYyIsInBhdGhzIiwibWFwIiwiZmlsZU5hbWUiLCJpZCIsInJlcGxhY2UiLCJwYXJhbXMiLCJmYWxsYmFjayIsImdldFN0YXRpY1Byb3BzIiwiZmlsZVBhdGgiLCJmaWxlQ29udGVudHMiLCJyZWFkRmlsZVN5bmMiLCJkYXRhIiwicHJvY2Vzc29yIiwidXNlIiwiaHRtbENvbnRlbnQiLCJwcm9jZXNzU3luYyIsInRvU3RyaW5nIiwicHJvcHMiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/[id].tsx\n");

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

/***/ "rehype-stringify":
/*!***********************************!*\
  !*** external "rehype-stringify" ***!
  \***********************************/
/***/ ((module) => {

module.exports = import("rehype-stringify");;

/***/ }),

/***/ "remark-parse":
/*!*******************************!*\
  !*** external "remark-parse" ***!
  \*******************************/
/***/ ((module) => {

module.exports = import("remark-parse");;

/***/ }),

/***/ "remark-rehype":
/*!********************************!*\
  !*** external "remark-rehype" ***!
  \********************************/
/***/ ((module) => {

module.exports = import("remark-rehype");;

/***/ }),

/***/ "unified":
/*!**************************!*\
  !*** external "unified" ***!
  \**************************/
/***/ ((module) => {

module.exports = import("unified");;

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