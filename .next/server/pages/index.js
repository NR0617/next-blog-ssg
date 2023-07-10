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
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Page),\n/* harmony export */   \"getStaticProps\": () => (/* binding */ getStaticProps)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! fs */ \"fs\");\n/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(fs__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! path */ \"path\");\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(path__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var gray_matter__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! gray-matter */ \"gray-matter\");\n/* harmony import */ var gray_matter__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(gray_matter__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var marked__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! marked */ \"marked\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([marked__WEBPACK_IMPORTED_MODULE_5__]);\nmarked__WEBPACK_IMPORTED_MODULE_5__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\n\n// 서버쪽\n\n\n\n\nfunction Page({ title , content  }) {\n    console.log(title, content);\n    // const mdText = `\n    // # Our Project\n    // Hello, **Markdown!**.\n    // `;\n    // const mdAst = unified().use(markdown).parse(mdText);\n    // const html_text = unified()\n    //   .use(markdown)\n    //   .use(remark2rehype)\n    //   .use(html)\n    //   .processSync(mdText);\n    // console.log(mdAst);\n    // console.log(html_text.toString());\n    // const result = unified()\n    //   .use(remarkParse)\n    //   .use(remarkRehype)\n    //   .use(rehypeStringify)\n    //   .processSync(\"## Hello, *World*!\");\n    // console.log(result.value);\n    // const [test, setTest] = useState(result.value);\n    // function createMarkup() {\n    //   return { __html: result.value };\n    // }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                children: \"홈\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\User\\\\Desktop\\\\next-blog-ssg\\\\pages\\\\index.tsx\",\n                lineNumber: 48,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                dangerouslySetInnerHTML: {\n                    __html: title\n                }\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\User\\\\Desktop\\\\next-blog-ssg\\\\pages\\\\index.tsx\",\n                lineNumber: 49,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\User\\\\Desktop\\\\next-blog-ssg\\\\pages\\\\index.tsx\",\n        lineNumber: 47,\n        columnNumber: 5\n    }, this);\n}\nasync function getStaticProps() {\n    //const list = [\"__posts/text.md\", \"__posts/second.md\"];\n    const filePath = path__WEBPACK_IMPORTED_MODULE_3___default().join(process.cwd(), \"__posts/text.md\");\n    const fileContents = fs__WEBPACK_IMPORTED_MODULE_2___default().readFileSync(filePath, \"utf8\");\n    const { content , data  } = gray_matter__WEBPACK_IMPORTED_MODULE_4___default()(fileContents);\n    console.log(gray_matter__WEBPACK_IMPORTED_MODULE_4___default()(fileContents));\n    const markdown = (0,marked__WEBPACK_IMPORTED_MODULE_5__.marked)(data.description);\n    const title = (0,marked__WEBPACK_IMPORTED_MODULE_5__.marked)(data.title);\n    return {\n        props: {\n            title,\n            content: markdown\n        }\n    };\n}\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleC50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBT3dDO0FBRXhDLE1BQU07QUFDYztBQUNJO0FBQ1M7QUFDRDtBQUVqQixTQUFTSyxJQUFJLENBQUMsRUFBRUMsS0FBSyxHQUFFQyxPQUFPLEdBQUUsRUFBRTtJQUMvQ0MsT0FBTyxDQUFDQyxHQUFHLENBQUNILEtBQUssRUFBRUMsT0FBTyxDQUFDLENBQUM7SUFDNUIsbUJBQW1CO0lBQ25CLGdCQUFnQjtJQUVoQix3QkFBd0I7SUFDeEIsS0FBSztJQUVMLHVEQUF1RDtJQUN2RCw4QkFBOEI7SUFDOUIsbUJBQW1CO0lBQ25CLHdCQUF3QjtJQUN4QixlQUFlO0lBQ2YsMEJBQTBCO0lBRTFCLHNCQUFzQjtJQUN0QixxQ0FBcUM7SUFFckMsMkJBQTJCO0lBQzNCLHNCQUFzQjtJQUN0Qix1QkFBdUI7SUFDdkIsMEJBQTBCO0lBQzFCLHdDQUF3QztJQUV4Qyw2QkFBNkI7SUFDN0Isa0RBQWtEO0lBRWxELDRCQUE0QjtJQUM1QixxQ0FBcUM7SUFDckMsSUFBSTtJQUNKLHFCQUNFLDhEQUFDRyxLQUFHOzswQkFDRiw4REFBQ0MsSUFBRTswQkFBQyxHQUFDOzs7OztvQkFBSzswQkFDViw4REFBQ0QsS0FBRztnQkFBQ0UsdUJBQXVCLEVBQUU7b0JBQUVDLE1BQU0sRUFBRVAsS0FBSztpQkFBRTs7Ozs7b0JBQUk7Ozs7OztZQUsvQyxDQUNOO0FBQ0osQ0FBQztBQUVNLGVBQWVRLGNBQWMsR0FBRztJQUNyQyx3REFBd0Q7SUFDeEQsTUFBTUMsUUFBUSxHQUFHYixnREFBUyxDQUFDZSxPQUFPLENBQUNDLEdBQUcsRUFBRSxFQUFFLGlCQUFpQixDQUFDO0lBQzVELE1BQU1DLFlBQVksR0FBR2xCLHNEQUFlLENBQUNjLFFBQVEsRUFBRSxNQUFNLENBQUM7SUFDdEQsTUFBTSxFQUFFUixPQUFPLEdBQUVjLElBQUksR0FBRSxHQUFHbEIsa0RBQU0sQ0FBQ2dCLFlBQVksQ0FBQztJQUU5Q1gsT0FBTyxDQUFDQyxHQUFHLENBQUNOLGtEQUFNLENBQUNnQixZQUFZLENBQUMsQ0FBQyxDQUFDO0lBRWxDLE1BQU1HLFFBQVEsR0FBR2xCLDhDQUFNLENBQUNpQixJQUFJLENBQUNFLFdBQVcsQ0FBQztJQUN6QyxNQUFNakIsS0FBSyxHQUFHRiw4Q0FBTSxDQUFDaUIsSUFBSSxDQUFDZixLQUFLLENBQUM7SUFFaEMsT0FBTztRQUNMa0IsS0FBSyxFQUFFO1lBQ0xsQixLQUFLO1lBQ0xDLE9BQU8sRUFBRWUsUUFBUTtTQUNsQjtLQUNGLENBQUM7QUFDSixDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbmV4dC1ibG9nLXNzZy8uL3BhZ2VzL2luZGV4LnRzeD8wN2ZmIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVuaWZpZWQgfSBmcm9tIFwidW5pZmllZFwiO1xyXG5pbXBvcnQgbWFya2Rvd24gZnJvbSBcInJlbWFyay1wYXJzZVwiO1xyXG5pbXBvcnQgcmVtYXJrMnJlaHlwZSBmcm9tIFwicmVtYXJrLXJlaHlwZVwiO1xyXG5pbXBvcnQgaHRtbCBmcm9tIFwicmVoeXBlLXN0cmluZ2lmeVwiO1xyXG5pbXBvcnQgcmVtYXJrUGFyc2UgZnJvbSBcInJlbWFyay1wYXJzZVwiO1xyXG5pbXBvcnQgcmVtYXJrUmVoeXBlIGZyb20gXCJyZW1hcmstcmVoeXBlXCI7XHJcbmltcG9ydCByZWh5cGVTdHJpbmdpZnkgZnJvbSBcInJlaHlwZS1zdHJpbmdpZnlcIjtcclxuaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcblxyXG4vLyDshJzrsoTsqr1cclxuaW1wb3J0IGZzIGZyb20gXCJmc1wiO1xyXG5pbXBvcnQgcGF0aCBmcm9tIFwicGF0aFwiO1xyXG5pbXBvcnQgbWF0dGVyIGZyb20gXCJncmF5LW1hdHRlclwiO1xyXG5pbXBvcnQgeyBtYXJrZWQgfSBmcm9tIFwibWFya2VkXCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBQYWdlKHsgdGl0bGUsIGNvbnRlbnQgfSkge1xyXG4gIGNvbnNvbGUubG9nKHRpdGxlLCBjb250ZW50KTtcclxuICAvLyBjb25zdCBtZFRleHQgPSBgXHJcbiAgLy8gIyBPdXIgUHJvamVjdFxyXG5cclxuICAvLyBIZWxsbywgKipNYXJrZG93biEqKi5cclxuICAvLyBgO1xyXG5cclxuICAvLyBjb25zdCBtZEFzdCA9IHVuaWZpZWQoKS51c2UobWFya2Rvd24pLnBhcnNlKG1kVGV4dCk7XHJcbiAgLy8gY29uc3QgaHRtbF90ZXh0ID0gdW5pZmllZCgpXHJcbiAgLy8gICAudXNlKG1hcmtkb3duKVxyXG4gIC8vICAgLnVzZShyZW1hcmsycmVoeXBlKVxyXG4gIC8vICAgLnVzZShodG1sKVxyXG4gIC8vICAgLnByb2Nlc3NTeW5jKG1kVGV4dCk7XHJcblxyXG4gIC8vIGNvbnNvbGUubG9nKG1kQXN0KTtcclxuICAvLyBjb25zb2xlLmxvZyhodG1sX3RleHQudG9TdHJpbmcoKSk7XHJcblxyXG4gIC8vIGNvbnN0IHJlc3VsdCA9IHVuaWZpZWQoKVxyXG4gIC8vICAgLnVzZShyZW1hcmtQYXJzZSlcclxuICAvLyAgIC51c2UocmVtYXJrUmVoeXBlKVxyXG4gIC8vICAgLnVzZShyZWh5cGVTdHJpbmdpZnkpXHJcbiAgLy8gICAucHJvY2Vzc1N5bmMoXCIjIyBIZWxsbywgKldvcmxkKiFcIik7XHJcblxyXG4gIC8vIGNvbnNvbGUubG9nKHJlc3VsdC52YWx1ZSk7XHJcbiAgLy8gY29uc3QgW3Rlc3QsIHNldFRlc3RdID0gdXNlU3RhdGUocmVzdWx0LnZhbHVlKTtcclxuXHJcbiAgLy8gZnVuY3Rpb24gY3JlYXRlTWFya3VwKCkge1xyXG4gIC8vICAgcmV0dXJuIHsgX19odG1sOiByZXN1bHQudmFsdWUgfTtcclxuICAvLyB9XHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXY+XHJcbiAgICAgIDxoMT7tmYg8L2gxPlxyXG4gICAgICA8ZGl2IGRhbmdlcm91c2x5U2V0SW5uZXJIVE1MPXt7IF9faHRtbDogdGl0bGUgfX0gLz5cclxuXHJcbiAgICAgIHsvKiA8ZGl2IGRhbmdlcm91c2x5U2V0SW5uZXJIVE1MPXt7IF9faHRtbDogdGVzdCB9fSAvPlxyXG4gICAgICA8ZGl2IGRhbmdlcm91c2x5U2V0SW5uZXJIVE1MPXtjcmVhdGVNYXJrdXAoKX0gLz5cclxuICAgICAgPGRpdiBkYW5nZXJvdXNseVNldElubmVySFRNTD17eyBfX2h0bWw6IGh0bWxfdGV4dC50b1N0cmluZygpIH19IC8+ICovfVxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufVxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFN0YXRpY1Byb3BzKCkge1xyXG4gIC8vY29uc3QgbGlzdCA9IFtcIl9fcG9zdHMvdGV4dC5tZFwiLCBcIl9fcG9zdHMvc2Vjb25kLm1kXCJdO1xyXG4gIGNvbnN0IGZpbGVQYXRoID0gcGF0aC5qb2luKHByb2Nlc3MuY3dkKCksIFwiX19wb3N0cy90ZXh0Lm1kXCIpO1xyXG4gIGNvbnN0IGZpbGVDb250ZW50cyA9IGZzLnJlYWRGaWxlU3luYyhmaWxlUGF0aCwgXCJ1dGY4XCIpO1xyXG4gIGNvbnN0IHsgY29udGVudCwgZGF0YSB9ID0gbWF0dGVyKGZpbGVDb250ZW50cyk7XHJcblxyXG4gIGNvbnNvbGUubG9nKG1hdHRlcihmaWxlQ29udGVudHMpKTtcclxuXHJcbiAgY29uc3QgbWFya2Rvd24gPSBtYXJrZWQoZGF0YS5kZXNjcmlwdGlvbik7XHJcbiAgY29uc3QgdGl0bGUgPSBtYXJrZWQoZGF0YS50aXRsZSk7XHJcblxyXG4gIHJldHVybiB7XHJcbiAgICBwcm9wczoge1xyXG4gICAgICB0aXRsZSxcclxuICAgICAgY29udGVudDogbWFya2Rvd24sXHJcbiAgICB9LFxyXG4gIH07XHJcbn1cclxuIl0sIm5hbWVzIjpbIlJlYWN0IiwiZnMiLCJwYXRoIiwibWF0dGVyIiwibWFya2VkIiwiUGFnZSIsInRpdGxlIiwiY29udGVudCIsImNvbnNvbGUiLCJsb2ciLCJkaXYiLCJoMSIsImRhbmdlcm91c2x5U2V0SW5uZXJIVE1MIiwiX19odG1sIiwiZ2V0U3RhdGljUHJvcHMiLCJmaWxlUGF0aCIsImpvaW4iLCJwcm9jZXNzIiwiY3dkIiwiZmlsZUNvbnRlbnRzIiwicmVhZEZpbGVTeW5jIiwiZGF0YSIsIm1hcmtkb3duIiwiZGVzY3JpcHRpb24iLCJwcm9wcyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/index.tsx\n");

/***/ }),

/***/ "gray-matter":
/*!******************************!*\
  !*** external "gray-matter" ***!
  \******************************/
/***/ ((module) => {

module.exports = require("gray-matter");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

module.exports = require("react");

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
var __webpack_exports__ = (__webpack_exec__("./pages/index.tsx"));
module.exports = __webpack_exports__;

})();