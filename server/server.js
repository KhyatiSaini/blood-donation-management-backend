const bodyParser = require('body-parser');
const cors = require('cors');
const express = require('express');
const routes = require('./routes');
const dotenv = require('dotenv').config();

const app = express();
app.use(cors());
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.use('/', routes);

let port = process.env.PORT || 3000;

app.listen(port, () => {
    console.log(`server is running on ${port}`);
});
