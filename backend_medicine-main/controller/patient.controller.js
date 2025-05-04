const patientModel = require("../models/patient.model");
const patientValidation = require("../validation/patient.validation");
const auth = require("../auth/otp_code");

require("dotenv").config();
class PatientController {
  addPatient_verify_otp_code() {
    return async (req, res) => {
      let body = req.body;

      if (patientValidation.addPatient(body).error) {
        return res
          .status(403)
          .send(patientValidation.addPatient(body).error.details[0].message);
      }

      await auth
        .verifyOTP(body.patient_phone, body.opt_code)
        .then(async (mes) => {
          if (mes.success == false) {
            return res.status(403).send(mes.message);
          } else {
            await patientModel
              .addPatient(body)
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
  add_patient_send_opt_code() {
    return async (req, res) => {
      let body = req.body;

      if (patientValidation.addPatient(body).error) {
        return res
          .status(403)
          .send(patientValidation.addPatient(body).error.details[0].message);
      }
      // check for duplicates phone number
      await patientModel
        .patient_check_duplicate_phone_number(body)
        .then(async (data) => {
          if (data == false) {
            // send opt code if not exist duplicate phone number
            await auth
              .sendSMS(body.patient_phone)
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

      const validation = patientValidation.loginPatient(body);
      if (validation.error) {
        return res.status(403).send(validation.error.details[0].message);
      }

      try {
        // check for duplicates phone number
        await patientModel
          .checkCridintial(body)
          .then(async (data) => {
            // send opt code if not exist duplicate phone number
            await auth
              .sendSMS(body.patient_phone)
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

      const validation = patientValidation.loginPatient(body);
      if (validation.error) {
        return res.status(403).send(validation.error.details[0].message);
      }

      try {
        await auth
          .verifyOTP(body.patient_phone, body.opt_code)
          .then(async (mes) => {
            if (mes.success == false) {
              return res.status(403).send(mes.message);
            } else {
              await patientModel
                .loginPatient(body)
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

  getAllPatient = () => {
    return (req, res) => {
      models.getAllPatient().then(data => {
        data =
          res.send(data)
      }).catch((err) => {
        console.log(err)
        res.status(403).send({
          message: 'some thing with wrong'
        })
      })
    }
  }
  
  getByIdPatient = () => {
    return (req, res) => {
      const patientId = req.params.patinet_id
      models.getByIdPatient(patientId).then(data => {
        res.send(data)
      }).catch((err) => {
        console.log(err)
        res.status(403).send({
          message: 'some thing with wrong'
        })
      })
    }
  }
  
  addNewPatient = () => {
    return (req, res) => {
      const body = req.body
      if (validation.addSchedule(body).error) {
        res.send(validation.addSchedule(body).error.details[0].message)
      } else {
        models.addNewPatient(body).then(data => {
          res.send(data)
        }).catch(err => {
          console.log(err);
          res.status(403).send({
            message: "something with wrong"
          })
        })
      }
    }
  }
  
  deletePatient = () => {
    return (req, res) => {
      const patientId = req.params.patinet_id  // garandnaway paramiterek la routerakawa
      models.detelePatient(patientId).then(data => {
        res.send(data)
      }).catch((err) => {
        console.log(err)
        res.status(403).send({
          message: 'some thing with wrong'
        })
      })
    }
  }
  
  updatePatient = () => {
    return (req, res) => {
      const patientId = req.params.patinet_id
      const body = req.body
      if (validation.updateSchedule(body).error) {
        res.send(validation.updateSchedule(body).error.details[0].message)
      } else {
        models.updatePatient(patientId, body).then(data => {
          res.send(data)
        }).catch(err => {
          console.log(err);
          res.status(403).send({
            message: "something with wrong"
          })
        })
      }
    }
  }
}

module.exports = new PatientController();
