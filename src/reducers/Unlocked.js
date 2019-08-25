
const Unlocked = (state = {users: ["Joojoo"]
, tokens: 7
}, action) => {
    switch(action.type) {
        case 'ADD_UNLOCKED':
            return {
                users: [...state.users, action.username],
                tokens: state.tokens - 1
            }

        default:
            return state
    }
}



export default Unlocked