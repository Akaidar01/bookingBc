const express = require('express')

const router = express.Router()

const building = require('../../controller/building.controller');

    router.get('/building', building.findAll);

    router.post('/', building.create);

    router.get('/:id', building.findById);

    router.put('/:id', building.update);

    router.delete('/building/:id', building.delete);

module.exports = router