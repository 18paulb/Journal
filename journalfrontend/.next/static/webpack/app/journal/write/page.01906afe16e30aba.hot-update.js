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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ JournalEntryEditor)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_ui_button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/components/ui/button */ \"(app-pages-browser)/./components/ui/button.jsx\");\n/* harmony import */ var _components_ui_input__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/components/ui/input */ \"(app-pages-browser)/./components/ui/input.jsx\");\n/* harmony import */ var _components_ui_textarea__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/components/ui/textarea */ \"(app-pages-browser)/./components/ui/textarea.jsx\");\n/* harmony import */ var _components_ui_card__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/components/ui/card */ \"(app-pages-browser)/./components/ui/card.jsx\");\n/* harmony import */ var _barrel_optimize_names_BookOpenIcon_CalendarIcon_SaveIcon_lucide_react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! __barrel_optimize__?names=BookOpenIcon,CalendarIcon,SaveIcon!=!lucide-react */ \"(app-pages-browser)/./node_modules/lucide-react/dist/esm/icons/book-open.js\");\n/* harmony import */ var _barrel_optimize_names_BookOpenIcon_CalendarIcon_SaveIcon_lucide_react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! __barrel_optimize__?names=BookOpenIcon,CalendarIcon,SaveIcon!=!lucide-react */ \"(app-pages-browser)/./node_modules/lucide-react/dist/esm/icons/calendar.js\");\n/* harmony import */ var _barrel_optimize_names_BookOpenIcon_CalendarIcon_SaveIcon_lucide_react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! __barrel_optimize__?names=BookOpenIcon,CalendarIcon,SaveIcon!=!lucide-react */ \"(app-pages-browser)/./node_modules/lucide-react/dist/esm/icons/save.js\");\n// 'use client';\n// import { useState } from \"react\";\n// import axios from \"axios\";\n// export default function WriteJournal() {\n//     const [entry, setEntry] = useState('');\n//     const [isSubmitting, setIsSubmitting] = useState(false);\n//     const [error, setError] = useState(null);\n//     const handleChange = (e) => {\n//       setEntry(e.target.value);\n//     };\n//     const handleSubmit = async (e) => {\n//       e.preventDefault();\n//       if (entry.trim() === '') {\n//         alert('Please enter a journal entry.');\n//         return;\n//       }\n//       setIsSubmitting(true); // Disable button to show loading state\n//       try {\n//         const response = await axios.post('http://localhost:8000/write-journal', {\n//           entry: entry,\n//         });\n//         console.log('Journal entry submitted:', response.data);\n//         setEntry(''); // Clear the textarea after submitting\n//       } catch (err) {\n//         console.error('Error submitting journal entry:', err);\n//         setError('Failed to submit your journal entry.');\n//       } finally {\n//         setIsSubmitting(false); // Re-enable the button\n//       }\n//     };\n//   return (\n//     <div>\n//       <h2>New Journal Entry</h2>\n//       <form onSubmit={handleSubmit}>\n//         <textarea\n//           value={entry}\n//           onChange={handleChange}\n//           placeholder=\"Write your journal entry here...\"\n//           rows=\"6\"\n//           className=\"journal-textarea\"\n//         />\n//         <button type=\"submit\" disabled={isSubmitting}>\n//           {isSubmitting ? 'Submitting...' : 'Submit'}\n//         </button>\n//       </form>\n//       {error && <p>{error}</p>}\n//     </div>\n//   );\n// }\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\n// import { toast, useToast } from \"@/components/ui/use-toast\"\n\nfunction JournalEntryEditor() {\n    _s();\n    const [title, setTitle] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)('');\n    const [content, setContent] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)('');\n    const handleSave = async ()=>{\n        if (content.trim() === '') {\n            alert('Please enter a journal entry.');\n            return;\n        }\n        setIsSubmitting(true); // Disable button to show loading state\n        try {\n            const response = await axios.post('http://localhost:8000/write-journal', {\n                entry: entry\n            });\n            console.log('Journal entry submitted:', response.data);\n            setEntry(''); // Clear the textarea after submitting\n        } catch (err) {\n            console.error('Error submitting journal entry:', err);\n            setError('Failed to submit your journal entry.');\n        } finally{\n            setIsSubmitting(false); // Re-enable the button\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 flex items-center justify-center p-4\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_card__WEBPACK_IMPORTED_MODULE_5__.Card, {\n            className: \"w-full max-w-2xl shadow-lg\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_card__WEBPACK_IMPORTED_MODULE_5__.CardHeader, {\n                    className: \"bg-primary/5 border-b border-primary/10\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_card__WEBPACK_IMPORTED_MODULE_5__.CardTitle, {\n                        className: \"text-2xl font-bold text-center text-primary flex items-center justify-center\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_BookOpenIcon_CalendarIcon_SaveIcon_lucide_react__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n                                className: \"mr-2\"\n                            }, void 0, false, {\n                                fileName: \"/Users/brandonpaul/CS/PersonalProjects/WebJournal/journalfrontend/app/journal/write/page.jsx\",\n                                lineNumber: 100,\n                                columnNumber: 13\n                            }, this),\n                            \"My Journal\"\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/brandonpaul/CS/PersonalProjects/WebJournal/journalfrontend/app/journal/write/page.jsx\",\n                        lineNumber: 99,\n                        columnNumber: 11\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"/Users/brandonpaul/CS/PersonalProjects/WebJournal/journalfrontend/app/journal/write/page.jsx\",\n                    lineNumber: 98,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_card__WEBPACK_IMPORTED_MODULE_5__.CardContent, {\n                    className: \"space-y-4 p-6\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                    htmlFor: \"title\",\n                                    className: \"block text-sm font-medium text-gray-700 mb-1 flex items-center\",\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_BookOpenIcon_CalendarIcon_SaveIcon_lucide_react__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n                                            className: \"mr-2 h-4 w-4 text-primary\"\n                                        }, void 0, false, {\n                                            fileName: \"/Users/brandonpaul/CS/PersonalProjects/WebJournal/journalfrontend/app/journal/write/page.jsx\",\n                                            lineNumber: 107,\n                                            columnNumber: 15\n                                        }, this),\n                                        \"Title\"\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"/Users/brandonpaul/CS/PersonalProjects/WebJournal/journalfrontend/app/journal/write/page.jsx\",\n                                    lineNumber: 106,\n                                    columnNumber: 13\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_input__WEBPACK_IMPORTED_MODULE_3__.Input, {\n                                    id: \"title\",\n                                    placeholder: \"Enter your entry title\",\n                                    value: title,\n                                    onChange: (e)=>setTitle(e.target.value),\n                                    className: \"w-full border-primary/20 focus:border-primary focus:ring-primary\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/brandonpaul/CS/PersonalProjects/WebJournal/journalfrontend/app/journal/write/page.jsx\",\n                                    lineNumber: 110,\n                                    columnNumber: 13\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/brandonpaul/CS/PersonalProjects/WebJournal/journalfrontend/app/journal/write/page.jsx\",\n                            lineNumber: 105,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                    htmlFor: \"content\",\n                                    className: \"block text-sm font-medium text-gray-700 mb-1\",\n                                    children: \"Journal Entry\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/brandonpaul/CS/PersonalProjects/WebJournal/journalfrontend/app/journal/write/page.jsx\",\n                                    lineNumber: 119,\n                                    columnNumber: 13\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_textarea__WEBPACK_IMPORTED_MODULE_4__.Textarea, {\n                                    id: \"content\",\n                                    placeholder: \"Write your thoughts here...\",\n                                    value: content,\n                                    onChange: (e)=>setContent(e.target.value),\n                                    className: \"w-full min-h-[200px] border-primary/20 focus:border-primary focus:ring-primary\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/brandonpaul/CS/PersonalProjects/WebJournal/journalfrontend/app/journal/write/page.jsx\",\n                                    lineNumber: 122,\n                                    columnNumber: 13\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/brandonpaul/CS/PersonalProjects/WebJournal/journalfrontend/app/journal/write/page.jsx\",\n                            lineNumber: 118,\n                            columnNumber: 11\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/brandonpaul/CS/PersonalProjects/WebJournal/journalfrontend/app/journal/write/page.jsx\",\n                    lineNumber: 104,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_card__WEBPACK_IMPORTED_MODULE_5__.CardFooter, {\n                    className: \"bg-primary/5 border-t border-primary/10\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_button__WEBPACK_IMPORTED_MODULE_2__.Button, {\n                        onClick: handleSave,\n                        className: \"w-full bg-primary hover:bg-primary/90 text-primary-foreground\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_BookOpenIcon_CalendarIcon_SaveIcon_lucide_react__WEBPACK_IMPORTED_MODULE_8__[\"default\"], {\n                                className: \"mr-2 h-4 w-4\"\n                            }, void 0, false, {\n                                fileName: \"/Users/brandonpaul/CS/PersonalProjects/WebJournal/journalfrontend/app/journal/write/page.jsx\",\n                                lineNumber: 133,\n                                columnNumber: 13\n                            }, this),\n                            \"Save Entry\"\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/brandonpaul/CS/PersonalProjects/WebJournal/journalfrontend/app/journal/write/page.jsx\",\n                        lineNumber: 132,\n                        columnNumber: 11\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"/Users/brandonpaul/CS/PersonalProjects/WebJournal/journalfrontend/app/journal/write/page.jsx\",\n                    lineNumber: 131,\n                    columnNumber: 9\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/brandonpaul/CS/PersonalProjects/WebJournal/journalfrontend/app/journal/write/page.jsx\",\n            lineNumber: 97,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"/Users/brandonpaul/CS/PersonalProjects/WebJournal/journalfrontend/app/journal/write/page.jsx\",\n        lineNumber: 96,\n        columnNumber: 5\n    }, this);\n}\n_s(JournalEntryEditor, \"OTvljkGZ3oDHjpEqZRGoAyVoe2c=\");\n_c = JournalEntryEditor;\nvar _c;\n$RefreshReg$(_c, \"JournalEntryEditor\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC9qb3VybmFsL3dyaXRlL3BhZ2UuanN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQUEsZ0JBQWdCO0FBRWhCLG9DQUFvQztBQUNwQyw2QkFBNkI7QUFFN0IsMkNBQTJDO0FBRTNDLDhDQUE4QztBQUM5QywrREFBK0Q7QUFDL0QsZ0RBQWdEO0FBRWhELG9DQUFvQztBQUNwQyxrQ0FBa0M7QUFDbEMsU0FBUztBQUVULDBDQUEwQztBQUMxQyw0QkFBNEI7QUFDNUIsbUNBQW1DO0FBQ25DLGtEQUFrRDtBQUNsRCxrQkFBa0I7QUFDbEIsVUFBVTtBQUVWLHVFQUF1RTtBQUV2RSxjQUFjO0FBQ2QscUZBQXFGO0FBQ3JGLDBCQUEwQjtBQUMxQixjQUFjO0FBQ2Qsa0VBQWtFO0FBQ2xFLCtEQUErRDtBQUMvRCx3QkFBd0I7QUFDeEIsaUVBQWlFO0FBQ2pFLDREQUE0RDtBQUM1RCxvQkFBb0I7QUFDcEIsMERBQTBEO0FBQzFELFVBQVU7QUFFVixTQUFTO0FBRVQsYUFBYTtBQUNiLFlBQVk7QUFDWixtQ0FBbUM7QUFDbkMsdUNBQXVDO0FBQ3ZDLG9CQUFvQjtBQUNwQiwwQkFBMEI7QUFDMUIsb0NBQW9DO0FBQ3BDLDJEQUEyRDtBQUMzRCxxQkFBcUI7QUFDckIseUNBQXlDO0FBQ3pDLGFBQWE7QUFDYix5REFBeUQ7QUFDekQsd0RBQXdEO0FBQ3hELG9CQUFvQjtBQUNwQixnQkFBZ0I7QUFDaEIsa0NBQWtDO0FBQ2xDLGFBQWE7QUFDYixPQUFPO0FBQ1AsSUFBSTs7O0FBSTRCO0FBQ2U7QUFDRjtBQUNNO0FBQ3dDO0FBQzNGLDhEQUE4RDtBQUNLO0FBRXBELFNBQVNZOztJQUN0QixNQUFNLENBQUNDLE9BQU9DLFNBQVMsR0FBR2QsK0NBQVFBLENBQUM7SUFDbkMsTUFBTSxDQUFDZSxTQUFTQyxXQUFXLEdBQUdoQiwrQ0FBUUEsQ0FBQztJQUV2QyxNQUFNaUIsYUFBYTtRQUNmLElBQUlGLFFBQVFHLElBQUksT0FBTyxJQUFJO1lBQ3pCQyxNQUFNO1lBQ047UUFDRjtRQUVBQyxnQkFBZ0IsT0FBTyx1Q0FBdUM7UUFDOUQsSUFBSTtZQUNGLE1BQU1DLFdBQVcsTUFBTUMsTUFBTUMsSUFBSSxDQUFDLHVDQUF1QztnQkFDdkVDLE9BQU9BO1lBQ1Q7WUFDQUMsUUFBUUMsR0FBRyxDQUFDLDRCQUE0QkwsU0FBU00sSUFBSTtZQUNyREMsU0FBUyxLQUFLLHNDQUFzQztRQUN0RCxFQUFFLE9BQU9DLEtBQUs7WUFDWkosUUFBUUssS0FBSyxDQUFDLG1DQUFtQ0Q7WUFDakRFLFNBQVM7UUFDWCxTQUFVO1lBQ1JYLGdCQUFnQixRQUFRLHVCQUF1QjtRQUNqRDtJQUNKO0lBRUEscUJBQ0UsOERBQUNZO1FBQUlDLFdBQVU7a0JBQ2IsNEVBQUM3QixxREFBSUE7WUFBQzZCLFdBQVU7OzhCQUNkLDhEQUFDMUIsMkRBQVVBO29CQUFDMEIsV0FBVTs4QkFDcEIsNEVBQUN6QiwwREFBU0E7d0JBQUN5QixXQUFVOzswQ0FDbkIsOERBQUN2Qiw4R0FBWUE7Z0NBQUN1QixXQUFVOzs7Ozs7NEJBQVM7Ozs7Ozs7Ozs7Ozs4QkFJckMsOERBQUM1Qiw0REFBV0E7b0JBQUM0QixXQUFVOztzQ0FDckIsOERBQUNEOzs4Q0FDQyw4REFBQ0U7b0NBQU1DLFNBQVE7b0NBQVFGLFdBQVU7O3NEQUMvQiw4REFBQ3hCLDhHQUFZQTs0Q0FBQ3dCLFdBQVU7Ozs7Ozt3Q0FBOEI7Ozs7Ozs7OENBR3hELDhEQUFDL0IsdURBQUtBO29DQUNKa0MsSUFBRztvQ0FDSEMsYUFBWTtvQ0FDWkMsT0FBT3pCO29DQUNQMEIsVUFBVSxDQUFDQyxJQUFNMUIsU0FBUzBCLEVBQUVDLE1BQU0sQ0FBQ0gsS0FBSztvQ0FDeENMLFdBQVU7Ozs7Ozs7Ozs7OztzQ0FHZCw4REFBQ0Q7OzhDQUNDLDhEQUFDRTtvQ0FBTUMsU0FBUTtvQ0FBVUYsV0FBVTs4Q0FBK0M7Ozs7Ozs4Q0FHbEYsOERBQUM5Qiw2REFBUUE7b0NBQ1BpQyxJQUFHO29DQUNIQyxhQUFZO29DQUNaQyxPQUFPdkI7b0NBQ1B3QixVQUFVLENBQUNDLElBQU14QixXQUFXd0IsRUFBRUMsTUFBTSxDQUFDSCxLQUFLO29DQUMxQ0wsV0FBVTs7Ozs7Ozs7Ozs7Ozs7Ozs7OzhCQUloQiw4REFBQzNCLDJEQUFVQTtvQkFBQzJCLFdBQVU7OEJBQ3BCLDRFQUFDaEMseURBQU1BO3dCQUFDeUMsU0FBU3pCO3dCQUFZZ0IsV0FBVTs7MENBQ3JDLDhEQUFDdEIsOEdBQVFBO2dDQUFDc0IsV0FBVTs7Ozs7OzRCQUFpQjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFPakQ7R0F0RXdCckI7S0FBQUEiLCJzb3VyY2VzIjpbIi9Vc2Vycy9icmFuZG9ucGF1bC9DUy9QZXJzb25hbFByb2plY3RzL1dlYkpvdXJuYWwvam91cm5hbGZyb250ZW5kL2FwcC9qb3VybmFsL3dyaXRlL3BhZ2UuanN4Il0sInNvdXJjZXNDb250ZW50IjpbIi8vICd1c2UgY2xpZW50JztcblxuLy8gaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbi8vIGltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIjtcblxuLy8gZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gV3JpdGVKb3VybmFsKCkge1xuICAgIFxuLy8gICAgIGNvbnN0IFtlbnRyeSwgc2V0RW50cnldID0gdXNlU3RhdGUoJycpO1xuLy8gICAgIGNvbnN0IFtpc1N1Ym1pdHRpbmcsIHNldElzU3VibWl0dGluZ10gPSB1c2VTdGF0ZShmYWxzZSk7XG4vLyAgICAgY29uc3QgW2Vycm9yLCBzZXRFcnJvcl0gPSB1c2VTdGF0ZShudWxsKTtcblxuLy8gICAgIGNvbnN0IGhhbmRsZUNoYW5nZSA9IChlKSA9PiB7XG4vLyAgICAgICBzZXRFbnRyeShlLnRhcmdldC52YWx1ZSk7XG4vLyAgICAgfTtcbiAgXG4vLyAgICAgY29uc3QgaGFuZGxlU3VibWl0ID0gYXN5bmMgKGUpID0+IHtcbi8vICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbi8vICAgICAgIGlmIChlbnRyeS50cmltKCkgPT09ICcnKSB7XG4vLyAgICAgICAgIGFsZXJ0KCdQbGVhc2UgZW50ZXIgYSBqb3VybmFsIGVudHJ5LicpO1xuLy8gICAgICAgICByZXR1cm47XG4vLyAgICAgICB9XG5cbi8vICAgICAgIHNldElzU3VibWl0dGluZyh0cnVlKTsgLy8gRGlzYWJsZSBidXR0b24gdG8gc2hvdyBsb2FkaW5nIHN0YXRlXG5cbi8vICAgICAgIHRyeSB7XG4vLyAgICAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgYXhpb3MucG9zdCgnaHR0cDovL2xvY2FsaG9zdDo4MDAwL3dyaXRlLWpvdXJuYWwnLCB7XG4vLyAgICAgICAgICAgZW50cnk6IGVudHJ5LFxuLy8gICAgICAgICB9KTtcbi8vICAgICAgICAgY29uc29sZS5sb2coJ0pvdXJuYWwgZW50cnkgc3VibWl0dGVkOicsIHJlc3BvbnNlLmRhdGEpO1xuLy8gICAgICAgICBzZXRFbnRyeSgnJyk7IC8vIENsZWFyIHRoZSB0ZXh0YXJlYSBhZnRlciBzdWJtaXR0aW5nXG4vLyAgICAgICB9IGNhdGNoIChlcnIpIHtcbi8vICAgICAgICAgY29uc29sZS5lcnJvcignRXJyb3Igc3VibWl0dGluZyBqb3VybmFsIGVudHJ5OicsIGVycik7XG4vLyAgICAgICAgIHNldEVycm9yKCdGYWlsZWQgdG8gc3VibWl0IHlvdXIgam91cm5hbCBlbnRyeS4nKTtcbi8vICAgICAgIH0gZmluYWxseSB7XG4vLyAgICAgICAgIHNldElzU3VibWl0dGluZyhmYWxzZSk7IC8vIFJlLWVuYWJsZSB0aGUgYnV0dG9uXG4vLyAgICAgICB9XG5cbi8vICAgICB9O1xuICBcbi8vICAgcmV0dXJuIChcbi8vICAgICA8ZGl2PlxuLy8gICAgICAgPGgyPk5ldyBKb3VybmFsIEVudHJ5PC9oMj5cbi8vICAgICAgIDxmb3JtIG9uU3VibWl0PXtoYW5kbGVTdWJtaXR9PlxuLy8gICAgICAgICA8dGV4dGFyZWFcbi8vICAgICAgICAgICB2YWx1ZT17ZW50cnl9XG4vLyAgICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZUNoYW5nZX1cbi8vICAgICAgICAgICBwbGFjZWhvbGRlcj1cIldyaXRlIHlvdXIgam91cm5hbCBlbnRyeSBoZXJlLi4uXCJcbi8vICAgICAgICAgICByb3dzPVwiNlwiXG4vLyAgICAgICAgICAgY2xhc3NOYW1lPVwiam91cm5hbC10ZXh0YXJlYVwiXG4vLyAgICAgICAgIC8+XG4vLyAgICAgICAgIDxidXR0b24gdHlwZT1cInN1Ym1pdFwiIGRpc2FibGVkPXtpc1N1Ym1pdHRpbmd9PlxuLy8gICAgICAgICAgIHtpc1N1Ym1pdHRpbmcgPyAnU3VibWl0dGluZy4uLicgOiAnU3VibWl0J31cbi8vICAgICAgICAgPC9idXR0b24+XG4vLyAgICAgICA8L2Zvcm0+XG4vLyAgICAgICB7ZXJyb3IgJiYgPHA+e2Vycm9yfTwvcD59XG4vLyAgICAgPC9kaXY+XG4vLyAgICk7XG4vLyB9XG5cbid1c2UgY2xpZW50J1xuXG5pbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgQnV0dG9uIH0gZnJvbSBcIkAvY29tcG9uZW50cy91aS9idXR0b25cIlxuaW1wb3J0IHsgSW5wdXQgfSBmcm9tIFwiQC9jb21wb25lbnRzL3VpL2lucHV0XCJcbmltcG9ydCB7IFRleHRhcmVhIH0gZnJvbSBcIkAvY29tcG9uZW50cy91aS90ZXh0YXJlYVwiXG5pbXBvcnQgeyBDYXJkLCBDYXJkQ29udGVudCwgQ2FyZEZvb3RlciwgQ2FyZEhlYWRlciwgQ2FyZFRpdGxlIH0gZnJvbSBcIkAvY29tcG9uZW50cy91aS9jYXJkXCJcbi8vIGltcG9ydCB7IHRvYXN0LCB1c2VUb2FzdCB9IGZyb20gXCJAL2NvbXBvbmVudHMvdWkvdXNlLXRvYXN0XCJcbmltcG9ydCB7IENhbGVuZGFySWNvbiwgQm9va09wZW5JY29uLCBTYXZlSWNvbiB9IGZyb20gJ2x1Y2lkZS1yZWFjdCdcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSm91cm5hbEVudHJ5RWRpdG9yKCkge1xuICBjb25zdCBbdGl0bGUsIHNldFRpdGxlXSA9IHVzZVN0YXRlKCcnKVxuICBjb25zdCBbY29udGVudCwgc2V0Q29udGVudF0gPSB1c2VTdGF0ZSgnJylcblxuICBjb25zdCBoYW5kbGVTYXZlID0gYXN5bmMgKCkgPT4ge1xuICAgICAgaWYgKGNvbnRlbnQudHJpbSgpID09PSAnJykge1xuICAgICAgICBhbGVydCgnUGxlYXNlIGVudGVyIGEgam91cm5hbCBlbnRyeS4nKTtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBzZXRJc1N1Ym1pdHRpbmcodHJ1ZSk7IC8vIERpc2FibGUgYnV0dG9uIHRvIHNob3cgbG9hZGluZyBzdGF0ZVxuICAgICAgdHJ5IHtcbiAgICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBheGlvcy5wb3N0KCdodHRwOi8vbG9jYWxob3N0OjgwMDAvd3JpdGUtam91cm5hbCcsIHtcbiAgICAgICAgICBlbnRyeTogZW50cnksXG4gICAgICAgIH0pO1xuICAgICAgICBjb25zb2xlLmxvZygnSm91cm5hbCBlbnRyeSBzdWJtaXR0ZWQ6JywgcmVzcG9uc2UuZGF0YSk7XG4gICAgICAgIHNldEVudHJ5KCcnKTsgLy8gQ2xlYXIgdGhlIHRleHRhcmVhIGFmdGVyIHN1Ym1pdHRpbmdcbiAgICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgICBjb25zb2xlLmVycm9yKCdFcnJvciBzdWJtaXR0aW5nIGpvdXJuYWwgZW50cnk6JywgZXJyKTtcbiAgICAgICAgc2V0RXJyb3IoJ0ZhaWxlZCB0byBzdWJtaXQgeW91ciBqb3VybmFsIGVudHJ5LicpO1xuICAgICAgfSBmaW5hbGx5IHtcbiAgICAgICAgc2V0SXNTdWJtaXR0aW5nKGZhbHNlKTsgLy8gUmUtZW5hYmxlIHRoZSBidXR0b25cbiAgICAgIH1cbiAgfVxuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJtaW4taC1zY3JlZW4gYmctZ3JhZGllbnQtdG8tYiBmcm9tLWdyYXktNTAgdG8tZ3JheS0xMDAgZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXIgcC00XCI+XG4gICAgICA8Q2FyZCBjbGFzc05hbWU9XCJ3LWZ1bGwgbWF4LXctMnhsIHNoYWRvdy1sZ1wiPlxuICAgICAgICA8Q2FyZEhlYWRlciBjbGFzc05hbWU9XCJiZy1wcmltYXJ5LzUgYm9yZGVyLWIgYm9yZGVyLXByaW1hcnkvMTBcIj5cbiAgICAgICAgICA8Q2FyZFRpdGxlIGNsYXNzTmFtZT1cInRleHQtMnhsIGZvbnQtYm9sZCB0ZXh0LWNlbnRlciB0ZXh0LXByaW1hcnkgZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXJcIj5cbiAgICAgICAgICAgIDxCb29rT3Blbkljb24gY2xhc3NOYW1lPVwibXItMlwiIC8+XG4gICAgICAgICAgICBNeSBKb3VybmFsXG4gICAgICAgICAgPC9DYXJkVGl0bGU+XG4gICAgICAgIDwvQ2FyZEhlYWRlcj5cbiAgICAgICAgPENhcmRDb250ZW50IGNsYXNzTmFtZT1cInNwYWNlLXktNCBwLTZcIj5cbiAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJ0aXRsZVwiIGNsYXNzTmFtZT1cImJsb2NrIHRleHQtc20gZm9udC1tZWRpdW0gdGV4dC1ncmF5LTcwMCBtYi0xIGZsZXggaXRlbXMtY2VudGVyXCI+XG4gICAgICAgICAgICAgIDxDYWxlbmRhckljb24gY2xhc3NOYW1lPVwibXItMiBoLTQgdy00IHRleHQtcHJpbWFyeVwiIC8+XG4gICAgICAgICAgICAgIFRpdGxlXG4gICAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICAgICAgPElucHV0XG4gICAgICAgICAgICAgIGlkPVwidGl0bGVcIlxuICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIkVudGVyIHlvdXIgZW50cnkgdGl0bGVcIlxuICAgICAgICAgICAgICB2YWx1ZT17dGl0bGV9XG4gICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gc2V0VGl0bGUoZS50YXJnZXQudmFsdWUpfVxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ3LWZ1bGwgYm9yZGVyLXByaW1hcnkvMjAgZm9jdXM6Ym9yZGVyLXByaW1hcnkgZm9jdXM6cmluZy1wcmltYXJ5XCJcbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwiY29udGVudFwiIGNsYXNzTmFtZT1cImJsb2NrIHRleHQtc20gZm9udC1tZWRpdW0gdGV4dC1ncmF5LTcwMCBtYi0xXCI+XG4gICAgICAgICAgICAgIEpvdXJuYWwgRW50cnlcbiAgICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICAgICA8VGV4dGFyZWFcbiAgICAgICAgICAgICAgaWQ9XCJjb250ZW50XCJcbiAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJXcml0ZSB5b3VyIHRob3VnaHRzIGhlcmUuLi5cIlxuICAgICAgICAgICAgICB2YWx1ZT17Y29udGVudH1cbiAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBzZXRDb250ZW50KGUudGFyZ2V0LnZhbHVlKX1cbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidy1mdWxsIG1pbi1oLVsyMDBweF0gYm9yZGVyLXByaW1hcnkvMjAgZm9jdXM6Ym9yZGVyLXByaW1hcnkgZm9jdXM6cmluZy1wcmltYXJ5XCJcbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvQ2FyZENvbnRlbnQ+XG4gICAgICAgIDxDYXJkRm9vdGVyIGNsYXNzTmFtZT1cImJnLXByaW1hcnkvNSBib3JkZXItdCBib3JkZXItcHJpbWFyeS8xMFwiPlxuICAgICAgICAgIDxCdXR0b24gb25DbGljaz17aGFuZGxlU2F2ZX0gY2xhc3NOYW1lPVwidy1mdWxsIGJnLXByaW1hcnkgaG92ZXI6YmctcHJpbWFyeS85MCB0ZXh0LXByaW1hcnktZm9yZWdyb3VuZFwiPlxuICAgICAgICAgICAgPFNhdmVJY29uIGNsYXNzTmFtZT1cIm1yLTIgaC00IHctNFwiIC8+XG4gICAgICAgICAgICBTYXZlIEVudHJ5XG4gICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgIDwvQ2FyZEZvb3Rlcj5cbiAgICAgIDwvQ2FyZD5cbiAgICA8L2Rpdj5cbiAgKVxufSJdLCJuYW1lcyI6WyJ1c2VTdGF0ZSIsIkJ1dHRvbiIsIklucHV0IiwiVGV4dGFyZWEiLCJDYXJkIiwiQ2FyZENvbnRlbnQiLCJDYXJkRm9vdGVyIiwiQ2FyZEhlYWRlciIsIkNhcmRUaXRsZSIsIkNhbGVuZGFySWNvbiIsIkJvb2tPcGVuSWNvbiIsIlNhdmVJY29uIiwiSm91cm5hbEVudHJ5RWRpdG9yIiwidGl0bGUiLCJzZXRUaXRsZSIsImNvbnRlbnQiLCJzZXRDb250ZW50IiwiaGFuZGxlU2F2ZSIsInRyaW0iLCJhbGVydCIsInNldElzU3VibWl0dGluZyIsInJlc3BvbnNlIiwiYXhpb3MiLCJwb3N0IiwiZW50cnkiLCJjb25zb2xlIiwibG9nIiwiZGF0YSIsInNldEVudHJ5IiwiZXJyIiwiZXJyb3IiLCJzZXRFcnJvciIsImRpdiIsImNsYXNzTmFtZSIsImxhYmVsIiwiaHRtbEZvciIsImlkIiwicGxhY2Vob2xkZXIiLCJ2YWx1ZSIsIm9uQ2hhbmdlIiwiZSIsInRhcmdldCIsIm9uQ2xpY2siXSwiaWdub3JlTGlzdCI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/journal/write/page.jsx\n"));

/***/ })

});