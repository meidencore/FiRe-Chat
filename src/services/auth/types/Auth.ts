import { UserInfo } from "../../../types/UserInfo"

export interface LoginCredentials {
    readonly email: string
    readonly password: string
}

export interface RegisterData {
    readonly email: string
    readonly password: string
}

export interface RegisterSuccess {
    readonly _t: "register_success"
    readonly user: UserInfo
}

export interface RegisterFail {
    readonly _t: "register_fail"
    readonly error: unknown
}

export interface LoginSuccess{
    readonly _t: "login_success"
    readonly user: UserInfo
}

export interface LoginFail {
    readonly _t: "login_fail"
    readonly error: unknown
}

export interface UserUpdates {
    readonly user: UserInfo
    readonly updates: {
        displayName?:string,
        photoURL?: string
    }
}
