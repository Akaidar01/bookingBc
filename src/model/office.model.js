'use strict';
var dbConn = require('./../../config/config');

var Office = function (Offices) {
  this.id          = Offices.id;
  this.level       = Offices.level;
  this.bcID        = Offices.bcID;
  this.DateFrom    = new Date();
  this.DateTo      = new Date();
  this.status      = Offices.status;
  this.admin       = Offices.admin;
  this.adress      = Offices.adress;
  this.options     = Offices.options;
  this.cost        = Offices.cost;
  this.area        = Offices.area;
  this.room        = Offices.room;
  this.bc_name     = Offices.bc_name;
};
Office.create = function (newEmp, result) {
 dbConn.query("INSERT INTO Offices set ?", newEmp, function (err, res) {
  if(err) {
   console.log("error: ", err);
    result(err, null);
}
 else{
  console.log(res.insertId);
   result(null, res.insertId);
}
});
};

Office.findById = function (id, result) {
 dbConn.query("Select * from Offices where id = ? ", id, function (err, res) {
  if(err) {
   console.log("error: ", err);
    result(err, null);
}
else{
  result(null, res);
}
});
};

Office.findAll = function (result) {
  dbConn.query("Select * from Offices", function (err, res) {
   if(err) {
    console.log("error: ", err);
      result(null, err);
}
else{
  console.log('Offices : ', res);
    result(null, res);
}
});
};

Office.update = function(id, Offices, result){
 dbConn.query("UPDATE Offices SET level=?,DateFrom=?,DateTo=?,cost=?,bcID=?,room=?,bc_name=?,area=?,options=?,adress=?,status=?,admin=? WHERE id = ?", 
 [Offices.level, Offices.DateFrom, Offices.DateTo, Offices.cost, Offices.bcID, Offices.room, Offices.bc_name, Offices.area, Offices.options, Offices.adress, Offices.status, Offices.admin, id], function (err, res) {
  if(err) {
   console.log("error: ", err);
    result(null, err);
}
 else{
  result(null, res);
}
});
};

Office.delete = function(id, result){
  dbConn.query("DELETE FROM Offices WHERE id = ?", [id], function (err, res) {
 if(err) {
  console.log("error: ", err);
    result(null, err);
}
 else{
  result(null, res);
}
});
};

module.exports= Office;