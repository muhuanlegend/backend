
import Subscription from '../models/subscription.model.js'
import workflowClient from '../config/upstash.js'

export const createSubscription = async (req, res, next) => {
    try {
        const subscription = await Subscription.create({
            ...req.body,
            user: req.user._id,
        });

        await workflowClient.trigger({
            url: `${SERVER_URL}`
        })

        res.status(201).json({
            success: true,
            data: subscription
        })
    } catch (error) {
        console.log(error)
        next(error);
    }
}

export const getUserSubscriptions = async (req, res, next) => {
    try {
        //check if the user is the same with the one in tghe token
        if (req.user.id !== req.params.id) {
            const error = new Error('Unauthorized 🧐, Your not the owner of this account');
            error.status = 401;
            throw error;
        }

        const subscriptions = await Subscription.find({
            user: req.params.id
        })

        res.status(200).json({
            success: true,
            data: subscriptions
        })
    } catch (error) {
        console.log(error)
        next(error);
    }
}