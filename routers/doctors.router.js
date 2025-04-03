const controller = require("../controller/doctors.controller");
const express = require("express");
const auth_middleware = require("../middlewares/auth_middleware");
const app = express();

app.get("/get-all", controller.getAllDoctors());

app.get("/get-by-id/:doctors_id",auth_middleware, controller.getByIdDoctors());

app.post("/add-new-send-otp", controller.add_doctors_send_opt_code());
app.post("/add-new-verify-otp", controller.addDoctors_verify_otp_code());
app.post("/login-send-otp", controller.login_send_otp_code());
app.post("/login-verify-otp", controller.verify_otp_code());

app.put("/update/:doctors_id", controller.updateDoctors());

app.delete("/delete/:doctors_id", controller.deleteDoctors());

app.get(
  "/doctors/:speciality_id",
  auth_middleware,
  controller.getDoctorsBySpeciality()
);

app.get(
  "/doctors/:speciality_id/:name",
  auth_middleware,
  controller.getDoctorsByName()
);

module.exports = app;
