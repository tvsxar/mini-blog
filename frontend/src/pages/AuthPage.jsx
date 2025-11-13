import { useSearchParams, useNavigate } from 'react-router-dom';
import { useState, useContext } from 'react';
import { UserContext } from '../context/UserContext';
import AuthForm from '../components/AuthForm';

function AccountPage() {
  // Context
  const { handleAuth, userError, userLoading } = useContext(UserContext);

  // Navigate
  const navigate = useNavigate();

  // Check what`s a mode
  const [searchParams] = useSearchParams();
  const mode = searchParams.get('mode');
  const isLogin = mode === 'login';

  // State for data from form
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: ''
  })

  function handleFormChange(e) {
    const { name, value } = e.target;

    setFormData(prev => ({...prev, [name] : value}))
  }

  async function handleSubmit(e) {
    e.preventDefault();

    const dataToSend = isLogin 
    ? { email: formData.email, password: formData.password } 
    : formData;

    // Login/Register new user
    const success = await handleAuth(mode, dataToSend);

    // Clear the form
    setFormData({ username: '', email: '', password: '' });

    // Navigate to HomePage if user logged in
    if(success) navigate('/')
  }

  if (userLoading) {
    return (
      <div className="flex justify-center items-center min-h-[80vh]">
        <p className="text-gray-500 text-lg">Loading...</p>
      </div>
    );
  }

  return (
    <div className="flex justify-center items-center min-h-[80vh] px-4">
        <AuthForm 
          isLogin={isLogin} 
          formData={formData}
          userError={userError}
          handleSubmit={handleSubmit}
          handleFormChange={handleFormChange} />
    </div>
  )
}

export default AccountPage
