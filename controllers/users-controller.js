const bcrypt=require('bcryptjs');
const User=require('../models/user.js');

const usersController={};

usersController.index=(req,res)=>{
    console.log('usersController');
    User.findUserTodolist(req.user.id)
    .then(todolist=>{
        res.render('auth/user',{
            currentPage:'index',
            message:'ok',
            user:req.user,
            data:todolist,
        });
    }).catch(err=>{
        console.log(err);
        res.status(500).json({err:err});
    });
}

usersController.create=(req,res)=>{
    const salt=bcrypt.genSaltSync();
    const hash=bcrypt.hashSync(req.body.password,salt);
    User.create({
        username:req.body.username,
        email:req.body.email,
        password_digest:hash,
        firstname:req.body.firstname,
        lastname:req.body.lastname,
    }).then(user=>{
        req.login(user,(err)=>{
            if(err)return next(err);
            res.redirect('/user');
        });
    }).catch(err=>{
        console.log(err);
        res.status(500).json({error:err});
    });
}

module.exports=usersController;