webpackHotUpdate_N_E("pages/new-meetup",{

/***/ "./pages/new-meetup/index.js":
/*!***********************************!*\
  !*** ./pages/new-meetup/index.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _Users_digitalhouse_Documents_src_Javascript_courses_react_complete_guide_udemy_23_nextjs_06_onwards_to_a_bigger_project_starting_project_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/regenerator */ \"./node_modules/@babel/runtime/regenerator/index.js\");\n/* harmony import */ var _Users_digitalhouse_Documents_src_Javascript_courses_react_complete_guide_udemy_23_nextjs_06_onwards_to_a_bigger_project_starting_project_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Users_digitalhouse_Documents_src_Javascript_courses_react_complete_guide_udemy_23_nextjs_06_onwards_to_a_bigger_project_starting_project_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _Users_digitalhouse_Documents_src_Javascript_courses_react_complete_guide_udemy_23_nextjs_06_onwards_to_a_bigger_project_starting_project_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ \"./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js\");\n/* harmony import */ var _components_meetups_NewMeetupForm__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/meetups/NewMeetupForm */ \"./components/meetups/NewMeetupForm.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_4__);\n\n\n\n\nvar _jsxFileName = \"/Users/digitalhouse/Documents/src/Javascript/courses/react-complete-guide-udemy/23-nextjs/06-onwards-to-a-bigger-project-starting-project/pages/new-meetup/index.js\",\n    _s = $RefreshSig$();\n\n\n\n\nfunction NewMeetupPage() {\n  _s();\n\n  var router = Object(next_router__WEBPACK_IMPORTED_MODULE_4__[\"useRouter\"])();\n\n  function addNewMeetupHandler(_x) {\n    return _addNewMeetupHandler.apply(this, arguments);\n  }\n\n  function _addNewMeetupHandler() {\n    _addNewMeetupHandler = Object(_Users_digitalhouse_Documents_src_Javascript_courses_react_complete_guide_udemy_23_nextjs_06_onwards_to_a_bigger_project_starting_project_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__[\"default\"])( /*#__PURE__*/_Users_digitalhouse_Documents_src_Javascript_courses_react_complete_guide_udemy_23_nextjs_06_onwards_to_a_bigger_project_starting_project_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(enteredMeetupData) {\n      var response, data;\n      return _Users_digitalhouse_Documents_src_Javascript_courses_react_complete_guide_udemy_23_nextjs_06_onwards_to_a_bigger_project_starting_project_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {\n        while (1) {\n          switch (_context.prev = _context.next) {\n            case 0:\n              console.log(\"entered meetup data\", enteredMeetupData);\n              _context.next = 3;\n              return fetch(\"/api/new-meetup\", {\n                method: \"POST\",\n                data: JSON.stringify(enteredMeetupData),\n                headers: {\n                  \"Content-Type\": \"application/json\"\n                }\n              });\n\n            case 3:\n              response = _context.sent;\n              _context.next = 6;\n              return response.json();\n\n            case 6:\n              data = _context.sent;\n              console.log(data); // router.push(\"/\");\n\n            case 8:\n            case \"end\":\n              return _context.stop();\n          }\n        }\n      }, _callee);\n    }));\n    return _addNewMeetupHandler.apply(this, arguments);\n  }\n\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(_components_meetups_NewMeetupForm__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n    onAddMeetup: addNewMeetupHandler\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 19,\n    columnNumber: 10\n  }, this);\n}\n\n_s(NewMeetupPage, \"fN7XvhJ+p5oE6+Xlo0NJmXpxjC8=\", false, function () {\n  return [next_router__WEBPACK_IMPORTED_MODULE_4__[\"useRouter\"]];\n});\n\n_c = NewMeetupPage;\n/* harmony default export */ __webpack_exports__[\"default\"] = (NewMeetupPage);\n\nvar _c;\n\n$RefreshReg$(_c, \"NewMeetupPage\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/next/dist/compiled/webpack/harmony-module.js */ \"./node_modules/next/dist/compiled/webpack/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvbmV3LW1lZXR1cC9pbmRleC5qcz84NDNhIl0sIm5hbWVzIjpbIk5ld01lZXR1cFBhZ2UiLCJyb3V0ZXIiLCJ1c2VSb3V0ZXIiLCJhZGROZXdNZWV0dXBIYW5kbGVyIiwiZW50ZXJlZE1lZXR1cERhdGEiLCJjb25zb2xlIiwibG9nIiwiZmV0Y2giLCJtZXRob2QiLCJkYXRhIiwiSlNPTiIsInN0cmluZ2lmeSIsImhlYWRlcnMiLCJyZXNwb25zZSIsImpzb24iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBOztBQUVBLFNBQVNBLGFBQVQsR0FBeUI7QUFBQTs7QUFDdkIsTUFBTUMsTUFBTSxHQUFHQyw2REFBUyxFQUF4Qjs7QUFEdUIsV0FFUkMsbUJBRlE7QUFBQTtBQUFBOztBQUFBO0FBQUEsd2ZBRXZCLGlCQUFtQ0MsaUJBQW5DO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNFQyxxQkFBTyxDQUFDQyxHQUFSLENBQVkscUJBQVosRUFBbUNGLGlCQUFuQztBQURGO0FBQUEscUJBRXlCRyxLQUFLLENBQUMsaUJBQUQsRUFBb0I7QUFDOUNDLHNCQUFNLEVBQUUsTUFEc0M7QUFFOUNDLG9CQUFJLEVBQUVDLElBQUksQ0FBQ0MsU0FBTCxDQUFlUCxpQkFBZixDQUZ3QztBQUc5Q1EsdUJBQU8sRUFBRTtBQUFFLGtDQUFnQjtBQUFsQjtBQUhxQyxlQUFwQixDQUY5Qjs7QUFBQTtBQUVRQyxzQkFGUjtBQUFBO0FBQUEscUJBUXFCQSxRQUFRLENBQUNDLElBQVQsRUFSckI7O0FBQUE7QUFRUUwsa0JBUlI7QUFTRUoscUJBQU8sQ0FBQ0MsR0FBUixDQUFZRyxJQUFaLEVBVEYsQ0FVRTs7QUFWRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUZ1QjtBQUFBO0FBQUE7O0FBZXZCLHNCQUFPLHFFQUFDLHlFQUFEO0FBQWUsZUFBVyxFQUFFTjtBQUE1QjtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBQVA7QUFDRDs7R0FoQlFILGE7VUFDUUUscUQ7OztLQURSRixhO0FBa0JNQSw0RUFBZiIsImZpbGUiOiIuL3BhZ2VzL25ldy1tZWV0dXAvaW5kZXguanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTmV3TWVldHVwRm9ybSBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9tZWV0dXBzL05ld01lZXR1cEZvcm1cIjtcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gXCJuZXh0L3JvdXRlclwiO1xuXG5mdW5jdGlvbiBOZXdNZWV0dXBQYWdlKCkge1xuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcbiAgYXN5bmMgZnVuY3Rpb24gYWRkTmV3TWVldHVwSGFuZGxlcihlbnRlcmVkTWVldHVwRGF0YSkge1xuICAgIGNvbnNvbGUubG9nKFwiZW50ZXJlZCBtZWV0dXAgZGF0YVwiLCBlbnRlcmVkTWVldHVwRGF0YSk7XG4gICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChcIi9hcGkvbmV3LW1lZXR1cFwiLCB7XG4gICAgICBtZXRob2Q6IFwiUE9TVFwiLFxuICAgICAgZGF0YTogSlNPTi5zdHJpbmdpZnkoZW50ZXJlZE1lZXR1cERhdGEpLFxuICAgICAgaGVhZGVyczogeyBcIkNvbnRlbnQtVHlwZVwiOiBcImFwcGxpY2F0aW9uL2pzb25cIiB9LFxuICAgIH0pO1xuXG4gICAgY29uc3QgZGF0YSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcbiAgICBjb25zb2xlLmxvZyhkYXRhKTtcbiAgICAvLyByb3V0ZXIucHVzaChcIi9cIik7XG4gIH1cblxuICByZXR1cm4gPE5ld01lZXR1cEZvcm0gb25BZGRNZWV0dXA9e2FkZE5ld01lZXR1cEhhbmRsZXJ9IC8+O1xufVxuXG5leHBvcnQgZGVmYXVsdCBOZXdNZWV0dXBQYWdlO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/new-meetup/index.js\n");

/***/ })

})