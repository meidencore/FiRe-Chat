import { UserInfo } from "../../../types/UserInfo";

export interface IDatabase {
    // Create a UserInfo Doc in the User Collection and UserChats in the UserChats Collection
    createUserCollection: (user: UserInfo) => Promise<boolean>
}
