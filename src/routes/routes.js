import {
    Route,
    Routes as ReactRoutes
} from 'react-router-dom';
import Content from "../components/common/Content";
import Home from "../components/sites/home";
import Profile from "../components/sites/profile";
import GitRepositories from "../components/sites/repos";
import Analyzer from "../components/sites/analyzer";
import React from "react";
import SignInSide from "../components/sites/signIn";
import SignUp from "../components/sites/signUp";

export default function Routes(toggle)
{
    return(
        <ReactRoutes>
            <Route exact path="/" element={Content(
                {
                    title: "Welcome to Architecture control tool",
                    content: Home()
                }
            )}/>
            <Route path="/profile" element={Content(
                {
                    title: "Profile",
                    content: <Profile/>
                }
            )}/>
            <Route path="/git-repos" element={Content(
                {
                    title: "Your Git Repositories",
                    content: GitRepositories({
                        repos: [
                            {
                                name:"git1",
                                owner: "me"
                            },
                            {
                                name:"git2",
                                owner: "me"
                            },
                            {
                                name:"git3",
                                owner: "me"
                            }
                        ] })
                }
            )}/>
            <Route path="/analyze" element={Content(
                {
                    title: "Analyzer",
                    content: Analyzer()
                }
            )}/>
            <Route path="/signIn" element={SignInSide()}/>
            <Route path="/signUp" element={SignUp()}/>
        </ReactRoutes>
    )
}

