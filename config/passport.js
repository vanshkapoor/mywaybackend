const JwtStrategy = require('passport-jwt').Strategy;
const ExtractJwt  = require('passport-jwt').ExtractJwt;
const mongoose    = require('mongoose');
const User        = mongoose.model('users');//accessing the users from model name
const Student     = mongoose.model('student');

var opts = {};
opts.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken();
opts.secretOrKey = 'secret';


module.exports = passport => {
	passport.use(
		new JwtStrategy(opts, (jwt_payload, done) => {

			Student.findById(jwt_payload.id)
			.then(user =>{
				if(user){
					return done(null,user);
					
				}
				else{
					User.findById(jwt_payload.id)
					.then(user => {
						if(user){
							return done(null, user);
						}
						return done(null, false);
					})
					.catch(err => console.log(err));
				}
				// return done(null, false);
			})
			.catch(err => console.log(err));


		})
	);
};
