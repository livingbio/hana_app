export const persist = (
    state={
    } ,
    action

) => {

    switch (action.type) {

        case "PERSIST_SAVE":
            return {
                ...state,
                [action.key]:action.value
            }

        default:
            return state;

    }
};


