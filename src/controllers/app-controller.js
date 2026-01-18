import asyncHandler from "../utils/async-handler.js";

// GET http://localhost:4040/healthcheck
const healthCheck = asyncHandler(async (req, res) => {
    if (process.env.MAINTENANCE_MODE === "off") {
        res.status(200).json({
            message: "OK",
            description: `${process.env.APP_NAME} is running on ${process.env.APP_URL}:${process.env.APP_PORT}`,
        });
    } else if (process.env.MAINTENANCE_MODE === "on") {
        res.status(307).json({
            message: "OK",
            description: `${process.env.APP_NAME} is in maintaince`,
            redirect: `${process.env.TEMP_APP_URL}:${process.env.TEMP_APP_PORT}`,
        });
    }
});

export { healthCheck };
