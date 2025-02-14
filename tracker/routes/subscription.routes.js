import { Router } from "express";
import authorize from "../middlewares/auth.middleware.js";
import { createSubscription, getUserSubscriptions } from "../controllers/subscription.controller.js";

//intialise it
const subscriptionRouter = Router();

subscriptionRouter.get('/', (req, res) => {
    res.send({title: 'GET all subscriptions'})
})

subscriptionRouter.get('/:id', (req, res) => {
    res.send({title: 'GET subscription details'})
})

subscriptionRouter.post('/', authorize, createSubscription)

subscriptionRouter.put('/:id', (req, res) => {
    res.send({title: 'UPDATE a subscription'})
})

subscriptionRouter.delete('/:id', (req, res) => {
    res.send({title: 'DELETE a subscription'})
})

subscriptionRouter.get('/user/:id', authorize, getUserSubscriptions)

subscriptionRouter.put('/:id/cancel', (req, res) => {
    res.send({title: 'CANCEL subscription'})
})

subscriptionRouter.put('/upcoming-renewals', (req, res) => {
    res.send({title: 'GET upcoming renewals'})
})


export default subscriptionRouter;
