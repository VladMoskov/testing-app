export const actionTypes = {
    SET_TEST: 'singleTest/GET_TEST',
    SET_IS_FETCHING_SINGLE: 'singleTest/SET_IS_FETCHING',
    SET_RESULT: 'test-progress/SET_RESULT',
    GET_TESTS: 'tests/GET_TESTS',
    IS_FETCHING_TESTS: 'tests/IS_FETCHING',
    ADD_TEST: 'tests/ADD_TEST',
    SET_USERS: 'users-reducer/SET_USERS',
    SET_IS_FETCHING_USERS: 'users-reducer/SET_ISF_ETCHING',
    LOG_OUT: 'auth-user/LOG_OUT',
    SET_AUTH_USER_DATA: 'auth-user/SET_AUTH_USER_DATA'
};


export const testActions = {

    setIsFetchingTests: (isFetching) => ({type: actionTypes.IS_FETCHING_TESTS, isFetching}),

    setTest: (test) => ({type: actionTypes.SET_TEST, test}),

    setResult: (result) => ({type: actionTypes.SET_RESULT, result}),

    setNewTest: (test) => ({type: actionTypes.ADD_TEST, test}),

    setTests: (tests) => ({type: actionTypes.GET_TESTS, tests}),

    setIsFetchingSingleTest: (isFetching) => ({type: actionTypes.SET_IS_FETCHING_SINGLE, isFetching})
}

export const usersActions = {

    setUsers: users => ({type: actionTypes.SET_USERS, users}),

    setIsFetching: (status) => ({type: actionTypes.SET_IS_FETCHING_USERS, status}),

    logOut: (status) => ({type: actionTypes.LOG_OUT, status}),

    setAuthUserData: (userData) => ({type: actionTypes.SET_AUTH_USER_DATA, userData})
}