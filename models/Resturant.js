const mongoose = require('mongoose');

const resturantSchema = new mongoose.Schema({
       _id: mongoose.Schema.Types.ObjectId,
       name: {
           type: String,
           required: true
       },
       foods:[
           {
               foodName:{
                   type: String,
                   required: true
               },
               price:{
                   type: Number,
                   required: true
               },
               catagory:{
                   type: String,
                   required: true
               }
           }
       ],
       address:{
             area:{
                 type: String,
                 required: true
             },
             street:{
                 type: String,
                 required: true
             },
             city:{
                 type: String,
                 required: true
             },
             country:{
                  type: String,
                  required: true
             }
       }
});

module.exports = mongoose.model('Resturant', resturantSchema)