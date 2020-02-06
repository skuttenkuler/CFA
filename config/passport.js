var passport = require("passport");
var LocalStrategy  = require("passport-local").Strategy;

var db = require("../models/");

app.post("/register", (req, res) => {
    console.log(req.body.type)
    var type = req.body.type
    if(type === "user"){
    var newUser = new User({
        type: req.body.type,
        username:req.body.username,
        email:req.body.email,
        password: req.body.password
    })
    req.checkBody('email','Email is Required').notEmpty();
    req.checkBody('password','Password is Required').notEmpty();
    err = req.validationErrors();
    if(err){
        res.render({errors:err});
    } else {
        bcrypt.genSalt(10, funtion(err, salt){
            bcrypt.hash(newUser.password, salt, function(err, hash){
                if(!err){
                    newUser.password = hash;
                } newUser.save(function(err){
                    if(!err){
                        console.log("successful register")
                        res.redirect('/user')
                    }
                })
            })
        })
    }} else if(type === "artist") {
        var newArtist = new ArtistForm({
            name: req.body.name,
            email: req.boy.email,
            password: req.body.password
        })
        req.checkBody('email','Email is Required').notEmpty();
        req.checkBody('password','Password is Required').notEmpty();
        req.checkBody('name','Name is Required').notEmpty();
        err = req.validationErrors();
        if(err){
            res.render({errors:err});
        } else{
            bcrypt.genSalt(10, funtion(err, salt){
                bcrypt.hash(newArtist.password, salt, function(err, hash){
                    if(!err){
                        newArtist.password = hash;
                    } newArtist.save(function(err){
                        if(!err){
                            console.log("successful register")
                            res.redirect('/user')
                        }
                    })
                })
            })
        }
    }
})

//passport validation and authentication
passport.use('user', new LocalStrategy(function(email, password, done){
    var query = {email: email};
    User.findOne(query, function(err, user){
        if(err) throw err;
        if(!user){
            return done(null, false);
        }
        bcrypt.compare(password, user.password,  function(err,result){
            if(err) throw err;
            if(result){
                return done(null, user);
            } else{
                return done(null, false)
            }
        })
    })
}))
passport.use('artist', new LocalStrategy(function(email, password, done){
    var query = {email:email};
    Artist.findOne(query, function(err, artist){
        if(err) throw err;
        if(!artist){
            return done(null, false);
        }
        bcrypt.compare(password, artist.password, function(err, result){
            if(err) throw err;
            if(result){
                return done(null, artist);
            } else{
                return done(null, false)
            }
        })
    })
}))
   
//sequalize serialize and deserialize the user to keep auth state across HTTP requests
passport.serializeUser(function(user, cb){
    cb(null, user);
 });
 
 passport.deserializeUser(function(obj, cb){
     cb(null, obj)
 });
 
 module.exports = passport;