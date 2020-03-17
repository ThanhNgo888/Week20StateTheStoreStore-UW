const db = require("../models");
const axios = require("axios");
 
module.exports = {
  findAll: function (req, res) {
    var product = req.query.q;
    if (!product) {
      product = "iphone";
    }
    axios
      .get(
        `https://api.bestbuy.com/v1/products(longDescription=${
          product
        }*)?format=json&apiKey=${process.env.BEST_BUY_API_KEY}`
      )
      .then(results => {
         
        res.json([...results.data.products]);
      })
      .catch(err => console.log(err));
  },
  findByClass: function(req, res) {
    if (req.query.q === "") {
      req.query.q = "mobile";
    }
    console.log("REQ CONTR: ", req.query.q);
    res.json(true);
    
  },
  findById: function(req, res) {
    axios
      .get(
        `https://api.bestbuy.com/v1/products(productId=${
          req.params.id
        })?format=json&apiKey=${process.env.BEST_BUY_API_KEY}`
      )
      .then(results => {
        res.json(results.data.products[0]);
      })
      .catch(err => console.log(err));
  },
  create: function(req, res) {
    db.Product.create(req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  update: function(req, res) {
    db.Product.findOneAndUpdate({ _id: req.params.id }, req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  remove: function(req, res) {
    db.Product.findById({ _id: req.params.id })
      .then(dbModel => dbModel.remove())
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  }
};
