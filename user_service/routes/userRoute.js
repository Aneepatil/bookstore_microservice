import express from 'express';
import { profile, allUsers, updateUser, deleteUser, singleUser } from '../controllers/userController.js';
import { login, register } from '../auth/authController.js';
import { isLogin } from '../middleware/isLogin.js';
import { isAdmin } from './../middleware/isAdmin.js';

const userRoute = express.Router();

userRoute.get('/',isLogin,isAdmin,allUsers)
userRoute.get('/profile',isLogin,profile)
userRoute.get('/single/:userId',isLogin,isAdmin,singleUser)
userRoute.post('/register/',register)
userRoute.post('/login',login)
userRoute.put('/update/',isLogin,updateUser)
userRoute.delete('/delete/',isLogin,isAdmin,deleteUser)

export default userRoute