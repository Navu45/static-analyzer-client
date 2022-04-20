//import logo from './logo.svg';
//import './css/App.css';
import Header from "./components/header";
import Sidebar from "./components/sidebar";
import Content from "./components/content";

import './css/content.css'

function App() {

  return (
    <div className="App">

        <Header></Header>
        <div className="flex-container">
            <Sidebar></Sidebar>

            {Content(<p>dhducs</p>)}
        </div>
    </div>
  );
}

export default App;
