import { UserInfo } from "../../types/UserInfo";
import { UserUpdates } from "../types/Auth";

export interface IDatabase {
    // Create a UserInfo Doc in the User Collection and UserChats in the UserChats Collection and return the uid of the doc
    createUserCollection: (user: UserInfo) => Promise<string>
    // Update User doc by Id and return the id
    updateUserById: (uid: string, updates: UserUpdates) => Promise<string>
    // Get User by Name
    getUsersByName: (name: string) => Promise<UserInfo[] | null>
}
