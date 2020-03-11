import {
    FETCHING_ACTIVITY_START,FETCHING_ACTIVITY_SUCCESS, FETCHING_ACTIVITY_FAILURE 
} from "../activities";

const initialState = {
    isLoading: false,
    activity: null,
    error: ""
};

export const reducer = (state = initialState, action) => {
    switch(action.type) {
        case FETCHING_ACTIVITY_START:
            return {
                ...state,
                isLoading: true
            }
        case FETCHING_ACTIVITY_SUCCESS:
            return {
                ...state,
                isLoading: false,
                activity: action.payload
            }
        case FETCHING_ACTIVITY_FAILURE:
            return {
                ...state,
                isLoading: false,
                error: action.payload
            }
        default:
            return state;
    }
};
