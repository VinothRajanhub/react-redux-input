import React from "react";

import { connect } from "react-redux";

import {
  setEmail,
  setFirstName,
  setLastName,
  setMobileNo,
  setUpdateFirstName,
} from "../../components/redux/personaldetails/personActions";

import { Link } from 'react-router-dom';

import "./_personaldetails.css";

function PersonalDetails({
  numOfCakes,
  setFirstName,
  setLastName,
  setEmail,
  setMobileNo,
  setUpdateFirstName,
  firstName,
  lastName,
  email,
  mobileNo
}) {
  const enabled =
     firstName.length > 0 && lastName.length > 0 && email.length > 0 && mobileNo.length > 0;

  return (
    <div className="personaldetails">
       <h3 style={{ margin: "7px 5px", paddingTop: "0px" }}>
            1) Personal Information:
          </h3>
      <div className="flex-style" style={{marginTop:"10px"}}>
        <p className="personalfno">First Name:  </p>
        <input
          type="text"
          className="inputstyle"
          onChange={(e) => {
            setFirstName(e.target.value);
          }}
        ></input>
      </div>
      <div className="flex-style">
        <p className="personallno">Last Name:  </p>
        <input
          type="text"
          className="inputstyle"
          onChange={(e) => setLastName(e.target.value)}
        ></input>
      </div>

      <div className="flex-style">
      <p className="personalphone">Phone Number:  </p>
      <input
        type="number"
        className="inputstyle"
        onChange={(e) => setMobileNo(e.target.value)}
      ></input>
      </div>

      <div className="flex-style">
      <p className="personalemail">Email:  </p>
      <input
        type="text"
        className="inputstyle"
        onChange={(e) => setEmail(e.target.value)}
      ></input>
      </div>
      <Link to="/viewprofile">
        <button
          className="usersubmit"
          disabled={!enabled}
        >
          Next Step
        </button>
        </Link>

        <p>
        ------------------------------------------------------------------------------------------------------------------------------------------------------------------
      </p>


      <div className="viewstyle">
        <h3 style={{ margin: "1px 5px" }}>2) Car Details:  </h3>
      </div>
      <p>
        ------------------------------------------------------------------------------------------------------------------------------------------------------------------
      </p>


      <div className="viewstyle">
        <h3 style={{ margin: "1px 5px" }}>3) Service Options: </h3>
        {/* <p>{props.selectedInput}</p> */}
       
      </div>
      <p>
        ------------------------------------------------------------------------------------------------------------------------------------------------------------------
      </p>

      
      <div className="viewstyle">
        <h3 style={{ margin: "1px 5px" }}>4) Appoinment: </h3>
        {/* <p>{props.selectedInput}</p> */}
       
      </div>
          <p>
        ------------------------------------------------------------------------------------------------------------------------------------------------------------------
      </p>
        {/* {numOfCakes}      */}
      
    </div>
  );
}

// selector
const mapStateToprops = (state) => {
  const { firstName, lastName, email, mobileNo } = state.person;
  return {
    // numOfCakes,
    firstName,
    lastName,
    email,
    mobileNo
  };
};

// const mapDispatchToprops = dispatch => {
//     return {
//         buyCake : () => dispatch(buyCake()),
//         addCake : () => dispatch(addCake()),
//         setCake: (payload) => dispatch(setCake(payload))
//     }
// }
// selector

const mapDispatchToprops = (dispatch) => {
  return {
    setFirstName: (payload) => dispatch(setFirstName(payload)), // Dispatch an action
    setLastName: (payload) => dispatch(setLastName(payload)),
    setEmail: (payload) => dispatch(setEmail(payload)),
    setMobileNo: (payload) => dispatch(setMobileNo(payload)),
    setUpdateFirstName: (payload) => dispatch(setUpdateFirstName(payload)),
  };
};

// connect() function connects a React component to a Redux store.

export default connect(mapStateToprops, mapDispatchToprops)(PersonalDetails);
