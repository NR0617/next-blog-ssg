"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./pages/index.tsx":
/*!*************************!*\
  !*** ./pages/index.tsx ***!
  \*************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"__N_SSG\": function() { return /* binding */ __N_SSG; },\n/* harmony export */   \"default\": function() { return /* binding */ Page; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./.yarn/cache/react-npm-18.2.0-1eae08fee2-88e38092da.zip/node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./.yarn/cache/react-npm-18.2.0-1eae08fee2-88e38092da.zip/node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\n\nvar __N_SSG = true;\nfunction Page(param) {\n    var title = param.title, content = param.content;\n    console.log(title, content);\n    // const mdText = `\n    // # Our Project\n    // Hello, **Markdown!**.\n    // `;\n    // const mdAst = unified().use(markdown).parse(mdText);\n    // const html_text = unified()\n    //   .use(markdown)\n    //   .use(remark2rehype)\n    //   .use(html)\n    //   .processSync(mdText);\n    // console.log(mdAst);\n    // console.log(html_text.toString());\n    // const result = unified()\n    //   .use(remarkParse)\n    //   .use(remarkRehype)\n    //   .use(rehypeStringify)\n    //   .processSync(\"## Hello, *World*!\");\n    // console.log(result.value);\n    // const [test, setTest] = useState(result.value);\n    // function createMarkup() {\n    //   return { __html: result.value };\n    // }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                children: \"홈\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\User\\\\Desktop\\\\next-blog-ssg\\\\pages\\\\index.tsx\",\n                lineNumber: 48,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                dangerouslySetInnerHTML: {\n                    __html: title\n                }\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\User\\\\Desktop\\\\next-blog-ssg\\\\pages\\\\index.tsx\",\n                lineNumber: 49,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\User\\\\Desktop\\\\next-blog-ssg\\\\pages\\\\index.tsx\",\n        lineNumber: 47,\n        columnNumber: 5\n    }, this);\n}\n_c = Page;\nvar _c;\n$RefreshReg$(_c, \"Page\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleC50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUE7QUFPd0M7O0FBUXpCLFNBQVNDLElBQUksQ0FBQyxLQUFrQixFQUFFO1FBQWxCQyxLQUFLLEdBQVAsS0FBa0IsQ0FBaEJBLEtBQUssRUFBRUMsT0FBTyxHQUFoQixLQUFrQixDQUFUQSxPQUFPO0lBQzNDQyxPQUFPLENBQUNDLEdBQUcsQ0FBQ0gsS0FBSyxFQUFFQyxPQUFPLENBQUMsQ0FBQztJQUM1QixtQkFBbUI7SUFDbkIsZ0JBQWdCO0lBRWhCLHdCQUF3QjtJQUN4QixLQUFLO0lBRUwsdURBQXVEO0lBQ3ZELDhCQUE4QjtJQUM5QixtQkFBbUI7SUFDbkIsd0JBQXdCO0lBQ3hCLGVBQWU7SUFDZiwwQkFBMEI7SUFFMUIsc0JBQXNCO0lBQ3RCLHFDQUFxQztJQUVyQywyQkFBMkI7SUFDM0Isc0JBQXNCO0lBQ3RCLHVCQUF1QjtJQUN2QiwwQkFBMEI7SUFDMUIsd0NBQXdDO0lBRXhDLDZCQUE2QjtJQUM3QixrREFBa0Q7SUFFbEQsNEJBQTRCO0lBQzVCLHFDQUFxQztJQUNyQyxJQUFJO0lBQ0oscUJBQ0UsOERBQUNHLEtBQUc7OzBCQUNGLDhEQUFDQyxJQUFFOzBCQUFDLEdBQUM7Ozs7O29CQUFLOzBCQUNWLDhEQUFDRCxLQUFHO2dCQUFDRSx1QkFBdUIsRUFBRTtvQkFBRUMsTUFBTSxFQUFFUCxLQUFLO2lCQUFFOzs7OztvQkFBSTs7Ozs7O1lBSy9DLENBQ047QUFDSixDQUFDO0FBeEN1QkQsS0FBQUEsSUFBSSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9pbmRleC50c3g/MDdmZiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1bmlmaWVkIH0gZnJvbSBcInVuaWZpZWRcIjtcclxuaW1wb3J0IG1hcmtkb3duIGZyb20gXCJyZW1hcmstcGFyc2VcIjtcclxuaW1wb3J0IHJlbWFyazJyZWh5cGUgZnJvbSBcInJlbWFyay1yZWh5cGVcIjtcclxuaW1wb3J0IGh0bWwgZnJvbSBcInJlaHlwZS1zdHJpbmdpZnlcIjtcclxuaW1wb3J0IHJlbWFya1BhcnNlIGZyb20gXCJyZW1hcmstcGFyc2VcIjtcclxuaW1wb3J0IHJlbWFya1JlaHlwZSBmcm9tIFwicmVtYXJrLXJlaHlwZVwiO1xyXG5pbXBvcnQgcmVoeXBlU3RyaW5naWZ5IGZyb20gXCJyZWh5cGUtc3RyaW5naWZ5XCI7XHJcbmltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5cclxuLy8g7ISc67KE7Kq9XHJcbmltcG9ydCBmcyBmcm9tIFwiZnNcIjtcclxuaW1wb3J0IHBhdGggZnJvbSBcInBhdGhcIjtcclxuaW1wb3J0IG1hdHRlciBmcm9tIFwiZ3JheS1tYXR0ZXJcIjtcclxuaW1wb3J0IHsgbWFya2VkIH0gZnJvbSBcIm1hcmtlZFwiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gUGFnZSh7IHRpdGxlLCBjb250ZW50IH0pIHtcclxuICBjb25zb2xlLmxvZyh0aXRsZSwgY29udGVudCk7XHJcbiAgLy8gY29uc3QgbWRUZXh0ID0gYFxyXG4gIC8vICMgT3VyIFByb2plY3RcclxuXHJcbiAgLy8gSGVsbG8sICoqTWFya2Rvd24hKiouXHJcbiAgLy8gYDtcclxuXHJcbiAgLy8gY29uc3QgbWRBc3QgPSB1bmlmaWVkKCkudXNlKG1hcmtkb3duKS5wYXJzZShtZFRleHQpO1xyXG4gIC8vIGNvbnN0IGh0bWxfdGV4dCA9IHVuaWZpZWQoKVxyXG4gIC8vICAgLnVzZShtYXJrZG93bilcclxuICAvLyAgIC51c2UocmVtYXJrMnJlaHlwZSlcclxuICAvLyAgIC51c2UoaHRtbClcclxuICAvLyAgIC5wcm9jZXNzU3luYyhtZFRleHQpO1xyXG5cclxuICAvLyBjb25zb2xlLmxvZyhtZEFzdCk7XHJcbiAgLy8gY29uc29sZS5sb2coaHRtbF90ZXh0LnRvU3RyaW5nKCkpO1xyXG5cclxuICAvLyBjb25zdCByZXN1bHQgPSB1bmlmaWVkKClcclxuICAvLyAgIC51c2UocmVtYXJrUGFyc2UpXHJcbiAgLy8gICAudXNlKHJlbWFya1JlaHlwZSlcclxuICAvLyAgIC51c2UocmVoeXBlU3RyaW5naWZ5KVxyXG4gIC8vICAgLnByb2Nlc3NTeW5jKFwiIyMgSGVsbG8sICpXb3JsZCohXCIpO1xyXG5cclxuICAvLyBjb25zb2xlLmxvZyhyZXN1bHQudmFsdWUpO1xyXG4gIC8vIGNvbnN0IFt0ZXN0LCBzZXRUZXN0XSA9IHVzZVN0YXRlKHJlc3VsdC52YWx1ZSk7XHJcblxyXG4gIC8vIGZ1bmN0aW9uIGNyZWF0ZU1hcmt1cCgpIHtcclxuICAvLyAgIHJldHVybiB7IF9faHRtbDogcmVzdWx0LnZhbHVlIH07XHJcbiAgLy8gfVxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2PlxyXG4gICAgICA8aDE+7ZmIPC9oMT5cclxuICAgICAgPGRpdiBkYW5nZXJvdXNseVNldElubmVySFRNTD17eyBfX2h0bWw6IHRpdGxlIH19IC8+XHJcblxyXG4gICAgICB7LyogPGRpdiBkYW5nZXJvdXNseVNldElubmVySFRNTD17eyBfX2h0bWw6IHRlc3QgfX0gLz5cclxuICAgICAgPGRpdiBkYW5nZXJvdXNseVNldElubmVySFRNTD17Y3JlYXRlTWFya3VwKCl9IC8+XHJcbiAgICAgIDxkaXYgZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUw9e3sgX19odG1sOiBodG1sX3RleHQudG9TdHJpbmcoKSB9fSAvPiAqL31cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn1cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTdGF0aWNQcm9wcygpIHtcclxuICBjb25zdCBmaWxlUGF0aCA9IHBhdGguam9pbihwcm9jZXNzLmN3ZCgpLCBcIl9fcG9zdHMvdGV4dC5tZFwiKTtcclxuICBjb25zdCBmaWxlQ29udGVudHMgPSBmcy5yZWFkRmlsZVN5bmMoZmlsZVBhdGgsIFwidXRmOFwiKTtcclxuICBjb25zdCB7IGNvbnRlbnQsIGRhdGEgfSA9IG1hdHRlcihmaWxlQ29udGVudHMpO1xyXG4gIGNvbnNvbGUubG9nKG1hdHRlcihmaWxlQ29udGVudHMpKTtcclxuXHJcbiAgY29uc3QgbWFya2Rvd24gPSBtYXJrZWQoY29udGVudCk7XHJcbiAgY29uc3QgdGl0bGUgPSBtYXJrZWQoZGF0YS50aXRsZSk7XHJcblxyXG4gIHJldHVybiB7XHJcbiAgICBwcm9wczoge1xyXG4gICAgICB0aXRsZSxcclxuICAgICAgY29udGVudDogbWFya2Rvd24sXHJcbiAgICB9LFxyXG4gIH07XHJcbn1cclxuIl0sIm5hbWVzIjpbIlJlYWN0IiwiUGFnZSIsInRpdGxlIiwiY29udGVudCIsImNvbnNvbGUiLCJsb2ciLCJkaXYiLCJoMSIsImRhbmdlcm91c2x5U2V0SW5uZXJIVE1MIiwiX19odG1sIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/index.tsx\n"));

/***/ })

});