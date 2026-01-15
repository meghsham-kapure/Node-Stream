// const asyncHandler = (requestHandler) => async (request, response, nxt) => {
//     try {
//         await requestHandler(request, response, nxt);
//     } catch (error) {
//         response.status(error.code || 500).json({ success: false, message: error.message });
//     }
// };

const asyncHandler = (requestHandler) => {
    return (request, response, next) => {
        Promise.resolve(requestHandler(request, response, next)).catch(next);
    };
};

export default asyncHandler;
