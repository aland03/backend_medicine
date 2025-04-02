const specialityValidation = require("../validation/speciality.validation");
const SpecialityModel = require("../models/speciality.model");

require("dotenv").config();

class SpecialityController {
  // 📌 Add Speciality
  addSpeciality() {
    return async (req, res) => {
      const body = req.body;

      try {
        if (specialityValidation.addSpeciality(body).error) {
          return res
            .status(403)
            .send(
              specialityValidation.addSpeciality(body).error.details[0].message
            );
        }

        await SpecialityModel.addSpeciality(body)
          .then((data) => {
            return res.status(201).send(data);
          })
          .catch((err) => {
            return res.status(400).send(err);
          });
      } catch (error) {
        console.error("Error adding speciality:", error.message);
        return res.status(500).send("Internal Server Error");
      }
    };
  }

  // 📌 Get All Specialities
  getAllSpecialities() {
    return async (req, res) => {
      try {
        await SpecialityModel.getAllSpecialities()
          .then((data) => {
            return res.status(200).send(data);
          })
          .catch((err) => {
            return res.status(400).send(err);
          });
      } catch (error) {
        console.error("Error fetching specialities:", error.message);
        return res.status(500).send("Internal Server Error");
      }
    };
  }

  // 📌 Get Speciality by ID
  getSpecialityById() {
    return async (req, res) => {
      const { speciality_id } = req.params;

      try {
        if (specialityValidation.getSpecialityById(body).error) {
          return res
            .status(403)
            .send(
              specialityValidation.getSpecialityById(body).error.details[0]
                .message
            );
        }

        await SpecialityModel.getSpecialityById(speciality_id)
          .then((data) => {
            if (!data) return res.status(404).send("Speciality not found");
            return res.status(200).send(data);
          })
          .catch((err) => {
            return res.status(400).send(err);
          });
      } catch (error) {
        console.error("Error fetching speciality:", error.message);
        return res.status(500).send("Internal Server Error");
      }
    };
  }
  searchSpecialityByName() {
    return async (req, res) => {
      try {
        if (specialityValidation.updateSpeciality(req.body).error) {
          return res
            .status(403)
            .send(
              specialityValidation.updateSpeciality(req.body).error.details[0]
                .message
            );
        }

        await SpecialityModel.searchSpecialityByName(speciality_id)
          .then((data) => {
            if (!data) return res.status(404).send("Speciality not found");
            return res.status(200).send(data);
          })
          .catch((err) => {
            return res.status(400).send(err);
          });
      } catch (error) {
        console.error("Error fetching speciality:", error.message);
        return res.status(500).send("Internal Server Error");
      }
    };
  }

  // 📌 Update Speciality
  updateSpeciality() {
    return async (req, res) => {
      const { speciality_id } = req.params;
      const body = req.body;

      try {
        if (specialityValidation.updateSpeciality(body).error) {
          return res
            .status(403)
            .send(
              specialityValidation.updateSpeciality(body).error.details[0]
                .message
            );
        }

        await SpecialityModel.updateSpeciality(speciality_id, body)
          .then((data) => {
            return res.status(200).send(data);
          })
          .catch((err) => {
            return res.status(400).send(err);
          });
      } catch (error) {
        console.error("Error updating speciality:", error.message);
        return res.status(500).send("Internal Server Error");
      }
    };
  }

  // 📌 Delete Speciality
  deleteSpeciality() {
    return async (req, res) => {
      const { speciality_id } = req.params;

      try {
        await SpecialityModel.deleteSpeciality(speciality_id)
          .then((data) => {
            return res.status(200).send(data);
          })
          .catch((err) => {
            return res.status(400).send(err);
          });
      } catch (error) {
        console.error("Error deleting speciality:", error.message);
        return res.status(500).send("Internal Server Error");
      }
    };
  }
}

module.exports = new SpecialityController();
