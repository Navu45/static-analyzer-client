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
import {useAuth} from "../services/contexts/AuthContext";
import {AnalysisProvider} from "../services/contexts/AnalysisContext";

const PrivateRoute = () => {
    let {user} = useAuth(); // determine if authorized, from context or however you're doing it

    // If authorized, return an outlet that will render child elements
    // If not, return element that will navigate to login page
    return user.token !== ""
        ? <Outlet /> : <Navigate to="/auth/login" />;
}

const AuthRoute = () => {
    let {user} = useAuth(); // determine if authorized, from context or however you're doing it

    // If authorized, return an outlet that will render child elements
    // If not, return element that will navigate to home page
    return user.name === ""
        ? <Outlet /> : <Navigate to="/" />;
}

export function Routes()
{
    return(
        <ReactRoutes>
            <Route exact path='/' element={<PrivateRoute/>}>
                <Route exact path="/" element={Content(
                    {
                        title: "",
                        content: Home()
                    }
                )}/>
                <Route exact path="/profile" element={Content(
                    {
                        title: "Profile",
                        content: <Profile/>
                    }
                )}/>
                <Route exact path="/git-repos" element={
                    <AnalysisProvider>
                    {Content(
                            {
                                title: "Your Git Repositories",
                                content: <GitRepositories/>}
                    )}
                    </AnalysisProvider>
                }/>
                <Route exact path="/analyze" element={
                    <AnalysisProvider>
                        {Content({
                            title: "Last Review",
                            content: <Analyzer/>
                        })}
                    </AnalysisProvider>
                }/>
            </Route>
            <Route exact path="/auth" element={<AuthRoute/>}>
                <Route exact path="/auth/login" element={SignInSide()}/>
                <Route exact path="/auth/registration" element={SignUp()}/>
            </Route>
        </ReactRoutes>
    )
}

