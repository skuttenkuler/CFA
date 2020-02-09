var passport = require("passport")
,  LocalStrategy  = require("passport-local").Strategy;
const bcrypt = require('bcryptjs');
var db = require("../models/");

//passport validation and authentication
passport.use('user', new LocalStrategy({
    }, function(email, password, done){
    var query = {email: email};
    //console.log(query)
    db.User.findOne(query, function(err, user){
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
passport.use('local-artist', new LocalStrategy({
    usernameField: "email",
    passwordField: "password",
    passReqToCallback: true,
}, function(req, email, password, done){
   //console.log("exectuted")
    db.Artist.findOne({
        where: {
            email: req.body.email
        }}).then(function(artist){
            //console.log(`here is ${artist}`)
            
        if(!artist){
            return done(null, false);
        }
        //console.log(`${password} and ${artist.password}`)
        bcrypt.compare(password, artist.password, function(err, result){
            if(err) throw err;
            //console.log(result)
            if(result){
                //console.log("here i am")
                return done(null, artist);
            } else{
                //console.log("there is an error")
                return done(null, false)
            }
        })
    })
}))
   
//sequalize serialize and deserialize the user to keep auth state across HTTP requests
passport.serializeUser(function(user, done){
    //console.log(`Serialized User: ${user}`)
    done(null, user);
 });

 passport.deserializeUser(function(obj, done){
     switch (obj.type){
         case 'user':
             db.User.findOneById(obj.id).then(
                 user => {
                     if(user){
                         done(null, user);
                     } else{
                         done(new Error('user not found:' + obj.email, null));
                     }
                 });
                break;
        case 'artist':
            //console.log("herreererre")
            db.Artist.findOne({where: {id:obj.id}}).then(
                user => {
                    if(user){
                        //console.log(`this is the:`)
                        //console.log(user)
                        done(null, user);
                    } else{
                        done(new Error('artist not found:' + obj.email, null));
                    }
                });
                break;
            default:
                done(new Error('no record type:', obj.type), null);
                break;
             
     }
 });

module.exports = passport;