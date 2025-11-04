import { Link } from "react-router-dom"

function Navbar() {
  return (
    <nav className="flex select-none items-center justify-between border-b-2 border-gray-200 py-4 px-4 sm:px-12 lg:px-25">
        <h1 className='font-bold text-lg sm:text-2xl'><Link to='/'>Mini<span className="text-green-600">Blog</span></Link></h1>

        <div className="flex gap-2 sm:gap-3">
            <button className='text-black font-semibold text-md rounded-md px-3 h-8 
            cursor-pointer hover:text-green-600 duration-200'>
                <Link to="/account?mode=login">Sign In</Link>
            </button>
            <button className='text-black font-semibold text-md rounded-md px-3 h-8 
            cursor-pointer hover:text-green-600 duration-200'>
                <Link to="/account?mode=register">Sign Up</Link>
            </button>
        </div>
    </nav>
  )
}

export default Navbar
