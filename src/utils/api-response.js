class ApiResponse {
    constructor(statusCode = 200, data = {}, message = "successful") {
        this.success = true;
        this.statusCode = statusCode;
        this.data = data;
        this.message = message;
    }
}

export default ApiResponse;
