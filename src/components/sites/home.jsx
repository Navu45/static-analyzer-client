import React from "react";
import Navbar from "react-bootstrap/Navbar";
import { useIsAuthenticated } from "@azure/msal-react";
import {SignInButton, SignOutButton} from "../authorisation/sign-buttons";

/**
 * Renders the navbar component with a sign-in button if a user is not authenticated
 */
export function Home() {
    const isAuthenticated = useIsAuthenticated();

    return (
        <>
            <Navbar bg="primary" variant="dark">
                { isAuthenticated ? <SignOutButton /> : <SignInButton /> }
            </Navbar>
            <h5><center>Аутентификация на основе билблиотеки от Microsoft для React</center></h5>
            <br />
            <br />
        </>
    );
};

export default Home;