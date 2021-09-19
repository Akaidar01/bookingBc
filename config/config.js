'use strict';

const mysql = require("mysql");
  
const dbConn = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "Baze",
  typeCast: function castField( field, useDefaultTypeCasting ) {

    if ( ( field.type === "BIT" ) && ( field.length === 1 ) ) {

        var bytes = field.buffer();

        let result = bytes[ 0 ] === 1;

        if(result === false){
          return 0;
        }

        return 1;

    }

    return( useDefaultTypeCasting() );
}
}); 

dbConn.connect(function(err) {
    if (err) throw err;
    console.log("Database Connected!");
  });
  
  module.exports = dbConn;

  //typeCast: function castField( field, useDefaultTypeCasting ) {
    //if ( ( field.type === "BIT" ) && ( field.length === 1 ) ) {
       // var bytes = field.buffer();
       // return( bytes[ 0 ] === 1 );
    //}
   // return( useDefaultTypeCasting() );
  //}