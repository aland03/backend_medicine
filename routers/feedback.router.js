const controller = require('../controller/feedback.controller')
const auth = require("../middlewares/auth_middleware");
const express = require('express')
const app = express()

app.get('/get-all', auth.validToken(), controller.getAllFeedback())

app.get('/get-by-id/:feedback_id', auth.validToken(), controller.getByIdFeedback())

app.get('/get-by-patient-id/:patient_id', auth.validToken(), controller.getByPatientId())

app.get('/get-by-appointment-id/:appointment_id', auth.validToken(), controller.getByAppointmentId())

app.post('/add-new', auth.validToken(), controller.addNewFeedback())

app.put('/update/:feedback_id', auth.validToken(), controller.updateFeedback())

app.delete('/delete/:feedback_id', auth.validToken(), controller.deleteFeedback())

module.exports = app;