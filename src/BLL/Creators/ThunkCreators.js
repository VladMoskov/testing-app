import {testsAPI} from "../API/API";
import {testActions} from "./ActionCreators";

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