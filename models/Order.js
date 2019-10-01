const mongoose = require('mongoose');

const orderSchema = mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  resturant: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Resturant",
    required: true
  },
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true
  },

  orderedFoods: [
    {
      foodName: {
        type: String,
        required: true
      },
      price: {
        type: Number,
        required: true
      },
      quantity: {
        type: Number,
        default: 1
      }
    }
  ],
  subtotal: {
    type: Number,
    required: true
  },
  deliveryFee: {
    type: Number,
    default: 0
  },
  total: {
    type: Number,
    required: true
  },
  deliveryDetails: {
    area: {
      type: String,
      requirred: true
    },
    street: {
      type: String,
      required: true
    },
    houseNumber: {
      type: String
    },
    phone: {
      type: Number,
      required: true
    }
  }
});

module.exports = mongoose.model('Order', orderSchema);