import { profile } from "../../../../public/assets"

const Search = () => {
  return (
    <div className="border-b border-solid border-b-_soft">
      <div className=""> 
        <input type="text" className="bg-transparent border-none text-_aumSoft focus:outline-none focus:ring-0 focus:border-b-_aumDark placeholder:text-_aumSoft" placeholder="find a user"/>
      </div>
      <div className="p-2 flex items-center gap-2 text-_dimSoft cursor-pointer hover:bg-_dark">
        <img src={profile} alt="profile_pic" className="w-12 h-12 rounded-full object-cover"/>
        <div>
          <span className="font-medium text-lg">Meidencore</span>
        </div>
      </div>
    </div>
  )
}
export default Search