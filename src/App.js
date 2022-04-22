
import Header from "./components/header";
import Sidebar from "./components/sidebar";

import './css/content.css'
import React from "react";
import {
    BrowserRouter as Router,
    Route, Routes
} from "react-router-dom";
import Profile from "./components/sites/profile";
import GitRepositories from "./components/sites/repos";
import Analyzer from "./components/sites/analyzer";
import Home from "./components/sites/home";
import Content from "./components/content";

function App() {

  return (
    <div className="App">

        <Header/>
        <div className="flex-container">
            <Router>
                <Sidebar/>
                <Routes>
                    <Route exact path="/" element={Content(
                        {
                            title: "Home",
                            content: Home()
                        }
                    )}/>
                    <Route path="/profile" element={Content(
                        {
                            title: "Profile",
                            content: Profile(
                                {
                                    name: "Alexey"
                                }
                            )
                        }
                    )}/>
                    <Route path="/git-repos" element={Content(
                        {
                            title: "Your Git Repositories",
                            content: GitRepositories(
                                {
                                    repo: ["git1", "git2", "git3"]
                                }
                            )
                        }
                    )}/>
                    <Route path="/analyze" element={Content(
                        {
                            title: "Analyzer",
                            content: Analyzer()
                        }
                    )}/>
                </Routes>
            </Router>
        </div>
    </div>
  );
}

export default App;
