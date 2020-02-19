import * as actionTypes from '../actions/constants';

const initialState = {
    isMobile: false,
    pageLoaded: false
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.SET_MOBILE:
            return {
                ...state,
                isMobile: action.isMobile
            };
        case actionTypes.SET_PAGE_LOADED:
            return {
                ...state,
                pageLoaded: action.pageLoaded
            };
        default:
            return state;
    }
};

export default reducer;