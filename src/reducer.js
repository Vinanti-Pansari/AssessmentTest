import { combineReducers } from 'redux';
import { AppNavigator } from "./navigator/Root";
import fetchUserRecords from './modules/fetchUserRecoeds';



function nav(state, action){
    const newState = AppNavigator.router.getStateForAction(action, state);
    return newState || state;
}

const AppReducer = combineReducers({
    nav,
    fetchUserRecords
});

export default AppReducer;