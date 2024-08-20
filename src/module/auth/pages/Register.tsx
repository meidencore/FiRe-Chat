import { FormEvent, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { NewUser, useRegister } from '../hooks/useRegister'
import Loader from '../../ui/Loader'

export default function Register () {

  const navigate = useNavigate()
  const { registerError, registerNewUser } = useRegister()
  const [ disabled, setDisabled ] = useState(false)
  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setDisabled(true)
    // Get the elements from the Form
    const elements = event.currentTarget
    const newUser: NewUser = {
        username: elements.username.value,
        email: elements.email.value,
        password: elements.password.value,
    }
    const registerSuccess = await registerNewUser(newUser)
    if (registerSuccess) navigate("/")
    setDisabled(false)
  }

  return (
    <div className='bg-_aumDark h-screen flex items-center justify-center'>
        <div className={`flex flex-col items-center rounded-[10px] bg-_dimSoft py-5 px-[60px] gap-[10px] ${registerError ? 'border-solid border-2 border-red-700' : null}`}>
            <span className='text-_aumDark font-bold text-2xl'>FiRe Chat</span>
            <span className='text-_aumDark text-sm'>Register</span>
            <form className='flex flex-col gap-[15px]' onSubmit={handleSubmit}>
                <input name='username' className="bg-_dimSoft border-0 px-4 border-b-_dark border-b-[1px] border-solid bg-_gray focus:outline-none focus:ring-0 focus:border-b-_dark" type="text" placeholder='Display name'/>
                <input name='email' className="bg-_dimSoft border-0 px-4 border-b-_dark border-b-[1px] border-solid bg-_gray focus:outline-none focus:ring-0 focus:border-b-_dark" type="email" placeholder='Email'/>
                <input name='password' className="bg-_dimSoft border-0 px-4 border-b-_dark border-b-[1px] border-solid bg-_gray focus:outline-none focus:ring-0 focus:border-b-_dark" type="password" placeholder='Password'/>
                <button disabled={disabled} className={`flex place-content-center ${disabled ? "bg-yellow-500" : "bg-_yellow"} text-_aumDark px-2 py-2 font-bold border-none cursor-pointer hover:bg-yellow-500 rounded-md`}>
                    {disabled ? <Loader /> : "Sign In"}
                </button>

                { registerError ? // error not null, show error
                <div className='max-h-2 h2'>
                {registerError &&<span className='text-red-700 text-sm text-center'>{registerError}</span>}
                </div>
                :
                <span className='max-h-2 h-2'></span>
                }
            </form>
            <p className='text-_aumDark text-sm mt-3'>Do you already have an account? <Link to={'/login'} className='underline cursor-pointer text-_dark hover:text-_dimDark'>Sign in</Link></p>
        </div>
    </div>
  )
}
