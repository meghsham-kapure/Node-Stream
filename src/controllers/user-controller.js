import asyncHandler from "../utils/async-handler.js";

// POST http://localhost:4040/users/register
const registerUser = asyncHandler(async (req, res) => {
    res.status(200).json({
        message: "OK",
        description: "Request Fullfilled, User Registerd Successfully! ",
    });
});

export { registerUser };
