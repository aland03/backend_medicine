const validation = require("../validation/doctors.validate");
const models = require("../models/doctors.models");
const auth = require("../auth/otp_code");
const doctorsModels = require("../models/doctors.models");

class DoctorsController {
  addDoctors_verify_otp_code() {
    return async (req, res) => {
      let body = req.body;

      if (validation.addDoctors(body).error) {
        return res
          .status(403)
          .send(validation.addDoctors(body).error.details[0].message);
      }

      await auth
        .verifyOTP(body.doctors_phone, body.opt_code)
        .then(async (mes) => {
          if (mes.success == false) {
            return res.status(403).send(mes.message);
          } else {
            await models
              .addNewDoctors(body)
              .then((data) => {
                return res.status(200).send(data);
              })
              .catch((error) => {
                return res.status(403).send(error.message);
              });
          }
        });
    };
  }
  add_doctors_send_opt_code() {
    return async (req, res) => {
      let body = req.body;

      if (validation.addDoctors(body).error) {
        return res
          .status(403)
          .send(validation.addDoctors(body).error.details[0].message);
      }
      // check for duplicates phone number
      await models
        .doctors_check_duplicate_phone_number(body)
        .then(async (data) => {
          if (data == false) {
            // send opt code if not exist duplicate phone number
            await auth
              .sendSMS(body.doctors_phone)
              .then((data) => {
                return res.status(200).send(data.message);
              })
              .catch((error) => {
                return res.status(403).send(error.message);
              });
          } else {
            return res.status(403).send("پێشتر ئەم ژمارە مۆبایلە تۆمارکراوە");
          }
        })
        .catch((error) => {
          return res.status(403).send(error);
        });
    };
  }

  login_send_otp_code() {
    return async (req, res) => {
      var body = req.body;

      const validationerr = validation.loginDoctor(body);
      if (validationerr.error) {
        return res.status(403).send(validationerr.error.details[0].message);
      }

      try {
        // check for duplicates phone number
        await models
          .checkCridintial(body)
          .then(async (data) => {
            // send opt code if not exist duplicate phone number
            await auth
              .sendSMS(body.doctors_phone)
              .then((data) => {
                return res.status(200).send(data.message);
              })
              .catch((error) => {
                return res.status(403).send(error.message);
              });
          })
          .catch((error) => {
            return res.status(403).send(error);
          });
      } catch (error) {
        console.error("Error sending OTP:", error.message);
        return res.status(403).send("کێشەیەک هەیە");
      }
    };
  }

  verify_otp_code() {
    return async (req, res) => {
      var body = req.body;

      const validationerr = validation.loginDoctor(body);
      if (validationerr.error) {
        return res.status(403).send(validationerr.error.details[0].message);
      }

      try {
        await auth
          .verifyOTP(body.doctors_phone, body.opt_code)
          .then(async (mes) => {
            if (mes.success == false) {
              return res.status(403).send(mes.message);
            } else {
              await models
                .loginDoctor(body)
                .then((data) => {
                  return res.status(200).send(data);
                })
                .catch((err) => {
                  return res.status(403).send(err);
                });
            }
          });
      } catch (error) {
        console.error("Error verifying OTP:", error.message);
        return res.status(403).send("کێشەیەک هەیە");
      }
    };
  }

  getAllDoctors = () => {
    return (req, res) => {
      models
        .getAllDoctors()
        .then((data) => {
          res.send(data);
        })
        .catch((err) => {
          console.log(err);
          res.status(403).send({
            message: "some thing with wrong",
          });
        });
    };
  };

  getDoctorsBySpeciality() {
    return (req, res) => {
      const { speciality_id } = req.params;

      doctorsModels
        .getDoctorsBySpeciality(speciality_id)
        .then((doctors) => {
          return res.status(200).json(doctors);
        })
        .catch((error) => {
          return res.status(500).send("نەتوانرا ئەنجام بدرێت");
        });
    };
  }
  getDoctorsByName() {
    return (req, res) => {
      const { speciality_id, name } = req.params;

      doctorsModels
        .getDoctorsBySpecialityAndName(speciality_id, name)
        .then((doctors) => {
          return res.status(200).json(doctors);
        })
        .catch((error) => {
          return res.status(500).send("نەتوانرا ئەنجام بدرێت");
        });
    };
  }

  getByIdDoctors = () => {
    return (req, res) => {
      const doctorsId = req.params.doctors_id;
      const patient_id = req.user["user"];
      models
        .getByIdDoctors(doctorsId, patient_id)
        .then((data) => {
          res.send(data);
        })
        .catch((err) => {
          console.log(err);
          res.status(403).send({
            message: "some thing with wrong",
          });
        });
    };
  };

  deleteDoctors = () => {
    return (req, res) => {
      const doctorsId = req.params.doctors_id;
      models
        .deteleDoctors(doctorsId)
        .then((data) => {
          res.send(data);
        })
        .catch((err) => {
          console.log(err);
          res.status(403).send({
            message: "some thing with wrong",
          });
        });
    };
  };

  updateDoctors = () => {
    return (req, res) => {
      const doctorsId = req.params.doctors_id;
      const body = req.body;
      if (validation.updateDoctors(body).error) {
        res.send(validation.updateDoctors(body).error.details[0].message);
      } else {
        models
          .updateDoctors(doctorsId, body)
          .then((data) => {
            res.send(data);
          })
          .catch((err) => {
            console.log(err);
            res.status(403).send({
              message: "something with wrong",
            });
          });
      }
    };
  };
}

module.exports = new DoctorsController();
