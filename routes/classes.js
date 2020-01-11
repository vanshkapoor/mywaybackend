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

/**
 * @api {post} /classes/create create
 * @apiName create a class
 * @apiGroup Class
 * @apiPermission Teacher
 * 
 * @apiParam {string} name name of teacher
 * @apiParam {string} email email of teacher
 * @apiParam {string} subject subject of teacher
 * @apiParam {string} password password of teacher
 * 
 * @apiParamExample {json} response-example
 * 
 *{
 *   "TotalCLass": 1,
 *   "_id": "5e19b321d864e010d12cfd7d",
 *   "user": "5e19ac4bd864e010d12cfd7b",
 *   "students": [],
 *   "date": "2020-01-11T11:36:01.435Z",
 *   "__v": 0
 *}
 */
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

/**
 * @api {post} /classes/create/:id create
 * @apiName Add a student to class also updates studentclass
 * @apiGroup Class
 * @apiPermission Teacher
 * 
 * @apiParam {string} email email of student
 * 
 * @apiParamExample {json} request-example
 *{
 *	"email":"vansh@gmail.com",
 *}	
 * 
 * @apiParamExample {json} response-example
 * 
 *{
 *   "TotalCLass": 1,
 *   "_id": "5e19b3f9d864e010d12cfd7f",
 *   "user": "5e19ac4bd864e010d12cfd7b",
 *   "student": "vansh@gmail.com",
 *   "date": "2020-01-11T11:39:37.097Z",
 *   "__v": 0
 *}
 */
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




/**
 * @api {get} /user/all get all classes
 * @apiName get all classes
 * @apiGroup Teacher
 * @apiPermission Teacher
 * @apiParamExample {json} response-example
 * 
 *[
 *   {
 *       "TotalCLass": 2,
 *       "_id": "5e18a8ebce6f4e31bcb482a1",
 *       "user": "5e18893afa8c822145875a32",
 *       "students": [],
 *       "date": "2020-01-10T16:40:11.044Z",
 *       "__v": 0
 *   },
 *   {
 *       "TotalCLass": 4,
 *       "_id": "5e18c86344f59b442afe63c8",
 *       "user": "5e188b52d6b70722dca82280",
 *       "students": [
 *           {
 *               "_id": "5e18e5a620224558754a777c",
 *               "student": "v@gmail.com"
 *           },
 *           {
 *               "_id": "5e18e6faf27515597aa14b92",
 *               "student": "vv@gmail.com"
 *           },
 *           {
 *               "_id": "5e18e7db7eb78d59f648c78f",
 *               "student": "vsv@gmail.com"
 *           },
 *           {
 *               "_id": "5e199b6e636b8176c1b7f3d9",
 *               "student": "v1@gmail.com"
 *           }
 *       ],
 *       "date": "2020-01-10T18:54:27.966Z",
 *       "__v": 4
 *   },
 *   {
 *       "TotalCLass": 1,
 *       "_id": "5e18aa53ce6f4e31bcb482a2",
 *       "user": "5e188b52d6b70722dca82280",
 *       "students": [
 *           {
 *               "_id": "5e18eee0a5b3ff614b1f696d",
 *               "student": "vsv@gmail.com"
 *           },
 *           {
 *               "_id": "5e18f2fe08c9b7645cf6be18",
 *               "student": "vv@gmail.com"
 *           }
 *       ],
 *       "date": "2020-01-10T16:46:11.376Z",
 *      "__v": 12
 *   },
 *   {
 *       "TotalCLass": 1,
 *       "_id": "5e19b321d864e010d12cfd7d",
 *       "user": "5e19ac4bd864e010d12cfd7b",
 *       "students": [
 *           {
 *               "_id": "5e19b3f7d864e010d12cfd7e",
 *               "student": "vansh@gmail.com"
 *           }
 *       ],
 *      "date": "2020-01-11T11:36:01.435Z",
 *       "__v": 1
 *   }
 *]
 */
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



router.get('/current',passport.authenticate('jwt',{ session:false }),(req,res) => {
    res.json({usr : req.user});
});


/**
 * @api {get} /classes/teacher get current teachers classes
 * @apiName get current Teacher
 * @apiGroup Classes
 * @apiPermission Teacher
 * 
 * @apiParamExample {json} response-example
 * 
 *[
 *   {
 *       "TotalCLass": 1,
 *       "_id": "5e19b321d864e010d12cfd7d",
 *       "user": "5e19ac4bd864e010d12cfd7b",
 *       "students": [
 *           {
 *               "_id": "5e19b3f7d864e010d12cfd7e",
 *               "student": "vansh@gmail.com"
 *           }
 *       ],
 *       "date": "2020-01-11T11:36:01.435Z",
 *       "__v": 1
 *   }
 *]
 */
router.get('/teacher',passport.authenticate('jwt',{ session:false }),(req,res) => {
    Classes.find({user:req.user._id})
    .then((classes) => {
        res.json(classes)
    })
});



/**
 * @api {get} /classes/student get current students attendance record for all teachers
 * @apiName get current students attendance
 * @apiGroup Classes
 * @apiPermission student
 * 
 * @apiParamExample {json} response-example
 * 
 *[
 *   {
 *       "TotalCLass": 1,
 *       "_id": "5e18f2ff08c9b7645cf6be19",
 *       "user": "5e188b52d6b70722dca82280",
 *       "student": "vv@gmail.com",
 *       "date": "2020-01-10T21:56:15.851Z",
 *       "__v": 0
 *   }
 *]
 */
router.get('/student/',passport.authenticate('jwt',{ session:false }),(req,res) =>{
    // StudentClass.find({ $and:[ {student:req.user.name},{user:req.params.id} ] })
    let name = req.user.email;
    name = name.toString();
    console.log(name);

    StudentClass.find({student:name})
    .then(studentcls => {
        console.log(studentcls);
        res.json(studentcls)
    })

} )





module.exports = router;