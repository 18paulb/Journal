"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/journal/read/[entry]/page",{

/***/ "(app-pages-browser)/./app/journal/read/[entry]/page.jsx":
/*!*******************************************!*\
  !*** ./app/journal/read/[entry]/page.jsx ***!
  \*******************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ JournalEntry)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/navigation */ \"(app-pages-browser)/./node_modules/next/dist/api/navigation.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! axios */ \"(app-pages-browser)/./node_modules/axios/lib/axios.js\");\n/* harmony import */ var _barrel_optimize_names_CalendarDays_lucide_react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! __barrel_optimize__?names=CalendarDays!=!lucide-react */ \"(app-pages-browser)/./node_modules/lucide-react/dist/esm/icons/calendar-days.js\");\n/* harmony import */ var _components_ui_card__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/components/ui/card */ \"(app-pages-browser)/./components/ui/card.jsx\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n // Import useParams from next/navigation\n\n\n\n\nfunction JournalEntry() {\n    _s();\n    const params = (0,next_navigation__WEBPACK_IMPORTED_MODULE_1__.useParams)(); // Use useParams to access the dynamic 'date' parameter\n    const date = params.entry;\n    const [data, setData] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(null);\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)({\n        \"JournalEntry.useEffect\": ()=>{\n            axios__WEBPACK_IMPORTED_MODULE_4__[\"default\"].get(\"http://localhost:8000/journal-entry?date=\".concat(date)).then({\n                \"JournalEntry.useEffect\": (response)=>setData(response.data)\n            }[\"JournalEntry.useEffect\"]).catch({\n                \"JournalEntry.useEffect\": (error)=>console.log(error)\n            }[\"JournalEntry.useEffect\"]);\n        }\n    }[\"JournalEntry.useEffect\"], []);\n    const renderTextWithNewlines = (text)=>{\n        return text.split(\"\\n\").map((line, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                children: [\n                    line,\n                    index < text.split(\"\\n\").length - 1 && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                        fileName: \"/Users/brandonpaul/CS/PersonalProjects/WebJournal/journalfrontend/app/journal/read/[entry]/page.jsx\",\n                        lineNumber: 28,\n                        columnNumber: 49\n                    }, this)\n                ]\n            }, index, true, {\n                fileName: \"/Users/brandonpaul/CS/PersonalProjects/WebJournal/journalfrontend/app/journal/read/[entry]/page.jsx\",\n                lineNumber: 26,\n                columnNumber: 7\n            }, this));\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"min-h-screen bg-stone-100 flex items-center justify-center p-4 sm:p-6 md:p-8\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_card__WEBPACK_IMPORTED_MODULE_3__.Card, {\n            className: \"w-full max-w-5xl bg-white shadow-md\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_card__WEBPACK_IMPORTED_MODULE_3__.CardHeader, {\n                    className: \"bg-teal-100 text-teal-800 flex flex-col sm:flex-row items-start sm:items-center justify-between p-4 sm:p-6 border-b border-teal-200\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                            className: \"text-2xl sm:text-3xl font-bold mb-2 sm:mb-0\",\n                            children: \"Journal Entry\"\n                        }, void 0, false, {\n                            fileName: \"/Users/brandonpaul/CS/PersonalProjects/WebJournal/journalfrontend/app/journal/read/[entry]/page.jsx\",\n                            lineNumber: 37,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"flex items-center space-x-2\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_CalendarDays_lucide_react__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                                    className: \"h-5 w-5\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/brandonpaul/CS/PersonalProjects/WebJournal/journalfrontend/app/journal/read/[entry]/page.jsx\",\n                                    lineNumber: 41,\n                                    columnNumber: 13\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                    className: \"font-semibold\",\n                                    children: date\n                                }, void 0, false, {\n                                    fileName: \"/Users/brandonpaul/CS/PersonalProjects/WebJournal/journalfrontend/app/journal/read/[entry]/page.jsx\",\n                                    lineNumber: 42,\n                                    columnNumber: 13\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/brandonpaul/CS/PersonalProjects/WebJournal/journalfrontend/app/journal/read/[entry]/page.jsx\",\n                            lineNumber: 40,\n                            columnNumber: 11\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/brandonpaul/CS/PersonalProjects/WebJournal/journalfrontend/app/journal/read/[entry]/page.jsx\",\n                    lineNumber: 36,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_card__WEBPACK_IMPORTED_MODULE_3__.CardContent, {\n                    className: \"p-4 sm:p-6 md:p-8\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        className: \"text-stone-700 text-lg leading-relaxed mb-6\",\n                        children: data\n                    }, void 0, false, {\n                        fileName: \"/Users/brandonpaul/CS/PersonalProjects/WebJournal/journalfrontend/app/journal/read/[entry]/page.jsx\",\n                        lineNumber: 47,\n                        columnNumber: 11\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"/Users/brandonpaul/CS/PersonalProjects/WebJournal/journalfrontend/app/journal/read/[entry]/page.jsx\",\n                    lineNumber: 45,\n                    columnNumber: 9\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/brandonpaul/CS/PersonalProjects/WebJournal/journalfrontend/app/journal/read/[entry]/page.jsx\",\n            lineNumber: 35,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"/Users/brandonpaul/CS/PersonalProjects/WebJournal/journalfrontend/app/journal/read/[entry]/page.jsx\",\n        lineNumber: 34,\n        columnNumber: 5\n    }, this);\n}\n_s(JournalEntry, \"LjLkwREfyqwNqiQGMJ6IjwqHaPE=\", false, function() {\n    return [\n        next_navigation__WEBPACK_IMPORTED_MODULE_1__.useParams\n    ];\n});\n_c = JournalEntry;\nvar _c;\n$RefreshReg$(_c, \"JournalEntry\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC9qb3VybmFsL3JlYWQvW2VudHJ5XS9wYWdlLmpzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBRTRDLENBQUMsd0NBQXdDO0FBQ3pDO0FBQ2xCO0FBQ2tCO0FBRXlCO0FBRXRELFNBQVNROztJQUN0QixNQUFNQyxTQUFTVCwwREFBU0EsSUFBSSx1REFBdUQ7SUFFbkYsTUFBTVUsT0FBT0QsT0FBT0UsS0FBSztJQUV6QixNQUFNLENBQUNDLE1BQU1DLFFBQVEsR0FBR1osK0NBQVFBLENBQUM7SUFFakNDLGdEQUFTQTtrQ0FBQztZQUNSQyw2Q0FBS0EsQ0FDRlcsR0FBRyxDQUFDLDRDQUFpRCxPQUFMSixPQUNoREssSUFBSTswQ0FBQyxDQUFDQyxXQUFhSCxRQUFRRyxTQUFTSixJQUFJO3lDQUN4Q0ssS0FBSzswQ0FBQyxDQUFDQyxRQUFVQyxRQUFRQyxHQUFHLENBQUNGOztRQUNsQztpQ0FBRyxFQUFFO0lBRUwsTUFBTUcseUJBQXlCLENBQUNDO1FBQzlCLE9BQU9BLEtBQUtDLEtBQUssQ0FBQyxNQUFNQyxHQUFHLENBQUMsQ0FBQ0MsTUFBTUMsc0JBQ2pDLDhEQUFDQzs7b0JBQ0VGO29CQUNBQyxRQUFRSixLQUFLQyxLQUFLLENBQUMsTUFBTUssTUFBTSxHQUFHLG1CQUFLLDhEQUFDQzs7Ozs7O2VBRm5DSDs7Ozs7SUFLWjtJQUVBLHFCQUNFLDhEQUFDSTtRQUFJQyxXQUFVO2tCQUNiLDRFQUFDMUIscURBQUlBO1lBQUMwQixXQUFVOzs4QkFDZCw4REFBQ3hCLDJEQUFVQTtvQkFBQ3dCLFdBQVU7O3NDQUNwQiw4REFBQ0M7NEJBQUdELFdBQVU7c0NBQThDOzs7Ozs7c0NBRzVELDhEQUFDRDs0QkFBSUMsV0FBVTs7OENBQ2IsOERBQUMzQix3RkFBWUE7b0NBQUMyQixXQUFVOzs7Ozs7OENBQ3hCLDhEQUFDRTtvQ0FBS0YsV0FBVTs4Q0FBaUJyQjs7Ozs7Ozs7Ozs7Ozs7Ozs7OzhCQUdyQyw4REFBQ0osNERBQVdBO29CQUFDeUIsV0FBVTs4QkFFckIsNEVBQUNKO3dCQUFFSSxXQUFVO2tDQUErQ25COzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBS3RFO0dBMUN3Qko7O1FBQ1BSLHNEQUFTQTs7O0tBREZRIiwic291cmNlcyI6WyIvVXNlcnMvYnJhbmRvbnBhdWwvQ1MvUGVyc29uYWxQcm9qZWN0cy9XZWJKb3VybmFsL2pvdXJuYWxmcm9udGVuZC9hcHAvam91cm5hbC9yZWFkL1tlbnRyeV0vcGFnZS5qc3giXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2UgY2xpZW50XCI7XG5cbmltcG9ydCB7IHVzZVBhcmFtcyB9IGZyb20gXCJuZXh0L25hdmlnYXRpb25cIjsgLy8gSW1wb3J0IHVzZVBhcmFtcyBmcm9tIG5leHQvbmF2aWdhdGlvblxuaW1wb3J0IHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiO1xuaW1wb3J0IHsgQ2FsZW5kYXJEYXlzIH0gZnJvbSBcImx1Y2lkZS1yZWFjdFwiO1xuXG5pbXBvcnQgeyBDYXJkLCBDYXJkQ29udGVudCwgQ2FyZEhlYWRlciB9IGZyb20gXCJAL2NvbXBvbmVudHMvdWkvY2FyZFwiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBKb3VybmFsRW50cnkoKSB7XG4gIGNvbnN0IHBhcmFtcyA9IHVzZVBhcmFtcygpOyAvLyBVc2UgdXNlUGFyYW1zIHRvIGFjY2VzcyB0aGUgZHluYW1pYyAnZGF0ZScgcGFyYW1ldGVyXG5cbiAgY29uc3QgZGF0ZSA9IHBhcmFtcy5lbnRyeTtcblxuICBjb25zdCBbZGF0YSwgc2V0RGF0YV0gPSB1c2VTdGF0ZShudWxsKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGF4aW9zXG4gICAgICAuZ2V0KGBodHRwOi8vbG9jYWxob3N0OjgwMDAvam91cm5hbC1lbnRyeT9kYXRlPSR7ZGF0ZX1gKVxuICAgICAgLnRoZW4oKHJlc3BvbnNlKSA9PiBzZXREYXRhKHJlc3BvbnNlLmRhdGEpKVxuICAgICAgLmNhdGNoKChlcnJvcikgPT4gY29uc29sZS5sb2coZXJyb3IpKTtcbiAgfSwgW10pO1xuXG4gIGNvbnN0IHJlbmRlclRleHRXaXRoTmV3bGluZXMgPSAodGV4dCkgPT4ge1xuICAgIHJldHVybiB0ZXh0LnNwbGl0KFwiXFxuXCIpLm1hcCgobGluZSwgaW5kZXgpID0+IChcbiAgICAgIDxwIGtleT17aW5kZXh9PlxuICAgICAgICB7bGluZX1cbiAgICAgICAge2luZGV4IDwgdGV4dC5zcGxpdChcIlxcblwiKS5sZW5ndGggLSAxICYmIDxiciAvPn1cbiAgICAgIDwvcD5cbiAgICApKTtcbiAgfTtcblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwibWluLWgtc2NyZWVuIGJnLXN0b25lLTEwMCBmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlciBwLTQgc206cC02IG1kOnAtOFwiPlxuICAgICAgPENhcmQgY2xhc3NOYW1lPVwidy1mdWxsIG1heC13LTV4bCBiZy13aGl0ZSBzaGFkb3ctbWRcIj5cbiAgICAgICAgPENhcmRIZWFkZXIgY2xhc3NOYW1lPVwiYmctdGVhbC0xMDAgdGV4dC10ZWFsLTgwMCBmbGV4IGZsZXgtY29sIHNtOmZsZXgtcm93IGl0ZW1zLXN0YXJ0IHNtOml0ZW1zLWNlbnRlciBqdXN0aWZ5LWJldHdlZW4gcC00IHNtOnAtNiBib3JkZXItYiBib3JkZXItdGVhbC0yMDBcIj5cbiAgICAgICAgICA8aDIgY2xhc3NOYW1lPVwidGV4dC0yeGwgc206dGV4dC0zeGwgZm9udC1ib2xkIG1iLTIgc206bWItMFwiPlxuICAgICAgICAgICAgSm91cm5hbCBFbnRyeVxuICAgICAgICAgIDwvaDI+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLWNlbnRlciBzcGFjZS14LTJcIj5cbiAgICAgICAgICAgIDxDYWxlbmRhckRheXMgY2xhc3NOYW1lPVwiaC01IHctNVwiIC8+XG4gICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJmb250LXNlbWlib2xkXCI+e2RhdGV9PC9zcGFuPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L0NhcmRIZWFkZXI+XG4gICAgICAgIDxDYXJkQ29udGVudCBjbGFzc05hbWU9XCJwLTQgc206cC02IG1kOnAtOFwiPlxuICAgICAgICAgICAgXG4gICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC1zdG9uZS03MDAgdGV4dC1sZyBsZWFkaW5nLXJlbGF4ZWQgbWItNlwiPntkYXRhfTwvcD5cbiAgICAgICAgPC9DYXJkQ29udGVudD5cbiAgICAgIDwvQ2FyZD5cbiAgICA8L2Rpdj5cbiAgKTtcbn1cbiJdLCJuYW1lcyI6WyJ1c2VQYXJhbXMiLCJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsImF4aW9zIiwiQ2FsZW5kYXJEYXlzIiwiQ2FyZCIsIkNhcmRDb250ZW50IiwiQ2FyZEhlYWRlciIsIkpvdXJuYWxFbnRyeSIsInBhcmFtcyIsImRhdGUiLCJlbnRyeSIsImRhdGEiLCJzZXREYXRhIiwiZ2V0IiwidGhlbiIsInJlc3BvbnNlIiwiY2F0Y2giLCJlcnJvciIsImNvbnNvbGUiLCJsb2ciLCJyZW5kZXJUZXh0V2l0aE5ld2xpbmVzIiwidGV4dCIsInNwbGl0IiwibWFwIiwibGluZSIsImluZGV4IiwicCIsImxlbmd0aCIsImJyIiwiZGl2IiwiY2xhc3NOYW1lIiwiaDIiLCJzcGFuIl0sImlnbm9yZUxpc3QiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/journal/read/[entry]/page.jsx\n"));

/***/ })

});