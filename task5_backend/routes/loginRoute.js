const express=require('express');
const router=express.Router();
const fs=require('fs');

const path=require('path');
//const pathName = path.join(__dirname, 'index.html');
const authName = path.join(__dirname,'..', 'auth.json');
const secret_key = 'aliyan\'s_key';

router.post('/', (req, res) => {
  const jwt = require('jsonwebtoken');  
  // Assuming req.body contains username and password sent from the client
    console.log(1);   let token=null;
    // Read the contents of auth.json file
    fs.readFile(authName, 'utf-8', (err, data) => {
      if (err) {
        console.error(err);
        return res.status(500).send('Error reading authentication data.');
      }
      console.log(2);
      try {
        const authData = JSON.parse(data);
  
        let isAuthenticated = false;
  
        authData.forEach(obj => {
          console.log(typeof (req.body.username));
          console.log(typeof (obj.username));
          console.log(req.body.password);
          console.log(obj.password);
  
          if (req.body.username === obj.username && req.body.password === obj.password) {
            token = jwt.sign({ username: req.body.username,role:obj.role }, secret_key);
            isAuthenticated = true;
            return;
          }
        });
  
        if (isAuthenticated) {
        
          res.send({ token });
        } else {
          res.status(401).send('Authentication failed.');
          throw new Error('Authentication not successful!');
        }
  
        console.log(3);
      } catch (error) {
        console.error('Error parsing JSON data:', error);
        res.status(500).send('Error parsing authentication data.');
      }
      console.log(4);
    });
  });
  module.exports=router;