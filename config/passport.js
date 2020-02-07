var passport = require("passport")
,  LocalStrategy  = require("passport-local").Strategy;

var db = require("../models/");

//passport validation and authentication
passport.use('user', new LocalStrategy(function(email, password, cb){
    var query = {email: email};
    db.User.findOne(query, function(err, user){
        if(err) throw err;
        if(!user){
            return cb(null, false);
        }
        bcrypt.compare(password, user.password,  function(err,result){
            if(err) throw err;
            if(result){
                return cb(null, user);
            } else{
                return cb(null, false)
            }
        })
    })
}))
passport.use('local-artist', new LocalStrategy(function(email, password, done){
    var query = {email:email};
    db.Artist.findOne(query, function(err, artist){
        if(err) throw err;
        if(!artist){
            return done(null, false);
        }
        bcrypt.compare(password, artist.password, function(err, result){
            if(err) throw err;
            if(result){
                return done(null, artist);
            } else{
                return cb(null, false)
            }
        })
    })
}))
   
//sequalize serialize and deserialize the user to keep auth state across HTTP requests
passport.serializeUser(function(user, cb){
    cb(null, user);
 });
 
 passport.deserializeUser(function(obj, cb){
     switch (obj.type){
         case 'user':
             db.User.findOneById(obj.id).then(
                 user => {
                     if(user){
                         cb(null, user);
                     } else{
                         cb(new Error('user not found:' + obj.email, null));
                     }
                 });
                break;
        case 'artist':
            db.Artist.findOneById(obj.id).then(
                artist => {
                    if(artist){
                        cd(null, artist);
                    } else{
                        cb(new Error('artist not found:' + obj.email, null));
                    }
                });
                break;
            default:
                cb(new Error('no record type:', obj.type), null);
                break;
             
     }
 });

module.exports = passport;