import React from 'react'
import { arrowBack, show, notShow, fireChat} from '../assets'
import { handleSignOut } from '../services/handleAuth'


const Header = ({room, setRoom, path, setPath, setIsAuth, showId, setShowId}) => {

  const handleShow = () => {
    setShowId((prev) => !prev)
  }

  const handleClick = async (event) => {
    if (event.target.alt === 'back') {
      setRoom(null)
      setPath('Homepage')
    }
    if (event.target.innerText === 'SignOut') {
      const result = await handleSignOut()
      setIsAuth(!result)
      setRoom(null)
      setPath('Homepage')
    }  
  }
  // queda realizar que el texto de los participantes no generen un scroll ni hagan wrap

  return (   
    <div className="flex items-center w-full max-w-xl max-h-[55px] h-full justify-between py-1 border-gray-200 bg-gray-200 shadow-xl rounded-t-xl px-4">
      <div className=" h-full flex items-center">
        <button onClick={handleClick} type="button" className={`${path !== 'Homepage' ? 'inline-flex' : 'hidden'} items-center justify-center rounded-lg border h-10 w-10 transition duration-500 ease-in-out text-gray-500 hover:bg-gray-300 focus:outline-none`}>
          <img src={arrowBack} alt="back"/>
        </button>
        <img src={fireChat} alt='fire chat icon' className='ml-4 h-[32px]'/>
        <span className='sm:text-xl text-base text-gray-700 font-semibold'>{path}</span>
        <div className={`${room ? 'flex' : 'hidden'} flex-col flex-nowrap leading-tight overflow-hidden sm:mx-4 mx-1`}>
          <div className="sm:text-xl flex items-center text-base">
            <span className='text-gray-700 lg:mr-3'>{`${room ? room.name: ''}`}</span>
          </div>
          <span className="sm:text-base text-[0.5rem] text-gray-600 w-full">{`${room ? room.users.join(", "): ''}`}</span>
        </div>
      </div>
      <div className="flex items-center">
      <button onClick={handleShow} className="inline-flex items-center justify-center rounded-lg border h-10 w-full transition duration-500 ease-in-out text-gray-500 hover:bg-gray-300 focus:outline-none">
        <img title={showId ? 'Hide Chat Id' : 'Show Chat Id'} className="px-2 cursor-pointer" src={showId ? show : notShow} alt="showid"/>
      </button>
      <button onClick={handleClick} type="SignOutButton" className="inline-flex items-center justify-center rounded-lg border h-10 w-full transition duration-500 ease-in-out text-gray-600 hover:bg-gray-500 focus:outline-none ml-4">
        <span alt='SignOutButton' className='text-semibold px-2'>SignOut</span>
      </button>
      </div>
    </div> 
   
  )
}

export default Header




// <header className='flex items-center justify-between py-2'>
// <img src={Backicon} alt="back" />
// <img src={FiReicon} alt="fireicon" />
// <button onClick={handleSignOut} className="hover:bg-blue-400 group flex items-center rounded-md bg-blue-500 text-white text-sm font-medium pl-2 pr-3 py-2 shadow-sm">SignOut</button>
// </header>