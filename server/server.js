const db = require('./db_connection');


db.authenticate()
  .then(() => console.log("Successful connection"))
  .catch(err => console.log("bad connect"));
