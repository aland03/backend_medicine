const express = require("express");
const controller = require("../controller/favorite.controller");
const auth_middleware = require("../middlewares/auth_middleware");

const router = express.Router();

router.post("/add/:doctors_id", auth_middleware, controller.addFavorite());

router.get("/patient/:patient_id", controller.getFavoritesByPatient());

router.get(
  "/doctor",
  auth_middleware,
  controller.getFavoritesByPatient()
);

router.delete(
  "/remove/:favorites_id",
  auth_middleware,
  controller.removeFavorite()
);

module.exports = router;
