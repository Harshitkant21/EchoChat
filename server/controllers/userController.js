// this file contain the buisness logic for the user like login register and logout functions

import { User } from "../models/userModel.js";
import bcrypt from "bcryptjs";
import { config } from "dotenv";
import jwt from "jsonwebtoken";

export const register = async (req, res) => {
  try {
    const { fullName, userName, password, confirmPassword, gender } = req.body;
    if (!fullName || !userName || !password || !confirmPassword || !gender) {
      return res.status(400).json({ message: "All fields require." });
    }
    if (password !== confirmPassword) {
      return res.status(400).json({ message: "Password not matched." });
    }

    const user = await User.findOne({ userName });
    if (user) {
      return res.status(400).json({ message: "Username already exists." });
    }
    // hashing password to protect user data for security breach it convert the user password to a hashed value means it add some randome char values to is so that it will be difficult for the hacker to crack the password
    const handlePassword = await bcrypt.hash(password, 10);

    // to add profile photo
    const maleProfilePhoto = `https://avatar.iran.liara.run/public/boy?username=${userName}`;
    const femaleProfilePhoto = `https://avatar.iran.liara.run/public/girl?username=${userName}`;
    await User.create({
      fullName,
      userName,
      password: handlePassword,
      profilePhoto: gender === "male" ? maleProfilePhoto : femaleProfilePhoto, // ternary operator to check the gender and assign the profile photo

      gender,
    });
    return res.status(201).json({
      message: "Account created",
      success: true,
    });
  } catch (error) {
    console.log(error);
  }
};

export const login = async (req, res) => {
  try {
    const { userName, password } = req.body;
    if (!userName || !password) {
      return res.status(400).json({ message: "All fields require." });
    }
    const user = await User.findOne({ userName });
    if (!user) {
      return res.status(400).json({
        message: "Incorrect details",
        success: false,
      });
    }
    const isPasswordMatched = await bcrypt.compare(password, user.password);
    if (!isPasswordMatched) {
      return res.status(400).json({
        message: "Incorrect details",
        success: false,
      });
    }
    const tokenData = {
      userId: user._id,
    };
    // this token expires after 1 day
    const token = await jwt.sign(tokenData, process.env.JWT_SECRET_KEY, {
      expiresIn: "1d",
    });
    // if i want to store token in the form of cookie
    return res
      .status(200)
      .cookie("token", token, { maxAge: 1 * 24 * 60 * 60 * 1000 ,httponly:true,sameSite:'strict'}).json({
        _id:user._id,
        userName:user.userName,
        fullName:user.fullName,
        profilePhoto:user.profilePhoto
      });
  } catch (error) {
    console.log(error);
  }
};


export const logout = (req,res)=>{
    try {
        return res.status(200).cookie("token","",{maxAge:0}).json({
            message:"user logged out successfully."
        })
    } catch (error) {
        console.log(error);
    }
}