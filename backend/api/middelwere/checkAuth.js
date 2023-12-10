const jwt = require('jsonwebtoken');

module.exports = (req,res,next)=>{
      try{
        const token = req.headers.authorization.split(" ")[1];
        console.log(token);
        const verify = jwt.verify(token,"this is the dommy token");
        if(verify){
            next();
        }
        else{
            return res.status(500).json({
                msg:'not valid type user'
            })
        }
      
      }
      catch(error){
        return res.status(500).json({
            msg:'invalid token'
        })
      } 
} 