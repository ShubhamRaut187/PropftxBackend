const jwt = require('jsonwebtoken');
const Authentication = (req,res,next) => {
    const Token = req.headers.authorization.split(' ')[1];
    if(!Token){
        res.status(401).send({'Message':'Please login to continue'});
        return;
    }
    jwt.verify(Token,'AuthToken',async(error,decoded)=>{
        if(decoded){
            const {UserID} = decoded;
            req.UserID = UserID;
            next();
        }
        else{
            req.status(401).send({'Message':'Invalid token, Please longin again...!'});
        }
    })
    
}
module.exports = {
    Authentication
}