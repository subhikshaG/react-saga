export const API_REQUEST = 'API_REQUEST';
export const API_SUCCESS = 'API_SUCCESS';
export const API_FAILURE = 'API_FAILURE';
export const API_LOADING = 'API_LOADING';

console.log("action");
//export const apiRequest = () => ({ type: API_REQUEST });
//export const apiSuccess = payload => ({ type: API_SUCCESS, payload });
export const apiFailure = error => ({ type: API_FAILURE, error });

export function apiRequest() {
    console.log("api action")
    return { type: API_REQUEST }
}

export function apiSuccess(payload) {
    console.log("api success action")
    return { type: API_SUCCESS, payload }
}

export function apiLoading(loading) {
    console.log("loading")
    return { type: API_LOADING, loading }
}