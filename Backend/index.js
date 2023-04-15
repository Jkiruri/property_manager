const express = require("express");
const mysql = require("mysql");
const cors = require("cors");

const app = express();
app.use(cors());

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "3Ic^np2nLUm3y!7Z",
  database: "property",
});

app.use(express.json());

app.get("/", (req, res) => {
  return res.json("From Back side");
});
app.get("/tenants", (req, res) => {
  const q = "SELECT * FROM tenants";
  db.query(q, (err, data) => {
    if (err) return res.json(err);
    return res.json(data);
  });
});
app.post("/tenants", (req, res) => {
  const q =
    "INSERT INTO tenants (`tenants_id`, `first_name`, `last_name`, `national_id`, `phone_number`, `image`) VALUES (?)";
  const values = [
    req.body.tenants_id,
    req.body.first_name,
    req.body.last_name,
    req.body.national_id,
    req.body.phone_number,
    req.body.image,
  ];

  db.query(q, [values], (err, data) => {
    if (err) return res.json(err);
    return res.json("Hilda");
  });
});
app.listen(8080, () => {
  console.log("listening");
});
