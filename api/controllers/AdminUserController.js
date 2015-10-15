/**
 * Admin UserController
 *
 * @description :: Server-side logic for managing Users
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */
var AdminUserController = {
    hi: function(req, res) {
        res.send("powered by ALexander shereminskiy")
    },
    view: function(req, res, next) {
        // Get an array of all users in th eUser collection
        User.find(function (err, users) {
            if(err) return next(err);
            res.view('admin/user/view', {users: users});
        });
    },
    create: function(req, res) {
        res.send("create action")
    },

    index: function(req, res) {
        User.find(function(err, users) {
            res.view({
                users: users
            });
        });
    }
}

module.exports = AdminUserController;
