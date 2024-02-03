import React from 'react'


const FormChat = ({ roomInputRef, setRoom }) => {
    const handleEnterRoom = () => {
        setRoom(roomInputRef.current.value)
    }

  return (
    <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm flex-col content-center">        
        <label htmlFor="chatroom" className="context-center text-sm font-medium leading-6 text-gray-900">
            Enter Chat Room
        </label>        
        <div className="mt-2">
            <input
                ref={roomInputRef}
                required
                className="w-full rounded-md border-0 py-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                onKeyDown={(e) => {if (e.code === 'Enter') handleEnterRoom()}}
            />
        </div>
        <button 
        className='w-full rounded-md bg-indigo-600 px-3 py-3 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600'
        onClick={handleEnterRoom}
        >
            Enter chat
        </button>
    </div>
  )
}

export default FormChat

// if (e.code === 'Enter') setRoom(roomInputRef.current.value)