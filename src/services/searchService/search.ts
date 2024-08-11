import { FirebaseDatabase } from "../servicesProviders/firebase/data/FirebaseDatabase"
import { SearchUsersSuccess, SearchUsersFail } from "../types/Search"

export type SearchUsersResponse = SearchUsersSuccess | SearchUsersFail

const dataProvider = new FirebaseDatabase()

export async function searchUserRequest(name: string): Promise<SearchUsersResponse> {

    const users =  await dataProvider.getUsersByName(name)

    if (!users) return { _t: "not_found", users: null }
        return {_t: "found", users }

}
