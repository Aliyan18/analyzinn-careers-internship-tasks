const express=require('express');
const router=express.Router(); 
const sessionMiddleware=require('../middleware/session')


router.use(sessionMiddleware)
router.post('/clear',(req,res)=>{
    req.session.destroy()
    res.clearCookie("connect.sid") 
   //  if(!req.session)
   //   req.session.cart=[]
   // console.log(req.sessionID)
     res.end()
    })
   router.post('/getData',(req,res)=>{
    
      res.status(200).json({sessionID:req.sessionID,message:'successful',cart:req.session.cart})

   })
   router.post('/add',(req,res)=>{
    
      if(!req.session.cart)
       req.session.cart=[]
    // console.log(req.sessionID)
     if(!req.body.item){
       res.status(400).json({message:"no cartItem provided "})
     return;
      }
       req.session.cart.push(req.body.item);
      console.log(req.body.item);
      console.log(req.session.cart);
      res.status(200).json({sessionID:req.sessionID,message:"successful",cart:req.session.cart});
   
    })

   module.exports=router;