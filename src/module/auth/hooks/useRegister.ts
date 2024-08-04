import { useState } from "react";
import { registerRequest } from "../../../services/auth/authentication";

export type NewUser = {
    username: string
    email: string
    password: string
}

export interface useRegisterReturn {
    registerError?: string
    registerNewUser(newUser: NewUser): Promise<boolean>
}

export function useRegister(): useRegisterReturn {

    const [registerError, setRegisterError] = useState<string>()

    /// Register User
    async function registerNewUser(newUser: NewUser): Promise<boolean> {
        // TODO Validate password and email first
        const response = await registerRequest(newUser)

        if (response._t === "register_success") {
            return true
        }
        else {
            setRegisterError(response.error as string)
            return false
        }    
    }

    return {
        registerError,
        registerNewUser,
    }
}
