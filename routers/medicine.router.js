const controller = require('../controller/medicine.controller')
const express = require('express')
const app = express()

app.get('/get-all', controller.getAllMedicine())

app.get('/get-by-id/:medicine_id', controller.getByIdMedicine())

app.post('/add-new', controller.addNewMedicine())

app.put('/update/:medicine_id', controller.updateMedicine())

app.delete('/delete/:medicine_id', controller.deleteMedicine())

module.exports = app