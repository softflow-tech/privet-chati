import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { Route, BrowserRouter as Router } from 'react-router-dom';
import * as serviceWorker from './serviceWorker';
import LoginComponent from './Login/login';
import SignupComponent from './Signup/signup';
import DashboardComponent from './Dashboard/dashboard';
import { firebase } from '@firebase/app';

// const firebase = require("firebase/app");

require("firebase/firestore");

var firebaseConfig = {
  apiKey: "AIzaSyDYJ6mes8stlz9Bq2pDg_hjUMEYoQkaZFM",
  authDomain: "chati-fe19c.firebaseapp.com",
  databaseURL: "https://chati-fe19c-default-rtdb.firebaseio.com",
  projectId: "chati-fe19c",
  storageBucket: "chati-fe19c.appspot.com",
  messagingSenderId: "1074275320539",
  appId: "1:1074275320539:web:f965ce555d0fb240c602fe",
  measurementId: "G-7QNMGHZP8G"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
// firebase.analytics();


const routing = (
  <Router>
    <div id='routing-container'>
      <Route path='/login' component={LoginComponent}></Route>
      <Route path='/signup' component={SignupComponent}></Route>
      <Route path='/dashboard' component={DashboardComponent}></Route>
    </div>
  </Router>
);


ReactDOM.render(routing, document.getElementById('root'));


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
serviceWorker.unregister();
