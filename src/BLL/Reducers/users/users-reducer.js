import {usersAPI} from "../../API/API";

const SET_USERS = 'users-reducer/SET_USERS';
const SET_ISFETCHING = 'users-reducer/SET_ISFETCHING';

const initialState = {
    users: [],
    isFetching: true
}


const usersReducer = (state = initialState, action) => {

    switch (action.type) {

        case SET_USERS:
            return {
                ...state,
                users: [...action.users]
            }

        case SET_ISFETCHING:
            return {
                ...state,
                isFetching: action.status
            }

        default:
            return {...state}
    }

}

const setUsers = users => ({type: SET_USERS, users});
const setIsFetching = (status) => ({type: SET_ISFETCHING, status})

export const getUsers = () => async (dispatch) => {
    dispatch(setIsFetching(true));
    try {
        const res = await usersAPI.getUsers();
        dispatch(setUsers(res.data));
        dispatch(setIsFetching(false));
    } catch (e) {
        console.log(e.message)
    }
}

export default usersReducer;