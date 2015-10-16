/**
* AdminCategories.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
*/

var Categories = {
  // Enforce model schema in the case of schemaless databases
  schema: true,
  attributes: {
    title  : {
      type: 'string'
    },
    //children : {
    //  type: 'array'
    //},
    status: {
      type: 'boolean',
      defaultsTo: true
    },
    children:{
      model: 'Categories'
    }
    //parent: { model: 'Categories', required: false }
  }
};

module.exports = Categories;

