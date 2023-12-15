import express from 'express';

import { login, signup } from '../controllers/auth.js';
import {getAllUsers, updateProfile} from '../controllers/users.js'
import auth from '../middlewares/auth.js'

const router = express.Router();

router.post('/signup', signup);  // <-- Use the signup controller function
router.post('/login', login);  // <-- Use the login controller function

router.get('/getAllUsers', getAllUsers)
router.patch('/update/:id', auth, updateProfile)

export default router;
