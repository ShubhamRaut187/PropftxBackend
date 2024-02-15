const mongoose = require('mongoose');

const UserSchema = mongoose.Schema({
    Name:{
        type:String,
        required:true
    },
    Email:{
        type:String,
        unique:true,
        required:true
    },
    Password:{
        type:String,
        required:true
    },
    Role:{
        type:String,
        required:true,
        default:'User'
    }
});

const UserModel = mongoose.model('users',UserSchema);

module.exports = {
    UserModel
}