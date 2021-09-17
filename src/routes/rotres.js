const express = require('express')

const router = express.Router()

const employeeController = require('../controllers/employee.controller');

//#region Employee
    router.get('/', employeeController.findAll);

    router.post('/', employeeController.create);

    router.get('/:id', employeeController.findById);

    router.put('/:id', employeeController.update);

    router.delete('/:id', employeeController.delete);
//#endregion

//#region Office
router.get('/offices', employeeController.findAll);
//#endregion


module.exports = router