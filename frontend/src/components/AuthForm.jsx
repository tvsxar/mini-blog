import { Link } from 'react-router-dom';

function AuthForm({ isLogin, handleSubmit, handleFormChange, formData, userError }) {
  return (
    <div className="w-full max-w-md border border-gray-200 rounded-xl shadow-sm p-8">
        <h2 className="text-2xl font-bold text-center mb-6">
          {isLogin ? 'Sign in to your account' : 'Create Account'}
        </h2>

        {/* Display errors */}
        {userError && <div className='text-red-500 py-1 mb-3'>{userError}</div>}

        <form onSubmit={handleSubmit}
        className="flex flex-col gap-4">
          {!isLogin && <div className="flex flex-col">
            <label className="text-sm font-semibold mb-1 text-gray-700">Username</label>
            <input
              type="text"
              name='username'
              value={formData.username}
              onChange={handleFormChange}
              placeholder="Enter your username"
              className="border border-gray-300 rounded-md px-3 py-2 text-sm focus:outline-none focus:border-green-600"
            />
          </div>}

          <div className="flex flex-col">
            <label className="text-sm font-semibold mb-1 text-gray-700">Email</label>
            <input
              type="email"
              name='email'
              value={formData.email}
              onChange={handleFormChange}
              placeholder="Enter your email"
              className="border border-gray-300 rounded-md px-3 py-2 text-sm focus:outline-none focus:border-green-600"
            />
          </div>

          <div className="flex flex-col">
            <label className="text-sm font-semibold mb-1 text-gray-700">Password</label>
            <input
              type="password"
              name='password'
              value={formData.password}
              onChange={handleFormChange}
              placeholder="Enter your password"
              className="border border-gray-300 rounded-md px-3 py-2 text-sm focus:outline-none focus:border-green-600"
            />
          </div>

          <button
            type="submit"
            className="mt-2 bg-green-600 text-white font-semibold text-sm py-2 rounded-md hover:bg-green-700 duration-200 cursor-pointer"
          >
            {!isLogin ? 'Sign Up' : 'Sign In'}
          </button>

          <p className="text-center text-sm text-gray-600 mt-4">
            {!isLogin ? 'Already have an account? ' : "Don't have an account? "}
            <Link to={isLogin ? '/account?mode=register' : '/account?mode=login'} className="text-green-600 font-semibold hover:underline">
              {isLogin ? 'Sign Up' : 'Sign In'}
            </Link>
          </p>
        </form>
      </div>
  )
}

export default AuthForm
