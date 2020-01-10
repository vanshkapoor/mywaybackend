var express = require('express')
var app = express()

var mongoose   = require('mongoose');
var bodyParser = require('body-parser');
const passport = require('passport');
const user = require('./routes/user');
const student = require('./routes/student');

app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

mongoose.connect('mongodb://vansh:a1a2a3a4@ds361488.mlab.com:61488/classroom',{ useNewUrlParser: true },(err)=>
    {
    if(err){
        console.log(err)
    }else{
        console.log("connected to db");
    }
    });

app.use(passport.initialize());
//passport 
require('./config/passport')(passport);

app.get('/',(req,res)=>{
    res.send("check !!");
    });

app.use("/user", user);
app.use("/student", student);


const port = process.env.PORT||5000;
app.listen(port , (err) =>{
    if(err){
        console.log(err);
    }else{
        console.log(`server is running on PORT ${port} `);
    }
})