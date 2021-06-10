const express = require('express');
const fs = require('fs');
const port = process.env.PORT || 3000;
const app = express();
const mysql = require('mysql');
const path = require('path');

//Creating connection
const db = mysql.createConnection({
  host: 'localhost',
  // host: 'ec2-3-6-160-52.ap-south-1.compute.amazonaws.com',
  user: 'root',
  password: '123456',
  // password: 'Root@123',
  database: 'nodemysql',
  database: 'nodemysql',

  // port: '3306',
  // ssl: {
  //   ca: fs.readFileSync(__dirname + '/cert/webserver-temp-key.pem'),
  //   key: fs.readFileSync(__dirname + '/cert/webserver-temp-key.pem'),
  //   cert: fs.readFileSync(__dirname + '/cert/webserver-temp-key.pem'),
  // },
});

db.connect((error) => {
  if (error) {
    throw error;
  }
  console.log('My SQL CONNECTED');
});

app.get('/createDb', (req, res) => {
  let sql = 'CREATE DATABASE nodemysql';
  db.query(sql, (err, result) => {
    if (err) throw err;
    console.log('RESULT=>', result);
    res.send('DATABASE CREATED');
  });
});

const static_path = path.join(__dirname, '/public');
// console.log(path.join(__dirname, '/public'));
app.use(express.static(static_path));
app.set('view engine', 'hbs');

//Database calls

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.post('/createCustomer', (req, res) => {
  // console.log(req.body);
  let post = req.body;
  let requestBody = JSON.stringify(post);
  let parsed = JSON.parse(requestBody);
  // console.log(parsed);
  let sql = 'INSERT INTO customer SET ?';
  db.query(sql, parsed, (err, result) => {
    if (err) throw err;
    console.log(result);
    res.status(201).render('index');
  });
});

app.post('/createCertificate', (req, res) => {
  // console.log(req.body);
  let post = req.body;
  let requestBody = JSON.stringify(post);
  let parsed = JSON.parse(requestBody);
  // console.log(parsed);
  let sql = 'INSERT INTO certificate SET ?';
  db.query(sql, parsed, (err, result) => {
    if (err) throw err;
    console.log(result);
    res.status(201).render('index');
  });
});
app.post('/createControl', (req, res) => {
  // console.log(req.body);
  let post = req.body;
  let requestBody = JSON.stringify(post);
  let parsed = JSON.parse(requestBody);
  // console.log(parsed);
  let sql = 'INSERT INTO controls SET ?';
  db.query(sql, parsed, (err, result) => {
    if (err) throw err;
    console.log(result);
    res.status(201).render('index');
  });
});
app.post('/createPolicy', (req, res) => {
  // console.log(req.body);
  let post = req.body;
  let requestBody = JSON.stringify(post);
  let parsed = JSON.parse(requestBody);
  // console.log(parsed);
  let sql = 'INSERT INTO policy SET ?';
  db.query(sql, parsed, (err, result) => {
    if (err) throw err;
    console.log(result);
    res.status(201).render('index');
  });
});
app.post('/createPortfolio', (req, res) => {
  // console.log(req.body);
  let post = req.body;
  let requestBody = JSON.stringify(post);
  let parsed = JSON.parse(requestBody);
  // console.log(parsed);
  let sql = 'INSERT INTO portfolio SET ?';
  db.query(sql, parsed, (err, result) => {
    if (err) throw err;
    console.log(result);
    res.status(201).render('index');
  });
});
app.post('/createRoadMap', (req, res) => {
  // console.log(req.body);
  let post = req.body;
  let requestBody = JSON.stringify(post);
  let parsed = JSON.parse(requestBody);
  // console.log(parsed);
  let sql = 'INSERT INTO roadmap SET ?';
  db.query(sql, parsed, (err, result) => {
    if (err) throw err;
    console.log(result);
    res.status(201).render('index');
  });
});
app.post('/createSystem', (req, res) => {
  // console.log(req.body);
  let post = req.body;
  let requestBody = JSON.stringify(post);
  let parsed = JSON.parse(requestBody);
  // console.log(parsed);
  let sql = 'INSERT INTO system SET ?';
  db.query(sql, parsed, (err, result) => {
    if (err) throw err;
    console.log(result);
    res.status(201).render('index');
  });
});
app.post('/createTest', (req, res) => {
  // console.log(req.body);
  let post = req.body;
  let requestBody = JSON.stringify(post);
  let parsed = JSON.parse(requestBody);
  // console.log(parsed);
  let sql = 'INSERT INTO test SET ?';
  db.query(sql, parsed, (err, result) => {
    if (err) throw err;
    console.log(result);
    res.status(201).render('index');
  });
});
app.post('/createTestTransaction', (req, res) => {
  // console.log(req.body);
  let post = req.body;
  let requestBody = JSON.stringify(post);
  let parsed = JSON.parse(requestBody);
  // console.log(parsed);
  let sql = 'INSERT INTO test_transaction SET ?';
  db.query(sql, parsed, (err, result) => {
    if (err) throw err;
    console.log(result);
    res.status(201).render('index');
  });
});

//Routes
app.get('/', (req, res) => {
  res.render('index');
});
app.get('/certificate-form', (req, res) => {
  res.render('certificate');
});
app.get('/control-form', (req, res) => {
  res.render('control');
});
app.get('/customer-form', (req, res) => {
  res.render('customer');
});
app.get('/policy-form', (req, res) => {
  res.render('policy');
});
app.get('/test-form', (req, res) => {
  res.render('test');
});
app.get('/test-transaction-form', (req, res) => {
  res.render('testTransaction');
});
app.get('/portfolio-form', (req, res) => {
  res.render('portfolio');
});
app.get('/system-form', (req, res) => {
  res.render('system');
});
app.get('/roadmap-form', (req, res) => {
  res.render('roadmap');
});

app.listen(port, () => {
  console.log(`SERVER is running at port no ${port}`);
});
