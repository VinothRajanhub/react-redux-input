import { SET_SERVICEOPTION, SET_SERVICESELECTVALUE } from "./serviceOptionTypes";

const initialState = {
    selectedInput : [],
    multiselectedInput: ''
}

const serviceOptionReducers = (state = initialState, action) => {
    const {type, payload = {} } = action;
    
    switch(type){  
        case SET_SERVICEOPTION : return {
            ...state,
            // ...payload
            selectedInput: payload       
        }
        case SET_SERVICESELECTVALUE:  return {
            ...state,
            // ...payload
            multiselectedInput: payload       
        }
        default : return state
    }
}


export default serviceOptionReducers;