const express = require('express');
const { Server } = require('../models/Server');
const router = express.Router();
const servers = require('../services/servers');

router.get("/", async (req, res) => {
    res.status(422).json(
        {
            message: "Servidor não especificado"
        }
    );
});

router.get('/all', async (req, res) => {
    try {
        const allServers = await servers.getAll();
        res.status(200).json(allServers);
    } catch (err) {
        console.error(`Erro ao selecionar servidores: `, err);
        res.status(500).json({
            message: "Erro ao selecionar servidores"
        });
    }
});

router.get('/:id', async (req, res) => {
    const id = req.params.id;

    try {
        const server = await servers.getServer(id);
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
            message: "Erro ao selecionar servidor"
        });
    }
});

router.post('/register', async (req, res) => {
    try {
        const serverExists = await servers.getServer(req.body.server_id);
        if (serverExists) {
            res.status(409).json({
                message: "Servidor já registrado"
            });
            return
        }

        const server = new Server(req.body)

        await servers.saveServer(server);
    } catch (err) {
        console.error(`Erro ao registrar servidor: `, err);
        res.status(500).json({
            message: "Erro ao registrar servidor"
        });
    }
});

router.patch('/:id', async (req, res) => {
    const id = req.params.id;
    const server = req.body;

    try {
        const updatedServer = await servers.updateServer(id, server);
        
        if (updatedServer.matchedCount === 0) {
            res.status(422).json({
                message: "Servidor não encontrado"
            });
            return
        }
        res.status(200).json({
            message: "Servidor atualizado com sucesso"
        });
    } catch (err) {
        res.status(500).json({
            message: "Erro ao atualizar servidor"
        });
    }
});

module.exports = router;