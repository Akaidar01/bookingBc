'use strict';
var dbConn = require('./../../config/db.config');

var Buildings = function (buildings) {
  this.id          = buildings.id;
  this.title       = buildings.title;
};
Employee.create = function (newEmp, result) {
 dbConn.query("INSERT INTO Books set ?", newEmp, function (err, res) {
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

Employee.findById = function (id, result) {
 dbConn.query("Select * from Books where id = ? ", id, function (err, res) {
  if(err) {
   console.log("error: ", err);
    result(err, null);
}
else{
  result(null, res);
}
});
};

Employee.findAll = function (result) {
  dbConn.query("Select * from Books", function (err, res) {
   if(err) {
    console.log("error: ", err);
      result(null, err);
}
else{
  console.log('Books : ', res);
    result(null, res);
}
});
};

Employee.update = function(id, employee, result){
 dbConn.query("UPDATE Books SET Name=?,PageCounts=?,AuthorID=?,GenreID=? WHERE id = ?", [employee.Name,employee.PageCounts,employee.AuthorID,employee.GenreID, id], function (err, res) {
  if(err) {
   console.log("error: ", err);
    result(null, err);
}
 else{
  result(null, res);
}
});
};

Employee.delete = function(id, result){
  dbConn.query("DELETE FROM Books WHERE id = ?", [id], function (err, res) {
 if(err) {
  console.log("error: ", err);
    result(null, err);
}
 else{
  result(null, res);
}
});
};

module.exports= Employee;