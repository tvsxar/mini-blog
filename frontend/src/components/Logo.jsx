import { Link } from 'react-router-dom'

function Logo() {
  return (
    <h1 className='font-bold text-lg sm:text-2xl'>
        <Link to='/'>Mini<span className="text-green-600">Blog</span></Link>
    </h1>
  )
}

export default Logo
