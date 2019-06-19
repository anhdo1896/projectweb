var q = require("q")
var db = require("../common/database")
var conn = db.getConnection();
function addUser(user){
    if(user){
        var defer = q.defer();
        var query = conn.query('INSERT INTO users SET ?', user, function (error, results) {
         if(error){
            defer.reject(error);
         }else{defer.resolve(results)}
             
         
    });
    return defer.promise;
}
return false
}
function getUser(username){
    if(username){
        var defer = q.defer();
        var query = conn.query('SELECT * FROM users WHERE ?', {username:username}, function (error, results) {
         if(error){
            defer.reject(error);
         }
         else{defer.resolve(results)}
             
         
    });
    return defer.promise;
}
return false
}
function getAll(){
   
        var defer = q.defer();
        var query = conn.query('SELECT * FROM users', function (error, results) {
         if(error){
            defer.reject(error);
         }
         else{defer.resolve(results)}
             
         
    });
    return defer.promise;
}
function getAllItems(){
   
    var defer = q.defer();
    var query = conn.query('SELECT * FROM items', function (error, results) {
     if(error){
        defer.reject(error);
     }
     else{defer.resolve(results)}
         
     
});
    return defer.promise;
}
function addItems(item){
    if(item){
        var defer = q.defer();
        var query = conn.query('INSERT INTO items SET ?', item, function (error, results) {
         if(error){
            defer.reject(error);
         }else{defer.resolve(results)}
             
         
    });
    return defer.promise;
}
return false
}

module.exports={
    addUser:addUser,
    getUser:getUser,
    getAll:getAll,
    getAllItems:getAllItems,
    addItems:addItems
}