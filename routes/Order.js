const express = require('express');
const mongoose = require('mongoose');

const router = express.Router();

const Order = require('../models/Order');

router.post('/', async(req, res, next) => {
    try {
        const selectedFoods = [];
        for(let food of req.body.selectedFoods){
            selectedFoods.push(food);
        }
        const order = new Order({
            _id: new mongoose.Types.ObjectId(),
             resturant: req.body.resturantId,
             userId: req.body.userId,
             orderedFoods: selectedFoods,
             subtotal: req.body.subtotal,
             deliveryFee: req.body.deliveryFee,
             total: req.body.total    ,
             deliveryDetails:{
                 area:req.body.area,
                 street: req.body.street,
                 houseNumber: req.body.houseNumber,
                 phone: req.body.phone
             }       
        });

        await order.save();
        res.status(200).json({
            message:"Order created successfully",
            order
        })
    } catch (error) {
        throw error;
    }
});

router.get('/', async(req, res, next) => {
    const orders = await Order.find()
     .populate('resturant userId', 'name address.area username' )
    res.status(200).json({
        orders
    })
})
module.exports = router;