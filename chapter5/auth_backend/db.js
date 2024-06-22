const postgres = require('postgres');

const sql = postgres({
    host: '127.0.0.1',
    port: '5432',
    database: 'postgres',
    username: 'faruuq',
    password: ''
})

module.exports = sql;