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
             resturantId: req.body.resturantId,
             userId: req.body.userId,
             orderedFoods: selectedFoods,
             subTotal: req.body.subTotal,
             deliveryFee: req.body.deliveryFee,
             total: req.body.total    ,
             deliveryDetails:{
                 area:req.body.area,
                 street: req.body.street,
                 houseNumber: req.body.houseNumber,
                 phone: req.body.phone
             }       
        });

        console.log(order);
        res.status(200).json({
            message:"Order created successfully",
            order
        })
    } catch (error) {
        throw error;
    }
});

module.exports = router;