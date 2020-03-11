import axios from "axios";

export const FETCHING_ACTIVITY_START = "FETCHING_ACTIVITY_START";
export const FETCHING_ACTIVITY_SUCCESS = "FETCHING_ACTIVITY_SUCCESS";
export const FETCHING_ACTIVITY_FAILURE = "FETCHING_ACTIVITY_FAILURE";

export const fetchActivity = () => dispatch => {
    dispatch({ type: FETCHING_ACTIVITY_START });
    axios
        .get("https://www.boredapi.com/api/activity")
        .then(res => {
            dispatch({ type: FETCHING_ACTIVITY_SUCCESS, payload: res.data });
        })
        .catch(err => {
            dispatch({ type: FETCHING_ACTIVITY_FAILURE, payload: `${err.status.code}: ${err.status.message}`})
        });
}

// What thunk looks like
// const thunk = action => next => store => {
//     if (typeof action === 'function') {
//         action(store.dispatch);
//     } else if (typeof action === 'object') {
//         next(action);
//     }
// }
