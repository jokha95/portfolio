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

/***/ "./src/components/MainProjects.tsx":
/*!*****************************************!*\
  !*** ./src/components/MainProjects.tsx ***!
  \*****************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/preact/compat/jsx-dev-runtime.mjs\");\n/* harmony import */ var react_icons_bi__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-icons/bi */ \"./node_modules/react-icons/bi/index.esm.js\");\n/* harmony import */ var react_icons_fa__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-icons/fa */ \"./node_modules/react-icons/fa/index.esm.js\");\nvar _this = undefined;\n\n/* eslint-disable no-unused-vars */ \n\nvar MainProjects = function(param) {\n    var projects = param.projects;\n    var _this1 = _this;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                className: \"text-center text-4xl mb-10 md:mb-20\",\n                children: \"Selected Projects\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\houkha\\\\Desktop\\\\portfolio\\\\src\\\\components\\\\MainProjects.tsx\",\n                lineNumber: 14,\n                columnNumber: 7\n            }, _this),\n            projects.map(function(project, index) {\n                return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"item flex gap-[20px] lg:gap-[50px] w-full px-[5vw] md:min-h-[60vh] mb-20 md:my-10 \".concat(index % 2 === 1 ? \"flex-col lg:flex-row\" : \"flex-col lg:flex-row-reverse\"),\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            \"data-scroll\": true,\n                            \"data-scroll-speed\": \"3\",\n                            className: \"lg:flex-1\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"border-[#888] border-2 rounded-[10px] overflow-hidden\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"border-black border-[8px]\",\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                        className: \"w-full h-auto rounded-[12px]\",\n                                        src: project.image[0].url,\n                                        alt: \"\"\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\houkha\\\\Desktop\\\\portfolio\\\\src\\\\components\\\\MainProjects.tsx\",\n                                        lineNumber: 27,\n                                        columnNumber: 17\n                                    }, _this1)\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\houkha\\\\Desktop\\\\portfolio\\\\src\\\\components\\\\MainProjects.tsx\",\n                                    lineNumber: 26,\n                                    columnNumber: 15\n                                }, _this1)\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\houkha\\\\Desktop\\\\portfolio\\\\src\\\\components\\\\MainProjects.tsx\",\n                                lineNumber: 25,\n                                columnNumber: 13\n                            }, _this1)\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\houkha\\\\Desktop\\\\portfolio\\\\src\\\\components\\\\MainProjects.tsx\",\n                            lineNumber: 24,\n                            columnNumber: 11\n                        }, _this1),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"item-info lg:flex-1\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                                    className: \"text-3xl\",\n                                    children: project.title\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\houkha\\\\Desktop\\\\portfolio\\\\src\\\\components\\\\MainProjects.tsx\",\n                                    lineNumber: 36,\n                                    columnNumber: 13\n                                }, _this1),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                    className: \"text-[20px] text-justify my-3\",\n                                    children: project.description\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\houkha\\\\Desktop\\\\portfolio\\\\src\\\\components\\\\MainProjects.tsx\",\n                                    lineNumber: 37,\n                                    columnNumber: 13\n                                }, _this1),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"flex mt-[25px] gap-[20px]\",\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                            href: project.demo,\n                                            target: \"_blank\",\n                                            rel: \"noopener noreferrer\",\n                                            className: \"h-[45px] px-[15px] text-white rounded transition duration-300 flex items-center gap-[10px] bg-indigo-900 hover:bg-[#2884e0]\",\n                                            children: [\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_icons_bi__WEBPACK_IMPORTED_MODULE_1__.BiLinkExternal, {\n                                                    size: 25\n                                                }, void 0, false, {\n                                                    fileName: \"C:\\\\Users\\\\houkha\\\\Desktop\\\\portfolio\\\\src\\\\components\\\\MainProjects.tsx\",\n                                                    lineNumber: 48,\n                                                    columnNumber: 17\n                                                }, _this1),\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                                    children: \" Live Demo\"\n                                                }, void 0, false, {\n                                                    fileName: \"C:\\\\Users\\\\houkha\\\\Desktop\\\\portfolio\\\\src\\\\components\\\\MainProjects.tsx\",\n                                                    lineNumber: 49,\n                                                    columnNumber: 17\n                                                }, _this1)\n                                            ]\n                                        }, void 0, true, {\n                                            fileName: \"C:\\\\Users\\\\houkha\\\\Desktop\\\\portfolio\\\\src\\\\components\\\\MainProjects.tsx\",\n                                            lineNumber: 42,\n                                            columnNumber: 15\n                                        }, _this1),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                            href: project.github,\n                                            target: \"_blank\",\n                                            rel: \"noopener noreferrer\",\n                                            className: \"h-[45px] px-[15px] text-white rounded transition duration-300 flex items-center gap-[10px] bg-gray-500 hover:bg-[#191e25]\",\n                                            children: [\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_icons_fa__WEBPACK_IMPORTED_MODULE_2__.FaGithub, {\n                                                    size: 25\n                                                }, void 0, false, {\n                                                    fileName: \"C:\\\\Users\\\\houkha\\\\Desktop\\\\portfolio\\\\src\\\\components\\\\MainProjects.tsx\",\n                                                    lineNumber: 57,\n                                                    columnNumber: 17\n                                                }, _this1),\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                                    children: \" View Source\"\n                                                }, void 0, false, {\n                                                    fileName: \"C:\\\\Users\\\\houkha\\\\Desktop\\\\portfolio\\\\src\\\\components\\\\MainProjects.tsx\",\n                                                    lineNumber: 58,\n                                                    columnNumber: 17\n                                                }, _this1)\n                                            ]\n                                        }, void 0, true, {\n                                            fileName: \"C:\\\\Users\\\\houkha\\\\Desktop\\\\portfolio\\\\src\\\\components\\\\MainProjects.tsx\",\n                                            lineNumber: 51,\n                                            columnNumber: 15\n                                        }, _this1)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"C:\\\\Users\\\\houkha\\\\Desktop\\\\portfolio\\\\src\\\\components\\\\MainProjects.tsx\",\n                                    lineNumber: 41,\n                                    columnNumber: 13\n                                }, _this1)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"C:\\\\Users\\\\houkha\\\\Desktop\\\\portfolio\\\\src\\\\components\\\\MainProjects.tsx\",\n                            lineNumber: 35,\n                            columnNumber: 11\n                        }, _this1)\n                    ]\n                }, project.id, true, {\n                    fileName: \"C:\\\\Users\\\\houkha\\\\Desktop\\\\portfolio\\\\src\\\\components\\\\MainProjects.tsx\",\n                    lineNumber: 16,\n                    columnNumber: 9\n                }, _this1);\n            })\n        ]\n    }, void 0, true);\n};\n_c = MainProjects;\n/* harmony default export */ __webpack_exports__[\"default\"] = (MainProjects);\nvar _c;\n$RefreshReg$(_c, \"MainProjects\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9NYWluUHJvamVjdHMudHN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7QUFDQTs7QUFEQSxtQ0FBbUMsQ0FDYTtBQUVOO0FBTzFDLElBQU1FLFlBQVksR0FBMEIsZ0JBQWtCO1FBQWZDLFFBQVEsU0FBUkEsUUFBUTs7SUFDckQscUJBQ0U7OzBCQUNFLDhEQUFDQyxJQUFFO2dCQUFDQyxTQUFTLEVBQUMscUNBQXFDOzBCQUFDLG1CQUFpQjs7Ozs7cUJBQUs7WUFDekVGLFFBQVEsQ0FBQ0csR0FBRyxDQUFDLFNBQUNDLE9BQU8sRUFBRUMsS0FBSztxQ0FDM0IsOERBQUNDLEtBQUc7b0JBRUZKLFNBQVMsRUFBRSxvRkFBbUYsQ0FJN0YsT0FIQ0csS0FBSyxHQUFHLENBQUMsS0FBSyxDQUFDLEdBQ1gsc0JBQXNCLEdBQ3RCLDhCQUE4QixDQUNsQzs7c0NBRUYsOERBQUNDLEtBQUc7NEJBQUNDLGFBQVc7NEJBQUNDLG1CQUFpQixFQUFDLEdBQUc7NEJBQUNOLFNBQVMsRUFBQyxXQUFXO3NDQUMxRCw0RUFBQ0ksS0FBRztnQ0FBQ0osU0FBUyxFQUFDLHVEQUF1RDswQ0FDcEUsNEVBQUNJLEtBQUc7b0NBQUNKLFNBQVMsRUFBQywyQkFBMkI7OENBQ3hDLDRFQUFDTyxLQUFHO3dDQUNGUCxTQUFTLEVBQUMsOEJBQThCO3dDQUN4Q1EsR0FBRyxFQUFFTixPQUFPLENBQUNPLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQ0MsR0FBRzt3Q0FDekJDLEdBQUcsRUFBQyxFQUFFOzs7Ozs4Q0FDTjs7Ozs7MENBQ0U7Ozs7O3NDQUNGOzs7OztrQ0FDRjtzQ0FDTiw4REFBQ1AsS0FBRzs0QkFBQ0osU0FBUyxFQUFDLHFCQUFxQjs7OENBQ2xDLDhEQUFDRCxJQUFFO29DQUFDQyxTQUFTLEVBQUMsVUFBVTs4Q0FBRUUsT0FBTyxDQUFDVSxLQUFLOzs7OzswQ0FBTTs4Q0FDN0MsOERBQUNDLEdBQUM7b0NBQUNiLFNBQVMsRUFBQywrQkFBK0I7OENBQ3pDRSxPQUFPLENBQUNZLFdBQVc7Ozs7OzBDQUNsQjs4Q0FFSiw4REFBQ1YsS0FBRztvQ0FBQ0osU0FBUyxFQUFDLDJCQUEyQjs7c0RBQ3hDLDhEQUFDZSxHQUFDOzRDQUNBQyxJQUFJLEVBQUVkLE9BQU8sQ0FBQ2UsSUFBSTs0Q0FDbEJDLE1BQU0sRUFBQyxRQUFROzRDQUNmQyxHQUFHLEVBQUMscUJBQXFCOzRDQUN6Qm5CLFNBQVMsRUFBQyw2SEFBNkg7OzhEQUV2SSw4REFBQ0wsMERBQWM7b0RBQUN5QixJQUFJLEVBQUUsRUFBRTs7Ozs7MERBQUk7OERBQzVCLDhEQUFDQyxNQUFJOzhEQUFDLFlBQVU7Ozs7OzBEQUFPOzs7Ozs7a0RBQ3JCO3NEQUNKLDhEQUFDTixHQUFDOzRDQUNBQyxJQUFJLEVBQUVkLE9BQU8sQ0FBQ29CLE1BQU07NENBQ3BCSixNQUFNLEVBQUMsUUFBUTs0Q0FDZkMsR0FBRyxFQUFDLHFCQUFxQjs0Q0FDekJuQixTQUFTLEVBQUMsMkhBQTJIOzs4REFFckksOERBQUNKLG9EQUFRO29EQUFDd0IsSUFBSSxFQUFFLEVBQUU7Ozs7OzBEQUFJOzhEQUN0Qiw4REFBQ0MsTUFBSTs4REFBQyxjQUFZOzs7OzswREFBTzs7Ozs7O2tEQUN2Qjs7Ozs7OzBDQUNBOzs7Ozs7a0NBQ0Y7O21CQTVDRG5CLE9BQU8sQ0FBQ3FCLEVBQUU7Ozs7MEJBNkNYO2FBQ1AsQ0FBQzs7b0JBQ0QsQ0FDSDtDQUNIO0FBdkRLMUIsS0FBQUEsWUFBWTtBQXlEbEIsK0RBQWVBLFlBQVksRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvY29tcG9uZW50cy9NYWluUHJvamVjdHMudHN4PzE2NjQiXSwic291cmNlc0NvbnRlbnQiOlsiLyogZXNsaW50LWRpc2FibGUgbm8tdW51c2VkLXZhcnMgKi9cbmltcG9ydCB7IEJpTGlua0V4dGVybmFsIH0gZnJvbSBcInJlYWN0LWljb25zL2JpXCI7XG5pbXBvcnQgeyBGQyB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgRmFHaXRodWIgfSBmcm9tIFwicmVhY3QtaWNvbnMvZmFcIjtcbmltcG9ydCB7IGFsbERhdGFUeXBlIH0gZnJvbSBcIi4uL3NoYXJlZC90eXBlc1wiO1xuXG5pbnRlcmZhY2UgTWFpblByb2plY3RzUHJvcHMge1xuICBwcm9qZWN0czogYW55O1xufVxuXG5jb25zdCBNYWluUHJvamVjdHM6IEZDPE1haW5Qcm9qZWN0c1Byb3BzPiA9ICh7IHByb2plY3RzIH0pID0+IHtcbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgPGgxIGNsYXNzTmFtZT1cInRleHQtY2VudGVyIHRleHQtNHhsIG1iLTEwIG1kOm1iLTIwXCI+U2VsZWN0ZWQgUHJvamVjdHM8L2gxPlxuICAgICAge3Byb2plY3RzLm1hcCgocHJvamVjdCwgaW5kZXgpID0+IChcbiAgICAgICAgPGRpdlxuICAgICAgICAgIGtleT17cHJvamVjdC5pZH1cbiAgICAgICAgICBjbGFzc05hbWU9e2BpdGVtIGZsZXggZ2FwLVsyMHB4XSBsZzpnYXAtWzUwcHhdIHctZnVsbCBweC1bNXZ3XSBtZDptaW4taC1bNjB2aF0gbWItMjAgbWQ6bXktMTAgJHtcbiAgICAgICAgICAgIGluZGV4ICUgMiA9PT0gMVxuICAgICAgICAgICAgICA/IFwiZmxleC1jb2wgbGc6ZmxleC1yb3dcIlxuICAgICAgICAgICAgICA6IFwiZmxleC1jb2wgbGc6ZmxleC1yb3ctcmV2ZXJzZVwiXG4gICAgICAgICAgfWB9XG4gICAgICAgID5cbiAgICAgICAgICA8ZGl2IGRhdGEtc2Nyb2xsIGRhdGEtc2Nyb2xsLXNwZWVkPVwiM1wiIGNsYXNzTmFtZT1cImxnOmZsZXgtMVwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJib3JkZXItWyM4ODhdIGJvcmRlci0yIHJvdW5kZWQtWzEwcHhdIG92ZXJmbG93LWhpZGRlblwiPlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJvcmRlci1ibGFjayBib3JkZXItWzhweF1cIj5cbiAgICAgICAgICAgICAgICA8aW1nXG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ3LWZ1bGwgaC1hdXRvIHJvdW5kZWQtWzEycHhdXCJcbiAgICAgICAgICAgICAgICAgIHNyYz17cHJvamVjdC5pbWFnZVswXS51cmx9XG4gICAgICAgICAgICAgICAgICBhbHQ9XCJcIlxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpdGVtLWluZm8gbGc6ZmxleC0xXCI+XG4gICAgICAgICAgICA8aDEgY2xhc3NOYW1lPVwidGV4dC0zeGxcIj57cHJvamVjdC50aXRsZX08L2gxPlxuICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC1bMjBweF0gdGV4dC1qdXN0aWZ5IG15LTNcIj5cbiAgICAgICAgICAgICAge3Byb2plY3QuZGVzY3JpcHRpb259XG4gICAgICAgICAgICA8L3A+XG5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBtdC1bMjVweF0gZ2FwLVsyMHB4XVwiPlxuICAgICAgICAgICAgICA8YVxuICAgICAgICAgICAgICAgIGhyZWY9e3Byb2plY3QuZGVtb31cbiAgICAgICAgICAgICAgICB0YXJnZXQ9XCJfYmxhbmtcIlxuICAgICAgICAgICAgICAgIHJlbD1cIm5vb3BlbmVyIG5vcmVmZXJyZXJcIlxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImgtWzQ1cHhdIHB4LVsxNXB4XSB0ZXh0LXdoaXRlIHJvdW5kZWQgdHJhbnNpdGlvbiBkdXJhdGlvbi0zMDAgZmxleCBpdGVtcy1jZW50ZXIgZ2FwLVsxMHB4XSBiZy1pbmRpZ28tOTAwIGhvdmVyOmJnLVsjMjg4NGUwXVwiXG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICA8QmlMaW5rRXh0ZXJuYWwgc2l6ZT17MjV9IC8+XG4gICAgICAgICAgICAgICAgPHNwYW4+IExpdmUgRGVtbzwvc3Bhbj5cbiAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICA8YVxuICAgICAgICAgICAgICAgIGhyZWY9e3Byb2plY3QuZ2l0aHVifVxuICAgICAgICAgICAgICAgIHRhcmdldD1cIl9ibGFua1wiXG4gICAgICAgICAgICAgICAgcmVsPVwibm9vcGVuZXIgbm9yZWZlcnJlclwiXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiaC1bNDVweF0gcHgtWzE1cHhdIHRleHQtd2hpdGUgcm91bmRlZCB0cmFuc2l0aW9uIGR1cmF0aW9uLTMwMCBmbGV4IGl0ZW1zLWNlbnRlciBnYXAtWzEwcHhdIGJnLWdyYXktNTAwIGhvdmVyOmJnLVsjMTkxZTI1XVwiXG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICA8RmFHaXRodWIgc2l6ZT17MjV9IC8+XG4gICAgICAgICAgICAgICAgPHNwYW4+IFZpZXcgU291cmNlPC9zcGFuPlxuICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICApKX1cbiAgICA8Lz5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IE1haW5Qcm9qZWN0cztcbiJdLCJuYW1lcyI6WyJCaUxpbmtFeHRlcm5hbCIsIkZhR2l0aHViIiwiTWFpblByb2plY3RzIiwicHJvamVjdHMiLCJoMSIsImNsYXNzTmFtZSIsIm1hcCIsInByb2plY3QiLCJpbmRleCIsImRpdiIsImRhdGEtc2Nyb2xsIiwiZGF0YS1zY3JvbGwtc3BlZWQiLCJpbWciLCJzcmMiLCJpbWFnZSIsInVybCIsImFsdCIsInRpdGxlIiwicCIsImRlc2NyaXB0aW9uIiwiYSIsImhyZWYiLCJkZW1vIiwidGFyZ2V0IiwicmVsIiwic2l6ZSIsInNwYW4iLCJnaXRodWIiLCJpZCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/components/MainProjects.tsx\n");

/***/ })

});