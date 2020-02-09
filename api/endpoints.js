const endpoints = {
    GET_PRODUCTS: (shop) => `http://localhost:8080/shopify/products/${shop}`,
    FB_AUTH: `http://localhost:8080/facebook/auth`,
    FB_INTEREST_SEARCH: (apiVersion) => `https://graph.facebook.com/v${apiVersion}/search`
}

export default endpoints