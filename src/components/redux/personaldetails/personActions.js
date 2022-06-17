
import {SET_EMAIL, SET_FIRSTNAME, SET_LASTNAME, SET_MOBILENO, SET_UPDATEUSER} from './personTypes';

export const setFirstName = (payload) =>{
    return{
        type : SET_FIRSTNAME,
        payload
    }
}

export const setLastName = (payload) =>{
    return{
        type : SET_LASTNAME,
        payload
    }
}

export const setEmail = (payload) =>{
    return{
        type : SET_EMAIL,
        payload
    }
}

export const setMobileNo = (payload) =>{
    return{
        type : SET_MOBILENO,
        payload
    }
}

export const setUpdateFirstName =  (payload) =>{
    return{
        type : SET_UPDATEUSER,
        payload
    }
}