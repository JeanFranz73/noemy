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
    const id = req.params.id;

    try {
        const user = await users.getUser(id);
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

router.patch('/:id', async (req, res) => {
    const id = req.params.id;
    const {exp, money, minecraft_nick} = req.body;

    const user = {
        exp,
        money,
        minecraft_nick
    }

    try {
        const updatedUser = await users.updateUser(id, user);
        if (updatedUser.matchedCount === 0) {
            res.status(422).json({
                message: 'Usuário não encontrado'
            });
            return
        }
        res.status(200).json(user)
    } catch (err) {
        res.status(500).json({
            erro: err.message
        });
    }
});

module.exports = router;