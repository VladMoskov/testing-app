import {actionTypes} from "../../Creators/ActionCreators";

const usersReducer = (state = {users: [],isFetching: true}, action) => {

    switch (action.type) {

        case actionTypes.SET_USERS:
            return {
                ...state,
                users: [...action.users]
            }

        case actionTypes.SET_IS_FETCHING_USERS:
            return {
                ...state,
                isFetching: action.status
            }

        default:
            return {...state}
    }

}

export default usersReducer;