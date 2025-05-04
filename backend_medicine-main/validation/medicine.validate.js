const joi = require('joi')

class MedicineValidations{
    addMedicine(body){
        const schema = joi.object({
            doctors_id: joi.number().required(),
            patient_id: joi.number().required()
        })
        return schema.validate(body)
    }
    updateMedicine(body){
        const schema = joi.object({
            doctors_id: joi.number().optional(),
            patient_id: joi.number().optional()
        })
        return schema.validate(body)
    }
}

module.exports = new MedicineValidations