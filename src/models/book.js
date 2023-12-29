const mongoose=require('mongoose');

const bookSchema= new mongoose.Schema({
    book_name:{
        type: String,
        required: true,
        minlength:2,
    },
    author_name:{
        type: String,
        required: true,
        minlength:2,
    },
    book_year:{
        type: Number,
        required: true,
        minlength:2,
    }

})

module.exports = mongoose.model('book',bookSchema);