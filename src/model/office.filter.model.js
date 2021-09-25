'use strict';
var dbConn = require('./../../config/config');


var OfficeFilter = function (filterOff) {
    console.log('T',filterOff)
    this.DateFrom = new Date(filterOff.DateFrom);
    this.DateTo = new Date(filterOff.DateTo);
  };

   OfficeFilter.filter = function(filter, result) {
      dbConn.query("Select * from Offices", 
          [filter.DateFrom, filter.DateTo], function (err, res) {
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

    OfficeFilter.count = function(filter, result) {
      dbConn.query("Select sum(Cost) from Offices", function (err, res) {
              if(err) {
               console.log("error: ", err);
                 result(null, err);
           }
           else{
             console.log('COunts : ', res);
               result(null, res);
           }
          });
      };

  module.exports= OfficeFilter;

