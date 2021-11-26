const mysql = require('mysql');
const dotenv = require('dotenv').config();

const pool = mysql.createPool({
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    host: process.env.DB_HOST,
    database: process.env.DB_NAME,
    queryTimeout: 6000,
    connectTimeout: 60000,
    port: 3306,
});

let db = {};

// function to return the all the patient details
db.fetchPatients = () => {
    return new Promise((resolve, reject) => {
        pool.query('SELECT * FROM PATIENT', (error, results) => {
            if (error) {
                return reject(error);
            }
            return resolve(results);
        });
    })
}

// function to return all the donor details
db.fetchDonors = () => {
    return new Promise((resolve, reject) => {
        pool.query('SELECT * FROM DONOR', (error, results) => {
            if (error) {
                return reject(error);
            }
            return resolve(results);
        });
    })
}

// function to return the all the blood bank details
db.fetchBloodBanks = () => {
    return new Promise((resolve, reject) => {
        pool.query('SELECT * FROM BLOOD_BANK', (error, results) => {
            if (error) {
                return reject(error);
            }
            return resolve(results);
        });
    })
}

// function to return all the donation details
db.fetchDonations = () => {
    return new Promise((resolve, reject) => {
        pool.query('SELECT * FROM DONATION', (error, results) => {
            if (error) {
                return reject(error);
            }
            return resolve(results);
        });
    })
}

// function to fetch details of a patient by id
db.fetchPatientById = (id) => {
    return new Promise((resolve, reject) => {
        pool.query('SELECT * FROM PATIENT WHERE id = ?', [id], (error, results) => {
            if (error) {
                return reject(error);
            }
            return resolve(results[0]);
        });
    })
}

// function to fetch details of a donor by id
db.fetchDonorById = (id) => {
    return new Promise((resolve, reject) => {
        pool.query('SELECT * FROM DONOR WHERE id = ?', [id], (error, results) => {
            if (error) {
                return reject(error);
            }
            return resolve(results[0]);
        });
    })
}

// function to fetch details of a blood bank by name
db.fetchBloodBankByName = (name) => {
    return new Promise((resolve, reject) => {
        pool.query('SELECT * FROM BLOOD_BANK WHERE name = ?', [name], (error, results) => {
            if (error) {
                return reject(error);
            }
            return resolve(results[0]);
        });
    })
}

// function to update the donation date of a donor by id
db.updateDonationDate = (id, date) => {
    return new Promise((resolve, reject) => {
        pool.query('UPDATE DONOR set latest_donation_date =? WHERE id = ?', [date, id], (error, results) => {
            if (error) {
                return reject(error);
            }
            return resolve(results[0]);
        });
    })
}

// function to create a patient in the db 
db.createPatient = (patient) => {
    return new Promise((resolve, reject) => {
        pool.query(`INSERT INTO PATIENT VALUES 
        (?, ?, ?, ?)`,
            [
                patient.id, patient.name, patient.medical_condition, patient.blood_group
            ], (error, results) => {
                if (error) {
                    return reject(error);
                }
                return resolve(results);
            });
    })
}

// function to create a donor in the db 
db.createDonor = (donor) => {
    return new Promise((resolve, reject) => {
        pool.query(`INSERT INTO DONOR
        (id, name, medical_report, blood_group, contact_number) 
        VALUES 
        (?, ?, ?, ?, ?)`,
            [
                donor.id, donor.name, donor.medical_report, donor.blood_group, donor.contact_number
            ], (error, results) => {
                if (error) {
                    return reject(error);
                }
                return resolve(results);
            });
    })
}

// function to create a blood bank in the db 
db.createBloodBank = (blood_bank) => {
    return new Promise((resolve, reject) => {
        pool.query(`INSERT INTO BLOOD_BANK VALUES 
        (?, ?, ?, ?)`,
            [
                blood_bank.name, blood_bank.staff_details, blood_bank.operating_hours, blood_bank.address
            ], (error, results) => {
                if (error) {
                    return reject(error);
                }
                return resolve(results);
            });
    })
}

// function to create a donation record in the db 
db.createDonationRecord = (donation) => {
    return new Promise((resolve, reject) => {
        pool.query(`INSERT INTO DONATION VALUES 
        (?, ?, ?, ?)`,
            [
                donation.donor_id, donation.patient_id, donation.blood_bank, donation.date
            ], (error, results) => {
                if (error) {
                    return reject(error);
                }
                return resolve(results);
            });
    })
}

module.exports = db;
