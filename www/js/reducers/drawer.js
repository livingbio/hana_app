export const drawer = (
    state={
        open: false
    } ,
    action

) => {

    console.log("handle drawer event");
    console.log(action);
    console.log(state);

    switch (action.type) {

        case "DRAWER_SETUP_OPEN":
            return {
                ...state,
                open: action.open
            };
        case "DRAWER_TOGGLE_OPEN":
            return {
                ...state,
                open: !state.open
            };
        default:
            return state;

    }
};


