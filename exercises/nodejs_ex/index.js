const mysql = require("mysql");

// First you need to create a connection to the database
// Be sure to replace 'user' and 'password' with the correct values
const con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "test",
  database: "puhelinluettelo",
  multipleStatements: true, //out parametria varten aliohjelmassa
});

function connectionStart() {
  con.connect((err) => {
    if (err) {
      console.log("Error connecting to Db");
      return;
    }
    console.log("Connection established");
  });
}

connectionStart;

function connectionEnd() {
  con.end((err) => {
    // The connection is terminated gracefully
    // Ensures all remaining queries are executed
    // Then sends a quit packet to the MySQL server.
  });
}

//connectionEnd();

// con.query("SELECT * FROM henkilot", (err, rows) => {
//   if (err) throw err;

//   console.log("Data received from Db:");
//   rows.forEach((row) => {
//     console.log(`${row.nimi}, puhelin on ${row.puhelin}`);
//   });
// });

// const henkilo = { nimi: 'Ankka Roope', puhelin: '050-1231232' };
// con.query('INSERT INTO henkilot SET ?', henkilo, (err, res) => {
//   if(err) throw err;

//   console.log('Last insert ID:', res.insertId);
// });

// con.query(
//     'UPDATE henkilot SET puhelin = ? Where ID = ?',
//     ['044-6544655', 3],
//     (err, result) => {
//       if (err) throw err;

//       console.log(`Changed ${result.changedRows} row(s)`);
//     }
//   );

// con.query("DELETE FROM henkilot WHERE id = ?", [5], (err, result) => {
//   if (err) throw err;

//   console.log(`Deleted ${result.affectedRows} row(s)`);
// });

// con.query("CALL sp_get_henkilot()", function (err, rows) {
//   if (err) throw err;

//   rows[0].forEach( (row) => {
//     console.log(`${row.nimi},  puhelin: ${row.puhelin}`);
//   });
//   console.log(rows);
// });

// con.query("CALL sp_get_henkilon_tiedot(1)", (err, rows) => {
//   if (err) throw err;

//   console.log("Data received from Db:\n");
//   console.log("Nimi: " + rows[0][0].nimi + ", Puhelin: " + rows[0][0].puhelin);
// });

// con.query(
//     "SET @henkilo_id = 0; CALL sp_insert_henkilo(@henkilo_id, 'Matti Miettinen', '044-5431232'); SELECT * FROM henkilot WHERE id = @henkilo_id;",
//     (err, rows) => {
//       if (err) throw err;

//       console.log('Data received from Db:\n');
//       console.log("ID: " + rows[2][0].id + ", Nimi: " + rows[2][0].nimi + ", Puhelin: " + rows[2][0].puhelin);
//     }
//   );
const userSubmittedVariable =
  "1"; /*että kukaan ei voi syöttää tätä:
const userSubmittedVariable = '1; DROP TABLE henkilot';*/

con.query(
  `SELECT * FROM henkilot WHERE id = ${mysql.escape(userSubmittedVariable)}`,
  (err, rows) => {
    if (err) throw err;
    console.log(rows[0]);
  }
);

let data = [];
  
  const express = require("express");
  const bodyParser = require("body-parser");
  const app = express().use(bodyParser.json());
  
  // GET all users
  app.get("/users", function(req, res){
    con.query(
      "CALL sp_get_henkilot();", (err, result) => {
        if (err) throw err;

        //These are good if you want to show some additional information.
        // return res.send({
        //   error: false,
        //   data : result[0],
        //   message: "Haku onnistui."
        // });
        return res.json(result[0]);
      }
    )
  });
  
  // GET a user
  app.get("/users/:id", (req, res) => {

    //Get the id of the user we want to search the database for.
    const id = Number(req.params.id);

    con.query(
      "CALL sp_get_henkilon_tiedot(?);", [id] /*This places the id into ? in the SQL query.*/, (err, result) => {
        if (err) throw err;

        //Find the user from result[0] by their id.
        const user = result[0].find((user) => user.id === id);

        return res.json(user ? user : { message: "Not found" });
      }
    )
  });
  
  // ADD a user
  app.post("/users/:id-:name-:phone", (req, res) => {

    const id = Number(req.params.id);
    const name = req.params.name;
    const phone = req.params.phone;

    //Add to database.
    con.query(
      "CALL sp_insert_henkilo(@?,?,?);", [id,name,phone], (err, result) => {
        if (err) throw err;
      }
    )

    //These are for debugging and seeing what is inserted.
    const user = req.params;
    data.push(user);
    return res.send({
      message: "Seuraavat käyttäjät lisätty onnistuneesti. Huomaa, että id ei välttämättä ole kuin se alla esiintyy",
      data: data
    })
  });
  
  // UPDATE a user
  app.put("/users/:id-:newname-:newphone", (req, res) => {

    const id = Number(req.params.id);
    const newname = req.params.newname;
    const newphone = req.params.newphone;
    const updatedUser = req.params;

    con.query(
      "CALL sp_update_henkilo(?,?,?);", [id, newname, newphone], (err, result) => {
        if (err) throw err;
      }
    )

    res.send({
      message : "Seuraavat tiedot päivitettiin.",
      data : updatedUser
    })
  });
  
  // DELETE a user
  app.delete("/users/:id", (req, res) => {

    //NOTE: We don't need to check wether the ID exists in the table, since MySQL
    //will not do anything if the ID doesn't exist.

    const id = Number(req.params.id);

    con.query(
      "CALL sp_delete_henkilo(?);", [id], (err, result) => {
        if (err) throw err;
      }
    )

    res.send({
      message : "Seuraavat tiedot poistettiin.",
      data: data.filter((user) => user.id !== id)
    })

  //   data = data.filter((user) => user.id !== id);
  //   res.json(data);
  });
  
  app.listen(3000, () => {
    console.log("Server listening at port 3000");
  });

// Add headers
app.use(function (req, res, next) {
  // Website you wish to allow to connect
  res.setHeader("Access-Control-Allow-Origin", "*");

  // Request methods you wish to allow
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, OPTIONS, PUT, PATCH, DELETE"
  );

  // Request headers you wish to allow
  res.setHeader(
    "Access-Control-Allow-Headers",
    "X-Requested-With,content-type"
  );

  // Set to true if you need the website to include cookies in the requests sent
  // to the API (e.g. in case you use sessions)
  res.setHeader("Access-Control-Allow-Credentials", true);

  res.getHeaders();

  // Pass to next layer of middleware
  next();
});