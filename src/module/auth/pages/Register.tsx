import { FormEvent } from 'react'
import { Link, useNavigate } from 'react-router-dom'

import { file } from '../../../assets'
import { useRegister } from '../hooks/useRegister'
import { RegisterProps } from '../../../types/auth'

export default function Register () {

  const navigate = useNavigate()
  const { user, registerError, uploadImageError, registerNewUser } = useRegister()
  const onInputClick = (event: React.MouseEvent<HTMLInputElement, MouseEvent>) => {
    const element = event.target as HTMLInputElement
    element.value = ''
  }

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    // Get the elements from the Form
    const elements = event.currentTarget
    if (!user)
    {
      const newUser: RegisterProps = {
        username: elements.username.value,
        email: elements.email.value,
        password: elements.email.value,
        file: elements.file.files[0]
      }
      registerNewUser(newUser)
    }
  }
  return (
    <div className='bg-_aumDark h-screen flex items-center justify-center'>
        <div className={`flex flex-col items-center rounded-[10px] bg-_dimSoft py-5 px-[60px] gap-[10px] ${registerError || uploadImageError ? 'border-solid border-2 border-red-700' : null}`}>
            <span className='text-_aumDark font-bold text-2xl'>FiRe Chat</span>
            <span className='text-_aumDark text-sm'>Register</span>
            <form className='flex flex-col gap-[15px]' onSubmit={handleSubmit}>
                <input name='username' className="bg-_dimSoft border-0 px-4 border-b-_dark border-b-[1px] border-solid bg-_gray focus:outline-none focus:ring-0 focus:border-b-_dark" type="text" placeholder='Display name'/>
                <input name='email' className="bg-_dimSoft border-0 px-4 border-b-_dark border-b-[1px] border-solid bg-_gray focus:outline-none focus:ring-0 focus:border-b-_dark" type="email" placeholder='Email'/>
                <input name='password' className="bg-_dimSoft border-0 px-4 border-b-_dark border-b-[1px] border-solid bg-_gray focus:outline-none focus:ring-0 focus:border-b-_dark" type="password" placeholder='Password'/>
                <input name='file' className="hidden" type="file" id='fileInput' onClick={onInputClick}/>
                <label className='flex items-center justify-start mt-2 gap-2' htmlFor="fileInput">
                   <img className="mr-0 min-w-6" src={file} alt='file'/>
                   <span className='text-_dark font-semibold'>Add an avatar</span>
                </label>
                <button className='bg-_yellow text-_aumDark px-2 py-2 font-bold border-none cursor-pointer hover:bg-yellow-500 rounded-md'>
                    Sign Up
                </button>

                {/* Clean this two spans to be only one and more clean*/}
                { registerError || uploadImageError ? // error not null, show error
                <div className='max-h-2 h2'>
                {registerError &&<span className='text-red-700 text-sm text-center'>{registerError}</span>}
                {uploadImageError && <span className='text-red-700 text-sm text-center'>{uploadImageError}</span>}
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