import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { motion } from "framer-motion";

import InputField from "../components/InputField";
import { useUserStore } from "../store/useUserStore.js";

const SignupPage = () => {
  const { signup, isLoading } = useUserStore();

  const [formData, setFormData] = useState({
    name: "",
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  useEffect(() => {
    setFormData({
      name: "",
      username: "",
      email: "",
      password: "",
      confirmPassword: "",
    });
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    setFormData({ ...formData, [name]: value });
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();

    signup(formData);
  };
  return (
    <motion.section
      className="w-full h-screen bg-[url(/travel-bg.jpg)] bg-cover bg-center overflow-hidden"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <motion.div
        className="w-full h-full bg-white/10 backdrop-blur-none flex items-center px-5 sm:px-0"
        initial={{ y: 20 }}
        animate={{ y: 0 }}
        transition={{ duration: 1 }}
      >
        <div className="w-full max-w-md flex flex-col items-center jsutify-center mx-auto bg-white-400 rounded-md bg-clip-padding backdrop-filter backdrop-blur-xl bg-opacity-40 border border-gray-100 ">
          <form
            className="w-full flex flex-col px-8 py-6"
            onSubmit={handleFormSubmit}
          >
            <h1 className="font-bold text-3xl text-white">Signup</h1>

            <div className="mt-5 flex flex-col gap-2">
              <InputField
                label="Full Name"
                id="name"
                name="name"
                placeholder="John Doe"
                value={formData.name}
                onChange={handleInputChange}
              />

              <InputField
                label="Username"
                id="username"
                name="username"
                placeholder="johndoe"
                value={formData.username}
                onChange={handleInputChange}
              />

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

              <InputField
                label="Confirm Password"
                id="confirmPassword"
                name="confirmPassword"
                type="password"
                placeholder="●●●●●●●●"
                value={formData.confirmPassword}
                onChange={handleInputChange}
              />
            </div>

            <button className="btn btn-info mt-4 text-white text-md">
              {isLoading ? "Signing up..." : "Sign up"}
            </button>
          </form>

          <div className="flex items-center relative mb-5">
            <p className="text-white text-md">Already have an account?&nbsp;</p>
            <Link to="/login" className="text-blue-500 font-bold">
              Login
            </Link>
          </div>
        </div>
      </motion.div>

      <Link
        to="/"
        className="absolute top-5 left-5 flex items-center jsutify-center mx-auto bg-white-400 rounded-md bg-clip-padding backdrop-filter backdrop-blur-xl bg-opacity-40 border border-gray-100 px-5 py-2"
      >
        <ArrowLeft className="text-white" />
      </Link>
    </motion.section>
  );
};

export default SignupPage;
