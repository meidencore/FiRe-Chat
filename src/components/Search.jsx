import { plus, search } from '../assets'
import { useRef } from 'react'
import { updateChatRoomUsers } from '../services/handleChatRooms'

const Search = ({ path, setPath}) => {

  const searchId = useRef()

    const handleClick = (string) => {
        if (string === 'Join New Chat') {
          updateChatRoomUsers(searchId.current.value)
        } else {
          setPath('Join New Chat')
        }         
    }

    
  return (
    <section className="bg-white space-y-4 p-4 sm:px-8 sm:py-6 lg:p-4 xl:px-8 xl:py-6">
        <div className="flex items-center justify-between">
          <h2 className="font-semibold text-slate-900">Chat Rooms</h2>
          <button 
          className="hover:bg-blue-400 group flex items-center rounded-md bg-blue-600 text-white text-sm font-medium pl-2 pr-3 py-2 shadow-sm"
          onClick={() => handleClick(path)}
          >
            {path === 'Join New Chat' ? <img className="mr-2" src={search} alt='search'/> :
            <img className="mr-2" src={plus} alt='add'/>}
            {`${path === 'Join New Chat' ? 'Search ': 'Join Chatroom'}`}
          </button>
        </div>
        <form className="group relative">
          <input className="focus:ring-2 focus:ring-blue-600 focus:outline-none appearance-none w-full text-sm leading-6 text-slate-900 placeholder-slate-400 rounded-md py-2 pl-10 ring-1 ring-slate-200 shadow-sm" type="text" aria-label="Filter Chats" 
          placeholder={`${path === 'Join New Chat' ? "Search chat by its ID": "Filter chats..."}`}
          ref={searchId}
          />
        </form>
    </section>
  )
}

export default Search