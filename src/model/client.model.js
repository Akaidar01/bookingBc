'use strict';
var dbConn = require('./../../config/config');

var Client = function (clients) {
  this.id          = clients.id;
  this.FullName    = clients.FullName;
  this.DateFrom    = new Date();
  this.DateTo      = new Date();
  this.Money       = clients.Money;
};

Client.create = function (newEmp, result) {
  dbConn.query("INSERT INTO clients set ?", newEmp, function (err, res) {
   if(err) {
    console.log("error: ", err);
     result(err, null);
 }
  else{
   console.log(res);
    result(null, res);
 }
 });
 };

Client.findById = function (id, result) {
 dbConn.query("Select * from clients where id = ? ", id, function (err, res) {
  if(err) {
   console.log("error: ", err);
    result(err, null);
}
else{
  result(null, res);
}
});
};

Client.findAll = function (result) {
  dbConn.query("Select * from clients", function (err, res) {
   if(err) {
    console.log("error: ", err);
      result(null, err);
}
else{
  console.log('clients : ', res);
    result(null, res);
}
});
};

Client.update = function(id, Clients, result){
  dbConn.query("UPDATE clients SET FullName=?,DateFrom=?,DateTo=?,Money=? WHERE id = ?", 
  [Clients.FullName, Clients.DateFrom, Clients.DateTo, Clients.Money, id], function (err, res) {
   if(err) {
    console.log("error: ", err);
     result(null, err);
 }
  else{
   result(null, res);
 }
 });
 };

 Client.delete = function(id, result){
  dbConn.query("DELETE FROM clients WHERE id = ?", [id], function (err, res) {
 if(err) {
  console.log("error: ", err);
    result(null, err);
}
 else{
  result(null, res);
}
});
};

module.exports= Client;