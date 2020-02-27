/* app.js is the project's entry point */

/*
 * Create express web server
 */
const express = require("express");
const app = express();
const port = 3030;
/*
 * Create routes
 */

// Move routes into directory?

// home page with weather
app.get("/", (req, res) => res.send("Weather App goes here"));

// about page
app.get("/about", (req, res) => res.send("About us goes here"));

// 404 page
app.use((req, res) => {
  res.status(404);
  res.render("404");
});

/*
 * Set port
 */

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
