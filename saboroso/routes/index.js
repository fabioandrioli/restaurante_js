var menus = require('./../includes/menu');
var express = require('express');

var contact = require('../includes/contacts');
var reservations = require('./../includes/reservation');


var router = express.Router();
var validate = require('./../validations/validation')

/* GET home page. */
router.get('/', function(req, res, next) {
  menus.getMenus().then(results => {
    res.render('index', { //nome do arquivo dentro da pasta view
      title: 'Restaurante saboroso',
      background:'images/img_bg_1.jpg',
      isHome:true,
      menus:results,
      h1: "Restaurante Saboroso",
    });
  });
});

router.get('/menu', function(req, res, next) {
 
  menus.getMenus().then(results => {
    res.render('menu', { //nome do arquivo dentro da pasta view
      title: 'Menu - Restaurante saboroso',
      isHome:false,
      menus:results,
      background:'images/img_bg_1.jpg',
      h1: "Saboreie nosso menu!",
    });
  });
    
});

router.get('/reservation', function(req, res, next) {
  reservations.render(req,res);
});


router.post('/reserva', function(req, res, next) {
  if(validate.reserve(req.body,req,res,reservations)){
    reservations.save(req.body).then(results => {
      req.body = {};
      reservations.render(req,res,null,"Reserva realizada com sucesso");
    }).catch(err => {
      reservations.render(req,res,err.message);
    })
  }
});

router.get('/services', function(req, res, next) {
  res.render('services', { //nome do arquivo dentro da pasta view
    title: 'Services - Restaurante saboroso',
    isHome:false,
    background:'images/img_bg_1.jpg',
    h1: "É um prazer poder servir!",
  });
});

router.get('/contact', function(req, res, next) {
  contact.render(req,res);
});

router.post('/contact-form', function(req, res, next) {
  contact.save(req.body).then(results => {
    req.body = {};
    contact.render(req,res,null,"Mensagem enviada com sucesso");
  }).catch(err => {
    contact.render(req,res,err.message);
  })
});

module.exports = router;
