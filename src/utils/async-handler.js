const asyncHandlerTC = (fun) => async (req, res, nxt) => {
    try {
        await fun(req, res, nxt);
    } catch (error) {
        res.status(error.code || 500).json({ success: false, message: error.message });
    }
};

const asyncHandlerPromise = (fn) => (req, res, next) => {
    Promise.resolve(fn(req, res, next)).catch(next);
};
err.message;
