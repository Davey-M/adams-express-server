const express = require("express");
const app = express();

const bodyParser = require('body-parser');

const port = 3000;

const quotes = require('./modules/quotes');

// dir for static files __dirname give the directory that server.js lives in
app.use(express.static(__dirname + "/public"));
app.use(bodyParser.urlencoded({ extended: true }));

// route should be a noun and describe the data you are getting from it

app.get('/favicon.ico', (req, res) => {
    res.sendFile(__dirname + '/public/images/crates_study_x2.png');
})

app.get('/quotes', (req, res) => {
    try {
        res.send(quotes);
    } catch (err) {
        res.status(500).send(err);
    }
})

app.post('/quotes', (req, res) => {
    try {
        // the data from the client is saved in req.body

        let newQuote = {
            text: req.body.text.toString(),
            author: req.body.author.toString(),
        }
        
        console.log(newQuote);
        quotes.push(newQuote);

        res.sendStatus(201);
    } catch (err) {
        console.log(err);
        res.send({
            issue: err,
        });
    }
})

app.listen(port, () => {
	try {
		console.log(`App hosted on localhost:${port}`);
	} catch (err) {
		console.log(err);
	}
});
