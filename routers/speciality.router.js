const controller = require("../controller/speciality.controller");
const AuthMiddleware = require("../middlewares/auth_middleware");

const express = require("express");
const app = express();

app.post("/add-speciality", controller.addSpeciality());

app.put("/update-speciality/:speciality_id", controller.updateSpeciality());

app.get("/get-specialities", controller.getAllSpecialities());

app.get("/get-speciality/:speciality_id", controller.getSpecialityById());

app.get("/get-speciality-by-name/", controller.searchSpecialityByName());

app.delete("/delete-speciality/:speciality_id", controller.deleteSpeciality());

module.exports = app;
