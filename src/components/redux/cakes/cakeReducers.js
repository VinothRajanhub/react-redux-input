import { BUY_CAKE, ADD_CAKE, SET_CAKE } from "./cakeTypes";

const initialState = {
    numOfCakes : 10
}

const cakeReducer = (state = initialState, action) => {
    const {type, payload = {} } = action;
    switch(type){
        case BUY_CAKE : return {
            ...state,
            numOfCakes : state.numOfCakes - 1 
        }
        case ADD_CAKE : return {
            ...state,
            numOfCakes : state.numOfCakes + 1
        }
        case SET_CAKE : return {
            ...state,
            // ...payload
            numOfCakes: payload       
        }
        default : return state
    }
}


export default cakeReducer;