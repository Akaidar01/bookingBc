const express = require('express')

const router = express.Router()

const client = require('../../controller/client.controller');

    router.get('/clients', client.findAll);

    router.post('/', client.create);

    router.get('/:id', client.findById);

    router.put('/:id', client.update);

    router.delete('/clientsController/:id', client.delete);

module.exports = router