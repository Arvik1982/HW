const { request, response } = require("express");

const loggerOne=(request,response,next)=>{
    console.log('Log ONE')
    next()
}
module.exports = loggerOne