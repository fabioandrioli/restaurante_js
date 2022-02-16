var connection = require('./../includes/db');
var menus = require('./../includes/menu');
var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  menus.getMenus().then(results => {
    res.render('menu', { //nome do arquivo dentro da pasta view
      title: 'Restaurante saboroso',
      menus:results,
    });
  });
});

router.get('/menu', function(req, res, next) {
 
  menus.getMenus().then(results => {
    res.render('menu', { //nome do arquivo dentro da pasta view
      title: 'Menu - Restaurante saboroso',
      menus:results,
      background:'images/img_bg_1.jpg',
      h1: "Saboreie nosso menu!",
    });
  });
    
});

router.get('/reservation', function(req, res, next) {
  res.render('reservation', { //nome do arquivo dentro da pasta view
    title: 'Reserva - Restaurante saboroso',
    background:'images/img_bg_2.jpg',
    h1: "Reserve uma Mesa!",
  });
});

router.get('/services', function(req, res, next) {
  res.render('services', { //nome do arquivo dentro da pasta view
    title: 'Services - Restaurante saboroso',
    background:'images/img_bg_1.jpg',
    h1: "É um prazer poder servir!",
  });
});

router.get('/contact', function(req, res, next) {
  res.render('contact', { //nome do arquivo dentro da pasta view
    title: 'Contact - Restaurante saboroso',
    background:'images/img_bg_3.jpg',
    h1: "Diga um oi!",
  });
});

module.exports = router;
