import bcrypt from "bcryptjs";

export const comparePassword = async (password,userPassword)=>{
    const verifyPassword = await bcrypt.compare(password,userPassword)
    return verifyPassword
}