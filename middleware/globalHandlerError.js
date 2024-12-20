export const globalErrorHandler = (err, req, res, next) => {
    const status = err?.statusCode || 500;
    const message = err?.message || 'Internal Server Error';
    const stack = err?.stack || '';

    res.status(status).json({
        stack,
        status,
        message
    });
};

export class AppError extends Error {
    constructor(message, statusCode) {
      super(message);
      this.statusCode = statusCode;
      this.isOperational = true; // Hatanın uygulama hatası olduğunu belirtir
    }
  }

export const notFound =  ( req, res, next) => {
   const err = new Error(`Route ${req.originalUrl} not found`);
   next(err);
}
