
const UserCard = (state = {
    photos: [],
    username: '',
    description: ''
}, action) => {

    switch(action.type) {
        case 'SET_CURRENTLY_VIEWING':
            return action.data
        default:
            return state
    }
}



export default UserCard