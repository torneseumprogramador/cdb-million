//const mongoose = require('../../db/conexao');
const HomeController = {
    index: function(req, res) {
      res.render('index', { title: 'Million' });
    }
  }
  
  module.exports = HomeController