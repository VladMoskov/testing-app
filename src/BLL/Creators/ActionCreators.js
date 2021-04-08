export const actionTypes = {
    SET_IS_FETCHING_TESTS: 'tests/SET_IS_FETCHING_TESTS',
    SET_IS_FETCHING_TEST: 'singleTest/SET_IS_FETCHING_TEST',
    SET_IS_FETCHING_USERS: 'users-reducer/SET_ISF_ETCHING',
    SET_IS_FETCHING_USER: 'single-user-reducer/SET_IS_FETCHING_USER',
    SET_RESULT: 'test-progress/SET_RESULT',
    SET_TESTS: 'tests/SET_TESTS',
    ADD_TEST: 'tests/ADD_TEST',
    SET_TEST: 'singleTest/GET_TEST',
    SET_USERS: 'users-reducer/SET_USERS',
    LOG_OUT: 'auth-user/LOG_OUT',
    SET_AUTH_USER_DATA: 'auth-user/SET_AUTH_USER_DATA',
    SET_USER: 'single-user-reducer/SET_USER',
};


export const testActions = {

    setIsFetchingTests: (isFetching) => ({type: actionTypes.SET_IS_FETCHING_TESTS, isFetching}),

    setTest: (test) => ({type: actionTypes.SET_TEST, test}),

    setResult: (result) => ({type: actionTypes.SET_RESULT, result}),

    setNewTest: (test) => ({type: actionTypes.ADD_TEST, test}),

    setTests: (tests) => ({type: actionTypes.SET_TESTS, tests}),

    setIsFetchingSingleTest: (isFetching) => ({type: actionTypes.SET_IS_FETCHING_TEST, isFetching})
}

export const usersActions = {

    setUsers: users => ({type: actionTypes.SET_USERS, users}),

    setIsFetchingUsers: status => ({type: actionTypes.SET_IS_FETCHING_USERS, status}),

    setIsFetchingUser: status => ({type: actionTypes.SET_IS_FETCHING_USER, status}),

    logOut: status => ({type: actionTypes.LOG_OUT, status}),

    setAuthUserData: userData => ({type: actionTypes.SET_AUTH_USER_DATA, userData}),

    setUser: user => ({type:actionTypes.SET_USER, user })
}