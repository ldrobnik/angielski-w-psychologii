import * as actionTypes from './actions';

const initialState = {
  mobile: false,
  pageLoaded: false
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
      case actionTypes.SET_MOBILE:
          return {
              ...state,
              mobile: action.mobile
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