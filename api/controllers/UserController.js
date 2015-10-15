/**
 * UserController
 *
 * @description :: Server-side logic for managing Users
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */
var UserController = {
    hi: function(req, res) {

        res.send("powered by ALexander shereminskiy")
    },
    view: function(req, res) {

        console.log(req.user)

        res.send("view action")
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

module.exports = UserController;

