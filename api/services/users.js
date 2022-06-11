const db = require('../helper/db');

async function getUser(userId) {

    const user = await db.querySingle(
        `SELECT * FROM users WHERE user_id = '${userId}'`
    );

    return {
        user
    }
}

module.exports = {
    getUser
}