import React, { useEffect } from "react";

import { Link } from 'react-router-dom';

import { connect } from "react-redux";

import {
  setServiceOption
} from "../../components/redux/serviceappoinment/serviceOptionAction";

import "./_serviceOption.css";

function ServiceOption({setServiceOption}) {

  const [selectedInput, setSelectedInput] = React.useState([]);

  const handlesetServiceOption = (e) => {
    const targtValue = e.currentTarget.value;
    setSelectedInput((prev) =>
      prev.some((data) => data === targtValue)
        ? prev.filter((data) => data !== targtValue) 
        : [...prev, targtValue]
    );
  };

  useEffect(()=> {
    setServiceOption(selectedInput);
  },[selectedInput])
  
  return (
    <div>

      {/* <p>{selectedInput.map(data => (data))}</p> */}
      
      <div style={{ marginLeft: "40px", marginTop: "15px" }}>
      
      <div className="checkboxarea">
        <input
            name="Engineoil"
            // checked={typeof props.fields['checkbox'].checked == 'undefined'?false:props.fields['checkbox'].checked} 
            onChange={handlesetServiceOption}
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
            onChange={handlesetServiceOption}
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
            onChange={handlesetServiceOption}
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
            onChange={handlesetServiceOption}
            // onChange={(e) => setServiceOption(e.currentTarget.value)}
            type="checkbox"
            value="Brakechange"
          />
        <label className="servicelabel">
          Brake Change
        </label>
</div>


        <input
            name="Replacebattery"
            onChange={handlesetServiceOption}
            // onChange={(e) => setServiceOption(e.currentTarget.value)}
            type="checkbox"
            value="Replacebattery"
          />
        <label className="servicelabel">
          Replace Battery
        </label>

        <Link to="/viewservice">
          <div className="nextstep">
            <button className="servicesubmit">Next Step</button>
          </div>
          </Link>
          
      </div>



    </div>
  );
}


const mapStateToprops = (state) => {
  const { selectedInput } = state.service;
  return {
    // numOfCakes,
    selectedInput
  };
};

const mapDispatchToprops = (dispatch) => {
  return {
    setServiceOption: (payload) => dispatch(setServiceOption(payload)), // Dispatch an action
  };
};

export default connect(mapStateToprops, mapDispatchToprops) (ServiceOption);


