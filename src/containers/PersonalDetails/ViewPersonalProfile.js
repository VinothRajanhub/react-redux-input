import React from "react";

import { connect } from "react-redux";

import {
  setEmail,
  setFirstName,
  setLastName,
  setMobileNo
} from "../../components/redux/personaldetails/personActions";

import CarDetails from "../CarDetails/CarDetails";

function ViewPersonalProfile(
  props,
  setFirstName,
  setLastName,
  setEmail,
  setMobileNo,
  firstName,
  lastName,
  mobileNo,
  email
) {

  const enabled =
  props.firstName.length > 0 && props.lastName.length > 0 && props.email.length > 0 && props.mobileNo.length > 0;

  function showhide() {
   
    if (document.getElementById("updatepersonaldetails").style.display !== "block") {
      document.getElementById("updatepersonaldetails").style.display = "block";
      document.getElementById("viewprofile").style.display = "none";   
      document.getElementById("editLink").style.display = "none";  
      document.getElementById("cardetails").style.display = "none";        
    } else {
      document.getElementById("updatepersonaldetails").style.display = "none";
      document.getElementById("viewprofile").style.display = "block"; 
      document.getElementById("editLink").style.display = "block";  
      document.getElementById("cardetails").style.display = "block";     
    }
  }


  return (
    <div style={{ paddingTop: "0px", marginTop: "5px" }}>
      <p className="editstyle" id="editLink" onClick={showhide}>
        Edit
      </p>
      <div className="viewstyle">
        <h3 style={{ margin: "0px 5px", paddingTop: "0px" }}>
          1) Personal Information
        </h3>
        <p id="viewprofile" style={{ margin: "3px 7px"}}>
          {props.firstName},&nbsp;
          {props.lastName},&nbsp;
          {props.mobileNo},&nbsp;
          {props.email}
        </p>
      </div>

      <div id="updatepersonaldetails" style={{display:"none"}}>
        <h3 style={{ margin: "15px", paddingTop: "20px" }}>
          Update Personal Information
        </h3>
        <div className="flex-style">
          <p className="personalfno">First Name: </p>
          <input
            type="text"
            value={props.firstName}
            className="inputstyle"
            onChange={(e) => {
              props.setFirstName(e.target.value);
            }}
          ></input>
        </div>
        <div className="flex-style">
          <p className="personallno">Last Name: </p>
          <input
            type="text"
            className="inputstyle"
            value={props.lastName}
            onChange={(e) => props.setLastName(e.target.value)}
          ></input>
        </div>

        <div className="flex-style">
          <p className="personalphone">Phone Number: </p>
          <input
            type="number"
            className="inputstyle"
            value={props.mobileNo}
            onChange={(e) => props.setMobileNo(e.target.value)}
          ></input>
        </div>

        <div className="flex-style">
          <p className="personalemail">Email: </p>
          <input
            type="text"
            className="inputstyle"
            value={props.email}
            onChange={(e) => props.setEmail(e.target.value)}
          ></input>
        </div>

          <button
            className="usersubmit"
            disabled={!enabled}
            onClick={showhide}
          >
            Update
          </button>
          
      </div>

      <p>
        -------------------------------------------------------------------------------------------------------------------------------------------------------------------
      </p>
      <div className="nextsection">
        <h3 style={{ margin: "3px" }}>2) Car Details: </h3>
        <div id="cardetails">
          <CarDetails />
        </div>
      </div>
    
      <p>
        -------------------------------------------------------------------------------------------------------------------------------------------------------------------
      </p>

      <div className="viewstyle" >
        <h3 style={{margin: "10px 5px"}}>3) Service Options: </h3>
        {/* <p>{props.selectedInput}</p> */}
       
      </div>
      <p>
        -------------------------------------------------------------------------------------------------------------------------------------------------------------------
      </p>

      
      <div className="viewstyle">
        <h3 style={{ margin: "1px 5px" }}>4) Appoinment: </h3>
        {/* <p>{props.selectedInput}</p> */}
       
      </div>
          <p>
        -------------------------------------------------------------------------------------------------------------------------------------------------------------------
      </p>
    </div>
  );
}

const mapStateToprops = (state) => {
  const { numOfCakes, firstName, lastName, mobileNo, email } = state.person;
  return {
    // numOfCakes,
    firstName,
    lastName,
    mobileNo,
    email,
    // carManufacture, carModel, carYear
  };
};

const mapDispatchToprops = (dispatch) => {
  return {
    setFirstName: (payload) => dispatch(setFirstName(payload)), // Dispatch an action
    setLastName: (payload) => dispatch(setLastName(payload)),
    setEmail: (payload) => dispatch(setEmail(payload)),
    setMobileNo: (payload) => dispatch(setMobileNo(payload))
  };
};

// connect() function connects a React component to a Redux store.
export default connect(
  mapStateToprops,
  mapDispatchToprops
)(ViewPersonalProfile);
