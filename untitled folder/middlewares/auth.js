import jwt from "jsonwebtoken"

const authenticateToken =async  (req,res,next) =>{
    // console.log("req",req);
    const token = req.header('Authorization')

    if(!token) return res.sendStatus(403)

        try {
            const decoded = await jwt.verify(token, 'abcd123456789');
                console.log("decoded",decoded);
            req.user = decoded;
            next();
          } catch (error) {
            return res.status(401).json({ message: 'Unauthorized' });
          }
        }

export default authenticateToken