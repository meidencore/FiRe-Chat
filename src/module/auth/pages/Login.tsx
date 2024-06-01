import { Link } from "react-router-dom"

const Login = () => {
  return (
    <div className='bg-_aumDark h-screen flex items-center justify-center'>
        <div className='flex flex-col items-center rounded-[10px] bg-_dimSoft py-5 px-[60px] gap-[10px]'>
            <span className='text-_aumDark font-bold text-2xl'>FiRe Chat</span>
            <span className='text-_aumDark text-sm'>Login</span>
            <form className='flex flex-col gap-[15px]'>
                <input className="bg-_dimSoft border-0 px-4 border-b-_dark border-b-[1px] border-solid bg-_gray focus:outline-none focus:ring-0 focus:border-b-_dark" type="email" placeholder='Email'/>
                <input className="bg-_dimSoft border-0 px-4 border-b-_dark border-b-[1px] border-solid bg-_gray focus:outline-none focus:ring-0 focus:border-b-_dark" type="password" placeholder='Password'/>
                <button className='bg-_yellow text-_aumDark px-2 py-2 font-bold border-none cursor-pointer hover:bg-yellow-500 rounded-md'>
                    Sign In
                </button>
            </form>
            <p className='text-_aumDark text-sm mt-3'>You don't have an account? <Link to={'/register'} className='underline cursor-pointer text-_dark hover:text-_dimDark'>Sign up</Link></p>
        </div>
    </div>
  )
}

export default Login