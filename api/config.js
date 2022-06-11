require('dotenv').config();

const config = {
    db: process.env.DB_URL,
    listPerPage: 10,
};

module.exports = config;