const path =  require("path");
const express = require("express");
const hbs = require("hbs");

const app = express();

//Define paths for Express config
const publicDir = path.join(__dirname, "../public");
const viewsPath = path.join(__dirname, '../templates/views');
const partialsPath = path.join(__dirname, '../templates/partials');

//Setup handlebars engine and views location
app.set('view engine', 'hbs');
app.set('views', viewsPath);
hbs.registerPartials(partialsPath);

//Setup static directory to serve
app.use(express.static(publicDir));

app.get('', (req, res) => {
    res.render('index', {
        title: 'My Website',
        message: 'You can learn more about me here',
        createdBy: 'Brynne Prince',
        name: 'Brynne Prince',
        position: 'Software developer'
    });
})

app.get("/help", (req, res) => {
    res.render("help", {
        title: 'Help',
        message: 'How can I help you?',
        createdBy: 'Brynne Prince',

    })
})

app.get("/about", (req, res) => {
    res.render("about", {
        title: 'About',
        message: 'This is the about page',
        createdBy: 'Brynne Prince'
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