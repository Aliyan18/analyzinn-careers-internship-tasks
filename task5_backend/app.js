const express = require('express');
const fs = require('fs');
const path = require('path');
const jwt = require('jsonwebtoken');
const cors = require('cors');

const app = express();

app.use(cors());

const pathName = path.join(__dirname, 'index.html');
const authName = path.join(__dirname, 'auth.json');
const secret_key = 'aliyan\'s_key';

app.use(express.json()); // Required to parse JSON bodies
app.use(express.urlencoded({ extended: true }));

const corsOptions = {
  origin: 'http://localhost:5173', // Update with your frontend's origin
  optionsSuccessStatus: 200 // Some legacy browsers (IE11, various SmartTVs) choke on 204
};

app.post('/auth', (req, res) => {
  // Assuming req.body contains username and password sent from the client
  console.log(1);
  // Read the contents of auth.json file
  fs.readFile(authName, 'utf-8', (err, data) => {
    if (err) {
      console.error(err);
      return res.status(500).send('Error reading authentication data.');
    }
    console.log(2);
    try {
      const authData = JSON.parse(data);
      const token = jwt.sign({ email: req.body.username }, secret_key);

      let isAuthenticated = false;

      authData.forEach(obj => {
        console.log(typeof (req.body.username));
        console.log(typeof (obj.username));
        console.log(req.body.password);
        console.log(obj.password);

        if (req.body.username === obj.username && req.body.password === obj.password) {
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

app.post('/snp', (req, res) => {
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
});

// Start the server
app.listen(3000, () => {
  console.log('Server is running on http://localhost:3000');
});
