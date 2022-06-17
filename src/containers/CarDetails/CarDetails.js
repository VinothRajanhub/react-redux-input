import React from "react";

import { connect } from "react-redux";
import { Link } from "react-router-dom";

import {
  setCarManufacture, setCarModel,setCarYear, setUpdateCar
} from "../../components/redux/cardetails/carActions";

import './_carDetails.css';

function CarDetails({
  numOfCakes,
  setUpdateCar, carManufacture,
  carModel, carYear,
  setCarManufacture, setCarModel,setCarYear
}) {
  
  const enabled =
  carModel.length > 0 && carYear.length > 0 && carManufacture.length > 0;

  return (
    <div className="cardetails">
      <div className="flex-style">
        <p className="carmanufacture">Manufacturer:  </p>
        <input
          type="text"
          className="inputstyle"
          onChange={(e) => {
            setCarManufacture(e.target.value);
          }}
          value={"" || carManufacture}
        ></input>
      </div>
      <div className="flex-style">
        <p className="carmodel">Model:  </p>
        <input
          type="text"
          className="inputstyle"
          
          value={ "" || carModel}
          onChange={(e) => setCarModel(e.target.value)}
        ></input>
      </div>

      <div className="flex-style">
      <p className="caryear">Year:  </p>
      <input
        type="number"
        className="inputstyle"
        value={ "" || carYear}
        onChange={(e) => setCarYear(e.target.value)}
      ></input>
      </div>

      <div>
        <Link to="/viewcardetail">
        <button
          className="cardetailssubmit"
          disabled={!enabled}
        >
          Next Step
        </button>
        </Link>
        {/* {numOfCakes}      */}
      </div>
    </div>
  );
}

// selector
const mapStateToprops = (state) => {
  const { carManufacture, carModel, carYear } = state.car;
  return {
    carManufacture, carModel, carYear
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
    setCarManufacture: (payload) => dispatch(setCarManufacture(payload)), // Dispatch an action
    setCarModel: (payload) => dispatch(setCarModel(payload)),
    setCarYear: (payload) => dispatch(setCarYear(payload)),
    setUpdateCar: (payload) => dispatch(setUpdateCar(payload)),
  };
};

// connect() function connects a React component to a Redux store.

export default connect(mapStateToprops, mapDispatchToprops)(CarDetails);
