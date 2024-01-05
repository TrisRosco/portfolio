const express = require('express'); // in a MVC framework, this would be the controller
const mysql = require('mysql'); // this is the model
const app = express(); 
const port = 3306; 

const connection = mysql.createConnection({
    host: process.env.MYSQL_HOST,
    user: process.env.MYSQL_USER,
    password: process.env.MYSQL_PASSWORD,
    database: process.env.MYSQL_DATABASE
});

connection.connect((err) => {
    if (err) throw err;
    console.log('Database connected!');
});

