import 'isomorphic-fetch';
import * as SERVER_CONST from '../constants/serverConst';

let callApi = (endpoint, fetchOpts) => {
    const fullUrl = endpoint.slice(0,1) == '/' ? SERVER_CONST.API_ROOT + endpoint : endpoint;

    return fetch(fullUrl, fetchOpts)
        .then(response =>
            response.json().then(json => ({
                json, response
            }))
        ).then(({
            json, response
        }) => {
            if (!response.ok) {
                return Promise.reject(json);
            }
            return json;
        });
}

export const CALL_API = Symbol('Call API');

export default ({dispatch, getState}) => next => action => {
    const callAPI = action[CALL_API];
    if (typeof callAPI === 'undefined') {
        return next(action);
    }

    let { endpoint } = callAPI;
    const { types, fetchOpts } = callAPI;

    if (typeof endpoint === 'function') {
        endpoint = endpoint(getState());
    }

    if (typeof endpoint !== 'string') {
        throw new Error('Specify a string endpoint URL.');
    }

    if (!Array.isArray(types) || types.length !== 3) {
        throw new Error('Expected an array of three action types.');
    }
    if (!types.every(type => typeof type === 'string')) {
        throw new Error('Expected action types to be strings.');
    }

    let actionWith = data => {
        const finalAction = Object.assign({}, action, data);
        delete finalAction[CALL_API];
        return finalAction;
    }

    const [requestType, successType, failureType] = types;
    next(actionWith({
        type: requestType
    }));

    return callApi(endpoint, fetchOpts).then(
        response => next(actionWith({
            response,
            type: successType
        })),
        error => next(actionWith({
            type: failureType,
            error: error.message || 'Something bad happened'
        }))
    )
}
