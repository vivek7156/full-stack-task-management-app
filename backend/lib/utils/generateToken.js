import jwt from 'jsonwebtoken';

export const generateTokenAndSetCookie = (userId, res) => {
    const token = jwt.sign({ id: userId._id }, process.env.JWT_SECRET, {
        expiresIn: '15d',
    });
    res.cookie("token", token, {
        httpOnly: true,
        maxAge: 15 * 24 * 60 * 60 * 1000,
        sameSite: "strict",
        secure: process.env.NODE_ENV !== "development",
    });
    return token;
};