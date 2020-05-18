webpackHotUpdate("static/development/pages/index.js",{

/***/ "./utils/table.js":
/*!************************!*\
  !*** ./utils/table.js ***!
  \************************/
/*! exports provided: tableColumns, performanceColumns, chartData */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "tableColumns", function() { return tableColumns; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "performanceColumns", function() { return performanceColumns; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "chartData", function() { return chartData; });
/* harmony import */ var antd_lib_tag_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! antd/lib/tag/style */ "./node_modules/antd/lib/tag/style/index.js");
/* harmony import */ var antd_lib_tag_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(antd_lib_tag_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd_lib_tag__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd/lib/tag */ "./node_modules/antd/lib/tag/index.js");
/* harmony import */ var antd_lib_tag__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(antd_lib_tag__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);



var _this = undefined,
    _jsxFileName = "/home/benkissi/projects/getch/getch-frontend-2.0/utils/table.js";


var __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;
var tableColumns = [{
  title: "Interest",
  width: 70,
  dataIndex: "name",
  key: "name",
  sorter: function sorter(a, b) {
    return a.name.length - b.name.length;
  }
}, {
  title: "Audience",
  width: 80,
  dataIndex: "audience_size",
  key: "audience",
  sorter: function sorter(a, b) {
    return a.name.length - b.name.length;
  }
}, {
  title: "Topic",
  dataIndex: "topic",
  width: 100,
  key: "topic"
}, {
  title: "Path",
  dataIndex: "path",
  key: "path",
  width: 60,
  render: function render(tags) {
    return __jsx("span", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 29,
        columnNumber: 7
      }
    }, tags ? tags.map(function (tag, index) {
      return __jsx("div", {
        style: {
          display: "inline"
        },
        key: index,
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 33,
          columnNumber: 17
        }
      }, __jsx(antd_lib_tag__WEBPACK_IMPORTED_MODULE_1___default.a, {
        color: "magenta",
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 34,
          columnNumber: 19
        }
      }, tag.toUpperCase()));
    }) : "");
  }
}, {
  title: "Relevance Score",
  dataIndex: "relevance",
  width: 100,
  key: "relevance",
  sorter: function sorter(a, b) {
    return a - b;
  }
}, {
  title: "Links",
  dataIndex: "links",
  width: 100,
  key: "links",
  render: function render(tags) {
    return __jsx("span", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 55,
        columnNumber: 7
      }
    }, tags ? tags.map(function (tag, index) {
      return __jsx("a", {
        className: "links",
        key: index,
        href: tag,
        target: "_blank",
        style: {
          display: "inline",
          cursor: "pointer"
        },
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 59,
          columnNumber: 17
        }
      }, __jsx("img", {
        src: "/images/fbIcon.svg",
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 66,
          columnNumber: 19
        }
      }));
    }) : "");
  }
}];
var performanceColumns = [{
  title: "Interest",
  width: 70,
  dataIndex: "name",
  key: "name",
  sorter: function sorter(a, b) {
    return a.name.length - b.name.length;
  }
}, {
  title: "CPC",
  width: 70,
  dataIndex: "cpc",
  key: "cpc",
  sorter: function sorter(a, b) {
    return a - b;
  }
}, {
  title: "Clicks",
  width: 70,
  dataIndex: "clicks",
  key: "clicks",
  sorter: function sorter(a, b) {
    return a - b;
  }
}, {
  title: "Spend",
  width: 70,
  dataIndex: "spend",
  key: "spend",
  sorter: function sorter(a, b) {
    return a - b;
  }
}, {
  title: "Conversions",
  width: 70,
  dataIndex: "convertions",
  key: "convertions",
  sorter: function sorter(a, b) {
    return a - b;
  }
}];
var chartData = [{
  name: "Nike",
  type: "Spend",
  value: 38
}, {
  name: "Adidas",
  type: "Spend",
  value: 52
}, {
  name: "Shoe",
  type: "Spend",
  value: 61
}, {
  name: "Sandals",
  type: "Spend",
  value: 145
}, {
  name: "Slippers",
  type: "Spend",
  value: 48
}, {
  name: "Shorts",
  type: "Spend",
  value: 38
}];

/***/ })

})
//# sourceMappingURL=index.js.dda5bb15ca0259fed833.hot-update.js.map