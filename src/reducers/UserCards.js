
const UserCards = (state = {
    isViewing: true
}, action) => {
    switch(action.type) {
        case 'SET_VIEWING':
            return {...state, isViewing: action.viewing}
        default:
            return state
    }
}

export default UserCards