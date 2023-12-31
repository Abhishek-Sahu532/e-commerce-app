// import ErrorHandler from "../utils/errorHandler";
const ErrorHandler = require('../utils/errorHandler')

module.exports =(err,req, res, next)=>{

    err.statusCode = err.statusCode || 500;
    err.message= err.message || 'Internal Server Eroor';


    //wrong mongodb id error
    if(err.name === 'castError'){
        const message = `Resource not found, Invalid : ${err.path}`
    err = new ErrorHandler(message, 400)
    }
    res.status(err.statusCode ).json({
        success: false,
        // eroor: err.stack
        message: err.message
    })


}