import { Link } from "react-router-dom"

function Navbar() {
  return (
    <nav className="flex select-none items-center justify-between border-b-2 border-gray-200 py-4 px-25">
        <h1 className='font-bold text-lg sm:text-xl'><Link to='/'>MiniBlog</Link></h1>

        <div className="flex gap-2">
            <button className='text-black font-semibold text-sm rounded-md px-3 h-8 cursor-pointer hover:text-black/60 duration-200'><Link to="/account?mode=login">Sign In</Link></button>
            <button className='text-black font-semibold text-sm rounded-md px-3 h-8 cursor-pointer hover:text-black/60 duration-200'><Link to="/account?mode=register">Sign Up</Link></button>
        </div>
    </nav>
  )
}

export default Navbar
