class ApiResponse {
    constructor(status, message, data = "success"){
        this.status= status;
        this.message= message;
        this.data= data;
        this.success= statusCode < 400;
    }
}

export default ApiResponse;