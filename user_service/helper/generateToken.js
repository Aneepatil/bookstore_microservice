import jwt from "jsonwebtoken";

export const generateToken =async(userDetail)=>{
    const token = await jwt.sign(userDetail,process.env.JWT_SECRET_KEY,{expiresIn:"5 days"})
    return token
}
