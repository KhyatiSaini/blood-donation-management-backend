const sql = require('mssql');

const config = new sql.ConnectionPool({
    user: 'XXX',
    password: 'XXX',
    server: 'XXX',
    database: 'XXX',
    options: {
        trustedconnection: true,
        enableArithAort: true,
        instancename: 'connectionWithDB'
    },
    port: 'XXX',
    pool: {
        max: 10,
        min: 0,
        idleTimeoutMillis: 30000
    },
    stream: true,
    uri: 'XXX',
});

module.exports = config;
