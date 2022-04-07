import axios from "axios";
import endpoints from "./endpoints";
import { splitArray } from "../utils/search";

export const signUp = async (email, password) => {
  const url = endpoints.SIGN_UP;
  const data = {
    email,
    password,
  };

  const res = await axios.post(url, data);
  const token = res.headers["x-auth"].replace("Bearer ", "");
  res.data["xToken"] = token;
  return res.data;
};

export const signIn = async (email, password) => {
  console.log("sign in api");
  const url = endpoints.SIGN_IN;
  const params = {
    email,
    password,
  };

  const res = await axios.get(url, {
    params,
  });
  const token = res.headers["x-auth"].replace("Bearer ", "");
  res.data["xToken"] = token;
  return res.data;
};

export const fbAuthentication = async (token, id, fbId, name) => {
  const url = endpoints.FB_AUTH;
  const params = {
    token,
    id,
    fbId,
    name,
  };

  const res = await axios.get(url, {
    params,
  });

  return res.data;
};

export const searchInterest = async (token, keyword, limit = 500) => {
  const url = endpoints.FB_INTEREST_SEARCH(2.11);
  const params = {
    q: keyword,
    type: "adinterest",
    access_token: token,
    limit,
  };
  const res = await axios.get(url, {
    params,
  });
  return res.data;
};

export const getInterestSuggestions = async (token, keywords, limit = 100) => {
  let interestSuggestions = [];
  let response;
  const url = endpoints.FB_INTEREST_SEARCH(2.11);
  
  const params = {
    interest_list: keywords,
    type: "adinterestsuggestion",
    access_token: token,
    limit: limit,
  };
  response = await axios.get(url, {
    params,
  });
  if(!response?.data?.data?.next) return interestSuggestions
  interestSuggestions.push(...response.data.data);
  let page = 0;
  while (response.data.paging.next) {
    if (page > 5) {
      break;
    }
    response = await axios.get(response.data.paging.next);
    interestSuggestions.push(...response.data.data);
    page++;
  }
  return interestSuggestions;
};

export const compileInterestSuggestions = async (
  token,
  keywords,
  limit = 100
) => {
  if (keywords.length > 40) {
    // let suggestions = [];
    // const dataArray = splitArray(keywords, 100);
    // for (let i = 0; i < dataArray.length; i++) {
    //   suggestions.push(
    //     ...(await getInterestSuggestions(token, dataArray[i], limit))
    //   );
    // }
    // return suggestions;
    return await getInterestSuggestions(token, keywords.slice(0, 40), limit)
  }

  return await getInterestSuggestions(token, keywords, limit);
};

export const getProducts = async (shopName) => {
  const url = endpoints.GET_PRODUCTS(shopName);
  const params = {
    limit: 10,
  };
  const res = await axios.get(url, {
    params,
  });
};

export const getAdAccounts = async (fbId, token) => {
  const url = endpoints.GET_ADACCOUNTS(fbId);

  const headers = {
    Authorization: token,
  };

  const params = {
    fbId,
  };

  const res = await axios.get(url, {
    headers,
    params,
  });

  return res.data;
};

export const fbPaginate = async (page) => {
  const res = await axios.get(page);
  return res.data;
};

export const getCampaigns = async (accountId, token) => {
  const url = endpoints.GET_CAMPAIGNS(accountId);

  const headers = {
    Authorization: token,
  };

  const res = await axios.get(url, {
    headers,
  });

  return res.data;
};

export const getAdsets = async (camaignId, token) => {
  const url = endpoints.GET_ADSETS(camaignId);

  const headers = {
    Authorization: token,
  };

  const res = await axios.get(url, {
    headers,
  });

  return res.data;
};

export const getAds = async (adsetId, token) => {
  const url = endpoints.GET_ADS(adsetId);

  const headers = {
    Authorization: token,
  };

  const res = await axios.get(url, {
    headers,
  });

  return res.data;
};

export const getInterestStats = async (adId, token) => {
  const url = endpoints.GET_STATS(adId);

  const headers = {
    Authorization: token,
  };

  const res = await axios.get(url, {
    headers,
  });

  return res.data;
};

export const userLogout = async (token) => {
  const url = endpoints.LOG_OUT;

  const headers = {
    Authorization: token,
  };

  const res = await axios.get(url, {
    headers,
  });

  return res.data;
};

export const updateSearchCount = async (token) => {
  const url = endpoints.UPDATE_SEARCH_COUNT;

  const headers = {
    Authorization: token,
  };

  const res = await axios.get(url, { headers });
  return res.data;
};

export const verifyPayment = async (token, plan, ref) => {
  const url = endpoints.VERIFY_PAYMENT;

  const headers = {
    Authorization: token,
  };

  const data = {
    plan,
    ref,
  };

  const res = await axios.post(url, data, { headers });
  return res.data;
};
