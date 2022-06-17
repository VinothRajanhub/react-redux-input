import React,{ useEffect } from "react";

import { connect } from "react-redux";
// import { Link } from "react-router-dom";
// import ServiceOption from "../ServiceOption/ServiceOption";

import Appoinment from "../Appoinment/Appoinment";

import { setServiceOption } from "../../components/redux/serviceappoinment/serviceOptionAction";

import {
  setEmail,
  setFirstName,
  setLastName,
  setMobileNo,
} from "../../components/redux/personaldetails/personActions";

import {
  setCarManufacture,
  setCarModel,
  setCarYear,
  setUpdateCar,
} from "../../components/redux/cardetails/carActions";

function ViewServiceOption(props) {

  const [updateselectedInput, setupdateSelectedInput] = React.useState(
    props.selectedInput
  );

  console.log(props.selectedInput);

  let pattern1 = "Engine";
  let pattern2 = "Air";
  let pattern3 = "Tire";
  let pattern4 = "Brake";
  let pattern5 = "battery";

  let matching1 = updateselectedInput.filter((a) => a.indexOf(pattern1) >= 0);
  console.log(matching1);
  let matching2 = updateselectedInput.filter((a) => a.indexOf(pattern2) >= 0);
  let matching3 = updateselectedInput.filter((a) => a.indexOf(pattern3) >= 0);
  let matching4 = updateselectedInput.filter((a) => a.indexOf(pattern4) >= 0);
  let matching5 = updateselectedInput.filter((a) => a.indexOf(pattern5) >= 0);

  const handlesetupdateServiceOption = (e) => {
    const targtValue = e.currentTarget.value;
    setupdateSelectedInput((prev) =>
      prev.some((data) => data === targtValue)
        ? prev.filter((data) => data !== targtValue)
        : [...prev, targtValue]
    );

  };

  useEffect(() => {
    props.setServiceOption(updateselectedInput);
  }, [updateselectedInput]);

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
      
    } else {
      document.getElementById("updatecardetails").style.display = "none";
      document.getElementById("updatepersonaldetails").style.display = "none";

      document.getElementById("viewprofile").style.display = "block";   
      document.getElementById("viewcarprofile").style.display = "block"; 
      
      document.getElementById("editLink").style.display = "block"; 
      document.getElementById("editCarLink").style.display = "block";  
    
    }
  }

  function showprofilehide(){

    if (document.getElementById("updatepersonaldetails").style.display !== "block") {
      document.getElementById("updatepersonaldetails").style.display = "block";
      document.getElementById("viewprofile").style.display = "none";   
      document.getElementById("editLink").style.display = "none";  

    } else {
      document.getElementById("updatepersonaldetails").style.display = "none";
      document.getElementById("viewprofile").style.display = "block"; 
      document.getElementById("editLink").style.display = "block";  
    }

  }


  function showservicehide(){

    if (document.getElementById("updateservicedetail").style.display !== "block") {
      
      document.getElementById("updateservicedetail").style.display = "block";
      document.getElementById("updatecardetails").style.display = "none";
      document.getElementById("updatepersonaldetails").style.display = "none";
      
      // document.getElementById("viewprofile").style.display = "none"; 
      // document.getElementById("viewcarprofile").style.display = "none";
      document.getElementById("viewserviceprofile").style.display = "none"; 
      
      document.getElementById("editLink").style.display = "none";
      document.getElementById("editCarLink").style.display = "none";
      document.getElementById("editServiceLink").style.display = "none";  

      document.getElementById("appoinmentdetails").style.display = "none"; 
      
    } else {
      document.getElementById("updateservicedetail").style.display = "none";
      document.getElementById("updatecardetails").style.display = "none";
      document.getElementById("updatepersonaldetails").style.display = "none";
      
      document.getElementById("viewprofile").style.display = "block"; 
      document.getElementById("viewcarprofile").style.display = "block";
      document.getElementById("viewserviceprofile").style.display = "block"; 
      
      document.getElementById("editLink").style.display = "block";
      document.getElementById("editCarLink").style.display = "block";
      document.getElementById("editServiceLink").style.display = "block";    

      document.getElementById("appoinmentdetails").style.display = "block";     
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
        ------------------------------------------------------------------------------------------------------------------------------------------------------------------
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
        ------------------------------------------------------------------------------------------------------------------------------------------------------------------
      </p>

      <p className="editstyle" id="editServiceLink" onClick={showservicehide}>Edit</p>








      <div className="viewstyle">
      <h3 style={{ margin: "5px 5px", paddingTop: "0px" }}>3) Service Options:</h3>
        <p id="viewserviceprofile" style={{ margin: "10px 5px"}}>
          You have selected the Service Options - {props.selectedInput+"."}
        </p>
      </div>



      {/* Update Service Option */}

<div id="updateservicedetail" style={{display:"none"}}>
<h3 style={{ margin: "15px", paddingTop: "20px" }}>
          Update Service Option
        </h3>
<div>
<input
          name="Engineoil"
          checked={matching1[0]}
          onChange={handlesetupdateServiceOption}
          type="checkbox"
          value="Engineoil"
        />
<label className="servicelabel">
        Engine Oil & Filter Change
</label>
 </div>


 <div style={{margin:"4px 0"}}>      
        <input
          name="Airfilter"
          checked={matching2[0]}
          // checked={props.selectedInput.map((data,index) => data[index] == "airfilter") }
          // checked={props.selectedInput[1] == "airfilter"}
          // checked={props.selectedInput == ""}
          onChange={handlesetupdateServiceOption}
          type="checkbox"
          value="Airfilter"
        />
        <label className="servicelabel">
        Air Filter Change
      </label>
      </div>

      <div style={{margin:"4px 0"}}>
      <input
          name="Tirechange"
          checked={matching3[0]}
          // checked={props.selectedInput.map((data,index) => data[index] == "tirechange") }
          onChange={handlesetupdateServiceOption}
          type="checkbox"
          value="Tirechange"
        />
      <label className="servicelabel">
        Tire Change
      </label>
      </div>

      <div style={{margin:"4px 0"}}>
      <input
          name="Brakechange"
          checked={matching4[0]}
          onChange={handlesetupdateServiceOption}
          // onChange={(e) => setServiceOption(e.currentTarget.value)}
          type="checkbox"
          value="Brakechange"
        />
      <label className="servicelabel">
        Brake Change
      </label>
      </div>

      <div style={{margin:"4px 0"}}>
      <input
          name="Replacebattery"
          checked={matching5[0]}
          onChange={handlesetupdateServiceOption}
          // onChange={(e) => setServiceOption(e.currentTarget.value)}
          type="checkbox"
          value="Replacebattery"
        />
      <label className="servicelabel">
        Replace Battery
      </label>
      </div>

      <div style={{margin: "15px 0"}}>
          <button className="usersubmit" onClick={showservicehide}>Update</button>
      </div>

</div>

<p>
        ------------------------------------------------------------------------------------------------------------------------------------------------------------------
      </p>
      <div className="nextsection">
        <h3 style={{ margin: "3px" }}>4) Appoinment: </h3>
        <div id="appoinmentdetails">
          <Appoinment />  
        </div>
      </div>
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
	  selectedInput: state.service.selectedInput,
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
    setMobileNo: (payload) => dispatch(setMobileNo(payload)),
	  setServiceOption: (payload) => dispatch(setServiceOption(payload)), // Dispatch an action
  };
};

export default connect(mapStateToprops, mapDispatchToprops)(ViewServiceOption);
