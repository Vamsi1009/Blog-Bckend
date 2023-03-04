import express from "express";
import { createController,getAllDetailController,getUserController,loginUserControler } from "./controler/usercontrol.js";
import {Authentication} from './auth.js';
import { BlogIntrestController, BlogUsercontroller, getBlogUserIdController,getAllInterestsController } from "./controler/BlogController.js";

const router =express.Router();

router.post('/api/users',createController);
router.post('/api/login',loginUserControler);

router.get('/getUsersALL',getAllDetailController);
//router.get('/getId/:id',getUserController);
router.get('/getId/:id',getUserController);


router.post('/api/bloguser',BlogUsercontroller);
router.post('/api/BlogIntrest',Authentication,BlogIntrestController);
router.post('/api/blogId/:userId',Authentication, getBlogUserIdController);
router.post('/getinterests',Authentication,getAllInterestsController)


export {router as routes};