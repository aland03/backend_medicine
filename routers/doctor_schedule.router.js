const controller = require('../controller/doctor_schedule.controller')
const auth = require('../middlewares/auth_middleware')
const express = require('express')
const app = express()

app.get('/get-all', auth.validToken(), controller.getAllDoctorSchedule())

app.get('/get-by-id/:schedule_id', auth.validToken(), controller.getByIdDoctorSchedule())

app.get('/get-by-doctor-id/:doctor_id', auth.validToken(), controller.getByDoctorId())

app.post('/add-new', auth.validToken(), controller.addNewDoctorSchedule())

app.delete('/delete/:schedule_id', auth.validToken(), controller.deleteDoctorSchedule())

app.put('/update/:schedule_id', auth.validToken(), controller.updateDoctorSchedule())


module.exports = app