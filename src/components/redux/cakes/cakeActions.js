// An action is an object with type property

// It carries a payload of information from your application to store.

// Action Creator defines a function that returns an object


import { BUY_CAKE, ADD_CAKE, SET_CAKE } from "./cakeTypes";

export const buyCake = () =>{
    return{
        type : BUY_CAKE
    }
}

export const addCake = () =>{
    return{
        type : ADD_CAKE
    }
}

export const setCake = (payload) =>{
    return{
        type : SET_CAKE,
        payload
    }
}

