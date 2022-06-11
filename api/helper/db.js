const mysql = require('mysql2/promise');
const config = require('../config');

async function query(sql, params) {
    const connection = await mysql.createConnection(config.db);
    const [results] = await connection.execute(sql, params);

    return results;
}

async function querySingle(sql, params) {
    const connection = await mysql.createConnection(config.db);
    const results = await connection.execute(sql, params);

    return results[0];
}

module.exports = {
    query,
    querySingle
}