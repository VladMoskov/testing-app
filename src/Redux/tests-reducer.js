import {testsAPI} from "../API/API";

const GET_TESTS = 'testsPage/GET_TESTS';
const IS_FETCHING = 'testsPage/IS_FETCHING';
const ADD_TEST = 'testsPage/ADD_TEST';

let initialState = {
    tests: [],
    isFetching: true
}

const testsReducer = (state = initialState, action) => {

    switch (action.type) {
        case GET_TESTS:
            return {
                ...state,
                tests: [...action.tests]
            }

        case IS_FETCHING:
            return {
                ...state,
                isFetching: action.isFetching
            }

        case ADD_TEST:
            return {
                ...state,
                tests: [...state.tests, action.test]
            }

        default:
            return state;
    }
}

const setNewTest = (test) => ({type: ADD_TEST, test});
const setTests = (tests) => ({type: GET_TESTS, tests});
export const setIsFetching = (isFetching) => ({type: IS_FETCHING, isFetching})

export const getTests = () => async (dispatch) => {
    try {
        const res = await testsAPI.getTests();
        dispatch(setTests(res.data));
        dispatch(setIsFetching(false));
    } catch (e) {
        console.log(e.message)
    }
}

export const postNewTest = (test) => async (dispatch) => {
    try {
        await testsAPI.postTest(test);
        dispatch(setNewTest(test));
    }catch (e) {
        console.log(e.message)
    }
}

export default testsReducer;