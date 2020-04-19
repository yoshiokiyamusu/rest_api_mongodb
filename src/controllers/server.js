const Product = require('../models/product');


exports.getJsonDataPrueba = (req, res, next) => {
    Product.fetchAll()
      .then(products => {
        res.json(products);
      })
      .catch(err => {
        console.log(err);
      });
  };