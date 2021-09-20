'use strict';
var dbConn = require('./../../config/config');


var OfficeFilter = function (filterOff) {
    console.log('T',filterOff)
    this.DateFrom = new Date(filterOff.DateFrom);
    this.DateTo = new Date(filterOff.DateTo);
  };

    
  OfficeFilter.filter = function(filter, result) {
    dbConn.query("Select * from Offices WHERE DateFrom >= ? AND DateTo <= ? AND Status = 1", [filter.DateFrom, filter.DateTo], function (err, res) {
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

  module.exports= OfficeFilter;