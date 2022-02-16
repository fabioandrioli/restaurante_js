var connection = require('./../includes/db');
var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  connection.query(
    'SELECT * FROM tb_menus ORDER BY title',(err, results) => {
      if(err)
        console.log(err);
      else
        res.render('index', { 
          title: 'Restaurante saboroso',
          menus: results, 
        });
    }
  );
});

router.get('/menu', function(req, res, next) {
    res.render('menu', { //nome do arquivo dentro da pasta view
      title: 'Menu - Restaurante saboroso',
    });
});

router.get('/reservation', function(req, res, next) {
  res.render('reservation', { //nome do arquivo dentro da pasta view
    title: 'Reserva - Restaurante saboroso',
  });
});

router.get('/services', function(req, res, next) {
  res.render('services', { //nome do arquivo dentro da pasta view
    title: 'Services - Restaurante saboroso',
  });
});

router.get('/contact', function(req, res, next) {
  res.render('contact', { //nome do arquivo dentro da pasta view
    title: 'Contact - Restaurante saboroso',
  });
});

module.exports = router;
