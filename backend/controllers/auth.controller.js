import bcrypt from "bcryptjs";

import { generateToken } from "../libs/generateToken.js";
import User from "../models/user.model.js";

export const signup = async (req, res) => {
  try {
    const { name, email, username, password, confirmPassword } = req.body;
    if (!name || !email || !username || !password || !confirmPassword) {
      return res.status(400).json({ error: "All fields are required" });
    }

    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    const isValidEmail = emailRegex.test(email);
    if (!isValidEmail) {
      return res.status(400).json({ error: "Invalid Email" });
    }

    const isPasswordMatched = password === confirmPassword;
    if (!isPasswordMatched) {
      return res.status(400).json({ error: "Password must be matched" });
    }

    const isEmailExists = await User.findOne({ email });
    if (isEmailExists) {
      return res.status(400).json({ error: "Email already used" });
    }

    const user = await User.findOne({ username });
    if (user) {
      return res.status(400).json({ error: "Username is already exists" });
    }

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    const profileImg = `https://avatar.iran.liara.run/username?username=${username}`;

    const newUser = new User({
      name,
      username,
      email,
      password: hashedPassword,
      profileImg,
    });

    if (newUser) {
      generateToken(newUser._id, res);
      await newUser.save();

      return res.status(200).json({
        _id: newUser._id,
        name: newUser.name,
        username: newUser.username,
        email: newUser.email,
        profileImg: newUser.profileImg,
        bookingItems: newUser.bookingItems,
      });
    } else {
      return res.status(400).json({ error: "Invalid user data" });
    }
  } catch (error) {
    console.log("Error in signup controller", error.message);
    return res.status(500).json({ error: "Internal server error" });
  }
};

export const login = async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({ error: "Invalid credentials" });
    }

    const isPasswordCorrect = await bcrypt.compare(password, user.password);
    if (!isPasswordCorrect) {
      return res.status(400).json({ error: "Invalid credentials" });
    }

    if (user) {
      generateToken(user._id, res);

      user.password = "";
      return res.status(200).json(user);
    }
  } catch (error) {
    console.log("Error in login controller: ", error.message);
    return res.status(500).json({ error: "Internal server error" });
  }
};

export const logout = async (req, res) => {
  try {
    res.cookie("jwt", "", { maxAge: 0 });
    return res.status(200).json({ message: "Logged out successfully" });
  } catch (error) {
    console.log("Error in logout controller", error.message);
    return res.status(500).json({ error: "Internal error server" });
  }
};

export const getMe = async (req, res) => {
  try {
    const userId = req.user._id;

    const user = await User.findById(userId).select("-password");
    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }

    return res.status(200).json(user);
  } catch (error) {
    console.log("Error in getMe controller: ", error.message);
    return res.status(500).json({ error: "Internal server error" });
  }
};
