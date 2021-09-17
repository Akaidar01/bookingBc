const mysql = require("mysql2");
  
const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  database: "Baze",
  password: ""
}); 
          SelectAllElements = () =>{
            return new Promise((resolve, reject)=>{
                pool.query('SELECT * FROM Baze',  (error, elements)=>{
                    if(error){
                        return reject(error);
                    }
                    return resolve(elements);
                });
            });
        };