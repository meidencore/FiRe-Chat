import { KeyboardEvent, useRef, useState } from "react"
import { SearchUsersResponse, searchUserRequest } from "../../../services/searchService/search"
import { profile } from "../../../assets"

const Search = () => {
    
    const searchRef = useRef<HTMLInputElement | null>(null)
    const [ searchResult, setSearchResult ] = useState<SearchUsersResponse>()

    async function handleKey(event: KeyboardEvent<HTMLInputElement>) {
        if (event.code === "Enter") {
            const searchValue = searchRef.current?.value
            if (searchValue) {
                const result = await searchUserRequest(searchValue)
                setSearchResult(result)
            }
        }
        // clean the search
        if (event.code === "Backspace") {
            const length = searchRef.current?.value.length
            if (length === 1) setSearchResult(undefined)
        }
    }

  return (
    <div className="border-b border-solid border-b-_soft">
      <div> 
        <input onKeyDown={handleKey} ref={searchRef} type="text" className="bg-transparent border-none text-_aumSoft focus:outline-none focus:ring-0 focus:border-b-_aumDark placeholder:text-_aumSoft" placeholder="find a user"/>
      </div>
      { searchResult && 
        <div>
            {searchResult._t === "not_found" ? <span className="mb-1 flex justify-center text-_dimSoft">not found</span> : null}
            {searchResult.users && searchResult.users.map(user => {
                return (
                <div key={ user.uid } className="p-2 flex items-center gap-2 text-_dimSoft cursor-pointer hover:bg-_dark">
                    <img src={ user.photoURL ? user.photoURL : profile } alt="profile_pic" className="w-12 h-12 rounded-full object-cover"/>
                    <div className="flex flex-col">
                        <span className="font-medium text-lg">{ user.displayName }</span>
                    </div>
                </div>
                )
            })}    
        </div>
      }
    </div>
  )
}
export default Search
