const knex = require("../connection");
const tableName = "doctors";
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

class DoctorsModels {
  async addNewDoctors(body) {
    delete body.opt_code;
    const date = Date.now();
    body.doctors_created_at = date;
    body.doctors_updated_at = date;
    return new Promise(async (resolve, reject) => {
      try {
        body.doctors_password = await bcrypt.hash(body.doctors_password, 10);
        const data = await knex(tableName).insert(body);
        const row = await knex(tableName)
          .select("*")
          .where("doctors_id", data[0]);

        return resolve(row);
      } catch (error) {
        console.log("failed add doctor: " + error);
        throw reject(error);
      }
    });
  }

  async loginDoctor(body) {
    return new Promise(async (resolve, reject) => {
      try {
        const row = await knex
          .select("*")
          .from(tableName)
          .where("doctors_phone", body.doctors_phone);
        const verify = await bcrypt.compare(
          body.password,
          row[0].doctors_password
        );
        if (verify) {
          const tokenIncludes = { user: row[0].patient_id };
          const token = jwt.sign(tokenIncludes, process.env.token_secret_key, {
            expiresIn: "50d",
          });

          return resolve({
            token: token,
            data: row,
          });
        } else {
          return reject("تکایە زانیاری درووست تۆماربکە");
        }
      } catch (error) {
        console.log(error);

        return reject("کێشەیەک هەیە");
      }
    });
  }
  async doctors_check_duplicate_phone_number(body) {
    return new Promise(async (resolve, reject) => {
      try {
        const row = await knex
          .select("*")
          .from(tableName)
          .where("doctors_phone", body.doctors_phone);

        if (row.length > 0) {
          return resolve(true);
        } else {
          return resolve(false);
        }
      } catch (error) {
        console.log(error);

        return reject("کێشەیەک هەیە");
      }
    });
  }
  async checkCridintial(body) {
    return new Promise(async (resolve, reject) => {
      try {
        console.log(body);

        var verify = false;
        const row = await knex
          .select("*")
          .from(tableName)
          .where("doctors_phone", body.doctors_phone);
        if (row.length > 0) {
          verify = await bcrypt.compare(body.password, row[0].doctors_password);
          console.log(row);
        }

        if (verify) {
          return resolve(true);
        } else {
          return reject("تکایە زانیاری درووست تۆماربکە");
        }
      } catch (error) {
        console.log(error);

        return reject("کێشەیەک هەیە");
      }
    });
  }

  async getAllDoctors() {
    return await knex(tableName);
  }

  async getByIdDoctors(doctorsId, patient_id) {
    return knex(tableName)
      .join("speciality", "speciality.speciality_id", "doctors.speciality_id")
      .leftJoin("favorites", function () {
        this.on("favorites.doctors_id", "=", "doctors.doctors_id").andOn(
          "favorites.patient_id",
          "=",
          knex.raw("?", [patient_id])
        );
      })
      .where("doctors.doctors_id", doctorsId) // Ensure filtering for the correct doctor
      .select("doctors.*", "speciality.*", "favorites.favorites_id"); // Only select relevant fields
  }

  async deteleDoctors(doctorsId) {
    if (
      (await knex(tableName).where("doctors_id", doctorsId)).map(
        (data) => data.doctors_status
      ) == "deactive"
    ) {
      return "!!ئەم دکتۆرە نەدۆزرایەوە";
    }
    const data = await knex(tableName).where("doctors_id", doctorsId).update({
      doctors_status: "deactive",
    });
    return await knex(tableName).where("doctors_id", doctorsId);
  }
  async updateDoctors(doctorsId, body) {
    const date = Date.now();
    body.doctors_updated_at = date;
    await knex(tableName).where("doctors_id", doctorsId).update(body);
    return await this.getById(doctorsId);
  }

  async getDoctorsBySpeciality(speciality_id) {
    try {
      const doctors = await knex("doctors")
        .join("speciality", "doctors.speciality_id", "speciality.speciality_id")
        .where("speciality.speciality_id", speciality_id)
        .select("doctors.*", "speciality.*", "doctors.doctors_id");

      return doctors;
    } catch (error) {
      console.error("Error fetching doctors by speciality:", error);
      throw error;
    }
  }
  async getDoctorsBySpecialityAndName(speciality_id, name) {
    try {
      const doctors = await knex("doctors")
        .join("speciality", "doctors.speciality_id", "speciality.speciality_id")
        .where("speciality.speciality_id", speciality_id)
        .andWhere(function () {
          this.where("doctors.doctors_fname", "like", `%${name}%`)
            .orWhere("doctors.doctors_mname", "like", `%${name}%`)
            .orWhere("doctors.doctors_lname", "like", `%${name}%`);
        })
        .select("doctors.*", "speciality.*");

      return doctors;
    } catch (error) {
      console.error("Error fetching doctors by speciality and name:", error);
      throw error;
    }
  }
}

module.exports = new DoctorsModels();
