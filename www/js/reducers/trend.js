export const trend = (
    state={
        category: "GrossMargin",
        index: 0
    } ,
    action

) => {

    console.log("handle trend event");
    console.log(action);
    console.log(state);

    switch (action.type) {

        case "TREND_SETUP_DATA":

            return {
                ...state,
                [action.key]:action.data
            };


        case "TREND_CHOOSE_CATEGORY":

            return {
                ...state,
                category: action.category
            };

        case "TREND_CHOOSE_SERIES_INDEX":
            return {
                ...state,
                index: action.index
            };

        default:
            return state;

    }
};


