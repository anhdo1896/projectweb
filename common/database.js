var mysql      = require('mysql');
var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : '',
  database : 'nodejs',
  port:3306
});
connection.connect();
function getConnection(){
    if(!connection){
        connection.connect();
    }else{
        return connection;
    }
}
module.exports = {
    getConnection:getConnection
}