'use strict';

var dbConn = require('./../../config/config');

var Office = function (Offices) {
  this.id          = Offices.id;
  this.level       = Offices.level;
  this.bcID        = Offices.bcID;
  this.status      = Offices.status ? Offices.status : 1;
  this.admin       = Offices.admin;
  this.options     = Offices.options;
  this.cost        = Offices.cost;
  this.area        = Offices.area;
  this.room        = Offices.room;
};

Office.create = function (newEmp, result) {
  dbConn.query("INSERT INTO offices set ?", newEmp, function (err, res) {
  if(err) {
    console.log("error: ", err);
    result(err, null);
  }
  else{
    console.log(res);
    result(null,res);
  }
  });
  };

Office.findById = function (id, result) {
 dbConn.query("Select * from Offices where id = ? ", [id], function (err, res) {
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
  dbConn.query("Select o.area, o.level, o.options, o.cost, o.room, o.status, o.admin, b.title from offices o join buildings b on (o.bcID=b.id)", function (err, res) {
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

Office.update = function(req, result){
  let f = req.body;
  dbConn.query("UPDATE offices SET level=?,cost=?,bcID=?,room=?,area=?,options=?,status=?,admin=?", 
 [f.level, f.DateFrom, f.DateTo, f.cost, f.bcID, f.room, f.bc_name, f.area, f.options, f.status, f.admin], 
 function (err, res) {
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
  dbConn.query("DELETE FROM offices WHERE id = ?", [id], function (err, res) {
 if(err) {
  console.log("error: ", err);
    result(null, err);
}
 else{
  console.log("successfully")
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