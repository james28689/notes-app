import Sidebar from "./Sidebar/sidebar";
import Main from "./Main/main";
import './App.css';
import Login from "./Login/login";
import {Context} from './store';
import React, {useContext} from 'react';


function App() {
  const [state] = useContext(Context);

  return (
      <div className="App dark">

        {state.loggedIn === true &&
        <>
          <Sidebar/>
          <Main />
        </>
        }

        {state.loggedIn === false &&
          <Login />
        }
      </div>

      // <UI />
  );
}

export default App;
