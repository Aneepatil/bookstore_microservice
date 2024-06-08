import express from 'express';
import { profile, allUsers, updateUser, deleteUser } from '../controllers/userController.js';
import { login, register } from '../auth/authController.js';
import { isLogin } from '../middleware/isLogin.js';
import { isAdmin } from './../middleware/isAdmin.js';

const userRoute = express.Router();

userRoute.get('/',isLogin,isAdmin,allUsers)
userRoute.get('/:userId',isLogin,profile)
userRoute.post('/register/',register)
userRoute.post('/login/',login)
userRoute.put('/update/',isLogin,updateUser)
userRoute.delete('/delete/',isLogin,isAdmin,deleteUser)

export default userRoute