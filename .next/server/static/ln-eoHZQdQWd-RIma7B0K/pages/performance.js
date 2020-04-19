module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 2);
/******/ })
/************************************************************************/
/******/ ({

/***/ 2:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("NE9F");


/***/ }),

/***/ "A4pX":
/***/ (function(module, exports) {

module.exports = require("antd/lib/select");

/***/ }),

/***/ "El3y":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return tableColumns; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return performanceColumns; });
/* unused harmony export chartData */
/* harmony import */ var antd_lib_tag_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("PAYn");
/* harmony import */ var antd_lib_tag_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(antd_lib_tag_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd_lib_tag__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("P7Vo");
/* harmony import */ var antd_lib_tag__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(antd_lib_tag__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);



var __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;
const tableColumns = [{
  title: 'Interest',
  width: 70,
  dataIndex: 'name',
  key: 'name',
  sorter: (a, b) => a.name.length - b.name.length
}, {
  title: 'Audience',
  width: 80,
  dataIndex: 'audience_size',
  key: 'audience',
  sorter: (a, b) => a.name.length - b.name.length
}, {
  title: 'Topic',
  dataIndex: 'topic',
  width: 100,
  key: 'topic'
}, {
  title: 'Path',
  dataIndex: 'path',
  key: 'path',
  width: 60,
  render: tags => __jsx("span", null, tags ? tags.map((tag, index) => {
    return __jsx("div", {
      style: {
        display: 'inline'
      },
      key: index
    }, __jsx(antd_lib_tag__WEBPACK_IMPORTED_MODULE_1___default.a, {
      color: "magenta"
    }, tag.toUpperCase()));
  }) : '')
}, {
  title: 'Relevance Score',
  dataIndex: 'relevance',
  width: 100,
  key: 'relevance',
  sorter: (a, b) => a - b
}];
const performanceColumns = [{
  title: 'Interest',
  width: 70,
  dataIndex: 'name',
  key: 'name',
  sorter: (a, b) => a.name.length - b.name.length
}, {
  title: 'CPC',
  width: 70,
  dataIndex: 'cpc',
  key: 'cpc',
  sorter: (a, b) => a - b
}, {
  title: 'Clicks',
  width: 70,
  dataIndex: 'clicks',
  key: 'clicks',
  sorter: (a, b) => a - b
}, {
  title: 'Spend',
  width: 70,
  dataIndex: 'spend',
  key: 'spend',
  sorter: (a, b) => a - b
}, {
  title: 'Conversions',
  width: 70,
  dataIndex: 'convertions',
  key: 'convertions',
  sorter: (a, b) => a - b
}];
const chartData = [{
  name: 'Nike',
  type: 'Spend',
  value: 38
}, {
  name: 'Adidas',
  type: 'Spend',
  value: 52
}, {
  name: 'Shoe',
  type: 'Spend',
  value: 61
}, {
  name: 'Sandals',
  type: 'Spend',
  value: 145
}, {
  name: 'Slippers',
  type: 'Spend',
  value: 48
}, {
  name: 'Shorts',
  type: 'Spend',
  value: 38
}];

/***/ }),

/***/ "HJQg":
/***/ (function(module, exports) {

module.exports = require("styled-jsx/style");

/***/ }),

/***/ "Kk7H":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return addScore; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return getInterestNames; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return containsKeyword; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return splitArray; });
const addScore = (data, score) => {
  const updated = data.map(item => {
    if (item.hasOwnProperty('relevance')) {
      return item.relevance = item.relevance + score;
    }

    item['relevance'] = score;
    return item;
  });
  return updated;
};
const getInterestNames = data => {
  const names = data.map(item => {
    return item.name;
  });
  return names;
};
const containsKeyword = (key, phrase) => {
  const lowerPhrase = phrase.toLowerCase();
  const lowerKey = key.toLowerCase();
  return lowerPhrase.indexOf(lowerKey);
};
const splitArray = (array, size) => {
  const length = array.length;
  const setNumber = Math.ceil(length / size);
  let limit = size;
  let start = 0;
  let arraySplit = [];

  for (let i = 0; i < setNumber; i++) {
    const set = array.slice(start, limit);
    arraySplit.push(set);
    limit = limit + size;
    start = start + size;
  }

  return arraySplit;
};

/***/ }),

/***/ "MaXC":
/***/ (function(module, exports) {



/***/ }),

/***/ "Mplf":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, "k", function() { return /* binding */ signUp; });
__webpack_require__.d(__webpack_exports__, "j", function() { return /* binding */ signIn; });
__webpack_require__.d(__webpack_exports__, "b", function() { return /* binding */ fbAuthentication; });
__webpack_require__.d(__webpack_exports__, "i", function() { return /* binding */ searchInterest; });
__webpack_require__.d(__webpack_exports__, "a", function() { return /* binding */ compileInterestSuggestions; });
__webpack_require__.d(__webpack_exports__, "d", function() { return /* binding */ getAdAccounts; });
__webpack_require__.d(__webpack_exports__, "c", function() { return /* binding */ fbPaginate; });
__webpack_require__.d(__webpack_exports__, "g", function() { return /* binding */ getCampaigns; });
__webpack_require__.d(__webpack_exports__, "f", function() { return /* binding */ getAdsets; });
__webpack_require__.d(__webpack_exports__, "e", function() { return /* binding */ getAds; });
__webpack_require__.d(__webpack_exports__, "h", function() { return /* binding */ getInterestStats; });
__webpack_require__.d(__webpack_exports__, "l", function() { return /* binding */ userLogout; });

// UNUSED EXPORTS: getInterestSuggestions, getProducts

// EXTERNAL MODULE: external "axios"
var external_axios_ = __webpack_require__("zr5I");
var external_axios_default = /*#__PURE__*/__webpack_require__.n(external_axios_);

// CONCATENATED MODULE: ./api/endpoints.js
const endpoints = {
  GET_PRODUCTS: shop => `${"http://localhost:9090/"}shopify/products/${shop}`,
  FB_AUTH: `${"http://localhost:9090/"}facebook/auth`,
  FB_INTEREST_SEARCH: apiVersion => `https://graph.facebook.com/v${apiVersion}/search`,
  GET_ADACCOUNTS: fbId => `${"http://localhost:9090/"}facebook/adaccounts/${fbId}`,
  GET_CAMPAIGNS: accountId => `${"http://localhost:9090/"}facebook/campaigns/${accountId}`,
  GET_ADSETS: campaignId => `${"http://localhost:9090/"}facebook/adsets/${campaignId}`,
  GET_ADS: adsetId => `${"http://localhost:9090/"}facebook/ads/${adsetId}`,
  GET_STATS: adId => `${"http://localhost:9090/"}facebook/stats/${adId}`,
  SIGN_UP: `${"http://localhost:9090/"}users/signup`,
  SIGN_IN: `${"http://localhost:9090/"}users/signin`,
  LOG_OUT: `${"http://localhost:9090/"}users/logout`
};
/* harmony default export */ var api_endpoints = (endpoints);
// EXTERNAL MODULE: ./utils/search.js
var search = __webpack_require__("Kk7H");

// CONCATENATED MODULE: ./api/api.js



const signUp = async (email, password) => {
  console.log('getting', email, password);
  const url = api_endpoints.SIGN_UP;
  const data = {
    email,
    password
  };
  const res = await external_axios_default.a.post(url, data);
  const token = res.headers['x-auth'].replace('Bearer ', '');
  res.data['xToken'] = token;
  return res.data;
};
const signIn = async (email, password) => {
  console.log('sign in api');
  const url = api_endpoints.SIGN_IN;
  const params = {
    email,
    password
  };
  console.log('api', params);
  const res = await external_axios_default.a.get(url, {
    params
  });
  const token = res.headers['x-auth'].replace('Bearer ', '');
  res.data['xToken'] = token;
  return res.data;
};
const fbAuthentication = async (token, id, fbId, name) => {
  console.log('name api', name);
  const url = api_endpoints.FB_AUTH;
  const params = {
    token,
    id,
    fbId,
    name
  };
  const res = await external_axios_default.a.get(url, {
    params
  });
  console.log('res data', res.data);
  return res.data;
};
const searchInterest = async (token, keyword, limit = 500) => {
  const url = api_endpoints.FB_INTEREST_SEARCH(2.11);
  const params = {
    q: keyword,
    type: 'adinterest',
    access_token: token,
    limit
  };
  const res = await external_axios_default.a.get(url, {
    params
  });
  return res.data;
};
const getInterestSuggestions = async (token, keywords, limit = 100) => {
  let interestSuggestions = [];
  let response;
  const url = api_endpoints.FB_INTEREST_SEARCH(2.11);
  const params = {
    interest_list: keywords,
    type: 'adinterestsuggestion',
    access_token: token,
    limit: limit
  };
  response = await external_axios_default.a.get(url, {
    params
  });
  interestSuggestions.push(...response.data.data);
  let page = 0;

  while (response.data.paging.next) {
    if (page > 5) {
      break;
    }

    response = await external_axios_default.a.get(response.data.paging.next);
    interestSuggestions.push(...response.data.data);
    page++;
  }

  return interestSuggestions;
};
const compileInterestSuggestions = async (token, keywords, limit = 100) => {
  if (keywords.length > 200) {
    let suggestions = [];
    const dataArray = Object(search["d" /* splitArray */])(keywords, 200);

    for (let i = 0; i < dataArray.length; i++) {
      suggestions.push(...(await getInterestSuggestions(token, dataArray[i], limit)));
    }

    return suggestions;
  }

  return await getInterestSuggestions(token, keywords, limit);
};
const getProducts = async shopName => {
  const url = api_endpoints.GET_PRODUCTS(shopName);
  const params = {
    limit: 10
  };
  const res = await external_axios_default.a.get(url, {
    params
  });
  console.log(res.data);
};
const getAdAccounts = async (fbId, token) => {
  const url = api_endpoints.GET_ADACCOUNTS(fbId);
  const headers = {
    'Authorization': token
  };
  const params = {
    fbId
  };
  const res = await external_axios_default.a.get(url, {
    headers,
    params
  });
  return res.data;
};
const fbPaginate = async page => {
  const res = await external_axios_default.a.get(page);
  return res.data;
};
const getCampaigns = async (accountId, token) => {
  const url = api_endpoints.GET_CAMPAIGNS(accountId);
  const headers = {
    'Authorization': token
  };
  const res = await external_axios_default.a.get(url, {
    headers
  });
  return res.data;
};
const getAdsets = async (camaignId, token) => {
  const url = api_endpoints.GET_ADSETS(camaignId);
  const headers = {
    'Authorization': token
  };
  const res = await external_axios_default.a.get(url, {
    headers
  });
  return res.data;
};
const getAds = async (adsetId, token) => {
  const url = api_endpoints.GET_ADS(adsetId);
  const headers = {
    'Authorization': token
  };
  const res = await external_axios_default.a.get(url, {
    headers
  });
  return res.data;
};
const getInterestStats = async (adId, token) => {
  const url = api_endpoints.GET_STATS(adId);
  const headers = {
    'Authorization': token
  };
  const res = await external_axios_default.a.get(url, {
    headers
  });
  return res.data;
};
const userLogout = async token => {
  console.log('user token', token);
  const url = api_endpoints.LOG_OUT;
  console.log('url', url);
  const headers = {
    'Authorization': token
  };
  const res = await external_axios_default.a.get(url, {
    headers
  });
  console.log('res', res);
  return res.data;
};

/***/ }),

/***/ "NE9F":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./node_modules/antd/lib/modal/style/index.js
var style = __webpack_require__("fwXI");

// EXTERNAL MODULE: external "antd/lib/modal"
var modal_ = __webpack_require__("xKsY");
var modal_default = /*#__PURE__*/__webpack_require__.n(modal_);

// EXTERNAL MODULE: ./node_modules/antd/lib/row/style/index.js
var row_style = __webpack_require__("hr7U");

// EXTERNAL MODULE: external "antd/lib/row"
var row_ = __webpack_require__("tI3Q");
var row_default = /*#__PURE__*/__webpack_require__.n(row_);

// EXTERNAL MODULE: ./node_modules/antd/lib/col/style/index.js
var col_style = __webpack_require__("fv9D");

// EXTERNAL MODULE: external "antd/lib/col"
var col_ = __webpack_require__("vsU0");
var col_default = /*#__PURE__*/__webpack_require__.n(col_);

// EXTERNAL MODULE: ./node_modules/antd/lib/button/style/index.js
var button_style = __webpack_require__("MaXC");

// EXTERNAL MODULE: external "antd/lib/button"
var button_ = __webpack_require__("eGmO");
var button_default = /*#__PURE__*/__webpack_require__.n(button_);

// EXTERNAL MODULE: ./node_modules/antd/lib/select/style/index.js
var select_style = __webpack_require__("ek7I");

// EXTERNAL MODULE: external "antd/lib/select"
var select_ = __webpack_require__("A4pX");
var select_default = /*#__PURE__*/__webpack_require__.n(select_);

// EXTERNAL MODULE: external "styled-jsx/style"
var style_ = __webpack_require__("HJQg");
var external_styled_jsx_style_default = /*#__PURE__*/__webpack_require__.n(style_);

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: external "react-redux"
var external_react_redux_ = __webpack_require__("h74D");

// EXTERNAL MODULE: ./utils/table.js
var table = __webpack_require__("El3y");

// EXTERNAL MODULE: ./components/table.js
var components_table = __webpack_require__("UzWI");

// CONCATENATED MODULE: ./components/adAccount.js


var __jsx = external_react_default.a.createElement;

function AdAccount(props) {
  const status = () => {
    switch (props.status) {
      case 1:
        return "ACTIVE";

      case 2:
        return "DISABLED";

      case 3:
        return "UNSETTLED";

      case 7:
        return "PENDING RISK REVIEW";

      case 8:
        return "PENDING SETTLEMENT";

      case 9:
        return "IN GRACE PERIOD";

      case 100:
        return "PENDING CLOSURE";

      case 101:
        return "CLOSED";

      case 201:
        return "ANY ACTIVE";

      case 202:
        return "ANY CLOSED";

      default:
        return "NONE";
    }
  };

  return __jsx("div", {
    id: "wrapper",
    onClick: () => props.onSelect(props.accountId, props.name),
    className: "jsx-80624705"
  }, __jsx("div", {
    className: "jsx-80624705" + " " + "name"
  }, props.name), __jsx("div", {
    className: "jsx-80624705" + " " + "id"
  }, props.accountId ? props.accountId.replace("act_", "") : ""), props.status ? __jsx("div", {
    className: "jsx-80624705" + " " + `_${props.status}`
  }, status()) : '', __jsx(external_styled_jsx_style_default.a, {
    id: "80624705"
  }, ["#wrapper.jsx-80624705{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;border:1px solid #ccc;border-radius:4px;padding:5px;cursor:pointer;}", ".name.jsx-80624705{color:gray;font-weight:bold;}", "._1.jsx-80624705{color:green;}", "._2.jsx-80624705,._3.jsx-80624705,._7.jsx-80624705,._8.jsx-80624705,._9.jsx-80624705,._100.jsx-80624705,._101.jsx-80624705,._201.jsx-80624705,._202.jsx-80624705{color:red;}"]));
}

/* harmony default export */ var adAccount = (AdAccount);
// CONCATENATED MODULE: ./utils/common.js
const truncate = (string, length) => {
  return string.substring(0, length);
};
// EXTERNAL MODULE: ./api/api.js + 1 modules
var api = __webpack_require__("Mplf");

// CONCATENATED MODULE: ./pages/performance.js












var performance_jsx = external_react_default.a.createElement;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }










function Performance(props) {
  const {
    0: state,
    1: setState
  } = Object(external_react_["useState"])({
    accountModalVisible: false,
    campaignModalVisible: false,
    selectedRowKeys: null,
    pagingAccounts: {
      next: "",
      previous: ""
    },
    pagingCampaigns: {
      next: "",
      previous: ""
    },
    selectedAdAccount: {},
    selectedCampaign: {},
    selectedAdset: {},
    selectedAd: {},
    fetchingCampaigns: false,
    fetchingAdsets: false
  });
  const {
    fbId,
    user
  } = props;
  Object(external_react_["useEffect"])(() => {
    if (false) {}
  }, []);
  Object(external_react_["useEffect"])(() => {
    if (state.accountModalVisible) {
      fetchAdAccounts();
    }
  }, [state.accountModalVisible]);
  Object(external_react_["useEffect"])(() => {
    if (state.selectedAdAccount.id) {
      setModalVisible(false, "accountModalVisible");
      fetchCampaigns();
    }
  }, [state.selectedAdAccount]);
  Object(external_react_["useEffect"])(() => {
    if (state.selectedCampaign.id) {
      fetchAdsets();
    }
  }, [state.selectedCampaign]);
  Object(external_react_["useEffect"])(() => {
    if (state.selectedAdset.id) {
      fetchAds();
    }
  }, [state.selectedAdset]);
  Object(external_react_["useEffect"])(() => {
    if (state.selectedAd.id) {
      fetchStats();
    }
  }, [state.selectedAd]);

  const setModalVisible = (status, modalName) => {
    setState(prevState => _objectSpread({}, prevState, {
      [modalName]: status
    }));
  };

  const setCampaignsModal = modalVisible => {
    setState(prevState => _objectSpread({}, prevState, {
      campaignModalVisible: modalVisible
    }));
  };

  const fetchAdAccounts = async () => {
    if (state.accountModalVisible) {
      console.log("fetch ad accounts");
      const adAccounts = await Object(api["d" /* getAdAccounts */])(fbId, user.xToken);
      console.log("AD accoutns", adAccounts);
      setState(prevState => _objectSpread({}, prevState, {
        adAccounts: adAccounts,
        pagingAccounts: {
          next: adAccounts.paging.next && adAccounts.paging.next,
          previous: adAccounts.paging.previous && adAccounts.paging.previous
        },
        selectedAdAccount: {},
        selectedCampaign: {},
        selectedAdset: {}
      }));
    }
  };

  const fetchCampaigns = async () => {
    setState(prevState => _objectSpread({}, prevState, {
      fetchingCampaigns: true,
      selectedCampaign: {}
    }));
    const accountId = state.selectedAdAccount.id;
    const res = await Object(api["g" /* getCampaigns */])(accountId, user.xToken);
    setState(prevState => _objectSpread({}, prevState, {
      campaigns: res,
      fetchingCampaigns: false,
      pagingCampaigns: {
        next: res.paging && res.paging.next,
        previous: res.paging && res.paging.previous
      }
    }));
  };

  const fetchAdsets = async () => {
    setState(prevState => _objectSpread({}, prevState, {
      fetchingAdsets: true,
      selectedAdset: {}
    }));
    const campaignId = state.selectedCampaign.id;
    const res = await Object(api["f" /* getAdsets */])(campaignId, user.xToken);
    console.log("sets", res.data);
    setState(prevState => _objectSpread({}, prevState, {
      adsets: res,
      fetchingAdsets: false
    }));
  };

  const fetchAds = async () => {
    setState(prevState => _objectSpread({}, prevState, {
      fetchingAds: true
    }));
    const adsetId = state.selectedAdset.id;
    const res = await Object(api["e" /* getAds */])(adsetId, user.xToken);
    console.log("ads", res);
    setState(prevState => _objectSpread({}, prevState, {
      ads: res,
      fetchingAds: false
    }));
  };

  const fetchStats = async () => {
    setState(prevState => _objectSpread({}, prevState, {
      fetchingStats: true
    }));
    const adId = state.selectedAd.id;
    const res = await Object(api["h" /* getInterestStats */])(adId, user.xToken);
    console.log("stats", res);
  };

  const handleAccountPagination = async page => {
    const adAccounts = await Object(api["c" /* fbPaginate */])(page);
    console.log("paginate", adAccounts);
    setState(prevState => _objectSpread({}, prevState, {
      adAccounts: adAccounts,
      pagingAccounts: {
        next: adAccounts.paging && adAccounts.paging.next,
        previous: adAccounts.paging && adAccounts.paging.previous
      }
    }));
  };

  const handleCampaignPagination = async page => {
    const campaigns = await Object(api["c" /* fbPaginate */])(page);
    console.log("paginate", campaigns);
    setState(prevState => _objectSpread({}, prevState, {
      campaigns: campaigns,
      pagingCampaigns: {
        next: campaigns.paging && campaigns.paging.next,
        previous: campaigns.paging && campaigns.paging.previous
      }
    }));
  };

  const onSelectionChange = (selectedRowKeys, selectedRows) => {
    console.log("rows", selectedRows);
    const selectedInterest = selectedRows.map(interest => {
      return interest.name;
    });
    setState(prevState => _objectSpread({}, prevState, {
      selectedRowKeys,
      selectedInterest,
      selectedRows
    }));
  };

  const handleAccountSelect = (id, name) => {
    setState(prevState => _objectSpread({}, prevState, {
      selectedAdAccount: {
        id,
        name
      }
    }));
  };

  const handleCampaignSelect = (id, name) => {
    setState(prevState => _objectSpread({}, prevState, {
      selectedCampaign: {
        id,
        name
      },
      campaignModalVisible: false
    }));
  };

  const handleAdsetSelect = (value, option) => {
    console.log("selected", option.props.children);
    setState(prevState => _objectSpread({}, prevState, {
      selectedAdset: {
        id: option.props.value,
        name: option.props.children
      }
    }));
  };

  const handleAdSelect = (value, option) => {
    setState(prevState => _objectSpread({}, prevState, {
      selectedAd: {
        id: option.props.value,
        name: option.props.children
      }
    }));
  };

  const {
    Option
  } = select_default.a;
  const {
    selectedRowKeys
  } = state;
  return performance_jsx("div", {
    id: "performance",
    className: "jsx-290073997"
  }, performance_jsx(row_default.a, {
    gutter: 16,
    style: {
      width: "100%"
    }
  }, performance_jsx(col_default.a, {
    span: 4
  }, performance_jsx("div", {
    className: "jsx-290073997" + " " + "selection"
  }, performance_jsx("div", {
    className: "jsx-290073997" + " " + "button item"
  }, performance_jsx(button_default.a, {
    style: {
      textAlign: "left"
    },
    className: "modalButtons",
    onClick: () => setModalVisible(true, "accountModalVisible"),
    block: true
  }, state.selectedAdAccount.name ? truncate(state.selectedAdAccount.name, 30) : "Select Ad Account")), performance_jsx("div", {
    className: "jsx-290073997" + " " + "select item"
  }, performance_jsx(button_default.a, {
    style: {
      textAlign: "left"
    },
    onClick: () => setCampaignsModal(true),
    block: true,
    loading: state.fetchingCampaigns,
    disabled: !!!state.selectedAdAccount.name
  }, state.selectedCampaign.name ? truncate(state.selectedCampaign.name, 30) : "Select Campaign")), performance_jsx("div", {
    className: "jsx-290073997" + " " + "select item"
  }, performance_jsx(select_default.a, {
    disabled: !!!state.selectedCampaign.name,
    value: state.selectedAdset.name ? state.selectedAdset.name : "Select Adset",
    style: {
      width: "100%"
    },
    placeholder: "Select Adset",
    loading: state.fetchingAdsets,
    showSearch: true,
    optionFilterProp: "children",
    onSelect: handleAdsetSelect,
    filterOption: (input, option) => option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
  }, state.adsets ? state.adsets.data.map((item, index) => {
    return performance_jsx(Option, {
      value: item.id,
      key: index
    }, item.name);
  }) : "")), performance_jsx("div", {
    className: "jsx-290073997" + " " + "select item"
  }, performance_jsx(select_default.a, {
    disabled: !!!state.selectedAdset.name,
    style: {
      width: "100%"
    },
    value: state.selectedAd.name ? state.selectedAd.name : "Select Ad",
    placeholder: "Select ad",
    showSearch: true,
    optionFilterProp: "children",
    onSelect: handleAdSelect,
    filterOption: (input, option) => option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
  }, state.ads ? state.ads.data.map((item, index) => {
    return performance_jsx(Option, {
      value: item.id,
      key: index
    }, item.name);
  }) : "")))), performance_jsx(col_default.a, {
    span: 20
  }, performance_jsx("div", {
    className: "jsx-290073997" + " " + "stats"
  }, performance_jsx("div", {
    id: "chart",
    className: "jsx-290073997"
  }), performance_jsx("div", {
    className: "jsx-290073997"
  }, performance_jsx(components_table["a" /* default */], {
    columns: table["a" /* performanceColumns */],
    onSelection: onSelectionChange,
    selectedRowKeys: selectedRowKeys,
    className: "table"
  }))))), performance_jsx(modal_default.a, {
    title: "Select an Ad account",
    centered: true,
    visible: state.accountModalVisible,
    onOk: () => setModalVisible(false, "accountModalVisible"),
    onCancel: () => setModalVisible(false, "accountModalVisible"),
    okText: "Next",
    cancelText: "Previous",
    okButtonProps: {
      disabled: !!!state.pagingAccounts.next,
      onClick: () => handleAccountPagination(state.pagingAccounts.next)
    },
    cancelButtonProps: {
      disabled: !!!state.pagingAccounts.previous,
      onClick: () => handleAccountPagination(state.pagingAccounts.previous)
    },
    width: 1300
  }, performance_jsx("div", {
    className: "jsx-290073997" + " " + "adAccounts"
  }, performance_jsx("div", {
    className: "jsx-290073997" + " " + "inner"
  }, state.adAccounts ? state.adAccounts.data.map((item, index) => performance_jsx("div", {
    key: index,
    className: "jsx-290073997" + " " + "account"
  }, performance_jsx(adAccount, {
    name: item.name,
    accountId: item.id,
    status: item.account_status,
    onSelect: handleAccountSelect
  }))) : "Loading..."))), performance_jsx(modal_default.a, {
    title: "Select a campaign",
    centered: true,
    visible: state.campaignModalVisible,
    onOk: () => setCampaignsModal(false, "campaignModalVisible"),
    onCancel: () => setCampaignsModal(false, "campaignModalVisible"),
    okText: "Next",
    cancelText: "Previous",
    okButtonProps: {
      disabled: !!!state.pagingCampaigns.next,
      onClick: () => handleCampaignPagination(state.pagingCampaigns.next)
    },
    cancelButtonProps: {
      disabled: !!!state.pagingCampaigns.previous,
      onClick: () => handleCampaignPagination(state.pagingCampaigns.previous)
    },
    width: 1300
  }, performance_jsx("div", {
    className: "jsx-290073997" + " " + "adAccounts"
  }, performance_jsx("div", {
    className: "jsx-290073997" + " " + "inner"
  }, state.campaigns ? state.campaigns.data.map((item, index) => performance_jsx("div", {
    key: index,
    className: "jsx-290073997" + " " + "account"
  }, performance_jsx(adAccount, {
    name: item.name,
    accountId: item.id // status={item.account_status}
    ,
    onSelect: handleCampaignSelect
  }))) : "Loading..."))), performance_jsx(external_styled_jsx_style_default.a, {
    id: "290073997"
  }, ["#performance.jsx-290073997{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;position:relative;margin-top:70px;width:100%;}", ".selection.jsx-290073997{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;border:1px solid #ccc;border-radius:4px;height:auto;padding:10px;}", ".item.jsx-290073997{margin-bottom:30px;width:100%;}", ".stats.jsx-290073997{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;}", ".adAccounts.jsx-290073997{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;}", ".adAccounts.jsx-290073997 .inner.jsx-290073997{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;width:90%;}", ".account.jsx-290073997{min-width:20%;margin:10px;}"]));
}

const mapStateToProps = state => ({
  user: state.user.currentUser,
  fbId: state.user.fbToken.fbId
});

/* harmony default export */ var performance = __webpack_exports__["default"] = (Object(external_react_redux_["connect"])(mapStateToProps)(Performance));

/***/ }),

/***/ "P7Vo":
/***/ (function(module, exports) {

module.exports = require("antd/lib/tag");

/***/ }),

/***/ "PAYn":
/***/ (function(module, exports) {



/***/ }),

/***/ "Puj+":
/***/ (function(module, exports) {

module.exports = require("antd/lib/table");

/***/ }),

/***/ "UzWI":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var antd_lib_table_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("zmYW");
/* harmony import */ var antd_lib_table_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(antd_lib_table_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd_lib_table__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("Puj+");
/* harmony import */ var antd_lib_table__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(antd_lib_table__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);



var __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;

const InterestTable = props => {
  const rowSelection = {
    selectedRowKeys: props.selectedRowKeys,
    onChange: (selectedRowKeys, selectedRows) => {
      props.onSelection(selectedRowKeys, selectedRows);
    }
  };
  return __jsx(antd_lib_table__WEBPACK_IMPORTED_MODULE_1___default.a, {
    rowSelection: rowSelection,
    columns: props.columns,
    dataSource: props.dataSource,
    rowKey: "id",
    pagination: {
      showSizeChanger: true
    }
  });
};

/* harmony default export */ __webpack_exports__["a"] = (InterestTable);

/***/ }),

/***/ "cDcd":
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "eGmO":
/***/ (function(module, exports) {

module.exports = require("antd/lib/button");

/***/ }),

/***/ "ek7I":
/***/ (function(module, exports) {



/***/ }),

/***/ "fv9D":
/***/ (function(module, exports) {



/***/ }),

/***/ "fwXI":
/***/ (function(module, exports) {



/***/ }),

/***/ "h74D":
/***/ (function(module, exports) {

module.exports = require("react-redux");

/***/ }),

/***/ "hr7U":
/***/ (function(module, exports) {



/***/ }),

/***/ "tI3Q":
/***/ (function(module, exports) {

module.exports = require("antd/lib/row");

/***/ }),

/***/ "vsU0":
/***/ (function(module, exports) {

module.exports = require("antd/lib/col");

/***/ }),

/***/ "xKsY":
/***/ (function(module, exports) {

module.exports = require("antd/lib/modal");

/***/ }),

/***/ "zmYW":
/***/ (function(module, exports) {



/***/ }),

/***/ "zr5I":
/***/ (function(module, exports) {

module.exports = require("axios");

/***/ })

/******/ });