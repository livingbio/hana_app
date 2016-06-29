
export const setupDrawer= ({open}) => {
    return {
        type: "DRAWER_SETUP_OPEN",
        open
    }
};

export const toggleDrawer= () => {
    return {
        type: "DRAWER_TOGGLE_OPEN"
    }
};
