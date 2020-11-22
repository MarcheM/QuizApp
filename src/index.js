import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import firebase from 'firebase';

export const difficultyLevels = ["łatwy", 'średni', "trudny"]

const firebaseConfig = {
  apiKey: "AIzaSyAflUq88j_iADrxWwKlG1s6frCgJPxs4RY",
  authDomain: "quiz-56bc5.firebaseapp.com",
  databaseURL: "https://quiz-56bc5.firebaseio.com",
  projectId: "quiz-56bc5",
  storageBucket: "quiz-56bc5.appspot.com",
  messagingSenderId: "727150599646",
  appId: "1:727150599646:web:9eef356b8dd0fd37d6d14f",
  measurementId: "G-QRYZ6J9N2Q"
};

export const DATABASE_URL = firebaseConfig.databaseURL;

firebase.initializeApp(firebaseConfig);

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
