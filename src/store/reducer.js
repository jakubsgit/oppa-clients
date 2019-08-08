import * as actionTypes from './actions'

const initialState = {
    clients: {
        name: '',
        method: '',
        date: '',
        post: '',
    },
    isAutenth: false,
};

const reducer = (state = initialState, action) => {
    switch ( action.type ) {
        case actionTypes.ADD_CLIENT:
            return {
                ...state,
                clients: {
                    ...state.clients,
                    [action.clientAtt]: state.clients[action.clientAtt].inputText,
                }
            };
        case actionTypes.TOGGLE_AUTH:
            return {
                ...state,
                isAutenth: true,
            }
            default:
                return state;
    }
}

export default reducer;

