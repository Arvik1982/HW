const { request, response } = require("express");

const loggerTwo=(request,response,next)=>{
    console.log('Log TWO')
    next()
}
module.exports = loggerTwo