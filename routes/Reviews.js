const express = require('express');
const mongoose = require('mongoose');

const router = express.Router();

const Review = require('../models/Reviews');

router.post('/', async(req, res, next) => {
    const review = new Review({
        _id: new mongoose.Types.ObjectId(),
        resturantId: req.body.resturantId,
        userId: req.body.userId,
        reviewTxt: req.body.txt
    });

    await review.save();
    res.status(200).json({
        review
    });
});


router.get('/', async (req, res, next) => {
    try{
    const reviews = await Review.find();
    res.status(200).json({
      reviews
    });
    }catch(err){
        throw err;
    }
});

module.exports = router;