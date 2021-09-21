'use strict';
var dbConn = require('./../../config/config');

var Building = function (buildings) {
  this.id          = buildings.id;
  this.title       = buildings.title;
  this.author      = buildings.author;
  this.adress      = buildings.adress;
  this.contacts    = buildings.contacts;
};
Building.create = function (newEmp, result) {
 dbConn.query("INSERT INTO buildings set ?", newEmp, function (err, res) {
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

Building.findById = function (id, result) {
 dbConn.query("Select * from buildings where id = ? ", id, function (err, res) {
  if(err) {
   console.log("error: ", err);
    result(err, null);
}
else{
  result(null, res);
}
});
};

Building.findAll = function (result) {
  dbConn.query("Select * from buildings", function (err, res) {
   if(err) {
    console.log("error: ", err);
      result(null, err);
}
else{
  console.log('buildings : ', res);
    result(null, res);
}
});
};

Building.update = function(id, building, result){
 dbConn.query("UPDATE buildings SET title=?,author=?,adress=?,contacts=? WHERE id = ?",
  [building.title,building.author, building.adress, building.contacts, id], function (err, res) {
  if(err) {
   console.log("error: ", err);
    result(null, err);
}
 else{
  result(null, res);
}
});
};

Building.delete = function(id, result){
  dbConn.query("DELETE FROM buildings WHERE id = ?", [id], function (err, res) {
 if(err) {
  console.log("error: ", err);
    result(null, err);
}
 else{
  result(null, res);
}
});
};

module.exports= Building;