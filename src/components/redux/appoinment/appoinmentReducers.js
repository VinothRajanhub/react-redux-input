import { SET_APPOINMENTDATE, SET_APPOINMENTTIME } from "./appoinmentTypes";

const initialState = {
    appoinmentDate : '',
    appoinmentTime : ''
}

const appoinmentReducer = (state = initialState, action) => {
    const {type, payload = {} } = action;
    switch(type){
      
        case SET_APPOINMENTDATE : return {
            ...state,
            // ...payload
            appoinmentDate: payload       
        }
        case SET_APPOINMENTTIME : return {
            ...state,
            appoinmentTime: payload       
        }
        default : return state
    }
}


export default appoinmentReducer;