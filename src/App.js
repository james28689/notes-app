import Sidebar from "./Sidebar/sidebar";
import Main from "./Main/main";
import Store from "./store";
import './App.css';
import UI from "./Login/login";


function App() {
  return (
    <Store>
      {/* <div className="App dark">
        <Sidebar/>
        <Main />
      </div> */}

      <UI />
    </Store>
  );
}

export default App;
