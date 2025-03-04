import React, { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import {motion} from 'framer-motion';

import InputField from "../components/InputField";
import { useUserStore } from "../store/useUserStore";

const LoginPage = () => {
  const {login, isLoading, user} = useUserStore();
  const location = useLocation();
  const navigate = useNavigate();

  const from = location.state?.from?.pathname || '/';

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  useEffect(() => {
    setFormData({
      email: "",
      password: "",
    })
  }, [])

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    await login(formData);

    navigate(from, {replace: true});
  };

  useEffect(() => {
    if (user) {
      navigate(from, { replace: true });
    }
  }, [user, navigate, from]);
  return (
    <motion.section 
      className="w-full h-screen bg-[url(/travel-bg.jpg)] bg-cover bg-center overflow-hidden"
      initial={{opacity: 0}}
      animate={{opacity: 1}}
      transition={{duration: 0.5}}
    >
      <motion.div 
        className="w-full h-full bg-white/10 backdrop-blur-none flex items-center px-5 sm:px-0"
        initial={{y: 20}}
        animate={{y: 0}}
        transition={{duration: 1}}
      >
        <div className="w-full max-w-md flex flex-col items-center jsutify-center mx-auto bg-white-400 rounded-md bg-clip-padding backdrop-filter backdrop-blur-xl bg-opacity-40 border border-gray-100 ">
          <form
            className="w-full flex flex-col px-8 py-6"
            onSubmit={handleFormSubmit}
          >
            <h1 className="font-bold text-3xl text-white">Login</h1>

            <div className="mt-5 flex flex-col gap-2">
              <InputField
                label="Email"
                id="email"
                name="email"
                placeholder="johndoe@email.com"
                value={formData.email}
                onChange={handleInputChange}
              />

              <InputField
                label="Password"
                id="password"
                name="password"
                type="password"
                placeholder="●●●●●●●●"
                value={formData.password}
                onChange={handleInputChange}
              />
            </div>

            <button className="btn btn-info mt-4 text-white">Login</button>
          </form>

          <div className="flex items-center relative mb-5">
            <p className="text-white text-md">Do not have an account?&nbsp;</p>
            <Link to='/signup' className='text-blue-500 font-bold'>
              Signup
            </Link>
          </div>
        </div>
      </motion.div>

      <Link
        to="/"
        className="absolute top-5 left-5 flex items-center jsutify-center mx-auto bg-white-400 rounded-md bg-clip-padding backdrop-filter backdrop-blur-xl bg-opacity-40 border border-gray-100 px-5 py-2"
      >
        <ArrowLeft className='text-white' />
      </Link>
    </motion.section>
  );
};

export default LoginPage;
