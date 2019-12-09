const initialState = {
    uploaded: false
}
export function uploadReducer(state = initialState, action) {
    switch (action.type) {


        case 'UPLOADED': return { ...state, uploaded: true };
            break;
        default: return state
    }

}

//export default uploadReducer;
