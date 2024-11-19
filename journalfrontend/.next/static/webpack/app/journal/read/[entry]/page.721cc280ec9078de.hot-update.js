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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ JournalEntry)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/navigation */ \"(app-pages-browser)/./node_modules/next/dist/api/navigation.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! axios */ \"(app-pages-browser)/./node_modules/axios/lib/axios.js\");\n/* harmony import */ var _barrel_optimize_names_CalendarDays_lucide_react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! __barrel_optimize__?names=CalendarDays!=!lucide-react */ \"(app-pages-browser)/./node_modules/lucide-react/dist/esm/icons/calendar-days.js\");\n/* harmony import */ var _components_ui_card__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/components/ui/card */ \"(app-pages-browser)/./components/ui/card.jsx\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n // Import useParams from next/navigation\n\n\n\n\nfunction JournalEntry() {\n    _s();\n    const params = (0,next_navigation__WEBPACK_IMPORTED_MODULE_1__.useParams)(); // Use useParams to access the dynamic 'date' parameter\n    const date = params.entry;\n    const [data, setData] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(null);\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)({\n        \"JournalEntry.useEffect\": ()=>{\n            axios__WEBPACK_IMPORTED_MODULE_4__[\"default\"].get(\"http://localhost:8000/journal-entry?date=\".concat(date)).then({\n                \"JournalEntry.useEffect\": (response)=>setData(response.data)\n            }[\"JournalEntry.useEffect\"]).catch({\n                \"JournalEntry.useEffect\": (error)=>console.log(error)\n            }[\"JournalEntry.useEffect\"]);\n        }\n    }[\"JournalEntry.useEffect\"], []);\n    const renderTextWithNewlines = (text)=>{\n        return text.split(\"\\n\").map((line, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                className: \"text-stone-700 text-lg leading-relaxed mb-6\",\n                children: [\n                    line,\n                    index < text.split(\"\\n\").length - 1 && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                        fileName: \"/Users/brandonpaul/CS/PersonalProjects/WebJournal/journalfrontend/app/journal/read/[entry]/page.jsx\",\n                        lineNumber: 28,\n                        columnNumber: 49\n                    }, this)\n                ]\n            }, index, true, {\n                fileName: \"/Users/brandonpaul/CS/PersonalProjects/WebJournal/journalfrontend/app/journal/read/[entry]/page.jsx\",\n                lineNumber: 26,\n                columnNumber: 7\n            }, this));\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"min-h-screen bg-stone-100 flex items-center justify-center p-4 sm:p-6 md:p-8\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_card__WEBPACK_IMPORTED_MODULE_3__.Card, {\n            className: \"w-full max-w-5xl bg-white shadow-md\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_card__WEBPACK_IMPORTED_MODULE_3__.CardHeader, {\n                    className: \"bg-teal-100 text-teal-800 flex flex-col sm:flex-row items-start sm:items-center justify-between p-4 sm:p-6 border-b border-teal-200\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                            className: \"text-2xl sm:text-3xl font-bold mb-2 sm:mb-0\",\n                            children: \"Journal Entry\"\n                        }, void 0, false, {\n                            fileName: \"/Users/brandonpaul/CS/PersonalProjects/WebJournal/journalfrontend/app/journal/read/[entry]/page.jsx\",\n                            lineNumber: 37,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"flex items-center space-x-2\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_CalendarDays_lucide_react__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                                    className: \"h-5 w-5\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/brandonpaul/CS/PersonalProjects/WebJournal/journalfrontend/app/journal/read/[entry]/page.jsx\",\n                                    lineNumber: 41,\n                                    columnNumber: 13\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                    className: \"font-semibold\",\n                                    children: date\n                                }, void 0, false, {\n                                    fileName: \"/Users/brandonpaul/CS/PersonalProjects/WebJournal/journalfrontend/app/journal/read/[entry]/page.jsx\",\n                                    lineNumber: 42,\n                                    columnNumber: 13\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/brandonpaul/CS/PersonalProjects/WebJournal/journalfrontend/app/journal/read/[entry]/page.jsx\",\n                            lineNumber: 40,\n                            columnNumber: 11\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/brandonpaul/CS/PersonalProjects/WebJournal/journalfrontend/app/journal/read/[entry]/page.jsx\",\n                    lineNumber: 36,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_card__WEBPACK_IMPORTED_MODULE_3__.CardContent, {\n                    className: \"p-4 sm:p-6 md:p-8\",\n                    children: data ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        children: renderTextWithNewlines(data)\n                    }, void 0, false, {\n                        fileName: \"/Users/brandonpaul/CS/PersonalProjects/WebJournal/journalfrontend/app/journal/read/[entry]/page.jsx\",\n                        lineNumber: 47,\n                        columnNumber: 13\n                    }, this) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        className: \"text-stone-700 text-lg leading-relaxed mb-6\",\n                        children: \"Loading\"\n                    }, void 0, false, {\n                        fileName: \"/Users/brandonpaul/CS/PersonalProjects/WebJournal/journalfrontend/app/journal/read/[entry]/page.jsx\",\n                        lineNumber: 51,\n                        columnNumber: 13\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"/Users/brandonpaul/CS/PersonalProjects/WebJournal/journalfrontend/app/journal/read/[entry]/page.jsx\",\n                    lineNumber: 45,\n                    columnNumber: 9\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/brandonpaul/CS/PersonalProjects/WebJournal/journalfrontend/app/journal/read/[entry]/page.jsx\",\n            lineNumber: 35,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"/Users/brandonpaul/CS/PersonalProjects/WebJournal/journalfrontend/app/journal/read/[entry]/page.jsx\",\n        lineNumber: 34,\n        columnNumber: 5\n    }, this);\n}\n_s(JournalEntry, \"LjLkwREfyqwNqiQGMJ6IjwqHaPE=\", false, function() {\n    return [\n        next_navigation__WEBPACK_IMPORTED_MODULE_1__.useParams\n    ];\n});\n_c = JournalEntry;\nvar _c;\n$RefreshReg$(_c, \"JournalEntry\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC9qb3VybmFsL3JlYWQvW2VudHJ5XS9wYWdlLmpzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBRTRDLENBQUMsd0NBQXdDO0FBQ3pDO0FBQ2xCO0FBQ2tCO0FBRXlCO0FBRXRELFNBQVNROztJQUN0QixNQUFNQyxTQUFTVCwwREFBU0EsSUFBSSx1REFBdUQ7SUFFbkYsTUFBTVUsT0FBT0QsT0FBT0UsS0FBSztJQUV6QixNQUFNLENBQUNDLE1BQU1DLFFBQVEsR0FBR1osK0NBQVFBLENBQUM7SUFFakNDLGdEQUFTQTtrQ0FBQztZQUNSQyw2Q0FBS0EsQ0FDRlcsR0FBRyxDQUFDLDRDQUFpRCxPQUFMSixPQUNoREssSUFBSTswQ0FBQyxDQUFDQyxXQUFhSCxRQUFRRyxTQUFTSixJQUFJO3lDQUN4Q0ssS0FBSzswQ0FBQyxDQUFDQyxRQUFVQyxRQUFRQyxHQUFHLENBQUNGOztRQUNsQztpQ0FBRyxFQUFFO0lBRUwsTUFBTUcseUJBQXlCLENBQUNDO1FBQzlCLE9BQU9BLEtBQUtDLEtBQUssQ0FBQyxNQUFNQyxHQUFHLENBQUMsQ0FBQ0MsTUFBTUMsc0JBQ2pDLDhEQUFDQztnQkFBRUMsV0FBVTs7b0JBQ1ZIO29CQUNBQyxRQUFRSixLQUFLQyxLQUFLLENBQUMsTUFBTU0sTUFBTSxHQUFHLG1CQUFLLDhEQUFDQzs7Ozs7O2VBRm9CSjs7Ozs7SUFLbkU7SUFFQSxxQkFDRSw4REFBQ0s7UUFBSUgsV0FBVTtrQkFDYiw0RUFBQ3ZCLHFEQUFJQTtZQUFDdUIsV0FBVTs7OEJBQ2QsOERBQUNyQiwyREFBVUE7b0JBQUNxQixXQUFVOztzQ0FDcEIsOERBQUNJOzRCQUFHSixXQUFVO3NDQUE4Qzs7Ozs7O3NDQUc1RCw4REFBQ0c7NEJBQUlILFdBQVU7OzhDQUNiLDhEQUFDeEIsd0ZBQVlBO29DQUFDd0IsV0FBVTs7Ozs7OzhDQUN4Qiw4REFBQ0s7b0NBQUtMLFdBQVU7OENBQWlCbEI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs4QkFHckMsOERBQUNKLDREQUFXQTtvQkFBQ3NCLFdBQVU7OEJBQ3BCaEIscUJBQ0MsOERBQUNlO2tDQUNFTix1QkFBdUJUOzs7Ozs2Q0FHMUIsOERBQUNlO3dCQUFFQyxXQUFVO2tDQUE4Qzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQVF2RTtHQWpEd0JwQjs7UUFDUFIsc0RBQVNBOzs7S0FERlEiLCJzb3VyY2VzIjpbIi9Vc2Vycy9icmFuZG9ucGF1bC9DUy9QZXJzb25hbFByb2plY3RzL1dlYkpvdXJuYWwvam91cm5hbGZyb250ZW5kL2FwcC9qb3VybmFsL3JlYWQvW2VudHJ5XS9wYWdlLmpzeCJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBjbGllbnRcIjtcblxuaW1wb3J0IHsgdXNlUGFyYW1zIH0gZnJvbSBcIm5leHQvbmF2aWdhdGlvblwiOyAvLyBJbXBvcnQgdXNlUGFyYW1zIGZyb20gbmV4dC9uYXZpZ2F0aW9uXG5pbXBvcnQgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCI7XG5pbXBvcnQgeyBDYWxlbmRhckRheXMgfSBmcm9tIFwibHVjaWRlLXJlYWN0XCI7XG5cbmltcG9ydCB7IENhcmQsIENhcmRDb250ZW50LCBDYXJkSGVhZGVyIH0gZnJvbSBcIkAvY29tcG9uZW50cy91aS9jYXJkXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEpvdXJuYWxFbnRyeSgpIHtcbiAgY29uc3QgcGFyYW1zID0gdXNlUGFyYW1zKCk7IC8vIFVzZSB1c2VQYXJhbXMgdG8gYWNjZXNzIHRoZSBkeW5hbWljICdkYXRlJyBwYXJhbWV0ZXJcblxuICBjb25zdCBkYXRlID0gcGFyYW1zLmVudHJ5O1xuXG4gIGNvbnN0IFtkYXRhLCBzZXREYXRhXSA9IHVzZVN0YXRlKG51bGwpO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgYXhpb3NcbiAgICAgIC5nZXQoYGh0dHA6Ly9sb2NhbGhvc3Q6ODAwMC9qb3VybmFsLWVudHJ5P2RhdGU9JHtkYXRlfWApXG4gICAgICAudGhlbigocmVzcG9uc2UpID0+IHNldERhdGEocmVzcG9uc2UuZGF0YSkpXG4gICAgICAuY2F0Y2goKGVycm9yKSA9PiBjb25zb2xlLmxvZyhlcnJvcikpO1xuICB9LCBbXSk7XG5cbiAgY29uc3QgcmVuZGVyVGV4dFdpdGhOZXdsaW5lcyA9ICh0ZXh0KSA9PiB7XG4gICAgcmV0dXJuIHRleHQuc3BsaXQoXCJcXG5cIikubWFwKChsaW5lLCBpbmRleCkgPT4gKFxuICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC1zdG9uZS03MDAgdGV4dC1sZyBsZWFkaW5nLXJlbGF4ZWQgbWItNlwia2V5PXtpbmRleH0+XG4gICAgICAgIHtsaW5lfVxuICAgICAgICB7aW5kZXggPCB0ZXh0LnNwbGl0KFwiXFxuXCIpLmxlbmd0aCAtIDEgJiYgPGJyIC8+fVxuICAgICAgPC9wPlxuICAgICkpO1xuICB9O1xuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJtaW4taC1zY3JlZW4gYmctc3RvbmUtMTAwIGZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyIHAtNCBzbTpwLTYgbWQ6cC04XCI+XG4gICAgICA8Q2FyZCBjbGFzc05hbWU9XCJ3LWZ1bGwgbWF4LXctNXhsIGJnLXdoaXRlIHNoYWRvdy1tZFwiPlxuICAgICAgICA8Q2FyZEhlYWRlciBjbGFzc05hbWU9XCJiZy10ZWFsLTEwMCB0ZXh0LXRlYWwtODAwIGZsZXggZmxleC1jb2wgc206ZmxleC1yb3cgaXRlbXMtc3RhcnQgc206aXRlbXMtY2VudGVyIGp1c3RpZnktYmV0d2VlbiBwLTQgc206cC02IGJvcmRlci1iIGJvcmRlci10ZWFsLTIwMFwiPlxuICAgICAgICAgIDxoMiBjbGFzc05hbWU9XCJ0ZXh0LTJ4bCBzbTp0ZXh0LTN4bCBmb250LWJvbGQgbWItMiBzbTptYi0wXCI+XG4gICAgICAgICAgICBKb3VybmFsIEVudHJ5XG4gICAgICAgICAgPC9oMj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyIHNwYWNlLXgtMlwiPlxuICAgICAgICAgICAgPENhbGVuZGFyRGF5cyBjbGFzc05hbWU9XCJoLTUgdy01XCIgLz5cbiAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImZvbnQtc2VtaWJvbGRcIj57ZGF0ZX08L3NwYW4+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvQ2FyZEhlYWRlcj5cbiAgICAgICAgPENhcmRDb250ZW50IGNsYXNzTmFtZT1cInAtNCBzbTpwLTYgbWQ6cC04XCI+XG4gICAgICAgICAge2RhdGEgPyAoXG4gICAgICAgICAgICA8cCA+XG4gICAgICAgICAgICAgIHtyZW5kZXJUZXh0V2l0aE5ld2xpbmVzKGRhdGEpfVxuICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICkgOiAoXG4gICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LXN0b25lLTcwMCB0ZXh0LWxnIGxlYWRpbmctcmVsYXhlZCBtYi02XCI+XG4gICAgICAgICAgICAgIExvYWRpbmdcbiAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICApfVxuICAgICAgICA8L0NhcmRDb250ZW50PlxuICAgICAgPC9DYXJkPlxuICAgIDwvZGl2PlxuICApO1xufVxuIl0sIm5hbWVzIjpbInVzZVBhcmFtcyIsInVzZVN0YXRlIiwidXNlRWZmZWN0IiwiYXhpb3MiLCJDYWxlbmRhckRheXMiLCJDYXJkIiwiQ2FyZENvbnRlbnQiLCJDYXJkSGVhZGVyIiwiSm91cm5hbEVudHJ5IiwicGFyYW1zIiwiZGF0ZSIsImVudHJ5IiwiZGF0YSIsInNldERhdGEiLCJnZXQiLCJ0aGVuIiwicmVzcG9uc2UiLCJjYXRjaCIsImVycm9yIiwiY29uc29sZSIsImxvZyIsInJlbmRlclRleHRXaXRoTmV3bGluZXMiLCJ0ZXh0Iiwic3BsaXQiLCJtYXAiLCJsaW5lIiwiaW5kZXgiLCJwIiwiY2xhc3NOYW1lIiwibGVuZ3RoIiwiYnIiLCJkaXYiLCJoMiIsInNwYW4iXSwiaWdub3JlTGlzdCI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/journal/read/[entry]/page.jsx\n"));

/***/ })

});