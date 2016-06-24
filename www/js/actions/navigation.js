import * as dao from "../query";

export const navigateToFilter = () => {
    return {
        type: "PAGE_NAVIGATION",
        page: "filter"
    }
};

export const navigateToTrend = () => {
    return {
        type: "PAGE_NAVIGATION",
        page: "trend"
    }
};

export const navigateToLogin= () => {
    return {
        type: "PAGE_NAVIGATION",
        page: "login"
    }
};


