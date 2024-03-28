const express = require('express');
const path = require('path');
var mysql = require('mysql');

var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'pi',
  password : 'raspberry',
  database : 'exampledb'
});

// connection.connect()

// connection.end()

const app = express();


const { createServer } = require('node:http');

const hostname = '10.62.2.27';
const port = 3000;

app.use(express.static(path.join(__dirname, 'public')));

/*
const server = createServer((req, res) => {
  console.log(`Connection got!`);
  res.statusCode = 200;
  res.setHeader('Content-Type', 'html');
  res.end('Hello World');
});
*/

app.get('/', async(req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'home.html'));
});

app.listen(port, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
