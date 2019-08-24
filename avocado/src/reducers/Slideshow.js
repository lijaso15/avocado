

const Slideshow = (state = {
    position: 0
}, action) => {

    switch(action.type) {
        case 'SET_POSITION':
            return {...state, position: action.position}

        default:
            return state
    }





}




export default Slideshow