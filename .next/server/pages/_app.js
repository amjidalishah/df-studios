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
exports.id = "pages/_app";
exports.ids = ["pages/_app"];
exports.modules = {

/***/ "./src/pages/_app.tsx":
/*!****************************!*\
  !*** ./src/pages/_app.tsx ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ MyApp)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/styles/globals.css */ \"./src/styles/globals.css\");\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_globals_css__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @apollo/client */ \"@apollo/client\");\n/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_apollo_client__WEBPACK_IMPORTED_MODULE_3__);\n\n\n\n\n\nfunction MyApp({ Component , pageProps: { session , ...pageProps }  }) {\n    const httpLink = new _apollo_client__WEBPACK_IMPORTED_MODULE_3__.HttpLink({\n        uri: \"http://localhost:1337/graphql\"\n    });\n    const c = new _apollo_client__WEBPACK_IMPORTED_MODULE_3__.ApolloClient({\n        link: httpLink,\n        cache: new _apollo_client__WEBPACK_IMPORTED_MODULE_3__.InMemoryCache().restore({})\n    });\n    const [client, setClient] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(c);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_apollo_client__WEBPACK_IMPORTED_MODULE_3__.ApolloProvider, {\n        client: client,\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, {\n            ...pageProps\n        }, void 0, false, {\n            fileName: \"/Users/lucasraza/Desktop/df-studios/src/pages/_app.tsx\",\n            lineNumber: 22,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"/Users/lucasraza/Desktop/df-studios/src/pages/_app.tsx\",\n        lineNumber: 21,\n        columnNumber: 5\n    }, this);\n}\nconst withLogging = (getServerSideProps)=>{\n    return async (context)=>{\n        console.log(\"Request:\", context.req);\n        return await getServerSideProps(context);\n    };\n}; // export const getServerSideProps = withIronSession(async ({ req, res }) => {\n //   const user = req.session.get('user')\n //   return { props: { user } }\n // })\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvX2FwcC50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUE2QjtBQUNNO0FBRVE7QUFDNEM7QUFFeEUsU0FBU0ssTUFBTSxFQUM1QkMsVUFBUyxFQUNUQyxXQUFXLEVBQUVDLFFBQU8sRUFBRSxHQUFHRCxXQUFXLEdBQ0ksRUFBRTtJQUMxQyxNQUFNRSxXQUFXLElBQUlMLG9EQUFRQSxDQUFDO1FBQzVCTSxLQUFLQywrQkFBMkI7SUFDbEM7SUFDQSxNQUFNRyxJQUFJLElBQUlaLHdEQUFZQSxDQUFDO1FBQ3pCYSxNQUFNTjtRQUNOTyxPQUFPLElBQUliLHlEQUFhQSxHQUFHYyxPQUFPLENBQUMsQ0FBQztJQUN0QztJQUNBLE1BQU0sQ0FBQ0MsUUFBUUMsVUFBVSxHQUFHbkIsK0NBQVFBLENBQTJCYztJQUUvRCxxQkFDRSw4REFBQ2IsMERBQWNBO1FBQUNpQixRQUFRQTtrQkFDdEIsNEVBQUNaO1lBQVcsR0FBR0MsU0FBUzs7Ozs7Ozs7Ozs7QUFHOUIsQ0FBQztBQUNELE1BQU1hLGNBQWMsQ0FBQ0MscUJBQXVCO0lBQzFDLE9BQU8sT0FBT0MsVUFBWTtRQUN4QkMsUUFBUUMsR0FBRyxDQUFDLFlBQVlGLFFBQVFHLEdBQUc7UUFDbkMsT0FBTyxNQUFNSixtQkFBbUJDO0lBQ2xDO0FBQ0YsR0FHQSw4RUFBOEU7Q0FDOUUseUNBQXlDO0NBQ3pDLCtCQUErQjtDQUMvQixLQUFLIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZGYtc3R1ZGlvcy8uL3NyYy9wYWdlcy9fYXBwLnRzeD9mOWQ2Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAnQC9zdHlsZXMvZ2xvYmFscy5jc3MnXG5pbXBvcnQgJ0Avc3R5bGVzL2NvbG9ycy5tb2R1bGUuY3NzJ1xuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJ1xuaW1wb3J0IHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgQXBvbGxvUHJvdmlkZXIsIEFwb2xsb0NsaWVudCwgSW5NZW1vcnlDYWNoZSwgSHR0cExpbmsgfSBmcm9tICdAYXBvbGxvL2NsaWVudCc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIE15QXBwKHtcbiAgQ29tcG9uZW50LFxuICBwYWdlUHJvcHM6IHsgc2Vzc2lvbiwgLi4ucGFnZVByb3BzIH1cbn06e0NvbXBvbmVudDphbnksIHBhZ2VQcm9wczphbnksIHVzZXI6YW55fSkge1xuICBjb25zdCBodHRwTGluayA9IG5ldyBIdHRwTGluayh7XG4gICAgdXJpOiBwcm9jZXNzLmVudi5HUkFQSFFMX0FQSV9VUkwsXG4gIH0pO1xuICBjb25zdCBjID0gbmV3IEFwb2xsb0NsaWVudCh7XG4gICAgbGluazogaHR0cExpbmssXG4gICAgY2FjaGU6IG5ldyBJbk1lbW9yeUNhY2hlKCkucmVzdG9yZSh7fSksXG4gIH0pO1xuICBjb25zdCBbY2xpZW50LCBzZXRDbGllbnRdID0gdXNlU3RhdGU8QXBvbGxvQ2xpZW50PGFueT4gfCBudWxsPihjKTtcblxuICByZXR1cm4gKFxuICAgIDxBcG9sbG9Qcm92aWRlciBjbGllbnQ9e2NsaWVudH0+XG4gICAgICA8Q29tcG9uZW50IHsuLi5wYWdlUHJvcHN9IC8+XG4gICAgPC9BcG9sbG9Qcm92aWRlcj5cbiAgKSBcbn1cbmNvbnN0IHdpdGhMb2dnaW5nID0gKGdldFNlcnZlclNpZGVQcm9wcykgPT4ge1xuICByZXR1cm4gYXN5bmMgKGNvbnRleHQpID0+IHtcbiAgICBjb25zb2xlLmxvZygnUmVxdWVzdDonLCBjb250ZXh0LnJlcSk7XG4gICAgcmV0dXJuIGF3YWl0IGdldFNlcnZlclNpZGVQcm9wcyhjb250ZXh0KTtcbiAgfTtcbn07XG5cblxuLy8gZXhwb3J0IGNvbnN0IGdldFNlcnZlclNpZGVQcm9wcyA9IHdpdGhJcm9uU2Vzc2lvbihhc3luYyAoeyByZXEsIHJlcyB9KSA9PiB7XG4vLyAgIGNvbnN0IHVzZXIgPSByZXEuc2Vzc2lvbi5nZXQoJ3VzZXInKVxuLy8gICByZXR1cm4geyBwcm9wczogeyB1c2VyIH0gfVxuLy8gfSkiXSwibmFtZXMiOlsidXNlU3RhdGUiLCJBcG9sbG9Qcm92aWRlciIsIkFwb2xsb0NsaWVudCIsIkluTWVtb3J5Q2FjaGUiLCJIdHRwTGluayIsIk15QXBwIiwiQ29tcG9uZW50IiwicGFnZVByb3BzIiwic2Vzc2lvbiIsImh0dHBMaW5rIiwidXJpIiwicHJvY2VzcyIsImVudiIsIkdSQVBIUUxfQVBJX1VSTCIsImMiLCJsaW5rIiwiY2FjaGUiLCJyZXN0b3JlIiwiY2xpZW50Iiwic2V0Q2xpZW50Iiwid2l0aExvZ2dpbmciLCJnZXRTZXJ2ZXJTaWRlUHJvcHMiLCJjb250ZXh0IiwiY29uc29sZSIsImxvZyIsInJlcSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/pages/_app.tsx\n");

/***/ }),

/***/ "./src/styles/globals.css":
/*!********************************!*\
  !*** ./src/styles/globals.css ***!
  \********************************/
/***/ (() => {



/***/ }),

/***/ "@apollo/client":
/*!*********************************!*\
  !*** external "@apollo/client" ***!
  \*********************************/
/***/ ((module) => {

"use strict";
module.exports = require("@apollo/client");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-dev-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./src/pages/_app.tsx"));
module.exports = __webpack_exports__;

})();