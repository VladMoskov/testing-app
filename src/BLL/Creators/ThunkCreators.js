import {testsAPI, usersAPI} from "../API/API";
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

    getTests : () => async (dispatch) => {
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
        }catch (e) {
            console.log(e.message)
        }
    }
}

export const usersThunks = {

    getUsers: () => async (dispatch) => {
        dispatch(usersActions.setIsFetching(true));
        try {
            const res = await usersAPI.getUsers();
            dispatch(usersActions.setUsers(res.data));
            dispatch(usersActions.setIsFetching(false));
        } catch (e) {
            console.log(e.message)
        }
    },

    postAuthUser: (userData) => async (dispatch) => {
        try {
            const res = await usersAPI.postAuthUser(userData);
            if (res.status === 200 || res.status === 201) {
                dispatch(usersThunks.getAuthUser());
            }
        } catch (e) {
            console.log(e.message)
        }
    },

    getAuthUser: () => async (dispatch) => {
        try {
            const res = await usersAPI.getAuthUser();
            if (res.data[0].email) {
                dispatch(usersActions.setAuthUserData(res.data[0]));
            }
        } catch (e) {
            console.log(e.message)
        }
    },


    deleteAuthUser: (userId) => async (dispatch) => {
        try {
            await usersAPI.deletAuthUser(userId);
            dispatch(usersActions.logOut(false));
        } catch (e) {
            console.log(e.message)
        }
    }
}