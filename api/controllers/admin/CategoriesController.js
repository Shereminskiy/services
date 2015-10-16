/**
 * AdminCategoriesController
 *
 * @description :: Server-side logic for managing Admincategories
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

var CategoriesController = {

    create: function(req, res) {
        var title = req.param('title', null);
        if (req.xhr && title) {
            Categories.create(req.body, function(err, model){
                console.log(model)
                if(err) return res.json({ err: err }, 500);
                res.json(model);
            });
        } else {

            res.view('admin/categories/create', {layout: null});
        }
    },
    index: function(req, res) {
        Categories.find(function(err, categories) {
            res.view('admin/categories/index', {
                categories: categories,
                layout: 'admin-layout'

            });
        });
    }
};

module.exports = CategoriesController;
