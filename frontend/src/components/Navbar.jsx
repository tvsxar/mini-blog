import { useNavigate } from "react-router-dom"
import { useContext } from 'react';

// Context
import { UserContext } from '../context/UserContext';

// Components
import AuthButtons from "./AuthButtons";
import UserButtons from "./UserButtons";
import Logo from './Logo';

function Navbar() {
  // Context
  const { user, logoutUser } = useContext(UserContext);

  // Navigate
  const navigate = useNavigate();

  async function handleLogout() {
    await logoutUser();

    navigate('/')
  }

  return (
    <nav 
    className="flex select-none items-center justify-between 
    border-b-2 border-gray-200 py-4 px-4 sm:px-12 lg:px-25">
        <Logo />

        {!user 
        ? <AuthButtons /> 
        : <UserButtons 
          handleLogout={handleLogout} 
        />}
    </nav>
  )
}

export default Navbar
