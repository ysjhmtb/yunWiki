const initialState = {
    signstate: false
}

const signReducer = (state = initialState, action) => {
    switch(action.type){
        case 'SIGNCHANGE':
            return {
                ...state,
                signstate:!state.signstate
            };
        default:
            return state;
    }
}

export default signReducer;