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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ JournalEntryEditor)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_ui_button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/components/ui/button */ \"(app-pages-browser)/./components/ui/button.jsx\");\n/* harmony import */ var _components_ui_input__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/components/ui/input */ \"(app-pages-browser)/./components/ui/input.jsx\");\n/* harmony import */ var _components_ui_textarea__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/components/ui/textarea */ \"(app-pages-browser)/./components/ui/textarea.jsx\");\n/* harmony import */ var _components_ui_card__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/components/ui/card */ \"(app-pages-browser)/./components/ui/card.jsx\");\n/* harmony import */ var _barrel_optimize_names_BookOpenIcon_CalendarIcon_SaveIcon_lucide_react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! __barrel_optimize__?names=BookOpenIcon,CalendarIcon,SaveIcon!=!lucide-react */ \"(app-pages-browser)/./node_modules/lucide-react/dist/esm/icons/book-open.js\");\n/* harmony import */ var _barrel_optimize_names_BookOpenIcon_CalendarIcon_SaveIcon_lucide_react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! __barrel_optimize__?names=BookOpenIcon,CalendarIcon,SaveIcon!=!lucide-react */ \"(app-pages-browser)/./node_modules/lucide-react/dist/esm/icons/calendar.js\");\n/* harmony import */ var _barrel_optimize_names_BookOpenIcon_CalendarIcon_SaveIcon_lucide_react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! __barrel_optimize__?names=BookOpenIcon,CalendarIcon,SaveIcon!=!lucide-react */ \"(app-pages-browser)/./node_modules/lucide-react/dist/esm/icons/save.js\");\n// 'use client';\n// import { useState } from \"react\";\n// import axios from \"axios\";\n// export default function WriteJournal() {\n//     const [entry, setEntry] = useState('');\n//     const [isSubmitting, setIsSubmitting] = useState(false);\n//     const [error, setError] = useState(null);\n//     const handleChange = (e) => {\n//       setEntry(e.target.value);\n//     };\n//     const handleSubmit = async (e) => {\n//       e.preventDefault();\n//       if (entry.trim() === '') {\n//         alert('Please enter a journal entry.');\n//         return;\n//       }\n//       setIsSubmitting(true); // Disable button to show loading state\n//       try {\n//         const response = await axios.post('http://localhost:8000/write-journal', {\n//           entry: entry,\n//         });\n//         console.log('Journal entry submitted:', response.data);\n//         setEntry(''); // Clear the textarea after submitting\n//       } catch (err) {\n//         console.error('Error submitting journal entry:', err);\n//         setError('Failed to submit your journal entry.');\n//       } finally {\n//         setIsSubmitting(false); // Re-enable the button\n//       }\n//     };\n//   return (\n//     <div>\n//       <h2>New Journal Entry</h2>\n//       <form onSubmit={handleSubmit}>\n//         <textarea\n//           value={entry}\n//           onChange={handleChange}\n//           placeholder=\"Write your journal entry here...\"\n//           rows=\"6\"\n//           className=\"journal-textarea\"\n//         />\n//         <button type=\"submit\" disabled={isSubmitting}>\n//           {isSubmitting ? 'Submitting...' : 'Submit'}\n//         </button>\n//       </form>\n//       {error && <p>{error}</p>}\n//     </div>\n//   );\n// }\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\n// import { toast, useToast } from \"@/components/ui/use-toast\"\n\nfunction JournalEntryEditor() {\n    _s();\n    const [title, setTitle] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)('');\n    const [content, setContent] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)('');\n    // const { toast } = useToast()\n    const handleSave = ()=>{\n        console.log('Saving entry:', {\n            title,\n            content\n        });\n        toast({\n            title: \"Entry Saved\",\n            description: \"Your journal entry has been saved successfully.\"\n        });\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 flex items-center justify-center p-4\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_card__WEBPACK_IMPORTED_MODULE_5__.Card, {\n            className: \"w-full max-w-2xl shadow-lg\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_card__WEBPACK_IMPORTED_MODULE_5__.CardHeader, {\n                    className: \"bg-primary/5 border-b border-primary/10\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_card__WEBPACK_IMPORTED_MODULE_5__.CardTitle, {\n                        className: \"text-2xl font-bold text-center text-primary flex items-center justify-center\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_BookOpenIcon_CalendarIcon_SaveIcon_lucide_react__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n                                className: \"mr-2\"\n                            }, void 0, false, {\n                                fileName: \"/Users/brandonpaul/CS/PersonalProjects/WebJournal/journalfrontend/app/journal/write/page.jsx\",\n                                lineNumber: 88,\n                                columnNumber: 13\n                            }, this),\n                            \"My Journal\"\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/brandonpaul/CS/PersonalProjects/WebJournal/journalfrontend/app/journal/write/page.jsx\",\n                        lineNumber: 87,\n                        columnNumber: 11\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"/Users/brandonpaul/CS/PersonalProjects/WebJournal/journalfrontend/app/journal/write/page.jsx\",\n                    lineNumber: 86,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_card__WEBPACK_IMPORTED_MODULE_5__.CardContent, {\n                    className: \"space-y-4 p-6\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                    htmlFor: \"title\",\n                                    className: \"block text-sm font-medium text-gray-700 mb-1 flex items-center\",\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_BookOpenIcon_CalendarIcon_SaveIcon_lucide_react__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n                                            className: \"mr-2 h-4 w-4 text-primary\"\n                                        }, void 0, false, {\n                                            fileName: \"/Users/brandonpaul/CS/PersonalProjects/WebJournal/journalfrontend/app/journal/write/page.jsx\",\n                                            lineNumber: 95,\n                                            columnNumber: 15\n                                        }, this),\n                                        \"Title\"\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"/Users/brandonpaul/CS/PersonalProjects/WebJournal/journalfrontend/app/journal/write/page.jsx\",\n                                    lineNumber: 94,\n                                    columnNumber: 13\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_input__WEBPACK_IMPORTED_MODULE_3__.Input, {\n                                    id: \"title\",\n                                    placeholder: \"Enter your entry title\",\n                                    value: title,\n                                    onChange: (e)=>setTitle(e.target.value),\n                                    className: \"w-full border-primary/20 focus:border-primary focus:ring-primary\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/brandonpaul/CS/PersonalProjects/WebJournal/journalfrontend/app/journal/write/page.jsx\",\n                                    lineNumber: 98,\n                                    columnNumber: 13\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/brandonpaul/CS/PersonalProjects/WebJournal/journalfrontend/app/journal/write/page.jsx\",\n                            lineNumber: 93,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                    htmlFor: \"content\",\n                                    className: \"block text-sm font-medium text-gray-700 mb-1\",\n                                    children: \"Journal Entry\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/brandonpaul/CS/PersonalProjects/WebJournal/journalfrontend/app/journal/write/page.jsx\",\n                                    lineNumber: 107,\n                                    columnNumber: 13\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_textarea__WEBPACK_IMPORTED_MODULE_4__.Textarea, {\n                                    id: \"content\",\n                                    placeholder: \"Write your thoughts here...\",\n                                    value: content,\n                                    onChange: (e)=>setContent(e.target.value),\n                                    className: \"w-full min-h-[200px] border-primary/20 focus:border-primary focus:ring-primary\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/brandonpaul/CS/PersonalProjects/WebJournal/journalfrontend/app/journal/write/page.jsx\",\n                                    lineNumber: 110,\n                                    columnNumber: 13\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/brandonpaul/CS/PersonalProjects/WebJournal/journalfrontend/app/journal/write/page.jsx\",\n                            lineNumber: 106,\n                            columnNumber: 11\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/brandonpaul/CS/PersonalProjects/WebJournal/journalfrontend/app/journal/write/page.jsx\",\n                    lineNumber: 92,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_card__WEBPACK_IMPORTED_MODULE_5__.CardFooter, {\n                    className: \"bg-primary/5 border-t border-primary/10\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_button__WEBPACK_IMPORTED_MODULE_2__.Button, {\n                        onClick: handleSave,\n                        className: \"w-full bg-primary hover:bg-primary/90 text-primary-foreground\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_BookOpenIcon_CalendarIcon_SaveIcon_lucide_react__WEBPACK_IMPORTED_MODULE_8__[\"default\"], {\n                                className: \"mr-2 h-4 w-4\"\n                            }, void 0, false, {\n                                fileName: \"/Users/brandonpaul/CS/PersonalProjects/WebJournal/journalfrontend/app/journal/write/page.jsx\",\n                                lineNumber: 121,\n                                columnNumber: 13\n                            }, this),\n                            \"Save Entry\"\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/brandonpaul/CS/PersonalProjects/WebJournal/journalfrontend/app/journal/write/page.jsx\",\n                        lineNumber: 120,\n                        columnNumber: 11\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"/Users/brandonpaul/CS/PersonalProjects/WebJournal/journalfrontend/app/journal/write/page.jsx\",\n                    lineNumber: 119,\n                    columnNumber: 9\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/brandonpaul/CS/PersonalProjects/WebJournal/journalfrontend/app/journal/write/page.jsx\",\n            lineNumber: 85,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"/Users/brandonpaul/CS/PersonalProjects/WebJournal/journalfrontend/app/journal/write/page.jsx\",\n        lineNumber: 84,\n        columnNumber: 5\n    }, this);\n}\n_s(JournalEntryEditor, \"OTvljkGZ3oDHjpEqZRGoAyVoe2c=\");\n_c = JournalEntryEditor;\nvar _c;\n$RefreshReg$(_c, \"JournalEntryEditor\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC9qb3VybmFsL3dyaXRlL3BhZ2UuanN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQUEsZ0JBQWdCO0FBRWhCLG9DQUFvQztBQUNwQyw2QkFBNkI7QUFFN0IsMkNBQTJDO0FBRTNDLDhDQUE4QztBQUM5QywrREFBK0Q7QUFDL0QsZ0RBQWdEO0FBRWhELG9DQUFvQztBQUNwQyxrQ0FBa0M7QUFDbEMsU0FBUztBQUVULDBDQUEwQztBQUMxQyw0QkFBNEI7QUFDNUIsbUNBQW1DO0FBQ25DLGtEQUFrRDtBQUNsRCxrQkFBa0I7QUFDbEIsVUFBVTtBQUVWLHVFQUF1RTtBQUV2RSxjQUFjO0FBQ2QscUZBQXFGO0FBQ3JGLDBCQUEwQjtBQUMxQixjQUFjO0FBQ2Qsa0VBQWtFO0FBQ2xFLCtEQUErRDtBQUMvRCx3QkFBd0I7QUFDeEIsaUVBQWlFO0FBQ2pFLDREQUE0RDtBQUM1RCxvQkFBb0I7QUFDcEIsMERBQTBEO0FBQzFELFVBQVU7QUFFVixTQUFTO0FBRVQsYUFBYTtBQUNiLFlBQVk7QUFDWixtQ0FBbUM7QUFDbkMsdUNBQXVDO0FBQ3ZDLG9CQUFvQjtBQUNwQiwwQkFBMEI7QUFDMUIsb0NBQW9DO0FBQ3BDLDJEQUEyRDtBQUMzRCxxQkFBcUI7QUFDckIseUNBQXlDO0FBQ3pDLGFBQWE7QUFDYix5REFBeUQ7QUFDekQsd0RBQXdEO0FBQ3hELG9CQUFvQjtBQUNwQixnQkFBZ0I7QUFDaEIsa0NBQWtDO0FBQ2xDLGFBQWE7QUFDYixPQUFPO0FBQ1AsSUFBSTs7O0FBSTRCO0FBQ2U7QUFDRjtBQUNNO0FBQ3dDO0FBQzNGLDhEQUE4RDtBQUNLO0FBRXBELFNBQVNZOztJQUN0QixNQUFNLENBQUNDLE9BQU9DLFNBQVMsR0FBR2QsK0NBQVFBLENBQUM7SUFDbkMsTUFBTSxDQUFDZSxTQUFTQyxXQUFXLEdBQUdoQiwrQ0FBUUEsQ0FBQztJQUN2QywrQkFBK0I7SUFFL0IsTUFBTWlCLGFBQWE7UUFDakJDLFFBQVFDLEdBQUcsQ0FBQyxpQkFBaUI7WUFBRU47WUFBT0U7UUFBUTtRQUM5Q0ssTUFBTTtZQUNKUCxPQUFPO1lBQ1BRLGFBQWE7UUFDZjtJQUNGO0lBRUEscUJBQ0UsOERBQUNDO1FBQUlDLFdBQVU7a0JBQ2IsNEVBQUNuQixxREFBSUE7WUFBQ21CLFdBQVU7OzhCQUNkLDhEQUFDaEIsMkRBQVVBO29CQUFDZ0IsV0FBVTs4QkFDcEIsNEVBQUNmLDBEQUFTQTt3QkFBQ2UsV0FBVTs7MENBQ25CLDhEQUFDYiw4R0FBWUE7Z0NBQUNhLFdBQVU7Ozs7Ozs0QkFBUzs7Ozs7Ozs7Ozs7OzhCQUlyQyw4REFBQ2xCLDREQUFXQTtvQkFBQ2tCLFdBQVU7O3NDQUNyQiw4REFBQ0Q7OzhDQUNDLDhEQUFDRTtvQ0FBTUMsU0FBUTtvQ0FBUUYsV0FBVTs7c0RBQy9CLDhEQUFDZCw4R0FBWUE7NENBQUNjLFdBQVU7Ozs7Ozt3Q0FBOEI7Ozs7Ozs7OENBR3hELDhEQUFDckIsdURBQUtBO29DQUNKd0IsSUFBRztvQ0FDSEMsYUFBWTtvQ0FDWkMsT0FBT2Y7b0NBQ1BnQixVQUFVLENBQUNDLElBQU1oQixTQUFTZ0IsRUFBRUMsTUFBTSxDQUFDSCxLQUFLO29DQUN4Q0wsV0FBVTs7Ozs7Ozs7Ozs7O3NDQUdkLDhEQUFDRDs7OENBQ0MsOERBQUNFO29DQUFNQyxTQUFRO29DQUFVRixXQUFVOzhDQUErQzs7Ozs7OzhDQUdsRiw4REFBQ3BCLDZEQUFRQTtvQ0FDUHVCLElBQUc7b0NBQ0hDLGFBQVk7b0NBQ1pDLE9BQU9iO29DQUNQYyxVQUFVLENBQUNDLElBQU1kLFdBQVdjLEVBQUVDLE1BQU0sQ0FBQ0gsS0FBSztvQ0FDMUNMLFdBQVU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs4QkFJaEIsOERBQUNqQiwyREFBVUE7b0JBQUNpQixXQUFVOzhCQUNwQiw0RUFBQ3RCLHlEQUFNQTt3QkFBQytCLFNBQVNmO3dCQUFZTSxXQUFVOzswQ0FDckMsOERBQUNaLDhHQUFRQTtnQ0FBQ1ksV0FBVTs7Ozs7OzRCQUFpQjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFPakQ7R0ExRHdCWDtLQUFBQSIsInNvdXJjZXMiOlsiL1VzZXJzL2JyYW5kb25wYXVsL0NTL1BlcnNvbmFsUHJvamVjdHMvV2ViSm91cm5hbC9qb3VybmFsZnJvbnRlbmQvYXBwL2pvdXJuYWwvd3JpdGUvcGFnZS5qc3giXSwic291cmNlc0NvbnRlbnQiOlsiLy8gJ3VzZSBjbGllbnQnO1xuXG4vLyBpbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuLy8gaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiO1xuXG4vLyBleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBXcml0ZUpvdXJuYWwoKSB7XG4gICAgXG4vLyAgICAgY29uc3QgW2VudHJ5LCBzZXRFbnRyeV0gPSB1c2VTdGF0ZSgnJyk7XG4vLyAgICAgY29uc3QgW2lzU3VibWl0dGluZywgc2V0SXNTdWJtaXR0aW5nXSA9IHVzZVN0YXRlKGZhbHNlKTtcbi8vICAgICBjb25zdCBbZXJyb3IsIHNldEVycm9yXSA9IHVzZVN0YXRlKG51bGwpO1xuXG4vLyAgICAgY29uc3QgaGFuZGxlQ2hhbmdlID0gKGUpID0+IHtcbi8vICAgICAgIHNldEVudHJ5KGUudGFyZ2V0LnZhbHVlKTtcbi8vICAgICB9O1xuICBcbi8vICAgICBjb25zdCBoYW5kbGVTdWJtaXQgPSBhc3luYyAoZSkgPT4ge1xuLy8gICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuLy8gICAgICAgaWYgKGVudHJ5LnRyaW0oKSA9PT0gJycpIHtcbi8vICAgICAgICAgYWxlcnQoJ1BsZWFzZSBlbnRlciBhIGpvdXJuYWwgZW50cnkuJyk7XG4vLyAgICAgICAgIHJldHVybjtcbi8vICAgICAgIH1cblxuLy8gICAgICAgc2V0SXNTdWJtaXR0aW5nKHRydWUpOyAvLyBEaXNhYmxlIGJ1dHRvbiB0byBzaG93IGxvYWRpbmcgc3RhdGVcblxuLy8gICAgICAgdHJ5IHtcbi8vICAgICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBheGlvcy5wb3N0KCdodHRwOi8vbG9jYWxob3N0OjgwMDAvd3JpdGUtam91cm5hbCcsIHtcbi8vICAgICAgICAgICBlbnRyeTogZW50cnksXG4vLyAgICAgICAgIH0pO1xuLy8gICAgICAgICBjb25zb2xlLmxvZygnSm91cm5hbCBlbnRyeSBzdWJtaXR0ZWQ6JywgcmVzcG9uc2UuZGF0YSk7XG4vLyAgICAgICAgIHNldEVudHJ5KCcnKTsgLy8gQ2xlYXIgdGhlIHRleHRhcmVhIGFmdGVyIHN1Ym1pdHRpbmdcbi8vICAgICAgIH0gY2F0Y2ggKGVycikge1xuLy8gICAgICAgICBjb25zb2xlLmVycm9yKCdFcnJvciBzdWJtaXR0aW5nIGpvdXJuYWwgZW50cnk6JywgZXJyKTtcbi8vICAgICAgICAgc2V0RXJyb3IoJ0ZhaWxlZCB0byBzdWJtaXQgeW91ciBqb3VybmFsIGVudHJ5LicpO1xuLy8gICAgICAgfSBmaW5hbGx5IHtcbi8vICAgICAgICAgc2V0SXNTdWJtaXR0aW5nKGZhbHNlKTsgLy8gUmUtZW5hYmxlIHRoZSBidXR0b25cbi8vICAgICAgIH1cblxuLy8gICAgIH07XG4gIFxuLy8gICByZXR1cm4gKFxuLy8gICAgIDxkaXY+XG4vLyAgICAgICA8aDI+TmV3IEpvdXJuYWwgRW50cnk8L2gyPlxuLy8gICAgICAgPGZvcm0gb25TdWJtaXQ9e2hhbmRsZVN1Ym1pdH0+XG4vLyAgICAgICAgIDx0ZXh0YXJlYVxuLy8gICAgICAgICAgIHZhbHVlPXtlbnRyeX1cbi8vICAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlfVxuLy8gICAgICAgICAgIHBsYWNlaG9sZGVyPVwiV3JpdGUgeW91ciBqb3VybmFsIGVudHJ5IGhlcmUuLi5cIlxuLy8gICAgICAgICAgIHJvd3M9XCI2XCJcbi8vICAgICAgICAgICBjbGFzc05hbWU9XCJqb3VybmFsLXRleHRhcmVhXCJcbi8vICAgICAgICAgLz5cbi8vICAgICAgICAgPGJ1dHRvbiB0eXBlPVwic3VibWl0XCIgZGlzYWJsZWQ9e2lzU3VibWl0dGluZ30+XG4vLyAgICAgICAgICAge2lzU3VibWl0dGluZyA/ICdTdWJtaXR0aW5nLi4uJyA6ICdTdWJtaXQnfVxuLy8gICAgICAgICA8L2J1dHRvbj5cbi8vICAgICAgIDwvZm9ybT5cbi8vICAgICAgIHtlcnJvciAmJiA8cD57ZXJyb3J9PC9wPn1cbi8vICAgICA8L2Rpdj5cbi8vICAgKTtcbi8vIH1cblxuJ3VzZSBjbGllbnQnXG5cbmltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgeyBCdXR0b24gfSBmcm9tIFwiQC9jb21wb25lbnRzL3VpL2J1dHRvblwiXG5pbXBvcnQgeyBJbnB1dCB9IGZyb20gXCJAL2NvbXBvbmVudHMvdWkvaW5wdXRcIlxuaW1wb3J0IHsgVGV4dGFyZWEgfSBmcm9tIFwiQC9jb21wb25lbnRzL3VpL3RleHRhcmVhXCJcbmltcG9ydCB7IENhcmQsIENhcmRDb250ZW50LCBDYXJkRm9vdGVyLCBDYXJkSGVhZGVyLCBDYXJkVGl0bGUgfSBmcm9tIFwiQC9jb21wb25lbnRzL3VpL2NhcmRcIlxuLy8gaW1wb3J0IHsgdG9hc3QsIHVzZVRvYXN0IH0gZnJvbSBcIkAvY29tcG9uZW50cy91aS91c2UtdG9hc3RcIlxuaW1wb3J0IHsgQ2FsZW5kYXJJY29uLCBCb29rT3Blbkljb24sIFNhdmVJY29uIH0gZnJvbSAnbHVjaWRlLXJlYWN0J1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBKb3VybmFsRW50cnlFZGl0b3IoKSB7XG4gIGNvbnN0IFt0aXRsZSwgc2V0VGl0bGVdID0gdXNlU3RhdGUoJycpXG4gIGNvbnN0IFtjb250ZW50LCBzZXRDb250ZW50XSA9IHVzZVN0YXRlKCcnKVxuICAvLyBjb25zdCB7IHRvYXN0IH0gPSB1c2VUb2FzdCgpXG5cbiAgY29uc3QgaGFuZGxlU2F2ZSA9ICgpID0+IHtcbiAgICBjb25zb2xlLmxvZygnU2F2aW5nIGVudHJ5OicsIHsgdGl0bGUsIGNvbnRlbnQgfSlcbiAgICB0b2FzdCh7XG4gICAgICB0aXRsZTogXCJFbnRyeSBTYXZlZFwiLFxuICAgICAgZGVzY3JpcHRpb246IFwiWW91ciBqb3VybmFsIGVudHJ5IGhhcyBiZWVuIHNhdmVkIHN1Y2Nlc3NmdWxseS5cIixcbiAgICB9KVxuICB9XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cIm1pbi1oLXNjcmVlbiBiZy1ncmFkaWVudC10by1iIGZyb20tZ3JheS01MCB0by1ncmF5LTEwMCBmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlciBwLTRcIj5cbiAgICAgIDxDYXJkIGNsYXNzTmFtZT1cInctZnVsbCBtYXgtdy0yeGwgc2hhZG93LWxnXCI+XG4gICAgICAgIDxDYXJkSGVhZGVyIGNsYXNzTmFtZT1cImJnLXByaW1hcnkvNSBib3JkZXItYiBib3JkZXItcHJpbWFyeS8xMFwiPlxuICAgICAgICAgIDxDYXJkVGl0bGUgY2xhc3NOYW1lPVwidGV4dC0yeGwgZm9udC1ib2xkIHRleHQtY2VudGVyIHRleHQtcHJpbWFyeSBmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlclwiPlxuICAgICAgICAgICAgPEJvb2tPcGVuSWNvbiBjbGFzc05hbWU9XCJtci0yXCIgLz5cbiAgICAgICAgICAgIE15IEpvdXJuYWxcbiAgICAgICAgICA8L0NhcmRUaXRsZT5cbiAgICAgICAgPC9DYXJkSGVhZGVyPlxuICAgICAgICA8Q2FyZENvbnRlbnQgY2xhc3NOYW1lPVwic3BhY2UteS00IHAtNlwiPlxuICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cInRpdGxlXCIgY2xhc3NOYW1lPVwiYmxvY2sgdGV4dC1zbSBmb250LW1lZGl1bSB0ZXh0LWdyYXktNzAwIG1iLTEgZmxleCBpdGVtcy1jZW50ZXJcIj5cbiAgICAgICAgICAgICAgPENhbGVuZGFySWNvbiBjbGFzc05hbWU9XCJtci0yIGgtNCB3LTQgdGV4dC1wcmltYXJ5XCIgLz5cbiAgICAgICAgICAgICAgVGl0bGVcbiAgICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICAgICA8SW5wdXRcbiAgICAgICAgICAgICAgaWQ9XCJ0aXRsZVwiXG4gICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiRW50ZXIgeW91ciBlbnRyeSB0aXRsZVwiXG4gICAgICAgICAgICAgIHZhbHVlPXt0aXRsZX1cbiAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBzZXRUaXRsZShlLnRhcmdldC52YWx1ZSl9XG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cInctZnVsbCBib3JkZXItcHJpbWFyeS8yMCBmb2N1czpib3JkZXItcHJpbWFyeSBmb2N1czpyaW5nLXByaW1hcnlcIlxuICAgICAgICAgICAgLz5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJjb250ZW50XCIgY2xhc3NOYW1lPVwiYmxvY2sgdGV4dC1zbSBmb250LW1lZGl1bSB0ZXh0LWdyYXktNzAwIG1iLTFcIj5cbiAgICAgICAgICAgICAgSm91cm5hbCBFbnRyeVxuICAgICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgICAgIDxUZXh0YXJlYVxuICAgICAgICAgICAgICBpZD1cImNvbnRlbnRcIlxuICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIldyaXRlIHlvdXIgdGhvdWdodHMgaGVyZS4uLlwiXG4gICAgICAgICAgICAgIHZhbHVlPXtjb250ZW50fVxuICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHNldENvbnRlbnQoZS50YXJnZXQudmFsdWUpfVxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ3LWZ1bGwgbWluLWgtWzIwMHB4XSBib3JkZXItcHJpbWFyeS8yMCBmb2N1czpib3JkZXItcHJpbWFyeSBmb2N1czpyaW5nLXByaW1hcnlcIlxuICAgICAgICAgICAgLz5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9DYXJkQ29udGVudD5cbiAgICAgICAgPENhcmRGb290ZXIgY2xhc3NOYW1lPVwiYmctcHJpbWFyeS81IGJvcmRlci10IGJvcmRlci1wcmltYXJ5LzEwXCI+XG4gICAgICAgICAgPEJ1dHRvbiBvbkNsaWNrPXtoYW5kbGVTYXZlfSBjbGFzc05hbWU9XCJ3LWZ1bGwgYmctcHJpbWFyeSBob3ZlcjpiZy1wcmltYXJ5LzkwIHRleHQtcHJpbWFyeS1mb3JlZ3JvdW5kXCI+XG4gICAgICAgICAgICA8U2F2ZUljb24gY2xhc3NOYW1lPVwibXItMiBoLTQgdy00XCIgLz5cbiAgICAgICAgICAgIFNhdmUgRW50cnlcbiAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgPC9DYXJkRm9vdGVyPlxuICAgICAgPC9DYXJkPlxuICAgIDwvZGl2PlxuICApXG59Il0sIm5hbWVzIjpbInVzZVN0YXRlIiwiQnV0dG9uIiwiSW5wdXQiLCJUZXh0YXJlYSIsIkNhcmQiLCJDYXJkQ29udGVudCIsIkNhcmRGb290ZXIiLCJDYXJkSGVhZGVyIiwiQ2FyZFRpdGxlIiwiQ2FsZW5kYXJJY29uIiwiQm9va09wZW5JY29uIiwiU2F2ZUljb24iLCJKb3VybmFsRW50cnlFZGl0b3IiLCJ0aXRsZSIsInNldFRpdGxlIiwiY29udGVudCIsInNldENvbnRlbnQiLCJoYW5kbGVTYXZlIiwiY29uc29sZSIsImxvZyIsInRvYXN0IiwiZGVzY3JpcHRpb24iLCJkaXYiLCJjbGFzc05hbWUiLCJsYWJlbCIsImh0bWxGb3IiLCJpZCIsInBsYWNlaG9sZGVyIiwidmFsdWUiLCJvbkNoYW5nZSIsImUiLCJ0YXJnZXQiLCJvbkNsaWNrIl0sImlnbm9yZUxpc3QiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/journal/write/page.jsx\n"));

/***/ })

});