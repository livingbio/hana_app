export const navigation = (state={page:'login'}, action) => {

    console.log("handle page event");
    console.log(action.page);
    console.log(action.type);

    switch (action.type) {

        case "PAGE_NAVIGATION":

            return {
                page: action.page
            };


        default:
            return state;

    }
};
