export const actionTypes = {
    SET_TEST: 'singleTest/GET_TEST',
    SET_IS_FETCHING_SINGLE: 'singleTest/SET_IS_FETCHING',
    SET_RESULT: 'test-progress/SET_RESULT',
    GET_TESTS: 'tests/GET_TESTS',
    IS_FETCHING_TESTS: 'tests/IS_FETCHING',
    ADD_TEST: 'tests/ADD_TEST'
};


export const testActions = {

    setIsFetchingTests: (isFetching) => ({type: actionTypes.IS_FETCHING_TESTS, isFetching}),

    setTest: (test) => ({type: actionTypes.SET_TEST, test}),

    setResult: (result) => ({type: actionTypes.SET_RESULT, result}),

    setNewTest: (test) => ({type: actionTypes.ADD_TEST, test}),

    setTests: (tests) => ({type: actionTypes.GET_TESTS, tests}),

    setIsFetchingSingleTest: (isFetching) => ({type: actionTypes.SET_IS_FETCHING_SINGLE, isFetching})
}