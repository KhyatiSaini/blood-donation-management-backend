const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
const router = express.Router();

const Patient = require('./server/db/models/patient');
const Donor = require('./server/db/models/donor');
const BloodBank = require('./server/db/models/blood_bank');
const chirpdb = require('./server/db');

console.log('server is running');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json);
app.use(cors());
app.use('/api', router);

// router.get('/', async (request, response) => {
//     try {
//         let results = await chirpdb.all();
//         response.json(results);
//     }
//     catch(err) {
//         console.log(err);
//         response.sendStatus(500);
//     }
// });

chirpdb.all();
