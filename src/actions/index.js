import * as actionTypes from './constants';

//Specifies whether the website is viewed on a mobile device
export const setMobile = (isMobile) => {
    return {
        type: actionTypes.SET_MOBILE,
        isMobile
    }
};

//Specifies whether the spinner or the content should be shown
export const setPageLoaded = (pageLoaded) => {
    return {
        type: actionTypes.SET_PAGE_LOADED,
        pageLoaded
    }
};

//Specifies which section should be indicated as active on the navbar
export const setActiveSection = (activeSection) => {
    return {
        type: actionTypes.SET_ACTIVE_SECTION,
        activeSection
    }
};

//Specifies whether the main page is displayed
export const setMainPage = (mainDisplayed) => {
    return {
        type: actionTypes.SET_MAIN_PAGE,
        mainDisplayed
    }
};

//Specifies the number of fetched blog posts
export const setLoadedPosts = (loadedPosts) => {
    return {
        type: actionTypes.SET_LOADED_POSTS,
        loadedPosts
    }
};
