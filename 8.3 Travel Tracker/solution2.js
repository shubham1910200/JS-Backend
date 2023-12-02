import express from "express";
import bodyParser from "body-parser";
import pg from "pg";

const app = express();
const port = 3000;

const db = new pg.Client({
  user: "postgres",
  host: "localhost",
  database: "world",
  password: "Shubham19@",
  port: 5432,
});
db.connect();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

async function checkVisisted() {
  const result = await db.query("SELECT country_code FROM visited_countries");

  let countries = [];
  result.rows.forEach((country) => {
    countries.push(country.country_code);
  });
  console.log('log1');
  return countries;
}

// GET home page
app.get("/", async (req, res) => {
  console.log('hii');
  const countries = await checkVisisted();
  res.render("index.ejs", { countries: countries, total: countries.length });
  console.log('log2');
});

//INSERT new country
app.post("/add", async (req, res) => {
  const input = req.body["country"];
  console.log('input', input);
  console.log('log3');

  try{
    const result = await db.query(
      "SELECT country_code FROM countries WHERE country_name = $1",
      [input]
    );
    console.log('result',result.rows);
    console.log('log4');
    console.log('rows',result.rows.length);
  
  if (result.rows.length !== 0) {
    const data = result.rows[0];
    console.log('data',data);
    const countryCode = data.country_code;
    console.log('log5');
     await db.query("INSERT INTO visited_countries (country_code) VALUES ($1)", [
      countryCode,
    ]);
    res.redirect("/");
    console.log('log7');
  }

  }

catch(err) {
  res.status(500).send('Error: ' + err.message);
}
  })

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
