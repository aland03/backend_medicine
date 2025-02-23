const controller = require("../controller/doctors.controller");
const express = require("express");
const app = express();

app.get("/get-all", controller.getAllDoctors());

app.get("/get-by-id/:doctors_id", controller.getByIdDoctors());

app.post("/add-new-send-otp", controller.add_doctors_send_opt_code());
app.post("/add-new-verify-otp", controller.addDoctors_verify_otp_code());
app.post("/login-send-otp", controller.login_send_otp_code());
app.post("/login-verify-otp", controller.verify_otp_code());

app.put("/update/:doctors_id", controller.updateDoctors());

app.delete("/delete/:doctors_id", controller.deleteDoctors());

app.get("/doctors/:speciality_id", controller.getDoctorsBySpeciality());

module.exports = app;
