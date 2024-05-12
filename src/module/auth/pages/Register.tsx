import { ChangeEvent, FormEvent, useState } from 'react'
import { Link } from 'react-router-dom'

import { file } from '../../../../public/assets'
import { useAuth } from '../hooks/useAuth'
import { updateUser } from '../../../services/auth/user'

const Register = () => {

  const [error, setError] = useState<string | null>(null)
  const { registerUser } = useAuth()
  
  const onInputClick = (event: React.MouseEvent<HTMLInputElement, MouseEvent>) => {
    const element = event.target as HTMLInputElement
    element.value = ''
  }

  const handleAvatar = (event: ChangeEvent<HTMLInputElement>) => {
      const element = event.currentTarget
      if (element.files) {
        console.log(element.files[0])
        console.log(URL.createObjectURL(element.files[0]))
      }
    }

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    // clean the error state
    if (error) setError(null)

    // Get the elements from the Form
    const elements = event.currentTarget
    const username: string = elements.username.value
    const email: string = elements.email.value
    const password:string = elements.email.value
    const file: File = elements.file.files[0]


    // TODO validate empty string fields

    const user = await registerUser({ email, password })
    updateUser(user, {
      displayName:username, 
      photoURL: URL.createObjectURL(file) })

  }

  return (
    <div className='bg-_aumDark h-screen flex items-center justify-center'>
        <div className={`flex flex-col items-center rounded-[10px] bg-_dimSoft py-5 px-[60px] gap-[10px] ${error? 'border-solid border-2 border-red-700' : null}`}>
            <span className='text-_aumDark font-bold text-2xl'>FiRe Chat</span>
            <span className='text-_aumDark text-sm'>Register</span>
            <form className='flex flex-col gap-[15px]' onSubmit={handleSubmit}>
                <input name='username' className="bg-_dimSoft border-0 px-4 border-b-_dark border-b-[1px] border-solid bg-_gray focus:outline-none focus:ring-0 focus:border-b-_dark" type="text" placeholder='Display name'/>
                <input name='email' className="bg-_dimSoft border-0 px-4 border-b-_dark border-b-[1px] border-solid bg-_gray focus:outline-none focus:ring-0 focus:border-b-_dark" type="email" placeholder='Email'/>
                <input name='password' className="bg-_dimSoft border-0 px-4 border-b-_dark border-b-[1px] border-solid bg-_gray focus:outline-none focus:ring-0 focus:border-b-_dark" type="password" placeholder='Password'/>
                <input name='file' className="hidden" type="file" id='fileInput' onChange={handleAvatar} onClick={onInputClick}/>
                <label className='flex items-center justify-start mt-2 gap-2' htmlFor="fileInput">
                   <img className="mr-0 min-w-6" src={file} alt='file'/>
                   <span className='text-_dark font-semibold'>Add an avatar</span>
                </label>
                <button className='bg-_yellow text-_aumDark px-2 py-2 font-bold border-none cursor-pointer hover:bg-yellow-500 rounded-md'>
                    Sign Up
                </button>
                { error ? // error not null, show error
                <span className='text-red-700 max-h-2 h-2 text-sm text-center'>{error}</span>
                :
                <span className='max-h-2 h-2'></span>
                }
            </form>
            <p className='text-_aumDark text-sm mt-3'>Do you already have an account? <Link to={'/login'} className='underline cursor-pointer text-_dark hover:text-_dimDark'>Sign in</Link></p>
        </div>
    </div>
  )
}

export default Register