const mysql = require('mysql');

const con = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: ''
});
  
con.connect(function(err) {
  if (err) {
      console.log('Failed to connect to MySQL!');
  };
  console.log('Connected to MySQL!');
});