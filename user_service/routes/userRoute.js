import express from 'express';
import { profile, allUsers, updateUser, deleteUser } from '../controllers/userController.js';
import { login, register } from '../auth/authController.js';

const userRoute = express.Router();

userRoute.get('/',allUsers)
userRoute.get('/:userId',profile)
userRoute.post('/register/',register)
userRoute.post('/login/',login)
userRoute.put('/update/:userId',updateUser)
userRoute.delete('/delete/:userId',deleteUser)

export default userRoute