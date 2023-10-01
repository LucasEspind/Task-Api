const mysql = require("mysql2");


const connection = mysql.createConnection({
    host: process.env.MYSQL_HOST,
    user: process.env.MYSQL_USERNAME,
    password: process.env.MYSQL_PASSWORD,
    database: process.env.MYSQL_DATABASE
})



connection.connect((err) => {
    if(err) throw err;
    console.log("Connected successfully to database");
});

module.exports = connection;