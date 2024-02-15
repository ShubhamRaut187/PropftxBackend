const {UserModel} = require('../Models/User.model');
const Authorization = async(req,res,next) => {
    const UserID = req.UserID;
    try {
        const User = await UserModel.findOne({_id:UserID});
        if(User.Role === 'Admin'){
            next();
        }
        else{
            res.status(401).send({"Message":"You are not authorized"})
        }
    } catch (error) {
        console.log(error);
        res.status(500).send({'Message':'Error while authorizing user'});
    }
}

module.exports = {
    Authorization
}