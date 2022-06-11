require('dotenv').config();

const config = {
    db: {
        host: process.env.DB_URL,
        port: process.env.DB_PORT,
        user: process.env.DB_USER,
        password: process.env.DB_PASS,
        database: process.env.DB_NAME
    },
    listPerPage: 10,
};

module.exports = config;