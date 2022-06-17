import { combineReducers } from 'redux';
import appoinmentReducer from './appoinment/appoinmentReducers';

import carReducer from './cardetails/carReducers';
import personReducer from './personaldetails/personReducers';
import serviceOptionReducers from './serviceappoinment/serviceOptionReducers';

const rootReducer = combineReducers({
	person: personReducer,
	car: carReducer,
	appoinment: appoinmentReducer,
	service: serviceOptionReducers
})

export default rootReducer;