import jwt from 'jsonwebtoken';

export  function Authentication (request,response,next){
    try{
        const secretkey = "hsDJDHJFHJHHFGBBVCBCVBNVER3434L22HU@UIJ#jjk$hjk%HK";
        const token = request.headers.authorization;
        const isverfired = jwt.verify(token,secretkey);

        console.log("Token is verified",isverfired);

        next();
    }

   
    catch(err){
        response.status(401).json({error:"authencation error"});
        console.log(err);
    }

}export default Authentication;