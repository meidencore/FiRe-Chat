import React from 'react'
import GoogleIcon from '../assets/google.svg'

import { handleAuth } from '../services/handleAuth.js'

const Auth = ({ setIsAuth }) => {

  const handleClick = async () => {
    const result = await handleAuth()
    setIsAuth(result)
  }

  return (
    <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8 rounded-md shadow-inner" >
      <div className="mx-auto w-full max-w-[20rem]">
        <img
          className="mx-auto"
          src={GoogleIcon}
          alt="google"
        />
        <h2 className="mt-5 text-center text-2xl font-semibold leading-9 text-slate-800">
          Sign in with Google
        </h2>
      </div>

      <div className="mt-5 mx-auto w-full max-w-[18rem]">
        <div>
          <button
            type="submit"
            className="flex w-full justify-center rounded-lg bg-slate-300 px-3 py-1.5 font-semibold leading-6 text-slate-800 shadow-xl hover:bg-slate-200 focus-visible:outline 
            focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-slate-300"
            onClick={handleClick}
          >
            Sign in
          </button>
        </div>
      </div>
    </div>
  )
}

export default Auth