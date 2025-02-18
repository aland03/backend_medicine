const joi = require("joi");

class DoctorsValidation {
  addDoctors(body) {
    const schema = joi.object({
      doctors_username: joi.string().required(),
      doctors_password: joi.string().min(8).required(),
      doctors_fname: joi.string().required(),
      doctors_mname: joi.string().required(),
      doctors_lname: joi.string().required(),
      doctors_email: joi.string().required(),
      doctors_phone: joi.string().length(10).required(),
      doctors_address: joi.string().required(),
      doctors_id_of_ministry: joi.number().required(),
      doctors_cv: joi.string().required(),
      doctors_profile_pct: joi.string().required(),
      speciality_id: joi.number().required(),
      admin_id: joi.number().required(),
      opt_code: joi.string().length(6).optional(),
    });
    return schema.validate(body);
  }
  loginDoctor(body) {
    const schema = joi.object({
      password: joi.string().required(),
      doctors_phone: joi.string().length(10).required(),
      opt_code: joi.string().optional().length(6),
    });
    return schema.validate(body);
  }
  updateDoctors(body) {
    const schema = joi.object({
      doctors_username: joi.string().optional(),
      doctors_password: joi.string().optional(),
      doctors_fname: joi.string().optional(),
      doctors_mname: joi.string().optional(),
      doctors_lname: joi.string().optional(),
      doctors_email: joi.string().optional(),
      doctors_phone: joi.number().optional(),
      doctors_address: joi.string().optional(),
      doctors_id_of_ministry: joi.number().required(),
      doctors_cv: joi.string().optional(),
      doctors_profile_pct: joi.string().optional(),
      speciality_id: joi.number().optional(),
      admin_id: joi.number().optional(),
    });
    return schema.validate(body);
  }
}

module.exports = new DoctorsValidation();
