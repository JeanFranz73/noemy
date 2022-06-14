const express = require('express');
const router = express.Router();
const servers = require('../services/servers');

router.get("/", async (req, res) => {
    res.status(422).json(
        {
            message: "Servidor não especificado"
        }
    );
});

router.get('/:id', async (req, res) => {
    try {
        const server = await servers.getServer(req.params.id);
        if (!server) {
            res.status(422).json({
                message: "Servidor não encontrado"
            });
            return
        }
        res.status(200).json(server);
    } catch (err) {
        console.error(`Erro ao selecionar servidor: `, err);
        res.status(500).json({
            erro: err.message
        });
    }
});

module.exports = router;