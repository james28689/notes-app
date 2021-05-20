import Sidebar from "./Sidebar/sidebar";
import Main from "./Main/main";
import Store from "./store";
import './App.css';



function App() {
  return (
    <Store>
      <div className="App">
        <Sidebar/>
        <Main />
      </div>
    </Store>
  );
}

export default App;
