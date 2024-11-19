"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/journal/write/page",{

/***/ "(app-pages-browser)/./app/journal/write/page.jsx":
/*!************************************!*\
  !*** ./app/journal/write/page.jsx ***!
  \************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ JournalEntryEditor)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! axios */ \"(app-pages-browser)/./node_modules/axios/lib/axios.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_ui_button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/components/ui/button */ \"(app-pages-browser)/./components/ui/button.jsx\");\n/* harmony import */ var _components_ui_input__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/components/ui/input */ \"(app-pages-browser)/./components/ui/input.jsx\");\n/* harmony import */ var _components_ui_textarea__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/components/ui/textarea */ \"(app-pages-browser)/./components/ui/textarea.jsx\");\n/* harmony import */ var _components_ui_card__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/components/ui/card */ \"(app-pages-browser)/./components/ui/card.jsx\");\n/* harmony import */ var _barrel_optimize_names_BookOpenIcon_CalendarIcon_SaveIcon_lucide_react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! __barrel_optimize__?names=BookOpenIcon,CalendarIcon,SaveIcon!=!lucide-react */ \"(app-pages-browser)/./node_modules/lucide-react/dist/esm/icons/book-open.js\");\n/* harmony import */ var _barrel_optimize_names_BookOpenIcon_CalendarIcon_SaveIcon_lucide_react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! __barrel_optimize__?names=BookOpenIcon,CalendarIcon,SaveIcon!=!lucide-react */ \"(app-pages-browser)/./node_modules/lucide-react/dist/esm/icons/calendar.js\");\n/* harmony import */ var _barrel_optimize_names_BookOpenIcon_CalendarIcon_SaveIcon_lucide_react__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! __barrel_optimize__?names=BookOpenIcon,CalendarIcon,SaveIcon!=!lucide-react */ \"(app-pages-browser)/./node_modules/lucide-react/dist/esm/icons/save.js\");\n// 'use client';\n// import { useState } from \"react\";\n// export default function WriteJournal() {\n//     const [entry, setEntry] = useState('');\n//     const [isSubmitting, setIsSubmitting] = useState(false);\n//     const [error, setError] = useState(null);\n//     const handleChange = (e) => {\n//       setEntry(e.target.value);\n//     };\n//     const handleSubmit = async (e) => {\n//       e.preventDefault();\n//       if (entry.trim() === '') {\n//         alert('Please enter a journal entry.');\n//         return;\n//       }\n//       setIsSubmitting(true); // Disable button to show loading state\n//       try {\n//         const response = await axios.post('http://localhost:8000/write-journal', {\n//           entry: entry,\n//         });\n//         console.log('Journal entry submitted:', response.data);\n//         setEntry(''); // Clear the textarea after submitting\n//       } catch (err) {\n//         console.error('Error submitting journal entry:', err);\n//         setError('Failed to submit your journal entry.');\n//       } finally {\n//         setIsSubmitting(false); // Re-enable the button\n//       }\n//     };\n//   return (\n//     <div>\n//       <h2>New Journal Entry</h2>\n//       <form onSubmit={handleSubmit}>\n//         <textarea\n//           value={entry}\n//           onChange={handleChange}\n//           placeholder=\"Write your journal entry here...\"\n//           rows=\"6\"\n//           className=\"journal-textarea\"\n//         />\n//         <button type=\"submit\" disabled={isSubmitting}>\n//           {isSubmitting ? 'Submitting...' : 'Submit'}\n//         </button>\n//       </form>\n//       {error && <p>{error}</p>}\n//     </div>\n//   );\n// }\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\n\n// import { toast, useToast } from \"@/components/ui/use-toast\"\n\nfunction JournalEntryEditor() {\n    _s();\n    const [title, setTitle] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)('');\n    const [content, setContent] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)('');\n    const handleSave = async ()=>{\n        if (content.trim() === '') {\n            alert('Please enter a journal entry.');\n            return;\n        }\n        try {\n            const response = await axios__WEBPACK_IMPORTED_MODULE_6__[\"default\"].post('http://localhost:8000/write-journal', {\n                entry: content\n            });\n            console.log('Journal entry submitted:', response.data);\n        } catch (err) {\n            console.error('Error submitting journal entry:', err);\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 flex items-center justify-center p-4\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_card__WEBPACK_IMPORTED_MODULE_5__.Card, {\n            className: \"w-full max-w-2xl shadow-lg\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_card__WEBPACK_IMPORTED_MODULE_5__.CardHeader, {\n                    className: \"bg-primary/5 border-b border-primary/10\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_card__WEBPACK_IMPORTED_MODULE_5__.CardTitle, {\n                        className: \"text-2xl font-bold text-center text-primary flex items-center justify-center\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_BookOpenIcon_CalendarIcon_SaveIcon_lucide_react__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n                                className: \"mr-2\"\n                            }, void 0, false, {\n                                fileName: \"/Users/brandonpaul/CS/PersonalProjects/WebJournal/journalfrontend/app/journal/write/page.jsx\",\n                                lineNumber: 96,\n                                columnNumber: 13\n                            }, this),\n                            \"My Journal\"\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/brandonpaul/CS/PersonalProjects/WebJournal/journalfrontend/app/journal/write/page.jsx\",\n                        lineNumber: 95,\n                        columnNumber: 11\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"/Users/brandonpaul/CS/PersonalProjects/WebJournal/journalfrontend/app/journal/write/page.jsx\",\n                    lineNumber: 94,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_card__WEBPACK_IMPORTED_MODULE_5__.CardContent, {\n                    className: \"space-y-4 p-6\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                    htmlFor: \"title\",\n                                    className: \"block text-sm font-medium text-gray-700 mb-1 flex items-center\",\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_BookOpenIcon_CalendarIcon_SaveIcon_lucide_react__WEBPACK_IMPORTED_MODULE_8__[\"default\"], {\n                                            className: \"mr-2 h-4 w-4 text-primary\"\n                                        }, void 0, false, {\n                                            fileName: \"/Users/brandonpaul/CS/PersonalProjects/WebJournal/journalfrontend/app/journal/write/page.jsx\",\n                                            lineNumber: 103,\n                                            columnNumber: 15\n                                        }, this),\n                                        \"Title\"\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"/Users/brandonpaul/CS/PersonalProjects/WebJournal/journalfrontend/app/journal/write/page.jsx\",\n                                    lineNumber: 102,\n                                    columnNumber: 13\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_input__WEBPACK_IMPORTED_MODULE_3__.Input, {\n                                    id: \"title\",\n                                    placeholder: \"Enter your entry title\",\n                                    value: title,\n                                    onChange: (e)=>setTitle(e.target.value),\n                                    className: \"w-full border-primary/20 focus:border-primary focus:ring-primary\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/brandonpaul/CS/PersonalProjects/WebJournal/journalfrontend/app/journal/write/page.jsx\",\n                                    lineNumber: 106,\n                                    columnNumber: 13\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/brandonpaul/CS/PersonalProjects/WebJournal/journalfrontend/app/journal/write/page.jsx\",\n                            lineNumber: 101,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                    htmlFor: \"content\",\n                                    className: \"block text-sm font-medium text-gray-700 mb-1\",\n                                    children: \"Journal Entry\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/brandonpaul/CS/PersonalProjects/WebJournal/journalfrontend/app/journal/write/page.jsx\",\n                                    lineNumber: 115,\n                                    columnNumber: 13\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_textarea__WEBPACK_IMPORTED_MODULE_4__.Textarea, {\n                                    id: \"content\",\n                                    placeholder: \"Write your thoughts here...\",\n                                    value: content,\n                                    onChange: (e)=>setContent(e.target.value),\n                                    className: \"w-full min-h-[200px] border-primary/20 focus:border-primary focus:ring-primary\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/brandonpaul/CS/PersonalProjects/WebJournal/journalfrontend/app/journal/write/page.jsx\",\n                                    lineNumber: 118,\n                                    columnNumber: 13\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/brandonpaul/CS/PersonalProjects/WebJournal/journalfrontend/app/journal/write/page.jsx\",\n                            lineNumber: 114,\n                            columnNumber: 11\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/brandonpaul/CS/PersonalProjects/WebJournal/journalfrontend/app/journal/write/page.jsx\",\n                    lineNumber: 100,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_card__WEBPACK_IMPORTED_MODULE_5__.CardFooter, {\n                    className: \"bg-primary/5 border-t border-primary/10\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_button__WEBPACK_IMPORTED_MODULE_2__.Button, {\n                        onClick: handleSave,\n                        className: \"w-full bg-primary hover:bg-primary/90 text-primary-foreground\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_BookOpenIcon_CalendarIcon_SaveIcon_lucide_react__WEBPACK_IMPORTED_MODULE_9__[\"default\"], {\n                                className: \"mr-2 h-4 w-4\"\n                            }, void 0, false, {\n                                fileName: \"/Users/brandonpaul/CS/PersonalProjects/WebJournal/journalfrontend/app/journal/write/page.jsx\",\n                                lineNumber: 129,\n                                columnNumber: 13\n                            }, this),\n                            \"Save Entry\"\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/brandonpaul/CS/PersonalProjects/WebJournal/journalfrontend/app/journal/write/page.jsx\",\n                        lineNumber: 128,\n                        columnNumber: 11\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"/Users/brandonpaul/CS/PersonalProjects/WebJournal/journalfrontend/app/journal/write/page.jsx\",\n                    lineNumber: 127,\n                    columnNumber: 9\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/brandonpaul/CS/PersonalProjects/WebJournal/journalfrontend/app/journal/write/page.jsx\",\n            lineNumber: 93,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"/Users/brandonpaul/CS/PersonalProjects/WebJournal/journalfrontend/app/journal/write/page.jsx\",\n        lineNumber: 92,\n        columnNumber: 5\n    }, this);\n}\n_s(JournalEntryEditor, \"OTvljkGZ3oDHjpEqZRGoAyVoe2c=\");\n_c = JournalEntryEditor;\nvar _c;\n$RefreshReg$(_c, \"JournalEntryEditor\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC9qb3VybmFsL3dyaXRlL3BhZ2UuanN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQUFBLGdCQUFnQjtBQUVoQixvQ0FBb0M7QUFHcEMsMkNBQTJDO0FBRTNDLDhDQUE4QztBQUM5QywrREFBK0Q7QUFDL0QsZ0RBQWdEO0FBRWhELG9DQUFvQztBQUNwQyxrQ0FBa0M7QUFDbEMsU0FBUztBQUVULDBDQUEwQztBQUMxQyw0QkFBNEI7QUFDNUIsbUNBQW1DO0FBQ25DLGtEQUFrRDtBQUNsRCxrQkFBa0I7QUFDbEIsVUFBVTtBQUVWLHVFQUF1RTtBQUV2RSxjQUFjO0FBQ2QscUZBQXFGO0FBQ3JGLDBCQUEwQjtBQUMxQixjQUFjO0FBQ2Qsa0VBQWtFO0FBQ2xFLCtEQUErRDtBQUMvRCx3QkFBd0I7QUFDeEIsaUVBQWlFO0FBQ2pFLDREQUE0RDtBQUM1RCxvQkFBb0I7QUFDcEIsMERBQTBEO0FBQzFELFVBQVU7QUFFVixTQUFTO0FBRVQsYUFBYTtBQUNiLFlBQVk7QUFDWixtQ0FBbUM7QUFDbkMsdUNBQXVDO0FBQ3ZDLG9CQUFvQjtBQUNwQiwwQkFBMEI7QUFDMUIsb0NBQW9DO0FBQ3BDLDJEQUEyRDtBQUMzRCxxQkFBcUI7QUFDckIseUNBQXlDO0FBQ3pDLGFBQWE7QUFDYix5REFBeUQ7QUFDekQsd0RBQXdEO0FBQ3hELG9CQUFvQjtBQUNwQixnQkFBZ0I7QUFDaEIsa0NBQWtDO0FBQ2xDLGFBQWE7QUFDYixPQUFPO0FBQ1AsSUFBSTs7O0FBSXNCO0FBQ007QUFDZTtBQUNGO0FBQ007QUFDd0M7QUFDM0YsOERBQThEO0FBQ0s7QUFFcEQsU0FBU2E7O0lBQ3RCLE1BQU0sQ0FBQ0MsT0FBT0MsU0FBUyxHQUFHZCwrQ0FBUUEsQ0FBQztJQUNuQyxNQUFNLENBQUNlLFNBQVNDLFdBQVcsR0FBR2hCLCtDQUFRQSxDQUFDO0lBRXZDLE1BQU1pQixhQUFhO1FBQ2YsSUFBSUYsUUFBUUcsSUFBSSxPQUFPLElBQUk7WUFDekJDLE1BQU07WUFDTjtRQUNGO1FBRUEsSUFBSTtZQUNGLE1BQU1DLFdBQVcsTUFBTXJCLDZDQUFLQSxDQUFDc0IsSUFBSSxDQUFDLHVDQUF1QztnQkFDdkVDLE9BQU9QO1lBQ1Q7WUFDQVEsUUFBUUMsR0FBRyxDQUFDLDRCQUE0QkosU0FBU0ssSUFBSTtRQUN2RCxFQUFFLE9BQU9DLEtBQUs7WUFDWkgsUUFBUUksS0FBSyxDQUFDLG1DQUFtQ0Q7UUFDbkQ7SUFDSjtJQUVBLHFCQUNFLDhEQUFDRTtRQUFJQyxXQUFVO2tCQUNiLDRFQUFDekIscURBQUlBO1lBQUN5QixXQUFVOzs4QkFDZCw4REFBQ3RCLDJEQUFVQTtvQkFBQ3NCLFdBQVU7OEJBQ3BCLDRFQUFDckIsMERBQVNBO3dCQUFDcUIsV0FBVTs7MENBQ25CLDhEQUFDbkIsOEdBQVlBO2dDQUFDbUIsV0FBVTs7Ozs7OzRCQUFTOzs7Ozs7Ozs7Ozs7OEJBSXJDLDhEQUFDeEIsNERBQVdBO29CQUFDd0IsV0FBVTs7c0NBQ3JCLDhEQUFDRDs7OENBQ0MsOERBQUNFO29DQUFNQyxTQUFRO29DQUFRRixXQUFVOztzREFDL0IsOERBQUNwQiw4R0FBWUE7NENBQUNvQixXQUFVOzs7Ozs7d0NBQThCOzs7Ozs7OzhDQUd4RCw4REFBQzNCLHVEQUFLQTtvQ0FDSjhCLElBQUc7b0NBQ0hDLGFBQVk7b0NBQ1pDLE9BQU9yQjtvQ0FDUHNCLFVBQVUsQ0FBQ0MsSUFBTXRCLFNBQVNzQixFQUFFQyxNQUFNLENBQUNILEtBQUs7b0NBQ3hDTCxXQUFVOzs7Ozs7Ozs7Ozs7c0NBR2QsOERBQUNEOzs4Q0FDQyw4REFBQ0U7b0NBQU1DLFNBQVE7b0NBQVVGLFdBQVU7OENBQStDOzs7Ozs7OENBR2xGLDhEQUFDMUIsNkRBQVFBO29DQUNQNkIsSUFBRztvQ0FDSEMsYUFBWTtvQ0FDWkMsT0FBT25CO29DQUNQb0IsVUFBVSxDQUFDQyxJQUFNcEIsV0FBV29CLEVBQUVDLE1BQU0sQ0FBQ0gsS0FBSztvQ0FDMUNMLFdBQVU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs4QkFJaEIsOERBQUN2QiwyREFBVUE7b0JBQUN1QixXQUFVOzhCQUNwQiw0RUFBQzVCLHlEQUFNQTt3QkFBQ3FDLFNBQVNyQjt3QkFBWVksV0FBVTs7MENBQ3JDLDhEQUFDbEIsOEdBQVFBO2dDQUFDa0IsV0FBVTs7Ozs7OzRCQUFpQjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFPakQ7R0FqRXdCakI7S0FBQUEiLCJzb3VyY2VzIjpbIi9Vc2Vycy9icmFuZG9ucGF1bC9DUy9QZXJzb25hbFByb2plY3RzL1dlYkpvdXJuYWwvam91cm5hbGZyb250ZW5kL2FwcC9qb3VybmFsL3dyaXRlL3BhZ2UuanN4Il0sInNvdXJjZXNDb250ZW50IjpbIi8vICd1c2UgY2xpZW50JztcblxuLy8gaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcblxuXG4vLyBleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBXcml0ZUpvdXJuYWwoKSB7XG4gICAgXG4vLyAgICAgY29uc3QgW2VudHJ5LCBzZXRFbnRyeV0gPSB1c2VTdGF0ZSgnJyk7XG4vLyAgICAgY29uc3QgW2lzU3VibWl0dGluZywgc2V0SXNTdWJtaXR0aW5nXSA9IHVzZVN0YXRlKGZhbHNlKTtcbi8vICAgICBjb25zdCBbZXJyb3IsIHNldEVycm9yXSA9IHVzZVN0YXRlKG51bGwpO1xuXG4vLyAgICAgY29uc3QgaGFuZGxlQ2hhbmdlID0gKGUpID0+IHtcbi8vICAgICAgIHNldEVudHJ5KGUudGFyZ2V0LnZhbHVlKTtcbi8vICAgICB9O1xuICBcbi8vICAgICBjb25zdCBoYW5kbGVTdWJtaXQgPSBhc3luYyAoZSkgPT4ge1xuLy8gICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuLy8gICAgICAgaWYgKGVudHJ5LnRyaW0oKSA9PT0gJycpIHtcbi8vICAgICAgICAgYWxlcnQoJ1BsZWFzZSBlbnRlciBhIGpvdXJuYWwgZW50cnkuJyk7XG4vLyAgICAgICAgIHJldHVybjtcbi8vICAgICAgIH1cblxuLy8gICAgICAgc2V0SXNTdWJtaXR0aW5nKHRydWUpOyAvLyBEaXNhYmxlIGJ1dHRvbiB0byBzaG93IGxvYWRpbmcgc3RhdGVcblxuLy8gICAgICAgdHJ5IHtcbi8vICAgICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBheGlvcy5wb3N0KCdodHRwOi8vbG9jYWxob3N0OjgwMDAvd3JpdGUtam91cm5hbCcsIHtcbi8vICAgICAgICAgICBlbnRyeTogZW50cnksXG4vLyAgICAgICAgIH0pO1xuLy8gICAgICAgICBjb25zb2xlLmxvZygnSm91cm5hbCBlbnRyeSBzdWJtaXR0ZWQ6JywgcmVzcG9uc2UuZGF0YSk7XG4vLyAgICAgICAgIHNldEVudHJ5KCcnKTsgLy8gQ2xlYXIgdGhlIHRleHRhcmVhIGFmdGVyIHN1Ym1pdHRpbmdcbi8vICAgICAgIH0gY2F0Y2ggKGVycikge1xuLy8gICAgICAgICBjb25zb2xlLmVycm9yKCdFcnJvciBzdWJtaXR0aW5nIGpvdXJuYWwgZW50cnk6JywgZXJyKTtcbi8vICAgICAgICAgc2V0RXJyb3IoJ0ZhaWxlZCB0byBzdWJtaXQgeW91ciBqb3VybmFsIGVudHJ5LicpO1xuLy8gICAgICAgfSBmaW5hbGx5IHtcbi8vICAgICAgICAgc2V0SXNTdWJtaXR0aW5nKGZhbHNlKTsgLy8gUmUtZW5hYmxlIHRoZSBidXR0b25cbi8vICAgICAgIH1cblxuLy8gICAgIH07XG4gIFxuLy8gICByZXR1cm4gKFxuLy8gICAgIDxkaXY+XG4vLyAgICAgICA8aDI+TmV3IEpvdXJuYWwgRW50cnk8L2gyPlxuLy8gICAgICAgPGZvcm0gb25TdWJtaXQ9e2hhbmRsZVN1Ym1pdH0+XG4vLyAgICAgICAgIDx0ZXh0YXJlYVxuLy8gICAgICAgICAgIHZhbHVlPXtlbnRyeX1cbi8vICAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlfVxuLy8gICAgICAgICAgIHBsYWNlaG9sZGVyPVwiV3JpdGUgeW91ciBqb3VybmFsIGVudHJ5IGhlcmUuLi5cIlxuLy8gICAgICAgICAgIHJvd3M9XCI2XCJcbi8vICAgICAgICAgICBjbGFzc05hbWU9XCJqb3VybmFsLXRleHRhcmVhXCJcbi8vICAgICAgICAgLz5cbi8vICAgICAgICAgPGJ1dHRvbiB0eXBlPVwic3VibWl0XCIgZGlzYWJsZWQ9e2lzU3VibWl0dGluZ30+XG4vLyAgICAgICAgICAge2lzU3VibWl0dGluZyA/ICdTdWJtaXR0aW5nLi4uJyA6ICdTdWJtaXQnfVxuLy8gICAgICAgICA8L2J1dHRvbj5cbi8vICAgICAgIDwvZm9ybT5cbi8vICAgICAgIHtlcnJvciAmJiA8cD57ZXJyb3J9PC9wPn1cbi8vICAgICA8L2Rpdj5cbi8vICAgKTtcbi8vIH1cblxuJ3VzZSBjbGllbnQnXG5cbmltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIjtcbmltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgeyBCdXR0b24gfSBmcm9tIFwiQC9jb21wb25lbnRzL3VpL2J1dHRvblwiXG5pbXBvcnQgeyBJbnB1dCB9IGZyb20gXCJAL2NvbXBvbmVudHMvdWkvaW5wdXRcIlxuaW1wb3J0IHsgVGV4dGFyZWEgfSBmcm9tIFwiQC9jb21wb25lbnRzL3VpL3RleHRhcmVhXCJcbmltcG9ydCB7IENhcmQsIENhcmRDb250ZW50LCBDYXJkRm9vdGVyLCBDYXJkSGVhZGVyLCBDYXJkVGl0bGUgfSBmcm9tIFwiQC9jb21wb25lbnRzL3VpL2NhcmRcIlxuLy8gaW1wb3J0IHsgdG9hc3QsIHVzZVRvYXN0IH0gZnJvbSBcIkAvY29tcG9uZW50cy91aS91c2UtdG9hc3RcIlxuaW1wb3J0IHsgQ2FsZW5kYXJJY29uLCBCb29rT3Blbkljb24sIFNhdmVJY29uIH0gZnJvbSAnbHVjaWRlLXJlYWN0J1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBKb3VybmFsRW50cnlFZGl0b3IoKSB7XG4gIGNvbnN0IFt0aXRsZSwgc2V0VGl0bGVdID0gdXNlU3RhdGUoJycpXG4gIGNvbnN0IFtjb250ZW50LCBzZXRDb250ZW50XSA9IHVzZVN0YXRlKCcnKVxuXG4gIGNvbnN0IGhhbmRsZVNhdmUgPSBhc3luYyAoKSA9PiB7XG4gICAgICBpZiAoY29udGVudC50cmltKCkgPT09ICcnKSB7XG4gICAgICAgIGFsZXJ0KCdQbGVhc2UgZW50ZXIgYSBqb3VybmFsIGVudHJ5LicpO1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIHRyeSB7XG4gICAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgYXhpb3MucG9zdCgnaHR0cDovL2xvY2FsaG9zdDo4MDAwL3dyaXRlLWpvdXJuYWwnLCB7XG4gICAgICAgICAgZW50cnk6IGNvbnRlbnQsXG4gICAgICAgIH0pO1xuICAgICAgICBjb25zb2xlLmxvZygnSm91cm5hbCBlbnRyeSBzdWJtaXR0ZWQ6JywgcmVzcG9uc2UuZGF0YSk7XG4gICAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgICAgY29uc29sZS5lcnJvcignRXJyb3Igc3VibWl0dGluZyBqb3VybmFsIGVudHJ5OicsIGVycik7XG4gICAgICB9XG4gIH1cblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwibWluLWgtc2NyZWVuIGJnLWdyYWRpZW50LXRvLWIgZnJvbS1ncmF5LTUwIHRvLWdyYXktMTAwIGZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyIHAtNFwiPlxuICAgICAgPENhcmQgY2xhc3NOYW1lPVwidy1mdWxsIG1heC13LTJ4bCBzaGFkb3ctbGdcIj5cbiAgICAgICAgPENhcmRIZWFkZXIgY2xhc3NOYW1lPVwiYmctcHJpbWFyeS81IGJvcmRlci1iIGJvcmRlci1wcmltYXJ5LzEwXCI+XG4gICAgICAgICAgPENhcmRUaXRsZSBjbGFzc05hbWU9XCJ0ZXh0LTJ4bCBmb250LWJvbGQgdGV4dC1jZW50ZXIgdGV4dC1wcmltYXJ5IGZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyXCI+XG4gICAgICAgICAgICA8Qm9va09wZW5JY29uIGNsYXNzTmFtZT1cIm1yLTJcIiAvPlxuICAgICAgICAgICAgTXkgSm91cm5hbFxuICAgICAgICAgIDwvQ2FyZFRpdGxlPlxuICAgICAgICA8L0NhcmRIZWFkZXI+XG4gICAgICAgIDxDYXJkQ29udGVudCBjbGFzc05hbWU9XCJzcGFjZS15LTQgcC02XCI+XG4gICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwidGl0bGVcIiBjbGFzc05hbWU9XCJibG9jayB0ZXh0LXNtIGZvbnQtbWVkaXVtIHRleHQtZ3JheS03MDAgbWItMSBmbGV4IGl0ZW1zLWNlbnRlclwiPlxuICAgICAgICAgICAgICA8Q2FsZW5kYXJJY29uIGNsYXNzTmFtZT1cIm1yLTIgaC00IHctNCB0ZXh0LXByaW1hcnlcIiAvPlxuICAgICAgICAgICAgICBUaXRsZVxuICAgICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgICAgIDxJbnB1dFxuICAgICAgICAgICAgICBpZD1cInRpdGxlXCJcbiAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJFbnRlciB5b3VyIGVudHJ5IHRpdGxlXCJcbiAgICAgICAgICAgICAgdmFsdWU9e3RpdGxlfVxuICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHNldFRpdGxlKGUudGFyZ2V0LnZhbHVlKX1cbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidy1mdWxsIGJvcmRlci1wcmltYXJ5LzIwIGZvY3VzOmJvcmRlci1wcmltYXJ5IGZvY3VzOnJpbmctcHJpbWFyeVwiXG4gICAgICAgICAgICAvPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cImNvbnRlbnRcIiBjbGFzc05hbWU9XCJibG9jayB0ZXh0LXNtIGZvbnQtbWVkaXVtIHRleHQtZ3JheS03MDAgbWItMVwiPlxuICAgICAgICAgICAgICBKb3VybmFsIEVudHJ5XG4gICAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICAgICAgPFRleHRhcmVhXG4gICAgICAgICAgICAgIGlkPVwiY29udGVudFwiXG4gICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiV3JpdGUgeW91ciB0aG91Z2h0cyBoZXJlLi4uXCJcbiAgICAgICAgICAgICAgdmFsdWU9e2NvbnRlbnR9XG4gICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gc2V0Q29udGVudChlLnRhcmdldC52YWx1ZSl9XG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cInctZnVsbCBtaW4taC1bMjAwcHhdIGJvcmRlci1wcmltYXJ5LzIwIGZvY3VzOmJvcmRlci1wcmltYXJ5IGZvY3VzOnJpbmctcHJpbWFyeVwiXG4gICAgICAgICAgICAvPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L0NhcmRDb250ZW50PlxuICAgICAgICA8Q2FyZEZvb3RlciBjbGFzc05hbWU9XCJiZy1wcmltYXJ5LzUgYm9yZGVyLXQgYm9yZGVyLXByaW1hcnkvMTBcIj5cbiAgICAgICAgICA8QnV0dG9uIG9uQ2xpY2s9e2hhbmRsZVNhdmV9IGNsYXNzTmFtZT1cInctZnVsbCBiZy1wcmltYXJ5IGhvdmVyOmJnLXByaW1hcnkvOTAgdGV4dC1wcmltYXJ5LWZvcmVncm91bmRcIj5cbiAgICAgICAgICAgIDxTYXZlSWNvbiBjbGFzc05hbWU9XCJtci0yIGgtNCB3LTRcIiAvPlxuICAgICAgICAgICAgU2F2ZSBFbnRyeVxuICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICA8L0NhcmRGb290ZXI+XG4gICAgICA8L0NhcmQ+XG4gICAgPC9kaXY+XG4gIClcbn0iXSwibmFtZXMiOlsiYXhpb3MiLCJ1c2VTdGF0ZSIsIkJ1dHRvbiIsIklucHV0IiwiVGV4dGFyZWEiLCJDYXJkIiwiQ2FyZENvbnRlbnQiLCJDYXJkRm9vdGVyIiwiQ2FyZEhlYWRlciIsIkNhcmRUaXRsZSIsIkNhbGVuZGFySWNvbiIsIkJvb2tPcGVuSWNvbiIsIlNhdmVJY29uIiwiSm91cm5hbEVudHJ5RWRpdG9yIiwidGl0bGUiLCJzZXRUaXRsZSIsImNvbnRlbnQiLCJzZXRDb250ZW50IiwiaGFuZGxlU2F2ZSIsInRyaW0iLCJhbGVydCIsInJlc3BvbnNlIiwicG9zdCIsImVudHJ5IiwiY29uc29sZSIsImxvZyIsImRhdGEiLCJlcnIiLCJlcnJvciIsImRpdiIsImNsYXNzTmFtZSIsImxhYmVsIiwiaHRtbEZvciIsImlkIiwicGxhY2Vob2xkZXIiLCJ2YWx1ZSIsIm9uQ2hhbmdlIiwiZSIsInRhcmdldCIsIm9uQ2xpY2siXSwiaWdub3JlTGlzdCI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/journal/write/page.jsx\n"));

/***/ })

});