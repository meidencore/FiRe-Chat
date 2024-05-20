import { auth } from "../../../services/utils/firebase.config";
import { User, onAuthStateChanged } from "firebase/auth";
import { useState, useEffect } from "react";

type AuthReturn = {
    user?: User;
    authState?: boolean;
}

/**
 * hook for the firebase auth process
 * @returns {AuthReturn} Firebase User object if exist and a boolean with the auth information, true if are logged in, false for logged out, and undefine where no auth has been performed.
 */
export function useAuth (): AuthReturn {

    const [user, setUser] = useState<User>()
    const [authState, setAuthState ] = useState<boolean>()

    useEffect(() => {
        return onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user)
                setAuthState(true)
            }
        })
    },[])

    return { user, authState }
}
