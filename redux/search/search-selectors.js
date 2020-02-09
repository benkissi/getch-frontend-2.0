export const selectInterestTotal = state => {
    return state.search.interests.reduce((accumulator, item) => {
        return accumulator + 1
    },0)
}