const express = require('express')

const router = express.Router()

const Office = require('../../controller/office.controller');

    router.get('/filter', Office.filter);

    router.get('/', Office.findAll);

    router.post('/', Office.create);

    router.get('/:id', Office.findById);

    router.put('/:id', Office.update);

    router.delete('/:id*?', Office.delete);

    

module.exports = router