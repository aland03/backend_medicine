const joi = require("joi");

class PatientValidation {
  addPatient(body) {
    const schema = joi.object({
      // patient_username: joi.string().required(),
      patient_password: joi.string().min(8).required(),
      patient_fname: joi.string().required(),
      patient_mname: joi.string().required(),
      patient_lname: joi.string().required(),
      // ema sfrakay yakam warnagrin
      patient_phone: joi.string().length(10).required(),
      patient_age: joi.string().required(),
      patient_blood_type: joi.string().required(),
      patient_weight: joi.string().required(),
      // patient_height: joi.string().required(),
      patient_address: joi.string().required(),
      patient_gender: joi.string().valid("male", "female").required(),
      opt_code: joi.string().length(6).optional(),
    });
    return schema.validate(body);
  }
  loginPatient(body) {
    const schema = joi.object({
      password: joi.string().required(),
      patient_phone: joi.string().length(10).required(),
      opt_code: joi.string().optional().length(6),
    });
    return schema.validate(body);
  }
}

module.exports = new PatientValidation();


// patient user name lagal heights labda 