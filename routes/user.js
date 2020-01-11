const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('../models/User');
const passport = require('passport');



router.get('/',(req,res)=>{
    res.send("user");
})


/**
 * @api {post} /user/register create
 * @apiName create a Teacher
 * @apiGroup Teacher
 * 
 * @apiParam {string} name name of teacher
 * @apiParam {string} email email of teacher
 * @apiParam {string} subject subject of teacher
 * @apiParam {string} password password of teacher
 * 
 * @apiParamExample {json} request-example
 *{
 *	"name":"vanshsir", 
 *	"email":"vanshsir@gmail.com",
 *  "subject":"maths",
 *  "password":"112233"
 *}	
 * 
 * @apiParamExample {json} response-example
 * 
 * {
 *   "_id": "5e19ac4bd864e010d12cfd7b",
 *   "name": "vanshsir",
 *   "email": "vanshsir@gmail.com",
 *   "password": "$2a$10$bplb5mMvXYvoAQHlOzoEKOBLNyHhkb.IGqs8kNiysPDYbzxsbeJae",
 *   "subject": "maths",
 *   "__v": 0
 * }
 */
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
                            res.status(200).json(user);
                         })
                        .catch(err =>{console.log(err)})
                    
                    })
                })
        }
    })
});


/**
 * @api {post} /user/login login
 * @apiName login a Teacher
 * @apiGroup Teacher
 * 
 * @apiParam {string} email email of teacher
 * @apiParam {string} password password of teacher
 * 
 * @apiParamExample {json} request-example
 *{
 *	"email":"vanshsir@gmail.com",
 *  "password":"112233"
 *}	
 * 
 * @apiParamExample {json} response-example
 * 
 * {
 *   "success": true,
 *   "token": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVlMTlhYzRiZDg2NGUwMTBkMTJjZmQ3YiIsIm5hbWUiOiJ2YW5zaHNpciIsImlhdCI6MTU3ODc0MDg4OSwiZXhwIjoxNTc4NzQ1ODg5fQ.z_wV7LvpAodo3GbEoa9ktsl1uJj8WeS4Uz28h3lVCUo"
 * }
 */
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

/**
 * @api {get} /user/current get current teachers
 * @apiName get current Teacher
 * @apiGroup Teacher
 * 
 * @apiParamExample {json} response-example
 * 
 *{
 *   "usr": {
 *       "_id": "5e19ac4bd864e010d12cfd7b",
 *       "name": "vanshsir",
 *       "email": "vanshsir@gmail.com",
 *       "password": "$2a$10$bplb5mMvXYvoAQHlOzoEKOBLNyHhkb.IGqs8kNiysPDYbzxsbeJae",
 *       "subject": "maths",
 *       "__v": 0
 *   }
 *}
 */
router.get('/current',passport.authenticate('jwt',{ session:false }),(req,res) => {
        res.json({usr : req.user});
});


/**
 * @api {get} /user/all get all teachers
 * @apiName get all Teacher
 * @apiGroup Teacher
 * 
 * @apiParamExample {json} response-example
 * 
 * [
 *   {
 *       "_id": "5e177a5c4066097e45e37eeb",
 *       "name": "vansh",
 *       "email": "vansh@gmail.com",
 *       "password": "$2a$10$uk.f5LuGC/wPFKlWWw.oiuVYqHhzcdQvhTpabFqhy/JXFO/lgbutq",
 *       "__v": 0
 *   },
 *   {
 *       "_id": "5e1888ff32806520e603b7d1",
 *       "name": "vnsh",
 *       "email": "vkss@gmail.com",
 *       "password": "$2a$10$l9UFQZiSZ1OugwSqVwxISuIXHDR58CH0ggkQsaq05rQmv8SgvepYa",
 *       "__v": 0
 *   },
 *   {
 *       "_id": "5e18893afa8c822145875a32",
 *       "name": "vnsh",
 *       "email": "vk@gmail.com",
 *       "password": "$2a$10$IJVgeNRqDbipM.3iNOaXSe.R9lMEy.kfZ0N5pXz/GoAXZbxUEdDL.",
 *       "__v": 0
 *   },
 *   {
 *       "_id": "5e188b52d6b70722dca82280",
 *       "name": "vnsh",
 *       "email": "vk7@gmail.com",
 *       "password": "$2a$10$71pEWTb5rVCsXKQizheZ/OPv78FseE0Y5Hxq1hFBTfgIWUmsdAyZK",
 *       "subject": "maths",
 *       "__v": 0
 *   },
 *   {
 *       "_id": "5e19ac4bd864e010d12cfd7b",
 *       "name": "vanshsir",
 *       "email": "vanshsir@gmail.com",
 *       "password": "$2a$10$bplb5mMvXYvoAQHlOzoEKOBLNyHhkb.IGqs8kNiysPDYbzxsbeJae",
 *       "subject": "maths",
 *       "__v": 0
 *   }
 * ]
 */
router.get('/all',(req,res)=>{
    User.find()
    .then(users => {
        if(!users){
            res.status(404).json({error:'no user'});
        }
        res.status(200).json(users);
    })
    .catch(err => res.status(400).json({error:'no users found'}));
})


module.exports = router;