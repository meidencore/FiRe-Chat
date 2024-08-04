import { useContext } from "react"
import { profile } from "../../../assets"
import { logoutRequest } from "../../../services/auth/authentication"
import { AuthContext } from "../../../context/AuthContext"

const Navbar = () => {
    const { currentUser } = useContext(AuthContext)
  return (
    <div className="flex item-center justify-center md:justify-between  text-_dimSoft bg-_dark h-12 p-3">
      <span className="hidden md:block md:font-bold md:cursor-default ">FiReChat</span>
      <div className="flex gap-3 justify-evenly">
        <img src={profile} alt="profile" className="bg-_dimSoft h-6 w-6 rounded-full object-cover"/>
        <span className="font-normal text-base cursor-default">{currentUser?.displayName}</span>
        <button onClick={logoutRequest} className="bg-_dark text-_dimSoft text-xs border-none rounded cursor-pointer p-1 ss:static ss:bg-_dimDark absolute bottom-2 left-2">Logout</button>
      </div>
    </div>
  )
} 
export default Navbar
