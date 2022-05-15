import {
    Navigate,
    Outlet,
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
import {useAuthProvider} from "../services/contexts/AuthContext";

const PrivateRoute = () => {
    let {user} = useAuthProvider(); // determine if authorized, from context or however you're doing it

    // If authorized, return an outlet that will render child elements
    // If not, return element that will navigate to login page
    return user.name !== "Anonymous" ? <Outlet /> : <Navigate to="/login" />;
}

export function Routes()
{
    return(
        <ReactRoutes>
            <Route exact path='/' element={<PrivateRoute/>}>
                <Route exact path="/" element={Content(
                    {
                        title: "Welcome to Architecture control tool",
                        content: Home()
                    }
                )}/>
                <Route exact path="/profile" element={Content(
                    {
                        title: "Profile",
                        content: <Profile/>
                    }
                )}/>
                <Route exact path="/git-repos" element={Content(
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
                <Route exact path="/analyze" element={Content(
                    {
                        title: "Analyzer",
                        content: Analyzer()
                    }
                )}/>
            </Route>
            <Route exact path="/login" element={SignInSide()}/>
            <Route exact path="/registration" element={SignUp()}/>
        </ReactRoutes>
    )
}

