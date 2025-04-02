const controller = require("../controller/favorite.controller");
const auth = require("../middlewares/auth_middleware");
const express = require("express");

const router = express.Router();

router.post("/add", auth.validToken(), controller.addFavorite());

router.get("/patient/:patient_id", auth.validToken(), controller.getFavoritesByPatient());

router.get("/doctor/:doctor_id", auth.validToken(), controller.getFavoritesByDoctor());

router.delete("/remove/:favorites_id", auth.validToken(), controller.removeFavorite());


module.exports = router;
