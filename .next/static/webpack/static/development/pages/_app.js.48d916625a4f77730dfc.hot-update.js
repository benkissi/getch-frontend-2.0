webpackHotUpdate("static/development/pages/_app.js",{

/***/ "./redux/user/user-reducer.js":
/*!************************************!*\
  !*** ./redux/user/user-reducer.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _user_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./user-types */ "./redux/user/user-types.js");


function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }


var INITIAL_STATE = {
  currentUser: null,
  fbToken: {
    token: null,
    expires: null
  },
  signedIn: false,
  logout: false,
  error: null
};

var userReducer = function userReducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : INITIAL_STATE;
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case _user_types__WEBPACK_IMPORTED_MODULE_1__["default"].SET_CURRENT_USER:
      return _objectSpread({}, state, {
        currentUser: action.payload,
        error: null,
        signedIn: true,
        logout: false
      });

    case _user_types__WEBPACK_IMPORTED_MODULE_1__["default"].SIGN_IN_SUCCESS:
      return _objectSpread({}, state, {
        signedIn: action.payload,
        error: null
      });

    case _user_types__WEBPACK_IMPORTED_MODULE_1__["default"].LOADING:
      return _objectSpread({}, state, {
        loading: action.payload,
        error: null
      });

    case _user_types__WEBPACK_IMPORTED_MODULE_1__["default"].AUTH_FB_SUCCESS:
      return _objectSpread({}, state, {
        fbToken: _objectSpread({}, action.payload),
        currentUser: _objectSpread({}, state.currentUser, {
          name: action.payload.name
        }),
        error: null
      });

    case _user_types__WEBPACK_IMPORTED_MODULE_1__["default"].LOG_OUT_SUCCESS:
      return _objectSpread({}, state, {
        currentUser: null,
        fbToken: {
          token: null,
          expires: null
        },
        signedIn: false,
        logout: true,
        error: null
      });

    case _user_types__WEBPACK_IMPORTED_MODULE_1__["default"].PAYMENT_SUCCESSFUL:
      return _objectSpread({}, state, {
        currentUser: _objectSpread({}, state.currentUser, {
          plan: action.payload
        }),
        error: null
      });

    case _user_types__WEBPACK_IMPORTED_MODULE_1__["default"].SIGN_IN_FAILURE:
    case _user_types__WEBPACK_IMPORTED_MODULE_1__["default"].AUTH_FB_FAILURE:
    case _user_types__WEBPACK_IMPORTED_MODULE_1__["default"].SIGN_UP_FAILURE:
    case _user_types__WEBPACK_IMPORTED_MODULE_1__["default"].LOG_OUT_FAILURE:
    case _user_types__WEBPACK_IMPORTED_MODULE_1__["default"].PAYMENT_FAILED:
      return _objectSpread({}, state, {
        error: action.payload,
        loading: false
      });

    default:
      return state;
  }
};

/* harmony default export */ __webpack_exports__["default"] = (userReducer);

/***/ })

})
//# sourceMappingURL=_app.js.48d916625a4f77730dfc.hot-update.js.map