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
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Page),\n/* harmony export */   \"getStaticPaths\": () => (/* binding */ getStaticPaths),\n/* harmony export */   \"getStaticProps\": () => (/* binding */ getStaticProps)\n/* harmony export */ });\nconst getStaticPaths = async ()=>{\n    return {\n        paths: [\n            {\n                params: {\n                    name: \"next.js\"\n                }\n            }\n        ],\n        fallback: true\n    };\n};\nconst getStaticProps = async ()=>{\n    const res = await fetch(\"https://api.github.com/repos/vercel/next.js\");\n    const repo = await res.json();\n    return {\n        props: {\n            repo\n        }\n    };\n};\nfunction Page({ repo  }) {\n    return repo.stargazers_count;\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9baWRdLnRzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFXTyxNQUFNQSxjQUFjLEdBQW1CLFVBQVk7SUFDeEQsT0FBTztRQUNMQyxLQUFLLEVBQUU7WUFDTDtnQkFDRUMsTUFBTSxFQUFFO29CQUNOQyxJQUFJLEVBQUUsU0FBUztpQkFDaEI7YUFDRjtTQUNGO1FBQ0RDLFFBQVEsRUFBRSxJQUFJO0tBQ2YsQ0FBQztBQUNKLENBQUMsQ0FBQztBQUVLLE1BQU1DLGNBQWMsR0FFdEIsVUFBWTtJQUNmLE1BQU1DLEdBQUcsR0FBRyxNQUFNQyxLQUFLLENBQUMsNkNBQTZDLENBQUM7SUFDdEUsTUFBTUMsSUFBSSxHQUFHLE1BQU1GLEdBQUcsQ0FBQ0csSUFBSSxFQUFFO0lBQzdCLE9BQU87UUFBRUMsS0FBSyxFQUFFO1lBQUVGLElBQUk7U0FBRTtLQUFFLENBQUM7QUFDN0IsQ0FBQyxDQUFDO0FBRWEsU0FBU0csSUFBSSxDQUFDLEVBQzNCSCxJQUFJLEdBQzJDLEVBQUU7SUFDakQsT0FBT0EsSUFBSSxDQUFDSSxnQkFBZ0IsQ0FBQztBQUMvQixDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbmV4dC1ibG9nLXNzZy8uL3BhZ2VzL1tpZF0udHN4P2MzNTYiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHR5cGUge1xyXG4gIEluZmVyR2V0U3RhdGljUHJvcHNUeXBlLFxyXG4gIEdldFN0YXRpY1Byb3BzLFxyXG4gIEdldFN0YXRpY1BhdGhzLFxyXG59IGZyb20gXCJuZXh0XCI7XHJcblxyXG50eXBlIFJlcG8gPSB7XHJcbiAgbmFtZTogc3RyaW5nO1xyXG4gIHN0YXJnYXplcnNfY291bnQ6IG51bWJlcjtcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBnZXRTdGF0aWNQYXRoczogR2V0U3RhdGljUGF0aHMgPSBhc3luYyAoKSA9PiB7XHJcbiAgcmV0dXJuIHtcclxuICAgIHBhdGhzOiBbXHJcbiAgICAgIHtcclxuICAgICAgICBwYXJhbXM6IHtcclxuICAgICAgICAgIG5hbWU6IFwibmV4dC5qc1wiLFxyXG4gICAgICAgIH0sXHJcbiAgICAgIH0sIC8vIFNlZSB0aGUgXCJwYXRoc1wiIHNlY3Rpb24gYmVsb3dcclxuICAgIF0sXHJcbiAgICBmYWxsYmFjazogdHJ1ZSwgLy8gZmFsc2Ugb3IgXCJibG9ja2luZ1wiXHJcbiAgfTtcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBnZXRTdGF0aWNQcm9wczogR2V0U3RhdGljUHJvcHM8e1xyXG4gIHJlcG86IFJlcG87XHJcbn0+ID0gYXN5bmMgKCkgPT4ge1xyXG4gIGNvbnN0IHJlcyA9IGF3YWl0IGZldGNoKFwiaHR0cHM6Ly9hcGkuZ2l0aHViLmNvbS9yZXBvcy92ZXJjZWwvbmV4dC5qc1wiKTtcclxuICBjb25zdCByZXBvID0gYXdhaXQgcmVzLmpzb24oKTtcclxuICByZXR1cm4geyBwcm9wczogeyByZXBvIH0gfTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFBhZ2Uoe1xyXG4gIHJlcG8sXHJcbn06IEluZmVyR2V0U3RhdGljUHJvcHNUeXBlPHR5cGVvZiBnZXRTdGF0aWNQcm9wcz4pIHtcclxuICByZXR1cm4gcmVwby5zdGFyZ2F6ZXJzX2NvdW50O1xyXG59XHJcbiJdLCJuYW1lcyI6WyJnZXRTdGF0aWNQYXRocyIsInBhdGhzIiwicGFyYW1zIiwibmFtZSIsImZhbGxiYWNrIiwiZ2V0U3RhdGljUHJvcHMiLCJyZXMiLCJmZXRjaCIsInJlcG8iLCJqc29uIiwicHJvcHMiLCJQYWdlIiwic3RhcmdhemVyc19jb3VudCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/[id].tsx\n");

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