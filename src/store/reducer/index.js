import { combineReducers } from 'redux';
import authReducer from './auth_reducer';
import appReducer from './app_reducer';

export default combineReducers({
    auth: authReducer,
    app: appReducer
})