console.log('Starting express server')

import express from 'express'
import { PORT } from './config/env.js';
import userRouter from './routes/user.routes.js';
import authRouter from './routes/auth.routes.js';
import subscriptionRouter from './routes/subscription.routes.js'
import connectToDatabase from './database/mongodb.js';
import errorMiddleware from './middlewares/error.middleware.js';
import cookieParser from 'cookie-parser';
import arcjetMiddleware from '../tracker/middlewares/arcjet.middleware.js'
import workflowRouter from './routes/workflow.routes.js';

//intialise the app
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(arcjetMiddleware);

//using the routes
app.use('/api/v1/auth', authRouter);
app.use('/api/v1/users', userRouter);
app.use('/api/v1/subscriptions', subscriptionRouter);
app.use('/api/v1/workflows/', workflowRouter)

app.use(errorMiddleware);

app.get('/', (req, res) => {
    res.send('Welcome to the new');
})

app.listen(PORT, async () => {
    console.log(`Server running on port ${PORT}`);

    await connectToDatabase()
})

export default app