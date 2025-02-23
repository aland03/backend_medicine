const knex = require('../connection')

class FavoritesModel {
  addFavorite(favoriteData) {
    return new Promise(async (resolve, reject) => {
      try {
        const data = await knex("favorites")
          .insert(favoriteData)
          .returning("*");
        resolve(data);
      } catch (error) {
        console.error("Error adding favorite:", error);
        reject(error);
      }
    });
  }

  getFavoritesByPatient(patient_id) {
    return new Promise(async (resolve, reject) => {
      try {
        const favorites = await knex("favorites")
          .join("doctors", "favorites.doctors_id", "doctors.doctor_id")
          .select(
            "favorites.favorites_id",
            "favorites.created_at",
            "favorites.updated_at",
            "doctors.doctor_id",
            "doctors.doctor_name",
            "doctors.speciality_id"
          )
          .where("favorites.patient_id", patient_id);

        resolve(favorites);
      } catch (error) {
        console.error("Error fetching favorites for patient:", error);
        reject(error);
      }
    });
  }

  getFavoritesByDoctor(doctor_id) {
    return new Promise(async (resolve, reject) => {
      try {
        const favorites = await knex("favorites")
          .join("patients", "favorites.patient_id", "patients.patient_id")
          .select(
            "favorites.favorites_id",
            "favorites.created_at",
            "favorites.updated_at",
            "patients.patient_id",
            "patients.patient_fname",
            "patients.patient_lname"
          )
          .where("favorites.doctors_id", doctor_id);

        resolve(favorites);
      } catch (error) {
        console.error("Error fetching favorites for doctor:", error);
        reject(error);
      }
    });
  }

  removeFavorite(favorites_id) {
    return new Promise(async (resolve, reject) => {
      try {
        await knex("favorites").where("favorites_id", favorites_id).del();
        resolve("Favorite removed successfully");
      } catch (error) {
        console.error("Error removing favorite:", error);
        reject(error);
      }
    });
  }
}

module.exports = new FavoritesModel();
