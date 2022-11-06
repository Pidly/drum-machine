const reducer = (state = 0.2, action) => {
    switch(action.type) {
        case 'VOLUME':
            return action.volume;
        default:
            return state;
    }
}

export default reducer;