const express = require('express');
const app = express();

const port = 3000;

// dir for static files
app.use(express.static(__dirname + '/server/public'));

app.listen(port, () => {
    try {
        console.log(`App hosted on localhost:${port}`)
    }
    catch (err) {
        console.log(err);
    }
})