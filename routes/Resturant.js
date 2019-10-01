const express = require('express');
const mongoose = require('mongoose');

const router = express.Router();

const Resturant = require('../models/Resturant');

router.post('/', async (req, res, next) => {
   try {
    const foods = [];
    for (let food of req.body.foods) {
        foods.push(food);
    }
    const resturant = new Resturant({
      _id: new mongoose.Types.ObjectId(),
      name: req.body.name,
      foods,
      address: {
        area: req.body.area,
        street: req.body.street,
        city: req.body.street,
        country: req.body.country
      }
    });

   await resturant.save();
   res.status(200).json({
       resturant
   })
   } catch (error) {
       throw error;
   }
});

module.exports = router;