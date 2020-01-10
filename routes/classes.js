const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('../models/User');
const Student = require('../models/Student');
const Classes = require('../models/Classes');
const StudentClass = require('../models/Studentclasses')
const passport = require('passport');

//@route /classes/
router.get('/',(req,res)=>{
    res.send("classes");
})

//@route /classes/create
router.post('/create',passport.authenticate('jwt',{ session:false }),(req,res)  => {
    Classes.find({user:req.user.id})
    .then((classes) => {
        if(classes){
            let classcount = classes.length;
            const cls={
                user: req.user.id,
                TotalCLass:classcount+1,
            }
            new Classes(cls).save().then(classes => res.json(classes))

        }else{
            const cls1={
                user: req.user.id,
                TotalCLass:1,
            }
            new Classes(cls1).save().then(classes => res.json(classes))
        }
    }).catch(err =>{
        res.status(404).json({error:'no classes found'})
    })
})

//@route /classes/create/:id
router.post('/create/:id', passport.authenticate('jwt',{ session:false }), (req,res) => {
    Classes.findById(req.params.id)
    .then(classes => {
        Student.find({email:req.body.email})
        .then(student => {
            // res.json(student.id);

            if(classes.students.filter(stud => stud.student === req.body.email).length > 0){
                return res.status(404).json({already:'student is already entered'})
            }


            classes.students.push({student:req.body.email})
            classes.save(classes)
            .then(cls =>{
                // res.json(cls);
                // updating the studentclass table                
                // student:req.body.email , user:req.user.id
                StudentClass.find({ $and:[ {student:req.body.email},{user:req.user.id} ] })
                .then(studentcls => {                    
                    // res.json(studentcls);
                    console.log("studentcls-------")
                    console.log(studentcls);
                    
                    if(studentcls.length > 0){                        
                        console.log("if studentcls-------")
                        const scls={
                            user:req.user.id,
                            TotalCLass:studentcls[0].TotalCLass + 1,
                            student:req.body.email,                    
                        }
                        console.log(scls);

                        StudentClass.findOneAndUpdate({ $and:[ {student:req.body.email},{user:req.user.id} ] },{$set : scls},{new:true}) 
                        .then(studentclass => {                                    
                            res.json(studentclass);
                        }).catch(err => {
                            console.log(err);
                            res.status(404).json({error:"knew it too"})
                        });



                    }
                    else{
                        const scls={
                            user:req.user.id,
                            TotalCLass:1,
                            student:req.body.email,                    
                        }

                        new StudentClass(scls).save().then(newstudclss => res.status(200).json(newstudclss))
                    }
                }).catch(err => {
                    console.log(err);
                    res.status(404).json({error:"knew it"})
                });
            })
            .catch(err => res.status(404).json({error:"no class student added"}));
        })
        .catch(err => res.status(404).json({error:"no student found"}))
    })
    .catch(err => res.status(404).json({error:"no class found"}))
})




// router.post('/students',passport.authenticate('jwt',{ session:false }),(req,res) => {
//     StudentClass.find({ $and:[ {student:req.body.email},{user:req.user.id} ] })
//     .then(studentcls => {                    
//         res.json(studentcls);
//     }).catch(err => {
//         console.log(err);
//         res.status(404).json({error:"knew it"})
//     });  
// })


router.get('/all',(req,res)=>{
    Classes.find()
    .then(classes => {
        if(!classes){
            res.status(404).json({error:'no user'});
        }
        res.json(classes);
    })
    .catch(err => res.status(400).json({error:'no classes found'}));
})

// @route /user/current
router.get('/current',passport.authenticate('jwt',{ session:false }),(req,res) => {
    res.json({usr : req.user});
});

router.get('/cur',passport.authenticate('jwt',{ session:false }),(req,res) => {
    Classes.find({user:req.user._id})
    .then((classes) => {
        res.json(classes)
    })
});


module.exports = router;
