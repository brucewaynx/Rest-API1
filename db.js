const mysql = require('mysql');
require('dotenv').config();

// Create the MySQL connection
const db = mysql.createConnection({
    host: process.env.DB_HOST,      // e.g., localhost or your database server
    user: process.env.DB_USER,      // your MySQL username
    password: process.env.DB_PASSWORD,  // your MySQL password
    database: process.env.DB_NAME   // the database you want to connect to
});

// Connect to MySQL
db.connect((err) => {
    if (err) {
        console.error('Error connecting to the database:', err.stack);
        return;
    }
    console.log('Connected to the database as id ' + db.threadId);
});

module.exports = db;
