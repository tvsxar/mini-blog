import { Link } from 'react-router-dom'

function AuthButtons() {
  return (
    <div className="flex gap-2 sm:gap-3">
      <button className='border border-black text-black font-semibold text-md rounded-md px-3 h-8
    hover:bg-black hover:text-white duration-200 cursor-pointer'>
        <Link to="/account?mode=login">Sign In</Link>
      </button>

      <button className='bg-black text-white font-semibold text-md rounded-md px-3 h-8
      hover:bg-black/80 duration-200 cursor-pointer'>
        <Link to="/account?mode=register">Sign Up</Link>
      </button>
    </div>
  )
}

export default AuthButtons
