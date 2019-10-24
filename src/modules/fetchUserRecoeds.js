import Axios from 'axios';
import apiEndPoint from '../utility/apiEndPoint';
import ActionTypes from '../utility/actionType';
import Config from '../utility/config';

export function fetchUserRecords(){
    return (dispatch) => {
        const config = {
            headers: {
                'X-API-Key': Config.API_KEY
            }
        };
        dispatch({
            error: null,
            userRecords: [],
            type: ActionTypes.FETCH_USER_RECORD_REQUEST
        });
        Axios.get(`${apiEndPoint.USER_RECORDS}`, config).then(res =>{
            console.log('res', res)
            dispatch({
                error: null,
                userRecords: res,
                type: ActionTypes.FETCH_USER_RECORD_SUCCESS
            });
        })
            .catch(error => {
                dispatch({
                    error: error,
                    userRecords: [],
                    type: ActionTypes.FETCH_USER_RECORD_ERROR
                });
            })
    }
}

export default function reducer(state = {
    fetching: false,
    userRecords: []
}, action) {

    switch (action.type) {
        case ActionTypes.FETCH_USER_RECORD_REQUEST: {
            return {
                ...state,
                fetching: true
            }
        }
        case ActionTypes.FETCH_USER_RECORD_SUCCESS: {
            return {
                ...state,
                fetching: false,
                userRecords: action.userRecords
            }
        }
        case ActionTypes.FETCH_USER_RECORD_ERROR: {
            return {
                ...state,
                fetching: false,
                error: action.error
            }
        }
        default: {
            return state;
        }
    }
}