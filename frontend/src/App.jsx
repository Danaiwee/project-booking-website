import React from "react";
import { Route, Routes, useLocation } from "react-router-dom";

import Navbar from "./components/Navbar";
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import SignupPage from './pages/SignupPage';
import DetailsPage from './pages/DetailsPage';
import SearchPage from "./pages/SearchPage";

const App = () => {
  const location = useLocation();

  const isAuthPage = location.pathname === '/login' || location.pathname === '/signup';
  return (
    <div className="w-full h-full">
      {!isAuthPage && <Navbar />}

      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/login' element={<LoginPage />} />
        <Route path='/signup' element={<SignupPage />} />
        <Route path='/details/:id' element={<DetailsPage />} />
        <Route path='/search' element={<SearchPage />} />
      </Routes>
    </div>
  );
};

export default App;
