import {Route, Routes} from "react-router-dom";
import Content from "../components/content";
import Home from "../components/sites/home";
import Profile from "../components/sites/profile";
import Analyzer from "../components/sites/analyzer";
import React from "react";
import GitRepositories from "../components/sites/repos";
import Agreement from "../components/sites/agreement";

function NavigationRoutes(){
    return(
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
            <Route path="/agreement" element={Content(
                {
                    title: "Agreement",
                    content: Agreement()
                }
            )}/>
        </Routes>
    )
}
export default NavigationRoutes;

