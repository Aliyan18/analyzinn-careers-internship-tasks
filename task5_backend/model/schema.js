const mongoose = require('mongoose');

// Define the schema
const userSchema = new mongoose.Schema({
  id:String,
name: String,
  breed: String,
  type: String,
  price:Number,
  createdAt: { type: Date, default: Date.now }
});

// Create the model
const Pet = mongoose.model('pets', userSchema);
module.exports=Pet;