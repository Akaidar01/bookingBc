const express = require('express')

const router = express.Router()

const office = require('../../controller/office.controller');

    router.get('/', office.findAll);

    router.post('/', office.create);

    router.get('/:id', office.findById);

    router.put('/:id', office.update);

    router.delete('/:id', office.delete);

module.exports = router