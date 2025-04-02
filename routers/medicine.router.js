const controller = require('../controller/medicine.controller')

const auth = require("../middlewares/auth_middleware");
const express = require('express')
const app = express()

app.get('/get-all', auth.validToken(), controller.getAllMedicine())

app.get('/get-by-id/:medicine_id', auth.validToken(), controller.getByIdMedicine())

app.post('/add-new', auth.validToken(), controller.addNewMedicine())

app.put('/update/:medicine_id', auth.validToken(), controller.updateMedicine())

app.delete('/delete/:medicine_id', auth.validToken(), controller.deleteMedicine())

module.exports = app