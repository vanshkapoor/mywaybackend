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

/**
 * @api {post} /student/register create
 * @apiName create a Student
 * @apiGroup Student
 * 
 * @apiParam {string} name name of student
 * @apiParam {string} email email of student
 * @apiParam {string} password password of student
 * 
 * @apiParamExample {json} request-example
 *{
 *	"name":"vansh", 
 *	"email":"vanshstudent@gmail.com",
 *  "password":"112233"
 *}	
 * 
 * @apiParamExample {json} response-example
 * 
 *{
 *   "_id": "5e19b18dd864e010d12cfd7c",
 *   "name": "vansh",
 *   "email": "vanshstudent@gmail.com",
 *   "password": "$2a$10$s6UMOOao5njwFrgsIlJyn.QsBEUODS5odQG35CgU9.j23B3vKPq7m",
 *  "classes": 1,
 *   "__v": 0
 *}
 */
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


/**
 * @api {post} /student/login login
 * @apiName login a Student
 * @apiGroup Student
 * 
 * @apiParam {string} email email of student
 * @apiParam {string} password password of student
 * 
 * @apiParamExample {json} request-example
 *{
 *	"email":"vanshstudent@gmail.com",
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

/**
 * @api {get} /student/current get current student
 * @apiName get current student
 * @apiGroup Student
 * 
 * @apiParamExample {json} response-example
 * 
 *{
 *   "usr": {
 *       "_id": "5e19b18dd864e010d12cfd7c",
 *       "name": "vansh",
 *       "email": "vanshstudent@gmail.com",
 *       "password": "$2a$10$s6UMOOao5njwFrgsIlJyn.QsBEUODS5odQG35CgU9.j23B3vKPq7m",
 *       "classes": 1,
 *       "__v": 0
 *   }
 *}
 */
router.get('/current',passport.authenticate('jwt',{ session:false }),(req,res) => {
        console.log(req.user.name);
        res.json({usr : req.user});
});


/**
 * @api {get} /student/all get all students
 * @apiName get all students
 * @apiGroup Students
 * 
 * @apiParamExample {json} response-example
 * 
 *[
 *   {
 *       "_id": "5e1884e4176c1e1ccb18fd7c",
 *       "name": "vansh",
 *       "email": "vv@gmail.com",
 *       "password": "$2a$10$XjmeWb28tj7weFmFyCdKLesellxC4HU8fh6rHLlUScAdhQRmNW/lC",
 *       "__v": 0
 *   },
 *   {
 *       "_id": "5e188ac23925f821c4cc5696",
 *       "name": "vansh",
 *       "email": "vsv@gmail.com",
 *       "password": "$2a$10$Zhk49NzkElQ470.tF9VqLO.u0IYq06WNu3V1mlEJKGJ1K2uCC7I/G",
 *       "__v": 0
 *   },
 *   {
 *       "_id": "5e188b44d6b70722dca8227f",
 *       "name": "vansh",
 *       "email": "v@gmail.com",
 *       "password": "$2a$10$F0Uwo9IDQIMb7VBYpWOE4uqxVHgOQPBIgB/TjoXdCJDlwqrftfVIW",
 *       "classes": 1,
 *       "__v": 0
 *   },
 *   {
 *       "_id": "5e18fed7f79216694c14b716",
 *       "name": "vansh",
 *       "email": "v1@gmail.com",
 *       "password": "$2a$10$suHQSWy8K2Z1q94kzn05i.fb9cKUsj1gdXYBbKnR.hjhikUn/Zb4K",
 *       "classes": 1,
 *       "__v": 0
 *   },
 *   {
 *       "_id": "5e19b18dd864e010d12cfd7c",
 *       "name": "vansh",
 *       "email": "vanshstudent@gmail.com",
 *       "password": "$2a$10$s6UMOOao5njwFrgsIlJyn.QsBEUODS5odQG35CgU9.j23B3vKPq7m",
 *       "classes": 1,
 *       "__v": 0
 *   }
 *]
 */
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