import {actionTypes} from "../../Creators/ActionCreators";


const testsReducer = (state = {isFetching: true}, action) => {

    switch (action.type) {
        case actionTypes.GET_TESTS:
            return {
                ...state,
                tests: [...action.tests]
            }

        case actionTypes.IS_FETCHING_TESTS:
            return {
                ...state,
                isFetching: action.isFetching
            }

        case actionTypes.ADD_TEST:
            return {
                ...state,
                tests: [...state.tests, action.test]
            }

        default:
            return state;
    }
}

export default testsReducer;