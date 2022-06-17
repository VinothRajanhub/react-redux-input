// import React from "react";

// import { connect } from "react-redux";

// import {
//     setAppointDate,
//     setAppointTime
//   } from "../../components/redux/appoinment/appoinmentActions";


// import { Link } from 'react-router-dom';


// function UpdateAppoinment({
//   numOfCakes,
//   setFirstName,
//   setLastName,
//   setEmail,
//   setMobileNo,
//   setUpdateFirstName,
//   appoinmentDate,
//   appoinmentTime,
//   setAppointDate,
//   setAppointTime
// }) {

// //   const enabled =
// //   appoinmentDate.length > 0 && appoinmentTime.length > 0;

//   return (
//     <div className="appoinment">
//        <h3 style={{ margin: "15px", paddingTop: "20px" }}>
//             Book Appoinment
//           </h3>
          
//       <div className="flex-style">
//         <p className="personalfno">Date:  </p>
//         <input
//           type="date"
//           className="inputstyle"
//           value={appoinmentDate}
//           onChange={(e) => 
//             {
//             // setFirstName(e.target.value);
//             setAppointDate(e.target.value)
//             } 
//           }
//         />
//       </div>

//       <div className="flex-style">
//         <p className="personallno">Time:  </p>
//         <input
//           type="time"
//           className="inputstyle"
//           value={appoinmentTime}
//           onChange={(e) => setAppointTime(e.target.value)}
//         ></input>
//       </div>

     

//       <Link to="/viewappoinment">
//         <button
//           className="appoinmentupdate"
//         //   disabled={!enabled}
//         >
//           Next Step
//         </button>
//         </Link>
//         {/* {numOfCakes}      */}
      
//     </div>
//   );
// }

// // selector
// const mapStateToprops = (state) => {
//   const { appoinmentDate,
//     appoinmentTime } = state.appoinment;
//   return {
//     // numOfCakes,
//     appoinmentDate,
//     appoinmentTime
//   };
// };

// // const mapDispatchToprops = dispatch => {
// //     return {
// //         buyCake : () => dispatch(buyCake()),
// //         addCake : () => dispatch(addCake()),
// //         setCake: (payload) => dispatch(setCake(payload))
// //     }
// // }
// // selector

// const mapDispatchToprops = (dispatch) => {
//   return {
//     setAppointDate: (payload) => dispatch(setAppointDate(payload)), // Dispatch an action
//     setAppointTime: (payload) => dispatch(setAppointTime(payload))
//   };
// };

// // connect() function connects a React component to a Redux store.

// export default connect(mapStateToprops, mapDispatchToprops)(UpdateAppoinment);
