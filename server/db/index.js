const mysql = require('mysql');

const pool = mysql.createPool({
    connectionLimit: 10,
    user: 'root',
    password: 'password',
    server: 'localhost',
    database: 'blood_donation_management',
    port: 3306,
})

let db = {};

db.all = () => {
    return new Promise((resolve, reject) => {
        pool.query('SELECT * FROM CHIRPS', (error, results) => {
            if (error) {
                console.log('error', error);
                return reject(error);
            }
            else {
                console.log('success', results);
                return resolve(results);
            }
        });
    })
}

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

// function to return the all the donor details
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

// function to fetch details of a donor by id
db.fetchBloodBankById = (id) => {
    return new Promise((resolve, reject) => {
        pool.query('SELECT * FROM BLOOD_BANK WHERE id = ?', [id], (error, results) => {
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

module.exports = db;
