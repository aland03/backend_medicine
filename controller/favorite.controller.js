const favoritesModel = require("../models/favorite.model");

class FavoritesController {
  // Add a favorite
  addFavorite() {
    return (req, res) => {
      const doctors_id = req.params.doctors_id;

      const patient_id = req.user["user"];
      favoritesModel
        .addFavorite(patient_id, doctors_id)
        .then((data) => {
          return res.status(201).json(data);
        })
        .catch((error) => {
          return res.status(500).send("Error adding favorite");
        });
    };
  }

  // Get all favorites by patient
  getFavoritesByPatient() {
    return (req, res) => {
      const { patient_id } = req.user["user"];

      favoritesModel
        .getCheckedDoctorsByPatient(patient_id)
        .then((favorites) => {
          console.log(favorites);
          return res.status(200).json(favorites);
        })
        .catch((error) => {
          console.log(error);

          return res.status(500).send("کێشەیەک هەیە");
        });
    };
  }

  // Remove a favorite
  removeFavorite() {
    return (req, res) => {
      const { favorites_id } = req.params;

      if (!favorites_id) {
        return res.status(400).send("favorites_id is required");
      }

      favoritesModel
        .removeFavorite(favorites_id)
        .then((message) => {
          return res.status(200).send(message);
        })
        .catch((error) => {
          return res.status(500).send("Error removing favorite");
        });
    };
  }
}

module.exports = new FavoritesController();
