import express from 'express';

import {userSignup,userLogin,allUsers} from '../controllers/user.controller';
const router=express.Router();



router.get('/',allUsers);
router.post('/signup',userSignup);
router.post('/login',userLogin);

export default router;