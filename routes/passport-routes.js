const db = require('../models');
var bcrypt = require('bcryptjs');
const passport = require('passport');
const path = require('path');



module.exports = app => {
//register users
app.post("/api/users/register", (req, res) => {
    console.log(req.body)
    
    //set new User
    db.User.create({
        type: req.body.type,
        username:req.body.username,
        email:req.body.email,
        password: req.body.password
    })
    console.log(User)
    //validation
    req.checkBody('email','Email is Required').notEmpty();
    req.checkBody('password','Password is Required').notEmpty();
    error = req.validationErrors();
    
    if(error){
        res.render({errors:err});
    } else {
        //hash password for security
        bcrypt.genSalt(10, function(err,  salt){
            bcrypt.hash(db.User.password, salt, function(err, hash){
                if(!err){
                    db.User.password = hash;
                } db.User.save(function(err){
                    if(!err){
                        console.log("successful register")
                        res.redirect('/login')
                    }
                })
            })
        });
    }
});
    
app.post("/api/artists/register", (req, res) => {

        //add new Artist
        db.Artist.create({
            type: req.body.type,
            name: req.body.name,
            email: req.body.email,
            password: req.body.password
        })
        //validate
        req.checkBody('name','Name is Required').notEmpty();
        req.checkBody('email','Email is Required').notEmpty();
        req.checkBody('password','Password is Required').notEmpty();
        err = req.validationErrors();
        if(err){
            res.render({errors:err});
        } else{
            //hash password
            bcrypt.genSalt(10, function(err, salt){
                bcrypt.hash(db.Artist.password, salt, function(err, hash){
                    if(!err){
                        db.Artist.password = hash;
                    } db.Artist.sync(function(err){
                        if(!err){
                            console.log("successful register")
                            res.redirect('/login')
                        }
                    })
                })
            })
        }
    });

}