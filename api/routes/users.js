const express = require('express');
const router = express.Router();
const users = require('../services/users');

router.get("/", async (req, res, next) => {
    res.send(
        {
            code: 0,
            desc: "Usuário não especificado"
        }
    );
});

router.get('/:id', async function (req, res, next) {
    try {
        res.send((await users.getUser(req.params.id)).user[0]);
    } catch (err) {
        console.error(`Erro ao ler usuário: `, err.message);
        res.status(404);
        next(err);
    }
});

module.exports = router;