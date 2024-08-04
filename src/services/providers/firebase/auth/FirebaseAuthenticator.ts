import { FirebaseError } from "firebase/app";
import { IAuthenticator, RegisterResponse, LoginResponse } from "../../../auth/interfaces/IAuthenticator";
import { RegisterData, LoginCredentials} from "../../../auth/types/Auth";
import { auth } from "../firebase.config";
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut} from "firebase/auth";
import { UserInfo } from "../../../../types/UserInfo";

export class FirebaseAuthenticator implements IAuthenticator {
    
    public async register(registerData: RegisterData): Promise<RegisterResponse> {
    
        const { email, password } = registerData

        try {
            const userCredential = await createUserWithEmailAndPassword(auth, email, password)
            const { user } = userCredential
            return {
                _t: "register_success",
                user
            }
        } 
        catch (error) {
            
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

    public async login(loginCredentials: LoginCredentials): Promise<LoginResponse> {
        
        const { email, password } = loginCredentials
        
        try {
            const userCredentials = await signInWithEmailAndPassword(auth, email, password)
            const { user } = userCredentials
            return {
                _t: "login_success",
                user
            }
        }
        catch (error) {
            
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
    
    public async logout(): Promise<void> {
        
        signOut(auth) 
    
    }

    public onChangeAuthenticacionStatus(callback: (user: UserInfo | null ) => void): void {
        
        onAuthStateChanged(auth, callback)   

    }
}
