
import {SET_CARMANUFACTURER, SET_CARMODEL, SET_CARYEAR, SET_UPDATECAR} from './carTypes';

export const setCarManufacture = (payload) =>{
    return{
        type : SET_CARMANUFACTURER,
        payload
    }
}

export const setCarModel = (payload) =>{
    return{
        type : SET_CARMODEL,
        payload
    }
}

export const setCarYear = (payload) =>{
    return{
        type : SET_CARYEAR,
        payload
    }
}

export const setUpdateCar =  (payload) =>{
    return{
        type : SET_UPDATECAR,
        payload
    }
}