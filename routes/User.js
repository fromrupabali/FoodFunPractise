const express = require('express');
const mongoose = require('mongoose');

const router = express.Router();

const User = require('../models/User');

router.post('/', async (req, res, next) => {
   try {
       const user = new User({
         _id: new mongoose.Types.ObjectId(),
         email: req.body.email,
         password: req.body.password,
         username: req.body.username
       });

       await user.save();
       res.status(200).json({
           id: user._id,
           email: user.email,
           username: user.username
       })
   } catch (error) {
       throw error;
   }
});

module.exports = router;