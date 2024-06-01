import { User, onAuthStateChanged } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import { auth } from "../services/utils/firebase.config";

type AuthContextProviderProps = {
    children: React.ReactNode
}
type UserState = {
    currentUser?: User | null
}

// the currentUser have 3 States
// {undefined} => on the initial state, no auth has been performed
// {User} => When a login or register action has been performed successfuly
// {null} => when the user has been logged out
export const AuthContext = createContext<UserState>({})

export default function AuthContextProvider({children}: AuthContextProviderProps) {

    const [currentUser, setCurrentUser] = useState<User | null >()

    useEffect(() => {

        const unsub = onAuthStateChanged(auth, (user) => {
            setCurrentUser(user);
        })

        return () => {
            unsub()
        }
    },[])

  return (
    <AuthContext.Provider value={{currentUser}}>
        {children}
    </AuthContext.Provider>
  )
}

