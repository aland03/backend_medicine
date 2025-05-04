const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
require("dotenv").config();

const knex = require("../connection");



const SpecialityModel = {
  async addSpeciality(body) {
    return new Promise(async (resolve, reject) => {
      try {
        const data = await knex("speciality").insert(body);

        const row = await knex("speciality")
          .where("speciality_id", data[0])
          .first();
        return resolve(row);
      } catch (error) {
        console.log("Failed to add speciality: " + error);
        reject(error);
      }
    });
  },

  async getAllSpecialities() {
    return knex("speciality").select("*");
  },

  // 📌 Get a speciality by ID
  async getSpecialityById(speciality_id) {
    return knex("speciality").where("speciality_id", speciality_id).first();
  },

  async updateSpeciality(speciality_id, body) {
    return new Promise(async (resolve, reject) => {
      try {
        const updated = await knex("speciality")
          .where("speciality_id", speciality_id)
          .update({
            speciality_category_name: body.speciality_category_name,
            speciality_expertise: body.speciality_expertise,
            speciality_updated_at: new Date(),
          });

        if (!updated) return reject("Speciality not found");

        const updatedRow = await knex("speciality")
          .where("speciality_id", speciality_id)
          .first();
        resolve(updatedRow);
      } catch (error) {
        console.log("Failed to update speciality: " + error);
        reject(error);
      }
    });
  },

  async deleteSpeciality(speciality_id) {
    return new Promise(async (resolve, reject) => {
      try {
        const deleted = await knex("speciality")
          .where("speciality_id", speciality_id)
          .del();
        if (!deleted) return reject("Speciality not found");

        resolve({ success: true, message: "Speciality deleted successfully" });
      } catch (error) {
        console.log("Failed to delete speciality: " + error);
        reject(error);
      }
    });
  },

  getDoctorsBySpeciality(speciality_id) {
    return new Promise(async (resolve, reject) => {
      try {
        const doctors = await knex("doctors")
          .where("speciality_id", speciality_id)
          .select("*");
        resolve(doctors);
      } catch (error) {
        console.error("Error fetching doctors by speciality:", error);
        reject(error);
      }
    });
  },
};

module.exports = SpecialityModel;
