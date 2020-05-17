const endpoints = {
  GET_PRODUCTS: (shop) => `${process.env.BASE_URL}shopify/products/${shop}`,
  FB_AUTH: `${process.env.BASE_URL}facebook/auth`,
  FB_INTEREST_SEARCH: (apiVersion) =>
    `https://graph.facebook.com/v${apiVersion}/search`,
  GET_ADACCOUNTS: (fbId) =>
    `${process.env.BASE_URL}facebook/adaccounts/${fbId}`,
  GET_CAMPAIGNS: (accountId) =>
    `${process.env.BASE_URL}facebook/campaigns/${accountId}`,
  GET_ADSETS: (campaignId) =>
    `${process.env.BASE_URL}facebook/adsets/${campaignId}`,
  GET_ADS: (adsetId) => `${process.env.BASE_URL}facebook/ads/${adsetId}`,
  GET_STATS: (adId) => `${process.env.BASE_URL}facebook/stats/${adId}`,
  SIGN_UP: `${process.env.BASE_URL}users/signup`,
  SIGN_IN: `${process.env.BASE_URL}users/signin`,
  LOG_OUT: `${process.env.BASE_URL}users/logout`,
  UPDATE_SEARCH_COUNT: `${process.env.BASE_URL}facebook/count`,
  VERIFY_PAYMENT: `${process.env.BASE_URL}payments/verify`,
};

export default endpoints;
