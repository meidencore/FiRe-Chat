import { auth } from "../../../services/utils/firebase.config";
import { onAuthStateChanged } from "firebase/auth";
import { useState, useEffect } from "react";

export function useAuth () {

    const [user, setUser] = useState<any | null>(null)
    const [authState, setAuthState ] = useState<any | undefined>(undefined)

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
