const express = require('express');
const router = express.Router();
const users = require('../services/users');

router.get("/", async (req, res, next) => {
    res.json(
        {
            code: 0,
            desc: "Usuário não especificado"
        }
    );
});

router.get('/:id', async (req, res) => {
    try {
        res.json(await users.getUser(req.params.id));
    } catch (err) {
        console.error(`Erro ao ler usuário: `, err.message);
        res.status(502);
    }
});

module.exports = router;