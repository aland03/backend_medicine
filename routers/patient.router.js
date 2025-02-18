const controller = require("../controller/patient.controller");
const AuthMiddleware = require("../middlewares/auth_middleware");

const express = require("express");
const app = express();

app.post("/add-new-send-otp", controller.add_patient_send_opt_code());
app.post("/add-new-verify-otp", controller.addPatient_verify_otp_code());
app.post("/login-send-otp", controller.login_send_otp_code());
app.post("/login-verify-otp", controller.verify_otp_code());

module.exports = app;
