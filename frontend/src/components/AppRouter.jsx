import { Routes, Route } from 'react-router-dom';

import Navbar from "./Navbar";
import Footer from "./Footer";
import HomePage from '../pages/HomePage';
import AuthPage from '../pages/AuthPage';
import PostPage from '../pages/PostPage';
import PostFormPage from '../pages/PostFormPage';
import ErrorPage from '../pages/ErrorPage';

function AppRouter() {
  return (
    <>
        <Navbar />

        <Routes>
            <Route path='/' element={<HomePage />} />

            <Route path='/post/new' element={<PostFormPage />} />

            <Route path='/post/edit/:id' element={<PostFormPage />} />

            <Route path='/account' element={<AuthPage />} />

            <Route path='/post/:id' element={<PostPage />} />

            <Route path="*" element={<ErrorPage message="Page not found" />} />
        </Routes>

        <Footer />
    </>
  )
}

export default AppRouter
