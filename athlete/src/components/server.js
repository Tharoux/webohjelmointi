const mysql = require("mysql");

const con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "test",
    database: "athletes",multipleStatements: true
});

function connectionStart() {
    con.connect((err) => {
        if (err) {
            console.log("Error connecting to DB.");
            return;
        }
        console.log("Connection established.");
    });
}

connectionStart;

function connectionEnd() {
    con.end((err) => {
        if (err) {
            console.log("Error in terminating the connection.");
            return;
        }
        console.log("Connection terminated.");
    })
}

//Injection preventer.
const userSubmittedVariable = "1";

con.query(
    `SELECT * FROM athleteinformation WHERE id = ${mysql.escape(userSubmittedVariable)}`,
    (err, rows) => {
        if (err) throw err;
        console.log(rows[0]);
    }
);


const path = require("path");
const express = require("express");
const bodyParser = require("body-parser");
const app = express().use(bodyParser.json());

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
      "X-Requested-With, Content-type"
    );
  
    // Set to true if you need the website to include cookies in the requests sent
    // to the API (e.g. in case you use sessions)
    res.setHeader("Access-Control-Allow-Credentials", true);
  
    res.getHeaders();
  
    // Pass to next layer of middleware
    next();
  });

//Redirect to the index.html.
// app.get("/", (req,res) => {
//     res.sendFile(path.join(__dirname, "index.html"));
// });


//Get all athletes.
app.get("/athletes", (req, res) => {
    con.query(
        "CALL get_all_athletes();", (err, result) => {
            if (err) throw err;

            return res.status(200).json(result[0]);
        }
    )
});

//Get an athlete.
app.get("/athletes/:id", (req, res) => {
    const id= Number(req.params.id);

    con.query(
        "CALL get_athlete(?)", [id], (err, result) => {
            if (err) throw err;

            const athlete = result[0].find((athlete) => athlete.id === id);

            return res.status(200).json(athlete ? athlete : {message: "Athlete not found."});
        }
    )
}
);

//Add an athlete
app.post("/addathlete/", (req, res) => {

    //NÄMÄ TIEDOT LÄHETETÄÄN JSON-TIEDOSTONA SERVERILLE!
    //Place the information from the body of the request to these variables.
    const {firstName, lastName, callName, yearOfBirth, weight, imageLink, sport, accomplishments} = req.body;

    
    con.query(
        "CALL insert_athlete((SELECT LAST_INSERT_ID() AS _id), ?, ?, ?, ?, ?, ?, ?, ?);",
            [firstName, lastName, callName, yearOfBirth, weight, imageLink, sport, accomplishments], (err, result) => {
            if (err) throw err;
        }
    )

    con.query(
        "CALL get_athlete((SELECT LAST_INSERT_ID() AS _id));", (err, result) => {
            if (err) throw err;

            return res.status(200).send({
                message: "Athlete added.",
                data: result[0][0],
            });
        }
    )
}
);

//Update an athlete
app.put("/updateathlete/", (req, res) => {
    const {id, firstName, lastName, callName, yearOfBirth, weight, imageLink, sport, accomplishments} = req.body;

    con.query(
        "CALL update_athlete(?,?,?,?,?,?,?,?,?);", [id, firstName, lastName, callName, yearOfBirth, weight, imageLink, sport, accomplishments], (err, result) => {
            if (err) throw err;

            console.log(result);
        }
    )

    return res.status(200).send({
        message: "Athlete updated",
        data: req.body,
    })
});

//Delete an athlete
app.delete("/deleteathlete/:id", (req, res) => {
    const id = Number(req.params.id);

    con.query(
        "CALL delete_athlete(?)", [id], (err, result) => {
            if (err) throw err;
        }
    )

    return res.send({
        message: "Athlete with id " + id + " deleted.",
        data: `Data on ${id}`
    })
});

app.listen(3000, () => {
    console.log("Server listening at port 3000");
});

