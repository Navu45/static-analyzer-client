
import Header from "./components/header";
import Sidebar from "./components/sidebar";

import './css/content.css'
import React from "react";
import {
    BrowserRouter as Router,
} from "react-router-dom";
import NavigationRoutes from "./routes/routes";

function App() {

  return (
    <div className="App">

        <Header/>
        <div className="flex-container">
            <Router>
                <Sidebar/>
                <NavigationRoutes/>
            </Router>
        </div>
    </div>
  );
}

export default App;
