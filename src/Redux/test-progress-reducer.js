const SET_RESULT = 'test-progress-reducer/SET_RESULT';

let initialState = {

}

const testProgressReducer = (state = initialState, action) => {

    switch (action.type) {

        case SET_RESULT:
            return {
                result: action.result
            }

        default:
            return state;
    }
}

export const setResult = (result) => ({type: SET_RESULT, result})

export default testProgressReducer;