import Sidebar from "./Sidebar/sidebar";
import Main from "./Main/main";
import './App.css';
import LoginPage from "./loginPage/loginPage";
import {Context} from './store';
import React, {useContext} from 'react';


function App() {
  const [state] = useContext(Context);

  return (
      <div className={"App " + state.theme}>

        {state.loggedIn === true &&
        <>
          <Sidebar/>
          <Main />
        </>
        }

        {state.loggedIn === false &&
          <LoginPage />
        }
      </div>
  );
}

export default App;
