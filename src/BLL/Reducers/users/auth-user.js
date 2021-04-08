import {actionTypes} from "../../Creators/ActionCreators";

const authUserReducer = (state = {authUserData: {},isAuth: false}, action) => {

    switch (action.type) {

        case actionTypes.LOG_OUT:
            return {
                isAuth: action.status
            }

        case actionTypes.SET_AUTH_USER_DATA:
            return {
                authUserData: action.userData,
                isAuth: true
            }

        default:
            return {...state}
    }

}

export default authUserReducer;