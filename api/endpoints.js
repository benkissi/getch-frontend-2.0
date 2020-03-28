const endpoints = {
    GET_PRODUCTS: (shop) => `${process.env.BASE_URL}shopify/products/${shop}`,
    FB_AUTH: `${process.env.BASE_URL}facebook/auth`,
    FB_INTEREST_SEARCH: (apiVersion) => `https://graph.facebook.com/v${apiVersion}/search`,
    GET_ADACCOUNTS: (fbId) => `${process.env.BASE_URL}facebook/adaccounts/${fbId}`
}

export default endpoints