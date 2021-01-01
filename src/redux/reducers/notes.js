const initialState = {
    currentInput: '',
    items: [],
}



const notes = (state = initialState, action) => {
    switch (action.type) {
        case 'SET_CURRENT_INPUT':
            return {
                ...state,
                currentInput: action.payload,
            }
        case 'SET_ITEM':
            return {
                ...state,
                items: action.payload,
                currentInput: '',
                showAlert: true,
            }

        default: return state
    }
}


export default notes;