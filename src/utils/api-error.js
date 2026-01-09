class ApiError extends Error {
    constructor(
        statusCode = 500,
        message = "Something went wrong",
        errors = [],
        errorStackTrace = "",
    ) {
        super(message);
        this.data = null;
        this.success = false;
        this.statusCode = statusCode;
        this.message = message;
        this.errors = errors;

        if (errorStackTrace) {
            this.errorStackTrace = errorStackTrace;
        } else {
            Error.captureStackTrace(this, this.constructor);
        }
    }
}

export default ApiError;
