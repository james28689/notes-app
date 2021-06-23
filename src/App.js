import Sidebar from "./Sidebar/sidebar";
import Main from "./Main/main";
import './App.css';
import LoginPage from "./loginPage/loginPage";
import {Context} from './store';
import React, {useContext} from 'react';

import { auth, firestore } from "./firebase"

import { useAuthState } from "react-firebase-hooks/auth"

function App() {
  const [state] = useContext(Context);

  const [user] = useAuthState(auth);

  return (
      <div className={"App " + state.theme}>
        { user ? <div><Sidebar/> <Main /></div> : <LoginPage /> }
      </div>
  );
}

export default App;
