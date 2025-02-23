const joi = require("joi");

class SpecialityValidation {
  // 📌 Validation for adding a new speciality
  addSpeciality(body) {
    const schema = joi.object({
      speciality_category_name: joi.string().required(),
      speciality_expertise: joi.string().required(),
    });
    return schema.validate(body);
  }

  // 📌 Validation for updating a speciality
  updateSpeciality(body) {
    const schema = joi.object({
      speciality_category_name: joi.string().optional(),
      speciality_expertise: joi.string().optional(),
    });
    return schema.validate(body);
  }

  // 📌 Validation for fetching a single speciality by ID
  getSpecialityById(params) {
    const schema = joi.object({
      speciality_id: joi.number().integer().positive().required(),
    });
    return schema.validate(params);
  }

  // 📌 Validation for deleting a speciality
  deleteSpeciality(params) {
    const schema = joi.object({
      speciality_id: joi.number().integer().positive().required(),
    });
    return schema.validate(params);
  }
}

module.exports = new SpecialityValidation();
