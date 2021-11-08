const sql = require('mssql');
var config = require('./dbconfig');

async function getPatients() {
    try {
        let pool = await config.connect();
        let patients = await pool.request().query("SELECT * FROM PATIENT");
        return patients.recordsets;
    }
    catch (error) {
        console.log(error);
    }
}

async function getDonors() {
    try {
        let pool = await config.connect();
        let donors = await pool.request().query("SELECT * FROM DONOR");
        return donors.recordsets;
    }
    catch (error) {
        console.log(error);
    }
}

async function getBloodBanks() {
    try {
        let pool = await config.connect();
        let blood_banks = await pool.request().query("SELECT * FROM BLOOD_BANK");
        return blood_banks.recordsets;
    }
    catch (error) {
        console.log(error);
    }
}

module.exports = {
    getPatients: getPatients,
    getDonors: getDonors,
    getBloodBanks: getBloodBanks
}
