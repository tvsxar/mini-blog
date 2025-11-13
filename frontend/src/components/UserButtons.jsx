import { Link, useLocation } from 'react-router-dom';

function UserButtons({ handleLogout }) {
  const { pathname } = useLocation();
  const isCreating = pathname === '/post/new' || pathname.startsWith('/post/edit/');

  return (
    <div className="flex gap-2 sm:gap-3">
        {!isCreating &&
        <button className='text-black font-semibold text-md rounded-md px-3 h-8 
        cursor-pointer hover:text-green-600 duration-200'>
            <Link to='/post/new'>Create post</Link>
        </button>}

        <button onClick={handleLogout}
        className='border border-red-500 text-red-600 font-semibold text-sm rounded-md px-3 h-8
      hover:bg-red-500 hover:text-white duration-200 cursor-pointer'>
            Sign Out
        </button>
    </div>
  )
}

export default UserButtons
