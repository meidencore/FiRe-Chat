import { createContext, useEffect, useState } from "react";
import { UserInfo } from "../types/UserInfo";
import { addAuthenticationStatusListener } from "../services/authService/authentication"

type AuthContextProviderProps = {
    children: React.ReactNode
}
type UserState = {
    currentUser?: UserInfo | null
}

// TODO: Abstact this logic later
let storedUser: UserInfo
const keys = localStorage.length

for (let i = 0; i < keys; i++) {
    const key = localStorage.key(i)
    if (key?.includes("authUser")) {
        const value = localStorage.getItem(key)
        storedUser = JSON.parse(value!)
    }
}

// the currentUser have 3 States
// {undefined} => on the initial state, no auth has been performed
// {User} => When a login or register action has been performed successfuly
// {null} => when the user has been logged out
export const AuthContext = createContext<UserState>({}) 

export default function AuthContextProvider({children}: AuthContextProviderProps) {

    const [currentUser, setCurrentUser] = useState<UserInfo | null >(storedUser)
    
    useEffect(() => {

        const updateUser = (user: UserInfo | null) => {
            setCurrentUser(user)
        }

        addAuthenticationStatusListener(updateUser)

        return () => {
            addAuthenticationStatusListener(updateUser) 
        }
    },[])

  return (
    <AuthContext.Provider value={{currentUser}}>
        {children}
    </AuthContext.Provider>
  )
}

