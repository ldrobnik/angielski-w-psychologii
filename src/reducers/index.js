import * as actionTypes from '../actions/constants';

const initialState = {
    isMobile: false,
    pageLoaded: false,
    activeSection: '',
    mainDisplayed: true
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
        case actionTypes.SET_ACTIVE_SECTION:
            return {
                ...state,
                activeSection: action.activeSection
            };
        case actionTypes.SET_MAIN_PAGE:
            return {
                ...state,
                mainDisplayed: action.mainDisplayed
            };
        default:
            return state;
    }
};

export default reducer;