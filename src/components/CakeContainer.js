import React, { useState } from "react";

import {connect} from "react-redux";

import { buyCake, addCake, setCake } from "../components/redux/cakes/cakeActions";


function CakeContainer(
    { buyCake, addCake, setCake, numOfCakes, firstName, lastName, email, mobileNo }
){

    return(
        <div>
            <h2>Number of Cakes - {numOfCakes}</h2>
            <button onClick={buyCake}>Subtract</button>
           
            <button onClick={addCake}>Add</button>
            <input type="number" onKeyUp={(e) => {
                setCake(e.target.value)
            }} />        

        </div>
    )
}



// selector
const mapStateToprops = state => {
    const { numOfCakes, firstName, lastName, mobileNo, email } = state 
    return {
        numOfCakes,
        firstName,
        lastName,
        mobileNo,
        email
    }
}

const mapDispatchToprops = dispatch => {
    return {
        buyCake : () => dispatch(buyCake()),
        addCake : () => dispatch(addCake()),
        setCake: (payload) => dispatch(setCake(payload))
    }
}

// connect() function connects a React component to a Redux store.

export default connect(mapStateToprops,mapDispatchToprops)(CakeContainer);