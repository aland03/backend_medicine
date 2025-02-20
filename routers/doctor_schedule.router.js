const controller = require('../controller/doctor_schedule.controller')
const express = require('express')
const app = express()

app.get('/get-all', controller.getAllDoctorSchedule())

app.get('/get-by-id/:schedule_id', controller.getByIdDoctorSchedule())

app.post('/add-new', controller.addNewDoctorSchedule())

app.delete('/delete/:schedule_id', controller.deleteDoctorSchedule())

app.put('/update/:schedule_id', controller.updateDoctorSchedule())

module.exports = app