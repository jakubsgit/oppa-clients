import * as actionTypes from './actions'

const initialState = {
    name: "Jakub",
    surname: "",
    isAutenth: false,
};

const reducer = (state = initialState, action) => {
    switch ( action.type ) {
        case actionTypes.ADD_CLIENT:
            const newClient = {
                ...action.clientName
            }
            return {
                ...state,
                name: state.name.concat()
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

