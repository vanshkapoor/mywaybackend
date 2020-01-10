const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('../models/User');
const passport = require('passport');


//@route /user/
router.get('/',(req,res)=>{
    res.send("user");
})

router.post('/register', (req,res)=>{
    User.findOne({ email: req.body.email })
    .then(user =>{
        if(user){
            res.send(400).json({email:'email already exists'});
        }else{

                const newuser = new User({
                    name:req.body.name,
                    email:req.body.email,
                    password:req.body.password,
                    subject:req.body.subject    
                });
                bcrypt.genSalt(10,(err,salt) => {
                    bcrypt.hash(newuser.password, salt, (err,hash) => {
                        if(err) throw err;
                        newuser.password = hash;

                        newuser.save().
                        then(user => {                          
                            res.json(user);
                         })
                        .catch(err =>{console.log(err)})
                    
                    })
                })
        }
    })
});


//@route /user/login
router.post('/login',(req,res) =>{
    const email = req.body.email;
    const password = req.body.password;

    User.findOne({email : email })
    .then(user =>{
        if(!user){
            return res.status(404).json({email:"user not found"});
        }

        bcrypt.compare(password,user.password)
        .then(isMatch =>{
            if(isMatch){

                const payload = { id:user.id, name:user.name };
                jwt.sign(payload,'secret',{ expiresIn:5000 },(err,token) =>{
                    res.json({
                        success:true,
                        token:'Bearer ' + token
                    });
                });


                //res.json({mssg:'success'});
            }else{
                res.status(400).json({password:'password incorrect'});
            }
        })
    })
})

// @route /user/current
router.get('/current',passport.authenticate('jwt',{ session:false }),(req,res) => {
        res.json({usr : req.user});
});

//@route /user/all
//access public
//desc lists all users
router.get('/all',(req,res)=>{
    User.find()
    .then(users => {
        if(!users){
            res.status(404).json({error:'no user'});
        }
        res.json(users);
    })
    .catch(err => res.status(400).json({error:'no users found'}));
})


module.exports = router;