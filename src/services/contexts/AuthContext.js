import React from 'react'
import UserService from "../UserService";

const AuthContext = React.createContext()

function AuthProvider(props) {
    const [user, setUser] = React.useState(localStorage.getItem("user"))
    const value = React.useMemo(() => {
        return {
            user,
            setUser,
        }
    }, [user])
    return <AuthContext.Provider value={value} {...props} />
}

function useAuthProvider() {
    const context = React.useContext(AuthContext)
    if (!context) {
        throw new Error('useUserContext must be used within a UserProvider')
    }
    const {user, setUser} = context
    const userService = new UserService();

    return {
        user,
        setUser,
        userService
    }
}

export {AuthProvider, useAuthProvider}