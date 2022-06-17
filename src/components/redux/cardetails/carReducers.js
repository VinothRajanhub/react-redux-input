import { SET_CARMANUFACTURER, SET_CARMODEL, SET_CARYEAR, SET_UPDATECAR } from "./carTypes";

const initialState = {
    carManufacture : '',
    carModel : '',
    carYear: ''
}

const carReducer = (state = initialState, action) => {
    const {type, payload = {} } = action;
    switch(type){
      
        case SET_CARMANUFACTURER : return {
            ...state,
            // ...payload
            carManufacture: payload       
        }
        case SET_CARMODEL : return {
            ...state,
            carModel: payload       
        }
        case SET_CARYEAR : return {
            ...state,
            carYear: payload       
        }
        case SET_UPDATECAR :
            // console.log(action)
            // return { firstName: action.string }
            return {
                ...state,
                carManufacture: payload       
            }
        default : return state
    }
}


export default carReducer;