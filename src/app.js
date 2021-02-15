const path =  require("path");
const express = require("express");

const publicDir = path.join(__dirname, "../public");

const app = express();

app.set('view engine', 'hbs');
app.use(express.static(publicDir))

app.get('', (req, res) => {
    res.render('index', {
        name: 'Brynne Prince',
        position: 'Software developer'
    });
})

app.get("/help", (req, res) => {
    res.render("help", {
        title: 'HELP',
        message: 'How can I help you?'
    })
})

app.get("/weather", (req, res) => {
    res.send({
        "actual": 27,
        "feelsLike": 24,
        "location": "My home"
    })
})


app.listen(3000, () => {
    console.log("Server is listening on port 3000");
})