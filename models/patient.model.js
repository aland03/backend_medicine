const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
require("dotenv").config();

const knex = require("../connection");

class PatientModel {
  async addPatient(body) {
    delete body.opt_code;
    return new Promise(async (resolve, reject) => {
      try {
        body.patient_password = await bcrypt.hash(body.patient_password, 10);
        const data = await knex("patient").insert(body);
        const row = await knex("patient")
          .select("*")
          .where("patient_id", data[0]);

        return resolve(row);
      } catch (error) {
        console.log("failed add patient: " + error);
        throw reject(error);
      }
    });
  }

  async loginPatient(body) {
    return new Promise(async (resolve, reject) => {
      try {
        const row = await knex
          .select("*")
          .from("patient")
          .where("patient_phone", body.patient_phone);
        const verify = await bcrypt.compare(
          body.password,
          row[0].patient_password
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
  async patient_check_duplicate_phone_number(body) {
    return new Promise(async (resolve, reject) => {
      try {
        const row = await knex
          .select("*")
          .from("patient")
          .where("patient_phone", body.patient_phone);

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
          .from("patient")
          .where("patient_phone", body.patient_phone);
        if (row.length > 0) {
          verify = await bcrypt.compare(body.password, row[0].patient_password);
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
}
module.exports = new PatientModel();
