const express = require('express');
const fs = require('fs');
const path = require('path');
const jwt = require('jsonwebtoken');
const cors = require('cors');
const mongoose=require('mongoose');
const app = express();




const corsOptions = {
  origin: 'http://localhost:5173', // Update with your frontend's origin
  optionsSuccessStatus: 200 // Some legacy browsers (IE11, various SmartTVs) choke on 204
,credentials:true

};
app.use(cors(corsOptions));
app.use(express.json()); // Required to parse JSON bodies
app.use(express.urlencoded({ extended: true }));
const uri='mongodb://localhost:27017/petstore';

mongoose.connect(uri)
.then(()=>console.log('connected to database'))
.catch((err)=>console.log('error connecting to database'));

app.use('/snp',require('./routes/snpRoute'));
app.use('/auth',require('./routes/loginRoute'));
app.post('/pets/add',require('./controllers/addPet'));
app.put('/pets/:id',require('./controllers/editPet'))


app.use('/cart',require('./routes/cartRoute'));


// Start the server
app.listen(3000, () => {
  console.log('Server is running on http://localhost:3000');
});
