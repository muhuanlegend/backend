import { Router } from "express";
import { getUser, getUsers } from "../controllers/user.controller.js";
import authorize from "../middlewares/auth.middleware.js";
import errorMiddleware from "../middlewares/error.middleware.js";

//intitialise
const userRouter = Router();

userRouter.get('/', getUsers);


userRouter.get('/:id', authorize ,getUser);

userRouter.post('/', (req, res) => {
    res.send({ title: 'CREATE a new user' })
});

userRouter.put('/:id', (req, res) => {
    res.send({ title: 'UPDATE the user by id' })
});

userRouter.delete('/:id', (req, res) => {
    res.send({ title: 'DELETE the user by id' })
});


export default userRouter