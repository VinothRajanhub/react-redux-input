
import { SET_APPOINMENTDATE, SET_APPOINMENTTIME } from './appoinmentTypes';

export const setAppointTime = (payload) =>{
    return{
        type : SET_APPOINMENTTIME,
        payload
    }
}

export const setAppointDate = (payload) =>{
    return{
        type : SET_APPOINMENTDATE,
        payload
    }
}