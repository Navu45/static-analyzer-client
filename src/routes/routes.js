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

export default function Routes()
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
                            repos: ["git1", "git2", "git3"]
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
            <Route path="/signIn" element={SignInSide()}/>
            <Route path="/signUp" element={SignUp()}/>
        </ReactRoutes>
    )
}

