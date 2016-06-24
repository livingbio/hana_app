export const trend = (state={}, action) => {

    console.log("handle trend event");
    console.log(action);
    console.log(state);

    switch (action.type) {

        case "TREND_SETUP_YEAR_DATA":

            return {
                ...state,
                [action.key]:action.data
            };


        default:
            return state;

    }
};
