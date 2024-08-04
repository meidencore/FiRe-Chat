import { LoginCredentials, LoginFail, LoginSuccess, RegisterData, RegisterFail, RegisterSuccess} from "../types/Auth"

export type RegisterResponse = RegisterSuccess | RegisterFail 
export type LoginResponse = LoginSuccess | LoginFail

export interface IAuthenticator {
    // Register a new User and return if the operation was successfully
    register: (registerData: RegisterData) => Promise<RegisterResponse>
    // Login an User and return if the operation was successfully
    login: (loginCredentials: LoginCredentials) => Promise<LoginResponse>
    // Update the displayName and/or the profile picture or a registered User
    // updateUser: (userUpdates: UserUpdates) => Promise<void> 
    // Logout a user
    logout: () => Promise<void>
}
