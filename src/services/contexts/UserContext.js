import React, {useEffect} from 'react'
import UserService from "../UserService";

const UserContext = React.createContext()

function UserProvider(props) {
    const [user, setUser] = React.useState(0)
    const value = React.useMemo(() => {
        return {
            user,
            setUser,
        }
    }, [user])
    return <UserContext.Provider value={value} {...props} />
}

function useUser() {
    const context = React.useContext(UserContext)
    if (!context) {
        throw new Error('useUserContext must be used within a UserProvider')
    }
    const {user, setUser} = context
    const userService = new UserService();
    useEffect(() => {
        setUser({
            name: "Anonymous",
            token: ""
        })
    }, [setUser]);

    return {
        user,
        setUser,
        userService
    }
}

export {UserProvider, useUser}