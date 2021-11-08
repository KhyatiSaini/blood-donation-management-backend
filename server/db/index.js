const mysql = require('mysql');

const pool = mysql.createPool({
    connectionLimit: 10,
    user: 'root',
    password: 'password',
    server: 'localhost',
    database: 'blood_donation_management',
    port: 3306,
})

let chirpdb = {};

chirpdb.all = () => {
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

module.exports = chirpdb;
