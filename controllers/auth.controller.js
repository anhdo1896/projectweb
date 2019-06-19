var user_md = require("./../models/dataUser");
var md5 = require('md5');
module.exports.login= function(req,res){
    res.render('auth/login',{title:'Login',data: { err: "" }})
}
module.exports.register=function(req,res,next){
    res.render('auth/register', { title: "Register", data: { err: "" }});
}
module.exports.registerCreate= function(req,res){
 
   
       var user = req.body;
  
         var pass = md5(user.passwd);
        users = {
          username: user.username,
          email: user.email,
          password: pass,
         }
    
        var result = user_md.addUser(users);
        if (!result) {
          res.render('auth/register', { title: "Register", data: { err: "Cannot Insert" }});
        } else {
          res.redirect('/');
        }
      
}
module.exports.loginPost=function(req,res,next){
    var user = req.body
    res.cookie('userId',user.username)
    res.redirect('/')
}