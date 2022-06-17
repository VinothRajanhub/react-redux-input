
import { SET_SERVICEOPTION, SET_SERVICESELECTVALUE } from './serviceOptionTypes';

export const setServiceOption = (payload) =>{
    return{
        type : SET_SERVICEOPTION,
        payload
    }
}

export const setServiceSelectValue =  (payload) =>{
    return{
        type : SET_SERVICESELECTVALUE,
        payload
    }
}

