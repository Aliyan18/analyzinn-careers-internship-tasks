const fs=require('fs');
const path = require('path');

const authName = path.join(__dirname,'..' ,'auth.json');
const secret_key = 'aliyan\'s_key';

const snpController=(req, res) => {
    fs.readFile(authName, 'utf-8', (err, data) => {
      if (err) {
        console.error(err);
        return res.status(500).send('Error reading user data.');
      }
  
      try {
        let authData = JSON.parse(data);
  
        authData.forEach(user => {
          if (user.username === req.body.username) {
            throw new Error('User already exists');
          }
        });
  
        authData.push(req.body);
  
        fs.writeFile(authName, JSON.stringify(authData, null, 2), (err) => {
          if (err) {
            console.error(err);
            return res.status(500).send('Error writing user data.');
          }
          res.send('User added successfully');
        });
      } catch (err) {
        console.error(err);
        res.status(400).send(err.message);
      }
    });
  }
  module.exports=snpController;