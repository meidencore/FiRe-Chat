import { NewUser } from "../../module/auth/hooks/useRegister";
import { FirebaseAuthenticator } from "../providers/firebase/auth/FirebaseAuthenticator";
import { FirebaseDatabase } from "../providers/firebase/data/FirebaseDatabase";
import { RegisterData } from "./types/Auth";

export async function registerRequest(newUser: NewUser){

    const { username, email, password } = newUser 
    const registerData: RegisterData = {
        email,
        password
    }
    // TODO Preguntar por el Provider de authenticacion e inicializarlo
    const authProvider = new FirebaseAuthenticator()

    const response = await authProvider.register(registerData)    

    if (response._t === "register_success") {
        authProvider.updateUser({
            user: response.user,
            updates: {
                displayName: username
            }
        })

        const dataProvider = new FirebaseDatabase()
        
        dataProvider.createUserCollection(response.user)

    }

    return response
}

export async function logoutRequest(): Promise<void> {
    
    const authProvder = new FirebaseAuthenticator()

    authProvder.logout()
}
