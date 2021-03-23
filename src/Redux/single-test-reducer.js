import {testsAPI} from "../API/API";

const SET_TEST = 'GET_TEST';
const SET_IS_FETCHING = 'SET_IS_FETCHING';

let initialState = {
    id: null,
    name: null,
    questions: null,
    description: null,
    answers: null,
    isFetching: false
}

const singleTestReducer = (state = initialState, action) => {

    switch (action.type) {

        case SET_TEST:
            return {
                ...state,
                ...action.test
            }

        case SET_IS_FETCHING:
            return {
                ...state,
                isFetching: !state.isFetching
            }

        default:
            return state;
    }
}

const setTest = (test) => ({type: SET_TEST, test});
const setIsFetching = () => ({type: SET_IS_FETCHING});

export const getTest = (testId) => async (dispatch) => {
    dispatch(setIsFetching());
    try {
        const res = await testsAPI.getTest(testId)
        dispatch(setTest(res.data));
        dispatch(setIsFetching());
    } catch (e) {
        console.log(e.message);
    }
}

export default singleTestReducer;