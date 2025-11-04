import { Routes, Route } from 'react-router-dom';

import Navbar from "./Navbar";
import Footer from "./Footer";
import HomePage from '../pages/HomePage';
import AccountPage from '../pages/AccountPage';
import PostPage from '../pages/PostPage';

function AppRouter() {
  return (
    <>
        <Navbar />

        <Routes>
            <Route path='/' element={<HomePage />} />

            <Route path='/account' element={<AccountPage />} />

            <Route path='/post/:id' element={<PostPage />} />
        </Routes>

        <Footer />
    </>
  )
}

export default AppRouter
