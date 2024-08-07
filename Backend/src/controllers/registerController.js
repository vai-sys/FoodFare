const express = require("express");
const User = require("../model/userModel");
const bcrypt = require("bcryptjs");

const register = async (req, res) => {
    try {
        const { username, password } = req.body;

        const hashedPassword = await bcrypt.hash(password, 10);
        
        const newUser = await User.create({
            username,
            password: hashedPassword
        });

        res.status(201).json({
            msg: "User Created Successfully",
            user: {
                id: newUser._id,
                username: newUser.username
            }
        });
    } catch (error) {
        res.status(500).json({
            msg: "Error creating User",
            error: error.message
        });
    }
};

module.exports = {
    register
};