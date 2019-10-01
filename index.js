const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const app = express();

const orderRoutes = require('./routes/Order');
const reviewRoutes = require('./routes/Reviews');
const resturantRoutes = require('./routes/Resturant');
const userRoutes = require('./routes/User');

mongoose.connect(
  "mongodb://momin:momin123@ds153552.mlab.com:53552/storybooks",
  () => {
    console.log("Database connected");
  }
);
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

app.use('/order', orderRoutes);
app.use('/review', reviewRoutes);
app.use('/resturant', resturantRoutes);
app.use('/user', userRoutes);

app.listen(5000, ()=> {
    console.log('Server connected on 5000');
});
