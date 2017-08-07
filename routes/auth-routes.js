const express=require('express');
const authRouter=express.Router();
const passport=require('../services/auth/local');
const authHelpers=require('../services/auth/auth-helpers');
const usersController=require('../controllers/users-controller');

// Refer to the login page
authRouter.get('/login',authHelpers.loginRedirect,(req,res)=>{
    res.render('auth/login',{
        currentPage:'login',
    })
});
// Allows users to register
authRouter.get('/register',authHelpers.loginRedirect,(req,res)=>{
    res.render('auth/register',{
        currentPage:'register',
    });
});
// Post to register once users create an account so information goes somewhere to be seen
authRouter.post('/register',usersController.create);

authRouter.post('/login',passport.authenticate('local',{
    successRedirect:'/user',
    failureRedirect:'/auth',
    failureFlash:true,
  })
);
// Allows for logging out
authRouter.get('/logout',(req,res)=>{
    req.logout();
    res.redirect('/');
});
// Make sure to export authRouter
module.exports=authRouter;