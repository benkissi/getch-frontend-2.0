import SearchActionTypes from './search-types'

export const searchStart = searchParams => ({
    type: SearchActionTypes.START_SEARCH,
    payload: searchParams
})

export const searchSuccess = data => ({
    type: SearchActionTypes.SEARCH_SUCCESS,
    payload: data
})

export const searchFailure = error => ({
    type: SearchActionTypes.SEARCH_FAILURE,
    payload: error
})

export const setInterestCount = count => ({
    type: SearchActionTypes.SET_INTEREST_COUNT,
    payload: count
})

export const isLoading = status => ({
    type: SearchActionTypes.IS_LOADING,
    payload: status
})