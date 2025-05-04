const express = require("express");
const app = express();
const port = 5000;

var bodyParser = require("body-parser");
app.use(bodyParser.json());

const admin = require("./routers/admin.router");
app.use("/admin", admin);

const appointment = require("./routers/appointment.router");
app.use("/appointment", appointment);

const doctors = require("./routers/doctors.router");
app.use("/doctors", doctors);

// const doctorsNotification = require('./routers/doctors_notification.router')
// app.use('/doctors_notification', doctorsNotification)

const doctorSchedule = require("./routers/doctor_schedule.router");
app.use("/doctor_schedule", doctorSchedule);

const feedback = require("./routers/feedback.router");
app.use("/feedback", feedback);

const medicine = require("./routers/medicine.router");
app.use("/medicine", medicine);

const patient = require("./routers/patient.router");
app.use("/patient", patient);

// const patientNotification = require('./routers/patient_notification.router')
// app.use('/patient_notification', patientNotification)

const radiology = require("./routers/radiology.router");
app.use("/radiology", radiology);

const speciality = require("./routers/speciality.router");
app.use("/speciality", speciality);

const favorite = require("./routers/favorite.router");
app.use("/favorites", favorite);

const advertisement = require()
app.use('/adv', advertisement)

app.listen(port, () => {
  console.log("port " + port);
});
