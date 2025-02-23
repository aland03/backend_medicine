const express = require("express");
const controller = require("../controller/favorite.controller");

const router = express.Router();

router.post("/add", controller.addFavorite());

router.get("/patient/:patient_id", controller.getFavoritesByPatient());

router.get("/doctor/:doctor_id", controller.getFavoritesByDoctor());

router.delete("/remove/:favorites_id", controller.removeFavorite());

module.exports = router;
