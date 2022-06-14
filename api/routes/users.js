const express = require('express');
const router = express.Router();
const users = require('../services/users');

router.get("/", async (req, res) => {
    res.status(422).json(
        {
            message: "Usuário não especificado"
        }
    );
});

router.get('/:id', async (req, res) => {
    try {
        const user = await users.getUser(req.params.id);
        if (!user) {
            res.status(422).json({
                message: 'Usuário não encontrado'
            });
            return
        }
        res.status(200).json(user);
    } catch (err) {
        console.error(`Erro ao selecionar usuário: `, err);
        res.status(500).json({
            erro: err.message
        });
    }
});

module.exports = router;