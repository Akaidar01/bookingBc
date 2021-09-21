'use strict';
var dbConn = require('./../../config/config');
const Building = require('./building.model');

var Office = function (Offices) {
  this.id          = Offices.id;
  this.level       = Offices.level;
  this.bcID        = Offices.bcID;
  this.status      = Offices.status;
  this.admin       = Offices.admin;
  this.adress      = Offices.adress;
  this.options     = Offices.options;
  this.cost        = Offices.cost;
  this.area        = Offices.area;
  this.room        = Offices.room;
};

// var Officecreate = "IINSERT INTO Offices (level,bcID,status,admin,adress,options,cost,area,room) VALUES (?,?,?,?,?,?,?,?,?)";
//                     connection.query(Officecreate, [Offices.level, Offices.cost, Offices.bcID, Offices.room, Offices.area, Offices.options, Offices.adress, Offices.status, Offices.admin, id],
//                         (err,rows)=>{
//                             noffice.id = rows.insertId;

//                             return done(null, office);
//                         });

Office.create = function (newEmp, result) {
 dbConn.query("INSERT INTO `offices` (`level`, `bcID`, `status`, `admin`, `adress`, `options`, `cost`, `area`, `room`) VALUES (?,?,?,?,?,?,?,?,?)",
  [Offices.level, Offices.cost, Offices.bcID, Offices.room, Offices.area, Offices.options, Offices.adress, Offices.status, Offices.admin], newEmp, function (err, res) {
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
  dbConn.query("Select o.area, o.level, o.options, o.cost, o.adress, o.room, o.status, o.admin, b.title from offices o join buildings b on (o.bcID=b.id)", function (err, res) {
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
 dbConn.query("UPDATE Offices SET level=?,cost=?,bcID=?,room=?,area=?,options=?,adress=?,status=?,admin=?", 
 [Offices.level, Offices.cost, Offices.bcID, Offices.room, Offices.area, Offices.options, Offices.adress, Offices.status, Offices.admin], function (err, res) {
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

// Office.filter = function (filter, result) {
//   dbConn.query("Select * from Offices WHERE DateFrom >= ? AND DateTo <= ? AND IsActive = 1", [filter],function (err, res) {
//    if(err) {
//     console.log("error: ", err);
//       result(null, err);
// }
// else{
//   console.log('Offices : ', res);
//     result(null, res);
// }
// });
// };

module.exports= Office;