const initialState = {
    searchTerm: ''
};

function searchReducer(state = initialState, action) {
    switch (action.type) {
        case 'SEARCH': return {  ...state, searchTerm: action.searchTerm}
        default: return state;
    }
};

export default searchReducer;