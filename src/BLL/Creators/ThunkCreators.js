import {testsAPI, usersAPI} from "../API";
import {testActions, usersActions} from "./ActionCreators";

export const testThunks = {

    getTest: (testId) => async (dispatch) => {
        dispatch(testActions.setIsFetchingSingleTest(true));
        try {
            const res = await testsAPI.getTest(testId)
            dispatch(testActions.setTest(res.data));
            dispatch(testActions.setIsFetchingSingleTest(false));
        } catch (e) {
            console.log(e.message);
        }
    },

    getTests: () => async (dispatch) => {
        try {
            const res = await testsAPI.getTests();
            dispatch(testActions.setTests(res.data));
            dispatch(testActions.setIsFetchingTests(false));
        } catch (e) {
            console.log(e.message)
        }
    },

    postNewTest: (test) => async (dispatch) => {
        try {
            await testsAPI.postTest(test);
            dispatch(testActions.setNewTest(test));
        } catch (e) {
            console.log(e.message)
        }
    }
}

export const usersThunks = {

    getUsers: () => async (dispatch) => {
        dispatch(usersActions.setIsFetchingUsers(true));
        try {
            const res = await usersAPI.getUsers();
            dispatch(usersActions.setUsers(res.data));
            dispatch(usersActions.setIsFetchingUsers(false));
        } catch (e) {
            console.log(e.message)
        }
    },

    postAuthUser: (userData) => async (dispatch) => {
        try {
            await usersAPI.postAuthUser(userData);
            dispatch(usersThunks.getAuthUser());
        } catch (e) {
            console.log(e.message)
        }
    },

    getAuthUser: () => async (dispatch) => {
        try {
            const res = await usersAPI.getAuthUser();
            if (res.data[0]) {
                dispatch(usersActions.setAuthUserData(res.data[0]));
            }
        } catch (e) {
            console.log(e.message)
        }
    },


    deleteAuthUser: (userId) => async (dispatch) => {
        try {
            await usersAPI.deleteAuthUser(userId);
            dispatch(usersActions.logOut(false));
        } catch (e) {
            console.log(e.message)
        }
    },

    updateUser: (userId, data) => async (dispatch) => {
        try {
            const res = await usersAPI.updateUser(userId, data);
            dispatch(usersThunks.updateAuthUser(userId, res.data))
        } catch (e) {
            console.log(e.message)
        }
    },

    updateAuthUser: (useId, data) => async (dispatch) => {
        try {
            const res = await usersAPI.updateAuthUser(useId, data);
            dispatch(usersActions.setAuthUserData(res.data))
        } catch (e) {
            console.log(e.message)
        }
    },

    getUser: (userId) => async (dispatch) => {
        dispatch(usersActions.setIsFetchingUser(true));
        try {
            const res = await usersAPI.getUser(userId);
            dispatch(usersActions.setUser(res.data))
            dispatch(usersActions.setIsFetchingUser(false));
        } catch (e) {
            console.log(e.message)
        }
    }
}