import {usersAPI} from "../../API/API";

const LOG_OUT = 'auth-user/LOG_OUT';
const SET_AUTH_USER_DATA = 'auth-user/SET_AUTH_USER_DATA'

const initialState = {
    authUserData: {},
    isAuth: false
}

const authUserReducer = (state = initialState, action) => {

    switch (action.type) {

        case LOG_OUT:
            return {
                isAuth: action.status
            }

        case SET_AUTH_USER_DATA:
            return {
                authUserData: action.userData,
                isAuth: true
            }

        default:
            return {...state}
    }

}

const logOut = (status) => ({type:LOG_OUT, status})
const setAuthUserData = (userData) => ({type: SET_AUTH_USER_DATA, userData})

export const postAuthUser = (userData) => async (dispatch) => {
    try {
        const res = await usersAPI.postAuthUser(userData);
        if (res.status === 200 || res.status === 201)
            dispatch(getAuthUser());
    } catch (e) {
        console.log(e.message)
    }
}

export const getAuthUser = () => async (dispatch) => {
    try {
        const res = await usersAPI.getAuthUser();
        if (res.data[0].email) dispatch(setAuthUserData(res.data[0]));
    } catch (e) {
        console.log(e.message)
    }
}

export const deleteAuthUser = (userId) => async (dispatch) => {
    try {
        await usersAPI.deletAuthUser(userId);
        dispatch(logOut(false));
    } catch (e) {
        console.log(e.message)
    }
}

export default authUserReducer;