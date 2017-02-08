// ROUTES TO API
// =============================================================================
var express = require('express'); // Gets an instance of express Router
var router  = express.Router();
var Entree = require('../models/entree'); // fetches the entree model

module.exports = function(app) { //exposes module to server.js
  // SETS ROUTE TO /entrees
  router.route('/entrees')
    // CREATE
    .post(function(req, res) {
      console.log('somthing is happening');
      Entree.create(req.body.product)
        .then((entree) => {res.json(entree); })
        .catch((err) => { if(err) console.log(err); });
    })
    // INDEX
    .get(function(req, res) {
      Entree.find({})
        .then((entrees) => {res.json(entrees); })
        .catch((err) => { if(err) console.log(err); });
    });

  // ROUTES ENDING IN /entrees/:id
  router.route('/entrees/:id')
    // SHOW
    .get(function(req, res) {
      Entree.findById(req.params.id)
        .then((entree) => {res.json(entree); })
        .catch((err) => { if(err) console.log(err); });
    })
    // UPDATE
    .put(function(req, res) {
      Entree.findOneAndUpdate({_id: req.params.id },
      req.body.entree, {new: true})
        .then((entree) => {res.json(entree); })
        .catch((err) => { if(err) console.log(err); });
    })
    // DESTROY
    .delete(function(req, res) {
      Entree.findOneAndRemove({_id: req.params.id})
        .then((user) => {res.json({ message: 'Entree removed!'}); })
        .catch((err) => { if(err) console.log(err); });
    });

    // REGISTER ROUTES
    // all routes will be prefixed with /api
    app.use('/api', router);

};
