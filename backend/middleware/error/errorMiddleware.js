import ApiError from './apiError.js'

export const errorMiddleware = (err, req, res, next) => {
    console.log(err);
    console.error(err.stack)

    err.statusCode = err.statusCode || 500
    err.status = err.status || 'error'

    // Here I need to check for each type of error that can occur
    // Http Error
    // API Error
    // Etc Error

    res.status(err.statusCode).json({
        status: err.statusCode,
        message: err.message
    })

    // if (err instanceof ApiError) {
    //     return res.status(err.status).json({message: err.message, errors: err.errors})
    // }

    return res.status(500).json({message: 'Oops, Internal Server Error', err})
};