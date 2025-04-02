const controller = require('../controller/appointment.controller')
const auth = require('../middlewares/auth_middleware')
const express = require('express')
const app = express()

app.get('/get-all',auth.validToken() ,controller.getAllAppointment())

app.get('/get-by-id/:appointment_id', auth.validToken() , controller.getByIdAppointment())

app.get('/get/by-patient-id/:patirnt_id', auth.validToken(), controller.getByPatientId())

app.get('/get/by-doctor-id/:doctor_id', auth.validToken(), controller.getByDoctorId())

app.post('/add-new', auth.validToken(), controller.addNewAppointmen())

app.put('/update/:appointment_id', auth.validToken(), controller.updateAppointment())

app.delete('/delete/:appointment_id', auth.validToken(), controller.deleteAppointment())


module.exports = app