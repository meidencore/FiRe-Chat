import { User } from "firebase/auth";
import { createContext, useState } from "react";

type AuthContextProviderProps = {
    children: React.ReactNode
}
type UserState = {
    user: User | null
    setUser: () => null
}
const initialState: UserState = {
    user: null,
    setUser()
}

export const AuthContext = createContext<UserState>(initialState)

export default function AuthContextProvider({children}: AuthContextProviderProps) {

    const [currentUser, setCurrentUser] = useState<User>()

  return (
    <AuthContext.Provider>
        {children}
    </AuthContextProvider>
  )
}

