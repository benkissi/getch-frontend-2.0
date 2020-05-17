webpackHotUpdate("static/development/pages/plans.js",{

/***/ "./pages/plans.js":
/*!************************!*\
  !*** ./pages/plans.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_dashboardLayout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/dashboardLayout */ "./components/dashboardLayout.js");
/* harmony import */ var _components_plan__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/plan */ "./components/plan.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _redux_user_user_actions__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../redux/user/user-actions */ "./redux/user/user-actions.js");


var _this = undefined,
    _jsxFileName = "/home/benkissi/projects/getch/getch-frontend-2.0/pages/plans.js";



var __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;






var Plans = function Plans(props) {
  Object(react__WEBPACK_IMPORTED_MODULE_2__["useEffect"])(function () {
    if (!window.getpaidSetup) {
      new Promise(function (resolve) {
        loadScript(function () {
          resolve();
        });
      });
    }
  }, []);
  var features = [{
    image: "/images/search.svg",
    description: "Uncover 1000's of targetable Facebook™ interests your competition can't find, so you can avoid the bidding war and skyrocket your ROAS "
  }, {
    image: "/images/download.svg",
    description: "Easily cherrypick profitable Facebook™ interests by simply copy - pasting them in your detailed targeting or downloading them as a CSV file"
  }, {
    image: "/images/time.svg",
    description: "Save hours of manual interest research with our auto-generated interest research links"
  }];

  var loadScript = function loadScript(callback) {
    var script = document.createElement("script");
    script.src = !props.isProduction ? "https://ravesandboxapi.flutterwave.com/flwv3-pug/getpaidx/api/flwpbf-inline.js" : "https://api.ravepay.co/flwv3-pug/getpaidx/api/flwpbf-inline.js";
    document.getElementsByTagName("head")[0].appendChild(script);

    if (script.readyState) {
      // IE
      script.onreadystatechange = function () {
        if (script.readyState === "loaded" || script.readyState === "complete") {
          script.onreadystatechange = null;
          callback();
        }
      };
    } else {
      // Others
      script.onload = function () {
        callback();
      };
    }
  };

  var paymentCallback = function paymentCallback(plan, response) {
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.async(function paymentCallback$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            if (!(response.tx.chargeResponseCode == "00" || response.tx.chargeResponseCode == "0")) {
              _context.next = 3;
              break;
            }

            _context.next = 3;
            return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.awrap(props.verify(props.user.xToken, plan, response.tx.txRef));

          case 3:
          case "end":
            return _context.stop();
        }
      }
    }, null, null, null, Promise);
  };

  return __jsx("div", {
    className: "jsx-2022374315" + " " + "wrapper",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 86,
      columnNumber: 5
    }
  }, __jsx("div", {
    className: "jsx-2022374315" + " " + "title",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 87,
      columnNumber: 7
    }
  }, __jsx("h2", {
    className: "jsx-2022374315",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 88,
      columnNumber: 9
    }
  }, "Pricing"), __jsx("p", {
    className: "jsx-2022374315",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 89,
      columnNumber: 9
    }
  }, "Simple pricing, no hidden fees")), __jsx("div", {
    className: "jsx-2022374315" + " " + "packages",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 91,
      columnNumber: 7
    }
  }, __jsx(_components_plan__WEBPACK_IMPORTED_MODULE_4__["default"], {
    image: "/images/fbKey.svg",
    title: "Life-time Access",
    description: "Get access to hidden Facebook interest",
    features: features,
    userEmail: props.user ? props.user.email : "",
    fName: props.user ? props.user.name.split[0] : "",
    lName: props.user ? props.user.name.split[1] : "",
    verifyPayment: paymentCallback,
    currentPlan: props.user ? props.user.plan : "",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 92,
      columnNumber: 9
    }
  })), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a, {
    id: "2022374315",
    __self: _this
  }, ".wrapper.jsx-2022374315{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;margin-top:100px;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;}.title.jsx-2022374315{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;}.packages.jsx-2022374315{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;width:100%;margin-top:20px;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2Jlbmtpc3NpL3Byb2plY3RzL2dldGNoL2dldGNoLWZyb250ZW5kLTIuMC9wYWdlcy9wbGFucy5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUF1R2tCLEFBR3dCLEFBUUEsQUFPQSwwRUFkSSxBQVFFLEFBT0ksaUJBZEEsNEVBUUQsTUFPWCxXQUNLLE1BZkcsVUFnQnJCLDZDQVJ5QixzQ0FQRCw2REFReEIsaUJBUEEiLCJmaWxlIjoiL2hvbWUvYmVua2lzc2kvcHJvamVjdHMvZ2V0Y2gvZ2V0Y2gtZnJvbnRlbmQtMi4wL3BhZ2VzL3BsYW5zLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgRGFzaGJvYXJkTGF5b3V0IGZyb20gXCIuLi9jb21wb25lbnRzL2Rhc2hib2FyZExheW91dFwiO1xuaW1wb3J0IFBsYW4gZnJvbSBcIi4uL2NvbXBvbmVudHMvcGxhblwiO1xuaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gXCJyZWFjdC1yZWR1eFwiO1xuXG5pbXBvcnQgeyB2ZXJpZnlQYXltZW50IH0gZnJvbSBcIi4uL3JlZHV4L3VzZXIvdXNlci1hY3Rpb25zXCI7XG5cbmNvbnN0IFBsYW5zID0gKHByb3BzKSA9PiB7XG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgaWYgKCF3aW5kb3cuZ2V0cGFpZFNldHVwKSB7XG4gICAgICBuZXcgUHJvbWlzZSgocmVzb2x2ZSkgPT4ge1xuICAgICAgICBsb2FkU2NyaXB0KCgpID0+IHtcbiAgICAgICAgICByZXNvbHZlKCk7XG4gICAgICAgIH0pO1xuICAgICAgfSk7XG4gICAgfVxuICB9LCBbXSk7XG5cbiAgY29uc3QgZmVhdHVyZXMgPSBbXG4gICAge1xuICAgICAgaW1hZ2U6IFwiL2ltYWdlcy9zZWFyY2guc3ZnXCIsXG4gICAgICBkZXNjcmlwdGlvbjpcbiAgICAgICAgXCJVbmNvdmVyIDEwMDAncyBvZiB0YXJnZXRhYmxlIEZhY2Vib29r4oSiIGludGVyZXN0cyB5b3VyIGNvbXBldGl0aW9uIGNhbid0IGZpbmQsIHNvIHlvdSBjYW4gYXZvaWQgdGhlIGJpZGRpbmcgd2FyIGFuZCBza3lyb2NrZXQgeW91ciBST0FTIFwiLFxuICAgIH0sXG4gICAge1xuICAgICAgaW1hZ2U6IFwiL2ltYWdlcy9kb3dubG9hZC5zdmdcIixcbiAgICAgIGRlc2NyaXB0aW9uOlxuICAgICAgICBcIkVhc2lseSBjaGVycnlwaWNrIHByb2ZpdGFibGUgRmFjZWJvb2vihKIgaW50ZXJlc3RzIGJ5IHNpbXBseSBjb3B5IC0gcGFzdGluZyB0aGVtIGluIHlvdXIgZGV0YWlsZWQgdGFyZ2V0aW5nIG9yIGRvd25sb2FkaW5nIHRoZW0gYXMgYSBDU1YgZmlsZVwiLFxuICAgIH0sXG4gICAge1xuICAgICAgaW1hZ2U6IFwiL2ltYWdlcy90aW1lLnN2Z1wiLFxuICAgICAgZGVzY3JpcHRpb246XG4gICAgICAgIFwiU2F2ZSBob3VycyBvZiBtYW51YWwgaW50ZXJlc3QgcmVzZWFyY2ggd2l0aCBvdXIgYXV0by1nZW5lcmF0ZWQgaW50ZXJlc3QgcmVzZWFyY2ggbGlua3NcIixcbiAgICB9LFxuICBdO1xuXG4gIGNvbnN0IGxvYWRTY3JpcHQgPSAoY2FsbGJhY2spID0+IHtcbiAgICBjb25zdCBzY3JpcHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic2NyaXB0XCIpO1xuICAgIHNjcmlwdC5zcmMgPSAhcHJvcHMuaXNQcm9kdWN0aW9uXG4gICAgICA/IFwiaHR0cHM6Ly9yYXZlc2FuZGJveGFwaS5mbHV0dGVyd2F2ZS5jb20vZmx3djMtcHVnL2dldHBhaWR4L2FwaS9mbHdwYmYtaW5saW5lLmpzXCJcbiAgICAgIDogXCJodHRwczovL2FwaS5yYXZlcGF5LmNvL2Zsd3YzLXB1Zy9nZXRwYWlkeC9hcGkvZmx3cGJmLWlubGluZS5qc1wiO1xuICAgIGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwiaGVhZFwiKVswXS5hcHBlbmRDaGlsZChzY3JpcHQpO1xuICAgIGlmIChzY3JpcHQucmVhZHlTdGF0ZSkge1xuICAgICAgLy8gSUVcbiAgICAgIHNjcmlwdC5vbnJlYWR5c3RhdGVjaGFuZ2UgPSAoKSA9PiB7XG4gICAgICAgIGlmIChcbiAgICAgICAgICBzY3JpcHQucmVhZHlTdGF0ZSA9PT0gXCJsb2FkZWRcIiB8fFxuICAgICAgICAgIHNjcmlwdC5yZWFkeVN0YXRlID09PSBcImNvbXBsZXRlXCJcbiAgICAgICAgKSB7XG4gICAgICAgICAgc2NyaXB0Lm9ucmVhZHlzdGF0ZWNoYW5nZSA9IG51bGw7XG4gICAgICAgICAgY2FsbGJhY2soKTtcbiAgICAgICAgfVxuICAgICAgfTtcbiAgICB9IGVsc2Uge1xuICAgICAgLy8gT3RoZXJzXG4gICAgICBzY3JpcHQub25sb2FkID0gKCkgPT4ge1xuICAgICAgICBjYWxsYmFjaygpO1xuICAgICAgfTtcbiAgICB9XG4gIH07XG5cbiAgY29uc3QgcGF5bWVudENhbGxiYWNrID0gYXN5bmMgKHBsYW4sIHJlc3BvbnNlKSA9PiB7XG4gICAgaWYgKFxuICAgICAgcmVzcG9uc2UudHguY2hhcmdlUmVzcG9uc2VDb2RlID09IFwiMDBcIiB8fFxuICAgICAgcmVzcG9uc2UudHguY2hhcmdlUmVzcG9uc2VDb2RlID09IFwiMFwiXG4gICAgKSB7XG4gICAgICBhd2FpdCBwcm9wcy52ZXJpZnkocHJvcHMudXNlci54VG9rZW4sIHBsYW4sIHJlc3BvbnNlLnR4LnR4UmVmKTtcblxuICAgICAgLy8gaWYgKHJlcy5kYXRhLnBsYW4ubmFtZSAhPT0gXCJ0cmlhbFwiKSB7XG4gICAgICAvLyAgIHVwZGF0ZVN0YXRlKHJlcy5kYXRhLnBsYW4ubmFtZSwgcmVzLmRhdGEucGxhbi5uZXh0UGF5bWVudCk7XG4gICAgICAvLyAgIGNvbnNvbGUubG9nKFwicGFpZFwiKTtcbiAgICAgIC8vIH0gZWxzZSBpZiAocmVzLnN0YXR1cyA9PSA0MDApIHtcbiAgICAgIC8vICAgdG9hc3QuZXJyb3IoYFNvbWV0aGluZyB3ZW50IHdyb25nLiBDb250YWN0IHN1cHBvcnQgaWYgdGhpcyBwZXJzaXRzYCwge1xuICAgICAgLy8gICAgIHBvc2l0aW9uOiBcInRvcC1yaWdodFwiLFxuICAgICAgLy8gICAgIGF1dG9DbG9zZTogNTAwMCxcbiAgICAgIC8vICAgICBoaWRlUHJvZ3Jlc3NCYXI6IGZhbHNlLFxuICAgICAgLy8gICAgIGNsb3NlT25DbGljazogdHJ1ZSxcbiAgICAgIC8vICAgICBwYXVzZU9uSG92ZXI6IHRydWUsXG4gICAgICAvLyAgICAgZHJhZ2dhYmxlOiB0cnVlLFxuICAgICAgLy8gICB9KTtcbiAgICAgIC8vIH1cbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cIndyYXBwZXJcIj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGl0bGVcIj5cbiAgICAgICAgPGgyPlByaWNpbmc8L2gyPlxuICAgICAgICA8cD5TaW1wbGUgcHJpY2luZywgbm8gaGlkZGVuIGZlZXM8L3A+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwicGFja2FnZXNcIj5cbiAgICAgICAgPFBsYW5cbiAgICAgICAgICBpbWFnZT1cIi9pbWFnZXMvZmJLZXkuc3ZnXCJcbiAgICAgICAgICB0aXRsZT1cIkxpZmUtdGltZSBBY2Nlc3NcIlxuICAgICAgICAgIGRlc2NyaXB0aW9uPVwiR2V0IGFjY2VzcyB0byBoaWRkZW4gRmFjZWJvb2sgaW50ZXJlc3RcIlxuICAgICAgICAgIGZlYXR1cmVzPXtmZWF0dXJlc31cbiAgICAgICAgICB1c2VyRW1haWw9e3Byb3BzLnVzZXIgPyBwcm9wcy51c2VyLmVtYWlsIDogXCJcIn1cbiAgICAgICAgICBmTmFtZT17cHJvcHMudXNlciA/IHByb3BzLnVzZXIubmFtZS5zcGxpdFswXSA6IFwiXCJ9XG4gICAgICAgICAgbE5hbWU9e3Byb3BzLnVzZXIgPyBwcm9wcy51c2VyLm5hbWUuc3BsaXRbMV0gOiBcIlwifVxuICAgICAgICAgIHZlcmlmeVBheW1lbnQ9e3BheW1lbnRDYWxsYmFja31cbiAgICAgICAgICBjdXJyZW50UGxhbj17cHJvcHMudXNlciA/IHByb3BzLnVzZXIucGxhbiA6IFwiXCJ9XG4gICAgICAgIC8+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgLndyYXBwZXIge1xuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgbWFyZ2luLXRvcDogMTAwcHg7XG4gICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgICB9XG5cbiAgICAgICAgLnRpdGxlIHtcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgfVxuXG4gICAgICAgIC5wYWNrYWdlcyB7XG4gICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICBtYXJnaW4tdG9wOiAyMHB4O1xuICAgICAgICB9XG4gICAgICBgfTwvc3R5bGU+XG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5QbGFucy5MYXlvdXQgPSBEYXNoYm9hcmRMYXlvdXQ7XG5cblBsYW5zLmRlZmF1bHRQcm9wcyA9IHtcbiAgaXNQcm9kdWN0aW9uOiBmYWxzZSxcbn07XG5cbmNvbnN0IG1hcFN0YXRlVG9Qcm9wcyA9IChzdGF0ZSkgPT4gKHtcbiAgdXNlcjogc3RhdGUudXNlci5jdXJyZW50VXNlcixcbn0pO1xuXG5jb25zdCBtYXBEaXNwYXRjaFRvUHJvcHMgPSAoZGlzcGF0Y2gpID0+ICh7XG4gIHZlcmlmeTogKHRva2VuLCBwbGFuLCByZWYpID0+IGRpc3BhdGNoKHZlcmlmeVBheW1lbnQoeyB0b2tlbiwgcGxhbiwgcmVmIH0pKSxcbn0pO1xuXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0KG1hcFN0YXRlVG9Qcm9wcywgbWFwRGlzcGF0Y2hUb1Byb3BzKShQbGFucyk7XG4iXX0= */\n/*@ sourceURL=/home/benkissi/projects/getch/getch-frontend-2.0/pages/plans.js */"));
};

Plans.Layout = _components_dashboardLayout__WEBPACK_IMPORTED_MODULE_3__["default"];
Plans.defaultProps = {
  isProduction: false
};

var mapStateToProps = function mapStateToProps(state) {
  return {
    user: state.user.currentUser
  };
};

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {
    verify: function verify(token, plan, ref) {
      return dispatch(Object(_redux_user_user_actions__WEBPACK_IMPORTED_MODULE_6__["verifyPayment"])({
        token: token,
        plan: plan,
        ref: ref
      }));
    }
  };
};

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_5__["connect"])(mapStateToProps, mapDispatchToProps)(Plans));

/***/ })

})
//# sourceMappingURL=plans.js.ff72ff9476173d56f901.hot-update.js.map