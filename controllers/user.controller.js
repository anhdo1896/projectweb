var userData = require('../models/dataUser');

module.exports.listUser = function(req,res,next){
    //console.log(userData.getAll());
   // console.log(req);
    var dulieu = userData.getAll();
        dulieu.then(function(u){
             //console.log(u)
             res.render('users/listUser',{title: 'List User' });
      })
}