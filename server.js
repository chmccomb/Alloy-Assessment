const express = require('express')
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const port = 5000;

// Configuring body parser middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.post('/book', (req, res) => {
    // We will be coding here
});

app.listen(port, () => console.log(`Hello world app listening on port ${port}!`));

app.use(cors());
const corsOptions = {
    origin: "http://localhost:3000"
};

const requestEndpoint = "https://sandbox.alloy.co/v1/evaluations";

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "http://localhost:3000");
    res.header(
      "Access-Control-Allow-Headers",
      "Origin, X-Requested-With, Content-Type, Accept"
    );
    res.header("Access-Control-Allow-Methods", "GET, POST, OPTIONS");
    next();
  });
  
module.exports = app;
