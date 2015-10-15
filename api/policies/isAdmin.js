/**
 * Created by alex on 14.10.15.
 */
module.exports = function (req, res, next) {
    // Initialize Passport
    passport.initialize()(req, res, function () {
        // Use the built-in sessions
        passport.session()(req, res, function () {
            // Make the user available throughout the frontend
            if(req.user.role == 'admin') {
                return next();
            } else {
                res.forbidden('You are not permitted to perform this action.');
            }
        });
    });
};
