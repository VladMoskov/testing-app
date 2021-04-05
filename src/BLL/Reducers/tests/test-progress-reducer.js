import {actionTypes} from "../../Creators/ActionCreators";

const testProgressReducer = (state = {result: null}, action) => {

    switch (action.type) {

        case actionTypes.SET_RESULT:
            return {
                result: action.result
            }

        default:
            return state;
    }
}

export default testProgressReducer;