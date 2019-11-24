const initialState = {
    signstate: false
}

const signReducer = (state = initialState, action) => {

    console.log('\n inside signReducer');
    
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