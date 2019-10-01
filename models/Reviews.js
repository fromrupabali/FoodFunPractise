const mongoose = require('mongoose');

const reviewSchema = new mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  resturantId: {
    type: mongoose.Schema.Types.ObjectId,
    required: true
  },
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    required: true
  },
  reviewTxt:{
      type: String,
      required: true
  },
  like:{
      type: Number
  }
});

module.exports = mongoose.model('Review', reviewSchema);