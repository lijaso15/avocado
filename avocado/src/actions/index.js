

export const setUserCards = (label, viewing) => {
    return {
        type: 'SET_' + label,
        viewing
    }
}


export const setUserCard = (label, data) => {
    return {
        type: 'SET_' + label,
        data
    }
}



export const setSlideshow = (label, position) => {
    return {
        type: 'SET_' + label,
        position
    }
}