const controller = require('../controller/appointment.controller')
const express = require('express')
const app = express()

app.get('/get-all', controller.getAllAppointment())

app.get('/get-by-id/:appointment_id', controller.getByIdAppointment())

app.post('/add-new', controller.addNewAppointmen())

app.put('/update/:appointment_id', controller.updateAppointment())

app.delete('/delete/:appointment_id', controller.deleteAppointment())

module.exports = app