const {Router} = require('express');
const {UserModel} = require('../Models/User.model')
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const UserRouter = Router();

// Signup route
UserRouter.post('/signup',async(req,res)=>{
    const {Name,Email,Password} = req.body;
    if(!Name || !Email || !Password){
        res.status(206).send({'Message':'Missing Fields'});
        return
    }
    try {
        const hashed_password = bcrypt.hashSync(Password,8);
        const New_User = new UserModel({
            Name,
            Email,
            Password
        })
        await New_User.save();
        res.status(201).send({'Message':'Signup Successful','User':New_User});
    } catch (error) {
        console.log(error);
        res.status(500).send({'Message':'Error in signup'});
    }
})

// Login route
UserRouter.post('/login',async(req,res)=>{
    const {Email,Password} = req.body;
    try {
        const User = await UserModel.findOne({Email:Email});
        if(!User){
            res.status(404).send({'Message':'User is not registered, please signup'});
            return
        }
        const hash = User.Password;
        const Correct_Password = bcrypt.compareSync(Password,hash);
        if(Correct_Password){
            const Token = jwt.sign({UserID:User._id},'AuthToken');
            res.status(200).send({'Message':'Login successful','User':User,'Token':Token});
        }
        else{
            res.status(400).send({"Message":"Invalid Credentials"})
        }
    } catch (error) {
        console.log(error);
        res.status(500).send({'Message':'Error in logging in'});
    }
})

module.exports = {
    UserRouter
}