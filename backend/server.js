const express = require('express');
const app = express();
const port = 3001;
const cors = require('cors'); // Import the cors package

app.use(express.json());

// Use the cors middleware
app.use(cors());

const mysql = require('mysql');

// Create a database connection
const db = mysql.createConnection({
  host: 'db',
  user: 'root',
  password: 'root123',
  database: 'porasdb'
});

// Connect to MySQL
db.connect(err => {
  if (err) {
    throw err;
  }
  console.log('MySQL connected...');
});

app.post('/addname', (req, res) => {
  let post = { name: req.body.name };
  let sql = 'INSERT INTO names SET ?';
  let query = db.query(sql, post, (err, result) => {
    if (err) throw err;
    res.send('Name added successfully');
  });
});

app.get('/', (req, res) => {
  res.send('Hello from the backend!');
});

app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});
