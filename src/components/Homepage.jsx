import { mockChatRooms, participants } from '../mocks/mocks.js'
import { useState, useEffect } from 'react'
import { Search, NewChatRoom, ChatRoomCard, CreateChatRoom } from './'
import { getChatRoom } from '../services/handleChatRooms.js'
import { getLocalStorage, setLocalStorage } from '../services/localStorage.js'



const Homepage = ({ room, setRoom, setPath, path, roomInputRef, showId}) => {

  
  useEffect(() => {
    async function  queryServer  () {
      const result = await getChatRoom()
      if (result === null) return
      if (result.length !== getLocalStorage('chatrooms')?.length) {
        setChatRooms(result)
        setLocalStorage(result)
      }
    }

    queryServer()
  },[])

  const [ chatRooms, setChatRooms ] = useState(getLocalStorage('chatrooms'))

  return (
    <>
    <section className='flex flex-col flex-grow w-full max-w-xl bg-white shadow-xl rounded-b-xl overflow-auto'>
        {path === 'Create New Chatroom' ? 

        <CreateChatRoom setRoom={setRoom} roomInputRef={roomInputRef} setPath={setPath} setChatRooms={setChatRooms}/>
        :
        <>
        <Search path={path} setPath={setPath}/>
        <ul className="bg-slate-50 p-4 sm:px-8 sm:pt-6 sm:pb-8 lg:p-4 xl:px-8 xl:pt-6 xl:pb-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2 gap-4 text-sm leading-6 overflow-y-auto">
          {chatRooms ? chatRooms.map(({ id ,name, description, users}) => {
            return(
              <ChatRoomCard 
                key={id}
                id={id}
                name={name}
                description={description} 
                users={users}
                setRoom={setRoom}
                setPath={setPath}
                showId={showId}
                chatRooms={chatRooms}
                />
            )
          })
          :
          <>
          </>
          }
          {path !== 'Homepage' ? <></> : <NewChatRoom setPath={setPath}/>}
        </ul>
        </>
        }
    </section>
    </>
  )
}

export default Homepage