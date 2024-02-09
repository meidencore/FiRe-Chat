import { auth } from "../firebaseConfig";
import { onAuthStateChanged } from "firebase/auth";
import { useState, useEffect } from "react";

export function useAuth () {

    const [user, setUser] = useState(null)
    const [authState, setAuthState ] = useState(undefined)

    useEffect(() => {
        return onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user)
                setAuthState(true)
            }
        })
    },[])

    return [ user, authState ]
}
