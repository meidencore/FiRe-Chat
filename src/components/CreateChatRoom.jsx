import { useRef } from 'react'
import { createChatRoom } from '../services/handleChatRooms'
import { getLocalStorage, setLocalStorage } from '../services/localStorage'
import './popup.css'

const CreateChatRoom = ({ setChatRooms, setPath }) => {

  const nameInputRef = useRef(null)
  const descInputRef = useRef(null)

  const handleClick = async () => {
    // the response is the new chatRoom
    const response = await createChatRoom(nameInputRef.current.value, descInputRef.current.value )
    const { id } = response
    // update the state and the localStorage (I know that I need a customHook for this)
    setChatRooms((prev) => [...prev, response])
    const localChatRooms = getLocalStorage('chatrooms')
    setLocalStorage([...localChatRooms, response])

    alert(`Chatroom: ${nameInputRef.current.value} succefully created\n Your Room ID is: ${id}\n Share it with your friends`)
    setPath('Homepage')
  }
  
  return (
    <div className="inner-poppup flex flex-col items-center rounded-md p-3 bg-white ring-1 ring-slate-200 shadow-sm w-full ">
        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm flex-col content-center">        
          <div className="m-4 p-4 flex flex-col items-start justify-center">
              <label htmlFor="chatroom" className="items-center justify-center text-sm font-medium leading-6 text-gray-900">
                  Name
              </label>        
              <input
                  ref={nameInputRef}
                  required
                  className="w-full rounded-md border-0 py-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
          </div>
          <div className="m-4 p-4 flex flex-col items-start justify-center">
              <label htmlFor="chatroom" className="items-center justify-center text-sm font-medium leading-6 text-gray-900">
                  Description
              </label> 
              <input
                  ref={descInputRef}
                  required
                  className="w-full rounded-md border-0 py-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
          </div>
          <button 
          className='w-full rounded-md bg-indigo-600 px-3 py-3 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600'
          onClick={handleClick}
          >
              Create Chatroom
          </button>
        </div>
    </div>
  )
}

export default CreateChatRoom