import { useState } from "react";
import { loginRequest } from "../../../services/authService/authentication";
import { LoginCredentials } from "../../../services/types/Auth";

export interface useLoginReturn {
    loginError?: string
    loginUser(userCredentials: LoginCredentials): Promise<boolean>
}

export function useLogin(): useLoginReturn {

    const [loginError, setLoginError] = useState<string>()

    /// Register User
    async function loginUser(userCredentials: LoginCredentials): Promise<boolean> {
        // TODO Validate password and email first
        const response = await loginRequest(userCredentials)

        if (response._t === "login_success") {
            return true
        }
        else {
            setLoginError(response.error as string)
            return false
        }    
    }

    return {
        loginError,
        loginUser,
    }
}
