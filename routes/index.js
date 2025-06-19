import express from 'express';

import authRouter from './authRoutes.js';
import postRouter from './postRoutes.js';
import commentRouter from './commentRoutes.js';
import userRouter from './userRoutes.js';

const router = express.Router();

router.use('/auth', authRouter);
router.use('/posts', postRouter);
router.use('/comments', commentRouter);
router.use('/users', userRouter);

export default router;
