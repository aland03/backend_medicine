const controller = require("../controller/speciality.controller");
const auth = require("../middlewares/auth_middleware");
const express = require("express");
const app = express();

app.post("/add-speciality", auth.validToken(), controller.addSpeciality());

app.put("/update-speciality/:speciality_id", auth.validToken(), controller.updateSpeciality());

app.get("/get-specialities", auth.validToken(), controller.getAllSpecialities());

app.get("/get-speciality/:speciality_id", auth.validToken(), controller.getSpecialityById());

app.get("/get-speciality-by-name/", auth.validToken(), controller.searchSpecialityByName());

app.delete("/delete-speciality/:speciality_id", auth.validToken(), controller.deleteSpeciality());

module.exports = app;
