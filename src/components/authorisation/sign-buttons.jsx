import React from "react";
import { useMsal } from "@azure/msal-react";
import { loginRequest } from "./authConfig";
import Button from "react-bootstrap/Button";

function handleLogin(instance) {
    instance.loginRedirect(loginRequest).catch(e => {
        console.error(e);
    });
}

function handleLogout(instance) {
    instance.logoutRedirect().catch(e => {
        console.error(e);
    });
}

/**
 * Renders a button which, when selected, will redirect the page to the login prompt
 */
export const SignInButton = () => {
    const { instance } = useMsal();

    return (
        <Button variant="secondary" className="ml-auto" onClick={() => handleLogin(instance)}>Sign in using Redirect</Button>
    );
}

/**
 * Renders a button which, when selected, will redirect the page to the logout prompt
 */
export const SignOutButton = () => {
    const { instance } = useMsal();

    return (
        <Button variant="secondary" className="ml-auto" onClick={() => handleLogout(instance)}>Sign out using Redirect</Button>
    );
}
