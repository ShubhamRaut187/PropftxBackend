const mongoose = require('mongoose');

const MovieSchema = mongoose.Schema({
    Name:{
        type:String,
        required:true
    },
    Posters:{
        type:String,
        required:true,
        default:undefined
    },
    Ratings:{
        type:Number,
        required:true,
    },
    Category:{
        type:String,
        required:true
    },
    Description:{
        type:String,
        required:true
    }
})

const MovieModel = mongoose.model('movies',MovieSchema);

module.exports = {
    MovieModel
}