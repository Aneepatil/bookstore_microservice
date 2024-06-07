export const globalErrorHandler =async(err,req,res,next) => {
    const statusCode = res.statusCode ? res.statusCode : 500;
    const message = res.message ? res.message : "Internal Server Error";
    const stack = res.stack

    res.status(statusCode).json({message,stack})
}