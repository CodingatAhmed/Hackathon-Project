"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/[myproducts]/[ProductDetail]/page",{

/***/ "(app-pages-browser)/./src/components/myCarousel.tsx":
/*!***************************************!*\
  !*** ./src/components/myCarousel.tsx ***!
  \***************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Carousel; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/image */ \"(app-pages-browser)/./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _public_icon_next_svg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../public/icon-next.svg */ \"(app-pages-browser)/./public/icon-next.svg\");\n/* harmony import */ var _public_icon_previous_svg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../public/icon-previous.svg */ \"(app-pages-browser)/./public/icon-previous.svg\");\n/* harmony import */ var _ui_button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./ui/button */ \"(app-pages-browser)/./src/components/ui/button.tsx\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\nconst thumbnails = [\n    \"https://static.vecteezy.com/system/resources/previews/012/628/220/original/plain-black-t-shirt-on-transparent-background-free-png.png\",\n    \"https://static.vecteezy.com/system/resources/previews/012/628/220/original/plain-black-t-shirt-on-transparent-background-free-png.png\",\n    \"https://static.vecteezy.com/system/resources/previews/012/628/220/original/plain-black-t-shirt-on-transparent-background-free-png.png\",\n    \"https://static.vecteezy.com/system/resources/previews/012/628/220/original/plain-black-t-shirt-on-transparent-background-free-png.png\"\n];\nfunction Carousel(param) {\n    let { children: slides, autoSlide = false, autoSlideInterval = 3000 } = param;\n    _s();\n    const [curr, setCurr] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);\n    const prev = ()=>setCurr((curr)=>curr === 0 ? slides.length - 1 : curr - 1);\n    const next = ()=>setCurr((curr)=>curr === slides.length - 1 ? 0 : curr + 1);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        if (!autoSlide) return;\n        const slideInterval = setInterval(next, autoSlideInterval);\n        return ()=>clearInterval(slideInterval);\n    });\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"flex flex-col\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex max-w-[250px] mx-auto overflow-hidden relative gap-x-5 max-h-72 md:max-h-full md:rounded-2xl\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        style: {\n                            transform: \"translateX(-\".concat(curr * 100, \"%)\")\n                        },\n                        className: \"flex transition-transform ease-out duration-500\",\n                        children: slides\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\fatim\\\\OneDrive\\\\Documents\\\\next js files\\\\Hackathon\\\\hackathon piaic project\\\\hackathon-project\\\\src\\\\components\\\\myCarousel.tsx\",\n                        lineNumber: 34,\n                        columnNumber: 7\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"absolute inset-0 flex items-center justify-between p-4\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ui_button__WEBPACK_IMPORTED_MODULE_5__.Button, {\n                                onClick: prev,\n                                className: \"bg-white rounded-full p-3 md:hidden\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {\n                                    className: \"h-[10px] w-[10px]\",\n                                    src: _public_icon_previous_svg__WEBPACK_IMPORTED_MODULE_4__[\"default\"],\n                                    alt: \"\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\fatim\\\\OneDrive\\\\Documents\\\\next js files\\\\Hackathon\\\\hackathon piaic project\\\\hackathon-project\\\\src\\\\components\\\\myCarousel.tsx\",\n                                    lineNumber: 38,\n                                    columnNumber: 80\n                                }, this)\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\fatim\\\\OneDrive\\\\Documents\\\\next js files\\\\Hackathon\\\\hackathon piaic project\\\\hackathon-project\\\\src\\\\components\\\\myCarousel.tsx\",\n                                lineNumber: 38,\n                                columnNumber: 9\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ui_button__WEBPACK_IMPORTED_MODULE_5__.Button, {\n                                onClick: next,\n                                className: \"bg-white rounded-full p-3 md:hidden\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {\n                                    className: \"h-[10px] w-[10px]\",\n                                    src: _public_icon_next_svg__WEBPACK_IMPORTED_MODULE_3__[\"default\"],\n                                    alt: \"\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\fatim\\\\OneDrive\\\\Documents\\\\next js files\\\\Hackathon\\\\hackathon piaic project\\\\hackathon-project\\\\src\\\\components\\\\myCarousel.tsx\",\n                                    lineNumber: 40,\n                                    columnNumber: 80\n                                }, this)\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\fatim\\\\OneDrive\\\\Documents\\\\next js files\\\\Hackathon\\\\hackathon piaic project\\\\hackathon-project\\\\src\\\\components\\\\myCarousel.tsx\",\n                                lineNumber: 40,\n                                columnNumber: 9\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\fatim\\\\OneDrive\\\\Documents\\\\next js files\\\\Hackathon\\\\hackathon piaic project\\\\hackathon-project\\\\src\\\\components\\\\myCarousel.tsx\",\n                        lineNumber: 37,\n                        columnNumber: 7\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\fatim\\\\OneDrive\\\\Documents\\\\next js files\\\\Hackathon\\\\hackathon piaic project\\\\hackathon-project\\\\src\\\\components\\\\myCarousel.tsx\",\n                lineNumber: 33,\n                columnNumber: 5\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"to-hide flex justify-center md:flex w-full gap-8 mt-8 h-20\",\n                children: thumbnails.map((t, i)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        onClick: ()=>setCurr(i),\n                        className: \"hover:cursor-pointer focus:opacity-20 rounded-xl\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"rounded-xl \\n                \".concat(curr === i && \"border-2 border-orange\"),\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {\n                                className: \"rounded-xl \\n                  \".concat(curr === i && \"opacity-40\"),\n                                width: 200,\n                                height: 200,\n                                src: t,\n                                alt: \"\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\fatim\\\\OneDrive\\\\Documents\\\\next js files\\\\Hackathon\\\\hackathon piaic project\\\\hackathon-project\\\\src\\\\components\\\\myCarousel.tsx\",\n                                lineNumber: 66,\n                                columnNumber: 17\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\fatim\\\\OneDrive\\\\Documents\\\\next js files\\\\Hackathon\\\\hackathon piaic project\\\\hackathon-project\\\\src\\\\components\\\\myCarousel.tsx\",\n                            lineNumber: 64,\n                            columnNumber: 15\n                        }, this)\n                    }, i, false, {\n                        fileName: \"C:\\\\Users\\\\fatim\\\\OneDrive\\\\Documents\\\\next js files\\\\Hackathon\\\\hackathon piaic project\\\\hackathon-project\\\\src\\\\components\\\\myCarousel.tsx\",\n                        lineNumber: 59,\n                        columnNumber: 11\n                    }, this))\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\fatim\\\\OneDrive\\\\Documents\\\\next js files\\\\Hackathon\\\\hackathon piaic project\\\\hackathon-project\\\\src\\\\components\\\\myCarousel.tsx\",\n                lineNumber: 56,\n                columnNumber: 5\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\fatim\\\\OneDrive\\\\Documents\\\\next js files\\\\Hackathon\\\\hackathon piaic project\\\\hackathon-project\\\\src\\\\components\\\\myCarousel.tsx\",\n        lineNumber: 32,\n        columnNumber: 3\n    }, this);\n}\n_s(Carousel, \"gWXkG9yR6KANghhymC7ZEtLY3KY=\");\n_c = Carousel;\nvar _c;\n$RefreshReg$(_c, \"Carousel\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9jb21wb25lbnRzL215Q2Fyb3VzZWwudHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQTJDO0FBQ2I7QUFDa0I7QUFDSztBQUNqQjtBQUVwQyxNQUFNTSxhQUFhO0lBQ2pCO0lBQ0E7SUFDQTtJQUNBO0NBQ0Q7QUFFYyxTQUFTQyxTQUFTLEtBSTVCO1FBSjRCLEVBQy9CQyxVQUFVQyxNQUFNLEVBQ2hCQyxZQUFZLEtBQUssRUFDakJDLG9CQUFvQixJQUFJLEVBQ3JCLEdBSjRCOztJQUsvQixNQUFNLENBQUNDLE1BQU1DLFFBQVEsR0FBR2IsK0NBQVFBLENBQUM7SUFFakMsTUFBTWMsT0FBTyxJQUNYRCxRQUFRLENBQUNELE9BQVVBLFNBQVMsSUFBSUgsT0FBT00sTUFBTSxHQUFHLElBQUlILE9BQU87SUFDN0QsTUFBTUksT0FBTyxJQUNYSCxRQUFRLENBQUNELE9BQVVBLFNBQVNILE9BQU9NLE1BQU0sR0FBRyxJQUFJLElBQUlILE9BQU87SUFFN0RYLGdEQUFTQSxDQUFDO1FBQ1IsSUFBSSxDQUFDUyxXQUFXO1FBQ2hCLE1BQU1PLGdCQUFnQkMsWUFBWUYsTUFBTUw7UUFDeEMsT0FBTyxJQUFNUSxjQUFjRjtJQUM3QjtJQUNBLHFCQUNBLDhEQUFDRztRQUFJQyxXQUFVOzswQkFDYiw4REFBQ0Q7Z0JBQUlDLFdBQVU7O2tDQUNiLDhEQUFDRDt3QkFBSUUsT0FBTzs0QkFBRUMsV0FBVyxlQUEwQixPQUFYWCxPQUFPLEtBQUk7d0JBQUk7d0JBQUdTLFdBQVU7a0NBQ2pFWjs7Ozs7O2tDQUVILDhEQUFDVzt3QkFBSUMsV0FBVTs7MENBQ2IsOERBQUNoQiw4Q0FBTUE7Z0NBQUNtQixTQUFTVjtnQ0FBTU8sV0FBVTswQ0FBc0MsNEVBQUNuQixtREFBS0E7b0NBQUNtQixXQUFVO29DQUFvQkksS0FBS3JCLGlFQUFRQTtvQ0FBRXNCLEtBQUk7Ozs7Ozs7Ozs7OzBDQUUvSCw4REFBQ3JCLDhDQUFNQTtnQ0FBQ21CLFNBQVNSO2dDQUFNSyxXQUFVOzBDQUFzQyw0RUFBQ25CLG1EQUFLQTtvQ0FBQ21CLFdBQVU7b0NBQW9CSSxLQUFLdEIsNkRBQU9BO29DQUFFdUIsS0FBSTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7MEJBZ0JsSSw4REFBQ047Z0JBQUlDLFdBQVU7MEJBRVhmLFdBQVdxQixHQUFHLENBQUUsQ0FBQ0MsR0FBR0Msa0JBQ2xCLDhEQUFDVDt3QkFFQ0ksU0FBVSxJQUFNWCxRQUFRZ0I7d0JBQ3hCUixXQUFVO2tDQUVSLDRFQUFDRDs0QkFBSUMsV0FBVyxnQ0FDNkIsT0FBeENULFNBQVNpQixLQUFLO3NDQUNqQiw0RUFBQzNCLG1EQUFLQTtnQ0FBQ21CLFdBQVcsa0NBQ2UsT0FBNUJULFNBQVNpQixLQUFLO2dDQUFpQkMsT0FBTztnQ0FBS0MsUUFBUTtnQ0FBS04sS0FBTUc7Z0NBQUlGLEtBQUk7Ozs7Ozs7Ozs7O3VCQVAxRUc7Ozs7Ozs7Ozs7Ozs7Ozs7QUFnQmY7R0E5RHNCdEI7S0FBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvbXlDYXJvdXNlbC50c3g/MGI3OSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCJcclxuaW1wb3J0IEltYWdlIGZyb20gXCJuZXh0L2ltYWdlXCJcclxuaW1wb3J0IG5leHRwaWMgZnJvbSBcIi4uLy4uL3B1YmxpYy9pY29uLW5leHQuc3ZnXCJcclxuaW1wb3J0IHByZXZpb3VzIGZyb20gXCIuLi8uLi9wdWJsaWMvaWNvbi1wcmV2aW91cy5zdmdcIlxyXG5pbXBvcnQgeyBCdXR0b24gfSBmcm9tIFwiLi91aS9idXR0b25cIlxyXG5cclxuY29uc3QgdGh1bWJuYWlscyA9IFtcclxuICBcImh0dHBzOi8vc3RhdGljLnZlY3RlZXp5LmNvbS9zeXN0ZW0vcmVzb3VyY2VzL3ByZXZpZXdzLzAxMi82MjgvMjIwL29yaWdpbmFsL3BsYWluLWJsYWNrLXQtc2hpcnQtb24tdHJhbnNwYXJlbnQtYmFja2dyb3VuZC1mcmVlLXBuZy5wbmdcIixcclxuICBcImh0dHBzOi8vc3RhdGljLnZlY3RlZXp5LmNvbS9zeXN0ZW0vcmVzb3VyY2VzL3ByZXZpZXdzLzAxMi82MjgvMjIwL29yaWdpbmFsL3BsYWluLWJsYWNrLXQtc2hpcnQtb24tdHJhbnNwYXJlbnQtYmFja2dyb3VuZC1mcmVlLXBuZy5wbmdcIixcclxuICBcImh0dHBzOi8vc3RhdGljLnZlY3RlZXp5LmNvbS9zeXN0ZW0vcmVzb3VyY2VzL3ByZXZpZXdzLzAxMi82MjgvMjIwL29yaWdpbmFsL3BsYWluLWJsYWNrLXQtc2hpcnQtb24tdHJhbnNwYXJlbnQtYmFja2dyb3VuZC1mcmVlLXBuZy5wbmdcIixcclxuICBcImh0dHBzOi8vc3RhdGljLnZlY3RlZXp5LmNvbS9zeXN0ZW0vcmVzb3VyY2VzL3ByZXZpZXdzLzAxMi82MjgvMjIwL29yaWdpbmFsL3BsYWluLWJsYWNrLXQtc2hpcnQtb24tdHJhbnNwYXJlbnQtYmFja2dyb3VuZC1mcmVlLXBuZy5wbmdcIlxyXG5dXHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBDYXJvdXNlbCh7XHJcbiAgY2hpbGRyZW46IHNsaWRlcyxcclxuICBhdXRvU2xpZGUgPSBmYWxzZSxcclxuICBhdXRvU2xpZGVJbnRlcnZhbCA9IDMwMDAsXHJcbn06YW55KSB7XHJcbiAgY29uc3QgW2N1cnIsIHNldEN1cnJdID0gdXNlU3RhdGUoMClcclxuXHJcbiAgY29uc3QgcHJldiA9ICgpID0+XHJcbiAgICBzZXRDdXJyKChjdXJyKSA9PiAoY3VyciA9PT0gMCA/IHNsaWRlcy5sZW5ndGggLSAxIDogY3VyciAtIDEpKVxyXG4gIGNvbnN0IG5leHQgPSAoKSA9PlxyXG4gICAgc2V0Q3VycigoY3VycikgPT4gKGN1cnIgPT09IHNsaWRlcy5sZW5ndGggLSAxID8gMCA6IGN1cnIgKyAxKSlcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGlmICghYXV0b1NsaWRlKSByZXR1cm5cclxuICAgIGNvbnN0IHNsaWRlSW50ZXJ2YWwgPSBzZXRJbnRlcnZhbChuZXh0LCBhdXRvU2xpZGVJbnRlcnZhbClcclxuICAgIHJldHVybiAoKSA9PiBjbGVhckludGVydmFsKHNsaWRlSW50ZXJ2YWwpXHJcbiAgfSlcclxuICByZXR1cm4gKFxyXG4gIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LWNvbFwiPlxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IG1heC13LVsyNTBweF0gbXgtYXV0byBvdmVyZmxvdy1oaWRkZW4gcmVsYXRpdmUgZ2FwLXgtNSBtYXgtaC03MiBtZDptYXgtaC1mdWxsIG1kOnJvdW5kZWQtMnhsXCI+XHJcbiAgICAgIDxkaXYgc3R5bGU9e3sgdHJhbnNmb3JtOiBgdHJhbnNsYXRlWCgtJHtjdXJyICogMTAwfSUpYCB9fSBjbGFzc05hbWU9XCJmbGV4IHRyYW5zaXRpb24tdHJhbnNmb3JtIGVhc2Utb3V0IGR1cmF0aW9uLTUwMFwiPlxyXG4gICAgICAgIHtzbGlkZXN9XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImFic29sdXRlIGluc2V0LTAgZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1iZXR3ZWVuIHAtNFwiPlxyXG4gICAgICAgIDxCdXR0b24gb25DbGljaz17cHJldn0gY2xhc3NOYW1lPVwiYmctd2hpdGUgcm91bmRlZC1mdWxsIHAtMyBtZDpoaWRkZW5cIj48SW1hZ2UgY2xhc3NOYW1lPVwiaC1bMTBweF0gdy1bMTBweF1cIiBzcmM9e3ByZXZpb3VzfSBhbHQ9XCJcIi8+XHJcbiAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICAgPEJ1dHRvbiBvbkNsaWNrPXtuZXh0fSBjbGFzc05hbWU9XCJiZy13aGl0ZSByb3VuZGVkLWZ1bGwgcC0zIG1kOmhpZGRlblwiPjxJbWFnZSBjbGFzc05hbWU9XCJoLVsxMHB4XSB3LVsxMHB4XVwiIHNyYz17bmV4dHBpY30gYWx0PVwiXCIvPlxyXG4gICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgey8qIDxkaXYgY2xhc3NOYW1lPVwiYWJzb2x1dGUgYm90dG9tLTQgcmlnaHQtMCBsZWZ0LTBcIj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyIGdhcC0yXCI+XHJcbiAgICAgICAgICB7c2xpZGVzLm1hcCgoXywgaSkgPT4gKFxyXG4gICAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPXtgXHJcbiAgICAgICAgICAgICAgdHJhbnNpdGlvbi1hbGwgdy0zIGgtMyBiZy13aGl0ZSByb3VuZGVkLWZ1bGxcclxuICAgICAgICAgICAgICAke2N1cnIgPT09IGkgPyBcInAtMlwiIDogXCJiZy1vcGFjaXR5LTUwXCJ9XHJcbiAgICAgICAgICAgIGB9XHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICApKX1cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+ICovfVxyXG4gICAgPC9kaXY+XHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cInRvLWhpZGUgZmxleCBqdXN0aWZ5LWNlbnRlciBtZDpmbGV4IHctZnVsbCBnYXAtOCBtdC04IGgtMjBcIj5cclxuICAgICAge1xyXG4gICAgICAgIHRodW1ibmFpbHMubWFwKCAodCwgaSkgPT4gKFxyXG4gICAgICAgICAgPGRpdiBcclxuICAgICAgICAgICAga2V5PXtpfVxyXG4gICAgICAgICAgICBvbkNsaWNrPXsgKCkgPT4gc2V0Q3VycihpKSB9XHJcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cImhvdmVyOmN1cnNvci1wb2ludGVyIGZvY3VzOm9wYWNpdHktMjAgcm91bmRlZC14bFwiXHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2Byb3VuZGVkLXhsIFxyXG4gICAgICAgICAgICAgICAgJHsgY3VyciA9PT0gaSAmJiAnYm9yZGVyLTIgYm9yZGVyLW9yYW5nZScgfWB9PlxyXG4gICAgICAgICAgICAgICAgPEltYWdlIGNsYXNzTmFtZT17YHJvdW5kZWQteGwgXHJcbiAgICAgICAgICAgICAgICAgICR7IGN1cnIgPT09IGkgJiYgJ29wYWNpdHktNDAnIH1gfSB3aWR0aD17MjAwfSBoZWlnaHQ9ezIwMH0gc3JjPXsgdCB9IGFsdD1cIlwiLz5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICkpXHJcbiAgICAgIH1cclxuICAgIDwvZGl2PlxyXG4gIDwvZGl2PlxyXG4gICAgXHJcbiAgICApXHJcbiAgfSJdLCJuYW1lcyI6WyJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsIkltYWdlIiwibmV4dHBpYyIsInByZXZpb3VzIiwiQnV0dG9uIiwidGh1bWJuYWlscyIsIkNhcm91c2VsIiwiY2hpbGRyZW4iLCJzbGlkZXMiLCJhdXRvU2xpZGUiLCJhdXRvU2xpZGVJbnRlcnZhbCIsImN1cnIiLCJzZXRDdXJyIiwicHJldiIsImxlbmd0aCIsIm5leHQiLCJzbGlkZUludGVydmFsIiwic2V0SW50ZXJ2YWwiLCJjbGVhckludGVydmFsIiwiZGl2IiwiY2xhc3NOYW1lIiwic3R5bGUiLCJ0cmFuc2Zvcm0iLCJvbkNsaWNrIiwic3JjIiwiYWx0IiwibWFwIiwidCIsImkiLCJ3aWR0aCIsImhlaWdodCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/components/myCarousel.tsx\n"));

/***/ })

});