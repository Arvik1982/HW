const { request, response } = require("express");
const Book = require('../models/book')

const getBooks=(request, response)=>{
    //get all users
return Book.find({}).then((data)=>{response.status(200).send(data)})
}
const getBook=(request, response)=>{
    //get user
    const {book_id}=request.params

    return Book.findById(book_id).then((user)=>{
       if(user=== null){
        {response.status(400).send('no book id')}
       } 
       else{ response.status(200).send(user)}
    
    }).
        catch((e)=>{response.status(500).send(e.message)})

}
const createBook=(request, response)=>{
    //create new user
 
return Book.create({...request.body}).then((user)=>{response.status(201).send(user)}).catch((e)=>{ response.status(500).send(e.message)})

}

const updateBook=(request, response)=>{
    //update user
const {book_id}=request.params
return Book.findByIdAndUpdate(book_id, {...request.body}).then((user)=>{response.status(200).send(user)}).catch((e)=>{ response.status(500).send(e.message)})    
}

const deleteBook=(request, response)=>{
    //delete user
const {book_id}=request.params
return Book.findByIdAndDelete(book_id).then((user)=>{

if(user===null){response.status(400).send('no book to delete')}
else{response.status(200).send('deleted')}
    

}).catch((e)=>{ response.status(500).send(e.message)}) 
}

module.exports ={
    getBooks,
    getBook,
    createBook,
    updateBook,
    deleteBook
}