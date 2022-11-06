const reducer = (state = "default", action) => {
    switch(action.type) {
        case 'INFO':
            return action.info;
        default:
            return state;
    }
}

export default reducer;