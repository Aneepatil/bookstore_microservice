export const globalErrorHandler = async (err, req, res, next) => {
  const errMsg = err.message ? err.message : "Somthing went wrong";
  const statusCode = err.status ? err.statusCode : 500;
  const stack = err.stack;

  res.status(statusCode).json({ message: errMsg, stack });
};
