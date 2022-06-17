// import React, { useEffect } from "react";

// import { connect } from "react-redux";
// import { Link } from "react-router-dom";

// import { setServiceOption } from "../../components/redux/serviceappoinment/serviceOptionAction";

// function UpdateServiceOption(props) {
//   const [updateselectedInput, setupdateSelectedInput] = React.useState(
//     props.selectedInput
//   );

//   console.log(props.selectedInput);

//   let pattern1 = "oil";
//   let pattern2 = "air";
//   let pattern3 = "tire";
//   let pattern4 = "brake";
//   let pattern5 = "battery";

//   let matching1 = updateselectedInput.filter((a) => a.indexOf(pattern1) >= 0);
//   console.log(matching1);
//   let matching2 = updateselectedInput.filter((a) => a.indexOf(pattern2) >= 0);
//   let matching3 = updateselectedInput.filter((a) => a.indexOf(pattern3) >= 0);
//   let matching4 = updateselectedInput.filter((a) => a.indexOf(pattern4) >= 0);
//   let matching5 = updateselectedInput.filter((a) => a.indexOf(pattern5) >= 0);

//   const handlesetupdateServiceOption = (e) => {
//     const targtValue = e.currentTarget.value;
//     setupdateSelectedInput((prev) =>
//       prev.some((data) => data === targtValue)
//         ? prev.filter((data) => data !== targtValue)
//         : [...prev, targtValue]
//     );

//   };

//   useEffect(() => {
//     props.setServiceOption(updateselectedInput);
//   }, [updateselectedInput]);

//   return (
//     <div style={{ paddingTop: "20px", marginTop: "15px" }}>
//       {/* <div style={{marginLeft: "40px"}}>
//             <label>Engine Oil & Filter Change
//             <input name='engineoil' onChange={renderSelected} type='checkbox' value='engineoil'/></label>
//             <label>Air Filter Change
//             <input name='airfilter' onChange={renderSelected} type='checkbox' value='airfilter'/></label>
//             <label>Tire Change
//             <input name='tirechange' onChange={renderSelected} type='checkbox' value='tirechange' /></label>
//             <label>Brake Change
//             <input name='brakechange' onChange={renderSelected} type='checkbox' value='brakechange'/></label>
//             <label>Replace Battery
//             <input name='replacebattery' onChange={renderSelected} type='checkbox' value='replacebattery'/></label>
//           </div> */}

//       <label>
//         Engine Oil & Filter Change
//         <input
//           name="engineoil"
//           checked={matching1[0]}
//           onChange={handlesetupdateServiceOption}
//           type="checkbox"
//           value="engineoil"
//         />
//       </label>
//       <label>
//         Air Filter Change
//         <input
//           name="airfilter"
//           checked={matching2[0]}
//           // checked={props.selectedInput.map((data,index) => data[index] == "airfilter") }
//           // checked={props.selectedInput[1] == "airfilter"}
//           // checked={props.selectedInput == ""}
//           onChange={handlesetupdateServiceOption}
//           type="checkbox"
//           value="airfilter"
//         />
//       </label>
//       <label>
//         Tire Change
//         <input
//           name="tirechange"
//           checked={matching3[0]}
//           // checked={props.selectedInput.map((data,index) => data[index] == "tirechange") }
//           onChange={handlesetupdateServiceOption}
//           type="checkbox"
//           value="tirechange"
//         />
//       </label>
//       <label>
//         Brake Change
//         <input
//           name="brakechange"
//           checked={matching4[0]}
//           onChange={handlesetupdateServiceOption}
//           // onChange={(e) => setServiceOption(e.currentTarget.value)}
//           type="checkbox"
//           value="brakechange"
//         />
//       </label>
//       <label>
//         Replace Battery
//         <input
//           name="replacebattery"
//           checked={matching5[0]}
//           onChange={handlesetupdateServiceOption}
//           // onChange={(e) => setServiceOption(e.currentTarget.value)}
//           type="checkbox"
//           value="replacebattery"
//         />
//       </label>

//       <Link to="/viewservice">
//         <button className="usersubmit">Update</button>
//       </Link>
//     </div>
//   );
// }

// const mapStateToprops = (state) => {
//   const { carManufacture, carModel, carYear } = state.car;
//   return {
//     // numOfCakes,
//     // firstName
//     // lastName,
//     // mobileNo,
//     // email,
//     carManufacture,
//     carModel,
//     carYear,
//     selectedInput: state.service.selectedInput,
//   };
// };

// const mapDispatchToprops = (dispatch) => {
//   return {
//     setServiceOption: (payload) => dispatch(setServiceOption(payload)), // Dispatch an action
//   };
// };

// export default connect(
//   mapStateToprops,
//   mapDispatchToprops
// )(UpdateServiceOption);
