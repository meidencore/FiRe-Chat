import React from 'react'
import { useState, useRef } from 'react'
import Cookies from 'universal-cookie'
import { Auth , Header, Homepage, ChatRoom } from '../components'


const cookies = new Cookies()

function App() {

  const [ showId, setShowId ] = useState(false)
  const [ isAuth, setIsAuth ] = useState(cookies.get('auth-token'))
  const [ room, setRoom ] = useState(null)
  const [ path, setPath ] = useState('Homepage')

  const roomInputRef = useRef(null)

  if (!isAuth) {
    return (
      <div className="flex items-center justify-center w-screen h-screen bg-gray-100 text-gray-800">
        <Auth setIsAuth={setIsAuth}/>
      </div>
    )
  }

  return (
      <div className="flex flex-col items-center justify-center w-screen h-screen bg-gray-100 text-gray-800">
        <Header room={room} setRoom={setRoom} path={path} setPath={setPath} setIsAuth={setIsAuth} showId={showId} setShowId={setShowId}/>
        {room ? 
        <ChatRoom room={room}/> 
        : 
        <Homepage roomInputRef={roomInputRef} room={room} setRoom={setRoom} setPath={setPath} path={path} showId={showId}/>
        }
      </div>
  )
}

export default App


