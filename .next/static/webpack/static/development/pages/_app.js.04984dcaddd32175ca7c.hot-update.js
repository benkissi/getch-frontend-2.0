webpackHotUpdate("static/development/pages/_app.js",{

/***/ "./redux/user/user-sagas.js":
/*!**********************************!*\
  !*** ./redux/user/user-sagas.js ***!
  \**********************************/
/*! exports provided: setUser, signUpUser, signInUser, facebookAuth, logout, onAddingCurrentUser, onSignupStart, onSigninStart, onAuthFacebook, onLogout, userSagas */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setUser", function() { return setUser; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "signUpUser", function() { return signUpUser; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "signInUser", function() { return signInUser; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "facebookAuth", function() { return facebookAuth; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "logout", function() { return logout; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "onAddingCurrentUser", function() { return onAddingCurrentUser; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "onSignupStart", function() { return onSignupStart; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "onSigninStart", function() { return onSigninStart; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "onAuthFacebook", function() { return onAuthFacebook; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "onLogout", function() { return onLogout; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "userSagas", function() { return userSagas; });
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! redux-saga/effects */ "./node_modules/redux-saga/dist/redux-saga-effects-npm-proxy.esm.js");
/* harmony import */ var _user_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./user-types */ "./redux/user/user-types.js");
/* harmony import */ var _user_actions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./user-actions */ "./redux/user/user-actions.js");
/* harmony import */ var _search_search_actions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../search/search-actions */ "./redux/search/search-actions.js");
/* harmony import */ var _api_api__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../api/api */ "./api/api.js");


var _marked = /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(setUser),
    _marked2 = /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(signUpUser),
    _marked3 = /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(signInUser),
    _marked4 = /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(facebookAuth),
    _marked5 = /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(logout),
    _marked6 = /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(onAddingCurrentUser),
    _marked7 = /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(onSignupStart),
    _marked8 = /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(onSigninStart),
    _marked9 = /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(onAuthFacebook),
    _marked10 = /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(onLogout),
    _marked11 = /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(userSagas);






function setUser(_ref) {
  var payload;
  return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function setUser$(_context) {
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
function signUpUser(_ref2) {
  var payload, res, userData;
  return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function signUpUser$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          payload = _ref2.payload;
          _context2.prev = 1;
          _context2.next = 4;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])(Object(_user_actions__WEBPACK_IMPORTED_MODULE_3__["isLoading"])(true));

        case 4:
          console.log("the payload", payload);
          _context2.next = 7;
          return Object(_api_api__WEBPACK_IMPORTED_MODULE_5__["signUp"])(payload.email, payload.password);

        case 7:
          res = _context2.sent;
          userData = {
            id: res._id,
            name: res.name,
            email: res.email,
            xToken: res.xToken,
            plan: res.plan
          };
          console.log("User data", userData);
          _context2.next = 12;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])(Object(_user_actions__WEBPACK_IMPORTED_MODULE_3__["setCurrentUser"])(userData));

        case 12:
          _context2.next = 14;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])(Object(_search_search_actions__WEBPACK_IMPORTED_MODULE_4__["setCount"])(res.searchCount));

        case 14:
          _context2.next = 16;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])(Object(_user_actions__WEBPACK_IMPORTED_MODULE_3__["signupSuccess"])(true));

        case 16:
          _context2.next = 18;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])(Object(_user_actions__WEBPACK_IMPORTED_MODULE_3__["isLoading"])(false));

        case 18:
          _context2.next = 24;
          break;

        case 20:
          _context2.prev = 20;
          _context2.t0 = _context2["catch"](1);
          _context2.next = 24;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])(Object(_user_actions__WEBPACK_IMPORTED_MODULE_3__["signupFailure"])(_context2.t0));

        case 24:
        case "end":
          return _context2.stop();
      }
    }
  }, _marked2, null, [[1, 20]]);
}
function signInUser(_ref3) {
  var payload, res, userData;
  return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function signInUser$(_context3) {
    while (1) {
      switch (_context3.prev = _context3.next) {
        case 0:
          payload = _ref3.payload;
          _context3.prev = 1;
          _context3.next = 4;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])(Object(_user_actions__WEBPACK_IMPORTED_MODULE_3__["isLoading"])(true));

        case 4:
          _context3.next = 6;
          return Object(_api_api__WEBPACK_IMPORTED_MODULE_5__["signIn"])(payload.email, payload.password);

        case 6:
          res = _context3.sent;
          userData = {
            id: res._id,
            name: res.name,
            email: res.email,
            xToken: res.xToken,
            plan: res.plan
          };
          _context3.next = 10;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])(Object(_user_actions__WEBPACK_IMPORTED_MODULE_3__["setCurrentUser"])(userData));

        case 10:
          _context3.next = 12;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])(Object(_search_search_actions__WEBPACK_IMPORTED_MODULE_4__["setCount"])(res.searchCount));

        case 12:
          console.log("search count", res.searchCount);
          _context3.next = 15;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])(Object(_user_actions__WEBPACK_IMPORTED_MODULE_3__["isLoading"])(false));

        case 15:
          console.log("signin response", userData);
          _context3.next = 24;
          break;

        case 18:
          _context3.prev = 18;
          _context3.t0 = _context3["catch"](1);
          _context3.next = 22;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])(Object(_user_actions__WEBPACK_IMPORTED_MODULE_3__["isLoading"])(false));

        case 22:
          _context3.next = 24;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])(Object(_user_actions__WEBPACK_IMPORTED_MODULE_3__["siginFailure"])(_context3.t0));

        case 24:
        case "end":
          return _context3.stop();
      }
    }
  }, _marked3, null, [[1, 18]]);
}
function facebookAuth(_ref4) {
  var payload, token, id, fbId, name, fbToken;
  return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function facebookAuth$(_context4) {
    while (1) {
      switch (_context4.prev = _context4.next) {
        case 0:
          payload = _ref4.payload;
          _context4.next = 3;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])(Object(_user_actions__WEBPACK_IMPORTED_MODULE_3__["isLoading"])(true));

        case 3:
          _context4.prev = 3;
          token = payload.token, id = payload.id, fbId = payload.fbId, name = payload.name;
          console.log("payload", payload);
          _context4.next = 8;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])(Object(_user_actions__WEBPACK_IMPORTED_MODULE_3__["isLoading"])(true));

        case 8:
          _context4.next = 10;
          return Object(_api_api__WEBPACK_IMPORTED_MODULE_5__["fbAuthentication"])(token, id, fbId, name);

        case 10:
          fbToken = _context4.sent;
          _context4.next = 13;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])(Object(_user_actions__WEBPACK_IMPORTED_MODULE_3__["facebookAuthSuccess"])(fbToken));

        case 13:
          _context4.next = 15;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])(Object(_user_actions__WEBPACK_IMPORTED_MODULE_3__["isLoading"])(false));

        case 15:
          _context4.next = 23;
          break;

        case 17:
          _context4.prev = 17;
          _context4.t0 = _context4["catch"](3);
          _context4.next = 21;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])(Object(_user_actions__WEBPACK_IMPORTED_MODULE_3__["fbAuthFailure"])(_context4.t0));

        case 21:
          _context4.next = 23;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])(Object(_user_actions__WEBPACK_IMPORTED_MODULE_3__["isLoading"])(false));

        case 23:
        case "end":
          return _context4.stop();
      }
    }
  }, _marked4, null, [[3, 17]]);
}
function logout(_ref5) {
  var payload, res;
  return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function logout$(_context5) {
    while (1) {
      switch (_context5.prev = _context5.next) {
        case 0:
          payload = _ref5.payload;
          _context5.prev = 1;
          _context5.next = 4;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])(Object(_user_actions__WEBPACK_IMPORTED_MODULE_3__["isLoading"])(true));

        case 4:
          _context5.next = 6;
          return Object(_api_api__WEBPACK_IMPORTED_MODULE_5__["userLogout"])(payload);

        case 6:
          res = _context5.sent;

          if (!(res === true)) {
            _context5.next = 13;
            break;
          }

          console.log("logout done");
          _context5.next = 11;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])(Object(_user_actions__WEBPACK_IMPORTED_MODULE_3__["userLogoutSuccess"])());

        case 11:
          _context5.next = 13;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])(Object(_user_actions__WEBPACK_IMPORTED_MODULE_3__["isLoading"])(false));

        case 13:
          _context5.next = 21;
          break;

        case 15:
          _context5.prev = 15;
          _context5.t0 = _context5["catch"](1);
          _context5.next = 19;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])(Object(_user_actions__WEBPACK_IMPORTED_MODULE_3__["isLoading"])(false));

        case 19:
          _context5.next = 21;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])(Object(_user_actions__WEBPACK_IMPORTED_MODULE_3__["userLogoutFailure"])(_context5.t0));

        case 21:
        case "end":
          return _context5.stop();
      }
    }
  }, _marked5, null, [[1, 15]]);
}
function onAddingCurrentUser() {
  return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function onAddingCurrentUser$(_context6) {
    while (1) {
      switch (_context6.prev = _context6.next) {
        case 0:
          _context6.next = 2;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["takeLatest"])(_user_types__WEBPACK_IMPORTED_MODULE_2__["default"].ADDING_CURRENT_USER, setUser);

        case 2:
        case "end":
          return _context6.stop();
      }
    }
  }, _marked6);
}
function onSignupStart() {
  return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function onSignupStart$(_context7) {
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
function onSigninStart() {
  return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function onSigninStart$(_context8) {
    while (1) {
      switch (_context8.prev = _context8.next) {
        case 0:
          _context8.next = 2;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["takeLatest"])(_user_types__WEBPACK_IMPORTED_MODULE_2__["default"].SIGN_IN_START, signInUser);

        case 2:
        case "end":
          return _context8.stop();
      }
    }
  }, _marked8);
}
function onAuthFacebook() {
  return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function onAuthFacebook$(_context9) {
    while (1) {
      switch (_context9.prev = _context9.next) {
        case 0:
          _context9.next = 2;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["takeLatest"])(_user_types__WEBPACK_IMPORTED_MODULE_2__["default"].AUTH_FACEBOOK, facebookAuth);

        case 2:
        case "end":
          return _context9.stop();
      }
    }
  }, _marked9);
}
function onLogout() {
  return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function onLogout$(_context10) {
    while (1) {
      switch (_context10.prev = _context10.next) {
        case 0:
          _context10.next = 2;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["takeLatest"])(_user_types__WEBPACK_IMPORTED_MODULE_2__["default"].LOG_OUT, logout);

        case 2:
        case "end":
          return _context10.stop();
      }
    }
  }, _marked10);
}
function userSagas() {
  return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function userSagas$(_context11) {
    while (1) {
      switch (_context11.prev = _context11.next) {
        case 0:
          _context11.next = 2;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["all"])([Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["call"])(onAuthFacebook), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["call"])(onAddingCurrentUser), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["call"])(onSigninStart), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["call"])(onSignupStart), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["call"])(onLogout)]);

        case 2:
        case "end":
          return _context11.stop();
      }
    }
  }, _marked11);
}

/***/ })

})
//# sourceMappingURL=_app.js.04984dcaddd32175ca7c.hot-update.js.map