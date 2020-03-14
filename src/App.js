import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import withFirebaseAuth from 'react-with-firebase-auth';
import * as firebase from 'firebase/app';
import 'firebase/auth';
import config from './firebaseConfig';
import {useHistory} from 'react-router-dom';

const firebaseApp = firebase.initializeApp(config);
const firebaseAppAuth = firebaseApp.auth();

const providers = {
  googleProvider: new firebase.auth.GoogleAuthProvider(),
};



class App extends Component {

 
  render() {
    const {
      user,
      signOut,
      signInWithGoogle
    } = this.props;
  
  return (
      <div className="container">
        <div className="companyName">
          <h1 id="title">VAR Dashboard</h1>
          <h4 id="description">Productivity Visualization Starts Here</h4>
        </div>

        <div className="form-box">    

          {
            user 
            ? <h2 className="info">Welcome, your experience will load shortly </h2>
            : <h2 className="info">Sign in to continue</h2>
          }

          {
            user
            ? <button onClick = {signOut}>Sign Out</button>
            : <button onClick = {signInWithGoogle}>Sign in with Google</button>
              
          }
       
        </div>
        <header className="App-header">
       
        </header>
      </div>
    );
  }
}

export default withFirebaseAuth({
  providers,
  firebaseAppAuth,
})(App);


{/*
  Add in later if user wants to login with username 
  <form>
<label for="username">Username:</label><br />
<input type="text" id="username" name="username"></input><br />
<label for="password">Password:</label><br />
<input type="text" id="password" name="password"></input><br />
<button class="login" onClick="login">Login</button>
<button class="register" onClick="register">New User? </button>
</form> */}