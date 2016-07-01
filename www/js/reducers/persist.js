export const persist = (
    state={
    } ,
    action

) => {

    console.log("handle state event");
    console.log(action);

    switch (action.type) {

        case "PERSIST_SAVE":
            return {
                ...state,
                [action.key]:action.value
            };

        default:
            return state;

    }
};


