const mysql = require('mysql');

// database credential
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'blog',
});

connection.connect((error) => {
    if (error) throw error;
    console.log('database connected!');
});

module.exports = connection;
