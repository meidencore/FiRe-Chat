import { NewUser } from "../../module/auth/hooks/useRegister";
import { UserInfo } from "../../types/UserInfo";
import { FirebaseAuthenticator } from "../servicesProviders/firebase/auth/FirebaseAuthenticator";
import { FirebaseDatabase } from "../servicesProviders/firebase/data/FirebaseDatabase";
import { LoginResponse, RegisterResponse } from "../interfaces/IAuthenticator";
import { LoginCredentials, RegisterData } from "../types/Auth";


const authProvider = new FirebaseAuthenticator()
const dataProvider = new FirebaseDatabase()

export async function registerRequest(newUser: NewUser): Promise<RegisterResponse> {

    const { username, email, password } = newUser 
    const registerData: RegisterData = {
        email,
        password
    }
    const response = await authProvider.register(registerData)    

    if (response._t === "register_success") {
        
        const uid = await dataProvider.createUserCollection(response.user)

        dataProvider.updateUserById(uid, {displayName: username})
    }

    return response
}

export async function loginRequest(userCredentials: LoginCredentials): Promise<LoginResponse> {
    
    return await authProvider.login(userCredentials)

} 


export async function logoutRequest(): Promise<void> {
    
    authProvider.logout()
    
}

export function addAuthenticationStatusListener(callback: (user: UserInfo | null) => void): void {

    authProvider.onChangeAuthenticacionStatus(callback)

}
