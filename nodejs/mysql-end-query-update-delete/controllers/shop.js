const Product = require('../models/product');
const Cart = require('../models/cart');
const Sequelize = require('sequelize');

const Op = Sequelize.Op;


exports.getProducts = (req, res, next) => {
  const filter = {
    where: {
      title: {
        [Op.like]: '%test%'
      },
      price: {
        // [Op.like]: '%test%'
        // [Op.eq]:'test'
        // [Op.like]: '%2%'  
        [Op.gte]: 12
      }
    }
  };

  Product.findAll(filter)
    .then(products => {

      res.render('shop/index', {
        prods: products,
        pageTitle: 'Vooy - Shop',
        path: '/'
      });

    })
    .catch(err => {
      console.log(err);
    });
};

exports.getProduct = (req, res, next) => {
  const prodId = req.params.productId;
  // Product.findById(prodId)
  //   .then(([product]) => {
  //     res.render('shop/product-detail', {
  //       product: product[0],
  //       pageTitle: product.title,
  //       path: '/products'
  //     });
  //   })
  //   .catch(err => console.log(err));

  Product.findByPk(prodId)
  .then( product =>{
    console.log(product);
    res.render('shop/product-detail',{
      product: product,
      pageTitle: product.title,
      path: '/products'
    });
  }).catch(
    err => console.log(err)
  )
};

exports.getIndex = (req, res, next) => {
  //get all products from mysql
  Product.findAll()
    .then(products => {

      res.render('shop/index', {
        prods: products,
        pageTitle: 'Vooy - Shop',
        path: '/'
      });

    })
    .catch(err => {
      console.log(err);
    });
};

exports.getCart = (req, res, next) => {
  Cart.getCart(cart => {
    Product.fetchAll(products => {
      const cartProducts = [];
      for (product of products) {
        const cartProductData = cart.products.find(
          prod => prod.id === product.id
        );
        if (cartProductData) {
          cartProducts.push({ productData: product, qty: cartProductData.qty });
        }
      }
      res.render('shop/cart', {
        path: '/cart',
        pageTitle: 'Your Cart',
        products: cartProducts
      });
    });
  });
};

exports.postCart = (req, res, next) => {
  const prodId = req.body.productId;
  Product.findById(prodId, product => {
    Cart.addProduct(prodId, product.price);
  });
  res.redirect('/cart');
};

exports.postCartDeleteProduct = (req, res, next) => {
  const prodId = req.body.productId;
  Product.findById(prodId, product => {
    Cart.deleteProduct(prodId, product.price);
    res.redirect('/cart');
  });
};

exports.getOrders = (req, res, next) => {
  res.render('shop/orders', {
    path: '/orders',
    pageTitle: 'Your Orders'
  });
};

exports.getCheckout = (req, res, next) => {
  res.render('shop/checkout', {
    path: '/checkout',
    pageTitle: 'Checkout'
  });
};
