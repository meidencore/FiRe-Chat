import { NewUser } from "../../module/auth/hooks/useRegister";
import { UserInfo } from "../../types/UserInfo";
import { FirebaseAuthenticator } from "../servicesProviders/firebase/auth/FirebaseAuthenticator";
import { FirebaseDatabase } from "../servicesProviders/firebase/data/FirebaseDatabase";
import { LoginCredentials, RegisterData, RegisterSuccess, RegisterFail, LoginSuccess, LoginFail } from "../types/Auth";
import { FirebaseError } from "firebase/app";

export type RegisterResponse = RegisterSuccess | RegisterFail
export type LoginResponse = LoginSuccess | LoginFail

const authProvider = new FirebaseAuthenticator()
const dataProvider = new FirebaseDatabase()

export async function registerRequest(newUser: NewUser): Promise<RegisterResponse> {

    const { username, email, password } = newUser 
    const registerData: RegisterData = {
        email,
        password
    }
    try {
        const user = await authProvider.register(registerData)    

        const uid = await dataProvider.createUserCollection(user)

        dataProvider.updateUserById(uid, {displayName: username})

        return {
            _t: "register_success",
            user
        }
    } catch (error) {

        if (error instanceof FirebaseError) {
            const errorMessageFormatted = (error as FirebaseError).code.slice(5)

            return {
                _t: "register_fail",
                error: errorMessageFormatted
            }      
        }

        return {
            _t: "register_fail",
            error
        }
    }

}

export async function loginRequest(userCredentials: LoginCredentials): Promise<LoginResponse> {

    try {
        const user = await authProvider.login(userCredentials)
        return {
            _t: "login_success",
            user
        }
    } catch (error) {

        if (error instanceof FirebaseError) {
            const errorMessageFormatted = (error as FirebaseError).code.slice(5)

            return {
                _t: "login_fail",
                error: errorMessageFormatted
            }      
        }

        return {
            _t: "login_fail",
            error
        }
    }
} 


export async function logoutRequest(): Promise<void> {
    
    authProvider.logout()
    
}

export function addAuthenticationStatusListener(callback: (user: UserInfo | null) => void): void {

    authProvider.onChangeAuthenticacionStatus(callback)

}
