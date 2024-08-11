import { UserInfo } from "../../types/UserInfo"

export interface SearchUsersSuccess {
    readonly _t: "found"
    readonly users: UserInfo[]
}

export interface SearchUsersFail {
    readonly _t: "not_found"
    readonly users: null
}

