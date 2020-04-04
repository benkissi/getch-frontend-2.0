webpackHotUpdate("static/development/pages/_app.js",{

/***/ "./redux/user/user-sagas.js":
/*!**********************************!*\
  !*** ./redux/user/user-sagas.js ***!
  \**********************************/
/*! exports provided: setUser, signIn, signUpUser, facebookAuth, onAddingCurrentUser, onSigninStart, onSignupStart, onAuthFacebook, userSagas */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setUser", function() { return setUser; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "signIn", function() { return signIn; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "signUpUser", function() { return signUpUser; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "facebookAuth", function() { return facebookAuth; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "onAddingCurrentUser", function() { return onAddingCurrentUser; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "onSigninStart", function() { return onSigninStart; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "onSignupStart", function() { return onSignupStart; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "onAuthFacebook", function() { return onAuthFacebook; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "userSagas", function() { return userSagas; });
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/regenerator */ "./node_modules/@babel/runtime-corejs2/regenerator/index.js");
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! redux-saga/effects */ "./node_modules/redux-saga/dist/redux-saga-effects-npm-proxy.esm.js");
/* harmony import */ var _user_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./user-types */ "./redux/user/user-types.js");
/* harmony import */ var _user_actions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./user-actions */ "./redux/user/user-actions.js");
/* harmony import */ var _api_api__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../api/api */ "./api/api.js");


var _marked =
/*#__PURE__*/
_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(setUser),
    _marked2 =
/*#__PURE__*/
_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(signIn),
    _marked3 =
/*#__PURE__*/
_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(signUpUser),
    _marked4 =
/*#__PURE__*/
_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(facebookAuth),
    _marked5 =
/*#__PURE__*/
_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(onAddingCurrentUser),
    _marked6 =
/*#__PURE__*/
_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(onSigninStart),
    _marked7 =
/*#__PURE__*/
_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(onSignupStart),
    _marked8 =
/*#__PURE__*/
_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(onAuthFacebook),
    _marked9 =
/*#__PURE__*/
_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(userSagas);





function setUser(_ref) {
  var payload;
  return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function setUser$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          payload = _ref.payload;
          _context.prev = 1;
          _context.next = 4;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])(Object(_user_actions__WEBPACK_IMPORTED_MODULE_3__["isLoading"])(true));

        case 4:
          if (payload) {
            _context.next = 6;
            break;
          }

          throw new Error("No user");

        case 6:
          _context.next = 8;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])(Object(_user_actions__WEBPACK_IMPORTED_MODULE_3__["setCurrentUser"])(payload));

        case 8:
          _context.next = 10;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])(Object(_user_actions__WEBPACK_IMPORTED_MODULE_3__["siginSuccess"])(true));

        case 10:
          _context.next = 12;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])(Object(_user_actions__WEBPACK_IMPORTED_MODULE_3__["isLoading"])(false));

        case 12:
          _context.next = 20;
          break;

        case 14:
          _context.prev = 14;
          _context.t0 = _context["catch"](1);
          _context.next = 18;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])(Object(_user_actions__WEBPACK_IMPORTED_MODULE_3__["siginFailure"])(_context.t0));

        case 18:
          _context.next = 20;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])(Object(_user_actions__WEBPACK_IMPORTED_MODULE_3__["isLoading"])(false));

        case 20:
        case "end":
          return _context.stop();
      }
    }
  }, _marked, null, [[1, 14]]);
}
function signIn() {
  return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function signIn$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
        case "end":
          return _context2.stop();
      }
    }
  }, _marked2);
}
function signUpUser(_ref2) {
  var payload, res;
  return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function signUpUser$(_context3) {
    while (1) {
      switch (_context3.prev = _context3.next) {
        case 0:
          payload = _ref2.payload;
          _context3.next = 3;
          return Object(_api_api__WEBPACK_IMPORTED_MODULE_4__["signUp"])(payload.email, payload.password);

        case 3:
          res = _context3.sent;
          console.log('the payload', payload);

        case 5:
        case "end":
          return _context3.stop();
      }
    }
  }, _marked3);
}
function facebookAuth(_ref3) {
  var payload, token, id, fbId, fbToken;
  return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function facebookAuth$(_context4) {
    while (1) {
      switch (_context4.prev = _context4.next) {
        case 0:
          payload = _ref3.payload;
          _context4.next = 3;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])(Object(_user_actions__WEBPACK_IMPORTED_MODULE_3__["isLoading"])(true));

        case 3:
          _context4.prev = 3;
          token = payload.token, id = payload.id, fbId = payload.fbId;
          _context4.next = 7;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])(Object(_user_actions__WEBPACK_IMPORTED_MODULE_3__["isLoading"])(true));

        case 7:
          _context4.next = 9;
          return Object(_api_api__WEBPACK_IMPORTED_MODULE_4__["fbAuthentication"])(token, id, fbId);

        case 9:
          fbToken = _context4.sent;
          _context4.next = 12;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])(Object(_user_actions__WEBPACK_IMPORTED_MODULE_3__["facebookAuthSuccess"])(fbToken));

        case 12:
          _context4.next = 14;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])(Object(_user_actions__WEBPACK_IMPORTED_MODULE_3__["isLoading"])(false));

        case 14:
          _context4.next = 22;
          break;

        case 16:
          _context4.prev = 16;
          _context4.t0 = _context4["catch"](3);
          _context4.next = 20;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])(Object(_user_actions__WEBPACK_IMPORTED_MODULE_3__["fbAuthFailure"])(_context4.t0));

        case 20:
          _context4.next = 22;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])(Object(_user_actions__WEBPACK_IMPORTED_MODULE_3__["isLoading"])(false));

        case 22:
        case "end":
          return _context4.stop();
      }
    }
  }, _marked4, null, [[3, 16]]);
}
function onAddingCurrentUser() {
  return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function onAddingCurrentUser$(_context5) {
    while (1) {
      switch (_context5.prev = _context5.next) {
        case 0:
          _context5.next = 2;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["takeLatest"])(_user_types__WEBPACK_IMPORTED_MODULE_2__["default"].ADDING_CURRENT_USER, setUser);

        case 2:
        case "end":
          return _context5.stop();
      }
    }
  }, _marked5);
}
function onSigninStart() {
  return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function onSigninStart$(_context6) {
    while (1) {
      switch (_context6.prev = _context6.next) {
        case 0:
          _context6.next = 2;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["takeLatest"])(_user_types__WEBPACK_IMPORTED_MODULE_2__["default"].SIGN_IN_START, signIn);

        case 2:
        case "end":
          return _context6.stop();
      }
    }
  }, _marked6);
}
function onSignupStart() {
  return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function onSignupStart$(_context7) {
    while (1) {
      switch (_context7.prev = _context7.next) {
        case 0:
          _context7.next = 2;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["takeLatest"])(_user_types__WEBPACK_IMPORTED_MODULE_2__["default"].SIGN_UP_START, signUpUser);

        case 2:
        case "end":
          return _context7.stop();
      }
    }
  }, _marked7);
}
function onAuthFacebook() {
  return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function onAuthFacebook$(_context8) {
    while (1) {
      switch (_context8.prev = _context8.next) {
        case 0:
          _context8.next = 2;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["takeLatest"])(_user_types__WEBPACK_IMPORTED_MODULE_2__["default"].AUTH_FACEBOOK, facebookAuth);

        case 2:
        case "end":
          return _context8.stop();
      }
    }
  }, _marked8);
}
function userSagas() {
  return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function userSagas$(_context9) {
    while (1) {
      switch (_context9.prev = _context9.next) {
        case 0:
          _context9.next = 2;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["all"])([Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["call"])(onAuthFacebook), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["call"])(onAddingCurrentUser), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["call"])(onSigninStart), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["call"])(onSignupStart)]);

        case 2:
        case "end":
          return _context9.stop();
      }
    }
  }, _marked9);
}

/***/ })

})
//# sourceMappingURL=_app.js.eab63cebfb19a7c69f2f.hot-update.js.map