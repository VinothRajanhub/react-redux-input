import React from "react";

import { connect } from "react-redux";
// import { Link } from "react-router-dom";
import ServiceOption from "../ServiceOption/ServiceOption";

import {
  setEmail,
  setFirstName,
  setLastName,
  setMobileNo,
  setUpdateFirstName,
} from "../../components/redux/personaldetails/personActions";

import {
  setCarManufacture,
  setCarModel,
  setCarYear,
  setUpdateCar,
} from "../../components/redux/cardetails/carActions";

function ViewCarDetail(props) {

  const carEnabled =
  props.carManufacture.length > 0 && props.carModel.length > 0 && props.carYear.length > 0;

  const enabled =
  props.firstName.length > 0 && props.lastName.length > 0 && props.email.length > 0 && props.mobileNo.length > 0;

  function showcarhide() {
   
    if (document.getElementById("updatecardetails").style.display !== "block") {

      document.getElementById("updatecardetails").style.display = "block";
      document.getElementById("updatepersonaldetails").style.display = "none";
      
      // document.getElementById("viewprofile").style.display = "none"; 
      document.getElementById("viewcarprofile").style.display = "none"; 
      
      document.getElementById("editLink").style.display = "none";
      document.getElementById("editCarLink").style.display = "none";  

      document.getElementById("servicedetails").style.display = "none"; 
      
    } else {
      document.getElementById("updatecardetails").style.display = "none";
      document.getElementById("updatepersonaldetails").style.display = "none";

      document.getElementById("viewprofile").style.display = "block";   
      document.getElementById("viewcarprofile").style.display = "block"; 
      
      document.getElementById("editLink").style.display = "block"; 
      document.getElementById("editCarLink").style.display = "block";  

      document.getElementById("servicedetails").style.display = "block";     
    }
  }

  function showprofilehide(){

    if (document.getElementById("updatepersonaldetails").style.display !== "block") {
      document.getElementById("updatepersonaldetails").style.display = "block";
      document.getElementById("viewprofile").style.display = "none";   
      document.getElementById("editLink").style.display = "none";  
      document.getElementById("servicedetails").style.display = "none";        
    } else {
      document.getElementById("updatepersonaldetails").style.display = "none";
      document.getElementById("viewprofile").style.display = "block"; 
      document.getElementById("editLink").style.display = "block";  
      document.getElementById("servicedetails").style.display = "block";     
    }

  }

  return (
    <div style={{ paddingTop: "0px", marginTop: "7px" }}>
  
        <p className="editstyle" id="editLink" onClick={showprofilehide}>Edit</p>
        
      <div className="viewstyle">
        <h3 style={{ margin: "0px 7px", paddingTop: "0px" }}>
          1) Personal Information:
        </h3>
        <p style={{ margin: "5px 9px", paddingTop: "0px" }} id="viewprofile">
          {props.firstName},&nbsp;
          {props.lastName},&nbsp;
          {props.mobileNo},&nbsp;
          {props.email}
        </p>
      </div>

      <div id="updatepersonaldetails" style={{display:"none"}}>
        <h3 style={{ margin: "8px", paddingTop: "0px" }}>
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
            onClick={showprofilehide}
          >
            Update
          </button>
          
      </div>

      <p>
        -------------------------------------------------------------------------------------------------------------------------------------------------------------------
      </p>

      <p className="editstyle" id="editCarLink"  onClick={showcarhide}>Edit</p>

      <div className="viewstyle">
        <h3 style={{ margin: "5px 5px", paddingTop: "0px" }}>2) Car Details:</h3>
        <p id="viewcarprofile" style={{ margin: "0px 5px"}}>
          {props.carManufacture}&nbsp;
          {props.carModel}&nbsp;
          {props.carYear}
        </p>
      </div>

      {/* Update Car Details */}

      <div id="updatecardetails" style={{display:"none"}}>
        <h3 style={{ margin: "15px", paddingTop: "20px" }}>
          Update Car Details
        </h3>

        <div className="flex-style">
          <p className="carmanufacture">Manufacturer: </p>
          <input
            type="text"
            className="updateinputstyle"
            onChange={(e) => {
              props.setCarManufacture(e.target.value);
            }}
            value={props.carManufacture}
          ></input>
        </div>
        <div className="flex-style">
          <p className="carmodel">Model: </p>
          <input
            type="text"
            className="updateinputstyle"
            value={props.carModel}
            onChange={(e) => props.setCarModel(e.target.value)}
          ></input>
        </div>

        <div className="flex-style">
          <p className="caryear">Year: </p>
          <input
            type="number"
            className="updateinputstyle"
            value={props.carYear}
            onChange={(e) => props.setCarYear(e.target.value)}
          ></input>
        </div>

        <button className="updatecarsubmit" 
         disabled={!carEnabled}
         onClick={showcarhide}
        >Update</button>
      </div>

      <p>
        -------------------------------------------------------------------------------------------------------------------------------------------------------------------
      </p>
      <div className="nextsection">
        <h3 style={{ margin: "3px" }}>3) Service Options: </h3>
        <div id="servicedetails">
          <ServiceOption />
        </div>        
      </div>
      <p>
        -------------------------------------------------------------------------------------------------------------------------------------------------------------------
      </p>

      <div className="nextsection">
        <h3 style={{ margin: "3px" }}>4) Appoinment: </h3>
      </div>
      <p>
        -------------------------------------------------------------------------------------------------------------------------------------------------------------------
      </p>

    </div>
  );
}

const mapStateToprops = (state) => {
  const { carManufacture, carModel, carYear } = state.car;
  return {
    // numOfCakes,
    // firstName
    // lastName,
    // mobileNo,
    // email,
    carManufacture,
    carModel,
    carYear,
    firstName: state.person.firstName,
    lastName: state.person.lastName,
    mobileNo: state.person.mobileNo,
    email: state.person.email,
  };
};

const mapDispatchToprops = (dispatch) => {
  return {
    setCarManufacture: (payload) => dispatch(setCarManufacture(payload)), // Dispatch an action
    setCarModel: (payload) => dispatch(setCarModel(payload)),
    setCarYear: (payload) => dispatch(setCarYear(payload)),
    setUpdateCar: (payload) => dispatch(setUpdateCar(payload)),
    setFirstName: (payload) => dispatch(setFirstName(payload)), // Dispatch an action
    setLastName: (payload) => dispatch(setLastName(payload)),
    setEmail: (payload) => dispatch(setEmail(payload)),
    setMobileNo: (payload) => dispatch(setMobileNo(payload))
  };
};

export default connect(mapStateToprops, mapDispatchToprops)(ViewCarDetail);
