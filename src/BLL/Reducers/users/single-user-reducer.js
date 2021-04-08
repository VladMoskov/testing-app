import {actionTypes} from "../../Creators/ActionCreators";

const userReducer = (state = {user: {},isFetching: true}, action) => {

    switch (action.type) {

        case actionTypes.SET_USER:
            return {
                user: action.user
            }

        case actionTypes.SET_IS_FETCHING_USER:
            return {
                ...state,
                isFetching: action.status
            }

        default:
            return {...state}
    }

}

export default userReducer;