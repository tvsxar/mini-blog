import { Router, Routes, Route } from 'react-router-dom';

import Navbar from "./Navbar";
import HomePage from '../pages/HomePage';

function AppRouter() {
  return (
    <>
        <Navbar />

        <Routes>
            <Route path='/' element={<HomePage />} />
        </Routes>
    </>
  )
}

export default AppRouter
