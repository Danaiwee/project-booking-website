import React, { useEffect } from "react";
import { Navigate, Route, Routes, useLocation } from "react-router-dom";
import { Toaster } from "react-hot-toast";

import { useUserStore } from "./store/useUserStore";
import Navbar from "./components/Navbar";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import SignupPage from "./pages/SignupPage";
import DetailsPage from "./pages/DetailsPage";
import SearchPage from "./pages/SearchPage";
import PurchasePage from "./pages/PurchasePage";
import SuccessPage from "./pages/SuccessPage";
import BookingPage from "./pages/BookingPage";
import { Loader2 } from "lucide-react";

const App = () => {
  const location = useLocation();
  const isAuthPage =
    location.pathname === "/login" || location.pathname === "/signup";

  const { checkAuth, user, isCheckingAuth } = useUserStore();

  useEffect(() => {
    checkAuth();
  }, [checkAuth]);

  if (isCheckingAuth) {
    return (
      <div className='w-full h-screen flex items-center justify-center'>
        <Loader2 className='animate-spin' size='lg' />
      </div>
    );
  }

  return (
    <div className='w-full h-full'>
      {!isAuthPage && <Navbar />}

      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route
          path='/login'
          element={!user ? <LoginPage /> : <Navigate to='/' />}
        />
        <Route
          path='/signup'
          element={!user ? <SignupPage /> : <Navigate to='/' />}
        />
        <Route
          path='/details/:id'
          element={
            user ? (
              <DetailsPage />
            ) : (
              <Navigate to='/login' state={{ from: location }} />
            )
          }
        />
        <Route path='/search' element={<SearchPage />} />
        <Route
          path='/purchase/:id'
          element={user ? <PurchasePage /> : <Navigate to='/login' />}
        />
        <Route
          path='/purchase/success/:id'
          element={user ? <SuccessPage /> : <Navigate to='/login' />}
        />
        <Route
          path='/bookings/:id'
          element={user ? <BookingPage /> : <Navigate to='/login' />}
        />
      </Routes>
      <Toaster />
    </div>
  );
};

export default App;
