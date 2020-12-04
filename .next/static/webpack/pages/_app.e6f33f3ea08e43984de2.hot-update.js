webpackHotUpdate_N_E("pages/_app",{

/***/ "./redux/store.js":
/*!************************!*\
  !*** ./redux/store.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux */ "./node_modules/redux/es/redux.js");
/* harmony import */ var redux_logger__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! redux-logger */ "./node_modules/redux-logger/dist/redux-logger.js");
/* harmony import */ var redux_logger__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(redux_logger__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var redux_saga__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! redux-saga */ "./node_modules/redux-saga/dist/redux-saga-core-npm-proxy.esm.js");
/* harmony import */ var redux_persist__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! redux-persist */ "./node_modules/redux-persist/es/index.js");
/* harmony import */ var _root_reducer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./root-reducer */ "./redux/root-reducer.js");
/* harmony import */ var _root_saga__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./root-saga */ "./redux/root-saga.js");






var sagaMiddleware = Object(redux_saga__WEBPACK_IMPORTED_MODULE_2__["default"])();
var middlewares = [sagaMiddleware];

if (true) {
  middlewares.push(redux_logger__WEBPACK_IMPORTED_MODULE_1___default.a);
}

var store = Object(redux__WEBPACK_IMPORTED_MODULE_0__["createStore"])(_root_reducer__WEBPACK_IMPORTED_MODULE_4__["default"], redux__WEBPACK_IMPORTED_MODULE_0__["applyMiddleware"].apply(void 0, middlewares));
sagaMiddleware.run(_root_saga__WEBPACK_IMPORTED_MODULE_5__["default"]);
Object(redux_persist__WEBPACK_IMPORTED_MODULE_3__["persistStore"])(store);

var makeStore = function makeStore(initialState) {
  return store;
};

/* harmony default export */ __webpack_exports__["default"] = (makeStore);

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcmVkdXgvc3RvcmUuanMiXSwibmFtZXMiOlsic2FnYU1pZGRsZXdhcmUiLCJjcmVhdGVTYWdhTWlkZGxlV2FyZSIsIm1pZGRsZXdhcmVzIiwicHVzaCIsImxvZ2dlciIsInN0b3JlIiwiY3JlYXRlU3RvcmUiLCJyb290UmVkdWNlciIsImFwcGx5TWlkZGxld2FyZSIsInJ1biIsInJvb3RTYWdhIiwicGVyc2lzdFN0b3JlIiwibWFrZVN0b3JlIiwiaW5pdGlhbFN0YXRlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUVBLElBQU1BLGNBQWMsR0FBR0MsMERBQW9CLEVBQTNDO0FBRUEsSUFBTUMsV0FBVyxHQUFHLENBQUNGLGNBQUQsQ0FBcEI7O0FBQ0UsVUFBNEM7QUFDMUNFLGFBQVcsQ0FBQ0MsSUFBWixDQUFpQkMsbURBQWpCO0FBQ0Q7O0FBRUQsSUFBTUMsS0FBSyxHQUFHQyx5REFBVyxDQUFDQyxxREFBRCxFQUFjQyxxREFBZSxNQUFmLFNBQW1CTixXQUFuQixDQUFkLENBQXpCO0FBQ0FGLGNBQWMsQ0FBQ1MsR0FBZixDQUFtQkMsa0RBQW5CO0FBRUFDLGtFQUFZLENBQUNOLEtBQUQsQ0FBWjs7QUFFRixJQUFNTyxTQUFTLEdBQUcsU0FBWkEsU0FBWSxDQUFDQyxZQUFELEVBQWtCO0FBQ2xDLFNBQU9SLEtBQVA7QUFDRCxDQUZEOztBQUllTyx3RUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9fYXBwLmU2ZjMzZjNlYTA4ZTQzOTg0ZGUyLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBjcmVhdGVTdG9yZSwgYXBwbHlNaWRkbGV3YXJlIH0gZnJvbSBcInJlZHV4XCI7XG5pbXBvcnQgbG9nZ2VyIGZyb20gXCJyZWR1eC1sb2dnZXJcIjtcbmltcG9ydCBjcmVhdGVTYWdhTWlkZGxlV2FyZSBmcm9tIFwicmVkdXgtc2FnYVwiO1xuXG5pbXBvcnQgeyBwZXJzaXN0U3RvcmUgfSBmcm9tIFwicmVkdXgtcGVyc2lzdFwiO1xuXG5pbXBvcnQgcm9vdFJlZHVjZXIgZnJvbSBcIi4vcm9vdC1yZWR1Y2VyXCI7XG5pbXBvcnQgcm9vdFNhZ2EgZnJvbSBcIi4vcm9vdC1zYWdhXCI7XG5cbmNvbnN0IHNhZ2FNaWRkbGV3YXJlID0gY3JlYXRlU2FnYU1pZGRsZVdhcmUoKTtcblxuY29uc3QgbWlkZGxld2FyZXMgPSBbc2FnYU1pZGRsZXdhcmVdO1xuICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09IFwiZGV2ZWxvcG1lbnRcIikge1xuICAgIG1pZGRsZXdhcmVzLnB1c2gobG9nZ2VyKTtcbiAgfVxuXG4gIGNvbnN0IHN0b3JlID0gY3JlYXRlU3RvcmUocm9vdFJlZHVjZXIsIGFwcGx5TWlkZGxld2FyZSguLi5taWRkbGV3YXJlcykpO1xuICBzYWdhTWlkZGxld2FyZS5ydW4ocm9vdFNhZ2EpO1xuXG4gIHBlcnNpc3RTdG9yZShzdG9yZSk7XG5cbmNvbnN0IG1ha2VTdG9yZSA9IChpbml0aWFsU3RhdGUpID0+IHtcbiAgcmV0dXJuIHN0b3JlXG59XG5cbmV4cG9ydCBkZWZhdWx0IG1ha2VTdG9yZVxuXG4iXSwic291cmNlUm9vdCI6IiJ9