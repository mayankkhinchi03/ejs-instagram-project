const express = require("express");
const app = express();

let port = 8080;

app.set("view engine", "ejs");

app.get("/hello",(req,res) => {
    res.render("home.ejs");
});
app.get("/rolldice",(req,res) => {
    res.render("roll dice.ejs");
});

app.get("/ig/:username", (req,res) => {
    const instaData = require("./data.json");
    const { username } = req.params;
    const data = instaData[username];
    console.log(data);
    res.render("instagram.ejs", { data });
})

app.listen(port, () => {
    console.log(`App is listening on port ${port}`);
});