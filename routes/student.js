const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('../models/User');
const passport = require('passport');
const Student = require('../models/Student');

//@route /user/
router.get('/',(req,res)=>{
    res.send("student");
})

router.post('/register', (req,res)=>{
    Student.findOne({ email: req.body.email })
    .then(student =>{
        if(student){
            res.send(400).json({email:'email already exists'});
        }else{

                const newuser = new Student({
                    name:req.body.name,
                    email:req.body.email,
                    password:req.body.password,
                    classes:req.body.classes    
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

    Student.findOne({email : email })
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
        console.log(req.user.name);
        res.json({usr : req.user});
});

//@route /user/all
//access public
//desc lists all users
router.get('/all',(req,res)=>{
    Student.find()
    .then(users => {
        if(!users){
            res.status(404).json({error:'no user'});
        }
        res.json(users);
    })
    .catch(err => res.status(400).json({error:'no users found'}));
})


module.exports = router;