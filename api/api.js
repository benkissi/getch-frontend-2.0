import axios from "axios";
import endpoints from './endpoints'
import {splitArray} from '../utils/search'

export const fbAuthentication = async (token, id) => {
    const url = endpoints.FB_AUTH
    const params = {
        token,
        id
    }

    const res = await axios.get(url, {
        params
    })

    return res.data
    
}

export const  searchInterest = async (token, keyword, limit = 500) => {
    const url = endpoints.FB_INTEREST_SEARCH(2.11)
    const params = {
        q: keyword,
        type: 'adinterest',
        access_token: token,
        limit
    }
    const res = await axios.get(url, {
        params
    })
    return res.data
}

export const getInterestSuggestions = async (token, keywords, limit = 100) => {
    let interestSuggestions = []
    let response
    const url = endpoints.FB_INTEREST_SEARCH(2.11)
    const params = {
        interest_list : keywords,
        type: 'adinterestsuggestion',
        access_token: token,
        limit: limit
    }
    response = await axios.get(url, {
        params
    })
    interestSuggestions.push(...response.data.data)
    let page = 0;
    while(response.data.paging.next){
        if(page > 5){
            break
        }
        response = await axios.get(response.data.paging.next);
        interestSuggestions.push(...response.data.data);
        page++
    }
    return interestSuggestions
}

export const compileInterestSuggestions = async (token, keywords, limit = 100) => {
    
    if(keywords.length > 200){
        let suggestions = []
        const dataArray = splitArray(keywords, 200)
        for(let i=0; i< dataArray.length; i++){
            suggestions.push(...await getInterestSuggestions(token, dataArray[i], limit))
        }
        return suggestions
    }

    return await getInterestSuggestions(token, keywords, limit)
}

export const getProducts = async (shopName) => {
    const url = endpoints.GET_PRODUCTS(shopName)
    const params = {
        limit: 10
    }
   const res = await axios.get(url, {
        params
    })

    console.log(res.data)
}