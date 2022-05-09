const express = require("express");
const mysql = require('mysql');
const next = require("next");
const dev = process.env.NODE_ENV !== "production";
const app = next({ dev });
const handle = app.getRequestHandler();

// mysql 연동
// const dbconfig   = require('./config/database.js');
// const connection = mysql.createConnection(dbconfig);


app.prepare().then(() => {
  const server = express();

  server.get('/user/', (req, res) => {
    // connection.query('SELECT * from crontab', (error, rows) => {
    //   if (error) throw error;
    //   console.log('User info is: ', rows);
    // });

    var rows = [{name : '비트코인'} , {name: '코스모스'}, {name: '솔라나'}];
    res.send(rows);
    
  });

  server.get("*", (req, res) => {
    return handle(req, res);
  });

  server.listen(3000, (err) => {
    if (err) throw err;
    console.log("listening to 3000");
  });
});