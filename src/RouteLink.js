import React, { useContext } from "react";

import PersonalDetails from "./containers/PersonalDetails/PersonalDetails";

import {
  FormattedMessage,
  FormattedDate,
  FormattedNumber,
  FormattedPlural,
  FormattedTime,
} from "react-intl";

import { Route, Routes } from 'react-router-dom';

import { Context } from "./containers/Wrapper";


import ViewPersonalProfile from "./containers/PersonalDetails/ViewPersonalProfile";
import ViewCarProfile from "./containers/CarDetails/ViewCarDetail";


import Appoinment from "./containers/Appoinment/Appoinment";


import ViewAppoinment from "./containers/Appoinment/ViewAppoinment";

import ViewServiceOption from "./containers/ServiceOption/ViewServiceOption";


import "./App.css";

function RouteLink() {
  const context = useContext(Context);

  return (
    //   <Switch>
    <Routes>
      <React.Fragment>

          {/* <CakeContainer /> */}

          {/* <select value = {context.locale} onChange={context.selectLanguage}>
          <option value= 'en'>English</option>
          <option value= 'fr'>French</option>
          <option value= 'ar'>Arabic</option>

        </select> */}

         

          {/* <div className="splitpart"> */}
          <Route exact path="/" element={<PersonalDetails />}/>
          <Route exact path="/viewprofile" element={<ViewPersonalProfile />} />
          {/* <Route exact path="/updateprofile" element={<UpdateUser />}/> */}
          <Route exact path="/viewcardetail" element={<ViewCarProfile />} />

          <Route exact path="/appoinment" element={<Appoinment />} />          
          <Route exact path="/viewappoinment" element={<ViewAppoinment />} />
          <Route exact path="/viewservice" element={<ViewServiceOption />} />
          
 
            {/* 
          </div> */}


          {/* <h3 style={{ margin: "3px", paddingTop: "20px" }}>2) Car Details</h3>
        <div className="splitpart">
          <CarDetails />
          <ViewCarProfile />
        </div>
        <UpdateCarDetail />

        <h3 style={{ margin: "3px", paddingTop: "20px" }}>
          3) Service Option
        </h3>
        <div className="splitpart">
          <ServiceOption />
        </div> */}

          {/* <FormattedMessage
              id = "app.header"
              defaultMessage="Edit the files and save to reload"
              values = {{fileName: 'src/App.js', code: (word)=> <strong>{word}</strong>}}
          /> */}

          {/* <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FormattedMessage
            id = "app.content"
            defaultMessage="Learn React"
          />

        </a> */}
          {/* <FormattedMessage
          id = "app.channel.plug"
          defaultMessage="Tutorial brought to you by Lokalise"
          values = {{blogName: "Lokalise"}}
        />
        <br/>
        <FormattedPlural
            id = "app.plural"
            defaultMessage="{amount, plural, =0 {no languages} one {# one language} few {# several languages} many {# lots of languages} other {# wrong fromat}}"
            values = {{amount: 90}}
        />
        <br/> */}

          {/* <FormattedNumber
            value={20.42}
            style="currency"
            currencyDisplay="symbol"
            currency="USD"
        /><br/>
        <FormattedNumber
            value={10000}
        />
        <br/>
        <FormattedTime
            value={new Date()}
            hour="numeric"
            minute="numeric"
            second="numeric"
            timeZoneName="long"
        /> */}
          {/* <ReduxObserve /> */}
          {/* <HooksCakeContainer /> */}
          </React.Fragment>
        </Routes>
  );
}

export default RouteLink;
