const favoritesModel = require("../models/favorite.model");

class FavoritesController {
  // Add a favorite
  addFavorite() {
    return (req, res) => {
      const favoriteData = req.body;

      favoritesModel
        .addFavorite(favoriteData)
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
      const { patient_id } = req.params;

      if (!patient_id) {
        return res.status(400).send("patient_id is required");
      }

      favoritesModel
        .getFavoritesByPatient(patient_id)
        .then((favorites) => {
          return res.status(200).json(favorites);
        })
        .catch((error) => {
          return res.status(500).send("Error fetching favorites for patient");
        });
    };
  }

  // Get all favorites by doctor
  getFavoritesByDoctor() {
    return (req, res) => {
      const { doctor_id } = req.params;

      if (!doctor_id) {
        return res.status(400).send("doctor_id is required");
      }

      favoritesModel
        .getFavoritesByDoctor(doctor_id)
        .then((favorites) => {
          return res.status(200).json(favorites);
        })
        .catch((error) => {
          return res.status(500).send("Error fetching favorites for doctor");
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
