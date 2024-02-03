import React from 'react'

const NewChatRoom = ({ setPath }) => {
  
  const handleClick = () => {
    setPath('Create New Chatroom')
  }
  return (
    <li className="flex" onClick={handleClick}>
        <div className="hover:border-blue-600 hover:border-solid hover:bg-white hover:text-blue-600 group w-full flex flex-col items-center justify-center rounded-md border-2 border-dashed border-slate-300 text-sm leading-6 text-slate-900 font-medium py-3">
            <svg className="group-hover:text-blue-600 mb-1 text-slate-400" width="20" height="20" fill="currentColor" aria-hidden="true">
            <path d="M10 5a1 1 0 0 1 1 1v3h3a1 1 0 1 1 0 2h-3v3a1 1 0 1 1-2 0v-3H6a1 1 0 1 1 0-2h3V6a1 1 0 0 1 1-1Z" />
            </svg>
            Create New Chatroom
        </div>
    </li>
  )
}

export default NewChatRoom