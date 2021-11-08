const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
const router = express.Router();

const db = require('./server/db/dboperations');

const Patient = require('./server/db/dbmodels/patient');
const Donor = require('./server/db/dbmodels/donor');
const BloodBank = require('./server/db/dbmodels/blood_bank');
const { response } = require('express');

/* error in connection */
db.getPatients().then(result => {
    return result;
})

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json);
app.use(cors());
app.use('/api', router);

router.use((request, response, next) => {
    // middleware here
});

router.route('/orders').get((request, response) => {
    
});
