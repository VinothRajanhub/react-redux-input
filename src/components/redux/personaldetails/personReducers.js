import { SET_EMAIL, SET_FIRSTNAME, SET_LASTNAME, SET_MOBILENO, SET_UPDATEUSER } from "./personTypes";

const initialState = {
    firstName : '',
    lastName : '',
    email: '',
    mobileNo: ''
}

const personReducer = (state = initialState, action) => {
    const {type, payload = {} } = action;
    switch(type){
      
        case SET_FIRSTNAME : return {
            ...state,
            // ...payload
            firstName: payload       
        }
        case SET_LASTNAME : return {
            ...state,
            lastName: payload       
        }
        case SET_EMAIL : return {
            ...state,
            email: payload       
        }
        case SET_MOBILENO : return {
            ...state,
            mobileNo: payload       
        }
        case SET_UPDATEUSER :
            // console.log(action)
            // return { firstName: action.string }
            return {
                ...state,
                firstName: payload       
            }
        default : return state
    }
}


export default personReducer;