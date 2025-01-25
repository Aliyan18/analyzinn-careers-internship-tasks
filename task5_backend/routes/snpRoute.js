const express=require('express');
const router=express.Router(); 
//const snpController=require('');

const snpController=require('../controllers/snpController')

//const pathName = path.join(__dirname, 'index.html');


router.post('/', snpController);

  module.exports=router;