export const saveToStore = ({key, value}) => {
    return {
        type: "PERSIST_SAVE",
        key,value
    }
};

