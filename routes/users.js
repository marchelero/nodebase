var express = require('express');
var router = express.Router();
const UserController = require('../controllers').user;

/* GET users listing. */

router.get('/', function(req, res, next) {
  res.render('index', { title: 'Users' });
});

/* Rutas para Reportes */
router.get('/users', UserController.list);




module.exports = router;
