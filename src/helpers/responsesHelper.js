class ResponsesHelper {
    // handle success
    static handleSuccess(statusCode, message, data) {
        this.statusCode = statusCode;
        this.message = message;
        this.data = data;
        this.type = "success";
    };

    // handle error
    static handleError(statusCode, message) {
        this.statusCode = statusCode;
        this.message = message;
        this.type = "error";
    };

    // handle response
    static handelResponse(res) {
        if (this.type == "success") {
            return res.status(this.statusCode).json({
                status = this.statusCode,
                message: this.message,
                data: this.data
            });
        }
        return res.status(this.statusCode).json({
            status: this.statusCode,
            message: this.message
        });
    };
};

export default ResponsesHelper;
