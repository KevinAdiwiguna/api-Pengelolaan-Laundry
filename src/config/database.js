const mysql = require('mysql2')
const dbConnection = mysql.createPool({
  host: "localhost",
  user: "root",
  password:"",
  database: "db_laundry",
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit:0
})

module.exports = dbConnection.promise()