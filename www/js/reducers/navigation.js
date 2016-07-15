export const navigation = (state={page:'login'}, action) => {

    switch (action.type) {

        case "PAGE_NAVIGATION":

            return {
                page: action.page
            };


        default:
            return state;

    }
};
