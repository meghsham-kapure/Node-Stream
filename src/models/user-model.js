import mongoose from "mongoose";
import { Schema } from "mongoose";
import bcrypt from "bcrypt";
import { JsonWebTokenError } from "jsonwebtoken";
import jwt from "jsonwebtoken";

const userSchma = new Schema(
    {
        userName: {
            type: String,
            required: true,
            unique: true,
            lowercase: true,
            trim: true,
            index: true, // for faster searching
        },
        password: {
            type: String,
            required: [true, "Password is required"],
        },
        email: {
            type: String,
            required: true,
            unique: true,
            lowercase: true,
            trim: true,
        },
        fullName: {
            type: String,
            required: true,
            trim: true,
            index: true,
        },
        avatar: {
            type: String, // cloudinary url
            required: true,
        },
        coverImage: {
            type: String, // cloudinary url
        },
        watchHistory: [
            {
                type: Schema.Types.ObjectId,
                ref: "Video",
            },
        ],
        refreshToken: {
            type: String,
        },
    },
    {
        timestamps: true,
    },
);
// middleware that run just before the save operation after new record creation or modification in exsiting one.
// prefucntion takes 2 param (event, fucntion), here we must use function in order to get this keyword
userSchma.pre("save", async function (next) {
    if (this.isModified("passsword")) {
        this.password = bcrypt.hash(this.password, 10);
    }
    next();
});
7;
userSchma.methods.isPasswordCorrect = async function (password) {
    return await bcrypt.compare(password, this.password);
};

// install jsonwebtoken dependency

userSchma.methods.generateAccessToken = async function () {
    return (
        jwt.sign({
            _id: this._id,
            email: this.email,
            userName: this.userName,
            fullName: this.fullName,
        }),
        (process.env.ACCESS_TOKEN_SECRET,
        {
            expiresIn: ACCESS_TOKEN_EXPIRY,
        })
    );
};

userSchma.methods.generateRefreshToken = async function () {
    return jwt.sign({
        _id: this._id,
        email: this.email,
        userName: this.userName,
        fullName: this.fullName,
    });
    (process.env.REFRESH_TOKEN_SECRET,
        {
            expiresIn: REFRESH_TOKEN_EXPIRY,
        });
};

export const User = mongoose.model("User", userSchma);
