const express = require("express");
const app = express();

const port = 3000;

const quotes = require('./modules/quotes');

// dir for static files
app.use(express.static(__dirname + "/public"));

// route should be a noun and describe the data you are getting from it
app.get('/quotes', (req, res) => {
    try {
        res.send(quotes);
    } catch (err) {
        res.status(500).send(err);
    }
})

app.listen(port, () => {
	try {
		console.log(`App hosted on localhost:${port}`);
	} catch (err) {
		console.log(err);
	}
});
